import Enter from "@/components/Enter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Main from "@/components/Main";
import Model from "@/components/Model";
import Ribbons from "@/components/Ribbons";

export default function Home() {
  return (
    <div className="bg-[url('/img/hero.png')] bg-cover bg-top bg-fixed relative overflow-hidden">
      <div className="fixed inset-0 z-50 pointer-events-none">
        <img src="noise.png" alt="noise" className="opacity-5 object-cover size-full" />
      </div>
      <Ribbons
        baseThickness={30}
        colors={["#ffffff"]}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
      />
      <Enter />
      <Model />
      <Hero />
      <Main />
      <Letter />
      <Footer />
    </div>
  );
}
