import { useState } from 'react';

export default function Hero() {
  const [mode, setMode] = useState('Business');

  return (
    <section className="hero">
      <div className="toggle" role="tablist" aria-label="Account type">
        {['Personal', 'Business'].map((option) => (
          <button
            key={option}
            role="tab"
            aria-selected={mode === option}
            className={`toggle__option ${mode === option ? 'toggle__option--active' : ''}`}
            onClick={() => setMode(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <h1 className="hero__title">PayPal Open</h1>
      <h2 className="hero__subtitle">One platform for your business needs</h2>
      <p className="hero__text">
        PayPal Open unifies your PayPal business solutions to help you get paid, get growing,
        and get ahead.
      </p>

      <div className="hero__actions">
        <a href="#" className="btn btn--primary">Sign Up</a>
        <a href="#" className="btn btn--secondary">Contact Sales</a>
      </div>
    </section>
  );
}

