import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/Reducers/Authslice";
import Header from "../components/Header";

function Index() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isLoginSucess = useSelector((state) => state.auth.isLoginSucess);
  const error = useSelector((state) => state.auth.error);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  useEffect(() => {
    console.log("isLoginSucess", isLoginSucess);
  }, [isLoginSucess]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
  };

  return (
    <>
    <Header/>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" style={{ width: "300px" }}>
          <div className="form-group mb-3">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              onChange={handleChange}
              placeholder="Enter your ID"
              className="form-control"
              id="id"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Index;
