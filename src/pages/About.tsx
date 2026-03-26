import React from 'react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main className="pt-32">
      {/* Hero Section: Narrative Intro */}
      <section className="px-8 md:px-24 mb-32">
        <div className="max-w-5xl">
          <span className="text-secondary font-medium tracking-widest text-sm mb-6 block uppercase">About The Curator</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 text-on-background">
            우리는 빛의 편집을 통해<br/>가치를 증명합니다.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-3xl">
            단순한 디자인을 넘어, 브랜드가 가진 본질의 빛을 발견하고 그것을 가장 우아한 방식으로 큐레이팅합니다. The Curator는 공간과 깊이, 그리고 의도된 여백을 통해 디지털 경험의 새로운 기준을 제시합니다.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-surface-container-highest overflow-hidden rounded-xl">
              <img
                alt="Minimal lighting in architectural space"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcYXh96Jp98UQRMkkGwzZFL1WQG0IKOtrzWFgNOpe5yJycKuo1S5hpambtLx4dX5znIP5HaP_nDSTyp1UEHVFRbq_FtXxoQoL9AVk4RNl7WnXO9FjeDJiNoplSo47woyQB6pf3Y3RwK2hN_LCInZ6wI_1hchZVAdHNLvYWJhsy_BNmyD9NQuOZ6NBZIWtF4bNGdrBOpqikzosCfz8p1vdcoa1lhv0-XqkdpRand2jVUSKmbjYjttUoclphQ7Ii60XZqMX1lfLHXug"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-12">
            <h2 className="text-4xl font-bold tracking-tight mb-8">오직 본질만을 위한 선택</h2>
            <div className="space-y-8 text-lg text-on-surface-variant font-light leading-relaxed">
              <p>
                시장은 이미 정보의 과잉 상태입니다. 우리는 더하는 것이 아니라 덜어내는 과정을 통해 브랜드의 목소리를 더 크고 웅장하게 만듭니다. 갤러리의 흰 벽이 작품을 빛나게 하듯, 우리의 디자인 시스템은 당신의 콘텐츠가 주인공이 되도록 설계되었습니다.
              </p>
              <p>
                모든 픽셀과 모든 여백에는 이유가 있습니다. 우리는 클라이언트의 비전을 깊이 이해하고, 그 안에서 가장 빛나는 조각들을 선별하여 하나의 완벽한 서사로 완성합니다.
              </p>
            </div>
            <div className="mt-12 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">120+</div>
                <div className="text-sm text-on-surface-variant">성공적인 큐레이션</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-on-surface-variant">글로벌 어워드</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-on-surface-variant">고객 만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Philosophy</h2>
            <p className="text-on-surface-variant">우리가 추구하는 세 가지 핵심 가치</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-12 rounded-xl transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-on-surface/5 group">
              <div className="text-secondary mb-8">
                <span className="material-symbols-outlined text-4xl">light_mode</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Luminosity</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                빛은 공간을 정의합니다. 우리는 인터페이스의 명암과 톤을 조절하여 사용자의 시선이 머물러야 할 곳을 정확히 비춥니다.
              </p>
            </div>
            <div className="bg-surface-container-low p-12 rounded-xl transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-on-surface/5 group">
              <div className="text-secondary mb-8">
                <span className="material-symbols-outlined text-4xl">layers</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Depth</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                평면적인 화면에 물리적 깊이를 부여합니다. 그림자가 아닌 계층화된 톤을 통해 정보의 위계를 입체적으로 구성합니다.
              </p>
            </div>
            <div className="bg-surface-container-low p-12 rounded-xl transition-all duration-500 hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-on-surface/5 group">
              <div className="text-secondary mb-8">
                <span className="material-symbols-outlined text-4xl">auto_awesome_motion</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Selection</h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                편집은 곧 선택입니다. 수많은 가능성 중 브랜드의 철학을 가장 잘 대변할 수 있는 단 하나의 정답을 선별해냅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold tracking-tighter mb-6">The Curators</h2>
              <p className="text-xl text-on-surface-variant font-light">각 분야의 전문가들이 모여 당신의 브랜드를 정교하게 다듬습니다.</p>
            </div>
            <button className="text-secondary font-semibold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b border-secondary cursor-pointer">
              전체 팀원 보기 <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-white">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Lead Strategist"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuc_5AmGVNJblSHor4Esozj9VSEjiUPqVa2-zaAamYKIS6So90TUNcF6jxf-BDJp0O8kRgkYvw6uror_fm5NjzvcsZWdoxRuCdE7mgoGYDIMINGsTyFLuNkZNqaGx64xs9hQEP4F2pOqemuU2N7t6JGwQIPjnfu57sYfuozMlnxZ9h-tYB7Ioo7xEHd19aI3Wskj9IKQQopPAooVDdIWMMKcunna-e55HHDmFH7Oknoq1ntulzWRut88US-plppiMVK3hZD54TkR0"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Lead Strategist</div>
                <div className="text-xl font-bold">Ethan Park</div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white">
              <div className="aspect-square overflow-hidden">
                <img
                  alt="Lead UX Designer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4j4fi6fbXp-PfsInVTLVdPvUnx5XJha0o2IgzAgFdwPhoLFhHeDXdtE4byLLveS5e3DkTvUftDogVFhEv60mPAqazmEDvzJyXvpT1dZ7999oy-J9HgGwTDKO_-1bP1IMYGrNjDg45nQzn4heQO6tDQvJQN6TAB2wCUUVWyUBq_7nJOL5dI31KBp_I0ATqczvXqhPKAdl-VMTHeNFnoUd1mMCohGovZ559XYs1Ld0vrjeiGhsREvReafIphMAwywkFubTqh9E4i-A"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Lead UX Designer</div>
                <div className="text-xl font-bold">Sarah Kim</div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-white">
              <div className="aspect-square overflow-hidden">
                <img
                  alt="Creative Director"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHpEvPPUvCySUanLRlIbFwhjjfjtiINdkzIjD1EpltPRG5leNqTfH6daWowubkQANJA36L3PrsdvMCkcJiwUaU0y1Of1hg0hRHNxVVFxCleOSBeyNqGRgriMa0skUOVgegNfrZYNODuZjk2M8MmK0Xy0w90vrAJhfjGxfOFUkReUpcu3AciJVWkROP_6Uv-f2AZt3UQkSyVlqSyS9j8q9bElUnfsCXhyjAZNWRcnLq4IA_NG6jtWInUgwsrR6sT7ywCTmVYjsmcWI"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Creative Director</div>
                <div className="text-xl font-bold">James Lee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
