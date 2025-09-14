import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Bell, 
  Clock, 
  Utensils, 
  Droplets, 
  Activity,
  Moon,
  Pill,
  Smartphone,
  Volume2,
  VolumeX
} from "lucide-react";

const ReminderSystem = () => {
  const reminders = [
    {
      id: 1,
      type: "meal",
      title: "Lunch Time",
      description: "Time for your warm kitchari with vegetables",
      time: "1:30 PM",
      enabled: true,
      frequency: "Daily",
      icon: Utensils,
      color: "ayur-orange"
    },
    {
      id: 2,
      type: "water",
      title: "Hydration Reminder",
      description: "Remember to drink warm water",
      time: "Every 2 hours",
      enabled: true,
      frequency: "Recurring",
      icon: Droplets,
      color: "ayur-vata"
    },
    {
      id: 3,
      type: "exercise",
      title: "Evening Walk",
      description: "Time for your grounding walk",
      time: "6:00 PM",
      enabled: true,
      frequency: "Daily",
      icon: Activity,
      color: "ayur-kapha"
    },
    {
      id: 4,
      type: "sleep",
      title: "Wind Down Time",
      description: "Start your evening routine for better sleep",
      time: "9:30 PM",
      enabled: true,
      frequency: "Daily",
      icon: Moon,
      color: "ayur-vata"
    },
    {
      id: 5,
      type: "supplement",
      title: "Triphala Time",
      description: "Take your evening Triphala churna",
      time: "10:00 PM",
      enabled: false,
      frequency: "Daily",
      icon: Pill,
      color: "ayur-pitta"
    }
  ];

  const upcomingReminders = [
    {
      title: "Lunch Time",
      time: "1:30 PM",
      timeLeft: "2 hours 15 minutes",
      type: "meal"
    },
    {
      title: "Hydration Check",
      time: "3:00 PM",
      timeLeft: "3 hours 45 minutes",
      type: "water"
    },
    {
      title: "Evening Walk",
      time: "6:00 PM",
      timeLeft: "6 hours 45 minutes",
      type: "exercise"
    }
  ];

  const notificationSettings = [
    {
      title: "Push Notifications",
      description: "Receive notifications on your device",
      enabled: true,
      icon: Smartphone
    },
    {
      title: "Sound Alerts",
      description: "Play sound with notifications",
      enabled: true,
      icon: Volume2
    },
    {
      title: "Voice Reminders",
      description: "Spoken reminders in your preferred language",
      enabled: false,
      icon: Bell
    }
  ];

  return (
    <div className="space-y-6">
      {/* Upcoming Reminders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Upcoming Reminders
          </CardTitle>
          <CardDescription>Your next scheduled activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingReminders.map((reminder, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    reminder.type === 'meal' ? 'bg-ayur-orange' :
                    reminder.type === 'water' ? 'bg-ayur-vata' :
                    'bg-ayur-kapha'
                  }`}></div>
                  <div>
                    <p className="font-medium">{reminder.title}</p>
                    <p className="text-sm text-muted-foreground">{reminder.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{reminder.timeLeft}</p>
                  <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                    Snooze
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Reminders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Manage Reminders
          </CardTitle>
          <CardDescription>
            Customize your daily wellness reminders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reminders.map((reminder) => {
              const IconComponent = reminder.icon;
              return (
                <div key={reminder.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 bg-${reminder.color}/10 rounded-lg`}>
                      <IconComponent className={`h-5 w-5 text-${reminder.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{reminder.title}</h4>
                      <p className="text-sm text-muted-foreground">{reminder.description}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {reminder.time}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {reminder.frequency}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Switch checked={reminder.enabled} />
                    <Button size="sm" variant="ghost">
                      Edit
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          
          <Button className="w-full mt-4 bg-ayur-orange hover:bg-ayur-orange/90">
            <Bell className="h-4 w-4 mr-2" />
            Add New Reminder
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Notification Settings
          </CardTitle>
          <CardDescription>
            Choose how you receive your reminders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notificationSettings.map((setting, index) => {
              const IconComponent = setting.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{setting.title}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                  <Switch checked={setting.enabled} />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Smart Reminders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Smart Reminder Features
          </CardTitle>
          <CardDescription>
            AI-powered personalized reminders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-ayur-vata/5 rounded-lg">
              <h4 className="font-medium mb-2">Seasonal Adjustments</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Automatically adjust reminder times based on the season and your dosha needs.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-ayur-success/10 text-ayur-success">
                  Active
                </Badge>
                <Switch checked={true} />
              </div>
            </div>

            <div className="p-4 bg-ayur-pitta/5 rounded-lg">
              <h4 className="font-medium mb-2">Weather-Based Suggestions</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Get different food and activity suggestions based on current weather conditions.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline">Available</Badge>
                <Switch checked={false} />
              </div>
            </div>

            <div className="p-4 bg-ayur-kapha/5 rounded-lg">
              <h4 className="font-medium mb-2">Progress-Based Timing</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Adjust reminder frequency based on your adherence and progress patterns.
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-ayur-success/10 text-ayur-success">
                  Learning
                </Badge>
                <Switch checked={true} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reminder Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Reminder Statistics
          </CardTitle>
          <CardDescription>
            Your adherence to daily reminders this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-ayur-success">89%</p>
                <p className="text-sm text-muted-foreground">Overall Adherence</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-ayur-orange">24</p>
                <p className="text-sm text-muted-foreground">Meals Logged</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-ayur-vata">42</p>
                <p className="text-sm text-muted-foreground">Water Reminders</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-ayur-kapha">6</p>
                <p className="text-sm text-muted-foreground">Exercise Sessions</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReminderSystem;