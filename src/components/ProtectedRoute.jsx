import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");

  // useEffect yordamida sinxron yo'naltirishni yaxshilash
  useEffect(() => {
    if (!isAuth) {
      navigate("/signin"); // Agar autentifikatsiya bo'lmasa, signin sahifasiga o'tish
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null;  // Sahifa kontentini ko'rsatmasdan oldin yo‘naltirish amalga oshiriladi
  }

  return children;
};

export default ProtectedRoute;


/*import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    navigate("/signin");
    return null;
  }

  return children;
};

export default ProtectedRoute;*/
