import React from "react";
import { Activity } from "./types/activity";
import "./styles/index.css";
import RecentActivityTable from "./components/RecentActivityTable";

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

const App: React.FC = () => {
  return (
    <div className="bg-white rounded p-4">
      <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
      <RecentActivityTable data={activities} />
    </div>
  );
};

export default App;
