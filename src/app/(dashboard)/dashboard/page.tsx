import { mockPosts, mockUsers, trendingTopics, popularTechnologies } from '@/data/mockData';
import { 
  HeartIcon, 
  ChatBubbleLeftIcon, 
  ShareIcon, 
  BookmarkIcon,
  CodeBracketIcon,
  VideoCameraIcon,
  LinkIcon
} from '@heroicons/react/24/outline';
import { Badge } from '@/components/ui';

export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Developer! 👋
        </h1>
        <p className="text-gray-600 dark:text-chrome">
          Here's what's happening in your coding world today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white dark:bg-dark800 rounded-lg p-6 border border-gray-200 dark:border-dark700">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={mockUsers[0].avatar} 
                alt={mockUsers[0].displayName}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Share your code, thoughts, or create a tutorial..."
                  className="w-full bg-gray-50 dark:bg-dark700 border border-gray-200 dark:border-dark700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-chrome focus:outline-none focus:ring-2 focus:ring-electric"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 dark:text-chrome hover:text-electric transition-colors">
                  <CodeBracketIcon className="h-5 w-5" />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-chrome hover:text-electric transition-colors">
                  <VideoCameraIcon className="h-5 w-5" />
                  <span>Video</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-chrome hover:text-electric transition-colors">
                  <LinkIcon className="h-5 w-5" />
                  <span>Link</span>
                </button>
              </div>
              <button className="bg-electric hover:bg-neon_blue text-white px-6 py-2 rounded-lg transition-colors">
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-dark800 rounded-lg border border-gray-200 dark:border-dark700 overflow-hidden">
                {/* Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.displayName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {post.author.displayName}
                        </h3>
                        {post.author.isVerified && (
                          <span className="text-electric">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-chrome">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-6 pb-4">
                  <p className="text-gray-900 dark:text-white mb-4 whitespace-pre-line">
                    {post.content}
                  </p>
                  
                  {/* Code Block */}
                  {post.code && (
                    <div className="bg-gray-50 dark:bg-dark700 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-chrome">
                          {post.code.language}
                        </span>
                        <button className="text-gray-500 hover:text-gray-700 dark:text-chrome dark:hover:text-white">
                          Copy
                        </button>
                      </div>
                      <pre className="text-sm text-gray-800 dark:text-white overflow-x-auto">
                        <code>{post.code.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* Video Thumbnail */}
                  {post.video && (
                    <div className="mb-4">
                      <img 
                        src={post.video.thumbnail} 
                        alt={post.video.title}
                        className="w-full rounded-lg"
                      />
                      <div className="mt-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {post.video.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-chrome">
                          {post.video.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Post Actions */}
                <div className="px-6 py-4 border-t border-gray-200 dark:border-dark700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 dark:text-chrome hover:text-candy transition-colors">
                        <HeartIcon className={`h-5 w-5 ${post.isLiked ? 'text-candy fill-current' : ''}`} />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 dark:text-chrome hover:text-electric transition-colors">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 dark:text-chrome hover:text-lime_green transition-colors">
                        <ShareIcon className="h-5 w-5" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                    <button className="text-gray-600 dark:text-chrome hover:text-sunflower transition-colors">
                      <BookmarkIcon className={`h-5 w-5 ${post.isBookmarked ? 'text-sunflower fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white dark:bg-dark800 rounded-lg p-6 border border-gray-200 dark:border-dark700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Trending Topics
            </h3>
            <div className="space-y-3">
              {trendingTopics.slice(0, 8).map((topic) => (
                <div key={topic.name} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-chrome">#{topic.name}</span>
                  <span className="text-sm text-gray-500 dark:text-chrome/80">
                    {topic.count.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Technologies */}
          <div className="bg-white dark:bg-dark800 rounded-lg p-6 border border-gray-200 dark:border-dark700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Popular Technologies
            </h3>
            <div className="space-y-3">
              {popularTechnologies.slice(0, 6).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="flex-1">
                    <div className="text-gray-700 dark:text-chrome font-medium">
                      {tech.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-chrome/80">
                      {tech.count.toLocaleString()} developers
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
