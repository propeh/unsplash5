import React from 'react';
import styled from 'styled-components';
import Routes from "./Routes";
import {GlobalStyle} from "./style/GlobalStyle";
import HeaderContainer from "./views/containers/HeaderContainer";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;