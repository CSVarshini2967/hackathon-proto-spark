import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickCalculators.map((calc, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-ayur-orange/10 rounded-lg">
                    <calc.icon className="h-5 w-5 text-ayur-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">{calc.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{calc.description}</p>
                <div className="space-y-2">
                  {calc.inputs.slice(0, 2).map((input, idx) => (
                    <Input key={idx} placeholder={input} className="h-8" />
                  ))}
                  <Button size="sm" className="w-full bg-ayur-orange hover:bg-ayur-orange/90">
                    Calculate
                  </Button>
                </div>
              </div>
            ))}
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