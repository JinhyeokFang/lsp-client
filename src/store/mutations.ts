/* eslint-disable */

import mutation from "./mutation-types";
import { State } from "./state";

export default {
    [ mutation.LOGIN ](state: State, payload: { accessToken: string, refreshToken: string}): void {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
    },
    [ mutation.LOGOUT ](state: State): void {
        state.accessToken = null;
        state.refreshToken = null;
    }
}