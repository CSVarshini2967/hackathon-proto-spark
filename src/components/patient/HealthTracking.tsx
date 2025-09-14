import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Scale, 
  Heart, 
  Activity, 
  Moon, 
  Zap,
  Target,
  Calendar,
  BarChart3
} from "lucide-react";

const HealthTracking = () => {
  const healthMetrics = [
    {
      name: "Weight",
      current: 68,
      target: 65,
      unit: "kg",
      progress: 75,
      trend: "down",
      icon: Scale,
      color: "ayur-success"
    },
    {
      name: "Energy Level",
      current: 8,
      target: 10,
      unit: "/10",
      progress: 80,
      trend: "up",
      icon: Zap,
      color: "ayur-pitta"
    },
    {
      name: "Sleep Quality",
      current: 7,
      target: 9,
      unit: "/10",
      progress: 78,
      trend: "up",
      icon: Moon,
      color: "ayur-vata"
    },
    {
      name: "Digestion",
      current: 9,
      target: 10,
      unit: "/10",
      progress: 90,
      trend: "stable",
      icon: Heart,
      color: "ayur-kapha"
    }
  ];

  const weeklyProgress = [
    { day: "Mon", weight: 69.2, energy: 6, sleep: 6, digestion: 8 },
    { day: "Tue", weight: 69.0, energy: 7, sleep: 7, digestion: 8 },
    { day: "Wed", weight: 68.8, energy: 7, sleep: 6, digestion: 9 },
    { day: "Thu", weight: 68.5, energy: 8, sleep: 8, digestion: 9 },
    { day: "Fri", weight: 68.2, energy: 8, sleep: 7, digestion: 9 },
    { day: "Sat", weight: 68.0, energy: 8, sleep: 8, digestion: 9 },
    { day: "Sun", weight: 68.0, energy: 8, sleep: 7, digestion: 9 }
  ];

  const daysOnProgram = 89;
  const startWeight = 75;
  const currentWeight = 68;
  const weightLost = startWeight - currentWeight;

  return (
    <div className="space-y-6">
      {/* Journey Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Your Ayurvedic Wellness Journey
          </CardTitle>
          <CardDescription>
            Started {daysOnProgram} days ago • Lost {weightLost}kg so far
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-ayur-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-8 w-8 text-ayur-success" />
              </div>
              <p className="text-2xl font-bold text-ayur-success">{weightLost}kg</p>
              <p className="text-sm text-muted-foreground">Weight Lost</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ayur-pitta/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-ayur-pitta" />
              </div>
              <p className="text-2xl font-bold text-ayur-pitta">{daysOnProgram}</p>
              <p className="text-sm text-muted-foreground">Days Consistent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-ayur-vata/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="h-8 w-8 text-ayur-vata" />
              </div>
              <p className="text-2xl font-bold text-ayur-vata">85%</p>
              <p className="text-sm text-muted-foreground">Goal Progress</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Health Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <Card key={metric.name}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 bg-${metric.color}/10 rounded-lg`}>
                    <IconComponent className={`h-5 w-5 text-${metric.color}`} />
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      metric.trend === 'up' ? 'bg-ayur-success/10 text-ayur-success' :
                      metric.trend === 'down' ? 'bg-ayur-pitta/10 text-ayur-pitta' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {metric.trend === 'up' ? '↗' : metric.trend === 'down' ? '↘' : '→'} 
                      {metric.trend}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{metric.name}</span>
                    <span className="text-sm font-medium">
                      {metric.current}{metric.unit}
                    </span>
                  </div>
                  <Progress value={metric.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Target: {metric.target}{metric.unit}</span>
                    <span>{metric.progress}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Weekly Progress Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Weekly Progress
              </CardTitle>
              <CardDescription>Track your daily improvements</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View Full History
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Weight Progress */}
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Scale className="h-4 w-4 text-ayur-success" />
                Weight Progress
              </h4>
              <div className="flex items-end gap-2 h-32">
                {weeklyProgress.map((day) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-ayur-success/20 rounded-t flex items-end justify-center pb-1"
                      style={{ height: `${((75 - day.weight) / 7) * 100}%` }}
                    >
                      <span className="text-xs font-medium">{day.weight}</span>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Energy & Sleep */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-ayur-pitta" />
                  Energy Levels
                </h4>
                <div className="flex items-end gap-2 h-20">
                  {weeklyProgress.map((day) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-ayur-pitta/20 rounded-t flex items-end justify-center pb-1"
                        style={{ height: `${(day.energy / 10) * 100}%` }}
                      >
                        <span className="text-xs font-medium">{day.energy}</span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Moon className="h-4 w-4 text-ayur-vata" />
                  Sleep Quality
                </h4>
                <div className="flex items-end gap-2 h-20">
                  {weeklyProgress.map((day) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-ayur-vata/20 rounded-t flex items-end justify-center pb-1"
                        style={{ height: `${(day.sleep / 10) * 100}%` }}
                      >
                        <span className="text-xs font-medium">{day.sleep}</span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dosha Balance Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Dosha Balance Assessment
          </CardTitle>
          <CardDescription>
            Based on your daily inputs and progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <div className="w-3 h-3 bg-ayur-vata rounded-full"></div>
                  Vata (Air + Space)
                </span>
                <span className="text-sm text-muted-foreground">Balanced</span>
              </div>
              <Progress value={65} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Good digestion, steady energy. Continue warm foods.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <div className="w-3 h-3 bg-ayur-pitta rounded-full"></div>
                  Pitta (Fire + Water)
                </span>
                <span className="text-sm text-muted-foreground">Slightly High</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Good metabolism. Avoid spicy foods in afternoon.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <div className="w-3 h-3 bg-ayur-kapha rounded-full"></div>
                  Kapha (Earth + Water)
                </span>
                <span className="text-sm text-muted-foreground">Low</span>
              </div>
              <Progress value={40} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                Increase healthy fats and grounding foods.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthTracking;