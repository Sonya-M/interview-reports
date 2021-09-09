import { formatDate } from "../utilities/helpers";

export default class Report {
  constructor(objectLiteral) {
    for (let key of Object.keys(objectLiteral)) {
      this[key] = objectLiteral[key];
    }
  }
  getInterviewDate() {
    return formatDate(new Date(this.interviewDate))
  }
}