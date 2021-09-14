import * as service from "./services.js";

import Candidate from "../entities/Candidate";


export default class CandidateCommunicator {
  static getAll() {
    return service.getData("candidates")
      .then(json => {
        // console.log("Results", json);
        // console.log(("Candidates:", json.map(c => new Candidate(c))));
        return (json.map(c => new Candidate(c)));
      });
  }

  static getById(id) {
    return service.getData("candidates", [{ key: "id", value: id }])
      .then(json => {
        console.log("getSingleCandidate", json);
        const noResults = json.length === 0;
        if (noResults) console.log("getSingleCandidate: No results!");
        else console.assert(json.length === 1);
        return (noResults ? json : new Candidate(json[0])); // ???? TODO: Pitaj Nikolu
        // da li je bolje da vrati null ili prazan niz (kao što vraća server kada nema rezultata)!
        // AKO NEMA, VRATI PRAZAN OBJEKAT {} !!!!!!
      });
  }

  static save(candidate) {
    return service.saveData("candidates", candidate.id ? "PUT" : "POST", candidate)
      .then(response => new Candidate(response));
  }
}
