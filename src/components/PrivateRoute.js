import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

// 1. PrivateRoute - он должен выкидывать из себя когда пользователь не залогинен и
//    не рефрешиться То есть если мы не рефрешимся и мы не залогинены то нас должно
//    выкинуть из страницы /tasks на /login

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
