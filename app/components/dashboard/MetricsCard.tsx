import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MetricsCard() {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle>Key Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-blue-400">AD Spend</p>
            <p className="text-2xl font-bold">$1,780</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-blue-400">Total Sales</p>
            <p className="text-2xl font-bold">$124,780</p>
            <p className="text-sm text-green-400">+12.5%</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-blue-400">ROAS</p>
            <p className="text-2xl font-bold">$24,780</p>
            <p className="text-sm text-green-400">+12.5%</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-sm text-green-400">Customers</p>
            <p className="text-2xl font-bold">1,429</p>
            <p className="text-sm text-green-400">+8.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
