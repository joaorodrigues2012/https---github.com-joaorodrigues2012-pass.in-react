import iconHeader from '../assets/icon-header.svg';
import { NavLink } from './nav-link';

export function Header(){
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={iconHeader} alt="Header" />

      <nav className="flex items-center gap-5">
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/attendees">Attendees</NavLink>
      </nav>
    </div>
  )
}