import React, { Component } from "react";
import Router from "./Router"
import GlobalStyles from "./GlobalStyles"

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}
// ! React App은 한 개의 component만 return할 수 있다
// * fragment <></> 안에 원하는 만큼 component를 집어넣는 방법으로 해결 가능

export default App;