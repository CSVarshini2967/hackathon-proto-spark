import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Clock, 
  CheckCircle2, 
  Play, 
  Pause,
  RotateCcw,
  User,
  Wind,
  Sun,
  Mountain
} from "lucide-react";
import { useState } from "react";

const ExerciseTracker = () => {
  const [activeExercise, setActiveExercise] = useState<number | null>(null);
  const [timer, setTimer] = useState(0);

  const todayExercises = [
    {
      id: 1,
      name: "Surya Namaskara",
      description: "Sun Salutation - Traditional yoga sequence",
      duration: 15,
      difficulty: "Beginner",
      dosha: "All Doshas",
      completed: true,
      calories: 45,
      icon: Sun,
      benefits: ["Flexibility", "Strength", "Circulation"],
      instructions: [
        "Start in mountain pose",
        "Raise arms overhead",
        "Forward fold with hands to floor",
        "Step back to plank",
        "Lower to chaturanga",
        "Upward facing dog",
        "Downward facing dog",
        "Step forward and rise"
      ]
    },
    {
      id: 2,
      name: "Pranayama Breathing",
      description: "Alternate nostril breathing for Vata balance",
      duration: 10,
      difficulty: "Beginner",
      dosha: "Vata",
      completed: true,
      calories: 15,
      icon: Wind,
      benefits: ["Calm mind", "Balance nervous system", "Reduce anxiety"],
      instructions: [
        "Sit comfortably with spine straight",
        "Use right thumb to close right nostril",
        "Inhale through left nostril for 4 counts",
        "Close left nostril, release right",
        "Exhale through right nostril for 4 counts",
        "Repeat for 5-10 cycles"
      ]
    },
    {
      id: 3,
      name: "Evening Walk",
      description: "Gentle walk for digestion and grounding",
      duration: 20,
      difficulty: "Easy",
      dosha: "Vata-Kapha",
      completed: false,
      calories: 80,
      icon: Mountain,
      benefits: ["Digestion", "Grounding", "Fresh air"],
      instructions: [
        "Choose a peaceful route",
        "Walk at comfortable pace",
        "Focus on breathing naturally",
        "Observe nature around you",
        "End with 5 deep breaths"
      ]
    },
    {
      id: 4,
      name: "Gentle Yoga Flow",
      description: "Restorative poses for evening relaxation",
      duration: 25,
      difficulty: "Beginner",
      dosha: "Vata",
      completed: false,
      calories: 60,
      icon: User,
      benefits: ["Flexibility", "Relaxation", "Better sleep"],
      instructions: [
        "Child's pose - 2 minutes",
        "Cat-cow stretches - 5 rounds",
        "Seated forward fold - 3 minutes",
        "Supine spinal twist - 2 minutes each side",
        "Legs up the wall - 5 minutes",
        "Savasana - 5 minutes"
      ]
    }
  ];

  const weeklyStats = {
    totalMinutes: 185,
    targetMinutes: 210,
    exercisesCompleted: 12,
    caloriesBurned: 420,
    streak: 5
  };

  const completedToday = todayExercises.filter(ex => ex.completed).length;
  const totalToday = todayExercises.length;
  const todayCalories = todayExercises.filter(ex => ex.completed).reduce((sum, ex) => sum + ex.calories, 0);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Daily Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-success/10 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-ayur-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-lg font-bold">{completedToday}/{totalToday}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-pitta/10 rounded-lg">
                <Clock className="h-5 w-5 text-ayur-pitta" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Minutes</p>
                <p className="text-lg font-bold">{weeklyStats.totalMinutes}</p>
                <p className="text-xs text-muted-foreground">this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-vata/10 rounded-lg">
                <Activity className="h-5 w-5 text-ayur-vata" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="text-lg font-bold">{todayCalories}</p>
                <p className="text-xs text-muted-foreground">today</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-kapha/10 rounded-lg">
                <Mountain className="h-5 w-5 text-ayur-kapha" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Streak</p>
                <p className="text-lg font-bold">{weeklyStats.streak}</p>
                <p className="text-xs text-muted-foreground">days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Weekly Exercise Goal
          </CardTitle>
          <CardDescription>
            {weeklyStats.totalMinutes} of {weeklyStats.targetMinutes} minutes completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={(weeklyStats.totalMinutes / weeklyStats.targetMinutes) * 100} className="h-3 mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{Math.round((weeklyStats.totalMinutes / weeklyStats.targetMinutes) * 100)}% complete</span>
            <span>{weeklyStats.targetMinutes - weeklyStats.totalMinutes} minutes remaining</span>
          </div>
        </CardContent>
      </Card>

      {/* Today's Exercise Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Today's Ayurvedic Exercise Plan
          </CardTitle>
          <CardDescription>Tailored for Vata constitution and current season</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {todayExercises.map((exercise) => {
              const IconComponent = exercise.icon;
              const isActive = activeExercise === exercise.id;
              
              return (
                <div key={exercise.id} className={`border rounded-lg p-4 transition-all ${
                  exercise.completed 
                    ? 'bg-ayur-success/5 border-ayur-success/20' 
                    : isActive
                    ? 'bg-ayur-orange/5 border-ayur-orange/20'
                    : 'bg-card hover:bg-muted/20'
                }`}>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg ${
                      exercise.completed 
                        ? 'bg-ayur-success/10' 
                        : 'bg-ayur-vata/10'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        exercise.completed 
                          ? 'text-ayur-success' 
                          : 'text-ayur-vata'
                      }`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold flex items-center gap-2">
                            {exercise.name}
                            {exercise.completed && (
                              <CheckCircle2 className="h-4 w-4 text-ayur-success" />
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">{exercise.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium">{exercise.duration} min</span>
                          <p className="text-xs text-muted-foreground">{exercise.calories} cal</p>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {exercise.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {exercise.dosha}
                        </Badge>
                        {exercise.benefits.map((benefit) => (
                          <Badge key={benefit} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      {/* Timer for active exercise */}
                      {isActive && (
                        <div className="bg-ayur-orange/10 rounded p-3 mb-3">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-mono">{formatTime(timer)}</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Pause className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <RotateCcw className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Instructions */}
                      {isActive && (
                        <div className="bg-muted/50 rounded p-3 mb-3">
                          <h5 className="font-medium mb-2">Instructions:</h5>
                          <ol className="text-sm space-y-1">
                            {exercise.instructions.map((instruction, index) => (
                              <li key={index} className="flex gap-2">
                                <span className="text-ayur-orange font-medium">{index + 1}.</span>
                                <span>{instruction}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {exercise.completed ? (
                          <Button size="sm" variant="ghost" className="text-ayur-success">
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Completed
                          </Button>
                        ) : isActive ? (
                          <Button 
                            size="sm" 
                            className="bg-ayur-success hover:bg-ayur-success/90"
                            onClick={() => setActiveExercise(null)}
                          >
                            Mark Complete
                          </Button>
                        ) : (
                          <Button 
                            size="sm" 
                            className="bg-ayur-orange hover:bg-ayur-orange/90"
                            onClick={() => setActiveExercise(exercise.id)}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Start Exercise
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExerciseTracker;