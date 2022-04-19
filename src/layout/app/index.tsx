import React from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Issues from "../../pages/issues";

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="min-w-0  flex-1 overflow-auto bg-white">
        <Header />
        <main className="overflow-hidden">
          <Issues />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
