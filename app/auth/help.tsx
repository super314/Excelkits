"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Help = () => {
  const selected = useSelectedLayoutSegment();

  const isReg = selected === "register";

  return (
    <div className="text-center">
      {isReg ? (
        <p className="text-gray-500">
          Already have account?
          <Link href="/auth/login" className="px-1 text-blue-400">
            Login
          </Link>
        </p>
      ) : (
        <p className="text-gray-500">
          Don't have account?
          <Link href="/auth/register" className="px-1 text-blue-400">
            Register
          </Link>
        </p>
      )}
    </div>
  );
};
