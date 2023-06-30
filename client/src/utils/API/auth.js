import { getLS, storeLS } from "../localStorage";
import { get, post, logout } from "./request";

export async function loginUser(username, password) {
  let res = await post("/login", { username, password });
  if (res.status === 201 || res.status === 200) {
    storeLS("jwt_token", res.data.token, true);
    return Promise.resolve(res);
  }
  else if(res.status === 401) {
    return Promise.resolve(res);
  }
}

// export async function isUserAuthenticated() {
//   if (!getLS("jwt_token")) return Promise.resolve(false);
//   let res = await get("/auth/verify");
//   if (res.status === 200 && res.data?.data?.status)
//     return Promise.resolve({
//       rollNumber: res.data.data.rollNumber,
//       isAdmin: res.data.data.isAdmin,
//     });
//   logout();
//   return Promise.resolve(false);
// }

export async function isUserAdmin() {
  if (!getLS("jwt_token")) return Promise.resolve(false);
  let res = await get("/isAdmin");
  if (res.status === 200 && res.data?.data?.status)
    return Promise.resolve(res.data.data.isAdmin);
  return Promise.resolve(false);
}
