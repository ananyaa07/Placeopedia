import { get, post } from "./request";

export async function getAllOpportunities(category) {
  const res = await get(`/opportunities/${category}`);
  return res.data;
}
