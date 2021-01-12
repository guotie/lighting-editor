import { jsx as _jsx } from "react/jsx-runtime";
import { Editor, Transforms, Element as SlateElement } from 'slate';
import { useSlate } from 'slate-react';
import Button from './Button';
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: n => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });
    return !!match;
};
const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);
    console.log('toggleBlock: selection:', editor.selection);
    Transforms.unwrapNodes(editor, {
        match: n => LIST_TYPES.includes(
        // @ts-ignore
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
        split: true,
    });
    const newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};
const BlockButton = ({ format, icon }) => {
    const editor = useSlate();
    return (_jsx(Button, Object.assign({ active: isBlockActive(editor, format), onMouseDown: (event) => {
            event.preventDefault();
            toggleBlock(editor, format);
        } }, { children: _jsx("i", { className: icon }, void 0) }), void 0));
};
export default BlockButton;
