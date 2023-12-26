import useAuth from "@/hooks/useAuth";
import createJwt from "@/utils/createJwt";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = ({ from }) => {
  
  const { googleLogin } = useAuth();
  const { replace } = useRouter();


  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      await createJwt({ email: user.email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };

  return (
    <>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="btn btn-primary mt-5 mx-auto"
      >
        <FcGoogle className="text-3xl mr-3" /> Continue with google
      </button>
    </>
  );
};

export default GoogleLogin;
