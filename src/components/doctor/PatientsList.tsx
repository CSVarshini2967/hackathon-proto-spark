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
  Phone,
  Mail,
  Calendar,
  Filter
} from "lucide-react";

const PatientsList = () => {
  const patients = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 32,
      gender: "Female",
      dosha: "Vata",
      phone: "+91 98765 43210",
      email: "priya.sharma@email.com",
      lastVisit: "2024-09-10",
      status: "Active",
      condition: "Digestive Issues",
      bmr: 1456
    },
    {
      id: 2,
      name: "Raj Kumar",
      age: 45,
      gender: "Male", 
      dosha: "Pitta",
      phone: "+91 87654 32109",
      email: "raj.kumar@email.com",
      lastVisit: "2024-09-12",
      status: "Active",
      condition: "Weight Management",
      bmr: 1890
    },
    {
      id: 3,
      name: "Anita Gupta",
      age: 28,
      gender: "Female",
      dosha: "Kapha",
      phone: "+91 76543 21098",
      email: "anita.gupta@email.com",
      lastVisit: "2024-09-08",
      status: "Follow-up",
      condition: "Diabetes Management",
      bmr: 1345
    },
    {
      id: 4,
      name: "Vikram Singh",
      age: 39,
      gender: "Male",
      dosha: "Vata-Pitta",
      phone: "+91 65432 10987",
      email: "vikram.singh@email.com",
      lastVisit: "2024-09-11",
      status: "Active",
      condition: "Hypertension",
      bmr: 1756
    },
    {
      id: 5,
      name: "Meera Patel",
      age: 35,
      gender: "Female",
      dosha: "Kapha-Vata",
      phone: "+91 54321 09876",
      email: "meera.patel@email.com",
      lastVisit: "2024-09-09",
      status: "Inactive",
      condition: "PCOS Management",
      bmr: 1423
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
      case "Follow-up": return "bg-ayur-warning text-white";
      case "Inactive": return "bg-muted text-muted-foreground";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Patient Management</h2>
          <p className="text-muted-foreground">Manage all your patients and their dietary plans</p>
        </div>
        <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-ayur-vata">432</p>
              <p className="text-sm text-muted-foreground">Vata Patients</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-ayur-pitta">398</p>
              <p className="text-sm text-muted-foreground">Pitta Patients</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-ayur-kapha">417</p>
              <p className="text-sm text-muted-foreground">Kapha Patients</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-ayur-success">28</p>
              <p className="text-sm text-muted-foreground">Today's Appointments</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>All Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search patients by name, condition, or dosha..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Info</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Dosha Type</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>BMR</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.age} years, {patient.gender}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-3 w-3" />
                        {patient.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-3 w-3" />
                        {patient.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getDoshaColor(patient.dosha)}>
                      {patient.dosha}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{patient.condition}</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{patient.bmr} cal/day</span>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-3 w-3" />
                      {patient.lastVisit}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-3 w-3" />
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

export default PatientsList;