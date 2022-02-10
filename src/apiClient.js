import axios from "axios";
const url = "https://tomportfolio-backend.herokuapp.com/";

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
    //For fetching the projects
    fetchProjs(){
        return this.apiCall("get", `${url}projects`)
    }
    //For fetching guest book comments
    fetchGuests(){
        return this.apiCall("get", `${url}guestbooks`)
    }
    //For adding guest book comments
    addGuestbookComment(author, comment){
        return this.apiCall("post", `${url}guestbookadd`, {author: author, comment: comment})
    }

}