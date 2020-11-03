import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV"
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import Header from "./Header"

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

// ! <Router>는 only one child element만 가질 수 있다
// * <BrowserRouter />: HTML5 히스토리 API를 사용하여 주소를 관리하는 라우터(해쉬맵 모드 사용 안함)
// * <Route />: 요청 경로와 렌더링할 컴포넌트를 설정한다, <Router></Router> 안에 존재해야 한다
// * <Switch />: 하위에 라우터 중 하나를 선택한다
// * <Redirect />: 요청 경로를 다른 경로로 리다이렉션한다