import { motion } from 'framer-motion';
import { Download, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { MobileNav } from '@/components/layout';
import { ICON_SIZES, ICON_STROKE_WIDTH } from '@/constants';
import { navItems } from '@/data';
import { useActiveSection } from '@/hooks';
import { cn } from '@/lib/utils';

export const Header = () => {
  const activeSection = useActiveSection(navItems.map(item => item.id));
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu(true);

  const handleCloseMenu = () => setIsOpenMenu(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-header sticky top-0 z-50 flex items-center backdrop-blur-2xl"
      >
        <div className="container mx-auto my-auto flex items-center justify-between p-6">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gradient text-2xl font-bold"
          >
            Andrii Pasiura
          </motion.span>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:block"
          >
            <ul>
              {navItems.map(({ href, label, id }, index) => {
                return (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                    className="group text-foreground/90 mr-6 inline-block last:mr-0"
                  >
                    <Link
                      className={cn(
                        'relative flex flex-col text-lg font-medium tracking-wide transition-colors duration-300',
                        activeSection === id
                          ? 'text-foreground'
                          : 'text-foreground/90 hover:text-foreground',
                      )}
                      href={href}
                    >
                      <span>{label.toUpperCase()}</span>
                      <div
                        className={cn(
                          'border-gradient h-0.5 transition-all duration-300 ease-in-out',
                          activeSection === id ? 'w-full' : 'w-0 group-hover:w-full',
                        )}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="hidden md:block"
          >
            <div className="border-gradient rounded-[8px] p-[2px]">
              <Link
                className="bg-background flex w-32 items-center justify-center gap-2 rounded-[6px] p-1.5 text-lg outline-none"
                href="/CV.pdf"
                target="_blank"
              >
                <span>Resume</span>
                <Download
                  size={ICON_SIZES.MD}
                  strokeWidth={ICON_STROKE_WIDTH}
                />
              </Link>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            onClick={handleOpenMenu}
            className="text-foreground flex size-10 items-center justify-center transition-colors md:hidden"
          >
            <Menu
              size={ICON_SIZES.LG}
              strokeWidth={ICON_STROKE_WIDTH}
            />
          </motion.button>
        </div>
      </motion.header>

      <MobileNav
        isOpen={isOpenMenu}
        onClose={handleCloseMenu}
        activeSection={activeSection}
      />
    </>
  );
};
