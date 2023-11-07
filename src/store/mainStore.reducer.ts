import { Action, createReducer, on } from "@ngrx/store";
import { SetPlayerDesk } from "./actions/mainStore.actions";
import { PokeData } from "src/app/common/enums";


export interface mainStoreDataState {
    playerDesk: PokeData[];
}

export const mainStoreInitialState: mainStoreDataState = {
    playerDesk: []
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