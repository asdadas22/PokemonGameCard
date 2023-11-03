import { Action, createReducer, on } from "@ngrx/store";
import { ElementType, PokeData } from "src/app/common/enums";
import { addCard } from "../actions/ui.actions";



export interface UIState {
    playerDesk: PokeData[];
}

const initState: UIState = {
    playerDesk: []
};

const _uiReducer = createReducer(initState, 
    on(addCard, (state, { playerDesk }) => ({
        ...state,
        playerDesk
    }))
);

export function UIReducer (state: UIState, action: Action) {
    return _uiReducer(state, action);
}