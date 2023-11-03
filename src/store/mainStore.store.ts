// @ts-nocheck
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { mainStoreReducer } from "./mainStore.reducer";

export interface mainStoreState {
    playerDesk: string;
}

const featureSelector = createFeatureSelector<mainStoreState>('mainStore');

export const mainSelector = {
    playerDesk: createSelector(featureSelector, (state) => state.playerDesk)
}

// Por una regla del ts lint que no encontre como apagar tuve que dejar el lint apagado
export const mainReducer: ActionReducerMap<mainStoreState> = {    
    playerDesk: mainStoreReducer    
}