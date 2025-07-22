import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ICON_SIZES, ICON_STROKE_WIDTH } from '@/constants';
import { cn } from '@/lib/utils';

interface Props {
  project: {
    title: string;
    description: string;
    previewImage: string;
    demoUrl?: string;
    codeUrl: string;
    stack: string[];
  };
  index: number;
}

export const ProjectCard = ({ project, index }: Props) => {
  return (
    <div
      key={project.title}
      className={cn('flex flex-col justify-center gap-12 lg:flex-row lg:items-center', {
        'lg:flex-row-reverse': index % 2 === 1,
      })}
    >
      <div className="order-2 flex-1 space-y-6 lg:order-none">
        <div className="bg-card relative overflow-hidden border shadow-lg transition-all duration-300 hover:shadow-xl">
          <Image
            src={project.previewImage}
            alt={project.title}
            width={600}
            height={500}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <Button
              asChild
              variant="outline"
              className="border-primary/30 text-primary-foreground hover:bg-primary/10"
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink
                  size={ICON_SIZES.SM}
                  strokeWidth={ICON_STROKE_WIDTH}
                />
                Live Demo
              </Link>
            </Button>
          )}
          <Button
            asChild
            variant="outline"
            className="border-primary/30 text-primary-foreground hover:bg-primary/10"
          >
            <Link
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github
                size={ICON_SIZES.SM}
                strokeWidth={ICON_STROKE_WIDTH}
              />
              Source Code
            </Link>
          </Button>
        </div>
      </div>

      <div className="order-1 flex-1 space-y-6 lg:order-none">
        <div className="text-muted-foreground font-mono text-5xl font-bold">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div>
          <h3 className="text-primary-foreground mb-3 text-2xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
        </div>

        <div className="space-y-3">
          <h4 className="text-primary-foreground/80 text-sm font-medium tracking-wide uppercase">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
