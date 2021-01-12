import styled from 'styled-components';
const Button = styled.span `
  height: 32px;
  line-height: 32px;
  text-align: center;
  width: 32px;
  min-width: 32px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    border: 1px solid transparent;
  };
  background-color: ${(props) => props.active ? '#e8e8e8' : '595959'};
  border: 1px solid transparent;
  color: ${(props) => props.reversed
    ? props.active
        ? 'white'
        : '#aaa'
    : props.active
        ? 'black'
        : '#595959'};
`;
export default Button;
