import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  href?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
}

export default function Logo({ href = '/', width = 100, height = 70 }: LogoProps) {
  return (
    <Link href={href}>
      <Image
        src="/images/logo.svg"
        width={width}
        height={height}
        className="object-cover"
        alt="logo"
      />
    </Link>
  );
}
