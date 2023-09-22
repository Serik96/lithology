'use client';

import { Sidebar } from '@/components/sidebar';
import { Breadcrumbs } from '@/components/ui';
import { projectsNav, sidebarNav } from './const';
import s from './projects.module.scss';

const Projects = () => {
  return (
    <>
      <Breadcrumbs navLinks={projectsNav} />
      <div className={s.projects}>
        <Sidebar links={sidebarNav} />
      </div>
    </>
  );
};

export default Projects;
