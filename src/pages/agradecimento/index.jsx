import { useNavigate } from 'react-router';
import {BsCartCheckFill} from 'react-icons/bs'
import { useEffect } from 'react';

export function Agradecimento() {

  function BackToHome() {
    const navigate = useNavigate();
    
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);
      
      // Limpeza quando o componente desmontar
      return () => clearTimeout(timer);
    }, [navigate]);
  }


  return (
    <div>

<h1 className="font-bold text-2xl text-center mb-6">A Abreu Oficina agradece a sua preferencia!</h1>


<div className=" w-74 mx-auto p-4 bg-white flex flex-col items-center justify-center gap-4 rounded-lg shadow-md mb-16">
  <div className="w-full flex flex-col py-4 items-center justify-center gap-4 bg-[#123960] rounded-lg">
    <div className="flex flex-col items-center justify-center">
      <span className="text-white font-medium text-lg">
        OBRIGADO POR
      </span>
      <span className="font-normal text-white italic text-lg">
        comprar com a gente!
      </span>
    </div>

    <div>
      <BsCartCheckFill size={40} color="#0F9955" />
    </div>
  </div>
</div>
    </div>
  )
}
