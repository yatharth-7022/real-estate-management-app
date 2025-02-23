import useUser from "../hooks/useUser";

export const Home = () => {
  const { data: user } = useUser();
  return <div>Home</div>;
};
