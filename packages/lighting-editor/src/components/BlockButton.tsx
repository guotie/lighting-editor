import { Editor, Transforms, Element as SlateElement } from 'slate'
import { useSlate, ReactEditor } from 'slate-react'

import Button from './Button'
import {FormatIcon} from './Props'

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const isBlockActive = (editor: ReactEditor, format: string) => {
    const [match] = Editor.nodes(editor, {
      match: n =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    })
  
    return !!match
}
  
const toggleBlock = (editor: ReactEditor, format: string) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)
  
    console.log('toggleBlock: selection:', editor.selection)
    Transforms.unwrapNodes(editor, {
      match: n =>
        LIST_TYPES.includes(
          // @ts-ignore
          !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
        ),
      split: true,
    })
    const newProperties: Partial<SlateElement> = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
    Transforms.setNodes(editor, newProperties)
  
    if (!isActive && isList) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block)
    }
}

const BlockButton = ({ format, icon }: FormatIcon) => {
    const editor = useSlate()
    return (
      <Button
        active={isBlockActive(editor, format)}
        onMouseDown={(event: any) => {
          event.preventDefault()
          toggleBlock(editor, format)
        }}
      >
      <i className={icon}></i>
      </Button>
    )
  }

export default BlockButton
