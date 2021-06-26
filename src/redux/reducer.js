import {combineReducers} from 'redux';

import appReducer from './app/redux';
import photoReducer from './photos/redux';
import searchReducer from './search/redux';
import topicsReducer from './topics/redux';

const reducer = combineReducers({
    app: appReducer,
    photos: photoReducer,
    search: searchReducer,
    topics: topicsReducer,
});

export default reducer;