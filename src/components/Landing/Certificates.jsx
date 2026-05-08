import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Meteors } from '../ui/meteors';


const Certificates = ({ items }) => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const sortedItems = [...items].sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return yearB - yearA;
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <Award className="text-primary" /> {t('common.certificates')}
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {sortedItems.map((cert) => (
          <motion.div
            key={cert.id}
            variants={item}
            className="relative p-6 glass premium-shadow rounded-2xl hover:border-primary/50 transition-all group overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-primary/70 text-sm font-medium">{cert.year}</p>
            </div>
            <Meteors number={15} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;
