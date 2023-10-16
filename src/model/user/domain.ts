import { routes } from '@/const';

type TProps = {
  userId: number;
};

export function getUserHref({ userId }: TProps): string {
  return `${routes.project.profile.main}/${userId}`;
}
