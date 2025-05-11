/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router";
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
    {
      id: 0,
      text: "Velocidade de atendimento",
    },
    {
      id: 1,
      text: "Qualidade dos produtos",
    },
    {
      id: 2,
      text: "Atendimento do vendedor",
    },
    {
      id: 3,
      text: "Preço",
    },
    {
      id: 4,
      text: "Condições de pagamento",
    },
    {
      id: 5,
      text: "Disponibilidade de peças",
    },
  ];

  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState([]);

  const [selected, setSelected] = useState(false);

  function addSugestao(id) {
    // Encontra o item nas sugestões
    const itemParaAdicionar = sugestoesDeMelhorias.find(
      (item) => item.id === id
    );

    // Verifica se o item existe e se já não foi adicionado
    if (
      !itemParaAdicionar ||
      opcoesSelecionadas.some((item) => item.id === id)
    ) {
      return;
    }

    // Adiciona o novo item mantendo os anteriores
    setOpcoesSelecionadas((prev) => [...prev, itemParaAdicionar]);
    console.log(opcoesSelecionadas)
  }

  function removeSugestao(id) {
  setOpcoesSelecionadas(prev => {
    const existe = prev.some(item => item.id === id);
    return existe ? prev.filter(item => item.id !== id) : prev;
  });
}

  // function GoToEnd() {
  //   const navigate = useNavigate();
  //   navigate("/agradecimento");
  // }

  useEffect(() => {
    async function getDate() {
      if (!id) {
        return;
      }

      setProdutc(dados[id]);
      console.log(dados[id]);
    }
    getDate();
  }, [id]);

  return (
    <div>
      {product && (
        <section className="w-full">
          <div className="w-full max-w-xl mx-auto rounded-lg bg-[#E0E0E0]">
            <div
              className={`bg-[#123960] py-3 px-4 mb-4 rounded-t-lg border-b-5 border-[#E15D50]`}
            >
              <h1 className="font-bold text-xl text-white">
                <span className="font-normal text-md italic">
                  {product.title}
                </span>
              </h1>
            </div>

            <div className="flex px-3 h-full items-center justify-center">
              <div className="px-4">
                <Link className="flex flex-col items-center justify-center gap-2 font-medium ">
                  <div>
                    <img
                      src={product.image}
                      alt="Emoji de avaliação"
                      className="w-66"
                    />
                  </div>
                  {product.subtitle}
                </Link>
              </div>

              <div className="bg-white rounded-md flex flex-wrap gap-5 py-4 justify-center items-center mb-4">
                {sugestoesDeMelhorias.map((snap) => (
                  <span
                    key={snap.id}
                    onClick={() => addSugestao(snap.id)}
                    className={` bg-[#123960] flex items-center justify-center py-2 px-5 rounded-md text-white text-center h-16 w-40 cursor-pointer hover:scale-105 transition-all hover:bg-[#1f6ebd]`}
                  >
                    {snap.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full flex items-center">
              <Link to="/agradecimento" className="w-full flex items-center">
                <button className="bg-[#20643F] text-white font-bold py-3 mb-4 px-6 rounded-lg mx-auto shadow-black-md hover:scale-105 transition-all hover:bg-green-600">
                  CONFIRMAR
                </button>
              </Link>
            </div>

            <div>
              <ul>
                {opcoesSelecionadas && (
                  <li onClick={() => removeSugestao()}>{opcoesSelecionadas.id}</li>
                )}
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
