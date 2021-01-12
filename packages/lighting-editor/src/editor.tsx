import { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
// Import the Slate components and React plugin.
import { Editable, withReact, Slate } from 'slate-react'
// Import the Slate editor factory.
import { createEditor, Node } from 'slate'
import { withHistory } from 'slate-history'
import styled from 'styled-components'

import Toolbar from './components/Toolbar'
import BlockButton from './components/BlockButton'
import { toggleMark, MarkButton } from './components/MarkButton'
import { withImages, ImageButton } from './components/ImageButton'
import ImageElement from './components/ImageElement'

const HOTKEYS: { [index: string]: string } = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

export interface EditorContainerProps {
  width?: string
  height?: string
  fontSize?: string
}

const EditorContainer = styled.div`
  width: ${(props: EditorContainerProps) => props.width ? props.width : '600px'};
`

interface EditorProps {
  content?: Node[]
  width?: string
  uploadImg?: Function
}

// LightingEditor
const LightingEditor = (editProps: EditorProps) => {
  const [value, setValue] = useState<Node[]>(editProps.content ?? [{
    type: 'paragraph',
    children: [ {text: ''}]
  }])
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), [])

  return (
    <EditorContainer width={editProps.width ?? '800px'} className="slate-editor">
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Toolbar>
          <BlockButton format="heading-one" icon="fas fa-heading" />
          <BlockButton format="heading-two" icon="fas fa-heading" />
          <MarkButton format="bold" icon="fas fa-bold" />
          <MarkButton format="italic" icon="fas fa-italic" />
          <MarkButton format="underline" icon="fas fa-underline" />
          <MarkButton format="code" icon="fas fa-code" />
          <BlockButton format="block-quote" icon="fas fa-quote-left" />
          <ImageButton icon="fas fa-image" uploadFn={editProps.uploadImg} />
          <BlockButton format="numbered-list" icon="fas fa-list-ol" />
          <BlockButton format="bulleted-list" icon="fas fa-list-ul" />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event as any)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </EditorContainer>
  )
}

const Element = ({ attributes, children, element }: any) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    case 'image':
      let props = { attributes, children, element }
      return <ImageElement { ...props } />
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export {
  LightingEditor
}
