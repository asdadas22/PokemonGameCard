// @ts-nocheck
import { Action, createReducer, on } from "@ngrx/store";
import * as action from "./actions/mainStore.actions";
import { PokeData } from "src/app/common/enums";


export interface mainStoreDataState {
    playerDesk: PokeData[];
}

export const mainStoreInitialState: mainStoreDataState = {
    playerDesk: [{id: '0', hp: 100, name: 'charmander', type: 1}]
}

const reducer = createReducer(mainStoreInitialState,
    on(action.SetPlayerDesk, (state: mainStoreDataState, { playerDesk }) => ({
        ...state,
        playerDesk
    })),
    on(action.ClearState, () => mainStoreInitialState)
);

export function mainStoreReducer(state: mainStoreDataState, action: Action): mainStoreDataState {
    return reducer(state, action);
}