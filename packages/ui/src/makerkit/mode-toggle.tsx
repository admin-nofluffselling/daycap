'use client';

import { useMemo } from 'react';

import { Computer, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '../shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../shadcn/dropdown-menu';
import { cn } from '../utils';
import { Trans } from './trans';

const MODES = ['light', 'dark', 'system'];

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const Items = useMemo(() => {
    return MODES.map((mode) => {
      const isSelected = theme === mode;

      return (
        <DropdownMenuItem
          className={cn('space-x-2', {
            'bg-muted': isSelected,
          })}
          key={mode}
          onClick={() => {
            setTheme(mode);
            setCookeTheme(mode);
          }}
        >
          <Icon theme={mode} />

          <span>
            <Trans i18nKey={`common:${mode}Theme`} />
          </span>
        </DropdownMenuItem>
      );
    });
  }, [setTheme, theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">{Items}</DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SubMenuModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const MenuItems = useMemo(
    () =>
      MODES.map((mode) => {
        const isSelected = theme === mode;

        return (
          <DropdownMenuItem
            className={cn('flex items-center space-x-2', {
              'bg-muted': isSelected,
            })}
            key={mode}
            onClick={() => {
              setTheme(mode);
              setCookeTheme(mode);
            }}
          >
            <Icon theme={mode} />

            <span>
              <Trans i18nKey={`common:${mode}Theme`} />
            </span>
          </DropdownMenuItem>
        );
      }),
    [setTheme, theme],
  );

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <span className={'flex w-full items-center space-x-2'}>
          <Icon theme={resolvedTheme} />

          <span>
            <Trans i18nKey={'common:theme'} />
          </span>
        </span>
      </DropdownMenuSubTrigger>

      <DropdownMenuSubContent>{MenuItems}</DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}

function setCookeTheme(theme: string) {
  document.cookie = `theme=${theme}; path=/; max-age=31536000`;
}

function Icon({ theme }: { theme: string | undefined }) {
  switch (theme) {
    case 'light':
      return <Sun className="h-4" />;
    case 'dark':
      return <Moon className="h-4" />;
    case 'system':
      return <Computer className="h-4" />;
  }
}
