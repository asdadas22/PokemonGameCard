import { createAction, props } from "@ngrx/store";

export const ChangeNightMode = createAction(
    '[Night Mode] Modifica el estilo de night mode',
    props<{ nightMode: boolean }>()
);

export const ClearState = createAction(
    '[App] Limpiar estado de la aplicación',
);