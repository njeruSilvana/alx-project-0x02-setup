import React, { useState } from "react";
   import Header from "@/components/layout/Header";
   import Card from "@/components/common/Card";
   import PostModal from "@/components/common/PostModal";
   import { PostData } from "@/interfaces";

   const HomePage: React.FC = () => {
     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
     const [posts, setPosts] = useState<PostData[]>([]);

     const handleAddPost = (data: PostData) => {
       setPosts([...posts, data]);
     };

     return (
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow bg-gray-50 p-8">
           <div className="container mx-auto">
             <div className="flex justify-between items-center mb-8">
               <h1 className="text-4xl font-bold text-gray-800">
                 Home Page
               </h1>
               <button
                 onClick={() => setIsModalOpen(true)}
                 className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
               >
                 Add Post
               </button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {posts.length === 0 ? (
                 <p className="text-gray-500 col-span-full text-center py-8">
                   No posts yet. Click Add Post to create one!
                 </p>
               ) : (
                 posts.map((post, index) => (
                   <Card 
                     key={index} 
                     title={post.title} 
                     content={post.content} 
                   />
                 ))
               )}
             </div>

             <PostModal
               isOpen={isModalOpen}
               onClose={() => setIsModalOpen(false)}
               onSubmit={handleAddPost}
             />
           </div>
         </main>
       </div>
     );
   };

   export default HomePage;