import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { DashboardProvider } from './app/Dashboard/store/dashboard-provider';

const Dashboard = lazy(() => import('./app/Dashboard/Dashboard'));
const Scheduler = lazy(() => import('./app/Scheduler/Scheduler'));

const App = () => {
  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider>
        }
      />
      <Route path="/scheduler/*" element={<Scheduler />} />
    </Routes>
  );
};

export default App;
