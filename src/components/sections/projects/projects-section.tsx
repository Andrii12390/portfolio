import { motion } from 'framer-motion';

import { SectionLayout } from '@/components/layout';
import { SECTIONS } from '@/constants';
import { projects } from '@/data';

import { ProjectCard } from './project-card';

export const ProjectsSection = () => {
  return (
    <SectionLayout sectionId={SECTIONS.PROJECTS}>
      <div className="flex w-full flex-col justify-between gap-8 overflow-hidden">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-primary text-xl font-bold">&lt;</span>
            <h2 className="text-primary-foreground text-2xl font-bold">My Projects</h2>
            <span className="text-primary text-xl font-bold">/&gt;</span>
          </div>
          <div className="bg-primary h-px flex-1"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-7xl space-y-12 lg:space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
                ease: 'easeOut',
              }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <span className="text-primary/75 text-xl font-bold">&lt;</span>
          <h2 className="text-muted-foreground text-2xl font-bold">My Projects</h2>
          <span className="text-primary/75 text-xl font-bold">/&gt;</span>
        </div>
      </div>
    </SectionLayout>
  );
};
