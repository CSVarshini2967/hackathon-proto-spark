import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  Target,
  Activity,
  Heart,
  Utensils,
  Clock,
  MessageSquare,
  TrendingUp,
  Award,
  Home,
  Mic,
  Bell,
  BarChart3,
  User,
  Volume2
} from "lucide-react";
import MealPlanner from "./patient/MealPlanner";
import HealthTracking from "./patient/HealthTracking";
import ExerciseTracker from "./patient/ExerciseTracker";
import VoiceInterface from "./patient/VoiceInterface";
import ConsultationHub from "./patient/ConsultationHub";

interface PatientDashboardProps {
  onBack: () => void;
}

const PatientDashboard = ({ onBack }: PatientDashboardProps) => {
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
                <div className="w-8 h-8 bg-ayur-vata rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">PS</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Welcome back, Priya!</h1>
                  <p className="text-sm text-muted-foreground">Your wellness journey continues</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Reminders
              </Button>
              <Button variant="outline" size="sm">
                <Mic className="h-4 w-4 mr-2" />
                Voice Input
              </Button>
              <Button className="bg-ayur-vata hover:bg-ayur-vata/90">
                <MessageSquare className="h-4 w-4 mr-2" />
                Consult Specialist
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="meals" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              Meal Plan
            </TabsTrigger>
            <TabsTrigger value="health" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Health
            </TabsTrigger>
            <TabsTrigger value="exercise" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Exercise
            </TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center gap-2">
              <Volume2 className="h-4 w-4" />
              Voice
            </TabsTrigger>
            <TabsTrigger value="consultation" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Consultation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Today's Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-ayur-success/10 rounded-lg">
                      <Target className="h-6 w-6 text-ayur-success" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Calories Today</p>
                      <p className="text-2xl font-bold">1,847</p>
                      <p className="text-xs text-ayur-success">Target: 2,000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-ayur-pitta/10 rounded-lg">
                      <Activity className="h-6 w-6 text-ayur-pitta" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Exercise</p>
                      <p className="text-2xl font-bold">25</p>
                      <p className="text-xs text-muted-foreground">minutes today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-ayur-vata/10 rounded-lg">
                      <Heart className="h-6 w-6 text-ayur-vata" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Water Intake</p>
                      <p className="text-2xl font-bold">6</p>
                      <p className="text-xs text-muted-foreground">glasses (8 target)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-ayur-kapha/10 rounded-lg">
                      <Award className="h-6 w-6 text-ayur-kapha" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Streak</p>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-xs text-ayur-success">days consistent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Diet Plan */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    Today's Ayurvedic Diet Plan
                  </CardTitle>
                  <CardDescription>Customized for your Vata constitution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-ayur-success/5 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Breakfast (8:00 AM)</h4>
                        <p className="text-sm text-muted-foreground">Warm oatmeal with almonds and dates</p>
                        <p className="text-xs text-ayur-success">✓ Completed - 420 calories</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">Sweet, Warm</span>
                        <p className="text-xs text-muted-foreground">Vata balancing</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-ayur-warning/5 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Mid-Morning (10:30 AM)</h4>
                        <p className="text-sm text-muted-foreground">Herbal tea with ginger</p>
                        <p className="text-xs text-ayur-warning">⏰ Upcoming</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">Warm, Spicy</span>
                        <p className="text-xs text-muted-foreground">Digestive aid</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Lunch (1:00 PM)</h4>
                        <p className="text-sm text-muted-foreground">Quinoa with roasted vegetables and ghee</p>
                        <p className="text-xs text-muted-foreground">Pending - 650 calories</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">Sweet, Sour</span>
                        <p className="text-xs text-muted-foreground">Grounding meal</p>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-ayur-orange hover:bg-ayur-orange/90">
                      View Complete Meal Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Health Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Health Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Weight Goal</span>
                          <span>68kg / 65kg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-ayur-success h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Energy Level</span>
                          <span>8/10</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-ayur-pitta h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Simple Exercises */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Today's Exercise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-ayur-success/5 rounded-lg">
                        <div>
                          <p className="font-medium">Morning Yoga</p>
                          <p className="text-xs text-muted-foreground">15 minutes</p>
                        </div>
                        <span className="text-xs text-ayur-success">✓ Done</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-ayur-warning/5 rounded-lg">
                        <div>
                          <p className="font-medium">Evening Walk</p>
                          <p className="text-xs text-muted-foreground">20 minutes</p>
                        </div>
                        <span className="text-xs text-ayur-warning">⏰ 6:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Seasonal Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Seasonal Tips
                    </CardTitle>
                    <CardDescription>Winter recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p>• Favor warm, cooked foods</p>
                      <p>• Add warming spices (ginger, cinnamon)</p>
                      <p>• Increase healthy fats</p>
                      <p>• Stay hydrated with warm drinks</p>
                      <p>• Practice oil massage</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="meals">
            <MealPlanner />
          </TabsContent>

          <TabsContent value="health">
            <HealthTracking />
          </TabsContent>

          <TabsContent value="exercise">
            <ExerciseTracker />
          </TabsContent>

          <TabsContent value="voice">
            <VoiceInterface />
          </TabsContent>

          <TabsContent value="consultation">
            <ConsultationHub />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientDashboard;