import { motion } from 'motion/react';

const stats = [
  { id: '1', label: '누적 광고 운영 수', value: '120', suffix: '+' },
  { id: '2', label: '누적 문의 건수', value: '38,000', suffix: '+' },
  { id: '3', label: '평균 매출 대비 ROAS', value: '820', suffix: '%' },
  { id: '4', label: '파트너사 재계약률', value: '91', suffix: '%' },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 border-y border-slate-100 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-mono font-bold mb-3 tracking-tight text-slate-900">
                {stat.value}<span className="text-brand-gold">{stat.suffix}</span>
              </div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
