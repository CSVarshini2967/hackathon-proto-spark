import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { 
  Brain,
  Calculator,
  Thermometer,
  Droplets,
  Flame,
  Apple,
  Clock,
  Target,
  BookOpen,
  Stethoscope,
  Activity,
  Zap
} from "lucide-react";

const AyurvedicTools = () => {
  // State for BMI & Dosha Calculator
  const [bmiData, setBmiData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: ''
  });
  const [bmiResult, setBmiResult] = useState(null);

  // State for Daily Calorie Calculator
  const [calorieData, setCalorieData] = useState({
    age: '',
    weight: '',
    activityLevel: '',
    doshaType: ''
  });
  const [calorieResult, setCalorieResult] = useState(null);

  // State for Meal Timing Guide
  const [timingData, setTimingData] = useState({
    doshaType: '',
    season: '',
    lifestyle: '',
    workSchedule: ''
  });
  const [timingResult, setTimingResult] = useState(null);

  // BMI & Dosha Calculator Logic
  const calculateBMI = () => {
    const height = parseFloat(bmiData.height);
    const weight = parseFloat(bmiData.weight);
    const age = parseInt(bmiData.age);
    
    if (!height || !weight || !age || !bmiData.gender) {
      alert('Please fill all fields');
      return;
    }

    const bmi = weight / ((height / 100) ** 2);
    let category = '';
    let dosha = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
      dosha = 'Vata dominant';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      dosha = 'Balanced constitution';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      dosha = 'Kapha tendency';
    } else {
      category = 'Obese';
      dosha = 'Kapha excess';
    }

    setBmiResult({
      bmi: bmi.toFixed(1),
      category,
      dosha,
      recommendations: getAyurvedicRecommendations(dosha)
    });
  };

  // Daily Calorie Calculator Logic
  const calculateCalories = () => {
    const age = parseInt(calorieData.age);
    const weight = parseFloat(calorieData.weight);
    
    if (!age || !weight || !calorieData.activityLevel || !calorieData.doshaType) {
      alert('Please fill all fields');
      return;
    }

    // Base metabolic rate calculation (simplified)
    let bmr = 88.362 + (13.397 * weight) + (4.799 * 170) - (5.677 * age); // Assuming average height
    
    // Activity multipliers
    const activityMultipliers = {
      'sedentary': 1.2,
      'light': 1.375,
      'moderate': 1.55,
      'active': 1.725,
      'very-active': 1.9
    };

    // Dosha-specific adjustments
    const doshaAdjustments = {
      'vata': 1.1, // Higher metabolism
      'pitta': 1.05, // Moderate metabolism
      'kapha': 0.95 // Slower metabolism
    };

    const totalCalories = Math.round(bmr * activityMultipliers[calorieData.activityLevel] * doshaAdjustments[calorieData.doshaType]);

    setCalorieResult({
      totalCalories,
      doshaType: calorieData.doshaType,
      mealDistribution: getDoshaSpecificMealPlan(calorieData.doshaType, totalCalories)
    });
  };

  // Meal Timing Calculator Logic
  const calculateMealTiming = () => {
    if (!timingData.doshaType || !timingData.season) {
      alert('Please select dosha type and season');
      return;
    }

    const mealTimings = getMealTimingByDosha(timingData.doshaType, timingData.season);
    setTimingResult(mealTimings);
  };

  // Helper functions
  const getAyurvedicRecommendations = (dosha) => {
    const recommendations = {
      'Vata dominant': ['Warm, cooked foods', 'Regular meal times', 'Sweet, sour, salty tastes', 'Avoid raw/cold foods'],
      'Balanced constitution': ['Balanced diet', 'All six tastes', 'Seasonal eating', 'Mindful eating practices'],
      'Kapha tendency': ['Light, warm foods', 'Spicy, bitter, astringent tastes', 'Regular exercise', 'Avoid dairy/sweet'],
      'Kapha excess': ['Light, dry foods', 'Fasting periods', 'Stimulating spices', 'Increase physical activity']
    };
    return recommendations[dosha] || [];
  };

  const getDoshaSpecificMealPlan = (dosha, totalCalories) => {
    const distributions = {
      'vata': { breakfast: '25%', lunch: '40%', dinner: '25%', snacks: '10%' },
      'pitta': { breakfast: '20%', lunch: '50%', dinner: '20%', snacks: '10%' },
      'kapha': { breakfast: '30%', lunch: '50%', dinner: '20%', snacks: '0%' }
    };
    
    const dist = distributions[dosha];
    return {
      breakfast: Math.round(totalCalories * parseFloat(dist.breakfast) / 100),
      lunch: Math.round(totalCalories * parseFloat(dist.lunch) / 100),
      dinner: Math.round(totalCalories * parseFloat(dist.dinner) / 100),
      snacks: Math.round(totalCalories * parseFloat(dist.snacks) / 100)
    };
  };

  const getMealTimingByDosha = (dosha, season) => {
    const baseTimes = {
      'vata': { breakfast: '7:00-8:00 AM', lunch: '12:00-1:00 PM', dinner: '6:00-7:00 PM' },
      'pitta': { breakfast: '7:00-8:00 AM', lunch: '12:00-1:00 PM', dinner: '6:00-7:00 PM' },
      'kapha': { breakfast: '7:00-8:00 AM', lunch: '11:00-12:00 PM', dinner: '5:00-6:00 PM' }
    };

    const seasonalAdjustments = {
      'summer': 'Earlier meals recommended due to heat',
      'winter': 'Later, warmer meals support digestion',
      'spring': 'Light meals to balance kapha season',
      'autumn': 'Regular, grounding meals for vata season'
    };

    return {
      ...baseTimes[dosha],
      seasonalNote: seasonalAdjustments[season],
      guidelines: [
        'Eat in a calm environment',
        'Chew food thoroughly',
        'Avoid drinking water during meals',
        'Rest after meals for proper digestion'
      ]
    };
  };
  const toolCategories = [
    {
      title: "Dosha Assessment Tools",
      icon: Brain,
      color: "ayur-vata",
      tools: [
        { name: "Prakriti Analysis", description: "Determine patient's natural constitution", users: "1,247" },
        { name: "Vikriti Assessment", description: "Current dosha imbalance evaluation", users: "892" },
        { name: "Pulse Diagnosis Guide", description: "Traditional pulse reading reference", users: "654" }
      ]
    },
    {
      title: "Nutrition Calculators",
      icon: Calculator,
      color: "ayur-pitta",
      tools: [
        { name: "BMR Calculator", description: "Ayurvedic metabolic rate calculation", users: "2,156" },
        { name: "Rasa Balance Calculator", description: "Six taste proportion optimizer", users: "1,432" },
        { name: "Meal Timing Optimizer", description: "Optimal eating schedule by dosha", users: "987" }
      ]
    },
    {
      title: "Food Property Analysis",
      icon: Apple,
      color: "ayur-kapha",
      tools: [
        { name: "Virya Assessment", description: "Hot/Cold food property analyzer", users: "1,876" },
        { name: "Digestibility Checker", description: "Food combination compatibility", users: "1,345" },
        { name: "Seasonal Food Guide", description: "Season-appropriate food suggestions", users: "1,123" }
      ]
    },
    {
      title: "Clinical References",
      icon: BookOpen,
      color: "ayur-orange",
      tools: [
        { name: "Herb Database", description: "Comprehensive medicinal plants guide", users: "756" },
        { name: "Symptom Analyzer", description: "Dosha-based symptom mapping", users: "623" },
        { name: "Treatment Protocols", description: "Standard Ayurvedic treatment plans", users: "498" }
      ]
    }
  ];

  const quickCalculators = [
    {
      name: "BMI & Dosha Calculator",
      description: "Calculate BMI with Ayurvedic body type analysis",
      icon: Calculator,
      inputs: ["Height", "Weight", "Age", "Gender"]
    },
    {
      name: "Daily Calorie Needs",
      description: "Dosha-specific caloric requirement calculator",
      icon: Target,
      inputs: ["Age", "Weight", "Activity Level", "Dosha Type"]
    },
    {
      name: "Meal Timing Guide",
      description: "Optimal eating schedule based on dosha and season",
      icon: Clock,
      inputs: ["Dosha Type", "Season", "Lifestyle", "Work Schedule"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Ayurvedic Tools & Resources</h2>
          <p className="text-muted-foreground">Traditional wisdom enhanced with modern technology</p>
        </div>
        <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
          <BookOpen className="h-4 w-4 mr-2" />
          Access Full Library
        </Button>
      </div>

      {/* Quick Calculators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Quick Calculators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* BMI & Dosha Calculator */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-ayur-orange/10 rounded-lg">
                  <Calculator className="h-5 w-5 text-ayur-orange" />
                </div>
                <div>
                  <h3 className="font-medium">BMI & Dosha Calculator</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Calculate BMI with Ayurvedic body type analysis</p>
              
              <div className="space-y-3">
                <div>
                  <Label>Height (cm)</Label>
                  <Input 
                    value={bmiData.height}
                    onChange={(e) => setBmiData({...bmiData, height: e.target.value})}
                    placeholder="170"
                    type="number"
                  />
                </div>
                <div>
                  <Label>Weight (kg)</Label>
                  <Input 
                    value={bmiData.weight}
                    onChange={(e) => setBmiData({...bmiData, weight: e.target.value})}
                    placeholder="70"
                    type="number"
                  />
                </div>
                <div>
                  <Label>Age</Label>
                  <Input 
                    value={bmiData.age}
                    onChange={(e) => setBmiData({...bmiData, age: e.target.value})}
                    placeholder="30"
                    type="number"
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <Select value={bmiData.gender} onValueChange={(value) => setBmiData({...bmiData, gender: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateBMI} className="w-full bg-ayur-orange hover:bg-ayur-orange/90">
                  Calculate BMI & Dosha
                </Button>
              </div>

              {bmiResult && (
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <h4 className="font-medium">Results:</h4>
                  <p>BMI: <strong>{bmiResult.bmi}</strong></p>
                  <p>Category: <strong>{bmiResult.category}</strong></p>
                  <p>Dosha: <strong>{bmiResult.dosha}</strong></p>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Recommendations:</p>
                    <ul className="text-sm list-disc list-inside">
                      {bmiResult.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Daily Calorie Calculator */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-ayur-orange/10 rounded-lg">
                  <Target className="h-5 w-5 text-ayur-orange" />
                </div>
                <div>
                  <h3 className="font-medium">Daily Calorie Needs</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Dosha-specific caloric requirement calculator</p>
              
              <div className="space-y-3">
                <div>
                  <Label>Age</Label>
                  <Input 
                    value={calorieData.age}
                    onChange={(e) => setCalorieData({...calorieData, age: e.target.value})}
                    placeholder="30"
                    type="number"
                  />
                </div>
                <div>
                  <Label>Weight (kg)</Label>
                  <Input 
                    value={calorieData.weight}
                    onChange={(e) => setCalorieData({...calorieData, weight: e.target.value})}
                    placeholder="70"
                    type="number"
                  />
                </div>
                <div>
                  <Label>Activity Level</Label>
                  <Select value={calorieData.activityLevel} onValueChange={(value) => setCalorieData({...calorieData, activityLevel: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary</SelectItem>
                      <SelectItem value="light">Light Activity</SelectItem>
                      <SelectItem value="moderate">Moderate Activity</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="very-active">Very Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Dosha Type</Label>
                  <Select value={calorieData.doshaType} onValueChange={(value) => setCalorieData({...calorieData, doshaType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select dosha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vata">Vata</SelectItem>
                      <SelectItem value="pitta">Pitta</SelectItem>
                      <SelectItem value="kapha">Kapha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateCalories} className="w-full bg-ayur-orange hover:bg-ayur-orange/90">
                  Calculate Calories
                </Button>
              </div>

              {calorieResult && (
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <h4 className="font-medium">Daily Calories: <strong>{calorieResult.totalCalories}</strong></h4>
                  <p className="text-sm mt-2">Meal Distribution ({calorieResult.doshaType} dosha):</p>
                  <div className="text-sm">
                    <p>• Breakfast: {calorieResult.mealDistribution.breakfast} cal</p>
                    <p>• Lunch: {calorieResult.mealDistribution.lunch} cal</p>
                    <p>• Dinner: {calorieResult.mealDistribution.dinner} cal</p>
                    {calorieResult.mealDistribution.snacks > 0 && (
                      <p>• Snacks: {calorieResult.mealDistribution.snacks} cal</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Meal Timing Guide */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-ayur-orange/10 rounded-lg">
                  <Clock className="h-5 w-5 text-ayur-orange" />
                </div>
                <div>
                  <h3 className="font-medium">Meal Timing Guide</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Optimal eating schedule based on dosha and season</p>
              
              <div className="space-y-3">
                <div>
                  <Label>Dosha Type</Label>
                  <Select value={timingData.doshaType} onValueChange={(value) => setTimingData({...timingData, doshaType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select dosha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vata">Vata</SelectItem>
                      <SelectItem value="pitta">Pitta</SelectItem>
                      <SelectItem value="kapha">Kapha</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Season</Label>
                  <Select value={timingData.season} onValueChange={(value) => setTimingData({...timingData, season: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring">Spring</SelectItem>
                      <SelectItem value="summer">Summer</SelectItem>
                      <SelectItem value="autumn">Autumn</SelectItem>
                      <SelectItem value="winter">Winter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Lifestyle</Label>
                  <Select value={timingData.lifestyle} onValueChange={(value) => setTimingData({...timingData, lifestyle: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select lifestyle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office Worker</SelectItem>
                      <SelectItem value="active">Active Professional</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="home">Work from Home</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateMealTiming} className="w-full bg-ayur-orange hover:bg-ayur-orange/90">
                  Get Meal Schedule
                </Button>
              </div>

              {timingResult && (
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <h4 className="font-medium">Optimal Meal Times:</h4>
                  <div className="text-sm space-y-1">
                    <p>• Breakfast: {timingResult.breakfast}</p>
                    <p>• Lunch: {timingResult.lunch}</p>
                    <p>• Dinner: {timingResult.dinner}</p>
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground">{timingResult.seasonalNote}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Guidelines:</p>
                    <ul className="text-sm list-disc list-inside">
                      {timingResult.guidelines.map((guideline, idx) => (
                        <li key={idx}>{guideline}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tool Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {toolCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`p-2 bg-${category.color}/10 rounded-lg`}>
                  <category.icon className={`h-5 w-5 text-${category.color}`} />
                </div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {tool.users} users
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      Launch Tool
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Specialized Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5" />
            Specialized Assessment Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Thermometer className="h-8 w-8 mx-auto mb-2 text-red-500" />
              <h3 className="font-medium">Agni Assessment</h3>
              <p className="text-sm text-muted-foreground">Digestive fire evaluation</p>
              <Button size="sm" className="mt-3 w-full" variant="outline">
                Start Assessment
              </Button>
            </div>
            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Droplets className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <h3 className="font-medium">Ojas Analysis</h3>
              <p className="text-sm text-muted-foreground">Vitality and immunity check</p>
              <Button size="sm" className="mt-3 w-full" variant="outline">
                Start Assessment
              </Button>
            </div>
            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Activity className="h-8 w-8 mx-auto mb-2 text-ayur-vata" />
              <h3 className="font-medium">Prana Evaluation</h3>
              <p className="text-sm text-muted-foreground">Life force assessment</p>
              <Button size="sm" className="mt-3 w-full" variant="outline">
                Start Assessment
              </Button>
            </div>
            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <Flame className="h-8 w-8 mx-auto mb-2 text-ayur-orange" />
              <h3 className="font-medium">Tejas Analysis</h3>
              <p className="text-sm text-muted-foreground">Mental clarity and focus</p>
              <Button size="sm" className="mt-3 w-full" variant="outline">
                Start Assessment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Knowledge Base */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Ayurvedic Knowledge Base
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-ayur-vata">Classical Texts</h4>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer hover:text-ayur-vata">• Charaka Samhita - Nutrition Guidelines</p>
                <p className="cursor-pointer hover:text-ayur-vata">• Sushruta Samhita - Dietary Protocols</p>
                <p className="cursor-pointer hover:text-ayur-vata">• Ashtanga Hridaya - Food Combinations</p>
                <p className="cursor-pointer hover:text-ayur-vata">• Bhava Prakasha - Medicinal Foods</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-ayur-pitta">Modern Research</h4>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer hover:text-ayur-pitta">• Clinical Studies on Dosha Types</p>
                <p className="cursor-pointer hover:text-ayur-pitta">• Nutrition Research Papers</p>
                <p className="cursor-pointer hover:text-ayur-pitta">• Evidence-Based Protocols</p>
                <p className="cursor-pointer hover:text-ayur-pitta">• Contemporary Applications</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-ayur-kapha">Practical Guides</h4>
              <div className="space-y-2 text-sm">
                <p className="cursor-pointer hover:text-ayur-kapha">• Seasonal Diet Planning</p>
                <p className="cursor-pointer hover:text-ayur-kapha">• Food Preparation Methods</p>
                <p className="cursor-pointer hover:text-ayur-kapha">• Patient Counseling Tips</p>
                <p className="cursor-pointer hover:text-ayur-kapha">• Case Study Examples</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AyurvedicTools;