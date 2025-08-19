import Link from 'next/link';
import { 
  CodeBracketIcon, 
  VideoCameraIcon, 
  UserGroupIcon, 
  RocketLaunchIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-dark900 dark:via-dark800 dark:to-depth">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-electric via-neon_blue to-neon_purple bg-clip-text text-transparent">
              Coduit
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-chrome mb-8 leading-relaxed">
              The ultimate social platform for programmers
            </p>
            <p className="text-lg text-gray-600 dark:text-chrome/80 mb-12 max-w-2xl mx-auto">
              Share code, create tutorials, build your developer network, and learn from the best in the industry. 
              Where Facebook meets YouTube, designed specifically for developers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center px-8 py-4 bg-electric hover:bg-neon_blue text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-electric/25"
            >
              Get Started Free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-electric text-electric hover:bg-electric hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              Sign In
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-electric/20 rounded-full mb-4">
                <CodeBracketIcon className="h-8 w-8 text-electric" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Code Sharing</h3>
              <p className="text-gray-600 dark:text-chrome/80">Share your code snippets, projects, and solutions with syntax highlighting</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neon_pink/20 rounded-full mb-4">
                <VideoCameraIcon className="h-8 w-8 text-neon_pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Video Tutorials</h3>
              <p className="text-gray-600 dark:text-chrome/80">Create and watch programming tutorials, live coding sessions, and tech talks</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lime_green/20 rounded-full mb-4">
                <UserGroupIcon className="h-8 w-8 text-lime_green" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Developer Network</h3>
              <p className="text-gray-600 dark:text-chrome/80">Connect with fellow developers, join communities, and collaborate on projects</p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-neon_blue rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-neon_pink rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-lime_green rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-electric rounded-full animate-pulse delay-1500"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white dark:bg-dark900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-electric mb-2">10K+</div>
              <div className="text-gray-600 dark:text-chrome">Developers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-neon_pink mb-2">5K+</div>
              <div className="text-gray-600 dark:text-chrome">Tutorials</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-lime_green mb-2">20K+</div>
              <div className="text-gray-600 dark:text-chrome">Code Snippets</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-neon_blue mb-2">100+</div>
              <div className="text-gray-600 dark:text-chrome">Communities</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
