const AUTH_ENDPOINT = "http://localhost:3333/login";
const BASE_URL = "http://localhost:3333/api/";

function getHeaders() {
  console.assert(sessionStorage.getItem("accessToken"));
  return ({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
  });
}

// class HttpService {
//   get(url, config, body) {
//     const params = { method: 'GET', ...headers, body };
//     return fetch(url, params);
//   }
//   post(url, headers, body) {
//     const params = { method: 'POST', ...headers, body };
//     return fetch(url, params);
//   }
// }

export function authenticate(email, password) {
  // const headers = new Headers();
  // headers.set('Authorization', 'Basic ' + Buffer.from(email + ":" + password).toString('base64'));
  return fetch(AUTH_ENDPOINT, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(response => {
    if (!response.ok) {
      console.log(response.status);
      throw new Error(response.status);
    }
    return response.json();
  }).then(json => {
    const token = json["accessToken"];
    sessionStorage.setItem("accessToken", token); //save accessToken
    sessionStorage.setItem("username", email);
    return { email, token };
  });
}

export function getData(action, params) {
  let link = BASE_URL + action;
  if (params && params.length > 0) link += "?" + concatParams(params);
  return (fetch(link, {
    method: "GET",
    headers: getHeaders(),
  }).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  }));
}

function concatParams(params) {
  let result = params.map(p => `${p.key}=${p.value}`);
  return result.join("&");
}

export function saveData(action, method, data) {
  let link = BASE_URL + action;
  return (fetch(link), {
    method: method,
    headers: getHeaders(),
    body: JSON.stringify(data),
  }).then(response => response.json());
  // leave error handling to client
}

export function deleteData(action, id) {
  let link = BASE_URL + action + "?id=" + id;
  return (fetch(link), {
    method: "DELETE",
    headers: getHeaders(),
  }).then(response => {
    if (response) return response.json();
    else return null; // TODO: Pitaj Nikolu šta da vratim ?????
  });
}



///////////////////////////////////////////////////////
// TODO: adapt Nikola's code for save and delete below:
// export async function saveData(action, method, data) {
//   let link = url + action;
//   var result = await fetch(link, {
//     method: method,
//     headers: headers,
//     body: JSON.stringify(data)
//   });

//   let jsonResult = await result.json();
//   return jsonResult;
// }

// export async function deleteData(action, id) {
//   let link = url + action + "?id=" + id;
//   let result = await fetch(link, { method: "DELETE", headers: headers });
//   let data = await result.json();
//   return data;
// }
////////////////////////////////////////////////////////////