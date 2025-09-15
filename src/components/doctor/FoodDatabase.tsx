import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Plus, 
  Edit,
  Trash2,
  Filter,
  Flame,
  Droplets,
  Thermometer,
  Apple
} from "lucide-react";

const FoodDatabase = () => {
  const foodItems = [
    {
      id: 1,
      name: "Basmati Rice",
      category: "Grains",
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
      property: "Cold",
      digestibility: "Easy",
      taste: "Sweet",
      dosha: "Pitta, Kapha",
      cuisine: "Indian"
    },
    {
      id: 2,
      name: "Almonds",
      category: "Nuts",
      calories: 162,
      protein: 6,
      carbs: 6,
      fat: 14,
      property: "Hot",
      digestibility: "Moderate",
      taste: "Sweet",
      dosha: "Vata",
      cuisine: "International"
    },
    {
      id: 3,
      name: "Turmeric",
      category: "Spices",
      calories: 29,
      protein: 0.9,
      carbs: 6.3,
      fat: 0.3,
      property: "Hot",
      digestibility: "Easy",
      taste: "Bitter, Pungent",
      dosha: "Vata, Kapha",
      cuisine: "Indian"
    },
    {
      id: 4,
      name: "Cucumber",
      category: "Vegetables",
      calories: 16,
      protein: 0.7,
      carbs: 4,
      fat: 0.1,
      property: "Cold",
      digestibility: "Easy",
      taste: "Sweet",
      dosha: "Pitta",
      cuisine: "International"
    },
    {
      id: 5,
      name: "Ghee",
      category: "Dairy",
      calories: 112,
      protein: 0,
      carbs: 0,
      fat: 12.8,
      property: "Hot",
      digestibility: "Easy",
      taste: "Sweet",
      dosha: "Vata, Pitta",
      cuisine: "Indian"
    }
  ];

  const getPropertyColor = (property: string) => {
    return property === "Hot" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700";
  };

  const getDigestibilityColor = (digestibility: string) => {
    switch (digestibility) {
      case "Easy": return "bg-green-100 text-green-700";
      case "Moderate": return "bg-yellow-100 text-yellow-700";
      case "Difficult": return "bg-red-100 text-red-700";
      default: return "bg-muted";
    }
  };

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Vata")) return "text-ayur-vata";
    if (dosha.includes("Pitta")) return "text-ayur-pitta";
    if (dosha.includes("Kapha")) return "text-ayur-kapha";
    return "text-muted-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Food Database</h2>
          <p className="text-muted-foreground">Comprehensive Ayurvedic food database with 8,000+ items</p>
        </div>
        <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Food Item
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Apple className="h-6 w-6 mx-auto mb-2 text-ayur-success" />
              <p className="text-xl font-bold">8,247</p>
              <p className="text-sm text-muted-foreground">Total Items</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Flame className="h-6 w-6 mx-auto mb-2 text-red-500" />
              <p className="text-xl font-bold">3,156</p>
              <p className="text-sm text-muted-foreground">Hot Property</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Droplets className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-xl font-bold">5,091</p>
              <p className="text-sm text-muted-foreground">Cold Property</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <Thermometer className="h-6 w-6 mx-auto mb-2 text-ayur-orange" />
              <p className="text-xl font-bold">6,543</p>
              <p className="text-sm text-muted-foreground">Easy Digest</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <span className="text-xl font-bold block">24</span>
              <p className="text-sm text-muted-foreground">Categories</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Food Items Database</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by food name, category, or dosha compatibility..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Category
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter by Dosha
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Food Item</TableHead>
                <TableHead>Nutrition (per 100g)</TableHead>
                <TableHead>Ayurvedic Properties</TableHead>
                <TableHead>Taste & Dosha</TableHead>
                <TableHead>Cuisine</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {foodItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm space-y-1">
                      <div><span className="font-medium">{item.calories}</span> cal</div>
                      <div>P: {item.protein}g | C: {item.carbs}g | F: {item.fat}g</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <Badge className={getPropertyColor(item.property)}>
                        {item.property}
                      </Badge>
                      <Badge className={getDigestibilityColor(item.digestibility)}>
                        {item.digestibility}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{item.taste}</p>
                      <p className={`text-sm ${getDoshaColor(item.dosha)}`}>
                        Good for: {item.dosha}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {item.cuisine}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-3 w-3" />
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

export default FoodDatabase;