// Mock Data for Coduit Frontend Development
// This will be replaced with real API calls later
import { StaticImageData } from 'next/image';
import clogo from './images/c-.png'
import csharp from './images/c-sharp.png'
import golang from './images/Go-Logo_Blue.png'
import java from './images/java (1).png'
import javascript from './images/java-script.png'
import php from './images/PHP-logo.svg'
import python from './images/python.png'
import ruby from './images/ruby.png'
import rust from './images/rust.png'
import swift from './images/swift (1).png'
import typescript from './images/typescript.png'
import kotlin from './images/kotlin.png'











export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  website?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  skills: string[];
  followers: number;
  following: number;
  posts: number;
  videos: number;
  joinedAt: string;
  isVerified: boolean;
  role: 'user' | 'moderator' | 'admin';
}

export interface Post {
  id: string;
  authorId: string;
  author: User;
  type: 'text' | 'code' | 'video' | 'link' | 'poll';
  content: string;
  code?: {
    language: string;
    code: string;
    title?: string;
    description?: string;
  };
  video?: {
    url: string;
    thumbnail: string;
    duration: number;
    title: string;
    description: string;
  };
  link?: {
    url: string;
    title: string;
    description: string;
    thumbnail?: string;
  };
  poll?: {
    question: string;
    options: { id: string; text: string; votes: number }[];
    totalVotes: number;
    endsAt: string;
  };
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
  updatedAt: string;
  isLiked: boolean;
  isBookmarked: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  likes: number;
  replies: number;
  createdAt: string;
  isLiked: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  authorId: string;
  author: User;
  url: string;
  thumbnail: string;
  duration: number;
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  tags: string[];
  category: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  avatar: string;
  banner: string;
  members: number;
  posts: number;
  videos: number;
  category: string;
  tags: string[];
  rules: string[];
  isPrivate: boolean;
  createdAt: string;
  moderators: string[];
  isMember: boolean;
  isModerator: boolean;
}

interface NotificationData {
  postId?: string;
  postTitle?: string;
  commentId?: string;
  followerId?: string;
  followerName?: string;
  mentionId?: string;
  systemMessage?: string;
  // Add other properties as needed for different notification types
}
export interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'system';
  title: string;
  message: string;
  data: NotificationData; // Fixed: Replaced 'any' with NotificationData
  isRead: boolean;
  createdAt: string;
}
// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah_dev',
    displayName: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Full-stack developer passionate about React, TypeScript, and building amazing user experiences. Love sharing knowledge and helping others grow.',
    location: 'San Francisco, CA',
    website: 'https://sarahchen.dev',
    github: 'sarahchen',
    twitter: 'sarah_dev',
    linkedin: 'sarahchen',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'],
    followers: 1247,
    following: 89,
    posts: 156,
    videos: 23,
    joinedAt: '2023-01-15T00:00:00Z',
    isVerified: true,
    role: 'user'
  },
  {
    id: '2',
    username: 'alex_code',
    displayName: 'Alex Rodriguez',
    email: 'alex@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Backend engineer specializing in scalable systems and cloud architecture. Building the future of web development.',
    location: 'New York, NY',
    github: 'alexrodriguez',
    skills: ['Go', 'Kubernetes', 'Docker', 'PostgreSQL', 'Redis'],
    followers: 892,
    following: 156,
    posts: 89,
    videos: 12,
    joinedAt: '2023-03-22T00:00:00Z',
    isVerified: true,
    role: 'moderator'
  },
  {
    id: '3',
    username: 'emma_ai',
    displayName: 'Emma Thompson',
    email: 'emma@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'AI/ML researcher and developer. Exploring the intersection of artificial intelligence and software engineering.',
    location: 'Seattle, WA',
    website: 'https://emmathompson.ai',
    github: 'emmathompson',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Data Science'],
    followers: 2156,
    following: 234,
    posts: 203,
    videos: 45,
    joinedAt: '2022-11-08T00:00:00Z',
    isVerified: true,
    role: 'user'
  }
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: '1',
    authorId: '1',
    author: mockUsers[0],
    type: 'code',
    content: 'Just built a custom React hook for managing form state with validation. Here\'s how it works:',
    code: {
      language: 'typescript',
      code: `import { useState, useCallback } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  validationSchema?: ValidationSchema<T>;
  onSubmit: (values: T) => void | Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((name: keyof T, value: T[keyof T]) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (validationSchema) {
        const validationErrors = await validationSchema.validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
      }
      
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validationSchema, onSubmit]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  };
}`,
      title: 'Custom React Hook for Form Management',
      description: 'A reusable hook that handles form state, validation, and submission with TypeScript support.'
    },
    tags: ['React', 'TypeScript', 'Hooks', 'Forms', 'Validation'],
    likes: 89,
    comments: 23,
    shares: 12,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    isLiked: false,
    isBookmarked: false
  },
  {
    id: '2',
    authorId: '2',
    author: mockUsers[1],
    type: 'text',
    content: 'Just deployed our new microservices architecture to production! 🚀\n\nKey improvements:\n• Reduced response time by 40%\n• Better fault tolerance with circuit breakers\n• Improved monitoring and observability\n\nShoutout to the team for making this happen! What\'s your experience with microservices?',
    tags: ['Microservices', 'DevOps', 'Architecture', 'Performance'],
    likes: 156,
    comments: 34,
    shares: 28,
    createdAt: '2024-01-14T16:45:00Z',
    updatedAt: '2024-01-14T16:45:00Z',
    isLiked: true,
    isBookmarked: false
  },
  {
    id: '3',
    authorId: '3',
    author: mockUsers[2],
    type: 'video',
    content: 'New tutorial: Building a Recommendation System with Python and Scikit-learn',
    video: {
      url: 'https://example.com/videos/recommendation-system.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      duration: 1247,
      title: 'Building a Recommendation System with Python and Scikit-learn',
      description: 'Learn how to build a movie recommendation system using collaborative filtering and content-based approaches.'
    },
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Recommendation Systems', 'AI'],
    likes: 234,
    comments: 67,
    shares: 45,
    createdAt: '2024-01-13T14:20:00Z',
    updatedAt: '2024-01-13T14:20:00Z',
    isLiked: false,
    isBookmarked: true
  }
];

// Mock Communities
export const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'React Developers',
    description: 'A community for React developers to share knowledge, ask questions, and collaborate on projects.',
    avatar: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=200&fit=crop',
    members: 15420,
    posts: 8923,
    videos: 456,
    category: 'Frontend Development',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    rules: [
      'Be respectful and helpful to other members',
      'Share relevant content and code examples',
      'Ask clear, specific questions',
      'No spam or self-promotion without value'
    ],
    isPrivate: false,
    createdAt: '2023-01-10T00:00:00Z',
    moderators: ['1', '2'],
    isMember: true,
    isModerator: false
  },
  {
    id: '2',
    name: 'Python Data Science',
    description: 'Explore data science, machine learning, and AI with Python. Share projects, tutorials, and insights.',
    avatar: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=150&h=150&fit=crop',
    banner: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=200&fit=crop',
    members: 8920,
    posts: 5678,
    videos: 234,
    category: 'Data Science',
    tags: ['Python', 'Data Science', 'Machine Learning', 'AI'],
    rules: [
      'Share data science projects and insights',
      'Help others with Python and ML questions',
      'Post relevant tutorials and resources',
      'Respect data privacy and ethics'
    ],
    isPrivate: false,
    createdAt: '2023-02-15T00:00:00Z',
    moderators: ['3'],
    isMember: true,
    isModerator: false
  }
];

// Mock Videos
export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a Full-Stack App with Next.js 14 and Prisma',
    description: 'Learn how to build a complete full-stack application using Next.js 14, Prisma ORM, and PostgreSQL. We\'ll cover authentication, database design, and deployment.',
    authorId: '1',
    author: mockUsers[0],
    url: 'https://example.com/videos/nextjs-prisma-tutorial.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    duration: 2847,
    views: 12456,
    likes: 892,
    dislikes: 23,
    comments: 156,
    tags: ['Next.js', 'Prisma', 'Full-Stack', 'PostgreSQL', 'Authentication'],
    category: 'Web Development',
    isPublic: true,
    createdAt: '2024-01-10T12:00:00Z',
    updatedAt: '2024-01-10T12:00:00Z'
  },
  {
    id: '2',
    title: 'Introduction to Kubernetes for Developers',
    description: 'A beginner-friendly guide to Kubernetes. Learn the basics of container orchestration, pods, services, and deployments.',
    authorId: '2',
    author: mockUsers[1],
    url: 'https://example.com/videos/kubernetes-intro.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    duration: 1845,
    views: 8923,
    likes: 567,
    dislikes: 12,
    comments: 89,
    tags: ['Kubernetes', 'Docker', 'DevOps', 'Containers', 'Cloud Native'],
    category: 'DevOps',
    isPublic: true,
    createdAt: '2024-01-08T15:30:00Z',
    updatedAt: '2024-01-08T15:30:00Z'
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    type: 'like',
    title: 'New like on your post',
    message: 'Alex Rodriguez liked your post "Custom React Hook for Form Management"',
    data: { postId: '1', postTitle: 'Custom React Hook for Form Management' },
    isRead: false,
    createdAt: '2024-01-15T11:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    type: 'comment',
    title: 'New comment on your post',
    message: 'Emma Thompson commented on your post "Custom React Hook for Form Management"',
    data: { postId: '1', commentId: '1' },
    isRead: false,
    createdAt: '2024-01-15T11:15:00Z'
  },
  {
    id: '3',
    userId: '1',
    type: 'follow',
    title: 'New follower',
    message: 'John Doe started following you',
    data: { followerId: '4', followerName: 'John Doe' },
    isRead: true,
    createdAt: '2024-01-15T10:00:00Z'
  }
];

// Trending Topics
export const trendingTopics = [
  { name: 'React18', count: 1247 },
  { name: 'TypeScript', count: 892 },
  { name: 'NextJS', count: 756 },
  { name: 'AIProgramming', count: 654 },
  { name: 'Web3', count: 543 },
  { name: 'DevOps', count: 432 },
  { name: 'MachineLearning', count: 398 },
  { name: 'Python', count: 345 }
];

// Popular Technologies
export const popularTechnologies = [
  { name: 'React', icon: '⚛️', count: 15420 },
  { name: 'TypeScript', icon: '📘', count: 12340 },
  { name: 'Python', icon: '🐍', count: 11890 },
  { name: 'Node.js', icon: '🟢', count: 9870 },
  { name: 'Vue.js', icon: '💚', count: 7650 },
  { name: 'Angular', icon: '🔴', count: 6540 },
  { name: 'Go', icon: '🔵', count: 5430 },
  { name: 'Rust', icon: '🦀', count: 4320 }
];

// Mock Search Results
export const mockSearchResults = {
  users: mockUsers.slice(0, 3),
  posts: mockPosts.slice(0, 3),
  videos: mockVideos.slice(0, 2),
  communities: mockCommunities.slice(0, 2)
};

// Helper function to get mock data
export const getMockData = {
  users: () => mockUsers,
  posts: () => mockPosts,
  videos: () => mockVideos,
  communities: () => mockCommunities,
  notifications: () => mockNotifications,
  trendingTopics: () => trendingTopics,
  popularTechnologies: () => popularTechnologies,
  searchResults: () => mockSearchResults
};

// Programming Languages Data
export interface ProgrammingLanguage {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  icon: StaticImageData | string;
  category: 'General Purpose' | 'Web Development' | 'Mobile Development' | 'Data Science' | 'Systems Programming' | 'Scripting' | 'Functional' | 'Object-Oriented';
  paradigm: string[];
  yearCreated: number;
  creator: string;
  website: string;
  popularity: number; // 1-100
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  useCases: string[];
  pros: string[];
  cons: string[];
  frameworks: string[];
  companies: string[];
  tags: string[];
}

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: '1',
    name: 'JavaScript',
    shortName: 'JS',
    description: 'High-level, interpreted programming language for web development',
    longDescription: 'JavaScript is a versatile programming language that powers the modern web. Originally created to make web pages interactive, it has evolved into a full-stack development language used for frontend, backend, mobile apps, and even desktop applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
    icon:javascript,
    category: 'Web Development',
    paradigm: ['Multi-paradigm', 'Event-driven', 'Functional', 'Object-oriented'],
    yearCreated: 1995,
    creator: 'Brendan Eich',
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    popularity: 95,
    difficulty: 'Beginner',
    useCases: ['Web Development', 'Mobile Apps', 'Desktop Apps', 'Server-side', 'Game Development'],
    pros: ['Easy to learn', 'Huge ecosystem', 'Versatile', 'Great community support', 'Runs everywhere'],
    cons: ['Type coercion issues', 'Asynchronous complexity', 'Browser compatibility', 'Security concerns'],
    frameworks: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Next.js'],
    companies: ['Google', 'Facebook', 'Netflix', 'Uber', 'Airbnb', 'Microsoft'],
    tags: ['JavaScript', 'Web', 'Frontend', 'Backend', 'Node.js', 'ES6']
  },
  {
    id: '2',
    name: 'Python',
    shortName: 'Python',
    description: 'High-level, interpreted language known for simplicity and readability',
    longDescription: 'Python is a general-purpose programming language that emphasizes code readability and simplicity. It\'s widely used in data science, machine learning, web development, automation, and scientific computing.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop',
    icon: python,
    category: 'General Purpose',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Procedural'],
    yearCreated: 1991,
    creator: 'Guido van Rossum',
    website: 'https://www.python.org',
    popularity: 90,
    difficulty: 'Beginner',
    useCases: ['Data Science', 'Machine Learning', 'Web Development', 'Automation', 'Scientific Computing'],
    pros: ['Easy to read and write', 'Extensive libraries', 'Great for beginners', 'Cross-platform', 'Active community'],
    cons: ['Slower execution', 'Global Interpreter Lock', 'Mobile development limitations', 'Runtime errors'],
    frameworks: ['Django', 'Flask', 'FastAPI', 'PyTorch', 'TensorFlow', 'Pandas'],
    companies: ['Google', 'Netflix', 'Instagram', 'Spotify', 'Dropbox', 'Reddit'],
    tags: ['Python', 'Data Science', 'ML', 'AI', 'Web', 'Automation']
  },
  {
    id: '3',
    name: 'TypeScript',
    shortName: 'TS',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript',
    longDescription: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static types, classes, and modules to JavaScript.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    icon: typescript,
    category: 'Web Development',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Generic'],
    yearCreated: 2012,
    creator: 'Microsoft',
    website: 'https://www.typescriptlang.org',
    popularity: 85,
    difficulty: 'Intermediate',
    useCases: ['Large-scale Web Development', 'Enterprise Applications', 'Frontend Development', 'Backend Development'],
    pros: ['Static typing', 'Better IDE support', 'Catch errors early', 'Enhanced refactoring', 'JavaScript compatibility'],
    cons: ['Learning curve', 'Compilation step', 'Larger bundle size', 'Type complexity'],
    frameworks: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Next.js'],
    companies: ['Microsoft', 'Google', 'Facebook', 'Netflix', 'Uber', 'Shopify'],
    tags: ['TypeScript', 'JavaScript', 'Web', 'Frontend', 'Backend', 'Type Safety']
  },
  {
    id: '4',
    name: 'Java',
    shortName: 'Java',
    description: 'Object-oriented programming language designed for portability',
    longDescription: 'Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It\'s widely used for building enterprise applications, Android apps, and large-scale systems.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon:java,
    category: 'General Purpose',
    paradigm: ['Object-oriented', 'Structured', 'Imperative'],
    yearCreated: 1995,
    creator: 'James Gosling',
    website: 'https://www.java.com',
    popularity: 80,
    difficulty: 'Intermediate',
    useCases: ['Enterprise Applications', 'Android Development', 'Web Applications', 'Big Data', 'Cloud Computing'],
    pros: ['Platform independent', 'Strong typing', 'Rich ecosystem', 'Enterprise support', 'Performance'],
    cons: ['Verbose syntax', 'Memory consumption', 'Slower startup', 'Less flexible'],
    frameworks: ['Spring', 'Hibernate', 'Struts', 'JSF', 'Android SDK', 'Jakarta EE'],
    companies: ['Oracle', 'Google', 'Amazon', 'Netflix', 'LinkedIn', 'Uber'],
    tags: ['Java', 'Enterprise', 'Android', 'Spring', 'Backend', 'OOP']
  },
  {
    id: '5',
    name: 'C++',
    shortName: 'C++',
    description: 'General-purpose programming language with object-oriented features',
    longDescription: 'C++ is a powerful general-purpose programming language created as an extension to the C language. It offers object-oriented programming features while maintaining the efficiency and flexibility of C.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon: clogo,
    category: 'Systems Programming',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Procedural', 'Generic'],
    yearCreated: 1985,
    creator: 'Bjarne Stroustrup',
    website: 'https://isocpp.org',
    popularity: 75,
    difficulty: 'Advanced',
    useCases: ['System Software', 'Game Development', 'Embedded Systems', 'High-performance Applications', 'Graphics Programming'],
    pros: ['High performance', 'Memory control', 'Rich feature set', 'Cross-platform', 'Industry standard'],
    cons: ['Complex syntax', 'Memory management', 'Steep learning curve', 'Long compilation time'],
    frameworks: ['Qt', 'Boost', 'OpenGL', 'DirectX', 'Unreal Engine', 'SFML'],
    companies: ['Microsoft', 'Google', 'Adobe', 'Electronic Arts', 'Ubisoft', 'Blizzard'],
    tags: ['C++', 'Systems', 'Games', 'Performance', 'Embedded', 'Graphics']
  },
  {
    id: '6',
    name: 'Go',
    shortName: 'Go',
    description: 'Open-source programming language designed for simplicity and efficiency',
    longDescription: 'Go is a statically typed, compiled programming language designed at Google. It\'s known for its simplicity, strong support for concurrent programming, and excellent performance.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon: golang,
    category: 'Systems Programming',
    paradigm: ['Procedural', 'Concurrent', 'Structured'],
    yearCreated: 2009,
    creator: 'Google',
    website: 'https://golang.org',
    popularity: 70,
    difficulty: 'Intermediate',
    useCases: ['Cloud Services', 'Microservices', 'DevOps Tools', 'Network Services', 'System Tools'],
    pros: ['Simple syntax', 'Fast compilation', 'Built-in concurrency', 'Garbage collection', 'Cross-platform'],
    cons: ['Limited generics', 'No inheritance', 'Young ecosystem', 'Less flexible'],
    frameworks: ['Gin', 'Echo', 'Fiber', 'Gorilla', 'Chi', 'Standard library'],
    companies: ['Google', 'Uber', 'Docker', 'Kubernetes', 'Cloudflare', 'Twitch'],
    tags: ['Go', 'Cloud', 'Microservices', 'DevOps', 'Concurrency', 'Performance']
  },
  {
    id: '7',
    name: 'Rust',
    shortName: 'Rust',
    description: 'Systems programming language focused on safety and performance',
    longDescription: 'Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It\'s designed to be memory-safe without garbage collection.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon: rust,
    category: 'Systems Programming',
    paradigm: ['Multi-paradigm', 'Functional', 'Object-oriented', 'Imperative'],
    yearCreated: 2010,
    creator: 'Graydon Hoare',
    website: 'https://www.rust-lang.org',
    popularity: 65,
    difficulty: 'Expert',
    useCases: ['System Software', 'WebAssembly', 'Embedded Systems', 'Performance-critical Applications', 'Browser Engines'],
    pros: ['Memory safety', 'Zero-cost abstractions', 'Concurrent safety', 'Performance', 'Modern tooling'],
    cons: ['Steep learning curve', 'Long compilation time', 'Small ecosystem', 'Complex ownership system'],
    frameworks: ['Actix', 'Rocket', 'Tokio', 'Serde', 'Clap', 'Standard library'],
    companies: ['Microsoft', 'Amazon', 'Cloudflare', 'Mozilla', 'Discord', 'Dropbox'],
    tags: ['Rust', 'Systems', 'Safety', 'Performance', 'Memory', 'Concurrency']
  },
  {
    id: '8',
    name: 'Swift',
    shortName: 'Swift',
    description: 'Modern programming language for iOS, macOS, and watchOS development',
    longDescription: 'Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development. It\'s designed to be safe, fast, and expressive.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon:swift,
    category: 'Mobile Development',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Protocol-oriented'],
    yearCreated: 2014,
    creator: 'Apple',
    website: 'https://swift.org',
    popularity: 75,
    difficulty: 'Intermediate',
    useCases: ['iOS Development', 'macOS Development', 'watchOS Development', 'tvOS Development', 'Server-side Development'],
    pros: ['Modern syntax', 'Safe by default', 'Fast performance', 'Apple ecosystem', 'Open source'],
    cons: ['Limited to Apple platforms', 'Smaller community', 'Rapid evolution', 'Learning curve'],
    frameworks: ['UIKit', 'SwiftUI', 'Foundation', 'Combine', 'Core Data', 'ARKit'],
    companies: ['Apple', 'Uber', 'Instagram', 'Airbnb', 'Spotify', 'Twitter'],
    tags: ['Swift', 'iOS', 'macOS', 'Apple', 'Mobile', 'SwiftUI']
  },
  {
    id: '9',
    name: 'Kotlin',
    shortName: 'Kotlin',
    description: 'Modern programming language for Android and JVM development',
    longDescription: 'Kotlin is a modern programming language that makes developers happier. It\'s concise, safe, interoperable with Java and the JVM, and provides tooling support.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon:kotlin ,
    category: 'Mobile Development',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Generic'],
    yearCreated: 2011,
    creator: 'JetBrains',
    website: 'https://kotlinlang.org',
    popularity: 80,
    difficulty: 'Intermediate',
    useCases: ['Android Development', 'Backend Development', 'Web Development', 'Multi-platform Development', 'Server-side'],
    pros: ['Concise syntax', 'Java interoperability', 'Null safety', 'Coroutines', 'Multi-platform'],
    cons: ['Smaller ecosystem', 'Learning curve', 'Compilation time', 'Community size'],
    frameworks: ['Android SDK', 'Spring', 'Ktor', 'Compose Multiplatform', 'Exposed', 'Arrow'],
    companies: ['Google', 'Netflix', 'Uber', 'Pinterest', 'Trello', 'Slack'],
    tags: ['Kotlin', 'Android', 'JVM', 'Multi-platform', 'Coroutines', 'Compose']
  },
  {
    id: '10',
    name: 'PHP',
    shortName: 'PHP',
    description: 'Server-side scripting language designed for web development',
    longDescription: 'PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Rasmus Lerdorf in 1994.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon: php,
    category: 'Web Development',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Procedural', 'Functional'],
    yearCreated: 1994,
    creator: 'Rasmus Lerdorf',
    website: 'https://www.php.net',
    popularity: 70,
    difficulty: 'Beginner',
    useCases: ['Web Development', 'Content Management Systems', 'E-commerce', 'API Development', 'Command Line Scripts'],
    pros: ['Easy to learn', 'Wide hosting support', 'Large ecosystem', 'Quick development', 'Great documentation'],
    cons: ['Inconsistent syntax', 'Security concerns', 'Performance issues', 'Type system limitations'],
    frameworks: ['Laravel', 'Symfony', 'CodeIgniter', 'WordPress', 'Drupal', 'Yii'],
    companies: ['Facebook', 'Wikipedia', 'WordPress', 'Slack', 'Etsy', 'MailChimp'],
    tags: ['PHP', 'Web', 'CMS', 'Laravel', 'WordPress', 'Backend']
  },
  {
    id: '11',
    name: 'Ruby',
    shortName: 'Ruby',
    description: 'Dynamic, object-oriented programming language with elegant syntax',
    longDescription: 'Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon: ruby,
    category: 'Web Development',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Functional', 'Imperative'],
    yearCreated: 1995,
    creator: 'Yukihiro Matsumoto',
    website: 'https://www.ruby-lang.org',
    popularity: 60,
    difficulty: 'Beginner',
    useCases: ['Web Development', 'Automation', 'Scripting', 'Prototyping', 'DevOps'],
    pros: ['Elegant syntax', 'Developer happiness', 'Rich ecosystem', 'Metaprogramming', 'Community'],
    cons: ['Performance issues', 'Memory consumption', 'Learning curve', 'Debugging complexity'],
    frameworks: ['Ruby on Rails', 'Sinatra', 'Hanami', 'Grape', 'Sidekiq', 'RSpec'],
    companies: ['GitHub', 'Shopify', 'Airbnb', 'Twitch', 'Hulu', 'Basecamp'],
    tags: ['Ruby', 'Rails', 'Web', 'Automation', 'DevOps', 'Metaprogramming']
  },
  {
    id: '12',
    name: 'C#',
    shortName: 'C#',
    description: 'Modern, object-oriented programming language for .NET development',
    longDescription: 'C# is a modern, object-oriented, and type-safe programming language. It enables developers to build many types of secure and robust applications that run in .NET.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop',
    icon: csharp,
    category: 'General Purpose',
    paradigm: ['Multi-paradigm', 'Object-oriented', 'Generic', 'Functional'],
    yearCreated: 2000,
    creator: 'Microsoft',
    website: 'https://docs.microsoft.com/en-us/dotnet/csharp',
    popularity: 75,
    difficulty: 'Intermediate',
    useCases: ['Windows Applications', 'Web Development', 'Game Development', 'Mobile Development', 'Cloud Services'],
    pros: ['Strong typing', 'Rich ecosystem', 'Great tooling', 'Cross-platform', 'Performance'],
    cons: ['Windows-centric', 'Learning curve', 'Ecosystem complexity', 'Licensing costs'],
    frameworks: ['.NET', 'ASP.NET Core', 'Unity', 'Xamarin', 'Blazor', 'Entity Framework'],
    companies: ['Microsoft', 'Unity', 'Stack Overflow', 'GoDaddy', 'GoDaddy', 'Stack Overflow'],
    tags: ['C#', '.NET', 'Windows', 'Unity', 'ASP.NET', 'Xamarin']
  }
];

// Programming Language Categories
export const languageCategories = [
  {
    name: 'General Purpose',
    description: 'Versatile languages suitable for various applications',
    count: programmingLanguages.filter(lang => lang.category === 'General Purpose').length,
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>`
  },
  {
    name: 'Web Development',
    description: 'Languages primarily used for web applications',
    count: programmingLanguages.filter(lang => lang.category === 'Web Development').length,
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`
  },
  {
    name: 'Mobile Development',
    description: 'Languages for mobile app development',
    count: programmingLanguages.filter(lang => lang.category === 'Mobile Development').length,
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </svg>`
  },
  {
    name: 'Data Science',
    description: 'Languages optimized for data analysis and ML',
    count: programmingLanguages.filter(lang => lang.category === 'Data Science').length,
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>`
  },
  {
    name: 'Systems Programming',
    description: 'Low-level languages for system software',
    count: programmingLanguages.filter(lang => lang.category === 'Systems Programming').length,
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.25.41.49.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>`
  },
  {
    name: 'Scripting',
    description: 'Languages for automation and scripting',
    count: programmingLanguages.filter(lang => lang.category === 'Scripting').length,
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>`
  }
];

// Helper functions for programming languages
export const getProgrammingLanguages = {
  all: () => programmingLanguages,
  byCategory: (category: string) => programmingLanguages.filter(lang => lang.category === category),
  byDifficulty: (difficulty: string) => programmingLanguages.filter(lang => lang.difficulty === difficulty),
  byPopularity: (minPopularity: number) => programmingLanguages.filter(lang => lang.popularity >= minPopularity),
  search: (query: string) => programmingLanguages.filter(lang => 
    lang.name.toLowerCase().includes(query.toLowerCase()) ||
    lang.description.toLowerCase().includes(query.toLowerCase()) ||
    lang.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  ),
  getById: (id: string) => programmingLanguages.find(lang => lang.id === id),
  getTopLanguages: (limit: number = 10) => 
    programmingLanguages
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, limit)
};
