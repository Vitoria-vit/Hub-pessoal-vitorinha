import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-pink-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pink-700 hover:text-pink-900 transition-colors">
          Meu Hub Pessoal
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">Dashboard</Link></li>
          <li><Link href="/rotina" className="text-gray-700 hover:text-pink-600 transition-colors">Rotina</Link></li>
          <li><Link href="/diario" className="text-gray-700 hover:text-pink-600 transition-colors">Diário</Link></li>
          <li><Link href="/metas" className="text-gray-700 hover:text-pink-600 transition-colors">Metas</Link></li>
          <li><Link href="/financas" className="text-gray-700 hover:text-pink-600 transition-colors">Finanças</Link></li>
          <li><Link href="/inspiracao" className="text-gray-700 hover:text-pink-600 transition-colors">Inspiração</Link></li>
          <li><Link href="/recomeco" className="text-gray-700 hover:text-pink-600 transition-colors">Recomeço</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

