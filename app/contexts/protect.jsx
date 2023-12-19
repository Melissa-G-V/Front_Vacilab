import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
 const { user } = useContext(AuthContext);

 return (
   <Route
     {...rest}
     render={props =>
       user ? (
         <Component {...props} />
       ) : (
         <Redirect to="/login" />
       )
     }
   />
 );
}
