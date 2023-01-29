import { useRouter } from "next/router";
import authApi from "@/pages/api/auth";
import { useAuthStore } from "@/store/store";

const SignOut = () => {
  const { push } = useRouter();

  const { setUser, setIsAuth } = useAuthStore((state) => ({
    setUser: state.setUser,
    setIsAuth: state.setIsAuth,
  }));

  const handleSubmit = () => {
    setUser(null);
    setIsAuth(false);
    authApi.signOut();
    push("/");
  };

  return (
    <button
      onClick={handleSubmit}
      className="btn border border-slate-400 rounded-xl py-2 px-4 backdrop-blur-lg filter bg-transparent hover:border-zinc-600 hover:text-gray-800 transition-all duration-150 text-sm"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
