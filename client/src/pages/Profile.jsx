import { Button } from "../Common/ui/button";
import { useRef } from "react";

export const Profile = () => {
  const storedUser = localStorage.getItem("googleUser");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const fileRef = useRef(null);
  return (
    <div className="flex flex-col max-w-fit mx-auto p-3  items-center justify-center mt-10 gap-4">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl text-center font-semibold">Profile</h1>
        <form className="flex flex-col gap-3">
          <input
            type="file"
            className="hidden"
            ref={fileRef}
            accept="image/*"
          />
          <img
            src={user?.avatar}
            className="h-24 rounded-full object-cover cursor-pointer w-24 self-center"
            alt="profile_image"
            onClick={() => fileRef.current.click()}
          />
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border p-3 rounded-xl"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border p-3 rounded-xl"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border p-3 rounded-xl"
          />
          <Button variant="secondary">Update</Button>
        </form>
      </div>
      <div className="flex text-red-600 font-medium justify-between w-full">
        <span className="hover:cursor-pointer hover:font-bold hover:underline ">
          Delete Account
        </span>
        <span className="hover:cursor-pointer hover:font-bold hover:underline ">
          Sign Out
        </span>
      </div>
    </div>
  );
};
