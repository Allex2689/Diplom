import React, { useContext } from 'react';
import './Header.css';
import UserInfo from './UserInfo';
import { UserContext } from '../../contexts/UserContext';
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
  const { user, isAuth } = useContext(UserContext);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  }

  return (
          <header className='header'>
            <img src="/Logo.svg" alt="Лого" className='header__img'/>
            <ul className="header__ul">
              <a href="/">Главная</a>
              <a href="">Тарифы</a>
              <a href="">FAQ</a>
            </ul>
            {isAuth ? <UserInfo user={user} /> : (
              <div className='header__entrance'>
                  <span>Зарегистрироваться</span>
                  <div className='line'></div>
                  <Link to={"/login"}>
                    <button className='header__button' onClick={goToLogin}>Войти</button>
                  </Link>
                </div>
            )}
            <div id="nav-btn"></div>
        </header>
  );
}

export default Header;
