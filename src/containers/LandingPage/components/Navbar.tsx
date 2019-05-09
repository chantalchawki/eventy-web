import React, { Component } from 'react';
import { Button } from 'antd';
import './Navbar.css';
import { Logo } from '../../../components/Logo';
import { Link } from 'react-router-dom';
export class NavBar extends Component {
  render() {
    return (
      <nav className="d-flex align-items-center">
        <Logo />
        <div className="py-2 px-4">
          <Link to="/login" className="mr-2 login">
            LOGIN
          </Link>
          <Button className="register" type="primary">
            <Link to="/register"> REGISTER</Link>
          </Button>
        </div>
      </nav>
    );
  }
}
