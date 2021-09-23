import HttpService from "./HttpService.js";

export default class AuthCommunicator {
  static login(email, password) {
    return HttpService.authenticate(email, password);
  }

  /**
   * @param {function} callBack optional callback to be called after
   * clearing the access token from storage
   */
  static clearSession(callBack) {
    HttpService.clearToken();
    if (callBack) callBack();
  }

}

