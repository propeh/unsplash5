import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../api";

const getPhotosWorker = function* ({payload}) {
    const result = yield call(API.getPhotos, payload)
    if(result.data) {
        yield put(Action.Creators.setPhotos(result.data))
    }
}


const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, getPhotosWorker)
    ])
}

export default saga;