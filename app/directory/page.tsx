import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Directory() {
  // Mock data for alumni profiles (replace with API data in a real application)
  const alumni = [
    {
      id: 1,
      name: "John Doe",
      graduationYear: 2015,
      industry: "Technology",
      location: "San Francisco, CA",
      jobTitle: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      graduationYear: 2018,
      industry: "Finance",
      location: "New York, NY",
      jobTitle: "Financial Analyst",
    },
    {
      id: 3,
      name: "Alex Johnson",
      graduationYear: 2012,
      industry: "Healthcare",
      location: "Boston, MA",
      jobTitle: "Medical Researcher",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="bg-white shadow mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Alumni Directory
            </h1>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-gray-900">
                Events
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
              Search Alumni
            </Label>
            <div className="flex gap-2">
              <Input
                id="search"
                placeholder="Search by name, industry, or location"
                className="w-full"
              />
              <Button>
                <Search className="h-5 w-5 mr-2" />
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
            <div>
              <Label htmlFor="yearFilter" className="sr-only">
                Filter by Graduation Year
              </Label>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {[...Array(20)].map((_, i) => (
                    <SelectItem key={i} value={`${2025 - i}`}>
                      {2025 - i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni List */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Alumni Profiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alum) => (
            <Card key={alum.id}>
              <CardHeader>
                <CardTitle>{alum.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{alum.jobTitle}</p>
                <p className="text-gray-500">Industry: {alum.industry}</p>
                <p className="text-gray-500">Graduation Year: {alum.graduationYear}</p>
                <p className="text-gray-500">Location: {alum.location}</p>
                <Button variant="outline" className="mt-4">
                  <Link href={`/profile/${alum.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pagination (Placeholder) */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center">
        <Button variant="outline" className="mx-2">
          Previous
        </Button>
        <Button variant="outline" className="mx-2">
          Next
        </Button>
      </div>
    </div>
  );
}