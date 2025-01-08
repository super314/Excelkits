import { Card } from "@/components/card";
import { Help } from "./help";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="place-items-center grid h-screen">
      <div className="flex flex-col gap-2">
        <Card>{children}</Card>
        <Help />
      </div>
    </div>
  );
};

export default AuthLayout;
