import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen text-[rgb(255,255,253)]">
      <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

export default Root;
