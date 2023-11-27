import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user: any = JSON.parse(localStorage.getItem("user")!);

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
