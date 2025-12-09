import React from "react";
   import { UserProps } from "@/interfaces";

   const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website }) => {
     return (
       <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
           {name}
         </h2>
         <div className="space-y-2">
           <p className="text-gray-600">
             <span className="font-medium text-gray-800">Email:</span> {email}
           </p>
           <p className="text-gray-600">
             <span className="font-medium text-gray-800">Address:</span>{" "}
             {address.street}, {address.suite}, {address.city} - {address.zipcode}
           </p>
           <p className="text-gray-600">
             <span className="font-medium text-gray-800">Phone:</span> {phone}
           </p>
           <p className="text-gray-600">
             <span className="font-medium text-gray-800">Website:</span>{" "}
             <a 
               href={`https://${website}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-blue-600 hover:underline"
             >
               {website}
             </a>
           </p>
         </div>
       </div>
     );
   };

   export default UserCard;