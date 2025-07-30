import { motion } from 'framer-motion';

import { SectionDivider } from '@/components/common';
import { SectionLayout } from '@/components/layout';
import { ContactForm, ContactLinks } from '@/components/sections/contact';
import { SECTIONS } from '@/constants';
import { contactLinks } from '@/data';

export const ContactSection = () => {
  return (
    <SectionLayout sectionId={SECTIONS.CONTACT}>
      <div className="flex w-full flex-col justify-between gap-8 overflow-hidden">
        <SectionDivider title="Contact Me" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-primary-foreground text-3xl font-bold">Let&apos;s Connect!</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. Whether you
                want to collaborate, have a question, or just say hello, feel free to reach out!
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-primary-foreground text-xl font-semibold"
              >
                Find me on:
              </motion.h4>
              <ContactLinks contactLinks={contactLinks} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="pb-12"
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};
