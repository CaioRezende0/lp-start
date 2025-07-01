import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-6xl mx-auto px-6 md:px-10 ${className}`.trim()}>
      {children}
    </div>
  );
}
