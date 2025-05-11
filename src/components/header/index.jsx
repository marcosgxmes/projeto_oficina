import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";
import Logo from "../../assets/newLogo.png";

export function Header() {
  const signed = false;
  const loginAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 sm:h-20 bg-gradient-to-r from-[#0d2c4a] to-[#123960] shadow-md sticky top-0 z-50">
      <header className="flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
        <Link 
          to="/" 
          className="hover:opacity-90 transition-opacity duration-200"
        >
          <img 
            src={Logo} 
            alt="Logo da oficina" 
            className="max-w-[140px] sm:max-w-[200px] w-full object-contain py-2" 
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          {!loginAuth && signed && (
            <Link 
              to="/dashboard" 
              className="flex items-center gap-1 text-white hover:text-blue-200 transition-colors duration-200 group"
            >
              <FiUser 
                size={26} 
                className="group-hover:scale-110 transition-transform duration-200" 
              />
              <span className="hidden sm:inline-block font-medium">Minha Conta</span>
            </Link>
          )}

          {!loginAuth && !signed && (
            <Link 
              to="/login" 
              className="flex items-center gap-1 text-white hover:text-blue-200 transition-colors duration-200 group"
            >
              <FiLogIn 
                size={26} 
                className="group-hover:scale-110 transition-transform duration-200" 
              />
              <span className="hidden sm:inline-block font-medium">Entrar</span>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}