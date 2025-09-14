import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Video, 
  Calendar, 
  Clock, 
  User,
  Star,
  Phone,
  FileText,
  Activity,
  Heart,
  CheckCircle2
} from "lucide-react";

const ConsultationHub = () => {
  const myDoctor = {
    name: "Dr. Anjali Sharma",
    specialization: "Ayurvedic Medicine & Nutrition",
    experience: "15 years",
    rating: 4.9,
    avatar: "/api/placeholder/64/64",
    status: "Available",
    nextAvailable: "Today, 3:00 PM",
    languages: ["English", "Hindi", "Sanskrit"]
  };

  const upcomingAppointments = [
    {
      id: 1,
      date: "Today",
      time: "3:00 PM",
      type: "Follow-up Consultation",
      duration: "30 minutes",
      status: "confirmed",
      notes: "Diet plan review and progress assessment"
    },
    {
      id: 2,
      date: "Tomorrow",
      time: "10:30 AM",
      type: "Pulse Diagnosis",
      duration: "45 minutes",
      status: "confirmed",
      notes: "Detailed Nadi Pariksha and dosha assessment"
    }
  ];

  const consultationHistory = [
    {
      id: 1,
      date: "Sept 10, 2024",
      type: "Initial Consultation",
      duration: "60 minutes",
      summary: "Comprehensive health assessment, dosha analysis, and personalized diet plan creation",
      prescriptions: ["Triphala churna", "Ashwagandha", "Custom diet chart"],
      followUp: "2 weeks"
    },
    {
      id: 2,
      date: "Aug 27, 2024",
      type: "Progress Review",
      duration: "30 minutes",
      summary: "Weight loss progress review, diet adjustments, and seasonal recommendations",
      prescriptions: ["Continued current plan", "Added warming spices"],
      followUp: "2 weeks"
    },
    {
      id: 3,
      date: "Aug 13, 2024",
      type: "Health Check",
      duration: "45 minutes",
      summary: "Digestive health improvement, energy level assessment, sleep quality review",
      prescriptions: ["Digestive tea blend", "Evening routine modifications"],
      followUp: "2 weeks"
    }
  ];

  const quickActions = [
    {
      title: "Book Appointment",
      description: "Schedule your next consultation",
      icon: Calendar,
      action: "book",
      color: "ayur-orange"
    },
    {
      title: "Video Call",
      description: "Start immediate consultation",
      icon: Video,
      action: "video",
      color: "ayur-success"
    },
    {
      title: "Send Message",
      description: "Ask a quick question",
      icon: MessageSquare,
      action: "message",
      color: "ayur-vata"
    },
    {
      title: "Emergency",
      description: "Urgent health concern",
      icon: Phone,
      action: "emergency",
      color: "ayur-pitta"
    }
  ];

  return (
    <div className="space-y-6">
      {/* My Doctor Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Your Ayurvedic Specialist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={myDoctor.avatar} />
              <AvatarFallback className="bg-ayur-orange text-white text-lg">
                {myDoctor.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{myDoctor.name}</h3>
                  <p className="text-muted-foreground">{myDoctor.specialization}</p>
                  <p className="text-sm text-muted-foreground">{myDoctor.experience} experience</p>
                </div>
                <Badge 
                  variant="secondary" 
                  className="bg-ayur-success/10 text-ayur-success"
                >
                  {myDoctor.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-ayur-orange text-ayur-orange" />
                  <span className="text-sm font-medium">{myDoctor.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Next available: {myDoctor.nextAvailable}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {myDoctor.languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button className="bg-ayur-orange hover:bg-ayur-orange/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => {
          const IconComponent = action.icon;
          return (
            <Card key={action.action} className="cursor-pointer transition-all hover:shadow-md hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 bg-${action.color}/10 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className={`h-6 w-6 text-${action.color}`} />
                </div>
                <h4 className="font-semibold mb-1">{action.title}</h4>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Appointments
          </CardTitle>
          <CardDescription>Your scheduled consultations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{appointment.type}</h4>
                      <Badge 
                        variant="secondary" 
                        className="bg-ayur-success/10 text-ayur-success"
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {appointment.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {appointment.time}
                      </span>
                      <span>{appointment.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Video className="h-4 w-4 mr-1" />
                      Join
                    </Button>
                    <Button size="sm" variant="ghost">
                      Reschedule
                    </Button>
                  </div>
                </div>
                <p className="text-sm bg-muted/50 rounded p-2">{appointment.notes}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Consultation History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Consultation History
          </CardTitle>
          <CardDescription>Previous appointments and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {consultationHistory.map((consultation) => (
              <div key={consultation.id} className="border-l-4 border-ayur-vata pl-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold flex items-center gap-2">
                      {consultation.type}
                      <CheckCircle2 className="h-4 w-4 text-ayur-success" />
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{consultation.date}</span>
                      <span>{consultation.duration}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <FileText className="h-4 w-4 mr-1" />
                    View Report
                  </Button>
                </div>
                
                <p className="text-sm mb-3">{consultation.summary}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Prescriptions:</h5>
                    <ul className="text-sm space-y-1">
                      {consultation.prescriptions.map((prescription, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-ayur-orange rounded-full"></div>
                          {prescription}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2">Follow-up:</h5>
                    <p className="text-sm text-muted-foreground">{consultation.followUp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Health Metrics Sharing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Share Health Data
          </CardTitle>
          <CardDescription>
            Give your doctor access to your progress data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-ayur-pitta" />
                <div>
                  <p className="font-medium">Health Progress</p>
                  <p className="text-sm text-muted-foreground">Weight, energy, sleep data</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-ayur-success/10 text-ayur-success">
                Shared
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-ayur-vata" />
                <div>
                  <p className="font-medium">Exercise Data</p>
                  <p className="text-sm text-muted-foreground">Workout completion and activity</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-ayur-success/10 text-ayur-success">
                Shared
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-ayur-kapha" />
                <div>
                  <p className="font-medium">Diet Logs</p>
                  <p className="text-sm text-muted-foreground">Meal tracking and calorie data</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-ayur-success/10 text-ayur-success">
                Shared
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationHub;