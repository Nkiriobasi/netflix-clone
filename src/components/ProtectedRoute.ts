import { useNavigate  } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

interface IMyProp {
  children: any
}

const ProtectedRoute = ({ children }: IMyProp) => {
  const {user} = UserAuth();

  const navigate = useNavigate();

  if (!user) {
    return navigate("/"); 
  } else {
    return children;
  }
};

export default ProtectedRoute;
