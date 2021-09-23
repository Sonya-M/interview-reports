import HttpService from "./HttpService.js";
import Report from "../entities/Report";

export default class ReportCommunicator {

  static getAll() {
    return HttpService.getData("reports")
      .then(json => {
        // console.log("Reports results: ", json);
        // console.log("Reports:", json.map(r => new Report(r)));
        return (json.map(r => new Report(r)));
      });
  }

  static getAllForCandidate(candidateId) {
    return HttpService.getData("reports", [{ key: "candidateId", value: candidateId }])
      .then(json => {
        return (json.map(r => new Report(r)));
      });
  }

  static save(report) {
    return HttpService.saveData("reports", report.id ? "PUT" : "POST", report)
      .then(json => new Report(json));
  }

  static delete(reportID) {
    return HttpService.deleteData("reports", reportID)
      .then(response => response);
  }
}