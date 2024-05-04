import axios from "axios";
import { BASE_URL } from "./Envirionment";

export const commonnRequest = async (method, url, body, header, params) => {
  let config = {
    method: method,
    url: `${BASE_URL}${url}`,
    headers: header ? header : "application/json",
    data: body && body,
    params: params && params,
  };

  return axios(config)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
