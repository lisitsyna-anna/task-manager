import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

// 2. RestrictedRoute - это ограниченный маршрут, на котором заолгиненному
//    пользователю не желательно быть, например зачем пользователю быть на странице
//    логина или регистрации если он и так уже зарегестрирован. То есть если
//    пользователь залогинен, то RestrictedRoute должен перекинуть пользователя на
//    какой-то другой маршрут

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// Ты залогинен ? -> да -> тогда перекидываем пользователя на другой маршрут
//-> нет -> остаешься на этом же
