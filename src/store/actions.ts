import auth from "@/api/auth";
import { Commit } from "vuex";
import action from "./action-types";
import mutation from "./mutation-types";

export default {
    async [action.LOGIN](context: { commit: Commit }, payload: { email: string, password: string }): Promise<void> {
        const requestResult = await auth.login(payload.email, payload.password);
        context.commit(mutation.LOGIN, requestResult.data.data);
    },
    [action.LOGOUT](context: { commit: Commit }): void {
        context.commit('LOGOUT');
    }
}