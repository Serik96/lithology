import { ECardType } from '@/enums';
import { TProject } from '@/types/project';
import s from './projects-list.module.scss';
import { TableCard } from './table-card';

type TProps = {
  projects: TProject[];
  type: ECardType;
  foldersSlug: string;
};

export const ProjectsList = ({ projects, type, foldersSlug }: TProps) => {
  return (
    <div className={s.list}>
      {projects.map(p => (
        <TableCard foldersSlug={foldersSlug} key={p.slug} data={p} type={type} />
      ))}
    </div>
  );
};
