import { Navbar, Typography } from '@material-tailwind/react';
import type { ReactNode } from 'react';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <Navbar
        className="mx-auto max-w-screen-xl rounded-none bg-wr-pale-blue px-4 py-3 dark:bg-wr-oxford-blue"
        variant="gradient"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="ml-2 mr-4 cursor-pointer py-1.5"
          >
            <h1 className="text-xl font-medium text-wr-oxford-blue dark:text-wr-pale-blue">
              Weather Report
            </h1>
          </Typography>
          {children}
        </div>
      </Navbar>
    </header>
  );
}
