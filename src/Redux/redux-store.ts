import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {userReducer} from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
})

export const store: Store<AppRootStateType, any> = createStore(rootReducer,applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;

