import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
        <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
          <Plus className="h-4 w-4 mr-2" />
          Create New Diet Chart
        </Button>
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