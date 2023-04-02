import React, { useEffect, useState } from "react";

import Logo from "./assets/logo.svg";
import Poster from "./assets/poster.png";

const App = () => {
  const [data, setData] = useState(null);

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const handleClick = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${random(
        200,
        999
      )}?api_key=b3ae42d2f588e9a4c24f358e7de432f1&language=pt-BR`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center h-screen font-poppins text-white bg-gradient-to-bl from-red via-black to-blue overflow-y-auto">
      <main className="py-10 flex flex-col items-center gap-8">
        <section className="flex flex-col items-center gap-4">
          <img src={Logo} alt="Logo Rocketflix" />
          <h1 className="text-center font-bold text-4xl">
            Não sabe o que assistir?
          </h1>
        </section>

        <section className="flex flex-col items-center sm:flex-row sm:items-start gap-8 max-w-[80%]">
          {!data ? (
            ""
          ) : (
            <>
              <img
                src={
                  data?.success === false
                    ? Poster
                    : `https://image.tmdb.org/t/p/original/${data.poster_path}`
                }
                alt="Capa do Filme"
                width={"150"}
              />
              <div>
                <h2 className="text-center sm:text-start text-2lg font-bold mb-4">
                  {!data.title
                    ? "Ops, hoje não é dia de assistir filme. Bora codar! 🚀"
                    : data.title}
                </h2>
                <p className="text-justify sm:text-start">
                  {data.overview === "" ? "Sem descrição." : data.overview}
                </p>
              </div>
            </>
          )}
        </section>

        <section className="flex flex-col items-center gap-4">
          <button
            onClick={handleClick}
            className="bg-white p-4 flex items-center gap-4 font-bold rounded-md text-black hover:bg-white/80 active:bg-white/60 transition duration-200"
          >
            <img src={Logo} alt="Imagem do botão" width={38} height={38} />
            Encontrar filme
          </button>
          <p className="text-sm max-w-[380px] text-center">
            Clique em "Encontrar filme" que traremos informações de algum filme
            para você assistir hoje.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
