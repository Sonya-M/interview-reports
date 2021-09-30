import * as service from "./services.js";
import Company from "../entities/Company";


export default class CompanyCommunicator {
  static getAll() {
    return service.getData("companies")
      .then(json => {
        // console.log("Companies json: ", json);
        // console.log("Companies", json.map(c => new Company(c)));
        return json.map(c => new Company(c));
      });
  }
  static save(company) {
    return service.saveData("companies", "POST", company)
      .then(company => new Company(company));
  }
}