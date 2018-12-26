/**
 * Created by duuliy on 2018/11/27/027.
 */
import axios from 'axios'
import { getToken } from '../utils/utils.js'
import {
  baseUrl
} from "./env";

//测试环境，服务器环境，线上环境
// if (process.server) {
//     baseURL = `http://${process.env.HOST || '192.168.189.249'}:${process.env.PORT || 8887}`
// }
// if (!window.Promise) {
//     window.Promise = Promise;
// }
// const token='Bearer'+' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpbnRlc3RfbjciLCJqdGkiOiJiNGZhMjUxMy1mYjI5LTQxYmItOWVlOS0yNWE0ZGZkYzY3NDYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImQzZWM5MzRlLWJkMjctNDVmOC04NWJmLTA1Njk0OGE1MzhlZSIsImV4cCI6MTU0NTM4NDk1MSwiaXNzIjoiaHR0cHM6Ly93d3cuY3RjNjY2LmNvbSIsImF1ZCI6Imh0dHBzOi8vd3d3LmN0YzY2Ni5jb20ifQ.3QtuC7fFKdYplAg2YZ8Bw7E7o_gBpwQo11mb-K5wBCQ'

const fetch = (method, url, data) => {
  const token = 'Bearer '+getToken();
  if (method === "get") {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url, {
          headers: {
            'Authorization': token
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  } else if (method === "delete") {
    return new Promise((resovle, reject) => {
      axios.delete(baseUrl + url, {
          data: data,
          headers: {
            'Authorization': token
          }
        })
        .then(response => {
          resovle(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  } else {
    return new Promise((resovle, reject) => {
      axios({
          method: method,
          url: baseUrl + url,
          data: data,
          headers: {
            'Authorization': token
          }
        })
        .then(response => {
          resovle(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default fetch
