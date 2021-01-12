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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var slate_react_1 = require("slate-react");
var styled_components_1 = __importDefault(require("styled-components"));
var Img = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    max-width: 100%;\n    box-shadow: ", ";\n"], ["\n    display: block;\n    max-width: 100%;\n    box-shadow: ", ";\n"
    // todo max-width
])), function (props) { return props.selected && props.focused ? '0 0 0 2px blue;' : 'none'; });
// todo max-width
var ImageElement = function (_a) {
    var attributes = _a.attributes, children = _a.children, element = _a.element;
    var selected = slate_react_1.useSelected();
    var focused = slate_react_1.useFocused();
    return (jsx_runtime_1.jsxs("div", __assign({}, attributes, { children: [jsx_runtime_1.jsx("div", __assign({ contentEditable: false }, { children: jsx_runtime_1.jsx(Img, { src: element.url, focused: focused, selected: selected }, void 0) }), void 0), children] }), void 0));
};
exports.default = ImageElement;
var templateObject_1;
