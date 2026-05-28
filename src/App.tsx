/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import Stats from '@/src/components/Stats';
import Services from '@/src/components/Services';
import CaseStudies from '@/src/components/CaseStudies';
import Process from '@/src/components/Process';
import ContactForm from '@/src/components/ContactForm';
import Footer from '@/src/components/Footer';

 export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        
        {/* Why DY Section */}
        <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-950">
                  단순한 광고가 아닌, <br />
                  <span className="text-brand-gold">지속 가능한 시스템</span>을 만듭니다
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "데이터 중심 기획", desc: "감에 의존하지 않고 철저한 시장 분석과 데이터로 승부합니다." },
                    { title: "올인원 관리", desc: "기획부터 노출, 전환 추적까지 모든 단계를 통합 관리합니다." },
                    { title: "압도적 기술력", desc: "SEO 최적화 엔진과 AEO 대응 전략으로 미래를 준비합니다." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 group-hover:scale-150 transition-transform" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-slate-900">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-full" />
                <div className="relative p-8 glass-morphism rounded-3xl border border-slate-200">
                  <div className="space-y-4 text-slate-900">
                    <div className="h-4 w-1/2 bg-slate-100 rounded-full" />
                    <div className="h-32 w-full bg-white rounded-2xl border border-slate-100 flex items-center justify-center shadow-inner">
                      <div className="text-brand-gold font-mono text-xs font-bold">DYNAMIC_GROWTH_TRACKER_V2</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-brand-gold/5 rounded-lg border border-brand-gold/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-brand-gold animate-ping" />
                      </div>
                      <div className="h-12 bg-slate-50 rounded-lg border border-slate-100" />
                      <div className="h-12 bg-slate-50 rounded-lg border border-slate-100" />
                    </div>
                    <div className="h-4 w-3/4 bg-slate-50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseStudies />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

