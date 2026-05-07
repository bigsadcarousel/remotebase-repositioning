type IconName = 'arrow-right' | 'arrow-down-right' | 'check' | 'x';

export function Icon({
  name,
  size = 16,
  stroke = 1.5,
  ...rest
}: { name: IconName; size?: number; stroke?: number } & Omit<
  React.SVGProps<SVGSVGElement>,
  'size' | 'stroke'
>) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...rest,
  };
  switch (name) {
    case 'arrow-right':
      return (
        <svg {...props}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case 'arrow-down-right':
      return (
        <svg {...props}>
          <path d="M7 7l10 10M17 7v10H7" />
        </svg>
      );
    case 'check':
      return (
        <svg {...props}>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case 'x':
      return (
        <svg {...props}>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    default:
      return null;
  }
}
