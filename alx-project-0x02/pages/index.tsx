import React from "react";

   const Home: React.FC = () => {
     return (
       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
         <div className="text-center">
           <h1 className="text-5xl font-bold text-white">
             Welcome to Next.js!
           </h1>
           <p className="mt-4 text-xl text-white">
             We are glad you are here. Explore and enjoy your experience.
           </p>
         </div>
       </div>
     );
   };

   export default Home;