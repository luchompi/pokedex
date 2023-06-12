import baseApi from "../../../apis/base.api";
export const GetTokens = async (data) => {
    return await baseApi.post('jwt/create', data);
}