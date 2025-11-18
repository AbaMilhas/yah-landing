import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Simular from "@/components/Simular";
import Contato from "@/components/Contato";


export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />   {/* 👈 nova seção */}
      <Simular />
       <Contato />
    </>
  );
}
