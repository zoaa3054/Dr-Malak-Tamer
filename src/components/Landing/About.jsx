import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity } from 'lucide-react';
import profileImg from '../../assets/profile.png';

const About = ({ data }) => {
  const { i18n, t } = useTranslation();
  const langCode = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0].toLowerCase();
  const langKey = langCode.charAt(0).toUpperCase() + langCode.slice(1);
  const content = data[`content${langKey}`] || data.contentEn;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Visual Elements */}
          <div className="flex-1 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse" />
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl glass premium-shadow flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all"
              >
                <HeartPulse size={40} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t('common.care')}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-3xl glass premium-shadow flex flex-col items-center justify-center gap-4 mt-8 hover:border-primary/50 transition-all"
              >
                <Stethoscope size={40} className="text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t('common.expertise')}</span>
              </motion.div>
            </div>
            {/* Background Text Overlay */}
            <span className="absolute -bottom-10 -right-10 text-9xl font-black text-primary/[0.03] dark:text-white/[0.02] select-none pointer-events-none">
              DR. MALAK
            </span>
          </div>

          {/* Right Side: Content */}
          <div className="flex-[1.5] space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest"
              >
                <Activity size={16} /> {t('common.about')}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative p-8 md:p-10 rounded-[2rem] glass premium-shadow group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary rounded-l-[2rem]" />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {content}
              </p>
              <div className="pt-8 flex items-center gap-4 border-t border-primary/10 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <img src={profileImg} alt={t('common.doctor_name')} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-xl" style={{ fontFamily: "'Dancing Script', cursive" }}>{t('common.doctor_name')}</h4>
                  <p className="text-sm text-muted-foreground">{t('common.physiotherapist')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
