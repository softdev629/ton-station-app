import { MouseEventHandler, ReactNode } from 'react';  

interface ButtonProps {  
  className?: string;  
  children: ReactNode;
  onClick?: MouseEventHandler;
}  

const Button: React.FC<ButtonProps> = ({ className = "", children, onClick = () => {} }) => {  
  return (  
    <button  
      className={`rounded-3xl bg-primary text-black font-medium flex justify-center items-center gap-2 ${className}`}  
      onClick={onClick}
    >  
      {children}  
    </button>  
  );  
};  

export default Button;