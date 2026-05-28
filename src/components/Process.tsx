import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Brand Analysis',
    desc: '현재 브랜드의 위치와 경쟁사, 타겟 오디언스를 정밀하게 분석합니다.'
  },
  {
    num: '02',
    title: 'Strategy Design',
    desc: '분석 데이터를 바탕으로 최적의 키워드와 채널별 믹스 전략을 수립합니다.'
  },
  {
    num: '03',
    title: 'Content Creation',
    desc: '전환율을 높이는 후킹 포인트와 매력적인 비주얼 콘텐츠를 제작합니다.'
  },
  {
    num: '04',
    title: 'Optimized Operation',
    desc: '데일리 모니터링과 실시간 최적화로 광고 효율을 극대화합니다.'
  },
  {
    num: '05',
    title: 'Data Report',
    desc: '투명한 데이터 성과 측정과 향후 성장을 위한 인사이트를 제공합니다.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-mono text-xs font-bold tracking-[0.2em] mb-4 uppercase"
          >
            OUR WORKFLOW
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-950"
          >
            성공으로 향하는 정교한 여정
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-0 relative">
          {/* Connector Line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-slate-200 hidden md:block" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative px-6 py-10 md:py-0 text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-8 relative z-10 group-hover:border-brand-gold shadow-sm transition-colors">
                <span className="text-3xl font-display font-bold text-slate-900 group-hover:text-brand-gold">
                  {step.num}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
