import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  );
};
