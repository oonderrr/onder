import Header from "@/src/app/fylo-dark-theme-landing-page/components/Header";
import HeroSection from "@/src/app/fylo-dark-theme-landing-page/components/HeroSection";
import FeaturesSection from "@/src/app/fylo-dark-theme-landing-page/components/FeaturesSection/FeaturesSection";
import StayProductive from "@/src/app/fylo-dark-theme-landing-page/components/StayProductive";
import Quotes from "@/src/app/fylo-dark-theme-landing-page/components/Quotes/Quotes";
import CallToAction from "@/src/app/fylo-dark-theme-landing-page/components/CallToAction";

function FyloDarkThemeLandingPage() {
  return (
    <>
      <div className="w-full h-max bg-fylo-dark-blue-main-background text-fylo-white flex flex-col items-center">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <StayProductive />
        <Quotes />
        <CallToAction />
      </div>
    </>
  );
}
export default FyloDarkThemeLandingPage;
