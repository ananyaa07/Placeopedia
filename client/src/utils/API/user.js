import { getLS, storeLS } from "../localStorage";
import { get, post, logout } from "./request";

export async function getUser(id) {
    let res = await get(`/user/${id}`);
    return res.data;
}

