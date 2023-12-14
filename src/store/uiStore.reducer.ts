import { Action, createReducer, on } from "@ngrx/store";
import * as action from "./actions/uiStore.actions";

export interface UIStoreState {
    nightMode: boolean;
}

export const UIStoreInitState: UIStoreState = {
    nightMode: false
}

const reducer = createReducer(UIStoreInitState, 
    on(action.ChangeNightMode, (state: UIStoreState, { nightMode }) => ({
        ...state,
        nightMode
    })),
    on(action.ClearState, () => UIStoreInitState)
);

export function uiStoreReducer(state: UIStoreState, action: Action): UIStoreState {
    return reducer(state, action);
}