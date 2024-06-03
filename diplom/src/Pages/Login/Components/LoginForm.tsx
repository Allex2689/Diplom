import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import React, { useEffect } from 'react';
import { useContext } from 'react';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { isAuth, setIsAuth } = useContext(UserContext);

  const sendData = (event: FormEvent) => {
    event.preventDefault();
    fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.errorCode && data.message) {
          setError(data.message);
        }

        const { accessToken, expire } = data;
        if (accessToken && expire) {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('expire', expire);
          setIsAuth(true);
          navigate('/search');
        }
      })
      .catch((err) => console.error(err));
  };

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/search');
    }
  }, [isAuth]);

  return (
    <form className="loginForm" onSubmit={sendData}>
      <img src="./lock.svg" alt="Lock" className="lock" />
      <div className="entrance">
        <span className="enter">Войти</span>
        <span className="register">Зарегистрироваться</span>
      </div>
      <div className="formInfo">
        <span>Логин или номер телефона:</span>
        <input
          type="text"
          className={error ? 'errorLogin1' : 'loginInput'}
          value={login}
          onChange={handleChangeLogin}
        />
        <span>Пароль:</span>
        <input
          type="password"
          className={error ? 'errorLogin2' : 'loginInput'}
          value={password}
          onChange={handleChangePassword}
        />
        {error && <span className="loginError">{error}</span>}
        <button className="formButton" type="submit">
          ВОЙТИ
        </button>
        <span className="recover">Восстановить пароль</span>
        <span>Войти через:</span>
      </div>
      <div className="navButton">
        <button>
          <img src="./google.svg" alt="" />
        </button>
        <button>
          <img src="./facebook.svg" alt="" />
        </button>
        <button>
          <img src="./yandex.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
