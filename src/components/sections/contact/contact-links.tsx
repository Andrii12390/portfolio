import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { ICON_SIZES } from '@/constants';

interface Props {
  contactLinks: {
    href: string;
    name: string;
    iconUrl: string;
    description: string;
  }[];
}

export const ContactLinks = ({ contactLinks }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {contactLinks.map(({ href, name, iconUrl, description }, index) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
        >
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card/80 flex items-center gap-3 rounded-lg border p-4 transition-all duration-300"
          >
            <Image
              src={iconUrl}
              alt={`${name} icon`}
              width={ICON_SIZES['2XL']}
              height={ICON_SIZES['2XL']}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <p className="text-primary-foreground font-medium">{name}</p>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
