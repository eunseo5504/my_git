import React from 'react';

const Services: React.FC = () => {
  return (
    <main className="pt-32 pb-24">
      {/* Services Hero */}
      <section className="px-8 mb-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-on-surface">
              공간과 가치를 <br/>선별하는 <span className="text-secondary italic">미학적 안목</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              단순한 배치를 넘어, 당신의 삶과 비즈니스가 숨 쉴 수 있는 최적의 레이어를 제안합니다. 우리는 보이지 않는 가치를 가시화하는 큐레이터입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Bento Grid */}
      <section className="px-8 mb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Service 1: Design Consultation */}
          <div className="md:col-span-7 bg-surface-container-low rounded-xl p-10 group hover:bg-surface-container transition-all duration-500 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-light text-outline">01</span>
                <span className="material-symbols-outlined text-4xl text-secondary">architecture</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Design Consultation</h3>
              <p className="text-on-surface-variant leading-loose max-w-md">
                브랜드의 본질을 파악하고 시각적 아이덴티티를 구축합니다. 우리는 트렌드를 따르기보다 시간이 흘러도 변하지 않는 클래식한 조형미를 컨설팅합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-1.5 bg-surface-container-lowest rounded-full text-xs font-medium text-on-surface-variant">브랜드 전략</span>
              <span className="px-4 py-1.5 bg-surface-container-lowest rounded-full text-xs font-medium text-on-surface-variant">컬러 팔레트</span>
              <span className="px-4 py-1.5 bg-surface-container-lowest rounded-full text-xs font-medium text-on-surface-variant">머티리얼 제안</span>
            </div>
          </div>
          {/* Image Accents */}
          <div className="md:col-span-5 relative overflow-hidden rounded-xl h-[500px]">
            <img
              alt="Minimalist architectural space"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfiFssVPSTJtDHuk8WJzQtnzXn7UsqIuj1wvQaVyJCUQ4d8gutLg8SA1GrONoXoB2iG6hBLqBZYJ4KrzA0rguM7CmgiPxcXjlZXqxcTluz99gOXQoLo5Kf1t2p6Jp8zQo7iB79natdIJmPSVwxIO_Aux93Ry-yXhLw0wVk4HBm3d9AG92gQoe2YAulYLDIph-5iWJy_VRymVyDnEv4rwqTGN_pbiIiuPto4syS2DcO8iyZiJJrGi5BMtOf1hd_XESWWKD81gcwgY"
            />
            <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply"></div>
          </div>
          {/* Service 2: Spatial Planning */}
          <div className="md:col-span-5 bg-surface-container-lowest rounded-xl p-10 group border border-outline-variant/10 hover:shadow-2xl hover:shadow-on-surface/5 transition-all duration-500 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl font-light text-outline">02</span>
                <span className="material-symbols-outlined text-4xl text-secondary">view_quilt</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Spatial Planning</h3>
              <p className="text-on-surface-variant leading-loose">
                효율적인 동선과 심미적 균형을 동시에 고려한 공간 구조를 설계합니다. 비어있는 여백조차 의도된 감동이 되는 레이아웃을 지향합니다.
              </p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-on-surface">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> 3D 시각화 및 모델링
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> 최적 동선 시뮬레이션
                </li>
              </ul>
            </div>
          </div>
          {/* Service 3: Digital Curation */}
          <div className="md:col-span-7 bg-surface-container-low rounded-xl p-10 group hover:bg-surface-container transition-all duration-500 flex flex-col justify-between min-h-[500px]">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl font-light text-outline">03</span>
                  <span className="material-symbols-outlined text-4xl text-secondary">gallery_thumbnail</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Digital Curation</h3>
                <p className="text-on-surface-variant leading-loose">
                  물리적 공간을 넘어 디지털 환경에서의 브랜드 경험을 정교하게 다듬습니다. 웹, 모바일, 그리고 가상 공간에서의 일관된 톤앤매너를 유지합니다.
                </p>
              </div>
              <div className="w-full md:w-64 h-64 bg-surface-container-highest rounded-lg overflow-hidden relative">
                <img
                  alt="Digital interface"
                  className="w-full h-full object-cover grayscale opacity-50"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw4GLHaTNrM61du9RxmP68lDCBP1033xOeg11L_NPalrR7etY5G3kxHauJBwCf0FGM5Ge49wnf6jiJdzShBS7fDazqPHItOWxIIx5iEPSIWgudAEwMhYJp2Wb3ymjg01AhIAd_PdubtXTzInPNU1lulayGCBt_eOxrfUQnCcVw-Wekr8rdFEhkQOuyPryYACMX8M4zVBJlkAdgVcjDYYkLhTJQrAHLU0pDfHy_YaIUCb1-0wl6EpFPOFR-ezYRuWtwKfVcIQyP0YU"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[80px] material-symbols-outlined text-white/30">blur_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section: The Curatorial Method */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <span className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4 block">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The Curatorial Method</h2>
            <p className="text-on-surface-variant">우리가 탁월한 결과물을 만들어내는 네 단계의 여정</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/20">
            {/* Step 1 */}
            <div className="pt-12 pb-12 md:pr-12 md:border-r border-outline-variant/20 group">
              <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center mb-8 transition-colors group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="font-bold">01</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Discovery</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                클라이언트의 철학과 숨겨진 니즈를 깊이 있게 탐구하고 분석합니다.
              </p>
            </div>
            {/* Step 2 */}
            <div className="pt-12 pb-12 md:px-12 md:border-r border-outline-variant/20 group">
              <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center mb-8 transition-colors group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="font-bold">02</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Selection</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                수많은 아이디어 중 브랜드의 가치를 가장 잘 드러낼 수 있는 핵심 요소를 선별합니다.
              </p>
            </div>
            {/* Step 3 */}
            <div className="pt-12 pb-12 md:px-12 md:border-r border-outline-variant/20 group">
              <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center mb-8 transition-colors group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="font-bold">03</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Composition</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                선별된 요소들을 가장 조화로운 방식으로 배치하고 정교하게 설계합니다.
              </p>
            </div>
            {/* Step 4 */}
            <div className="pt-12 pb-12 md:pl-12 group">
              <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center mb-8 transition-colors group-hover:bg-secondary group-hover:text-on-secondary">
                <span className="font-bold">04</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Refinement</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                마지막 디테일까지 다듬어 완성도 높은 최상의 경험을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
