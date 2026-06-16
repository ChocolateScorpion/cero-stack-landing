import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Demo from "@/components/Demo";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Services />
      <CaseStudy />
      <Demo />
      <ContactForm />
      <footer className="border-t border-dark-border py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Cero Stack Studio · Todos los derechos reservados
      </footer>
    </main>
  );
}
