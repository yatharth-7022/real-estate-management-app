import { useState } from "react";
import { Button } from "../Common/ui/button";
import { Link } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";
import GoogleSignInButton from "../Common/ui/GoogleSignInButton";
export const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { mutate: signin, isLoading, error } = useSignIn();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    signin(formData);
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
        <div className="flex flex-col gap-3 justify-center">
          {" "}
          <Button disabled={isLoading} variant="secondary">
            {isLoading ? "Just a minute!" : "Sign In"}
          </Button>
          <GoogleSignInButton />
        </div>
      </form>
      {error && <p className="text-red-500">{error.message}</p>}

      <div className="flex justify-end mt-3 gap-1">
        <p>Don&apos;t have an account ?</p>
        <Link className="text-blue-700" to="/signup">
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};
