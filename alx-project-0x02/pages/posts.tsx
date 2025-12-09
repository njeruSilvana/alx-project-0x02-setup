import React, { useState, useEffect } from "react";
   import Header from "@/components/layout/Header";
   import PostCard from "@/components/common/PostCard";
   import { PostProps } from "@/interfaces";

   const PostsPage: React.FC = () => {
     const [posts, setPosts] = useState<PostProps[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
       const fetchPosts = async () => {
         try {
           const response = await fetch("https://jsonplaceholder.typicode.com/posts");
           const data = await response.json();
           setPosts(data);
         } catch (error) {
           console.error("Error fetching posts:", error);
         } finally {
           setLoading(false);
         }
       };

       fetchPosts();
     }, []);

     return (
       <div className="flex flex-col min-h-screen">
         <Header />
         <main className="flex-grow bg-gray-50 p-8">
           <div className="container mx-auto">
             <h1 className="text-4xl font-bold text-gray-800 mb-8">
               Posts Page
             </h1>
             
             {loading ? (
               <div className="text-center py-12">
                 <p className="text-xl text-gray-600">Loading posts...</p>
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {posts.map((post) => (
                   <PostCard
                     key={post.id}
                     userId={post.userId}
                     id={post.id}
                     title={post.title}
                     body={post.body}
                   />
                 ))}
               </div>
             )}
           </div>
         </main>
       </div>
     );
   };

   export default PostsPage;