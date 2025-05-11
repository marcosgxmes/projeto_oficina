import { useNavigate } from "react-router";
import { BsCartCheckFill } from "react-icons/bs";
import { useEffect } from "react";

export function Agradecimento() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl text-center mb-6 text-gray-800">
          A Abreu Oficina agradece a sua preferência!
        </h1>

        <div className="w-full mx-auto p-6 bg-white flex flex-col items-center justify-center gap-6 rounded-lg shadow-lg transition-all hover:shadow-xl">
          <div className="w-full flex flex-col py-8 items-center justify-center gap-4 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <span className="text-white font-semibold text-xl md:text-2xl tracking-wide">
                OBRIGADO POR
              </span>
              <span className="font-normal text-white italic text-xl md:text-2xl">
                comprar com a gente!
              </span>
            </div>

            <div className="p-4 bg-white rounded-full animate-bounce">
              <BsCartCheckFill size={48} color="#0F9955" />
            </div>
          </div>

          <p className="text-gray-600 text-center mt-4">
            Você será redirecionado automaticamente para a página inicial em
            alguns segundos...
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Voltar agora
          </button>
        </div>
      </div>
    </div>
  );
}
