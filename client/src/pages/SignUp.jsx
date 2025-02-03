import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
export const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input className="border-2 p-3 " type="text" placeholder="Username" />
        <input className="border-2 p-3 " type="email" placeholder="Email" />
        <input
          className="border-2 p-3 "
          type="password"
          placeholder="Password"
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
