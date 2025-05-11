/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sadFace from "../../../public/sad.png";
import happyFace from "../../../public/happy.png";
import madFace from "../../../public/normal.png";

export function Sugestao() {
  const { id } = useParams();
  const [product, setProdutc] = useState("");

  const dados = [
    {
      id: 1,
      image: happyFace,
      title: "Boa! O que te agradou mais?",
      subtitle: "ÓTIMO",
      selected: false,
    },
    {
      id: 2,
      image: madFace,
      title: "Opa! Em que podemos melhorar?",
      subtitle: "REGULAR",
      selected: false,
    },
    {
      id: 3,
      image: sadFace,
      title: "Que pena! Em que podemos melhorar?",
      subtitle: "RUIM",
      selected: false,
    },
  ];

  const sugestoesDeMelhorias = [
    { id: 0, text: "Velocidade de atendimento" },
    { id: 1, text: "Qualidade dos produtos" },
    { id: 2, text: "Atendimento do vendedor" },
    { id: 3, text: "Preço" },
    { id: 4, text: "Condições de pagamento" },
    { id: 5, text: "Disponibilidade de peças" },
  ];

  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState([]);

  // ADICIONAR SUGESTAO
  function addSugestao(id) {
    const itemParaAdicionar = sugestoesDeMelhorias.find(
      (item) => item.id === id
    );
    if (
      !itemParaAdicionar ||
      opcoesSelecionadas.some((item) => item.id === id)
    ) {
      return;
    }
    setOpcoesSelecionadas((prev) => [...prev, itemParaAdicionar]);
  }

  // REMOVER SUGESTAO SELECIONADA
  function removeSugestao(id) {
    setOpcoesSelecionadas((prev) => {
      const existe = prev.some((item) => item.id === id);
      return existe ? prev.filter((item) => item.id !== id) : prev;
    });
  }

  //  EXIBIR SUGESTOES
  useEffect(() => {
    async function getDate() {
      if (!id) return;
      setProdutc(dados[id]);
    }
    getDate();
  }, [id]);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      {product && (
        <section className="w-full">
          {/* Card Principal */}
          <div className="w-full max-w-4xl mx-auto mb-8 rounded-lg bg-[#E0E0E0] shadow-md">
            {/* Cabeçalho */}
            <div className="bg-[#123960] py-3 px-4 md:py-4 md:px-6 mb-4 rounded-t-lg border-b-5 border-[#E15D50]">
              <h1 className="font-bold text-lg md:text-xl text-white text-center">
                <span className="font-normal text-md md:text-md italic">
                  {product.title}
                </span>
              </h1>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col md:flex-row px-3 md:px-6">
              {/* Emoji e Subtítulo */}
              <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-4">
                <div className="flex flex-col items-center gap-2 font-medium">
                  <img
                    src={product.image}
                    alt="Emoji de avaliação"
                    className="w-16 md:w-24"
                  />
                </div>
                <span className="text-sm md:text-base">{product.subtitle}</span>
              </div>

              {/* Opções de Sugestão */}
              <div className="w-full md:w-3/4 bg-white rounded-md p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
                {sugestoesDeMelhorias.map((snap) => (
                  <button
                    key={snap.id}
                    onClick={() => addSugestao(snap.id)}
                    className="bg-[#123960] flex items-center justify-center py-2 px-2 md:px-4 rounded-md text-white text-xs md:text-sm text-center h-12 md:h-16 w-full cursor-pointer hover:scale-105 transition-all hover:bg-[#1a4b7a]"
                  >
                    {snap.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Botão Confirmar */}
            <div className="w-full p-4">
              {opcoesSelecionadas.length > 0 ? (
                <Link
                  to="/agradecimento"
                  className="w-full flex justify-center"
                >
                  <button className="bg-[#20643F] text-white font-bold py-2 md:py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-all hover:bg-green-600 text-sm md:text-base">
                    CONFIRMAR
                  </button>
                </Link>
              ) : (
                <div className="w-full flex justify-center">
                  <button
                    className="bg-gray-400 text-white font-bold py-2 md:py-3 px-6 rounded-lg shadow-md text-sm md:text-base cursor-not-allowed"
                    disabled
                  >
                    CONFIRMAR
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Itens Selecionados */}
      <div className="w-full max-w-4xl mx-auto gap-4 flex flex-col justify-center items-center p-4">
        <h3
          className={`${
            opcoesSelecionadas?.length > 0
              ? "font-medium text-lg md:text-xl mb-4"
              : "hidden"
          }`}
        >
          Clique para remover
        </h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {opcoesSelecionadas.map((item) => (
            <button
              onClick={() => removeSugestao(item.id)}
              key={item.id}
              className="bg-[#123960] flex items-center justify-center py-2 px-2 md:px-4 rounded-md text-white text-xs md:text-sm text-center h-12 md:h-16 w-full cursor-pointer hover:scale-105 transition-all hover:bg-red-500"
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
