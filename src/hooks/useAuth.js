// auth provider
import Cookies from "js-cookie";

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  //const context = useContext(AuthContext);
  const context = Cookies.get("access_token") ? true : false;
  return context;
};

export default useAuth;
