import { Helmet } from "react-helmet-async";

import DashboardCard from "./dashboard-card";

const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <DashboardCard title="Receita total" dateType="mês" />
          <DashboardCard title="Pedidos" dateType="mês" icon="utensils" />
          <DashboardCard title="Pedidos" dateType="dia" icon="utensils" />
          <DashboardCard title="Cancelamentos" dateType="mês" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
