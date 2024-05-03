import axios from "axios";

const config = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(
  async (req: any) => {
    const token = localStorage.getItem("booking_token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    } else {
      req.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_GUEST_TOKEN}`;
    }

    return req;
  },
  (err: any) => Promise.reject(err)
);

axiosClient.interceptors.response.use(
  (res: any) => Promise.resolve(res.data),
  async (err: any) => {
    return Promise.reject(((err || {}).response || {}).data);
  }
);

/** @format */

export { axiosClient };
