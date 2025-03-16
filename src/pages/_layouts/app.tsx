import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
