import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
