import React from "react";

const RecentActivity = () => {
  const activities = [
    {
      timestamp: "2023-12-10 10:00",
      action: 'Task "Complete Security Audit" updated',
      user: "John Doe",
    },
    {
      timestamp: "2023-12-09 15:30",
      action: 'Task "Update Privacy Policy" created',
      user: "Jane Smith",
    },
    {
      timestamp: "2023-12-08 09:15",
      action: 'Task "Review Compliance Checklist" completed',
      user: "Alice Johnson",
    },
  ];

  return (
    <div>
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Action</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.timestamp}</td>
              <td>{activity.action}</td>
              <td>{activity.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
