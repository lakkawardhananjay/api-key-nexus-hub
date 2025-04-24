import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import LlamaChat from "@/components/LlamaChat";
import ApiQueryBox from "@/components/ApiQueryBox";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in (would use actual auth in production)
  useState(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setIsLoggedIn(true);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  API Key Nexus Hub
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Secure API key management for D.Y. Patil College of Engineering students. 
                  Verify your identity and access powerful APIs with ease.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to={isLoggedIn ? "/dashboard" : "/login"}>
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1">
                    {isLoggedIn ? "Go to Dashboard" : "Get Started"} 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/api-docs">
                  <Button variant="outline" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1">
                    API Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md animate-fade-in">
                <CardHeader>
                  <CardTitle>Try Our LLaMA 3.2 API</CardTitle>
                  <CardDescription>
                    Experience the power of our API with this live demo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ApiQueryBox />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => toast.info("Get your API key to unlock full capabilities!")}
                  >
                    Learn More
                  </Button>
                  <Link to={isLoggedIn ? "/get-api-key" : "/login"}>
                    <Button>
                      {isLoggedIn ? "Get API Key" : "Sign Up to Access"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LLaMA 3.2 Demo Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Try LLaMA 3.2
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Experience the power of our LLaMA 3.2 API with this interactive demo. 
                Generate responses, analyze text, and see what's possible.
              </p>
            </div>
            <LlamaChat />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform provides secure API key management with identity verification
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Identity Verification</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Verify your identity using your student ID to access our APIs
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">API Key Management</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Generate and manage multiple API keys for different projects
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Usage Analytics</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Track API usage and monitor requests per key on your dashboard
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
