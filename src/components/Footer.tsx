import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 dark:bg-stone-950 font-sans text-sm tracking-wide leading-loose w-full tonal-shift border-t border-stone-200/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="text-lg font-bold text-stone-900 dark:text-stone-50">The Curator</div>
          <p className="text-stone-500 dark:text-stone-400">
            우리는 보이지 않는 것을 보이게 하고, 평범한 것을 특별하게 만듭니다. 당신의 비전을 큐레이팅하세요.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-stone-400 hover:text-secondary cursor-pointer transition-colors">public</span>
            <span className="material-symbols-outlined text-stone-400 hover:text-secondary cursor-pointer transition-colors">share</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-stone-900 dark:text-stone-50 mb-2 uppercase text-[11px] tracking-widest">탐색</span>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">홈</a>
          <a className="text-stone-900 dark:text-stone-50 font-medium" href="#">서비스</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">프로젝트</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-stone-900 dark:text-stone-50 mb-2 uppercase text-[11px] tracking-widest">법적 고지</span>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">이용약관</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">개인정보처리방침</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">쿠키 정책</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-stone-900 dark:text-stone-50 mb-2 uppercase text-[11px] tracking-widest">소셜</span>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">인스타그램</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">링크드인</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-amber-600 underline-offset-4 hover:underline transition-all" href="#">비핸스</a>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-stone-200/10 text-stone-500 dark:text-stone-400 text-xs flex justify-between items-center max-w-7xl mx-auto">
        <span>© 2024 The Curator. All rights reserved.</span>
        <div className="flex gap-6 items-center">
          <span className="opacity-80 hover:opacity-100 duration-200 cursor-pointer">KR</span>
          <span className="opacity-80 hover:opacity-100 duration-200 cursor-pointer">EN</span>
          <span className="material-symbols-outlined text-stone-400 cursor-pointer">dark_mode</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
