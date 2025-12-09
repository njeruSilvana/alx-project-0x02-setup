import React from "react";
   import { CardProps } from "@/interfaces";

   const Card: React.FC<CardProps> = ({ title, content }) => {
     return (
       <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
         <h2 className="text-2xl font-semibold text-gray-800 mb-3">
           {title}
         </h2>
         <p className="text-gray-600 leading-relaxed">
           {content}
         </p>
       </div>
     );
   };

   export default Card;