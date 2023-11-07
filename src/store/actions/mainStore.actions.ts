import { createAction, props } from "@ngrx/store";
import { PokeData } from "src/app/common/enums";


export const SetPlayerDesk = createAction(
    '[Player Desk] Setear el mazo del jugador',
    props<{ playerDesk: PokeData[] }>(),
);