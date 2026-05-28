import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: '서비스', href: '#services' },
    { name: '성과', href: '#stats' },
    { name: '성공사례', href: '#case-studies' },
    { name: '프로세스', href: '#process' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="text-3xl font-display font-black tracking-tighter text-slate-900 group flex items-center">
            <span className="flex items-center justify-center bg-slate-950 text-white w-10 h-10 rounded-lg mr-2 uppercase italic">D</span>
            <span className="text-brand-gold italic">Y</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-slate-500 hover:text-slate-950 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="tel:1588-0000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2.5 bg-slate-950 text-white text-sm font-bold rounded-full hover:bg-brand-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
          >
            무료 상담신청
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-600 hover:text-brand-gold"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:1588-0000"
              className="px-5 py-3 bg-slate-950 text-white text-center font-bold rounded-xl"
            >
              무료 상담신청
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
