import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Database, 
  Calendar, 
  Activity,
  UserPlus,
  Plus,
  Search,
  Clock,
  TrendingUp,
  Home
} from "lucide-react";

interface DoctorDashboardProps {
  onBack: () => void;
}

const DoctorDashboard = ({ onBack }: DoctorDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-ayur-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AD</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">AyurDiet Management System</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, Dr. Sharma</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Activity className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
                New Diet Chart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-2">
            <Button variant="secondary" className="w-full justify-start bg-ayur-orange/10 text-ayur-orange">
              <Home className="h-4 w-4 mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="h-4 w-4 mr-3" />
              Patients
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Database className="h-4 w-4 mr-3" />
              Food Database
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-3" />
              Diet Charts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-3" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Activity className="h-4 w-4 mr-3" />
              Ayurvedic Tools
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-ayur-vata/10 rounded-lg">
                    <Users className="h-6 w-6 text-ayur-vata" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Patients</p>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-xs text-ayur-success">↑ 12% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-ayur-vata/10 rounded-lg">
                    <FileText className="h-6 w-6 text-ayur-vata" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Diet Charts Created</p>
                    <p className="text-2xl font-bold">342</p>
                    <p className="text-xs text-ayur-success">↑ 8% this month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-ayur-vata/10 rounded-lg">
                    <Database className="h-6 w-6 text-ayur-vata" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Food Items</p>
                    <p className="text-2xl font-bold">8,247</p>
                    <p className="text-xs text-muted-foreground">In database</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-ayur-vata/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-ayur-vata" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Appointments</p>
                    <p className="text-2xl font-bold">28</p>
                    <p className="text-xs text-muted-foreground">Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Dosha Distribution */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Dosha Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-ayur-vata rounded-full"></div>
                      <span className="text-sm">Vata</span>
                    </div>
                    <span className="font-semibold">432</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-ayur-pitta rounded-full"></div>
                      <span className="text-sm">Pitta</span>
                    </div>
                    <span className="font-semibold">398</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-ayur-kapha rounded-full"></div>
                      <span className="text-sm">Kapha</span>
                    </div>
                    <span className="font-semibold">417</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ayur-orange rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">Diet chart created for Priya Sharma</p>
                      <p className="text-muted-foreground">(Vata imbalance)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ayur-success rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">New patient registered - Raj Kumar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ayur-vata rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">Food database updated</p>
                      <p className="text-muted-foreground">15 new items added</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ayur-pitta rounded-full mt-2"></div>
                    <div className="text-sm">
                      <p className="font-medium">Consultation completed</p>
                      <p className="text-muted-foreground">Anita Gupta</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-ayur-orange hover:bg-ayur-orange/90">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add New Patient
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Create Diet Chart
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Food Database
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;