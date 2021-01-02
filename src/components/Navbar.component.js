import React, { Component } from 'react';
// import LeftMenu from './utils/LeftMenu'
// import RightMenu from './utils/RightMenu'
// import { Drawer, Button } from 'antd';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

import { BrowserRouter as Router } from 'react-router-dom';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
          }
    }


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }

//   state = {
//     current: 'mail',
//     visible: false
//   }
//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };
// onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };
// render() {
//     return (
//         <nav className="menuBar">
//           <div className="logo">
//             <a href="">logo</a>
//           </div>
//           <div className="menuCon">
//             <div className="leftMenu">
//               <LeftMenu />
//             </div>
//             <div className="rightMenu">
//                 <RightMenu />
//             </div>
//             <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
//               <span className="barsBtn"></span>
//             </Button>
//             <Drawer
//               title="Basic Drawer"
//               placement="right"
//               closable={false}
//               onClose={this.onClose}
//               visible={this.state.visible}
//             >
//               <LeftMenu />
//               <RightMenu />
//             </Drawer>
// </div>
//         </nav>
//     );
//   }
}
export default Navbar;