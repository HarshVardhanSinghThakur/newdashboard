import DashboardLayout from './components/layout/DashboardLayout';
import LineChartComponent from './components/charts/Linechart';
import BarChartComponent from './components/charts/Barchart';
import PieChartComponent from './components/charts/PieChart';
import MetricsCard from './components/dashboard/MetricsCard';


export default function DashboardPage() {
  return (
    <DashboardLayout>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black text-white p-6">
        <LineChartComponent />
        <MetricsCard />
        <BarChartComponent />
        <PieChartComponent />
      </div>
    </DashboardLayout>
  );
}
