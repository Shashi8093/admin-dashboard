import React from 'react';
import { useSelector } from 'react-redux';
import { Users, MessageSquare, Eye, Share2 } from 'lucide-react';
import { RootState } from '../store';
import StatCard from '../components/StatCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const Dashboard = () => {
  const { stats, analytics } = useSelector((state: RootState) => state.dashboard);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          icon={Users}
          trend={12}
        />
        <StatCard
          title="Daily Active Users"
          value={stats.dailyActiveUsers.toLocaleString()}
          icon={Eye}
          trend={8}
        />
        <StatCard
          title="Total Posts"
          value={stats.totalPosts.toLocaleString()}
          icon={MessageSquare}
          trend={15}
        />
        <StatCard
          title="Average Engagement"
          value={`${stats.averageEngagement}%`}
          icon={Share2}
          trend={5}
        />
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">User Activity Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                stroke="#6b7280"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#2563eb" 
                strokeWidth={2}
                dot={false}
                name="Active Users"
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="#16a34a" 
                strokeWidth={2}
                dot={false}
                name="Engagement %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;