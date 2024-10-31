import { ReactNode } from 'react';  

interface ButtonProps {  
  className?: string;  
  children: ReactNode;  
}  

const Button: React.FC<ButtonProps> = ({ className = "", children }) => {  
  return (  
    <button  
      className={`rounded-3xl bg-primary text-black font-medium flex justify-center items-center gap-2 ${className}`}  
    >  
      {children}  
    </button>  
  );  
};  

export default Button;