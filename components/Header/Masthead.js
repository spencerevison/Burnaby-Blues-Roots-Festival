/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import Link from 'next/link'

export default function Masthead({ className, onMenuStateChange }) {
  return (
    <Link href="/" passHref>
      <a className={className} onClick={() => onMenuStateChange(false)}>
        <img src="/static/img/logo-landscape.svg" alt="" />
      </a>
    </Link>
  )
}
