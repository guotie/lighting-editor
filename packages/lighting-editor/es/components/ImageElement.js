import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelected, useFocused, } from 'slate-react';
import styled from 'styled-components';
const Img = styled.img `
    display: block;
    max-width: 100%;
    box-shadow: ${(props) => props.selected && props.focused ? '0 0 0 2px blue;' : 'none'};
`;
// todo max-width
const ImageElement = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    return (_jsxs("div", Object.assign({}, attributes, { children: [_jsx("div", Object.assign({ contentEditable: false }, { children: _jsx(Img, { src: element.url, focused: focused, selected: selected }, void 0) }), void 0), children] }), void 0));
};
export default ImageElement;
