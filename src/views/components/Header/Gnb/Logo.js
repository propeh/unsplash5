import React from 'react';
import styled from 'styled-components';
import {IconLogo} from "../../../../icons";
import {navigate} from "../../../../lib/history";

const Logo = ({withText}) => {

    return (
        <Container onClick={() => navigate('/')}>
            <IconLogo/>

            {
                withText &&
                <Text>
                    <h1>Unsplash</h1>
                    <h2>Photos for everyone</h2>
                </Text>
            }
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  
  svg {
    width: 32px;
    height: 32px;
  }
`;

const Text = styled.div`
margin-left: 12px;
  h1 {
    font-size: 15px;
    color:#111;
    font-weight: bold;
  }
  h2 {
    font-size: 13px;
    color:#111;
    margin-top: 3px;
    font-weight: 600;
  }
`;

export default Logo;