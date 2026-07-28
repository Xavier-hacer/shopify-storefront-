const badges = [
  {
    label: "Secure Checkout",
    icon: (
      <path
        d="M6 10V7a6 6 0 1 1 12 0v3M5 10h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "30-Day Guarantee",
    icon: (
      <>
        <path
          d="M12 3l7 3v5c0 4.5-2.9 8.2-7 10-4.1-1.8-7-5.5-7-10V6l7-3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Free Shipping",
    icon: (
      <>
        <path
          d="M3 7h11v9H3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 10h4l3 3v3h-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
      </>
    ),
  },
];

export function TrustBadges() {
  return (
    <ul className="mt-6 grid grid-cols-3 gap-3">
      {badges.map((b) => (
        <li
          key={b.label}
          className="flex flex-col items-center gap-2 rounded-xl border border-line px-2 py-4 text-center"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 text-ember-soft"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            {b.icon}
          </svg>
          <span className="text-[10px] uppercase leading-tight tracking-widest text-stone">
            {b.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
