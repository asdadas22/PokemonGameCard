import { Action } from "@ngrx/store";
import { PokeData } from "src/app/common/enums";

export interface UIState {
    playerDesk: PokeData[];
}

export function uiReducer (state: PokeData[] = [], action: Action) {
    return state
}