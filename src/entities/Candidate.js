import { formatDate } from "../utilities/helpers";

export default class Candidate {
  constructor(objectLiteral) {
    for (let key of Object.keys(objectLiteral)) {
      this[key] = objectLiteral[key];
    }
    if (!this.avatar) {
      this.avatar = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
    }
  }

  getBirthday() {
    return formatDate(new Date(this.birthday));
  }

}