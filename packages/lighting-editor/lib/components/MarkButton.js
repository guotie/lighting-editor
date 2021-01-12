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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkButton = exports.toggleMark = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var slate_1 = require("slate");
var slate_react_1 = require("slate-react");
var Button_1 = __importDefault(require("./Button"));
var toggleMark = function (editor, format) {
    var isActive = isMarkActive(editor, format);
    if (isActive) {
        slate_1.Editor.removeMark(editor, format);
    }
    else {
        slate_1.Editor.addMark(editor, format, true);
    }
};
exports.toggleMark = toggleMark;
var isMarkActive = function (editor, format) {
    var marks = slate_1.Editor.marks(editor);
    return marks ? marks[format] === true : false;
};
var MarkButton = function (_a) {
    var format = _a.format, icon = _a.icon;
    var editor = slate_react_1.useSlate();
    return (jsx_runtime_1.jsx(Button_1.default, __assign({ active: isMarkActive(editor, format), onMouseDown: function (event) {
            event.preventDefault();
            toggleMark(editor, format);
        } }, { children: jsx_runtime_1.jsx("i", { className: icon }, void 0) }), void 0));
};
exports.MarkButton = MarkButton;
