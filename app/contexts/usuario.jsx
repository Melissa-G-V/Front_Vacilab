"use client"
import React, { useState, useEffect, createContext, useContext } from 'react';

export const ClientsContext = createContext();

function ClientsProvider({children}) {
 //const [user, setUser] = useState(null);
 //const [isLoading, setIsLoading] = useState(true);
 const [userName, setUserName] = useState("")
 const [userAdmin, setUserAdmin] = useState("")
 const [userId, setUserId] = useState("")
 const [userToken, setUserToken] = useState(null)


//  useEffect(() => {
//   const storedUser = JSON.parse(localStorage.getItem('user'));
//   if (storedUser) {
//     //setUser(storedUser);
//     setUserName(storedUser.name)
//     setUserId(storedUser.id)
//     console.log(storedUser.name)
//     console.log(userName)
//   }
//   //setIsLoading(false);
//  }, []);


 useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    setUserName(storedUser.name)
    setUserId(storedUser.id)
    setUserToken(storedUser.access_token)
    setUserAdmin(storedUser.validation)
    //console.log(storedUser.name)
  }
 }, []);
 
//  useEffect(() => {
//   console.log(userName);
//  }, [userName]);


 const login = () => {
  window.location.href = 'login';
 }

 const logout = () => {
  localStorage.removeItem('user');

  setUser(null);
 }
 
 function mudaId(id) {
  setUserId(id)
}

function mudaNome(nome) {
  setUserName(nome)
}

 return (
  <ClientsContext.Provider
  value={{
   // user,
    mudaId,
    mudaNome,
    userName,
    userId,
    userAdmin,
    userToken,
    //isLoading,
    login,
    logout
  }}>
 {children}
   </ClientsContext.Provider>
 );
}

export default ClientsProvider;
