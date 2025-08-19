import { mockCommunities, popularTechnologies } from '@/data/mockData';
import { 
  UserGroupIcon, 
  PlusIcon, 
  MagnifyingGlassIcon,
  UsersIcon,
  DocumentTextIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';
import { Badge } from '@/components/ui';

export default function CommunityPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Communities
        </h1>
        <p className="text-gray-600 dark:text-chrome">
          Join developer communities, share knowledge, and collaborate on projects.
        </p>
      </div>

      {/* Search and Create */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-chrome" />
          <input
            type="text"
            placeholder="Search communities..."
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark800 border border-gray-200 dark:border-dark700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-chrome focus:outline-none focus:ring-2 focus:ring-electric"
          />
        </div>
        <button className="inline-flex items-center space-x-2 bg-electric hover:bg-neon_blue text-white px-6 py-3 rounded-lg transition-colors">
          <PlusIcon className="h-5 w-5" />
          <span>Create Community</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Communities Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockCommunities.map((community) => (
              <div key={community.id} className="bg-white dark:bg-dark800 rounded-lg border border-gray-200 dark:border-dark700 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Community Banner */}
                <div className="h-32 bg-gradient-to-r from-electric to-neon_blue relative">
                  <img 
                    src={community.banner} 
                    alt={community.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 right-3">
                    {community.isPrivate ? (
                      <Badge variant="outline" className="bg-white/90 text-gray-700">
                        Private
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-white/90 text-gray-700">
                        Public
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Community Info */}
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img 
                      src={community.avatar} 
                      alt={community.name}
                      className="w-16 h-16 rounded-lg border-4 border-white dark:border-dark800 -mt-8"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {community.name}
                      </h3>
                      <p className="text-gray-600 dark:text-chrome text-sm">
                        {community.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {community.members.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-chrome">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {community.posts.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-chrome">Posts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {community.videos.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-chrome">Videos</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {community.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                    {community.tags.length > 3 && (
                      <Badge variant="outline" size="sm">
                        +{community.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <button className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    community.isMember 
                      ? 'bg-gray-100 dark:bg-dark700 text-gray-700 dark:text-chrome hover:bg-gray-200 dark:hover:bg-dark700/80'
                      : 'bg-electric hover:bg-neon_blue text-white'
                  }`}>
                    {community.isMember ? 'Joined' : 'Join Community'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Popular Categories */}
          <div className="bg-white dark:bg-dark800 rounded-lg p-6 border border-gray-200 dark:border-dark700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Popular Categories
            </h3>
            <div className="space-y-3">
              {['Frontend Development', 'Backend Development', 'Mobile Development', 'Data Science', 'DevOps', 'Game Development'].map((category) => (
                <div key={category} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark700 transition-colors cursor-pointer">
                  <span className="text-gray-700 dark:text-chrome">{category}</span>
                  <span className="text-sm text-gray-500 dark:text-chrome/80">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Technologies */}
          <div className="bg-white dark:bg-dark800 rounded-lg p-6 border border-gray-200 dark:border-dark700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Technologies
            </h3>
            <div className="space-y-3">
              {popularTechnologies.slice(0, 8).map((tech) => (
                <div key={tech.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark700 transition-colors cursor-pointer">
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="flex-1">
                    <div className="text-gray-700 dark:text-chrome font-medium">
                      {tech.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-chrome/80">
                      {tech.count.toLocaleString()} devs
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
