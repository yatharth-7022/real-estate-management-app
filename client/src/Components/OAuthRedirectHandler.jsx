import { useEffect } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const OAuthRedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthStateChange = () => {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          const user = session.user;

          localStorage.setItem(
            "googleUser",
            JSON.stringify({
              email: user.email,
              name: user.user_metadata.full_name,
              avatar: user.user_metadata.avatar_url,
            })
          );

          console.log("User data saved to localStorage:", user);
          navigate("/");
        }
      });
    };

    const checkExistingSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Error checking session:", error);
        return;
      }

      if (session?.user) {
        const user = session.user;

        localStorage.setItem(
          "googleUser",
          JSON.stringify({
            email: user.email,
            name: user.user_metadata.full_name,
            avatar: user.user_metadata.avatar_url,
          })
        );

        console.log("Existing session found and saved to localStorage:", user);
        navigate("/");
      }
    };

    checkExistingSession();
    handleAuthStateChange();

    return () => {
      supabase.auth.onAuthStateChange(null);
    };
  }, [navigate]);

  return <div>Processing login...</div>;
};

export default OAuthRedirectHandler;
