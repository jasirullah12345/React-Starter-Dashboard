import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
// Middleware to run async functions
import thunk from "redux-thunk";
// Redux-Persist
import {persistStore, persistReducer} from "redux-persist";
// storage means LocalStorage
import storage from 'redux-persist/lib/storage'
import {encryptTransform} from "redux-persist-transform-encrypt";


// Middlewares
const middlewares = [thunk];

// Initial State
const intialState = {};

const persistConfig = {
    key: 'store',
    storage,
    transforms: [
        // For Store Encryption in LocalStorage
        encryptTransform({
            secretKey: 'developed-by-jasir-ullah-khan',
            onError: function (error) {
                console.log("Error during encryption", error);
            },
        }),
    ],
    // whitelist : ["amount"],
    // blacklist : ["amount"],
}

// Persist All reducers
const persistedReducer = persistReducer(persistConfig, reducers)

// Create Store Using Persisted reducers
const store = createStore(persistedReducer, intialState, applyMiddleware(...middlewares));

// Create persistor Using Store
const persistor = persistStore(store)

export {store, persistor}
