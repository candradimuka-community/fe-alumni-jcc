import axios from "axios";

const {
	NEXT_PUBLIC_API_URL
} = process.env

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://misty-calf-earmuffs.cyclic.app/api/";
axios.defaults.baseURL = NEXT_PUBLIC_API_URL;

const useApi = async ({
    path = '',
    method = 'GET',
    data = null,
    token = null,
    formData = false
}) => {
    const headers = {
        'Content-Type' : formData === true ? 'multipart/form-data' : 'application/json',
        Accept : formData === true ? 'multipart/form-data' : 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    if(token){
        headers.Authorization = 'Bearer ' + token
    }
    const response = await axios({
        url : path,
        method,
        data,
        headers,
    }).catch((err) => err.response);
    return response
    // if(response.status === 401){
    //     // code if unauthenticated
    //     // if(typeof window !== 'undefined'){
    //     //     window.localStorage.removeItem('token')
    //     // }
    //     // Cookies.remove('token')
    //     return {
    //         status :401,
    //         data: {
    //             status : 'unauthenticated'
    //         }
    //     }
    // } else {
    //     return response
    // }
  
}

export default useApi