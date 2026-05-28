import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState({
    name: '',
    contact: '',
    projectType: 'SEO 최적화',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', projectType: 'SEO 최적화', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <CheckCircle2 size={80} className="text-brand-gold mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-4 text-slate-950">접수 완료!</h2>
            <p className="text-slate-500 mb-8">성공적으로 문의가 접수되었습니다. 24시간 이내로 담당자가 연락드리겠습니다.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-8 py-3 bg-slate-950 text-white font-bold rounded-xl"
            >
              다시 문의하기
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold font-mono text-xs font-bold tracking-[0.2em] mb-4 uppercase"
            >
              GET IN TOUCH
            </motion.p>
            <h2 className="text-5xl font-bold mb-8 text-slate-950">
              지금 당신의 브랜드를 <br />
              <span className="text-gradient">확장할 시간입니다</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              성공적인 파트너십의 시작은 정교한 대화에서 시작됩니다. <br />
              현재 고민중인 부분이나 목표를 들려주세요.
            </p>

            <div className="space-y-6">
              {[
                { label: 'EMAIL', value: 'hello@dymonth.com' },
                { label: 'PHONE', value: '1588-0000' },
                { label: 'OFFICE', value: '인천광역시 남동구 만수동46 312동 104호' }
              ].map(info => (
                <div key={info.label}>
                  <p className="text-[10px] text-slate-400 font-mono tracking-widest">{info.label}</p>
                  <p className="text-lg font-medium text-slate-800">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-10 rounded-3xl bg-white border border-slate-100 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">성함 / 업체명</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="홍길동 / DY"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">연락처 / 이메일</label>
                <input 
                  required
                  type="text" 
                  value={formData.contact}
                  onChange={e => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="010-0000-0000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">상담 희망 서비스</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors appearance-none text-slate-900 cursor-pointer"
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option>SEO 최적화</option>
                    <option>네이버 플레이스</option>
                    <option>바이럴 마케팅</option>
                    <option>영상/숏폼 제작</option>
                    <option>광고 대행 (통합)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">문의 내용</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="고민중인 내용이나 궁금한 점을 적어주세요."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-brand-gold transition-colors resize-none text-slate-900"
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-slate-950 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold transition-all disabled:opacity-50"
              >
                {status === 'loading' ? '전송 중...' : '상담 신청하기'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
