import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionLayout } from '@/components/layout';
import { ICON_SIZES, SECTIONS } from '@/constants';
import { skills } from '@/data';

export const SkillsSection = () => {
  return (
    <SectionLayout sectionId={SECTIONS.SKILLS}>
      <div className="flex w-full flex-col justify-between gap-8 overflow-hidden">
        <div className="mb-6 flex items-center gap-4">
          <div className="bg-primary h-px flex-1"></div>
          <div className="flex items-center gap-3">
            <span className="text-primary text-xl font-bold">&lt;</span>
            <h2 className="text-primary-foreground text-xl font-bold sm:text-2xl">My skills</h2>
            <span className="text-primary text-xl font-bold">/&gt;</span>
          </div>
          <div className="bg-primary h-px flex-1"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl space-y-6"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.2, duration: 0.6 }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.2 + 0.1, duration: 0.5 }}
                className="text-foregroun mb-4 text-lg font-semibold"
              >
                {skillGroup.group} <span className="text-primary">()</span>
              </motion.h3>

              <div className="flex flex-wrap items-center justify-center gap-6">
                {skillGroup.items.map(({ name, iconUrl }, itemIndex) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: groupIndex * 0.2 + 0.2 + itemIndex * 0.05,
                      duration: 0.4,
                      ease: 'easeOut',
                    }}
                    className="bg-card flex items-center justify-center gap-3 rounded-md p-3"
                  >
                    <Image
                      src={iconUrl}
                      alt={name}
                      width={ICON_SIZES.XL}
                      height={ICON_SIZES.XL}
                    />
                    <p className="text-sm font-semibold">{name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <span className="text-primary/75 text-xl font-bold">&lt;</span>
          <h2 className="text-muted-foreground text-xl font-bold sm:text-2xl">My skills</h2>
          <span className="text-primary/75 text-xl font-bold">/&gt;</span>
        </div>
      </div>
    </SectionLayout>
  );
};
