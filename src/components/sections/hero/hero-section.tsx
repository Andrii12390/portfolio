import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { SectionLayout } from '@/components/layout';
import { ICON_SIZES, ICON_STROKE_WIDTH, SECTIONS } from '@/constants';
import { socialLinks } from '@/data';

const name = 'Andrii Pasiura';

export const HeroSection = () => {
  return (
    <SectionLayout sectionId={SECTIONS.HERO}>
      <div className="relative flex w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute right-8 bottom-0 z-10 flex gap-4 sm:flex-col"
        >
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Icon
                  size={ICON_SIZES.LG}
                  strokeWidth={ICON_STROKE_WIDTH}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center py-8"
        >
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto w-fit"
            >
              <span className="text-gradient block w-fit text-left font-mono text-lg sm:text-xl">
                Hi, my name is,
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-fit text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
              >
                <span className="text-foreground mb-2 block">
                  {name.split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.1,
                      }}
                      className="inline-block"
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-foreground/60 block text-4xl md:text-6xl lg:text-6xl"
            >
              I shape innovative web solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-foreground/80 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl"
            >
              Frontend Developer passionate about clean code and great UI and UX.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center gap-4"
            >
              <div className="border-gradient rounded-[8px] p-[2px]">
                <Link
                  className="bg-background flex items-center justify-center gap-2 rounded-[6px] px-3 py-1.5 outline-none"
                  href={`#${SECTIONS.CONTACT}`}
                >
                  <Mail
                    size={ICON_SIZES.MD}
                    strokeWidth={ICON_STROKE_WIDTH}
                  />
                  Get In Touch
                </Link>
              </div>
              <div>
                <Link
                  href={`#${SECTIONS.PROJECTS}`}
                  className="text-foreground/90 hover:text-foreground flex items-center justify-center gap-2 px-3 py-1.5 text-lg transition-colors duration-300"
                >
                  <ExternalLink
                    size={ICON_SIZES.LG}
                    strokeWidth={ICON_STROKE_WIDTH}
                    className="size-5"
                  />
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};
