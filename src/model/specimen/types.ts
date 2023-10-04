import { TSpecimen } from '@/types';

export type TSpecimenState = {
  items: TSpecimen[];
  pending: boolean;
};

export type TSpecimenLoadAction = {
  projectId?: number;
  wellId?: number;
};

export type TSpecimenLoadResponse = {
  items: TSpecimen[];
};
