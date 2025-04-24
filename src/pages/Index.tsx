
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import ApiQueryBox from "@/components/ApiQueryBox";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50/60 to-blue-50/60 dark:from-slate-900/80 dark:to-slate-800/80">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl/none">
                  API Key Nexus Hub
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl dark:text-gray-300">
                  Secure API key management for D.Y. Patil College of Engineering students. 
                  Verify your identity and access powerful APIs with ease.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to={isLoggedIn ? "/dashboard" : "/login"}>
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 text-sm font-medium text-white shadow transition-colors">
                    {isLoggedIn ? "Go to Dashboard" : "Get Started"} 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/api-docs">
                  <Button variant="outline" className="inline-flex h-10 items-center justify-center rounded-md border border-purple-200 bg-white/60 backdrop-blur-sm px-8 text-sm font-medium text-purple-700 shadow-sm transition-colors hover:bg-purple-50 dark:border-slate-700 dark:bg-slate-800/60 dark:text-purple-300">
                    API Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md animate-fade-in bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 border border-purple-100 dark:border-slate-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800 dark:text-purple-200">Try Our API</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
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
                    className="bg-white/50 backdrop-blur-sm text-purple-700 dark:bg-slate-800/50 dark:text-purple-300"
                  >
                    Learn More
                  </Button>
                  <Link to={isLoggedIn ? "/get-api-key" : "/login"}>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      {isLoggedIn ? "Get API Key" : "Sign Up to Access"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced styling */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent sm:text-5xl">Features</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform provides secure API key management with identity verification
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <div className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-b from-purple-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg transition-all hover:shadow-xl border border-purple-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">Identity Verification</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Verify your identity using your student ID to access our APIs
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg transition-all hover:shadow-xl border border-blue-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">API Key Management</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Generate and manage multiple API keys for different projects
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg p-6 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 shadow-lg transition-all hover:shadow-xl border border-indigo-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">Usage Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track API usage and monitor requests per key on your dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

