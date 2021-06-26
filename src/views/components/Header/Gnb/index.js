import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import Nav from "./Nav";
import SearchBox from "../../SearchBox";
import {Button} from "../../Button/Button.Styled";
import SignArea from "./SignArea";

const Header = () => {

    return (
        <Container>
            <Logo withText={true}/>
            <SearchBox sort={"round"}/>
            <Nav/>
            <Button sort={"outline"}>
                Submit a photo
            </Button>
            <SignArea/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;


export default Header;