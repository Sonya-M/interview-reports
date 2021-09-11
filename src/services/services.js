import Candidate from "../entities/Candidate";
import Report from "../entities/Report";
import Company from "../entities/Company";

const AUTH_ENDPOINT = "http://localhost:3333/login";
const BASE_URL = "http://localhost:3333/api/";

function getHeaders() {
  console.assert(sessionStorage.getItem("accessToken"));
  return ({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + sessionStorage.getItem("accessToken")
  });
}

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
  }).catch(error => {
    console.log(error);
    throw new Error(error);
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

/* export function getReportsForCandidate(candidateId) {
  return getData("reports", [{ key: "candidateId", value: candidateId }])
    .then(json => {
      return (json.map(r => new Report(r)));
    });
}

export function getSingleCandidate(id) {
  return getData("candidates", [{ key: "id", value: id }])
    .then(json => {
      console.log("getSingleCandidate", json);
      const noResults = json.length === 0;
      if (noResults) console.log("getSingleCandidate: No results!");
      return (noResults ? [] : new Candidate(json[0]));
    });
}

export function getCandidates() {
  return getData("candidates")
    .then(json => {
      // console.log("Results", json);
      // console.log(("Candidates:", json.map(c => new Candidate(c))));
      return (json.map(c => new Candidate(c)));
    });
}



export function getReports() {
  return getData("reports")
    .then(json => {
      // console.log("Reports results: ", json);
      // console.log("Reports:", json.map(r => new Report(r)));
      return (json.map(r => new Report(r)));
    });
}

export function getCompanies() {
  return getData("companies")
    .then(json => {
      // console.log("Companies json: ", json);
      // console.log("Companies", json.map(c => new Company(c)));
      return json.map(c => new Company(c));
    });
}
 */


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