import { commonApi } from "./commonApi"

const serverUrl = "http://hawk.ecogo.co.in/api/v1"

export const loginApi = async (reqBody) => {
    return await commonApi("POST", `${serverUrl}/login/`, reqBody)
}

export const getAllCompaniesApi = async (reqHeader) => {
    return await commonApi("GET", `${serverUrl}/companies/`, reqHeader)
}