"use server";
import { get, post } from "../api/api";
import { cookies } from "next/headers";

const getSession = async () => {
  const response = await post("/auth/login");
  if (!response.success) {
    return;
  }
  return response;
};
const getLocalSession = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  if (!token) {
    return;
  }
  return accessToken;
};

export { getSession, getLocalSession };
