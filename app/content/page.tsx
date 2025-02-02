import DashboardLayout from '../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContentPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Content management interface would go here...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
