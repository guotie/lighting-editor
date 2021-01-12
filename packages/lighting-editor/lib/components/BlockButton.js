"use strict";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var slate_1 = require("slate");
var slate_react_1 = require("slate-react");
var Button_1 = __importDefault(require("./Button"));
var LIST_TYPES = ['numbered-list', 'bulleted-list'];
var isBlockActive = function (editor, format) {
    var _a = __read(slate_1.Editor.nodes(editor, {
        match: function (n) {
            return !slate_1.Editor.isEditor(n) && slate_1.Element.isElement(n) && n.type === format;
        },
    }), 1), match = _a[0];
    return !!match;
};
var toggleBlock = function (editor, format) {
    var isActive = isBlockActive(editor, format);
    var isList = LIST_TYPES.includes(format);
    console.log('toggleBlock: selection:', editor.selection);
    slate_1.Transforms.unwrapNodes(editor, {
        match: function (n) {
            return LIST_TYPES.includes(
            // @ts-ignore
            !slate_1.Editor.isEditor(n) && slate_1.Element.isElement(n) && n.type);
        },
        split: true,
    });
    var newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    slate_1.Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        var block = { type: format, children: [] };
        slate_1.Transforms.wrapNodes(editor, block);
    }
};
var BlockButton = function (_a) {
    var format = _a.format, icon = _a.icon;
    var editor = slate_react_1.useSlate();
    return (jsx_runtime_1.jsx(Button_1.default, __assign({ active: isBlockActive(editor, format), onMouseDown: function (event) {
            event.preventDefault();
            toggleBlock(editor, format);
        } }, { children: jsx_runtime_1.jsx("i", { className: icon }, void 0) }), void 0));
};
exports.default = BlockButton;
