import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  // Mock data for the profile (replace with API data in a real application)
  const profile = {
    name: "John Doe",
    graduationYear: 2015,
    industry: "Technology",
    jobTitle: "Software Engineer",
    location: "San Francisco, CA",
    bio: "Experienced software engineer with a passion for building scalable web applications. Always eager to mentor students and connect with fellow alumni.",
    email: "john.doe@example.com",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="bg-white shadow mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Profile
            </h1>
            <nav className="flex gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/directory" className="text-gray-600 hover:text-gray-900">
                Directory
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-gray-900">
                Events
              </Link>
              <Link href="/mentorship" className="text-gray-600 hover:text-gray-900">
                Mentorship
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <CardTitle className="text-2xl">{profile.name}</CardTitle>
                  <p className="text-gray-600">{profile.jobTitle}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">Graduation Year: {profile.graduationYear}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">Industry: {profile.industry}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">Location: {profile.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <p className="text-gray-600">Email: {profile.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Bio</p>
                  <p className="text-gray-500">{profile.bio}</p>
                </div>
                <div className="flex gap-4">
                  <Button>
                    <Link href="/profile/edit">Edit Profile</Link>
                  </Button>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full">
                  <Link href="/mentorship/apply">Apply to Mentor</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Link href="/events">View Events</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  <Link href="/directory">Browse Directory</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Edit Profile Section (Placeholder for modal or separate page) */}
      <section className="max-w-7xl mx-auto mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Update Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  defaultValue={profile.name}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  type="text"
                  defaultValue={profile.jobTitle}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  type="text"
                  defaultValue={profile.industry}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  defaultValue={profile.location}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue={profile.bio}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}