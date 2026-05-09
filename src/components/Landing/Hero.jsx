import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import profileImg from '../../assets/profile.png';
import { AuroraBackground } from '../ui/aurora-background';

const Hero = ({ data, socials }) => {
  const { i18n } = useTranslation();
  const langCode = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0].toLowerCase();
  const langKey = langCode.charAt(0).toUpperCase() + langCode.slice(1);

  const title = data[`title${langKey}`] || data.titleEn;
  const subtitle = data[`subtitle${langKey}`] || data.subtitleEn;

  return (
    <AuroraBackground>
      <section id="hero" className="relative w-full min-h-screen pt-40 md:pt-32 pb-0 overflow-hidden flex flex-col justify-start md:justify-end">
        <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center md:items-end gap-12">
          <div className="flex-1 space-y-6 text-center md:text-start pb-20 md:pb-32 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:to-accent">
                {title}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <SocialLink href={socials.instagram} icon={<Instagram />} />
              <SocialLink href={socials.facebook} icon={<Facebook />} />
              <SocialLink href={socials.linkedin} icon={<Linkedin />} />
              <SocialLink href={`https://wa.me/${socials.whatsapp}`} icon={<MessageCircle />} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative w-full h-full flex items-end justify-center md:justify-end overflow-visible"
          >
            <div className="relative w-full max-w-[600px] flex items-end justify-center md:translate-x-12 rtl:md:-translate-x-12">
              {/* Professional Multi-layered Lighting */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-full blur-[100px] -z-10 animate-pulse duration-[4s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-white/40 dark:bg-primary/5 rounded-full blur-[120px] -z-10" />

              {/* Subtle Glassmorphic Ring */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square border-[2px] border-primary/10 rounded-full -z-10 scale-95 opacity-50" />
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] aspect-square border-[1px] border-accent/10 rounded-full -z-10 scale-110 opacity-30" />

              <img
                src={profileImg}
                alt="Dr. Malak Tamer"
                className="relative z-10 w-full h-auto max-h-[450px] md:max-h-[850px] object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:drop-shadow-[0_40px_100px_rgba(15,23,42,0.15)] dark:drop-shadow-[0_40px_80px_rgba(255,255,255,0.03)] transition-all duration-700 hover:scale-[1.01]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
};

const SocialLink = ({ href, icon }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all premium-shadow group dark:text-white"
    >
      {React.cloneElement(icon, { size: 20, className: "group-hover:scale-110 transition-transform" })}
    </a>
  );
};

export default Hero;
