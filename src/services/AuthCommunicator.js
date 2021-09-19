import * as service from "./services.js";

export default class AuthCommunicator {
  // static login(email, password, callBack, args) {
  //   return service.authenticate(email, password)
  //     .then(() => {
  //       if (callBack && args) callBack(...args);
  //       else if (callBack) callBack();
  //     })
  //     .catch(error => {
  //       throw new Error(error.message);
  //     });
  // }

  static login(email, password) {
    return service.authenticate(email, password);
  }

  /**
   * 
   * @param {function} callBack optional callback to be called after
   * clearing the access token from storage
   * @param {*} args optional arguments to callBack
   */
  static clearSession(callBack) {
    service.clearToken();
    if (callBack) callBack();
  }

}

