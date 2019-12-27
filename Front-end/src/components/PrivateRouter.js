import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../shared/context/auth-context';

// PrivateRoute sustituira a Route
function PrivateRoute({ children, allowedRoles, ...others }) {
	const { isAuthenticated } = useAuth();
	// const { role } = useAuth();

	// Copio props y devuelvo los hijos o bien redirijo
	// return (
	//   <Route {...others}>
	//     {allowedRoles.includes(role) ? children : <Redirect to="/login" />}
	//   </Route>
	// );
	return <Route {...others}>{isAuthenticated ? children : <Redirect to="/login" />}</Route>;
}

export { PrivateRoute };
