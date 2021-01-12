import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from 'react';
import isHotkey from 'is-hotkey';
// Import the Slate components and React plugin.
import { Editable, withReact, Slate } from 'slate-react';
// Import the Slate editor factory.
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import styled from 'styled-components';
import Toolbar from './components/Toolbar';
import BlockButton from './components/BlockButton';
import { toggleMark, MarkButton } from './components/MarkButton';
import { withImages, ImageButton } from './components/ImageButton';
import ImageElement from './components/ImageElement';
const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};
const EditorContainer = styled.div `
  width: ${(props) => props.width ? props.width : '600px'};
`;
// LightingEditor
const LightingEditor = (editProps) => {
    var _a, _b;
    const [value, setValue] = useState((_a = editProps.content) !== null && _a !== void 0 ? _a : [{
            type: 'paragraph',
            children: [{ text: '' }]
        }]);
    const renderElement = useCallback(props => _jsx(Element, Object.assign({}, props), void 0), []);
    const renderLeaf = useCallback(props => _jsx(Leaf, Object.assign({}, props), void 0), []);
    const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), []);
    return (_jsx(EditorContainer, Object.assign({ width: (_b = editProps.width) !== null && _b !== void 0 ? _b : '800px', className: "slate-editor" }, { children: _jsxs(Slate, Object.assign({ editor: editor, value: value, onChange: value => setValue(value) }, { children: [_jsxs(Toolbar, { children: [_jsx(BlockButton, { format: "heading-one", icon: "fas fa-heading" }, void 0),
                        _jsx(BlockButton, { format: "heading-two", icon: "fas fa-heading" }, void 0),
                        _jsx(MarkButton, { format: "bold", icon: "fas fa-bold" }, void 0),
                        _jsx(MarkButton, { format: "italic", icon: "fas fa-italic" }, void 0),
                        _jsx(MarkButton, { format: "underline", icon: "fas fa-underline" }, void 0),
                        _jsx(MarkButton, { format: "code", icon: "fas fa-code" }, void 0),
                        _jsx(BlockButton, { format: "block-quote", icon: "fas fa-quote-left" }, void 0),
                        _jsx(ImageButton, { icon: "fas fa-image", uploadFn: editProps.uploadImg }, void 0),
                        _jsx(BlockButton, { format: "numbered-list", icon: "fas fa-list-ol" }, void 0),
                        _jsx(BlockButton, { format: "bulleted-list", icon: "fas fa-list-ul" }, void 0)] }, void 0),
                _jsx(Editable, { renderElement: renderElement, renderLeaf: renderLeaf, placeholder: "Enter some rich text\u2026", spellCheck: true, autoFocus: true, onKeyDown: event => {
                        for (const hotkey in HOTKEYS) {
                            if (isHotkey(hotkey, event)) {
                                event.preventDefault();
                                const mark = HOTKEYS[hotkey];
                                toggleMark(editor, mark);
                            }
                        }
                    } }, void 0)] }), void 0) }), void 0));
};
const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'block-quote':
            return _jsx("blockquote", Object.assign({}, attributes, { children: children }), void 0);
        case 'bulleted-list':
            return _jsx("ul", Object.assign({}, attributes, { children: children }), void 0);
        case 'heading-one':
            return _jsx("h1", Object.assign({}, attributes, { children: children }), void 0);
        case 'heading-two':
            return _jsx("h2", Object.assign({}, attributes, { children: children }), void 0);
        case 'list-item':
            return _jsx("li", Object.assign({}, attributes, { children: children }), void 0);
        case 'numbered-list':
            return _jsx("ol", Object.assign({}, attributes, { children: children }), void 0);
        case 'image':
            let props = { attributes, children, element };
            return _jsx(ImageElement, Object.assign({}, props), void 0);
        default:
            return _jsx("p", Object.assign({}, attributes, { children: children }), void 0);
    }
};
const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = _jsx("strong", { children: children }, void 0);
    }
    if (leaf.code) {
        children = _jsx("code", { children: children }, void 0);
    }
    if (leaf.italic) {
        children = _jsx("em", { children: children }, void 0);
    }
    if (leaf.underline) {
        children = _jsx("u", { children: children }, void 0);
    }
    return _jsx("span", Object.assign({}, attributes, { children: children }), void 0);
};
export { LightingEditor };
