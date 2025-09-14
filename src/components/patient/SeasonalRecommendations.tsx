import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Snowflake, 
  Sun, 
  Cloud, 
  Leaf,
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  Calendar,
  ChefHat,
  Activity,
  Clock,
  Moon
} from "lucide-react";

const SeasonalRecommendations = () => {
  const currentSeason = {
    name: "Winter",
    period: "December - February",
    dosha: "Vata & Kapha",
    icon: Snowflake,
    color: "ayur-vata",
    description: "Cold, dry season that increases Vata dosha and can accumulate Kapha"
  };

  const currentWeather = {
    temperature: "12°C",
    humidity: "65%",
    condition: "Cloudy",
    windSpeed: "15 km/h",
    location: "Delhi, India"
  };

  const seasonalFoods = {
    recommended: [
      {
        name: "Warming Spices",
        items: ["Ginger", "Cinnamon", "Cardamom", "Cloves", "Black pepper"],
        benefit: "Increase digestive fire and warm the body",
        icon: ChefHat
      },
      {
        name: "Cooked Grains",
        items: ["Quinoa", "Basmati rice", "Oats", "Barley"],
        benefit: "Easy to digest and grounding",
        icon: ChefHat
      },
      {
        name: "Healthy Fats",
        items: ["Ghee", "Sesame oil", "Almonds", "Walnuts"],
        benefit: "Nourish and protect against cold",
        icon: ChefHat
      },
      {
        name: "Root Vegetables",
        items: ["Sweet potato", "Carrots", "Beets", "Turnips"],
        benefit: "Grounding and warming properties",
        icon: ChefHat
      }
    ],
    avoid: [
      {
        name: "Cold Foods",
        items: ["Ice cream", "Cold drinks", "Raw salads", "Frozen foods"],
        reason: "Increases Vata and reduces digestive fire"
      },
      {
        name: "Light/Dry Foods",
        items: ["Crackers", "Dry cereals", "Popcorn", "Raw vegetables"],
        reason: "Can aggravate Vata dosha"
      }
    ]
  };

  const seasonalRoutines = [
    {
      time: "Morning (6:00-7:00 AM)",
      activities: [
        "Drink warm water with lemon and ginger",
        "Oil massage (Abhyanga) with sesame oil",
        "Gentle yoga or stretching",
        "Warm shower",
        "Meditation or pranayama"
      ],
      icon: Sun
    },
    {
      time: "Afternoon (12:00-1:00 PM)",
      activities: [
        "Eat your largest meal when digestive fire is strongest",
        "Include warming spices in cooking",
        "Take a short walk after eating",
        "Stay hydrated with warm drinks"
      ],
      icon: Clock
    },
    {
      time: "Evening (6:00-8:00 PM)",
      activities: [
        "Light dinner with warm, cooked foods",
        "Gentle exercise like walking",
        "Avoid screen time 1 hour before bed",
        "Drink warm milk with turmeric"
      ],
      icon: Moon
    }
  ];

  const regionalAdaptations = [
    {
      region: "Northern India",
      climate: "Very cold, dry winters",
      adaptations: [
        "Increase ghee and warm oils",
        "More warming spices in all meals",
        "Hot herbal teas throughout the day",
        "Indoor yoga and breathing exercises"
      ]
    },
    {
      region: "Coastal Areas",
      climate: "Mild winters with humidity",
      adaptations: [
        "Balance warming foods with light cooking",
        "Include digestive spices to counter humidity",
        "Moderate exercise suitable for climate",
        "Adjust oil massage frequency"
      ]
    }
  ];

  const weeklyMealPlan = [
    {
      day: "Monday",
      theme: "Warm & Grounding",
      breakfast: "Oatmeal with cinnamon and almonds",
      lunch: "Kitchari with winter vegetables",
      dinner: "Mung dal soup with basmati rice",
      special: "Golden milk before bed"
    },
    {
      day: "Tuesday", 
      theme: "Nourishing",
      breakfast: "Quinoa porridge with dates",
      lunch: "Vegetable curry with chapati",
      dinner: "Lentil stew with steamed greens",
      special: "Herbal tea with ginger"
    },
    {
      day: "Wednesday",
      theme: "Digestive Support",
      breakfast: "Warm milk with cardamom",
      lunch: "Spiced vegetable rice",
      dinner: "Light soup with whole grains",
      special: "Triphala tea before bed"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Current Season & Weather */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <currentSeason.icon className="h-5 w-5" />
              Current Season
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold text-ayur-vata">{currentSeason.name}</h3>
                <p className="text-sm text-muted-foreground">{currentSeason.period}</p>
              </div>
              <Badge className="bg-ayur-vata/10 text-ayur-vata">
                {currentSeason.dosha} Season
              </Badge>
              <p className="text-sm">{currentSeason.description}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Current Weather
            </CardTitle>
            <CardDescription>{currentWeather.location}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-ayur-pitta" />
                <span className="text-sm">{currentWeather.temperature}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-ayur-vata" />
                <span className="text-sm">{currentWeather.humidity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{currentWeather.condition}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{currentWeather.windSpeed}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seasonal Foods */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChefHat className="h-5 w-5" />
            Winter Food Recommendations
          </CardTitle>
          <CardDescription>
            Foods that balance Vata and support your constitution during winter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-ayur-success mb-3">✓ Recommended Foods</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {seasonalFoods.recommended.map((category, index) => (
                  <div key={index} className="p-4 bg-ayur-success/5 rounded-lg">
                    <h5 className="font-medium mb-2">{category.name}</h5>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {category.items.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{category.benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-ayur-pitta mb-3">⚠ Foods to Limit</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {seasonalFoods.avoid.map((category, index) => (
                  <div key={index} className="p-4 bg-ayur-pitta/5 rounded-lg">
                    <h5 className="font-medium mb-2">{category.name}</h5>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {category.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{category.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Routine */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Winter Daily Routine (Dinacharya)
          </CardTitle>
          <CardDescription>
            Ayurvedic daily schedule adapted for winter season
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seasonalRoutines.map((routine, index) => {
              const IconComponent = routine.icon;
              return (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className="h-5 w-5 text-ayur-orange" />
                    <h4 className="font-semibold">{routine.time}</h4>
                  </div>
                  <ul className="space-y-2">
                    {routine.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-ayur-vata rounded-full mt-2"></div>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Regional Adaptations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Regional Adaptations
          </CardTitle>
          <CardDescription>
            Customize recommendations based on your location
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionalAdaptations.map((region, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="mb-3">
                  <h4 className="font-semibold">{region.region}</h4>
                  <p className="text-sm text-muted-foreground">{region.climate}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {region.adaptations.map((adaptation, adaptIndex) => (
                    <div key={adaptIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-ayur-kapha rounded-full mt-2"></div>
                      <span>{adaptation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Meal Theme */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            This Week's Seasonal Menu
          </CardTitle>
          <CardDescription>
            Winter-appropriate meals planned for your dosha
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyMealPlan.map((day, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{day.day}</h4>
                  <Badge variant="outline" className="text-xs">
                    {day.theme}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="font-medium text-ayur-orange">Breakfast</p>
                    <p className="text-muted-foreground">{day.breakfast}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ayur-orange">Lunch</p>
                    <p className="text-muted-foreground">{day.lunch}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ayur-orange">Dinner</p>
                    <p className="text-muted-foreground">{day.dinner}</p>
                  </div>
                  <div>
                    <p className="font-medium text-ayur-vata">Special</p>
                    <p className="text-muted-foreground">{day.special}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4 bg-ayur-orange hover:bg-ayur-orange/90">
            Apply This Week's Menu
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SeasonalRecommendations;