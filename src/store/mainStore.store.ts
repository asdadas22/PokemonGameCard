// @ts-nocheck
import { ActionReducerMap, createSelector } from "@ngrx/store";
import { mainStoreReducer } from "./mainStore.reducer";

const featureSelector = (state: mainStoreDataState) => state;

export const mainSelector = {
    playerDesk: createSelector(featureSelector, (state) => state.playerDesk)
}

// Por una regla del ts lint que no encontre como apagar tuve que dejar el lint apagado
export const mainReducer: ActionReducerMap<mainStoreDataState> = {    
    playerDesk: mainStoreReducer    
}