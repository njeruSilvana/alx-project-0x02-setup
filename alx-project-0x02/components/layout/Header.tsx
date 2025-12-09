import React from "react";
   import Link from "next/link";

   const Header: React.FC = () => {
     return (
       <header className="bg-blue-600 text-white shadow-md">
         <nav className="container mx-auto flex gap-8 p-4">
           <Link 
             href="/home" 
             className="text-lg font-medium hover:text-gray-200 transition"
           >
             Home
           </Link>
           <Link 
             href="/about" 
             className="text-lg font-medium hover:text-gray-200 transition"
           >
             About
           </Link>
           <Link 
             href="/posts" 
             className="text-lg font-medium hover:text-gray-200 transition"
           >
             Posts
           </Link>
           <Link 
             href="/users" 
             className="text-lg font-medium hover:text-gray-200 transition"
           >
             Users
           </Link>
         </nav>
       </header>
     );
   };

   export default Header;