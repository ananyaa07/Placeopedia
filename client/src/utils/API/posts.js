import { get, post } from "./request";

export async function getPosts() {
    let res = await get("/posts");
    return res.data;    
}