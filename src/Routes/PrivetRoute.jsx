import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import spinner from "../assets/lottie/loading.json";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" max-w-[1304px] flex items-center justify-center h-[70vh] px-4  mx-auto ">
        <div className=" w-72 md:w-96">
          <Lottie animationData={spinner} />
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} />;
};
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
