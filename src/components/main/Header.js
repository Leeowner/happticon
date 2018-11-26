import React, { Component } from "react";
import Loadable from "react-imported-component";
import Loading from "loading/Loading";

// logo
const Logo = Loadable(() => import("logo/Logo"), {
  LoadingComponent: Loading
});
// guestbar
const GuestBar = Loadable(() => import("components/main/bar/GuestBar"), {
  LoadingComponent: Loading
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }
  render() {
    return (
      <div className="main-header">
        <Logo />
        {this.state.isLogged ? "" : <GuestBar />}
      </div>
    );
  }
}

export default Header;
