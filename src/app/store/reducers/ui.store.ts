import { ActionReducer, ActionReducerMap, createSelector } from "@ngrx/store";
import { UIReducer, UIState } from "./ui.reducer";

export interface AppState {
    UIStore: UIState;
}

const featureSelector = (state: AppState) => state;

export const selectors = {
    playerDesk: createSelector(featureSelector, (state) => state.UIStore.playerDesk)
}

export const reducers: ActionReducerMap<AppState> = {
    UIStore: UIReducer
}