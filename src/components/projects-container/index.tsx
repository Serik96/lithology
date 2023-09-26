import { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/sidebar';
import { TSidebarLink } from '@/types';
import s from './projects-container.module.scss';

type TProps = PropsWithChildren<{
  sidebarLinks: TSidebarLink[];
  heading: string;
}>;

export const ProjectsContainer = ({ sidebarLinks, heading, children }: TProps) => {
  return (
    <div className={s.projects}>
      <Sidebar links={sidebarLinks} />
      <div className={s.wrapper}>
        <h1 className={s.heading}>{heading}</h1>
        {children}
      </div>
    </div>
  );
};