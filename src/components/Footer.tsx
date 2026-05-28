import { Instagram, Youtube, MessageCircleCode as MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="text-3xl font-display font-black tracking-tighter text-slate-900 mb-6 block italic">
              <span className="bg-slate-950 text-white px-2 py-0.5 rounded-lg mr-1">D</span>
              <span className="text-brand-gold">Y</span>
            </span>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              DY는 데이터 기반의 정밀 마케팅과 
              압도적인 기술력으로 브랜드의 본질적 성장을 이끕니다.
              우리는 단순한 대행사가 아닌 당신의 성공 파트너입니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-950 font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="tel:1588-0000" className="hover:text-brand-gold transition-colors">T. 1588-0000</a></li>
              <li>E. hello@dy-marketing.com</li>
              <li>Kakao. @DY_OFFICIAL</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-950 font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="text-[10px] text-slate-400 font-mono space-y-1 text-center md:text-left">
            <p>사업자등록번호: 000-00-00000 | 대표: 구동건</p>
            <p>주소: 인천광역시 남동구 만수동46 312동 104호 | DY 마케팅 연구소</p>
            <p>© 2026 DY Inc. All Rights Reserved.</p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-mono text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-900 transition-colors underline underline-offset-4">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
