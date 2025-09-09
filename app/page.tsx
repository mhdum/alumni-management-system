import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Users, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">AlumniConnect</h1>
            <nav className="flex gap-4">
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
                href="/mentorship"
                className="text-gray-600 hover:text-gray-900"
              >
                Mentorship
              </Link>
              <Button>Sign In</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Connect, Engage, and Grow with AlumniConnect
          </h2>
          <p className="text-lg mb-6">
            Your centralized platform for alumni networking, mentorship, and
            events.
          </p>
          <Link href="/join">
            <Button size="lg" variant="secondary">
              Join Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why AlumniConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Alumni Directory</CardTitle>
              </CardHeader>
              <CardContent>
                Search and connect with alumni based on location, industry, or
                expertise.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Event Management</CardTitle>
              </CardHeader>
              <CardContent>
                Create and manage alumni events, reunions, and webinars
                effortlessly.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Mentorship Hub</CardTitle>
              </CardHeader>
              <CardContent>
                Facilitate mentorship and internship opportunities for students.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold">AlumniConnect</h3>
              <p className="mt-2 text-gray-400">
                Building stronger connections for a brighter future.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="mt-2 text-gray-400">
                Email: support@alumniconnect.com
              </p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
