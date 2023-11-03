import { createAction, props } from "@ngrx/store";
import { PokeData } from "src/app/common/enums";

export const addCard = createAction(
    'Agregar carta al desk', 
    props<{ playerDesk: PokeData [] }>()
);
/* export const removeCard = createAction('Eliminar carta del desk'); */