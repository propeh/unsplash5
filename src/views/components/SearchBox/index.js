import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {IconSearch} from "../../../icons";

const SearchBox = ({sort}) => {

    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Container className={cn("SearchBox", sort)}>
            <Form onSubmit={onSubmit}>
                <Button>
                    <IconSearch/>
                </Button>
                <Label>
                    <Input type={"text"}
                           onChange={onChange}
                           placeholder={"Search free high-resolution photos"}
                           value={value}
                    />
                </Label>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  
  &.round {
    margin: 0 40px 0 18px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 0 14px;
  border: 1px solid transparent;
  transition: 0.2s;

  .round & {
    background: #eee;
    border-radius: 19px;

    &:hover {
      border-color: #d1d1d1;
    }
  }

  .square & {
    background: #fff;
    border-radius: 6px;

    &:hover {
      border: 3px solid rgba(0, 0, 0, 0.07);
    }
  }
`;

const Label = styled.label`
  flex: 1;
  .round & {
    height: 38px;
  }
  .square & {
    height: 42px;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  padding: 0 10px;
`;

const Button = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .round & {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  svg {
    fill: #767676;
  }
  &:hover {
    svg {
      fill: #111;
    }
  }
`;

export default SearchBox;