import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Stethoscope, User } from "lucide-react";

interface LandingPageProps {
  onSelectUserType: (type: 'doctor' | 'patient') => void;
}

const LandingPage = ({ onSelectUserType }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ayur-orange/5 via-background to-ayur-vata/5">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-ayur-orange rounded-full flex items-center justify-center mr-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">AyurDiet</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive Ayurvedic Diet Management System combining ancient wisdom with modern nutrition science
          </p>
        </div>

        {/* User Type Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Choose Your Dashboard</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Doctor/Practitioner Card */}
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-ayur-orange/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-ayur-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Ayurvedic Practitioner</CardTitle>
                <CardDescription className="text-base">
                  Manage patients, create diet charts, and track progress with Ayurvedic principles
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <p>✓ Patient Management</p>
                  <p>✓ Diet Chart Creation</p>
                  <p>✓ Dosha Analysis</p>
                  <p>✓ Appointment Scheduling</p>
                  <p>✓ Food Database Access</p>
                </div>
                <Button 
                  onClick={() => onSelectUserType('doctor')}
                  className="w-full bg-ayur-orange hover:bg-ayur-orange/90"
                >
                  Access Practitioner Dashboard
                </Button>
              </CardContent>
            </Card>

            {/* Patient Card */}
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-ayur-vata/50">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-ayur-vata rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Patient</CardTitle>
                <CardDescription className="text-base">
                  Track your health journey, follow personalized diet plans, and connect with specialists
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <p>✓ Personalized Diet Plans</p>
                  <p>✓ Health Progress Tracking</p>
                  <p>✓ Exercise Recommendations</p>
                  <p>✓ Calorie Management</p>
                  <p>✓ Direct Consultation</p>
                </div>
                <Button 
                  onClick={() => onSelectUserType('patient')}
                  variant="outline"
                  className="w-full border-ayur-vata text-ayur-vata hover:bg-ayur-vata hover:text-white"
                >
                  Access Patient Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-center mb-8">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-ayur-kapha rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">8,000+ Food Database</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive database covering Indian, multicultural, and international cuisines
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-ayur-pitta rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Dosha-Based Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Traditional Ayurvedic principles integrated with modern nutrition tracking
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-ayur-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Clinical Integration</h4>
              <p className="text-sm text-muted-foreground">
                HIPAA compliant with EHR integration capabilities for healthcare facilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;