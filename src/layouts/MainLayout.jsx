import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="sticky top-0 shadow-sm">
        <Navbar />
      </header>
      <main className="min-h-screen bg-surface">
        <Outlet />
      </main>
        <Footer />
    </div>
  );
};

export default MainLayout;
