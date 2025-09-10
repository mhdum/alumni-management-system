import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Users, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, John Doe!
            </h1>
            <p className="mt-2 text-gray-600">
              Stay connected with your alumni network
            </p>
          </div>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/profile">Edit Profile</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/chat">Chat Now</Link>
            </Button>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" /> Connections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">245</p>
              <p className="text-sm text-gray-600">Alumni in your network</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" /> Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-600">Upcoming events</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" /> Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
              <p className="text-sm text-gray-600">Unread messages</p>
            </CardContent>
          </Card>
        </div>
        {/* Recent Activity Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="/placeholder.jpg" alt="Alumni" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    John Doe posted a new job opportunity
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </li>
              <li className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="/placeholder.jpg" alt="Alumni" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    Sarah Miller joined an event
                  </p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </li>
              <li className="flex items-center">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="/placeholder.jpg" alt="Alumni" />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">
                    Alex Rogers updated their profile
                  </p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </li>
            </ul>
            <Button variant="link" className="mt-4 w-full text-blue-600">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}