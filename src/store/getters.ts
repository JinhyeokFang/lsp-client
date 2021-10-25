import { State } from "./state"

export default {
    isLogined(state: State): boolean {
        return state.accessToken !== null;
    }
}