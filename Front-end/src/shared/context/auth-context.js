import React, { useState, useContext } from "react";
import decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { login, register } from "../../http";

const AuthContext = React.createContext();
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

/*Decodificamos el token para saber el rol */
export function tokenDecoded(token) {
  if (currentUser !== null) {
    const { userType } = decode(currentUser.token);
    return userType;
  }
}

export function AuthProvider({ children }) {
  const [userType, setUserType] = useState(
    (currentUser && tokenDecoded(currentUser.token)) || null
  );
  const [user, setUser] = useState(currentUser && currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  const history = useHistory();

  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { token, dataUser }
      } = await login(email, password);
      const { userType } = decode(token);
      const user = dataUser;
      setUser(user);
      setIsAuthenticated(true);
      setUserType(userType);
      if (token) {
        history.push("/");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUp = async ({
    username,
    name,
    lastName,
    email,
    phone,
    password,
    image,
    address,
    city,
    country,
    userType
  }) => {
    try {
      const {
        data: { token, dataUser }
      } = await register({
        username,
        name,
        lastName,
        email,
        phone,
        password,
        image,
        address,
        city,
        country,
        userType
      });
      const user = dataUser;
      setUser(user);
      setUserType(userType);
      setIsAuthenticated(true);
      if (token) {
        if (userType === "Developer") {
          history.push("/principalDeveloper");
        } else if (userType === "Organizating") {
          history.push("/principalEmployerOrg");
        } else if (userType === "Recruiting") {
          history.push("/principalEmployerRec");
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const logout = () => {
    setUser(null);
    setUserType(false);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userType,
        setUserType,
        signIn,
        user,
        setUser,
        signUp,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
