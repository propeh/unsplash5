import React from 'react';
import styled from 'styled-components';

const ScrollMenu = ({
                        data = [], renderItem = () => {
    }
                    }) => {

    return (
        <Container className={"ScrollMenus"}>
            <Track>
                {
                    data.map((item, index) => (
                        renderItem(item, index)
                    ))
                }
            </Track>

        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  overflow-x: auto;
`;

const Track = styled.div`
  display: flex;
`;

export default ScrollMenu;