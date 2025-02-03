import { useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { SIGN_UP } from "../../api";
export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(SIGN_UP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border-2 p-3 "
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="border-2 p-3 "
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="border-2 p-3 "
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <Button variant="secondary">SIGN UP</Button>{" "}
        </div>
      </form>
      <div className="flex justify-end mt-3 gap-1">
        <p>Have an account ?</p>
        <Link className="text-blue-700" to="/signin">
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};
