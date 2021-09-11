import { formatDate } from "../utilities/helpers";

export default class Candidate {
  constructor(objectLiteral) {
    for (let key of Object.keys(objectLiteral)) {
      this[key] = objectLiteral[key];
    }
  }

  getBirthday() {
    return formatDate(new Date(this.birthday));
  }

}