import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-white">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold mb-6">
              <Sparkles size={14} className="text-brand-gold" />
              <span>PREMIUM MARKETING SOLUTION FOR GROWTH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-slate-950">
              광고를 넘어 <br />
              <span className="text-gradient">브랜드 성장을 설계</span>합니다
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed">
              SEO, 플레이스, 광고운영, 바이럴까지. <br />
              DY는 단순 노출이 아닌 ‘매출 흐름’을 만듭니다.
              검색되는 브랜드는 결과가 다릅니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:1588-0000"
                className="group px-8 py-4 bg-slate-950 text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-brand-gold transition-all"
              >
                무료 상담받기
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#case-studies"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm"
              >
                포트폴리오 보기
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square glass-morphism rounded-3xl p-8 relative overflow-hidden group border border-slate-200">
              {/* Dashboard Simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex justify-between items-end h-48 gap-3">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "circOut" }}
                      className="flex-1 bg-gradient-to-t from-slate-200 to-brand-gold rounded-t-lg shadow-sm"
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-400 mb-1">Conversion Rate</p>
                    <p className="text-2xl font-mono font-bold text-brand-gold">+312%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-400 mb-1">Total Reach</p>
                    <p className="text-2xl font-mono font-bold text-slate-900">1.2M+</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-brand-gold animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Real-time Optimization</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider">System Active</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-brand-gold"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Float Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-5 glass-morphism rounded-2xl shadow-2xl"
            >
              <p className="text-[10px] text-gray-500 font-mono mb-1">CTR</p>
              <p className="text-xl font-bold text-brand-neon">4.8%</p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-10 p-5 glass-morphism rounded-2xl shadow-2xl"
            >
              <p className="text-[10px] text-gray-500 font-mono mb-1">ROI</p>
              <p className="text-xl font-bold text-white">821%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
