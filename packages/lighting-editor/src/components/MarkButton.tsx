import { Editor } from 'slate'
import { useSlate, ReactEditor } from 'slate-react'

import Button from './Button'
import {FormatIcon} from './Props'

const toggleMark = (editor: ReactEditor, format: string) => {
    const isActive = isMarkActive(editor, format)
  
    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
}

const isMarkActive = (editor: ReactEditor, format: string) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

const MarkButton = ({ format, icon }: FormatIcon) => {
    const editor = useSlate()
    return (
      <Button
        active={isMarkActive(editor, format)}
        onMouseDown={(event: any) => {
          event.preventDefault()
          toggleMark(editor, format)
        }}
      >
      <i className={icon}></i>
      </Button>
    )
  }

export {
    toggleMark,
    MarkButton
}