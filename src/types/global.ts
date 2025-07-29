// Global Type Definitions for Anime History Website
// Comprehensive type system for 2025 modern web application

import { ReactNode, HTMLAttributes } from 'react';

// ===== CORE UTILITY TYPES =====

export type ID = string | number;

export type Timestamp = number;

export type DateString = string; // ISO 8601 format

export type URL = string;

export type HexColor = `#${string}`;

export type Percentage = `${number}%`;

// ===== RESPONSIVE & LAYOUT TYPES =====

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

export type ViewportSize = {
  width: number;
  height: number;
  breakpoint: Breakpoint;
};

export type Position = {
  x: number;
  y: number;
};

export type Dimensions = {
  width: number;
  height: number;
};

export type BoundingBox = Position & Dimensions;

// ===== ANIMATION & INTERACTION TYPES =====

export type AnimationState = 'idle' | 'running' | 'paused' | 'finished';

export type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';

export type EasingFunction = 
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out' 
  | 'ease-in-out'
  | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;

export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: EasingFunction;
  direction?: AnimationDirection;
  iterations?: number | 'infinite';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
}

export interface TransitionConfig {
  property: string;
  duration: number;
  easing?: EasingFunction;
  delay?: number;
}

export type ScrollDirection = 'up' | 'down';

export interface ScrollProgress {
  progress: number; // 0-1
  direction: ScrollDirection;
  isScrolling: boolean;
  velocity: number;
}

// ===== UI COMPONENT TYPES =====

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ComponentVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'ghost' 
  | 'outline' 
  | 'destructive';

export type ComponentState = 
  | 'default'
  | 'hover'
  | 'active'
  | 'disabled'
  | 'loading'
  | 'error'
  | 'success';

export interface BaseComponentProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}

export interface InteractiveComponentProps extends BaseComponentProps {
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// ===== IMAGE & MEDIA TYPES =====

export type ImageFormat = 'webp' | 'jpg' | 'png' | 'svg' | 'gif';

export interface ImageSource {
  src: URL;
  alt: string;
  width?: number;
  height?: number;
  format?: ImageFormat;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export interface ResponsiveImageSource extends ImageSource {
  srcSet?: string;
  sizes?: string;
  breakpoints?: Partial<Record<Breakpoint, ImageSource>>;
}

export type VideoFormat = 'mp4' | 'webm' | 'ogg';

export interface VideoSource {
  src: URL;
  format: VideoFormat;
  quality?: '720p' | '1080p' | '4k';
}

export interface MediaAsset {
  id: ID;
  type: 'image' | 'video' | 'audio';
  sources: ImageSource[] | VideoSource[];
  metadata?: {
    title?: string;
    description?: string;
    credits?: string;
    copyright?: string;
    dateCreated?: DateString;
  };
}

// ===== ERROR HANDLING TYPES =====

export type ErrorLevel = 'info' | 'warning' | 'error' | 'critical';

export interface AppError {
  id: ID;
  message: string;
  level: ErrorLevel;
  code?: string;
  timestamp: Timestamp;
  context?: Record<string, unknown>;
  stack?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T = unknown> {
  status: LoadingState;
  data?: T;
  error?: AppError;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

// ===== THEME & STYLING TYPES =====

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface ColorPalette {
  primary: HexColor;
  secondary: HexColor;
  accent: HexColor;
  background: HexColor;
  surface: HexColor;
  text: HexColor;
  textSecondary: HexColor;
  border: HexColor;
  success: HexColor;
  warning: HexColor;
  error: HexColor;
}

export interface Typography {
  fontFamily: string;
  fontSize: string;
  fontWeight: string | number;
  lineHeight: string | number;
  letterSpacing?: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  colors: ColorPalette;
  typography: {
    heading: Typography;
    body: Typography;
    caption: Typography;
    mono: Typography;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  transitions: Record<string, TransitionConfig>;
}

// ===== NAVIGATION & ROUTING TYPES =====

export interface NavigationItem {
  id: ID;
  label: string;
  href?: string;
  icon?: ReactNode;
  badge?: string | number;
  children?: NavigationItem[];
  disabled?: boolean;
  external?: boolean;
}

export type RouteParams = Record<string, string | string[]>;

export interface RouteInfo {
  pathname: string;
  params: RouteParams;
  query: Record<string, string | string[]>;
  hash?: string;
}

// ===== DATA FETCHING TYPES =====

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

export interface SortConfig {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterConfig {
  field: string;
  operator: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'in';
  value: unknown;
}

export interface SearchParams {
  query?: string;
  filters?: FilterConfig[];
  sort?: SortConfig;
  pagination?: Pick<PaginationInfo, 'page' | 'limit'>;
}

// ===== FORM & VALIDATION TYPES =====

export type FieldType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url'
  | 'search'
  | 'textarea'
  | 'select'
  | 'multiselect'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'datetime'
  | 'file'
  | 'range';

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: unknown;
  message: string;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue?: unknown;
  validation?: ValidationRule[];
  options?: Array<{ label: string; value: unknown }>;
  disabled?: boolean;
  required?: boolean;
}

export interface FormState {
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
}

// ===== CHART & DATA VISUALIZATION TYPES =====

export interface ChartDataPoint {
  x: number | string | Date;
  y: number;
  label?: string;
  color?: HexColor;
  metadata?: Record<string, unknown>;
}

export type ChartType = 
  | 'line' 
  | 'bar' 
  | 'area' 
  | 'pie' 
  | 'donut' 
  | 'scatter' 
  | 'radar'
  | 'timeline';

export interface ChartConfig {
  type: ChartType;
  data: ChartDataPoint[];
  width?: number;
  height?: number;
  responsive?: boolean;
  animation?: AnimationConfig;
  theme?: 'light' | 'dark';
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
}

// ===== PERFORMANCE & ANALYTICS TYPES =====

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
  memoryUsage?: number;
  bundleSize?: number;
}

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: Timestamp;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, unknown>;
}

// ===== ACCESSIBILITY TYPES =====

export type AriaRole = 
  | 'button'
  | 'link'
  | 'heading'
  | 'banner'
  | 'navigation'
  | 'main'
  | 'article'
  | 'section'
  | 'complementary'
  | 'contentinfo'
  | 'dialog'
  | 'alert'
  | 'status'
  | 'progressbar'
  | 'tab'
  | 'tabpanel'
  | 'tablist';

export interface AccessibilityProps {
  role?: AriaRole;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-hidden'?: boolean;
  'aria-live'?: 'off' | 'polite' | 'assertive';
  'aria-current'?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
  tabIndex?: number;
}

// ===== UTILITY & HELPER TYPES =====

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

export type Nullable<T> = T | null;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequireOnly<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type ValueOf<T> = T[keyof T];

export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// ===== ENVIRONMENT & CONFIGURATION TYPES =====

export type Environment = 'development' | 'staging' | 'production';

export interface AppConfig {
  env: Environment;
  version: string;
  apiBaseUrl: URL;
  cdnBaseUrl?: URL;
  features: Record<string, boolean>;
  analytics?: {
    enabled: boolean;
    trackingId?: string;
  };
  seo?: {
    defaultTitle: string;
    defaultDescription: string;
    defaultImage: URL;
    siteName: string;
    siteUrl: URL;
  };
}

// ===== COMPONENT COMPOSITION TYPES =====

export type ComponentWithChildren<T = {}> = T & {
  children: ReactNode;
};

export type ComponentWithOptionalChildren<T = {}> = T & {
  children?: ReactNode;
};

export type PolymorphicComponent<T extends keyof HTMLAttributes<HTMLElement>> = {
  as?: T;
} & HTMLAttributes<HTMLElement>;

// Export commonly used React types
export type {
  ReactNode,
  ComponentProps,
  HTMLAttributes,
  CSSProperties,
} from 'react';