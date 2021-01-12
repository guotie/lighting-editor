import { jsx as _jsx } from "react/jsx-runtime";
import { Editor } from 'slate';
import { useSlate } from 'slate-react';
import Button from './Button';
const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
        Editor.removeMark(editor, format);
    }
    else {
        Editor.addMark(editor, format, true);
    }
};
const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};
const MarkButton = ({ format, icon }) => {
    const editor = useSlate();
    return (_jsx(Button, Object.assign({ active: isMarkActive(editor, format), onMouseDown: (event) => {
            event.preventDefault();
            toggleMark(editor, format);
        } }, { children: _jsx("i", { className: icon }, void 0) }), void 0));
};
export { toggleMark, MarkButton };
