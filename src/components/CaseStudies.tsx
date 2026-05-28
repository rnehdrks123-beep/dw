import { motion } from 'motion/react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: '전국 단위 청소 대행 플랫폼',
    category: 'SEO + 네이버 플레이스',
    result: '월 문의량 320% 증가',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Brand Growth', 'UI/UX']
  },
  {
    id: 2,
    title: '강남 프리미엄 치과의원',
    category: 'AEO + 퍼포먼스 마케팅',
    result: '신규 예약률 180% 상승',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366a71?auto=format&fit=crop&q=80&w=800',
    tags: ['Medical', 'Lead Gen']
  },
  {
    id: 3,
    title: '라이프스타일 커머스 A사',
    category: '숏폼 + 바이럴 마케팅',
    result: '누적 조회수 250만 회 돌파',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tags: ['Viral', 'E-commerce']
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-gold font-mono text-xs font-bold tracking-[0.2em] mb-4 uppercase"
            >
              SUCCESS STORIES
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-950"
            >
              성장은 증명되어야 합니다
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-950 hover:text-white transition-all shadow-sm"
          >
            모든 사례 보기 <ExternalLink size={16} />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-slate-100 shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-brand-gold" />
                    <span className="text-brand-gold font-bold text-lg">{item.result}</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs text-brand-gold font-mono mb-2 uppercase tracking-wider">{item.category}</p>
                <h3 className="text-xl font-bold group-hover:text-brand-gold transition-colors text-slate-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
