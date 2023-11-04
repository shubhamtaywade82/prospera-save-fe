import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/HomePage"; // Import your page components
import SavingsGroupsPage from "../../../pages/SavingsGroupsPage";
import MembersPage from "../../../pages/MembersPage";

const MainContent: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/savings-groups" element={<SavingsGroupsPage />} />
        <Route path="/members" element={<MembersPage />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </div>
  );
};

MainContent.displayName = "Main Content";

export default MainContent;
