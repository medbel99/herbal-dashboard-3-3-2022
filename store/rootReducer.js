import { combineReducers } from 'redux';
import auth from './auth/reducer';
import setting from './setting/reducer';
import app from './app/reducer';
import ecomerce from './ecomerce/reducer';
import product from "./products/reducer"
export default combineReducers({
    auth,
    setting,
    app,
    ecomerce,
    product,
});
