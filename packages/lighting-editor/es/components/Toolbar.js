import { jsx as _jsx } from "react/jsx-runtime";
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
const Toolbar = ({ children }) => {
    return (_jsx("div", Object.assign({ "data-slate-toolbar": "true" }, { children: children }), void 0));
};
export default Toolbar;
