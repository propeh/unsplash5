import React from 'react';
import styled from 'styled-components';
import {Button} from "../../Button/Button.Styled";

const SignArea = () => {

    return (
        <Container>
            <StyledButton sort={"white"}>Login</StyledButton>
            <StyledButton sort={"info"}>Join free</StyledButton>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
border-left:1px solid #d1d1d1;
  margin-left: 30px;
`;

const StyledButton = styled(Button)`
  margin-left: 14px;
`;

export default SignArea;