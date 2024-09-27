// Craft Imports
import { Section, Container } from "@/components/craft";

// Icons
import Image from "next/image";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Container>
         <h3 className='text-center text-5xl font-extrabold mt-0'>Bienvenidos🌈</h3>
          <p className="text-sm text-center pb-10 mb-10">
            Espacio Serendipia es un espacio multidisciplinario que ofrece servicios de salud mental y bienestar integral a la comunidad, así como alquiler de consultorios para profesionales de la salud 
          </p>
        <Hero />
      </Container>
    </Section>
  );
}

const Hero = () => {
  return (
    <article className="prose-m-none">
          <div className="w-full flex flex-row gap-4 items-center pb-10">
            <div className="w-full md:w-2/3">
                <Image
                  src="/images/consultorios.jpg"
                  width={640}
                  height={365}
                  alt="Consultorios"
                  className="m-0"
                  />
            </div>
            <div className="w-full md:w-1/3">
              <ul className='list-none ps-0'>
                <li>✅ Alquiler de Consultorios</li>
                <li>✅ Psicología</li>
                <li>✅ Terapias Alternativas</li>
                <li>✅ Flores de Bach</li>
                <li>✅ Clases de Yoga</li>
                <li>✅ Tarot Terapéutico</li>
                <li>✅ Masajes, reflexología, reiki</li>
                <li>✅ Estética, Uñas, Depilación</li> 
              </ul>

            </div>
          </div>

    </article>
  );
};
