import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Link from 'next/link';

import { SectionLayout } from '@/components/layout';
import { ICON_SIZES, ICON_STROKE_WIDTH, SECTIONS } from '@/constants';

export const AboutSection = () => {
  return (
    <SectionLayout sectionId={SECTIONS.ABOUT}>
      <div className="flex w-full flex-col justify-between gap-8 overflow-hidden">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-primary text-xl font-bold">&lt;</span>
            <h2 className="text-primary-foreground text-xl font-bold sm:text-2xl">About Me</h2>
            <span className="text-primary text-xl font-bold">/&gt;</span>
          </div>
          <div className="bg-primary h-px flex-1" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-foreground/80 mb-12 space-y-6 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl"
            >
              Hey there! 👋 I&apos;m{' '}
              <span className="text-primary font-semibold">Andrii Pasiura</span>, a passionate
              student learning Frontend Development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I&apos;m currently diving deep into modern web technologies like React, Next.js, and
              TypeScript. While I&apos;m still learning, I&apos;m excited about building projects
              and gaining hands-on experience in creating beautiful, functional websites.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              When I&apos;m not studying or coding, I enjoy exploring new technologies, watching
              tutorials, and working on personal projects to improve my skills. I&apos;m eager to
              learn and grow as a developer.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-gradient mx-auto w-fit rounded-[8px] p-[2px]"
          >
            <Link
              href="/CV.pdf"
              className="bg-background flex w-48 items-center justify-center gap-2 rounded-[6px] p-2 text-lg outline-none"
              download
            >
              <span>Download CV</span>
              <Download
                className="size-6"
                strokeWidth={ICON_STROKE_WIDTH}
                size={ICON_SIZES.LG}
              />
            </Link>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-end gap-3">
          <span className="text-primary/75 text-xl font-bold">&lt;</span>
          <h2 className="text-muted-foreground text-xl font-bold sm:text-2xl">About Me</h2>
          <span className="text-primary/75 text-xl">/&gt;</span>
        </div>
      </div>
    </SectionLayout>
  );
};
