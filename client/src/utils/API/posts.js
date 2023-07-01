import { get, post } from "./request";

export async function getPosts() {
    let res = await get("/posts");
    return res.data;    
}

export async function getPost(id) {
    let res = await get(`/posts/${id}`);
    return res.data;
}