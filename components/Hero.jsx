"use client";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer className="relative isolate px-6 pt-14 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          PRUEBA FRONTEND
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          Esta prueba fue realizada por Álvaro Javier León Camacho para el
          puesto de desarrollador FrontEnd, utilizando React.js y el framework
          Next.js. Durante la realización de la prueba, se puede observar que se
          utilizó un tipo de fuente diferente debido a la imposibilidad de
          utilizar las mismas fuentes que se encontraban en el diseño de Figma.
          Además, se realizaron pequeños cambios en algunos iconos por
          conveniencia.
          La realización de la prueba se encuentra en la pestaña personajes.
        </p>
        <p className="mt-6 text-lg leading-8 text-white">
        Agradezco cualquier retroalimentación que se me pueda
          proporcionar, así como el tiempo dedicado a revisar esta prueba.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://github.com/javierlnc/PruebaFront"
            target={"_blank"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Repositorio Github
          </a>
          <a
            href="https://www.linkedin.com/in/javierlnc/"
            target={"_blank"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Perfil Linkedin
          </a>
        </div>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  h1 {
    font-family: "Cinzel", serif;
  }
`;
export default Hero;
