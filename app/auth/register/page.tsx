import { Register } from "@/components/ui/register";
import { ReadonlyURLSearchParams } from "next/navigation";

interface Props {
  searchParams: ReadonlyURLSearchParams;
}

const RegisterPage = ({ searchParams }: Props) => {
  return <Register params={searchParams} />;
};

export default RegisterPage;
