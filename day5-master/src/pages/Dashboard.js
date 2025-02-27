import React from 'react';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  return (
    <div className="mt-5">
      <h2>Dashboard</h2>
      <p>This is your protected dashboard view.</p>
      <TaskList />
    </div>
  );
};

export default Dashboard;
