import axios from "axios";
import Cookies from "js-cookie";

const client = axios.create({ baseURL: process.env.BASE_URL });

export const request = ({ ...options }: { [x: string]: any }) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmMwMzMwYTViYzc0MzI0ZDQ4MzBiZDAiLCJpYXQiOjE2NTY3NjM3Nzd9.mS3OxQ523HTGP422zk83b2x5VFLNPUaKn5wF3N0ox2E";
  // const token = Cookies.get("BadTAdToken");

  token && (client.defaults.headers.common['x-auth-token'] = token)

  const onSuccess = (response: any) => response;

  const onError = (error: any) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
