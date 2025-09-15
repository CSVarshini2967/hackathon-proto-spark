import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
  Users,
  FileText,
  Calendar,
  Activity,
  Target,
  BarChart3,
  PieChart,
  LineChart
} from "lucide-react";

const Analytics = () => {
  const monthlyStats = [
    { month: "Jan", patients: 45, charts: 38, consultations: 52 },
    { month: "Feb", patients: 52, charts: 45, consultations: 61 },
    { month: "Mar", patients: 48, charts: 42, consultations: 58 },
    { month: "Apr", patients: 61, charts: 55, consultations: 72 },
    { month: "May", patients: 58, charts: 52, consultations: 69 },
    { month: "Jun", patients: 65, charts: 59, consultations: 78 },
    { month: "Jul", patients: 72, charts: 68, consultations: 85 },
    { month: "Aug", patients: 69, charts: 65, consultations: 82 },
    { month: "Sep", patients: 74, charts: 71, consultations: 89 }
  ];

  const doshaDistribution = [
    { dosha: "Vata", count: 432, percentage: 34.6, color: "ayur-vata" },
    { dosha: "Pitta", count: 398, percentage: 31.9, color: "ayur-pitta" },
    { dosha: "Kapha", count: 417, percentage: 33.5, color: "ayur-kapha" }
  ];

  const conditionStats = [
    { condition: "Digestive Issues", count: 187, trend: "+12%" },
    { condition: "Weight Management", count: 154, trend: "+8%" },
    { condition: "Diabetes Management", count: 98, trend: "+15%" },
    { condition: "Hypertension", count: 87, trend: "+5%" },
    { condition: "PCOS Management", count: 76, trend: "+22%" },
    { condition: "Stress & Anxiety", count: 65, trend: "+18%" }
  ];

  const successMetrics = [
    { metric: "Patient Satisfaction", value: "94.2%", change: "+2.1%", trend: "up" },
    { metric: "Diet Plan Adherence", value: "87.3%", change: "+4.5%", trend: "up" },
    { metric: "Health Goal Achievement", value: "78.9%", change: "+6.2%", trend: "up" },
    { metric: "Return Patient Rate", value: "92.1%", change: "-1.2%", trend: "down" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics & Reports</h2>
          <p className="text-muted-foreground">Comprehensive insights into your practice performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
            <Calendar className="h-4 w-4 mr-2" />
            Custom Date Range
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {successMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-ayur-success" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={`text-xs ${metric.trend === "up" ? "text-ayur-success" : "text-red-500"}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${metric.trend === "up" ? "bg-ayur-success/10" : "bg-red-50"}`}>
                  <Target className={`h-6 w-6 ${metric.trend === "up" ? "text-ayur-success" : "text-red-500"}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dosha Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Dosha Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {doshaDistribution.map((item) => (
                <div key={item.dosha} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 bg-${item.color} rounded-full`}></div>
                      <span className="text-sm font-medium">{item.dosha}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold">{item.count}</span>
                      <span className="text-xs text-muted-foreground ml-2">({item.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`bg-${item.color} h-2 rounded-full`}
                      style={{width: `${item.percentage}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Conditions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Top Conditions Treated
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conditionStats.map((condition, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{condition.condition}</p>
                    <p className="text-xs text-muted-foreground">{condition.count} patients</p>
                  </div>
                  <Badge className="bg-ayur-success text-white">
                    {condition.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Monthly Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">New Patients</p>
                  <p className="text-lg font-bold text-ayur-vata">+74</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Diet Charts</p>
                  <p className="text-lg font-bold text-ayur-pitta">+71</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Consultations</p>
                  <p className="text-lg font-bold text-ayur-kapha">+89</p>
                </div>
              </div>
              <div className="text-center pt-4 border-t">
                <p className="text-sm text-muted-foreground">This Month vs Last Month</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-ayur-success" />
                  <span className="text-sm font-medium text-ayur-success">+12.3% overall growth</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <Users className="h-8 w-8 mx-auto mb-2 text-ayur-vata" />
              <p className="text-2xl font-bold">1,247</p>
              <p className="text-sm text-muted-foreground">Total Patients</p>
              <Badge className="mt-2 bg-ayur-success text-white">↑ 12%</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <FileText className="h-8 w-8 mx-auto mb-2 text-ayur-pitta" />
              <p className="text-2xl font-bold">342</p>
              <p className="text-sm text-muted-foreground">Diet Charts</p>
              <Badge className="mt-2 bg-ayur-success text-white">↑ 8%</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-ayur-kapha" />
              <p className="text-2xl font-bold">1,089</p>
              <p className="text-sm text-muted-foreground">Consultations</p>
              <Badge className="mt-2 bg-ayur-success text-white">↑ 15%</Badge>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Activity className="h-8 w-8 mx-auto mb-2 text-ayur-orange" />
              <p className="text-2xl font-bold">94.2%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
              <Badge className="mt-2 bg-ayur-success text-white">↑ 2%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;