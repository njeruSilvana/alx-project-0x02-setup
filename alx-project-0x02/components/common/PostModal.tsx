import React, { useState } from "react";
   import { PostModalProps } from "@/interfaces";

   const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
     const [title, setTitle] = useState<string>("");
     const [content, setContent] = useState<string>("");

     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       onSubmit({ title, content });
       setTitle("");
       setContent("");
       onClose();
     };

     if (!isOpen) return null;

     return (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
           <h2 className="text-2xl font-bold text-gray-800 mb-6">
             Create New Post
           </h2>
           <form onSubmit={handleSubmit}>
             <div className="mb-4">
               <label className="block text-sm font-medium text-gray-700 mb-2">
                 Title
               </label>
               <input
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="Enter post title"
                 required
               />
             </div>
             <div className="mb-6">
               <label className="block text-sm font-medium text-gray-700 mb-2">
                 Content
               </label>
               <textarea
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 rows={4}
                 placeholder="Enter post content"
                 required
               />
             </div>
             <div className="flex gap-3">
               <button
                 type="submit"
                 className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
               >
                 Submit
               </button>
               <button
                 type="button"
                 onClick={onClose}
                 className="flex-1 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
               >
                 Cancel
               </button>
             </div>
           </form>
         </div>
       </div>
     );
   };

   export default PostModal;