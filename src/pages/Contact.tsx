import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-20">
        <p className="text-secondary font-medium tracking-[0.2em] mb-4 text-xs uppercase">CONTACT US</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-tight">
          당신의 비전을 <br/>
          <span className="text-outline">함께 실현합니다.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Contact Form Section */}
        <div className="lg:col-span-7">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-xs font-semibold text-secondary tracking-widest mb-2 uppercase">NAME</label>
                <input
                  className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-stone-400"
                  placeholder="성함을 입력해 주세요"
                  type="text"
                />
              </div>
              {/* Email Input */}
              <div className="relative">
                <label className="block text-xs font-semibold text-secondary tracking-widest mb-2 uppercase">EMAIL</label>
                <input
                  className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-stone-400"
                  placeholder="이메일 주소를 입력해 주세요"
                  type="email"
                />
              </div>
            </div>

            {/* Project Type Multi-select Buttons */}
            <div>
              <label className="block text-xs font-semibold text-secondary tracking-widest mb-6 uppercase">PROJECT TYPE</label>
              <div className="flex flex-wrap gap-3">
                {['Branding', 'Web Design', 'Interior', 'Photography', 'Consulting'].map((type, i) => (
                  <button
                    key={type}
                    className={`px-6 py-3 rounded-full border text-sm transition-all cursor-pointer ${
                      i === 1
                      ? 'bg-secondary text-on-secondary border-secondary'
                      : 'border-outline-variant/30 hover:border-secondary hover:text-secondary'
                    }`}
                    type="button"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Message TextArea */}
            <div>
              <label className="block text-xs font-semibold text-secondary tracking-widest mb-2 uppercase">MESSAGE</label>
              <textarea
                className="w-full bg-surface-container-low border-0 border-b-2 border-surface-container-highest focus:ring-0 focus:border-secondary transition-all py-4 px-0 placeholder:text-stone-400 resize-none"
                placeholder="프로젝트에 대해 간략히 설명해 주세요"
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="group flex items-center gap-4 py-4 px-10 bg-on-background text-surface font-medium hover:bg-secondary transition-all duration-300 cursor-pointer">
              문의 보내기
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Sidebar / Details Section */}
        <div className="lg:col-span-5 space-y-16">
          {/* Location Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-secondary tracking-[0.3em] uppercase">Office Location</h3>
            <div className="aspect-video bg-surface-container-low rounded-xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover grayscale opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-MUc6_a67UhI4wbFo5ouptpq4HLn6eDI8c3BoK_F326vt1h5upROn1VnFIgXqpLWkfbRSBfuxG5Gf7kWFOMt5FOlHR3ZIDCgKN42k99WT3twLjqKigNDrna4VaFoPUmRMeEAxi2B00i3t9ceM85ASsWDouof2d5GoWcWz3uMiIe0P82VHlAqKbxL50NbbHCwq3jXm2iI12ruWxcrP6fD7SC8w21MGpy92cbXY9q-GoS8zXwr45Sk9nurRw0l4g8pCJCsStYBR9wk"
                alt="Map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-on-background text-white p-4 shadow-2xl flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="text-sm font-medium">Seoul, Gangnam-gu</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-lg font-medium">서울특별시 강남구 도산대로 123</p>
              <p className="text-stone-500 font-light mt-1">Curator Tower, 12th Floor</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-2">Email</h4>
                <p className="text-on-background hover:text-secondary transition-colors cursor-pointer">hello@thecurator.com</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-2">Phone</h4>
                <p className="text-on-background hover:text-secondary transition-colors cursor-pointer">+82 2 555 0000</p>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-stone-400 tracking-widest uppercase mb-4">Social</h4>
              <div className="flex gap-6">
                <a className="text-stone-500 hover:text-secondary transition-all" href="#">Instagram</a>
                <a className="text-stone-500 hover:text-secondary transition-all" href="#">LinkedIn</a>
                <a className="text-stone-500 hover:text-secondary transition-all" href="#">Behance</a>
              </div>
            </div>
          </div>

          {/* Highlight Card */}
          <div className="p-10 bg-secondary-container rounded-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-on-secondary-container font-bold text-xl mb-2">새로운 가능성을 엽니다</h4>
              <p className="text-on-secondary-container/70 text-sm leading-relaxed">
                우리는 단순한 디자인을 넘어 가치를 창출합니다. 24시간 이내에 담당 큐레이터가 회신 드립니다.
              </p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-on-secondary-container opacity-5 group-hover:scale-110 transition-transform">auto_awesome</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
