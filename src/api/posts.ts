import axios from "axios"
import { API_ALL_POSTS, API_POST_COMMENTS_ENDPOINT } from "../Utils/Constants"

export function getPosts() {
    return axios
      .get(API_ALL_POSTS)
      .then(res => res.data)
  }
  
//   export function getPosts() {
//     return axios
//       .get(API_ALL_POSTS, { params: { _sort: "title" } })
//       .then(res => res.data)
//   }


  export function getPost(id: string|undefined) {
    if (!id) {
      return Promise.reject("No id provided")
    }
    return axios.get(`${API_ALL_POSTS}/${id}`).then(res => res.data)
  }


  export function getPostComments(id: string|undefined) {
    if (!id) {
      return Promise.reject("No id provided")
    }
    return axios.get(`${API_ALL_POSTS}/${id}${API_POST_COMMENTS_ENDPOINT}`).then(res => res.data)
  }