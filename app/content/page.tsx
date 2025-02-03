import DashboardLayout from '../components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function ContentPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src="/images/content1.jpg" 
                alt="Blog Posts"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Manage and create engaging blog posts for your audience. Track performance and optimize content for better reach.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src="/images/content2.jpg" 
                alt="Media Library"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Media Library</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Organize and manage your media files. Upload, categorize, and easily access images, videos, and documents.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <Image
                src="/images/content3.jpg" 
                alt="Analytics"
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Gain insights into your content performance. Track views, engagement, and user behavior to make data-driven decisions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Content Section */}
        <Card>
          <CardHeader>
            <CardTitle>Content Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                A well-planned content strategy is key to engaging your audience and achieving your business goals. Here are some tips:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Create high-quality, relevant content.</li>
                <li>Use analytics to understand your audience.</li>
                <li>Optimize content for SEO and accessibility.</li>
                <li>Leverage multimedia to enhance engagement.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
