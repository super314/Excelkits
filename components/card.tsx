export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="p-6 border rounded-md w-96">{children}</div>;
};
