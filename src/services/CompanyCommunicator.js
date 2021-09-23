import HttpService from "./HttpService.js";
import Company from "../entities/Company";


export default class CompanyCommunicator {
  static getAll() {
    return HttpService.getData("companies")
      .then(json => {
        // console.log("Companies json: ", json);
        // console.log("Companies", json.map(c => new Company(c)));
        return json.map(c => new Company(c));
      });
  }
}