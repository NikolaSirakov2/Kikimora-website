import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecurityAnalystSection from "../components/landing/components/SecurityAnalystSection";
import SecurityProcessSection from "../components/landing/components/SecurityProcessSection";
import { VulnerabilityManagementDemo } from "../components/landing/components/VulnerabilityManagementDemo";
import HeroVideoDemo from "../components/landing/components/HeroVideoDemo";
import FAQSection from "../components/landing/components/FAQSection";
import Header from "../components/landing/components/Header";
import { HeroSection } from "../components/landing/components/HeroSection";

const Landing = () => {
  const navigate = useNavigate();
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);

  // For now, we'll assume user is not authenticated
  // In a real implementation, you would check authentication status here
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/c/new", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Only render landing content for unauthenticated users
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black w-screen">
      <Header />
      <HeroSection onRegisterClick={() => setShowRegisterDialog(true)} />
      <HeroVideoDemo />
      <SecurityAnalystSection />
      <SecurityProcessSection />
      <VulnerabilityManagementDemo />
      <FAQSection />

      {showRegisterDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <p className="mb-4">
              Registration functionality will be implemented when authentication
              is added.
            </p>
            <button
              onClick={() => setShowRegisterDialog(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
