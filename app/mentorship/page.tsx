import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users } from "lucide-react";
import Link from "next/link";

export default function Mentorship() {
  // Mock data for mentors (replace with API data in a real application)
  const mentors = [
    {
      id: 1,
      name: "Sarah Williams",
      industry: "Technology",
      expertise: "Software Development",
      availability: "Available",
    },
    {
      id: 2,
      name: "Michael Chen",
      industry: "Finance",
      expertise: "Investment Banking",
      availability: "Available",
    },
    {
      id: 3,
      name: "Emily Davis",
      industry: "Healthcare",
      expertise: "Medical Research",
      availability: "Limited",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="bg-white shadow mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Mentorship Hub</h1>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/directory"
                className="text-gray-600 hover:text-gray-900"
              >
                Directory
              </Link>
              <Link
                href="/events"
                className="text-gray-600 hover:text-gray-900"
              >
                Events
              </Link>
              <Link
                href="/profile"
                className="text-gray-600 hover:text-gray-900"
              >
                <Button>Profile</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <Label htmlFor="search" className="sr-only">
              Search Mentors
            </Label>
            <div className="flex gap-2">
              <Input
                id="search"
                placeholder="Search mentors by name or expertise"
                className="w-full"
              />
              <Button>
                <Users className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div>
              <Label htmlFor="industryFilter" className="sr-only">
                Filter by Industry
              </Label>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Opportunities */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Find a Mentor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id}>
              <CardHeader>
                <CardTitle>{mentor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Industry: {mentor.industry}</p>
                <p className="text-gray-600">Expertise: {mentor.expertise}</p>
                <p className="text-gray-500">
                  Availability: {mentor.availability}
                </p>
                <Button variant="outline" className="mt-4">
                  <Link href={`/mentorship/${mentor.id}`}>Connect</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action for Mentors */}
      <section className="max-w-7xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Be a Mentor?</h2>
        <p className="text-gray-600 mb-6">
          Share your expertise and guide the next generation of alumni.
        </p>
        <Button size="lg">
          <Link href="/mentorship/apply">Apply to Mentor</Link>
        </Button>
      </section>
    </div>
  );
}
