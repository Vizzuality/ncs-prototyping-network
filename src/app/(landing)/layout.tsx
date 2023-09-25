import Providers from '@/app/layout-providers';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
