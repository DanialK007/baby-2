import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Model from "@/components/Model";
import RecentUploads from "@/components/RecentUploads";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/img/hero.png')] bg-cover bg-top bg-fixed">
        <img
          src="noise.png"
          alt="noise"
          className="opacity-5 fixed inset-0 z-50 pointer-events-none"
        />
        <Model />
        <div className="h-[80vh] relative">
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="mx-auto w-fit text-4xl md:text-6xl lg:text-7xl font-bold">Ｇａｌｌｅｒｙ</div>
          </div>
          <div className="absolute inset-0 z-10 bg-linear-to-t from-white/70 via-white/30"></div>
        </div>
        <div className="bg-white/70 min-h-screen">
            <RecentUploads/>
        </div>
      </div>
    </>
  );
}
