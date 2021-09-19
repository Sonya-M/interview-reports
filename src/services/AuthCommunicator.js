import * as service from "./services.js";

export default class AuthCommunicator {
  static login(email, password, callBack, args) {
    return service.authenticate(email, password)
      .then(() => {
        callBack(...args);
      })
      .catch(error => {
        throw new Error(error.message);
      });
  }
  static clearSession() {
    service.clearToken();
  }
}

// static login(email, password, callBack, args) {
//   return service.authenticate(email, password)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       callBack(...args);
//     })
//     .catch(error => {
//       throw new Error(error.message);
//     });
// }