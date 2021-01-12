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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import styled from 'styled-components'
// const Menu = styled.div`
// & > * {
//   display: inline-block;
// }
// & > * + * {
//   margin-left: 5px;
//   padding-left: 5px;
//   padding-right: 5px;
// }
// `
// const Toolbar = styled(Menu)`
//   position: relative;
//   padding: 5px 2px ;
//   // margin: 0;
//   border-bottom: 2px solid #eee;
//   margin-bottom: 10px;
//   font-size: 14px; // 0.6rem;
//   background: #fcfcfc;
//   border-bottom: 1px solid #e8e8e8;
//   transition: all 0.25s cubic-bezier(0.3, 1.2, 0.2, 1);
// `
var Toolbar = function (_a) {
    var children = _a.children;
    return (jsx_runtime_1.jsx("div", __assign({ "data-slate-toolbar": "true" }, { children: children }), void 0));
};
exports.default = Toolbar;
