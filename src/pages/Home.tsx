import React from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-8 mb-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block">Digital Agency</span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-on-background">
              디지털 미학의<br/><span className="text-secondary italic">새로운 기준</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12">
              단순한 디자인을 넘어 가치를 제안합니다. 우리는 보이지 않는 디테일까지 큐레이팅하여 가장 정제된 디지털 경험을 창조합니다.
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => onNavigate('portfolio')}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
              >
                프로젝트 보기 <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-b-2 border-outline-variant hover:border-secondary transition-colors px-2 py-4 text-sm font-bold text-on-surface cursor-pointer"
              >
                철학 읽어보기
              </button>
            </div>
          </div>
          <div className="hidden md:block pb-4">
            <div className="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-outline">arrow_downward</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background leading-tight">
                The Philosophy of<br/>Refined Selection
              </h3>
            </div>
            <p className="text-on-surface-variant max-w-sm mb-2">
              우리는 기술보다 본질을, 유행보다 영속성을 우선합니다. 수많은 가능성 중 단 하나의 완벽함을 찾아내는 것, 그것이 우리의 사명입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="bg-surface-container-lowest p-12 rounded-xl group hover:bg-on-background transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">ink_highlighter</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">정교한 큐레이션</h4>
              <p className="text-on-surface-variant group-hover:text-stone-400 transition-colors leading-relaxed">
                수천 개의 레퍼런스 중 브랜드의 영혼에 가장 부합하는 단 하나의 톤앤매너를 제안합니다.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-surface-container-lowest p-12 rounded-xl group hover:bg-on-background transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">architecture</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">건축적 레이아웃</h4>
              <p className="text-on-surface-variant group-hover:text-stone-400 transition-colors leading-relaxed">
                시선의 흐름과 정보의 위계를 수학적으로 계산하여 가장 편안한 디지털 공간을 구축합니다.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-surface-container-lowest p-12 rounded-xl group hover:bg-on-background transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-tertiary-container flex items-center justify-center mb-10 group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-on-secondary">light_mode</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">빛의 미학</h4>
              <p className="text-on-surface-variant group-hover:text-stone-400 transition-colors leading-relaxed">
                그림자가 아닌 빛의 톤 차이로 깊이감을 형성하여 화면 너머의 실제감을 부여합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Bento Grid */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">선택된 조각들</h2>
          <p className="text-on-surface-variant">The Curator가 빚어낸 최근 프로젝트 리스트입니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[1000px]">
          {/* Large Feature */}
          <div className="md:col-span-8 md:row-span-1 relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              alt="Luxury interior design showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbc1aPc6pIwhIvAWOMp-yuvmAddls2UEHgcw0MVTvMF9TArsmEZ71nd06EXOy7miYc818qQvUIxDJjv8gyjr0jXFxGS-L7U2JWwutlpDYH1Q1G8pXjXQCjn8ahq1kNr1-uuRuzw7tpaOU-ymK4yE03o_3kd9daEPKyJEHojHie0ZUwqBeb9kl34gv_6wyg-HDA9ljozWSNo1igm4pF6s-4CPtwveStZYksuCjJQn4CQx7H06sgfMc8HSaDcJo_o5S1VF_xVmqsjb0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <span className="text-secondary font-bold text-xs tracking-widest mb-2 uppercase">Brand Identity</span>
              <h5 className="text-white text-3xl font-bold">The Minimal House</h5>
            </div>
          </div>
          {/* Small Feature 1 */}
          <div className="md:col-span-4 md:row-span-1 relative overflow-hidden rounded-xl group cursor-pointer bg-surface-container">
            <img
              alt="Digital interface details"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjqa4IKpFrsNcwrKq-yIauGCQZyjQvkU__KMd6deTu-CDjZSADsPUPlV2Ka4T0bJCxKVAkIDIsAcg0VQMQHUR1U9m13dai_6d-gihLbLheBnuC8YnZmt52C8uGx1ejouKey_8YAYGfD9YyvNfJLVx_eOI0AFcznbm876FGyBV9LK5wrNBbQ5FVIVj93SPeIkxNtAFUE4PWOqilMkfqV-Pp9BlDZf1tFXgW30h2Y3ABhGZ4LRhi9ofUYB0W-fmgzFL4O0e2_L-t7Ig"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-secondary font-bold text-xs tracking-widest mb-2 uppercase">UX Solution</span>
              <h5 className="text-white text-xl font-bold">Nova Fintech</h5>
            </div>
          </div>
          {/* Small Feature 2 */}
          <div className="md:col-span-4 md:row-span-1 relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              alt="Abstract art wallpaper"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOBR_VVDbSqkUQejAux4E4sWhLaQXRBrTCFZiF29zE4kgr6R2k5jm44P4WK6A9RRIN5bVd5OBJge6Pkwdqs_MHMwAZRxesXAeulLEjFZ96VXGxAeAbL5ul_R1K6EUyIxOwDOjOzwzxOwAiRk1zpW95OtFmy2XItBHEhwYmOmszaOx76BDalzyHB-GzyYcIZ5-jFmFvjJt1FESm8AnTuYiNJC4EhykvnTETE57D8YLPlTu4XguF2rImFdLRIYeY7bCW3T_fIt3uBEY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-secondary font-bold text-xs tracking-widest mb-2 uppercase">Editorial Design</span>
              <h5 className="text-white text-xl font-bold">Art Curator Mag</h5>
            </div>
          </div>
          {/* Large Feature 2 */}
          <div className="md:col-span-8 md:row-span-1 relative overflow-hidden rounded-xl group cursor-pointer">
            <img
              alt="Data visualization concept"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHD5O7iImSMsjAanXsriCKJ1ysy00Fue9fofJPRQdPrZJjGuK6hzkMXdFvtodvVs4WinIwCEU7PTzgjyzMwQPMhElQybd5TZuR1twd1UwiAlAATN_1a-hXn3y4-TldDBaf5rjhuy_tFnHlYqyLI2FeC0ua1tC2ooJVck8HBKwyldKxbaHzLJghfTatYrAbQFylY1NbxWJACTF5FRKpcIxYJRSHbS1uck_qMoVoxGeIfWeQrCQDHSAURqvsnJBLFqcfRIYaZ9f-U04"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
              <span className="text-secondary font-bold text-xs tracking-widest mb-2 uppercase">Commerce Platform</span>
              <h5 className="text-white text-3xl font-bold">Loom & Weave</h5>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-12 py-5 border border-outline-variant text-sm font-bold rounded-full hover:bg-on-background hover:text-white transition-all cursor-pointer"
          >
            모든 프로젝트 탐색
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-8 relative overflow-hidden text-center bg-on-background">
        <div className="max-w-4xl mx-auto z-10 relative">
          <h2 className="text-secondary text-sm font-bold tracking-[0.3em] uppercase mb-8">Ready to curate?</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12 leading-tight">
            당신의 브랜드도<br/>작품이 될 수 있습니다.
          </h3>
          <p className="text-stone-400 text-lg mb-16 max-w-xl mx-auto leading-relaxed">
            단순한 의뢰를 넘어 파트너십을 제안합니다. 우리가 함께 만들 내일의 미학에 대해 이야기 나누어 보세요.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full md:w-auto bg-secondary text-on-secondary px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform cursor-pointer"
            >
              프로젝트 문의하기
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full md:w-auto border border-stone-700 text-stone-300 px-10 py-5 rounded-full font-bold text-lg hover:bg-stone-800 transition-all cursor-pointer"
            >
              전화 상담 예약
            </button>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute -bottom-48 -left-48 w-96 h-96 border border-stone-800 rounded-full opacity-50"></div>
      </section>
    </main>
  );
};

export default Home;
