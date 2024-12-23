import Link from "next/link";
import { ReadonlyURLSearchParams, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/ssr/server";

export interface RegisterProps {
  params: ReadonlyURLSearchParams;
}

export const Register = ({ params }: RegisterProps) => {
  const { email, password, error }: any = params;

  const onRegister = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return redirect(`/auth/register?email=${email}&password=${password}&error=${error.message}`);
    }

    return redirect(`/auth/login?email=${email}&password=${password}`);
  };

  return (
    <div>
      <p className="mb-6 text-center text-xl">SignUp</p>
      <form action={onRegister}>
        {error && (
          <div className="bg-red-200 mb-4 px-4 py-2 border border-red-300 rounded-md text-gray-700 text-sm leading-tight">
            {error}
          </div>
        )}
        <input
          name="email"
          className="mb-4 px-4 py-1 border rounded-md w-full"
          defaultValue={email}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          className="mb-4 px-4 py-1 border rounded-md w-full"
          defaultValue={password}
          placeholder="Password"
        />
        <p className="mb-4">
          <Link href="/auth/forgot" className="text-blue-400 text-sm">
            Forgot Password?
          </Link>
        </p>
        <input type="submit" className="block hover:bg-gray-50 py-1 border rounded-md w-full cursor-pointer" />
      </form>
    </div>
  );
};
