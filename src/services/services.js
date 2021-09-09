const AUTH_ENDPOINT = "http://localhost:3333/login";
const CANDIDATES_ENDPOINT = "http://localhost:3333/api/candidates";

const example_header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

export function authenticate(email, password) {
  // const headers = new Headers();
  // headers.set('Authorization', 'Basic ' + Buffer.from(email + ":" + password).toString('base64'));
  return fetch(AUTH_ENDPOINT, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(response => {
    if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status);
    }
    return response.json();
  }).then(json => {
    const token = json["accessToken"];
    sessionStorage.setItem("accessToken", token); //save accessToken
    sessionStorage.setItem("username", email)
    return { email, token };
  }).catch(error => {
    console.log(error);
    throw new Error(error);
  });
}

export function getCandidates() {
  // console.log("Bearer ", sessionStorage.getItem("accessToken"))
  console.assert(sessionStorage.getItem("accessToken"));
  return fetch(CANDIDATES_ENDPOINT, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
    }
  }).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  }).then(json => {
    console.log(json);
    return json;
  });
}
