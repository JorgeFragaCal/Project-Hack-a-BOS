import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../http';
import { register } from '../../http';

const AuthContext = React.createContext();
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

export function AuthProvider({ children }) {
	const [ isAuthenticated, setIsAuthenticated ] = useState(currentUser !== null);
	// Decodificar el token para obtener el role
	// const [role, setRole] = useState(currentUser !== null);
	const [ user, setUser ] = useState(currentUser);
	const history = useHistory();

	// Login => Cambiaré a true
	const signIn = async ({ email, password }) => {
		try {
			const { data: { token, user } } = await login(email, password);
			setUser(user);
			setIsAuthenticated(true);
			// Decodificar el token para sacar el role
			//setRole(role);
			if (token) {
				history.push('/');
			}
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// Register => Cambiaré a true mi estado
	const signUp = async ({ name, email, password }) => {
		try {
			const { data: { token, user } } = await register({ name, email, password });
			setUser(user);
			setIsAuthenticated(true);
			if (token) {
				history.push('/');
			}
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// Logout => Cambiaré a false

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, signIn, user, signUp }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	return context;
}
