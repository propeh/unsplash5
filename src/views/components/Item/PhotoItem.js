import React from 'react';
import styled from 'styled-components';

const PhotoItem = ({data}) => {

    return (
        <Container>
            <img src={data.urls.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`
  padding: 10px 0;
`;

export default PhotoItem;