import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from './Pages/SearchResult';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import Search from "./Pages/Search";
import { UserContext } from "./contexts/UserContext";
import UserInfo from './Components/Header/UserInfo';
import './index.css';


export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('accessToken'));

  const fetchInfo = () => {
      fetch('https://gateway.scan-interfax.ru/api/v1/account/info', {
          method: 'GET',
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
          },
      }).then((response) => {
          if (!response.ok) {
              throw Error("Ошибка на сервере")
          }

          return response.json();
      }).then((data: User) => {
          setUser(data);
      }).catch(error => {
          console.error(error);
      });
  }

  useEffect(() => {
      if (isAuth) {
          fetchInfo();
      }
  }, [isAuth]);


  return (
          <UserContext.Provider value={{user, isAuth, setIsAuth}}>
              <Header/>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/searchResult" element={<SearchResult />} />
              </Routes>
              <Footer/>
          </UserContext.Provider>
  )
}
