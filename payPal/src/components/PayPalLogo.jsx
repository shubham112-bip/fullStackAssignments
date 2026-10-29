const BACK_P =
  'M4.2 1H13c4.9 0 7.4 2.9 6.6 7.4-.8 4.6-4.1 7.1-8.6 7.1H8.6L7 25.5H1.4L4.2 1Z';
const FRONT_P =
  'M8.2 6.2H16c4.4 0 6.6 2.7 5.8 6.8-.8 4.2-3.8 6.6-8 6.6h-1.9l-1.4 8.4H5.3L8.2 6.2Z';

export default function PayPalLogo({ size = 28 }) {
  return (
    <svg
      width={size * 0.85}
      height={size}
      viewBox="0 0 24 28"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="PayPal"
    >
      <defs>
        <clipPath id="pp-back-clip">
          <path d={BACK_P} />
        </clipPath>
      </defs>
      <path fill="#002991" d={BACK_P} />
      <path fill="#60CDFF" d={FRONT_P} />
      <path fill="#008CFF" d={FRONT_P} clipPath="url(#pp-back-clip)" />
    </svg>
  );
}

