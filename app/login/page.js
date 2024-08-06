import { signInAction } from "@/lib/actions";
import { FcGoogle } from "react-icons/fc";

export const metadata = {
  title: "login",
};

export default function page() {
  return (
    <section className="relative min-h-screen pt-60">
      <div className="our-container text-center text-gray-200">
        <p className="mb-4 text-3xl md:mb-8 md:text-7xl">
          Login To Your <span className="textG">Account</span>
        </p>
        <form
          action={signInAction}
          className="gradientAnim m-auto w-fit rounded-md bg-red-300 p-0.5"
        >
          <button className="flex items-center gap-4 rounded-md bg-primary-800 px-4 py-2">
            <FcGoogle className="md:text-3xl" />
            <span className="capitalize md:text-2xl">continue with google</span>
          </button>
        </form>
      </div>
    </section>
  );
}
