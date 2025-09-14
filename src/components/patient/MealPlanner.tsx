import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  ChefHat, 
  Flame, 
  Droplets, 
  CheckCircle2, 
  XCircle,
  Plus,
  Edit3
} from "lucide-react";

const MealPlanner = () => {
  const meals = [
    {
      id: 1,
      time: "7:00 AM",
      title: "Morning Detox",
      description: "Warm lemon water with honey",
      calories: 25,
      dosha: "Vata",
      taste: ["Sour", "Sweet"],
      temperature: "Warm",
      completed: true,
      properties: ["Digestive", "Cleansing"]
    },
    {
      id: 2,
      time: "8:30 AM",
      title: "Breakfast",
      description: "Quinoa porridge with almonds, dates and ghee",
      calories: 420,
      dosha: "Vata",
      taste: ["Sweet", "Astringent"],
      temperature: "Warm",
      completed: true,
      properties: ["Nourishing", "Grounding"]
    },
    {
      id: 3,
      time: "11:00 AM",
      title: "Mid-Morning",
      description: "Herbal tea with fresh ginger",
      calories: 15,
      dosha: "All",
      taste: ["Pungent"],
      temperature: "Hot",
      completed: false,
      properties: ["Digestive", "Warming"]
    },
    {
      id: 4,
      time: "1:30 PM",
      title: "Lunch",
      description: "Kitchari with seasonal vegetables and coconut",
      calories: 680,
      dosha: "Vata",
      taste: ["Sweet", "Salty", "Sour"],
      temperature: "Warm",
      completed: false,
      properties: ["Complete protein", "Easy to digest", "Balancing"]
    },
    {
      id: 5,
      time: "4:00 PM",
      title: "Afternoon Snack",
      description: "Golden milk with turmeric and cardamom",
      calories: 180,
      dosha: "Vata-Kapha",
      taste: ["Sweet", "Pungent"],
      temperature: "Warm",
      completed: false,
      properties: ["Anti-inflammatory", "Calming"]
    },
    {
      id: 6,
      time: "7:30 PM",
      title: "Dinner",
      description: "Mung dal soup with basmati rice and steamed greens",
      calories: 520,
      dosha: "Vata",
      taste: ["Sweet", "Astringent"],
      temperature: "Warm",
      completed: false,
      properties: ["Light", "Nourishing", "Easy to digest"]
    }
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const completedCalories = meals.filter(meal => meal.completed).reduce((sum, meal) => sum + meal.calories, 0);
  const completedMeals = meals.filter(meal => meal.completed).length;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-success/10 rounded-lg">
                <Flame className="h-5 w-5 text-ayur-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Calories</p>
                <p className="text-lg font-bold">{completedCalories}/{totalCalories}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-vata/10 rounded-lg">
                <ChefHat className="h-5 w-5 text-ayur-vata" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Meals</p>
                <p className="text-lg font-bold">{completedMeals}/{meals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-pitta/10 rounded-lg">
                <Droplets className="h-5 w-5 text-ayur-pitta" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Water</p>
                <p className="text-lg font-bold">6/8</p>
                <p className="text-xs text-muted-foreground">glasses</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-ayur-kapha/10 rounded-lg">
                <Clock className="h-5 w-5 text-ayur-kapha" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Meal</p>
                <p className="text-lg font-bold">11:00 AM</p>
                <p className="text-xs text-muted-foreground">in 2 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meal Timeline */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                Today's Ayurvedic Meal Plan
              </CardTitle>
              <CardDescription>Personalized for Vata constitution - Winter season</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Edit3 className="h-4 w-4 mr-2" />
              Customize Plan
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meals.map((meal, index) => (
              <div key={meal.id} className="relative">
                {/* Timeline connector */}
                {index < meals.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-8 bg-border"></div>
                )}
                
                <div className={`flex gap-4 p-4 rounded-lg border transition-all ${
                  meal.completed 
                    ? 'bg-ayur-success/5 border-ayur-success/20' 
                    : 'bg-card hover:bg-muted/20'
                }`}>
                  {/* Status Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {meal.completed ? (
                      <CheckCircle2 className="h-6 w-6 text-ayur-success" />
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/20 bg-background"></div>
                    )}
                  </div>

                  {/* Meal Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-ayur-orange">{meal.time}</span>
                          <h4 className="font-semibold">{meal.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{meal.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-ayur-success">{meal.calories}</span>
                        <p className="text-xs text-muted-foreground">calories</p>
                      </div>
                    </div>

                    {/* Properties */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {meal.dosha} balancing
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {meal.temperature}
                      </Badge>
                      {meal.taste.map((taste) => (
                        <Badge key={taste} variant="secondary" className="text-xs">
                          {taste}
                        </Badge>
                      ))}
                    </div>

                    {/* Ayurvedic Properties */}
                    <div className="flex flex-wrap gap-1">
                      {meal.properties.map((property) => (
                        <span key={property} className="text-xs text-ayur-vata bg-ayur-vata/10 px-2 py-1 rounded">
                          {property}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    {meal.completed ? (
                      <Button size="sm" variant="ghost" className="text-ayur-success">
                        Completed
                      </Button>
                    ) : (
                      <Button size="sm" className="bg-ayur-orange hover:bg-ayur-orange/90">
                        <Plus className="h-4 w-4 mr-1" />
                        Log Meal
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MealPlanner;