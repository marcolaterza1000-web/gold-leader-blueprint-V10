import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import AboutMarco from "@/components/AboutMarco";
import MethodSection from "@/components/MethodSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import ResultsSection from "@/components/ResultsSection";
import TransformationGallery from "@/components/TransformationGallery";
import LocationsSection from "@/components/LocationsSection";
import GoogleReviews from "@/components/GoogleReviews";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen bg-[#080808]">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <TrustBar />
    <ProblemSection />
    <AboutMarco />
    <MethodSection />
    <VideoTestimonials />
    <ResultsSection />
    <TransformationGallery />
    <LocationsSection />
    <GoogleReviews />
    <BookingSection />
    <FAQSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
