import { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/sidebar';
import { TSidebarLink } from '@/types';
import s from './projects-container.module.scss';

type TProps = PropsWithChildren<{
  sidebarLinks: TSidebarLink[];
  description?: string;
  heading: string;
  handleSidebarAction?: (value: string) => void;
}>;

export const ProjectsContainer = ({
  children,
  sidebarLinks,
  description,
  heading,
  handleSidebarAction,
}: TProps) => {
  return (
    <div className={s.projects}>
      <Sidebar links={sidebarLinks} onClick={handleSidebarAction} />
      <div className={s.wrapper}>
        <h1 className={s.heading}>{heading}</h1>
        {description && <p className={s.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
};
