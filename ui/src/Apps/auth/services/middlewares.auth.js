import { useNavigate } from "react-router-dom";

export const UseAuth = (isAuth) => {
  const url = useNavigate();
  if (isAuth) { return url("/"); }
};

export const UseAuthRedirect = (isAuth) => {
  const url = useNavigate();
  if (!isAuth) { return url("/auth/login"); }
}