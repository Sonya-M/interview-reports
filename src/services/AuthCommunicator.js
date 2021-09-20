import * as service from "./services.js";

export default class AuthCommunicator {
  static login(email, password) {
    return service.authenticate(email, password);
  }

  /**
   * @param {function} callBack optional callback to be called after
   * clearing the access token from storage
   */
  static clearSession(callBack) {
    service.clearToken();
    if (callBack) callBack();
  }

}

