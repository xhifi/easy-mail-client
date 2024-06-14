"use server";

const { cookies } = require("next/headers");

const API = "http://localhost:4000/api/v1/auth";

const fetcher = async (url, options) => {
  try {
    const res = await fetch(`${API}${url}`, options);
    const status = res.status;
    const data = await res.json();
    return { status, ...data };
  } catch (error) {
    return { status: 500, error: error.message };
  }
};

const getHeaders = () => {
  const accessToken = cookies().get("accessToken").value;

  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

const get = async (url, cfg = {}) => {
  const headers = getHeaders();
  const options = {
    method: "GET",
    cache: cfg.cache || "no-store",
    headers: {
      ...headers,
      ...cfg.headers,
    },
  };

  const res = await fetcher(url, options);
  return res;
};

const post = async (url, body, cfg = {}) => {
  const headers = getHeaders();
  const options = {
    method: "POST",
    cache: cfg.cache || "no-store",
    headers: {
      ...headers,
      ...cfg.headers,
    },
  };

  if (cfg.type === "multipart/form-data") {
    options.body = body;
  } else {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const res = await fetcher(url, options);
  return res;
};

const put = async (url, body, cfg = {}) => {
  const headers = getHeaders();
  const options = {
    method: "PUT",
    cache: cfg.cache || "no-store",
    headers: {
      ...headers,
      ...cfg.headers,
    },
  };

  if (cfg.type === "multipart/form-data") {
    options.body = body;
  } else {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const res = await fetcher(url, options);
  return res;
};

const del = async (url, cfg = {}) => {
  const headers = getHeaders();
  const options = {
    method: "DELETE",
    cache: cfg.cache || "no-store",
    headers: {
      ...headers,
      ...cfg.headers,
    },
  };

  const res = await fetcher(url, options);
  return res;
};

export { get, post, put, del };
