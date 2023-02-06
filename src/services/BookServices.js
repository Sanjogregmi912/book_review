import axios from "axios";

const baseUrl = "http://localhost:3001/books"

function getall(){
    const config = {
        headers : {Authorization:`bearer ${window.localStorage.getItem('token')}` }

    }
    return axios.get(baseUrl,config)
}

function postnewbook(book){
    const config = {
        headers : {Authorization:`bearer ${window.localStorage.getItem('token')}` }

    }
    return axios.post(baseUrl,book,config,)
}

function createReview(bookid,newreview){
    const config = {
        headers : {Authorization:`bearer ${window.localStorage.getItem('token')}` }

    }
    return axios.post(`${baseUrl}/${bookid}/reviews`,newreview,config)
}

function getallReviews(bookid){
    const config = {
        headers : {Authorization:`bearer ${window.localStorage.getItem('token')}` }

    }

    return axios.get(`${baseUrl}/${bookid}/reviews`,config)
}

export default {getall,postnewbook,createReview,getallReviews}