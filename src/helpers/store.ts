type TRootState = Record<string, unknown>;

/**
 * Селектор всего стейта приложения
 */
export const rootStateSelector = (state: TRootState) => state;

/**
 * Хелпер для формирования селекторов сущностей
 *
 * @example
 * type TUserState = { data: Nullable<TUser> };
 * const baseSelector = createBaseSelector<TUserState>(`entities/user`);
 * const getUser = createSelector(baseSelector, (state) => state.data) // output: TUserState['data'];
 */
export function createBaseSelector<T>(rootKey: string) {
  return (state: TRootState) => {
    if (rootKey in state) {
      return state[rootKey] as T;
    } else {
      throw new Error(`Reducer ${rootKey} is not registered`);
    }
  };
}

/**
 * Хелпер для формирования имён экшенов вида `general/trigger/initApp`
 */
export const actionNameBuilder = (domainPrefix: string) => (actionName: string) =>
  `${domainPrefix}/${actionName}`;
