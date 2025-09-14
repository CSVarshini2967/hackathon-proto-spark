import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import DoctorDashboard from "@/components/DoctorDashboard";
import PatientDashboard from "@/components/PatientDashboard";

type UserType = 'doctor' | 'patient' | null;

const Index = () => {
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null);

  const handleSelectUserType = (type: 'doctor' | 'patient') => {
    setSelectedUserType(type);
  };

  const handleBack = () => {
    setSelectedUserType(null);
  };

  if (selectedUserType === 'doctor') {
    return <DoctorDashboard onBack={handleBack} />;
  }

  if (selectedUserType === 'patient') {
    return <PatientDashboard onBack={handleBack} />;
  }

  return <LandingPage onSelectUserType={handleSelectUserType} />;
};

export default Index;
