import { User, Post, AnalyticsData, DashboardStats } from '../types';

export const mockDashboardStats: DashboardStats = {
  totalUsers: 15234,
  activeUsers: 8756,
  totalPosts: 45678,
  reportedContent: 123,
  dailyActiveUsers: 5432,
  averageEngagement: 76.5
};

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah_creator',
    email: 'sarah@example.com',
    joinDate: '2024-01-15',
    lastActive: '2024-03-14',
    postsCount: 156,
    followersCount: 12400,
    followingCount: 890,
    isVerified: true
  },
  // Add more mock users as needed
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    content: 'This is a sample post content',
    createdAt: '2024-03-14T10:00:00Z',
    views: 1234,
    likes: 567,
    shares: 123,
    comments: 89,
    reported: false
  },
  // Add more mock posts as needed
];

export const mockAnalytics: AnalyticsData[] = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  users: Math.floor(Math.random() * 1000) + 500,
  posts: Math.floor(Math.random() * 500) + 200,
  engagement: Math.floor(Math.random() * 85) + 15
}));