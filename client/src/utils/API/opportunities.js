import { get, post } from "./request";

export async function getAllOpportunities(category) {
  let res = await get(`/opportunities/${category}`);
  return res.data;
}
