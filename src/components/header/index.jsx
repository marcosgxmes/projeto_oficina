import { Link } from "react-router-dom";
import { FiUser, FiLogIn } from "react-icons/fi";
import Logo from "../../assets/logo.svg"

export function Header() {
  const signed = false;
  const loginAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 bg-[#123960] drop-shadow mb-4">
      <header className="flex w-full max-w-7xl itens-center justify-between px-4 mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo da oficina" className='max-w-46  w-full object-contain mx-1 py-1.5' />
        </Link>

        {!loginAuth && signed && (
          <Link to="/dashboard">
            <FiUser size={24} color="#fff" />
          </Link>
        )}

        {!loginAuth && !signed && (
          <Link to="/login">
            <FiLogIn size={24} color="#fff" />
          </Link>
        )}
      </header>
    </div>
  );
}
