import Link from 'next/link';
import { config } from '@/config';

const Socials = () => {
  return (
    <div className="footer__social-wrapper">
      <ul className="footer__social-list">
        <li>Check our social media</li>
        {config.footer.mediaLinks.map((e, i) => (
          <li key={`footer__social-link_${e.href}_${i}`}>
            <Link href={e.href} target={'_blank'} className="footer__social-link">
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
