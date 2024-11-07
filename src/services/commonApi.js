import axios from "axios"

export const commonApi= async (httpRequest,url,reqBody,reqHeader) => {

    let reqConfig ={
        method:httpRequest,
        url,
        data:reqBody,
        headers: reqHeader? {"Content-Type":"application/json"} : reqHeader
    }

    return await axios(reqConfig).then((request)=>{
        return request
    }).catch((err)=>{
        return err
    })
}