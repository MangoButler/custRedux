import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from "../../hooks-store/store";
import './Navigation.css';

const Navigation = props => {

  const state = useStore()[0];
  const dispatch = useStore()[1];

  const toggleAuthHandler = () => {
    dispatch('LOGIN');
  };

  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <button onClick={toggleAuthHandler}>{state.auth ? 'Logout':'Login'}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
