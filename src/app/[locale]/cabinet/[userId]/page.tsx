'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/data-table';
import { FoldersList } from '@/components/folders-list';
import { Breadcrumbs } from '@/components/ui';
import UserInformation from '@/components/user-information';
import { tempData } from '@/const/tmp-data';
import { ECardType } from '@/enums';
import { TFolder, TUser } from '@/types';
import { userBreadcrumbs } from './const';
import s from './member.module.scss';

const Member = () => {
  const t = useTranslations();

  const [rowType, setRowType] = useState(ECardType.ROW);
  const [user, setUser] = useState<TUser>();
  const [folders, setFolders] = useState<TFolder[]>();

  /* todo: тут будет функция с подключенным бэком  */
  const getFolders = () => {
    setFolders(tempData.folders);
  };

  /* todo: тут будет функция с подключенным бэком  */
  const getUser = () => {
    setUser(tempData.user);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getUser();
    getFolders();
  }, []);

  return (
    <>
      <Breadcrumbs navLinks={userBreadcrumbs} />
      <div className={s.userContainer}>
        {user && <UserInformation user={user} />}
        <DataTable showTypeToggle rowType={rowType} setRowType={setRowType}>
          {folders && folders.length > 0 ? (
            <FoldersList folders={folders} type={rowType} />
          ) : (
            // @todo: переделать отображение, когда будет готов дизайн
            <div className={s.emptyFolders}>{t('user.no-folders')}</div>
          )}
        </DataTable>
      </div>
    </>
  );
};

export default Member;
