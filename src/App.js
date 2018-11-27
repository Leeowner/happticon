import React, { Component } from "react";
import Loadable from "react-imported-component";
import Loading from "loading/Loading";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";
import { ApolloProvider } from "react-apollo";
// 헤더
const Header = Loadable(() => import("components/main/Header"), {
  LoadingComponent: Loading
});
// 로그인 페이지
const LoginPage = Loadable(() => import("pages/login/Login"), {
  LoadingComponent: Loading
});
// 회원가입 페이지
const RegisterPage = Loadable(() => import("pages/register/Register"), {
  LoadingComponent: Loading
});
// 메인 페이지
const Home = Loadable(() => import("pages/home/Home"), {
  LoadingComponent: Loading
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
