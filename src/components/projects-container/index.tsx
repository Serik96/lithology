import { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/sidebar';
import { TSidebarLink } from '@/types';
import s from './projects-container.module.scss';

type TProps = PropsWithChildren<{
  sidebarLinks: TSidebarLink[];
  heading: string;
  handleSidebarAction?: (value: string) => void;
}>;

export const ProjectsContainer = ({
  sidebarLinks,
  heading,
  children,
  handleSidebarAction,
}: TProps) => {
  return (
    <div className={s.projects}>
      <Sidebar links={sidebarLinks} onClick={handleSidebarAction} />
      <div className={s.wrapper}>
        <h1 className={s.heading}>{heading}</h1>
        {children}
      </div>
    </div>
  );
};
