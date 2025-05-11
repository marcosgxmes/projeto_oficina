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
      <section className="w-full pt-12 px-4">
        <h1 className="font-bold text-2xl text-center mb-6">
          Seu feedback é muito importante pra gente! Como você avalia nosso
          atendimento?
        </h1>

        <div className="w-full max-w-xl mx-auto rounded-lg bg-[#E0E0E0]">
          <div className="bg-[#123960] py-3 px-4 rounded-t-lg border-b-5 border-[#E15D50]">
            <h1 className="text-white font-bold text-2xl">
              Avalie o nosso atendimento!
            </h1>
          </div>

          <div className="flex-col items-center justify-center py-8">
            <div className="flex justify-around items-center px-8 mb-8">
              {dados.map((snapshot) => (
                <Link
                  key={snapshot.id}
                  to={`/sugestao/${snapshot.id}`}
                  className="flex flex-col items-center justify-center gap-2 font-medium hover:scale-105 transition-all"
                >
                  <div>
                    <img
                      src={snapshot.image}
                      alt="Emoji feliz"
                      className="w-36"
                    />
                  </div>
                  {snapshot.subtitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
