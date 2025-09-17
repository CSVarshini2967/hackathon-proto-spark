import { useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

interface DietChart {
  id: string;
  name: string;
  items: string;
}

interface UserData {
  age: number;
  healthCondition: string;
}

const FirebaseForm = () => {
  const [userData, setUserData] = useState<UserData>({
    age: 0,
    healthCondition: ''
  });
  const [dietCharts, setDietCharts] = useState<DietChart[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof UserData, value: string | number) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.age || !userData.healthCondition.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both age and health condition",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'users'), {
        age: userData.age,
        healthCondition: userData.healthCondition,
        timestamp: new Date()
      });
      
      toast({
        title: "Success",
        description: "User data saved successfully!"
      });
      
      setUserData({ age: 0, healthCondition: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast({
        title: "Error",
        description: "Failed to save user data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchDietCharts = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'dietCharts'));
      const charts: DietChart[] = [];
      querySnapshot.forEach((doc) => {
        charts.push({
          id: doc.id,
          ...doc.data()
        } as DietChart);
      });
      setDietCharts(charts);
      
      if (charts.length === 0) {
        toast({
          title: "Info",
          description: "No diet charts found in the database"
        });
      }
    } catch (error) {
      console.error('Error fetching diet charts: ', error);
      toast({
        title: "Error",
        description: "Failed to fetch diet charts",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Health Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={userData.age || ''}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                placeholder="Enter your age"
                min="1"
                max="120"
              />
            </div>
            
            <div>
              <Label htmlFor="condition">Health Condition</Label>
              <Input
                id="condition"
                type="text"
                value={userData.healthCondition}
                onChange={(e) => handleInputChange('healthCondition', e.target.value)}
                placeholder="Enter your health condition"
              />
            </div>
            
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Saving...' : 'Save User Data'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Diet Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={fetchDietCharts} disabled={loading} className="mb-4">
            {loading ? 'Loading...' : 'Get Diet Chart'}
          </Button>
          
          {dietCharts.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Available Diet Charts:</h3>
              <ul className="space-y-1">
                {dietCharts.map((chart) => (
                  <li key={chart.id} className="p-2 bg-muted rounded">
                    <span className="font-medium">{chart.name}</span> - {chart.items}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FirebaseForm;