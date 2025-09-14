import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  MessageSquare,
  Sparkles,
  Activity,
  Clock
} from "lucide-react";
import { useState } from "react";

const VoiceInterface = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastCommand, setLastCommand] = useState("");

  const voiceCommands = [
    "Log my breakfast",
    "How many calories today?",
    "What's my next meal?",
    "Start morning exercise",
    "Check my weight progress",
    "Remind me to drink water",
    "What should I eat for dinner?",
    "Book consultation"
  ];

  const recentInteractions = [
    {
      time: "2 minutes ago",
      user: "How many calories have I consumed today?",
      assistant: "You've consumed 1,247 calories today. Your target is 2,000 calories, so you have 753 calories remaining for the day.",
      type: "query"
    },
    {
      time: "15 minutes ago",
      user: "Log my morning yoga session",
      assistant: "Great! I've logged your 15-minute morning yoga session. You burned approximately 45 calories. Keep up the excellent work!",
      type: "logging"
    },
    {
      time: "1 hour ago",
      user: "What should I eat for lunch?",
      assistant: "Based on your Vata constitution and today's meals, I recommend warm kitchari with seasonal vegetables and a side of steamed greens. This will provide balanced nutrition and support your digestive fire.",
      type: "recommendation"
    }
  ];

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setLastCommand("How many calories have I consumed today?");
        setIsListening(false);
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 3000);
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Voice Control Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            Voice Assistant
          </CardTitle>
          <CardDescription>
            Speak naturally to log meals, track progress, and get recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-6">
            {/* Voice Button */}
            <div className="relative">
              <Button
                size="lg"
                onClick={handleVoiceToggle}
                className={`w-24 h-24 rounded-full ${
                  isListening 
                    ? 'bg-ayur-pitta hover:bg-ayur-pitta/90 animate-pulse' 
                    : isSpeaking
                    ? 'bg-ayur-success hover:bg-ayur-success/90'
                    : 'bg-ayur-vata hover:bg-ayur-vata/90'
                }`}
              >
                {isListening ? (
                  <Mic className="h-8 w-8" />
                ) : isSpeaking ? (
                  <Volume2 className="h-8 w-8" />
                ) : (
                  <Mic className="h-8 w-8" />
                )}
              </Button>
              
              {/* Listening indicator */}
              {isListening && (
                <div className="absolute inset-0 rounded-full border-4 border-ayur-pitta animate-ping"></div>
              )}
            </div>

            {/* Status */}
            <div className="text-center">
              {isListening ? (
                <div className="space-y-2">
                  <p className="text-lg font-medium text-ayur-pitta">Listening...</p>
                  <p className="text-sm text-muted-foreground">Speak your command or question</p>
                </div>
              ) : isSpeaking ? (
                <div className="space-y-2">
                  <p className="text-lg font-medium text-ayur-success">Speaking...</p>
                  <p className="text-sm text-muted-foreground">Playing response</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-lg font-medium">Ready to help</p>
                  <p className="text-sm text-muted-foreground">Tap the microphone to start</p>
                </div>
              )}
            </div>

            {/* Last Command */}
            {lastCommand && (
              <div className="bg-muted/50 rounded-lg p-3 max-w-md text-center">
                <p className="text-sm text-muted-foreground mb-1">Last command:</p>
                <p className="font-medium">{lastCommand}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Voice Commands */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            Quick Voice Commands
          </CardTitle>
          <CardDescription>
            Try these common commands to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {voiceCommands.map((command, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto p-3 text-left"
                onClick={() => {
                  setLastCommand(command);
                  setIsSpeaking(true);
                  setTimeout(() => setIsSpeaking(false), 2000);
                }}
              >
                <MessageSquare className="h-4 w-4 mr-2 text-ayur-vata" />
                <span className="text-sm">{command}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Interactions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Voice Interactions
          </CardTitle>
          <CardDescription>
            Your conversation history with the AI assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInteractions.map((interaction, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {interaction.time}
                  </Badge>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      interaction.type === 'query' ? 'bg-ayur-vata/10 text-ayur-vata' :
                      interaction.type === 'logging' ? 'bg-ayur-success/10 text-ayur-success' :
                      'bg-ayur-orange/10 text-ayur-orange'
                    }`}
                  >
                    {interaction.type}
                  </Badge>
                </div>

                {/* User Message */}
                <div className="bg-ayur-vata/5 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Mic className="h-4 w-4 text-ayur-vata mt-0.5" />
                    <p className="text-sm font-medium">{interaction.user}</p>
                  </div>
                </div>

                {/* Assistant Response */}
                <div className="bg-ayur-success/5 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Volume2 className="h-4 w-4 text-ayur-success mt-0.5" />
                    <p className="text-sm">{interaction.assistant}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost" className="text-xs">
                    <Volume2 className="h-3 w-3 mr-1" />
                    Replay
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    <Mic className="h-3 w-3 mr-1" />
                    Follow up
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Voice Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Voice Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Voice Response</p>
                <p className="text-sm text-muted-foreground">Enable spoken responses</p>
              </div>
              <Button variant="outline" size="sm">
                <Volume2 className="h-4 w-4 mr-2" />
                Enabled
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Language</p>
                <p className="text-sm text-muted-foreground">Voice recognition language</p>
              </div>
              <Button variant="outline" size="sm">
                English (US)
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Wake Word</p>
                <p className="text-sm text-muted-foreground">Say "Hey Ayur" to activate</p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceInterface;