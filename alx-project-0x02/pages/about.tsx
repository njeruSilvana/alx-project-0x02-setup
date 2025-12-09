import React from "react";
   import Header from "@/components/layout/Header";
   import Button from "@/components/common/Button";

   const AboutPage: React.FC = () => {
     return (
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow bg-gray-50 p-8">
           <div className="container mx-auto">
             <h1 className="text-4xl font-bold text-gray-800 mb-6">
               About Page
             </h1>
             <p className="text-lg text-gray-600 mb-8">
               Learn more about our application and mission. Below are examples of our button component with different sizes and shapes.
             </p>
             
             <div className="bg-white p-8 rounded-lg shadow-md">
               <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                 Button Examples
               </h2>
               <div className="flex flex-wrap gap-4 items-center">
                 <Button 
                   title="Small Button" 
                   size="small" 
                   shape="rounded-sm" 
                 />
                 <Button 
                   title="Medium Button" 
                   size="medium" 
                   shape="rounded-md" 
                 />
                 <Button 
                   title="Large Button" 
                   size="large" 
                   shape="rounded-full" 
                 />
               </div>
             </div>
           </div>
         </main>
       </div>
     );
   };

   export default AboutPage;