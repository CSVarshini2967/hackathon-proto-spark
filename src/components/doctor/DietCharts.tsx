import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, 
  Plus, 
  Eye, 
  Edit,
  Download,
  Copy,
  Filter,
  Calendar,
  User,
  FileText
} from "lucide-react";

const DietCharts = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  const availableFoods = [
    { id: "rice", name: "Basmati Rice", category: "Grains", dosha: "Vata, Pitta", calories: 205 },
    { id: "quinoa", name: "Quinoa", category: "Grains", dosha: "All Doshas", calories: 222 },
    { id: "ghee", name: "Pure Ghee", category: "Fats", dosha: "All Doshas", calories: 112 },
    { id: "almonds", name: "Soaked Almonds", category: "Nuts", dosha: "Vata, Pitta", calories: 161 },
    { id: "turmeric", name: "Turmeric", category: "Spices", dosha: "All Doshas", calories: 29 },
    { id: "ginger", name: "Fresh Ginger", category: "Spices", dosha: "Vata, Kapha", calories: 4 },
    { id: "mung", name: "Mung Dal", category: "Legumes", dosha: "All Doshas", calories: 347 },
    { id: "spinach", name: "Fresh Spinach", category: "Vegetables", dosha: "Pitta, Kapha", calories: 23 },
    { id: "carrot", name: "Carrot", category: "Vegetables", dosha: "Vata, Pitta", calories: 41 },
    { id: "dates", name: "Medjool Dates", category: "Fruits", dosha: "Vata", calories: 66 },
    { id: "coconut", name: "Fresh Coconut", category: "Fruits", dosha: "Pitta", calories: 354 },
    { id: "cucumber", name: "Cucumber", category: "Vegetables", dosha: "Pitta", calories: 16 }
  ];

  const handleFoodToggle = (foodId: string) => {
    setSelectedFoods(prev => 
      prev.includes(foodId) 
        ? prev.filter(id => id !== foodId)
        : [...prev, foodId]
    );
  };
  const dietCharts = [
    {
      id: 1,
      patientName: "Priya Sharma",
      patientId: "P001",
      chartTitle: "Vata Balancing Diet",
      dosha: "Vata",
      condition: "Digestive Issues",
      createdDate: "2024-09-10",
      duration: "30 days",
      status: "Active",
      calories: 1456,
      meals: 4,
      lastUpdated: "2024-09-12"
    },
    {
      id: 2,
      patientName: "Raj Kumar",
      patientId: "P002",
      chartTitle: "Pitta Cooling Protocol",
      dosha: "Pitta",
      condition: "Weight Management",
      createdDate: "2024-09-08",
      duration: "45 days",
      status: "Active",
      calories: 1890,
      meals: 5,
      lastUpdated: "2024-09-11"
    },
    {
      id: 3,
      patientName: "Anita Gupta",
      patientId: "P003",
      chartTitle: "Kapha Energizing Plan",
      dosha: "Kapha",
      condition: "Diabetes Management",
      createdDate: "2024-09-05",
      duration: "60 days",
      status: "Completed",
      calories: 1345,
      meals: 3,
      lastUpdated: "2024-09-08"
    },
    {
      id: 4,
      patientName: "Vikram Singh",
      patientId: "P004",
      chartTitle: "Dual Dosha Balance",
      dosha: "Vata-Pitta",
      condition: "Hypertension",
      createdDate: "2024-09-07",
      duration: "90 days",
      status: "Active",
      calories: 1756,
      meals: 4,
      lastUpdated: "2024-09-13"
    },
    {
      id: 5,
      patientName: "Meera Patel",
      patientId: "P005",
      chartTitle: "PCOS Management Diet",
      dosha: "Kapha-Vata",
      condition: "PCOS Management",
      createdDate: "2024-09-01",
      duration: "120 days",
      status: "Under Review",
      calories: 1423,
      meals: 4,
      lastUpdated: "2024-09-09"
    }
  ];

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Vata")) return "bg-ayur-vata text-white";
    if (dosha.includes("Pitta")) return "bg-ayur-pitta text-white";
    if (dosha.includes("Kapha")) return "bg-ayur-kapha text-white";
    return "bg-muted";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-ayur-success text-white";
      case "Completed": return "bg-blue-500 text-white";
      case "Under Review": return "bg-ayur-warning text-white";
      case "Draft": return "bg-muted text-muted-foreground";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Diet Charts Management</h2>
          <p className="text-muted-foreground">Create, manage, and track personalized Ayurvedic diet plans</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
              <Plus className="h-4 w-4 mr-2" />
              Create New Diet Chart
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Diet Chart</DialogTitle>
              <DialogDescription>
                Select foods and customize the diet plan for your patient
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Patient Details */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient-name">Patient Name</Label>
                  <Input id="patient-name" placeholder="Enter patient name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="chart-title">Diet Chart Title</Label>
                  <Input id="chart-title" placeholder="e.g., Vata Balancing Diet" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="condition">Health Condition</Label>
                  <Input id="condition" placeholder="e.g., Digestive Issues" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (days)</Label>
                  <Input id="duration" type="number" placeholder="30" />
                </div>
              </div>

              {/* Selected Foods Summary */}
              <div className="space-y-4">
                <div>
                  <Label>Selected Foods ({selectedFoods.length})</Label>
                  <div className="mt-2 p-3 border rounded-md min-h-[100px] max-h-[200px] overflow-y-auto">
                    {selectedFoods.length === 0 ? (
                      <p className="text-muted-foreground text-sm">No foods selected yet</p>
                    ) : (
                      <div className="space-y-2">
                        {selectedFoods.map(foodId => {
                          const food = availableFoods.find(f => f.id === foodId);
                          return food ? (
                            <div key={foodId} className="flex justify-between items-center text-sm">
                              <span>{food.name}</span>
                              <span className="text-muted-foreground">{food.calories} cal</span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setIsCreateDialogOpen(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={() => {
                      // Here you would save the diet chart
                      setIsCreateDialogOpen(false);
                      setSelectedFoods([]);
                    }}
                    className="flex-1 bg-ayur-orange hover:bg-ayur-orange/90"
                  >
                    Create Diet Chart
                  </Button>
                </div>
              </div>
            </div>

            {/* Food Selection */}
            <div className="mt-6">
              <Label className="text-base font-semibold">Available Foods</Label>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
                {availableFoods.map((food) => (
                  <div key={food.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      id={food.id}
                      checked={selectedFoods.includes(food.id)}
                      onCheckedChange={() => handleFoodToggle(food.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <Label htmlFor={food.id} className="text-sm font-medium cursor-pointer">
                        {food.name}
                      </Label>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Category: {food.category}</div>
                        <div>Good for: {food.dosha}</div>
                        <div>Calories: {food.calories}/100g</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <FileText className="h-6 w-6 mx-auto mb-2 text-ayur-success" />
              <p className="text-xl font-bold">342</p>
              <p className="text-sm text-muted-foreground">Total Charts</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="w-6 h-6 bg-ayur-success rounded-full mx-auto mb-2"></div>
              <p className="text-xl font-bold">289</p>
              <p className="text-sm text-muted-foreground">Active Plans</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <p className="text-xl font-bold">45</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="w-6 h-6 bg-ayur-warning rounded-full mx-auto mb-2"></div>
              <p className="text-xl font-bold">8</p>
              <p className="text-sm text-muted-foreground">Under Review</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>All Diet Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by patient name, chart title, or condition..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Status
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Dosha
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient & Chart</TableHead>
                <TableHead>Dosha & Condition</TableHead>
                <TableHead>Plan Details</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dietCharts.map((chart) => (
                <TableRow key={chart.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{chart.patientName}</p>
                      <p className="text-sm text-muted-foreground">ID: {chart.patientId}</p>
                      <p className="text-sm font-medium text-ayur-orange">{chart.chartTitle}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <Badge className={getDoshaColor(chart.dosha)}>
                        {chart.dosha}
                      </Badge>
                      <p className="text-sm">{chart.condition}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div><span className="font-medium">{chart.calories}</span> cal/day</div>
                      <div>{chart.meals} meals/day</div>
                      <div>{chart.duration} duration</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(chart.status)}>
                      {chart.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        Created: {chart.createdDate}
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        Updated: {chart.lastUpdated}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" title="View Chart">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" title="Edit Chart">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" title="Download PDF">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" title="Copy Chart">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DietCharts;