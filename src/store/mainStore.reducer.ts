import { Action, createReducer, on } from "@ngrx/store";
import { SetPlayerDesk } from "./actions/mainStore.actions";


export interface mainStoreDataState {
    playerDesk: string;
}

export const mainStoreInitialState: mainStoreDataState = {
    playerDesk: 'hola'
}

const reducer = createReducer(mainStoreInitialState,
    on(SetPlayerDesk, (state: mainStoreDataState, { playerDesk }) => ({
        ...state,
        playerDesk
    }))
);

export function mainStoreReducer(state: mainStoreDataState, action: Action): mainStoreDataState {
    return reducer(state, action);
}