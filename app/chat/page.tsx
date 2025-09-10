"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", text: "Hey, how's it going?", time: "10:30 AM" },
    { id: 2, sender: "You", text: "Doing great, thanks!", time: "10:32 AM" },
    { id: 3, sender: "John Doe", text: "Any updates on the alumni meetup?", time: "10:35 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "You",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">Alumni Chat</CardTitle>
              <Button asChild variant="outline">
                <Link href="/dashboard">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[70%] ${
                      message.sender === "You" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.jpg" alt={message.sender} />
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === "You"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}