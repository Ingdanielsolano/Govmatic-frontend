import { API_URL } from './config';

export class Api {

  post(url, data, header) {
    let dataBody = JSON.stringify(data);

    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: (header ? header : {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      }),
      body: dataBody
    }).then(async res => {
      const payload = await res.json();

      return payload;
    }).catch(err => err)
  }

  get(url, params, headers) {
    url = new URL(`${API_URL}${url}`);
    if (params)
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url, {
      method: 'GET',
      headers: headers? headers: {
      }
    }).then(async res => {
      const payload = await res.json();
      return payload;
    }).catch(err => err)
  }
}

export default new Api();