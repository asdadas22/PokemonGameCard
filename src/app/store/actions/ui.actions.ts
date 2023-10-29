import { createAction } from "@ngrx/store";

export const addCard = createAction('Agregar carta al desk');
export const removeCard = createAction('Eliminar carta del desk');