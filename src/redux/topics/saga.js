import {all, call, takeLatest, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";

const getTopicsWorker = function* ({payload}) {
    try {
        const result = yield call(API.getTopics, payload);
        console.log('topics', result)
        if(result.data) {
            yield put(Action.Creators.setTopics(result.data));
        }
    } catch (e) {
        console.log(e)
    }
}

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, getTopicsWorker)
    ])
}

export default saga;