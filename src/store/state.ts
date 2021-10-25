export interface State {
    accessToken: string | null,
    refreshToken: string | null
}
 
export const initialState = {
    accessToken: null,
    refreshToken: null
}