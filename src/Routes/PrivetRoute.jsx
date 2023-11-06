import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { InfinitySpin } from "react-loader-spinner";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" max-w-[1304px] flex items-center justify-center h-[70vh] px-4  mx-auto ">
        <InfinitySpin width="200" color="#24dc7a" />
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
