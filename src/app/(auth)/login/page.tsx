import Link from 'next/link';
import { CodeBracketIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Button, Input, Card, CardHeader, CardContent, CardFooter } from '@/components/ui';

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-electric/20 rounded-full mb-4">
          <CodeBracketIcon className="h-8 w-8 text-electric" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-chrome">Sign in to your Coduit account</p>
      </CardHeader>

      <CardContent>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="pr-12"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-chrome hover:text-white"
              >
                <EyeIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-electric bg-dark700 border-dark700 rounded focus:ring-electric focus:ring-2"
              />
              <span className="ml-2 text-sm text-chrome">Remember me</span>
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-electric hover:text-neon_blue transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Sign In
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center">
          <p className="text-chrome">
            Don't have an account?{' '}
            <Link
              href="/auth/register"
              className="text-electric hover:text-neon_blue font-medium transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-chrome hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
