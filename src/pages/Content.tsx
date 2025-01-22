//import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { AlertTriangle, ThumbsUp, MessageCircle, Share, Eye } from 'lucide-react';

const Content = () => {
  const { posts } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Content Moderation</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.userId}`}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">User ID: {post.userId}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              {post.reported && (
                <span className="flex items-center text-red-600">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Reported
                </span>
              )}
            </div>
            
            <p className="mt-4 text-gray-700">{post.content}</p>
            
            <div className="mt-4 flex items-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-1" />
                <span>{post.likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>{post.comments.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Share className="w-4 h-4 mr-1" />
                <span>{post.shares.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{post.views.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                Remove Post
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Mark as Safe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;