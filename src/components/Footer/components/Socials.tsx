import Link from 'next/link'
import React from 'react'

type MediaLinkProps = {
  label: string
  href: string
}

const mediaLinks: MediaLinkProps[] = [
  {
    label: 'Linkedin',
    href: '#'
  },
  {
    label: 'YouTube',
    href: '#'
  },
  {
    label: 'Instagram',
    href: '#'
  },
  {
    label: 'Twitter',
    href: '#'
  }
]

const Socials = () => {
  return (
    <div className="footer__social-wrapper">
      <ul className="footer__social-list">
        <li>Check our social media</li>
        {mediaLinks.map(e => (
          <li key={'footer__social-link' + e.href}>
            <Link href={e.href} target={'_blank'} className="footer__social-link">
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
