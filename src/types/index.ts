export interface User {
  id: string;
  username: string;
  email: string;
  joinDate: string;
  lastActive: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isVerified: boolean;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  reported: boolean;
}

export interface AnalyticsData {
  date: string;
  users: number;
  posts: number;
  engagement: number;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalPosts: number;
  reportedContent: number;
  dailyActiveUsers: number;
  averageEngagement: number;
}