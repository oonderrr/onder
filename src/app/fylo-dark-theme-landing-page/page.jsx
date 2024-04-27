import Header from "@/src/app/fylo-dark-theme-landing-page/components/Header";
import HeroSection from "@/src/app/fylo-dark-theme-landing-page/components/HeroSection";
import FeaturesSection from "@/src/app/fylo-dark-theme-landing-page/components/FeaturesSection/FeaturesSection";
import StayProductive from "@/src/app/fylo-dark-theme-landing-page/components/StayProductive";

function FyloDarkThemeLandingPage() {
  return (
    <>
      <div className="w-full h-max bg-fylo-dark-blue-main-background text-fylo-white flex flex-col items-center">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <StayProductive />
      </div>
    </>
  );
}
export default FyloDarkThemeLandingPage;
