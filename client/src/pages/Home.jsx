import useUser from "../hooks/useUser";

export const Home = () => {
  const { data: user } = useUser();
  console.log(user, "this is user data");
  return <div>Home</div>;
};
