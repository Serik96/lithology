import { DataTable } from '@/components/data-table';
import { Sidebar } from '@/components/sidebar';
import { TSidebarLink } from '@/types';
import { TFolder } from '@/types/project';
import s from './projects-container.module.scss';

type TProps = {
  sidebarLinks: TSidebarLink[];
  heading: string;
  tableData: TFolder[];
};

export const ProjectsContainer = ({ sidebarLinks, heading, tableData }: TProps) => {
  return (
    <div className={s.projects}>
      <Sidebar links={sidebarLinks} />
      <div className={s.wrapper}>
        <h1 className={s.heading}>{heading}</h1>
        <DataTable data={tableData} />
      </div>
    </div>
  );
};
