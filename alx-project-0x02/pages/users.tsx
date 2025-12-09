import React, { useState, useEffect } from "react";
   import Header from "@/components/layout/Header";
   import UserCard from "@/components/common/UserCard";
   import { UserProps } from "@/interfaces";

   const UsersPage: React.FC = () => {
     const [users, setUsers] = useState<UserProps[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
       const fetchUsers = async () => {
         try {
           const response = await fetch("https://jsonplaceholder.typicode.com/users");
           const data = await response.json();
           setUsers(data);
         } catch (error) {
           console.error("Error fetching users:", error);
         } finally {
           setLoading(false);
         }
       };

       fetchUsers();
     }, []);

     return (
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow bg-gray-50 p-8">
           <div className="container mx-auto">
             <h1 className="text-4xl font-bold text-gray-800 mb-8">
               Users Page
             </h1>
             
             {loading ? (
               <div className="text-center py-12">
                 <p className="text-xl text-gray-600">Loading users...</p>
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {users.map((user) => (
                   <UserCard key={user.id} {...user} />
                 ))}
               </div>
             )}
           </div>
         </main>
       </div>
     );
   };

   export default UsersPage;