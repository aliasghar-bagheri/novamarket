import { User } from 'lucide-react';
import Link from 'next/link';

export default function Auth() {
  return (
    <Link
      href="/auth"
      className="bg-secondary-0 p-3 rounded-3xl flex items-center gap-x-3 text-sm"
    >
      ورود و عضویت
      <User className="bg-primary-500 rounded-full stroke-white w-8 h-8 p-1 shadow-md shadow-primary-500/50" />
    </Link>
  );
}
