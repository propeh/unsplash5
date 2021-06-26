import styled, {css} from "styled-components";

export const Button = styled.button`
  background: #fff;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 11px;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  color:#767676;
  border-radius: 4px;
  cursor:pointer;

  &:hover {
    color:#111;
  }
  
  ${props => props.sort === 'info' && css`
    background: #3cb46e;
    color: #fff;
    transition: 0.3s;
    &:hover {
      background: #339a5e;
      color:#fff;
    }
  `};
  
  ${props => props.sort === 'white' && css`
    background:#fff;
    color:#767676;
    &:hover {
      color:#111;
    }
  `};
  
  ${props => props.sort === 'outline' && css`
  border:1px solid #d1d1d1;
    border-radius: 4px;
    &:hover {
      border-color:#111
    }
  `};
`;