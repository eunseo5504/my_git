import React from 'react';

interface ProjectDetailProps {
  onNavigate: (page: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onNavigate }) => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="px-8 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-end mb-16">
            <div className="flex-1">
              <span className="text-secondary font-medium tracking-widest text-xs uppercase mb-4 block">Selected Project — 2024</span>
              <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] text-on-background">
                Aether<br/>Gardens
              </h1>
            </div>
            <div className="w-full md:w-1/3 pb-4">
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                빛과 공간의 경계를 허무는 건축적 실험. 자연과 구조물이 하나의 유기체처럼 호흡하는 에테르 가든은 지속 가능한 럭셔리의 새로운 지표를 제시합니다.
              </p>
            </div>
          </div>
          <div className="relative h-[819px] w-full overflow-hidden rounded-lg">
            <img
              alt="Aether Gardens Architectural Masterpiece"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGIcqhhGk1RiX1hEq3AuuBJKtrDUKX2RiiMV3DBY1TBQxTbsNSPIHRsRKRp0qDoS9tXFQHy0SViQIssi9ozmf_7B0blAwoIlMOV14gJWjPotualSjj5Jv6I06ysekFtMYJo-xNpiOQppcxsy-Q3MWbw_o96AThDgW07ZW7VVvPpqW2cdQT_ofPa-o6ArGGq8kogEVUp1wSXoZbSf6S4Pz5HjJsyMFfs0J-_PxLDdr29q_M9ruVtldTe1x_LJ4F_KNqOui_CUJvqdc"
            />
            <div className="absolute bottom-12 left-12 glass-effect bg-white/10 p-8 rounded-lg max-w-sm">
              <div className="flex gap-4 mb-4">
                <span className="text-xs font-semibold tracking-tighter bg-white/20 px-2 py-1 rounded">Residential</span>
                <span className="text-xs font-semibold tracking-tighter bg-white/20 px-2 py-1 rounded">Seoul, KR</span>
              </div>
              <p className="text-white text-sm font-light leading-relaxed">자연광의 굴절을 극대화하여 내부 공간의 깊이감을 창조한 중앙 보이드 설계.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info & Brief */}
      <section className="bg-surface-container-low py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Text Column */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <h2 className="text-4xl font-bold tracking-tight mb-8">Client Brief</h2>
              <p className="text-2xl text-on-surface-variant leading-relaxed font-light mb-12">
                건축주는 도심 속에서도 완벽한 프라이버시와 자연의 평온함을 동시에 누릴 수 있는 공간을 원했습니다. 'The Curator'는 수직 정원과 빛의 회랑을 통해 이 상반된 요구를 하나의 예술 작품으로 승화시켰습니다.
              </p>
              <div className="grid grid-cols-2 gap-12 border-t border-outline-variant/20 pt-12">
                <div>
                  <span className="text-secondary text-xs font-bold block mb-2">Location</span>
                  <p className="text-lg font-medium">서울 성북구, 성북동</p>
                </div>
                <div>
                  <span className="text-secondary text-xs font-bold block mb-2">Area</span>
                  <p className="text-lg font-medium">840 sqm</p>
                </div>
                <div>
                  <span className="text-secondary text-xs font-bold block mb-2">Completed</span>
                  <p className="text-lg font-medium">March 2024</p>
                </div>
                <div>
                  <span className="text-secondary text-xs font-bold block mb-2">Collaborators</span>
                  <p className="text-lg font-medium">Lumière Studio</p>
                </div>
              </div>
            </div>
            {/* Visual Accent Card */}
            <div className="md:col-span-5 relative group">
              <div className="aspect-[4/5] bg-surface-container-lowest overflow-hidden rounded-xl shadow-sm">
                <img
                  alt="Interior lighting detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM-cJjc4XlFhCpWcQD26gFHDvt1JdtK_fengydVTykJZkqoV9YW6CroYDnGS-9p5idlVnGG8wKKexDpC2ColWDol9EQPJDKNZYKuMqShM-MCMvCnup5oqKVlly_tVAiNUw0rmyfnwZ59ptEmsY6Yo4q_O_8Hxz-_VRsTLpfqtWQi1UeLjYriUfWK4G5TaRjLYhbaGf451-CjXNwyW_BBnCewYbnZ4IXEQ_ICpG9Dw3x1m3m7Hdi53BqEol0gPtVfIF_J5uSyqi0go"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary text-on-secondary p-10 rounded-lg max-w-xs shadow-xl">
                <span className="material-symbols-outlined text-4xl mb-4">light_mode</span>
                <h3 className="text-xl font-bold mb-2">Luminous Intent</h3>
                <p className="text-sm opacity-80 font-light leading-relaxed">모든 공간은 태양의 궤적에 따라 시시각각 변하는 그림자의 예술을 경험하도록 설계되었습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Features */}
      <section className="py-40 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-24">
            <div className="md:w-2/5 pt-12">
              <h2 className="text-5xl font-extrabold tracking-tighter mb-12">Architectural<br/>Features</h2>
              <ul className="space-y-16">
                <li>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-secondary"></span>
                    Monolithic Form
                  </h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    거친 질감의 노출 콘크리트와 매끄러운 유리 면의 대비를 통해 건물의 물리적 존재감을 강조했습니다.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-secondary"></span>
                    Floating Courtyard
                  </h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    중력을 거스르는 듯한 캔틸레버 구조의 안뜰은 공중에 떠 있는 숲의 이미지를 구현합니다.
                  </p>
                </li>
                <li>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-secondary"></span>
                    Acoustic Harmony
                  </h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    물의 흐름을 활용한 자연적인 소음 차폐 시스템으로 도심 속 정적을 완성했습니다.
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-3/5 grid grid-cols-2 gap-8">
              <div className="space-y-8 mt-24">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4RIi8QexY2u1iuToUwfllrGt5LE5g6jgA6Rgci_fdNO0ChNhFqfPj1KZIVuMbivslwJzEaDSpFLDWUaChPG0Ong6iEoSset7je0IpI1ssUhmP3Ls7CjnZLC0iVA68mZbcjpLcb2a5jsofPsFqNijUqMADoY0nsGkxSCeQ2iytNfTLja-BJg-Ul2IOtW90kLT-RTzFp-PPaMzG1Ae6MoNSbpkdzHdj8VSIP-e4pNA_j58MDBpuZwr2HplxpuhWVviUxpqv903yR_I" alt="Facade detail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnEm5aDv-8vvFfsZwjGCP73ErxZEFc2AcIyp1nMzaaxSjKqGZLS7aA9RfIR-m7vzCtH4UzCXLaUBS6c6ocPqRwYeF7qHMtglCUdt1qPA0kon-moIiaAAz6FXURMVS9lzW4vkrkiIFL6iCusFi4cDYXf4azxDB5WBh6uF9AAqIZsqecr5D0oLH8OQ6_fZauYEPvLKPcqh4d62D1EG3qKY3cEXKnvbbWahOwpvVVaEgEVvcQDAaA5OfGHejekcGfJru17AB52DxqJew" alt="Office detail" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-xl overflow-hidden aspect-square bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY89mp79nNJaffKnuMNmD5noJFVQKMsiEYbsXA7YAbDD81O2SDmhic002_lq1x3FxAPZPXr-HmsYwBO_aPHv6GggT50hBZ9i5DDxgCY2xi5vuLtal4BxBXzrjGciHaofAwHKo4DPfLR-afePirZVxQj75JbLPCMGwTGcoKROkQfTiGB-6a_cgFSn9LsRFNxykLSv3JjgPGQD9kb9JEUFNbCusJsZLiOyEvOe7c1z3ue5psriwX_wq2dpHLSG7Ivk6Dx9H0raZb2S0" alt="Kitchen detail" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-surface-container">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3jm3-XniAFB5jEHRYJ6mXxjO0wdFJzN1sc2EhqXyQ5thBkMqQOF8o9TqGLGbnBz2h5QBfNjJb7dh_KISJFZlTxdJC7LREVfFxkrCk7mVp1iKLougF32zqqn8LJPm8AZa4ijzxeXCmfGU3-S680i2sQWB7lI6FrhNq10_QEY6ohNiVeGGnaloDu7Y3QnfZHCHx4--R2qY637Ms9AXMfK83lkV6RpjuDXDp2TzXrPuZtL1Oa4y45ht2LN6Ywl52J2Vbpdar-8j8RXM" alt="Pool detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      <section className="border-t border-outline-variant/10 py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div
            onClick={() => onNavigate('portfolio')}
            className="group block cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-xl">
                <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-6 block">Next Project</span>
                <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight group-hover:text-secondary transition-colors duration-500">
                  Obsidian<br/>Pavilion
                </h2>
              </div>
              <div className="relative w-full md:w-[500px] aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOoPWCJ6Xh4Zb7U9J_7W3a7IokTazyQpeptFlKovFpDuUcQjRttWQboLydZdhje6zc-y1Hxu1x28TRxbQsotT6OQibwsVt0NcsNd1oR6fFadfDc3nAG1ikNzGHxfyJtYkaQKatJBxj2E4bCRAt9-8myEdSM5TArG7SYo2bPr_ROH0k-9ilQ0qpISe24DA7oZ0VG_dGWZ936jsuKv7os4A08YBFlbLUfRyYVsalJV8SSy-pCahOKixqAPvifSGDfcl8tDfRE7pG4Hg"
                  alt="Next Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 right-6 flex items-center gap-4 text-white">
                  <span className="font-semibold tracking-tighter">View Project</span>
                  <span className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
