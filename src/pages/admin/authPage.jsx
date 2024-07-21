import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, refreshToken } from "../../slices/adminAuthSlice";

export function Component() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.adminAuth.accessToken);
  const apiError = useSelector((state) => state.adminAuth.error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if logged in
  useEffect(() => {
    const _refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      dispatch(refreshToken({ refreshToken: _refreshToken }));
    }
  }, []);

  // Handle if login successful
  useEffect(() => {
    if (accessToken) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [accessToken]);

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    dispatch(login({ username, password }));
  };

  return (
    <div className="bg">
      <div className="card rounded-md">
        <p className="title ">Welcome</p>
        <input
          type="text"
          className="normal-input mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />
        <input
          type="password"
          className="normal-input"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {apiError && <p className="text-red-500 text-sm mb-2">{apiError}</p>}

        <button className="normal-btn mt-3 mb-4 " onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Component;
