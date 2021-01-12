"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Button = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  width: 32px;\n  min-width: 32px;\n  font-size: 16px;\n  cursor: pointer;\n  &:hover {\n    background-color: #f5f5f5;\n    border: 1px solid transparent;\n  };\n  background-color: ", ";\n  border: 1px solid transparent;\n  color: ", ";\n"], ["\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  width: 32px;\n  min-width: 32px;\n  font-size: 16px;\n  cursor: pointer;\n  &:hover {\n    background-color: #f5f5f5;\n    border: 1px solid transparent;\n  };\n  background-color: ", ";\n  border: 1px solid transparent;\n  color: ",
    ";\n"])), function (props) { return props.active ? '#e8e8e8' : '595959'; }, function (props) { return props.reversed
    ? props.active
        ? 'white'
        : '#aaa'
    : props.active
        ? 'black'
        : '#595959'; });
exports.default = Button;
var templateObject_1;
