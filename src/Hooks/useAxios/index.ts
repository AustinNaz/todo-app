import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";

import { authState } from "State";

type AxiosGet = <T>(
  url: string,
  config?: AxiosRequestConfig
) => Promise<AxiosResponse<T>>;

type AxiosPost = <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
) => Promise<AxiosResponse<T>>;

const useAxios = () => {
  const { idToken } = useRecoilValue(authState);
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API;

  const get: AxiosGet = (url, config?) =>
    axios.get(url, {
      headers: {
        authorization: `Bearer ${idToken || " "}`,
      },
      ...config,
    });

  const post: AxiosPost = (url, data, config?) =>
    axios.post(url, data, {
      headers: {
        authorization: `Bearer ${idToken || " "}`,
      },
      ...config,
    });

  return { get, post };
};

export default useAxios;
