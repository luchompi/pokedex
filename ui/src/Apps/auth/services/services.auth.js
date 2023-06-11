import baseApi from "../../../apis/base.api";
export const GetTokens = async (data) => {
    const response = await baseApi.post('jwt/create', data)
    return response
}