import React from "react";

interface Activity {
  timestamp: string;
  action: string;
  user: string;
}

const App: React.FC = () => {
  const activities: Activity[] = [
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
    <div className="bg-white rounded p-4">
      <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Timestamp</th>
            <th className="text-left p-2">Action</th>
            <th className="text-left p-2">User</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{activity.timestamp}</td>
              <td className="p-2">{activity.action}</td>
              <td className="p-2">{activity.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
