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
    console.log("Response for auth: ", json);
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
    if (response === "jwt expired") {
      console.log("response headers: ", response.headers);
      throw new Error(response);
    }
    if (!response.ok) {
      throw new Error(response.status);
    }
    if (response === "jwt expired") {
      console.log("response headers: ", response.headers);
      throw new Error(response);
    }
    return response.json();
  }).catch((error) => {
    console.log("Catching error in services.js: ", error);
    console.log("Error: 401 ? ", error.message == "401")
    throw new Error(error);
  }));
}

function concatParams(params) {
  let result = params.map(p => `${p.key}=${p.value}`);
  return result.join("&");
}

export function saveData(action, method, data) {
  let link = BASE_URL + action;
  return (fetch(link, {
    method: method,
    headers: getHeaders(),
    body: JSON.stringify(data),
  }).then(response => response.json()));
  // leave error handling to client
}

export function deleteData(action, id) {
  let link = BASE_URL + action + "/" + id;
  return (
    fetch
      (link, {
        method: "DELETE",
        headers: getHeaders(),
      })
      .then(response => response.json()));
  // leave error handling to client
}
