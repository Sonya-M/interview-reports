export default class Company {
  constructor(objectLiteral) {
    for (let key of Object.keys(objectLiteral)) {
      this[key] = objectLiteral[key];
    }
  }
}