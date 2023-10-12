'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { CabinetContainer } from '@/components/cabinet-container';
import { MembersList } from '@/components/members-list';
import { Breadcrumbs, TextField } from '@/components/ui';
import { tempData } from '@/const/tmp-data';
import { ESortDirection } from '@/enums';
import { cn } from '@/helpers';
import { DropIcon, SearchIcon } from '@/icons';
import { TMember } from '@/types';
import { membersBreadcrumbs, membersSideLinks, sortInitialValue } from './const';
import s from './members.module.scss';

const Members = () => {
  const t = useTranslations();
  const [filters, setFilters] = useState(sortInitialValue);
  const [members, setMembers] = useState<TMember[]>();

  const handleSidebarAction = (type?: string) => {
    console.log(type);
  };

  /* todo: тут будет функция с подключенным бэком  */
  const getMembers = () => {
    setMembers(tempData.members);
  };

  /* todo: тут будет функция с подключенным бэком  */
  useEffect(() => {
    getMembers();
  }, []);

  const handleChangeFilter = (name: string) => {
    setFilters(prevState => {
      const arr = [...prevState];
      const index = arr.findIndex(e => e.name === name);
      if (typeof index !== 'undefined') {
        arr[index] = {
          ...arr[index],
          direction:
            arr[index].direction === ESortDirection.ASC
              ? ESortDirection.DESC
              : ESortDirection.ASC,
        };
      }

      return arr;
    });
  };

  return (
    <>
      <Breadcrumbs navLinks={membersBreadcrumbs} />
      <CabinetContainer
        sidebarLinks={membersSideLinks}
        onSidebarClick={handleSidebarAction}
        heading={t('navigation.company-members.main')}
      >
        <div className={s.membersWrapper}>
          <form className={s.form}>
            <TextField Icon={SearchIcon} placeholder={t('type-to-search')} />
          </form>
          <div className={s.filters}>
            {filters.map((e, i) => (
              <div
                key={`sort_by_filter_${i}`}
                className={s.filter}
                onClick={() => handleChangeFilter(e.name)}
              >
                {t(e.label)}
                <div
                  className={cn(
                    s.filterIcon,
                    filters[i].direction === ESortDirection.DESC && s.reversed,
                  )}
                >
                  <DropIcon />
                </div>
              </div>
            ))}
          </div>
          {members && <MembersList members={members} />}
        </div>
      </CabinetContainer>
    </>
  );
};

export default Members;
