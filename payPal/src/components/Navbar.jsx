import PayPalLogo from './PayPalLogo.jsx';

const NAV_ITEMS = ['Personal', 'Business', 'Partners', 'Useful Info'];

function Chevron() {
  return (
    <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <a href="#" className="navbar__logo" aria-label="PayPal home">
            <PayPalLogo size={30} />
          </a>

          <nav className="navbar__menu">
            {NAV_ITEMS.map((label) => (
              <a href="#" className="navbar__link" key={label}>
                {label}
                <Chevron />
              </a>
            ))}
          </nav>
        </div>

        <div className="navbar__actions">
          <a href="#" className="btn btn--secondary">Log In</a>
          <a href="#" className="btn btn--primary">Sign Up</a>
        </div>
      </div>
    </header>
  );
}
