// Color Palette Constants
export const COLORS = {
  // Primary Colors
  primary: {
    electric: '#1586f5',
    neon_blue: '#2323FF',
    sapphire: '#0908c3',
    cosmic: '#0c34e9',
    midnight: '#050170',
    depth: '#01001c',
  },
  
  // Accent Colors
  accent: {
    neon_pink: '#F535AA',
    neon_purple: '#8105b6',
    lime_green: '#66FE08',
    sunflower: '#FFDA03',
    orange: '#FF5B00',
  },
  
  // Semantic Colors
  semantic: {
    success: '#66FE08',
    warning: '#FFDA03',
    error: '#FF0800',
    info: '#1586f5',
  },
  
  // Neutral Colors
  neutral: {
    dark900: '#0a0a0a',
    dark800: '#161616',
    dark700: '#454444',
    dark600: '#666666',
    dark500: '#888888',
    dark400: '#aaaaaa',
    dark300: '#cccccc',
    dark200: '#eeeeee',
    dark100: '#f5f5f5',
    white: '#FFFFFF',
  },
  
  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#D3D3D3',
    tertiary: '#A9A9A9',
    disabled: '#666666',
    inverse: '#000000',
  },
  
  // Background Colors
  background: {
    primary: '#0a0a0a',
    secondary: '#161616',
    tertiary: '#454444',
    overlay: 'rgba(0, 0, 0, 0.8)',
    modal: 'rgba(0, 0, 0, 0.9)',
  },
} as const;

// Spacing Scale
export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
} as const;

// Border Radius
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// Shadows
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
} as const;

// Transitions
export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

// Typography Scale
export const TYPOGRAPHY = {
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  fontWeights: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
} as const;
