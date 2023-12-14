// @ts-nocheck
import { ActionReducerMap, createSelector } from "@ngrx/store";
import { mainStoreReducer } from "./mainStore.reducer";
import { uiStoreReducer } from "./uiStore.reducer";
import { UIStoreState } from "./uiStore.reducer";
import { mainStoreDataState } from "./mainStore.reducer";

export interface AppState {
    uiStore: UIStoreState,
    // mainStore: mainStoreDataState
} 

const featureSelector = (state: AppState) => state;

export const mainSelector = {
    desk: createSelector(featureSelector, (state) => state),
    nightMode: createSelector(featureSelector, (state) => state)
}

// Por una regla del ts lint que no encontre como apagar tuve que dejar el lint apagado
export const mainReducer: ActionReducerMap<AppState> = {    
    // desk: mainStoreReducer,
    uiStore: uiStoreReducer
}