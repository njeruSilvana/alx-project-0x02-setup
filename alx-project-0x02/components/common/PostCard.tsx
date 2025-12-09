import React from "react";
   import { PostProps } from "@/interfaces";

   const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
     return (
       <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
         <h2 className="text-xl font-semibold text-gray-800 mb-3">
           {title}
         </h2>
         <p className="text-gray-600 leading-relaxed mb-4">
           {body}
         </p>
         <div className="pt-4 border-t border-gray-200">
           <p className="text-sm text-gray-500 font-medium">
             User ID: {userId}
           </p>
         </div>
       </div>
     );
   };

   export default PostCard;