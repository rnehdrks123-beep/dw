import { motion } from 'motion/react';
import { Search, MapPin, Share2, Youtube, Layout, Target, TrendingUp, Globe } from 'lucide-react';

const services = [
  {
    title: 'SEO 최적화',
    description: '검색 엔진 결과 상단 노출로 지속 가능한 트래픽과 신뢰도를 확보합니다.',
    icon: Search,
    color: 'text-blue-400',
    tags: ['구글/네이버 SEO', '테크니컬 SEO', '콘텐츠 전략']
  },
  {
    title: '네이버 플레이스',
    description: '지역 기반 비즈니스를 위한 최적의 노출 전략으로 오프라인 방문을 극대화합니다.',
    icon: MapPin,
    color: 'text-brand-gold',
    tags: ['순위 최적화', '리뷰 관리', '예약 연동']
  },
  {
    title: '바이럴 마케팅',
    description: '블로그, 커뮤니티, 카페 등 자연스러운 확산으로 브랜드 인지도를 높입니다.',
    icon: Share2,
    color: 'text-purple-400',
    tags: ['블로그 체험단', '카페 침투', '언론 홍보']
  },
  {
    title: '인스타 릴스 / 유튜브',
    description: '최신 트렌드에 맞는 숏폼 영상 기획과 제작으로 강력한 각인 효과를 선사합니다.',
    icon: Youtube,
    color: 'text-red-400',
    tags: ['숏폼 기획', '릴스/쇼츠 제작', '인플루언서 협업']
  },
  {
    title: '홈페이지 제작',
    description: '단순한 웹사이트를 넘어 전환이 일어나는 프리미엄 랜딩페이지를 제작합니다.',
    icon: Layout,
    color: 'text-emerald-400',
    tags: ['UX/UI 디자인', '반응형 개발', 'SEO 최적화']
  },
  {
    title: 'AEO 최적화',
    description: 'AI 검색(Gemini, ChatGPT 등) 대응 구조를 설계하여 미래 검색 시장을 선점합니다.',
    icon: Target,
    color: 'text-orange-400',
    tags: ['AI 답변 최적화', '구조화 데이터', '답변 스니펫']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-brand-gold font-mono text-xs font-bold tracking-[0.2em] mb-4 uppercase"
          >
            OUR CORE EXPERTISE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold max-w-2xl text-slate-950"
          >
            매출로 연결되는 <br />
            <span className="text-slate-400">DY만의 정밀 솔루션</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-slate-50 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] text-slate-400 font-mono group-hover:border-brand-gold/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
