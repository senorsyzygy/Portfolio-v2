import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {

    apiCall(method,url,data){
        return axios({
            method,
            url,
            data,
        }).catch((error) => {
            if(error.response.status === 403){
                this.logouthandler();
                return Promise.reject();
            } else {
                throw error;
            };
        });
    }
//For fetching the blogs
    fetchBlogs(){
        return this.apiCall("get", `${url}bloggers`)
    }

}