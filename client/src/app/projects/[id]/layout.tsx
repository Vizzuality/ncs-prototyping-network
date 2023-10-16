'use client';
import DetailFooter from 'containers/projects/detail/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <DetailFooter />
    </div>
  );
}
