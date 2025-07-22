'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-border/50 mt-8 border-t py-8"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-muted-foreground text-center text-sm"
      >
        © 2025 All rights reserved.
      </motion.p>
    </motion.footer>
  );
};
