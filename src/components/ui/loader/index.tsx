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
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="60"
          y1="59"
          x2="16"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE5934" />
          <stop offset="1" stopColor="#DE5934" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
