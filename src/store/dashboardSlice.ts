import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { DashboardStats, User, Post, AnalyticsData } from '../types';
import { mockDashboardStats, mockUsers, mockPosts, mockAnalytics } from '../services/mockData';

interface DashboardState {
  stats: DashboardStats;
  users: User[];
  posts: Post[];
  analytics: AnalyticsData[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: mockDashboardStats,
  users: [],
  posts: [],
  analytics: [],
  loading: false,
  error: null,
};

export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      stats: mockDashboardStats,
      users: mockUsers,
      posts: mockPosts,
      analytics: mockAnalytics,
    };
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload.stats;
        state.users = action.payload.users;
        state.posts = action.payload.posts;
        state.analytics = action.payload.analytics;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch dashboard data';
      });
  },
});

export default dashboardSlice.reducer;