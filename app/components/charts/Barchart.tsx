'use client';
import { useState, useEffect } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Product A', sales: 4000, returns: 240 },
  { name: 'Product B', sales: 3000, returns: 138 },
  { name: 'Product C', sales: 2000, returns: 980 },
  { name: 'Product D', sales: 2780, returns: 390 },
];

export default function BarChartComponent() {
  const [chartWidth, setChartWidth] = useState(400);

  useEffect(() => {
    const updateSize = () => {
      setChartWidth(window.innerWidth < 768 ? window.innerWidth - 40 : 400);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle>Sales by Product</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4f46e5" />
            <Bar dataKey="returns" fill="#10b981" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
