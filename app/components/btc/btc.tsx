// components/btc/btc.tsx
'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Skeleton } from '@/components/ui/skeleton'; // Assuming you're using shadcn for the skeleton loader

// Define the type for the API response
interface BitcoinData {
  prices: [number, number][]; // Array of [timestamp, price] pairs
}

const BitcoinChart = () => {
  const [data, setData] = useState<BitcoinData | null>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const res = await fetch('/api/btc');
        if (!res.ok) throw new Error('Failed to fetch Bitcoin data');
        const result: BitcoinData = await res.json(); 
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  if (loading) {
    return (
      <div className="bg-dark-paper rounded-lg shadow-lg p-6">
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!data || !data.prices) {
    return <div className="text-white">No data available</div>;
  }

  // Prepare the chart data
  const chartData = data.prices.map((price) => ({
    time: new Date(price[0]).toLocaleTimeString(),
    price: parseFloat(price[1].toFixed(2)), // Format price to 2 decimal places
  }));

  // Calculate min and max values for the Y-axis
  const minPrice = Math.min(...chartData.map((d) => d.price));
  const maxPrice = Math.max(...chartData.map((d) => d.price));

  // Add some padding to the range
  const padding = (maxPrice - minPrice) * 0.1; 
  const yAxisDomain = [minPrice - padding, maxPrice + padding];

  // Format Y-axis values with a dollar sign
  const formatYAxis = (value: number) => `$${value.toLocaleString()}`;

  return (
    <div className="bg-dark-paper rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Bitcoin Price (Last 24h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#9CA3AF" />
          <YAxis
            stroke="#9CA3AF"
            domain={[yAxisDomain[0], yAxisDomain[1]]} // Dynamic range
            tickFormatter={formatYAxis} // Format Y-axis values
            width={90} 
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
            }}
            formatter={(value: number) => `$${value.toLocaleString()}`} // Format tooltip values
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#00bcd4"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BitcoinChart;