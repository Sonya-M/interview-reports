import * as constants from "../shared/constants";
const AUTH_ENDPOINT = "http://localhost:3333/login";
const BASE_URL = "http://localhost:3333/api/";

function getHeaders() {
  console.assert(sessionStorage.getItem("accessToken"));
  return ({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
  });
}

// NB: throw new Error returns an Error obj with property `message`!!!
const getNiceErrorMessage = (error) => {
  const errorStr = error.toString();
  if (errorStr.includes("Failed to fetch")) {
    return constants.CONNECTION_FAILED;
  } else if (errorStr.includes("401") && sessionStorage.getItem("accessToken")) {
    return constants.SESSION_EXPIRED;
  } else if (errorStr.includes("400") || errorStr.includes("401")) {
    return constants.INVALID_CREDENTIALS;
  } else {
    return errorStr;
  }
};

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export function authenticate(email, password) {
  return fetch(AUTH_ENDPOINT, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(response => {
    return handleResponse(response);
  }).then(json => {
    // console.log("Response for auth: ", json);
    const token = json["accessToken"];
    sessionStorage.setItem("accessToken", token);
    sessionStorage.setItem("username", email);
    return { email, token };
  }).catch(error => {
    throw new Error(getNiceErrorMessage(error));
  });
}

export function clearToken() {
  console.assert(sessionStorage.getItem("accessToken"));
  sessionStorage.clear();
  // sessionStorage.removeItem("accessToken");
  // sessionStorage.removeItem("username");
}

export function getData(action, params) {
  let link = BASE_URL + action;
  if (params && params.length > 0) link += "?" + concatParams(params);
  return (fetch(link, {
    method: "GET",
    headers: getHeaders(),
  }).then(response => handleResponse(response))
    .catch((error) => {
      throw new Error(getNiceErrorMessage(error));
    }));
}

function concatParams(params) {
  let result = params.map(p => `${p.key}=${p.value}`);
  return result.join("&");
}

export function saveData(action, method, data) {
  let link = BASE_URL + action;
  return (fetch(link, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  }).then(response => handleResponse(response))
    .catch(error => {
      console.log(error);
      throw new Error(getNiceErrorMessage(error));
    }));
}

export function deleteData(action, id) {
  let link = BASE_URL + action + "/" + id;
  return (
    fetch
      (link, {
        method: "DELETE",
        headers: getHeaders(),
      })
      .then(response => handleResponse(response))
      .catch(error => {
        console.log(error);
        throw new Error(getNiceErrorMessage(error));
      })
  );
}

////////////////////////////////
  // const headers = new Headers();
  // headers.set('Authorization', 'Basic ' + Buffer.from(email + ":" + password).toString('base64'));