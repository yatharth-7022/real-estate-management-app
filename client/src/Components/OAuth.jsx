import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error("Error during sign-in:", error);
        throw error;
      }
    } catch (err) {
      console.error("Error during authentication:", err);
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
