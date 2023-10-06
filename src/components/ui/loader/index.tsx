import s from './loader.module.scss';

export const Loader = () => (
  <div className={s.loader}>
    <svg className={s.circular} viewBox="25 25 50 50">
      <circle
        className={s.path}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  </div>
);
