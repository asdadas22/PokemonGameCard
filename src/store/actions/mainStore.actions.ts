import { createAction, props } from "@ngrx/store";


export const SetPlayerDesk = createAction(
    '[Player Desk] Setear el mazo del jugador',
    props<{ playerDesk: string }>(),
);