import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { DashboardRoutes } from './dashboard-routes.enum';
import DashboardLayout from './layouts/DashboardLayout';

const Init = lazy(() => import('./pages/Init/Init'));
const Appointments = lazy(() => import('./pages/Appointments/Appointments'));

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path={DashboardRoutes.Init} element={<Init />} />
          <Route
            path={DashboardRoutes.Appointments}
            element={<Appointments />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default Dashboard;
