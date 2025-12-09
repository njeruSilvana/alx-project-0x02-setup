import React from "react";
   import { ButtonProps } from "@/interfaces";

   const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
     const sizeClasses = {
       small: "px-4 py-2 text-sm",
       medium: "px-6 py-3 text-base",
       large: "px-8 py-4 text-lg",
     };

     return (
       <button
         className={`bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md ${sizeClasses[size]} ${shape}`}
       >
         {title}
       </button>
     );
   };

   export default Button;