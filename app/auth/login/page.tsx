import Login from "@/components/ui/login";
import { ReadonlyURLSearchParams } from "next/navigation";

interface Props {
  searchParams: ReadonlyURLSearchParams;
}

const LoginPage = ({ searchParams }: Props) => {
  return <Login params={searchParams} />;
};

export default LoginPage;
