import LayoutSidebar from "@/src/app/components/LayoutSidebar";
import LayoutMain from "@/src/app/components/LayoutMain";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex justify-center p-8 md:p-10">
        <div className="flex flex-col md:flex-row w-full xl:w-[1216px] gap-6">
          <LayoutSidebar />
          <LayoutMain />
        </div>
      </div>
    </>
  );
}
