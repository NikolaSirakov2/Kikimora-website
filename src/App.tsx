import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AutoEmail } from "@/components/AutoEmail";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Developers } from "@/pages/Developers";
import { DevelopersCaseStudy } from "@/components/home/DevelopersCaseStudy";
import { Clients } from "@/components/home/Clients";
import { SecurityEfficiency } from "@/components/home/SecurityEfficiency";
import { Pricing } from "@/components/home/Pricing";
import { Newsletter } from "@/components/home/Newsletter";
import { Testimonials } from "@/components/home/Testimonials";
import { RequestDemo } from "@/components/home/RequestDemo";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { GetInTouch } from "@/components/home/GetInTouch";
import { About } from "@/pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <AutoEmail />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Benefits />
                  <DevelopersCaseStudy />
                  <Clients />
                  <SecurityEfficiency />
                  <Pricing />
                  <Testimonials />
                  <RequestDemo />
                  <Blog />
                  <GetInTouch />
                  <Newsletter />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/docs" element={<div>Documentation Page</div>} />
            <Route path="/privacy" element={<div>Privacy Policy Page</div>} />
            <Route path="/terms" element={<div>Terms & Conditions Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
