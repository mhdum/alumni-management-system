import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function Events() {
  // Mock data for events (replace with API data in a real application)
  const events = [
    {
      id: 1,
      title: "Alumni Reunion 2025",
      date: "December 15, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "University Campus, Main Hall",
      description: "Join us for an evening of networking and reminiscing!",
    },
    {
      id: 2,
      title: "Tech Industry Webinar",
      date: "January 20, 2026",
      time: "2:00 PM - 3:30 PM",
      location: "Online (Zoom)",
      description: "Learn about the latest trends in technology from alumni experts.",
    },
    {
      id: 3,
      title: "Career Fair",
      date: "February 10, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "City Convention Center",
      description: "Connect with recruiters and explore job opportunities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="bg-white shadow mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Events
            </h1>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/directory" className="text-gray-600 hover:text-gray-900">
                Directory
              </Link>
              <Link href="/mentorship" className="text-gray-600 hover:text-gray-900">
                Mentorship
              </Link>
              <Button>Profile</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <Label htmlFor="search" className="sr-only">
              Search Events
            </Label>
            <div className="flex gap-2">
              <Input
                id="search"
                placeholder="Search events by title or location"
                className="w-full"
              />
              <Button>
                <Calendar className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="text-gray-600">{event.time}</p>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="text-gray-600">{event.location}</p>
                </div>
                <p className="text-gray-500 mb-4">{event.description}</p>
                <Button variant="outline">
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}