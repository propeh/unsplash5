import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from "../components/Header/Gnb";
import TopicsLnb from "../components/Header/Lnb/TopicsLnb";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../redux/topics/redux";
import {CLIENT_ID} from "../../constants";

const HeaderContainer = () => {

    const dispatch = useDispatch();

    const topicsList = useSelector(state => state.topics.topicsList)

    useEffect(() => {
        getTopics();
    }, [])

    const getTopics = () => {
        dispatch(Action.Creators.getTopics({
            client_id: CLIENT_ID,
            per_page: 30,
        }))
    }

    return (
        <Container>
            <Header/>
            <Route exact path={['/', '/topics/:slug']}>
                <TopicsLnb data={topicsList}/>
            </Route>
        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;