import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Faculty from "./pages/Faculty";
import FacultyProfile from "./pages/FacultyProfile";
import Research from "./pages/Research";
import ResearchProjects from "./pages/ResearchProjects";
import ResearchPublications from "./pages/ResearchPublications";
import ResearchPatents from "./pages/ResearchPatents";
import PhdScholars from "./pages/PhdScholars";
import FinalYearProjects from "./pages/FinalYearProjects";
import AcademicsOverview from "./pages/AcademicsOverview";
import AcademicsPrograms from "./pages/AcademicsPrograms";
import Labs from "./pages/Labs";
import LabDetail from "./pages/LabDetail";
import Placements from "./pages/Placements";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Alumni from "./pages/Alumni";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/hod-message" element={<PlaceholderPage />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/faculty/:id" element={<FacultyProfile />} />
            <Route path="/academics" element={<AcademicsOverview />} />
            <Route path="/academics/programs" element={<AcademicsPrograms />} />
            <Route path="/academics/curriculum" element={<PlaceholderPage />} />
            <Route path="/academics/calendar" element={<PlaceholderPage />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/projects" element={<ResearchProjects />} />
            <Route path="/research/publications" element={<ResearchPublications />} />
            <Route path="/research/patents" element={<ResearchPatents />} />
            <Route path="/research/phd-scholars" element={<PhdScholars />} />
            <Route path="/research/final-year-projects" element={<FinalYearProjects />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/labs/:id" element={<LabDetail />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<PlaceholderPage />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
