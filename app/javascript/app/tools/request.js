import axios from 'axios';
import qs from 'qs';

const defaultRequestParams = (token) => ({
  baseURL: 'https://suppliers-stats.wildberries.ru/api/v1/supplier',
  cancelToken: token,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export const buildRequest = (cancelToken) => {
  return axios.create({
    ...defaultRequestParams(cancelToken),
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'brackets'})
  });
};

export const rebuildParams = (params) => {
  const url = params.url;

  if (url.indexOf(':id') >= 0) {
    if (typeof params.params.id === 'undefined') {
      console.error(url, 'must have param id');
    } else {
      params.url = url.replace(':id', params.params.id);
      delete params.params.id;
    }
  }

  return params;
};

export const ajax = (params, token) => {
  return buildRequest(token)(rebuildParams(params));
};

export const ajaxPost = (params, token) => {
  const defParams = defaultRequestParams(token);

  defParams.headers['Content-Type'] = 'application/json';
  return axios.create({
    ...defParams,
  })(rebuildParams(params));
};
