import React from "react";
import Header from "./_component/Header";
import SideNav from "./_component/SideNav";

function DashboardLayout({ children }) {
  return (
    <div className="min-w-screen">
      <div className="hidden md:block h-screen bg-white fixed mt-[65px] w-56">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-64">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
