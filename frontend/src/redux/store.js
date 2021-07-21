import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//reducers
import {cartReducer}from './reducers/cartReducers';
import {getProdcutsReducer} from './reducers/productReducers';
import { getProductDetailsReducer} from './reducers/productReducers'


const reducer=combineReducers({
    cart:cartReducer,
    getProducts:getProdcutsReducer,
    getProductDetails:getProductDetailsReducer
});
const middleware=[thunk];
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)
        )
);
export default store;