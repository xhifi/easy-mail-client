"use server";
import { post } from "../api/api";
import { cookies } from "next/headers";

const setSession = async (req) => {
  const { email, password } = req;
  const response = await post("/auth/login", { email, password });
  if (!response.success) {
    return { success: false, message: response.message };
  }
};
