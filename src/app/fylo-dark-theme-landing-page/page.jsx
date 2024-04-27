import Header from "@/src/app/fylo-dark-theme-landing-page/components/Header";
function FyloDarkThemeLandingPage() {
  return (
    <>
      <div className="w-full h-max bg-fylo-dark-blue-main-background text-p-white flex flex-col items-center">
        <header className="w-full h-max px-5 md:px-20">
            <Header />
        </header>
      </div>
    </>
  );
}
export default FyloDarkThemeLandingPage;
