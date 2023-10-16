import { routes } from '@/const';

type TProps = {
  projectId: number;
};

export function getProjectHref({ projectId }: TProps): string {
  return `${routes.project.allProjects.main}/${projectId}`;
}
