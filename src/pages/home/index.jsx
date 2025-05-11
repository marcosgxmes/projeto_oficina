import { Link } from "react-router";
import sadFace from "../../../public/sad.png";
import happyFace from "../../../public/happy.png";
import madFace from "../../../public/normal.png";

const dados = [
  {
    id: 0,
    image: happyFace,
    title: "Boa! O que te agradou mais?",
    subtitle: "ÓTIMO",
  },
  {
    id: 1,
    image: madFace,
    title: "Opa! Em que podemos melhorar?",
    subtitle: "REGULAR",
  },
  {
    id: 2,
    image: sadFace,
    title: "Que pena! Em que podemos melhorar?",
    subtitle: "RUIM",
  },
];

export function Home() {
  return (
    <div>
      <section className="w-full pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8">
  <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-6 sm:mb-8 max-w-4xl mx-auto leading-tight">
    Seu feedback é muito importante pra gente!<br className="hidden sm:block" /> Como você avalia nosso atendimento?
  </h1>

  <div className="w-full max-w-xl mx-auto rounded-lg bg-[#E0E0E0] shadow-md overflow-hidden">
    <div className="bg-[#123960] py-3 px-4 sm:py-4 sm:px-6 rounded-t-lg border-b-[5px] border-[#E15D50]">
      <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl text-center">
        Avalie o nosso atendimento!
      </h1>
    </div>

    <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-4">
      <div className="w-full flex items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6">
        {dados.map((snapshot) => (
          <Link
            key={snapshot.id}
            to={`/sugestao/${snapshot.id}`}
            className="flex flex-col items-center justify-center gap-2 font-medium hover:scale-105 transition-transform duration-300 p-2 sm:p-3"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
              <img
                src={snapshot.image}
                alt={snapshot.subtitle}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg text-center">
              {snapshot.subtitle}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
