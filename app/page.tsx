import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Demo from "@/components/Demo";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <CaseStudy />
        <Demo />
        <ContactForm />
        <footer className="border-t border-[#141414] py-8 text-center text-xs text-[#404040]">
          © {new Date().getFullYear()} Cero Stack Studio · Todos los derechos reservados
        </footer>
      </main>
    </>
  );
}
