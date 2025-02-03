// app/analytics/page.tsx
import BitcoinChart from '../components/btc/btc';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '../components/layout/DashboardLayout';

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-dark-paper shadow-lg p-6">
          <CardHeader>
            <CardTitle className="text-white">Analytics Overview</CardTitle>
          </CardHeader>
          <div className="p-4 bg-dark-background rounded-lg shadow-lg">
            <h2 className="text-lg text-white font-semibold">Bitcoin Price Chart</h2>
            <p className="text-gray-400 mb-4">Real-time data from coingecko api</p>
            <BitcoinChart />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
