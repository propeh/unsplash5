import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {CLIENT_ID} from "../../constants";
import {Action} from "../../redux/photos/redux";
import PhotoList from "../components/List/PhotoList";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const PhotoListContainer = () => {

    const dispatch = useDispatch()

    const {list} = useSelector(state => state.photos)

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = () => {
        dispatch(Action.Creators.getPhotos({
            client_id: CLIENT_ID,
            page: 1,
            per_page: 10,
        }))
    }

    return (
        <Container>
            <ContentContainer>
                <PhotoList data={list}/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoListContainer;