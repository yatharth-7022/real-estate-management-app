import { useState } from "react";
import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN } from "../api";
export const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setIsLoading(false);
        setError(data.message);
        return;
      }
      setIsLoading(false);
      setError(null);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <Button disabled={isLoading} variant="secondary">
            {isLoading ? "Just a minute!" : "Sign In"}
          </Button>
        </div>
      </form>
      <div className="flex justify-end mt-3 gap-1">
        <p>Don&apos;t have an account ?</p>
        <Link className="text-blue-700" to="/signup">
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};
