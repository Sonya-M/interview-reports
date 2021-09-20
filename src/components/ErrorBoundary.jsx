// https://reactjs.org/docs/error-boundaries.html

import React from "react";
import FallbackUI from "./FallbackUI";

/* Use static getDerivedStateFromError() to render a fallback UI after an error
has been thrown. 
Use componentDidCatch() to log error information. */

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <FallbackUI error={this.state.error} />;
    }

    return this.props.children;
  }
}

/* 
Then you can use it as a regular component:

<ErrorBoundary> <MyWidget /> </ErrorBoundary> 

Error boundaries work like a JavaScript catch {} block, but for components. Only
class components can be error boundaries. In practice, most of the time you’ll
want to declare an error boundary component once and use it throughout your
application.

Note that error boundaries only catch errors in the components below them in the
tree. An error boundary can’t catch an error within itself. If an error boundary
fails trying to render the error message, the error will propagate to the
closest error boundary above it. This, too, is similar to how catch {} block
works in JavaScript.

NB: errors that were not caught by any error boundary will result in unmounting
of the whole React component tree. !!!

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TODO: PITAJ DA LI SAM U PRAVU ZA OVO:
Pošto ja umotavam celu aplikaciju u ErrorBoundary, to rezultira unmountovanjem 
cele aplikacije, tj. komponente App.js ????????????????? 
To rešavam u FallbackUI, tako što imam lažni link za refreshovanje home stranice
--------------------------------------------------------------------------------

*/
