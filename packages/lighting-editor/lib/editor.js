"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightingEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var is_hotkey_1 = __importDefault(require("is-hotkey"));
// Import the Slate components and React plugin.
var slate_react_1 = require("slate-react");
// Import the Slate editor factory.
var slate_1 = require("slate");
var slate_history_1 = require("slate-history");
var styled_components_1 = __importDefault(require("styled-components"));
var Toolbar_1 = __importDefault(require("./components/Toolbar"));
var BlockButton_1 = __importDefault(require("./components/BlockButton"));
var MarkButton_1 = require("./components/MarkButton");
var ImageButton_1 = require("./components/ImageButton");
var ImageElement_1 = __importDefault(require("./components/ImageElement"));
var HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
};
var EditorContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), function (props) { return props.width ? props.width : '600px'; });
// LightingEditor
var LightingEditor = function (editProps) {
    var _a, _b;
    var _c = __read(react_1.useState((_a = editProps.content) !== null && _a !== void 0 ? _a : [{
            type: 'paragraph',
            children: [{ text: '' }]
        }]), 2), value = _c[0], setValue = _c[1];
    var renderElement = react_1.useCallback(function (props) { return jsx_runtime_1.jsx(Element, __assign({}, props), void 0); }, []);
    var renderLeaf = react_1.useCallback(function (props) { return jsx_runtime_1.jsx(Leaf, __assign({}, props), void 0); }, []);
    var editor = react_1.useMemo(function () { return ImageButton_1.withImages(slate_history_1.withHistory(slate_react_1.withReact(slate_1.createEditor()))); }, []);
    return (jsx_runtime_1.jsx(EditorContainer, __assign({ width: (_b = editProps.width) !== null && _b !== void 0 ? _b : '800px', className: "slate-editor" }, { children: jsx_runtime_1.jsxs(slate_react_1.Slate, __assign({ editor: editor, value: value, onChange: function (value) { return setValue(value); } }, { children: [jsx_runtime_1.jsxs(Toolbar_1.default, { children: [jsx_runtime_1.jsx(BlockButton_1.default, { format: "heading-one", icon: "fas fa-heading" }, void 0),
                        jsx_runtime_1.jsx(BlockButton_1.default, { format: "heading-two", icon: "fas fa-heading" }, void 0),
                        jsx_runtime_1.jsx(MarkButton_1.MarkButton, { format: "bold", icon: "fas fa-bold" }, void 0),
                        jsx_runtime_1.jsx(MarkButton_1.MarkButton, { format: "italic", icon: "fas fa-italic" }, void 0),
                        jsx_runtime_1.jsx(MarkButton_1.MarkButton, { format: "underline", icon: "fas fa-underline" }, void 0),
                        jsx_runtime_1.jsx(MarkButton_1.MarkButton, { format: "code", icon: "fas fa-code" }, void 0),
                        jsx_runtime_1.jsx(BlockButton_1.default, { format: "block-quote", icon: "fas fa-quote-left" }, void 0),
                        jsx_runtime_1.jsx(ImageButton_1.ImageButton, { icon: "fas fa-image", uploadFn: editProps.uploadImg }, void 0),
                        jsx_runtime_1.jsx(BlockButton_1.default, { format: "numbered-list", icon: "fas fa-list-ol" }, void 0),
                        jsx_runtime_1.jsx(BlockButton_1.default, { format: "bulleted-list", icon: "fas fa-list-ul" }, void 0)] }, void 0),
                jsx_runtime_1.jsx(slate_react_1.Editable, { renderElement: renderElement, renderLeaf: renderLeaf, placeholder: "Enter some rich text\u2026", spellCheck: true, autoFocus: true, onKeyDown: function (event) {
                        for (var hotkey in HOTKEYS) {
                            if (is_hotkey_1.default(hotkey, event)) {
                                event.preventDefault();
                                var mark = HOTKEYS[hotkey];
                                MarkButton_1.toggleMark(editor, mark);
                            }
                        }
                    } }, void 0)] }), void 0) }), void 0));
};
exports.LightingEditor = LightingEditor;
var Element = function (_a) {
    var attributes = _a.attributes, children = _a.children, element = _a.element;
    switch (element.type) {
        case 'block-quote':
            return jsx_runtime_1.jsx("blockquote", __assign({}, attributes, { children: children }), void 0);
        case 'bulleted-list':
            return jsx_runtime_1.jsx("ul", __assign({}, attributes, { children: children }), void 0);
        case 'heading-one':
            return jsx_runtime_1.jsx("h1", __assign({}, attributes, { children: children }), void 0);
        case 'heading-two':
            return jsx_runtime_1.jsx("h2", __assign({}, attributes, { children: children }), void 0);
        case 'list-item':
            return jsx_runtime_1.jsx("li", __assign({}, attributes, { children: children }), void 0);
        case 'numbered-list':
            return jsx_runtime_1.jsx("ol", __assign({}, attributes, { children: children }), void 0);
        case 'image':
            var props = { attributes: attributes, children: children, element: element };
            return jsx_runtime_1.jsx(ImageElement_1.default, __assign({}, props), void 0);
        default:
            return jsx_runtime_1.jsx("p", __assign({}, attributes, { children: children }), void 0);
    }
};
var Leaf = function (_a) {
    var attributes = _a.attributes, children = _a.children, leaf = _a.leaf;
    if (leaf.bold) {
        children = jsx_runtime_1.jsx("strong", { children: children }, void 0);
    }
    if (leaf.code) {
        children = jsx_runtime_1.jsx("code", { children: children }, void 0);
    }
    if (leaf.italic) {
        children = jsx_runtime_1.jsx("em", { children: children }, void 0);
    }
    if (leaf.underline) {
        children = jsx_runtime_1.jsx("u", { children: children }, void 0);
    }
    return jsx_runtime_1.jsx("span", __assign({}, attributes, { children: children }), void 0);
};
var templateObject_1;
