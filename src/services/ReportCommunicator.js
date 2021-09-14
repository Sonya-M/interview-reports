import * as service from "./services.js";
import Report from "../entities/Report";

export default class ReportCommunicator {

  static getAll() {
    return service.getData("reports")
      .then(json => {
        // console.log("Reports results: ", json);
        // console.log("Reports:", json.map(r => new Report(r)));
        return (json.map(r => new Report(r)));
      });
  }

  static getAllForCandidate(candidateId) {
    return service.getData("reports", [{ key: "candidateId", value: candidateId }])
      .then(json => {
        return (json.map(r => new Report(r)));
      });
  }

  static save(report) {
    return service.saveData("reports", report.id ? "PUT" : "POST", report)
      .then(json => new Report(json));
  }

  static delete(reportID) {
    return service.deleteData("reports", reportID)
      .then(response => response);
  }
}