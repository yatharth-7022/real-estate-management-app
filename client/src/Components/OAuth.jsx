import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useGoogleSignIn } from "../hooks/useGoogleSignIn";
const OAuth = () => {
  const { mutate: signin } = useGoogleSignIn();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      signin({
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
      });
      console.log(result, "this is result");
    } catch (err) {
      console.log("Coult not authenticate from google ", err);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-600 w-full py-2 text-white font-bold rounded-l flex items-center justify-center gap-2 hover:bg-red-700"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
