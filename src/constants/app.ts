// App Configuration
export const APP_CONFIG = {
  name: 'Coduit',
  description: 'Social Platform for Programmers',
  version: '1.0.0',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
} as const;

// Navigation
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/dashboard', icon: 'HomeIcon' },
    { name: 'Videos', href: '/videos', icon: 'VideoCameraIcon' },
    { name: 'Community', href: '/community', icon: 'UserGroupIcon' },
    { name: 'Code', href: '/code', icon: 'CodeBracketIcon' },
  ],
  auth: [
    { name: 'Login', href: '/auth/login' },
    { name: 'Register', href: '/auth/register' },
    { name: 'Forgot Password', href: '/auth/forgot-password' },
  ],
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
  },
  users: {
    profile: '/api/users/profile',
    update: '/api/users/update',
    search: '/api/users/search',
  },
  posts: {
    create: '/api/posts/create',
    list: '/api/posts/list',
    detail: '/api/posts/[id]',
    update: '/api/posts/[id]',
    delete: '/api/posts/[id]',
  },
  videos: {
    upload: '/api/videos/upload',
    list: '/api/videos/list',
    detail: '/api/videos/[id]',
  },
} as const;

// Social Features
export const SOCIAL_FEATURES = {
  maxPostLength: 1000,
  maxCommentLength: 500,
  maxTagsPerPost: 10,
  maxFileSize: 10 * 1024 * 1024, // 10MB
  supportedImageFormats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  supportedVideoFormats: ['mp4', 'webm', 'avi', 'mov'],
} as const;

// User Roles
export const USER_ROLES = {
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin',
} as const;

// Post Types
export const POST_TYPES = {
  TEXT: 'text',
  CODE: 'code',
  VIDEO: 'video',
  LINK: 'link',
  POLL: 'poll',
} as const;

// Notification Types
export const NOTIFICATION_TYPES = {
  LIKE: 'like',
  COMMENT: 'comment',
  FOLLOW: 'follow',
  MENTION: 'mention',
  SYSTEM: 'system',
} as const;
