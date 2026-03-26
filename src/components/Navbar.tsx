import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { name: '홈', id: 'home' },
    { name: '서비스', id: 'services' },
    { name: '프로젝트', id: 'portfolio' },
    { name: '회사 소개', id: 'about' },
    { name: '고객 포털', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md font-sans tracking-tight leading-relaxed border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 py-6 max-w-full mx-auto">
        <div
          className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          The Curator
        </div>
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`transition-colors cursor-pointer ${
                currentPage === item.id
                  ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-secondary text-on-secondary px-6 py-2.5 rounded-lg text-sm font-medium tracking-wide hover:opacity-90 transition-all active:scale-95 cursor-pointer"
        >
          문의하기
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
