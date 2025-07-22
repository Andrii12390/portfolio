import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

import { ICON_SIZES, ICON_STROKE_WIDTH } from '@/constants';
import { navItems } from '@/data';
import { cn } from '@/lib/utils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileNav = ({ isOpen, onClose, activeSection }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-background/95 fixed top-0 right-0 left-0 z-50 w-full backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-6"
            >
              <span className="text-gradient text-2xl font-bold">Andrii Pasiura</span>
              <button
                onClick={onClose}
                className="text-foreground flex size-10 items-center justify-center transition-colors md:hidden"
              >
                <X
                  size={ICON_SIZES.MD}
                  strokeWidth={ICON_STROKE_WIDTH}
                />
              </button>
            </motion.div>

            <nav className="px-6 pb-6">
              <ul className="space-y-2">
                {navItems.map(({ href, label, id }, index) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className={cn(
                        'block rounded-lg p-4 text-lg font-medium transition-colors duration-200',
                        activeSection === id
                          ? 'text-primary'
                          : 'text-foreground/80 hover:bg-card/50 hover:text-foreground',
                      )}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
