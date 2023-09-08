import React, { SVGProps } from 'react';

const HomeIcon: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg {...props} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2 22H22'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2.94922 22L2.99922 9.96999C2.99922 9.35999 3.28922 8.78004 3.76922 8.40004L10.7692 2.95003C11.4892 2.39003 12.4992 2.39003 13.2292 2.95003L20.2292 8.39003C20.7192 8.77003 20.9992 9.34999 20.9992 9.96999V22'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linejoin='round'
      />
      <path
        d='M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-miterlimit='10'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default HomeIcon;
