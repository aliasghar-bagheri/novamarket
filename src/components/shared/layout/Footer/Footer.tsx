import Logo from '@/components/shared/icons/Logo';
import { toPersianNumber } from '@/util/toPersianNumber';
import OutFeatures from './OurFeatures';
import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';
import Link from 'next/link';
import { SOCIAL_MEDIA } from '@/constants';

export default function Footer() {
  return (
    <footer className="container py-10 space-y-5 sm:space-y-10 border-t border-t-secondary-200">
      <div className="flex flex-col text-center sm:flex-row items-center justify-between gap-5">
        <Logo />
        <div>
          <p className="text-sm -tracking-tighter">
            تلفن پشتیبانی: {toPersianNumber('021000000000')}
          </p>
          <p className="text-sm mt-2">
            {toPersianNumber('7')} روز هفته, {toPersianNumber('24')} ساعت روز پاسخگوی شما هستیم.
          </p>
        </div>
        <div className="flex items-center gap-5">
          {SOCIAL_MEDIA.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
              >
                <Icon className="w-8 h-8" />
              </Link>
            );
          })}
        </div>
      </div>
      <OutFeatures />
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex-1 space-y-5">
          <p className="leading-8">
            <span className="text-primary-500 font-medium">لورم ایپسوم</span> متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <div className="flex items-center gap-3 font-semibold">
            <div className="bg-primary-500 text-white p-2 rounded-full">
              <MapPinIcon />
            </div>
            <span>تهران - خیابان پاسدارن جنوبی</span>
          </div>
        </div>
        <div className="flex-0 flex flex-wrap gap-3 items-center justify-center">
          <Image
            src="/images/samandehi.png"
            width={100}
            height={100}
            alt="samandehi"
          />
          <Image
            src="/images/enamad.png"
            width={100}
            height={100}
            alt="enamad"
          />
        </div>
      </div>
      <div className="text-center text-sm">
        تمامی حقوق برای <span className="font-semibold text-primary-500">نوا مارکت</span> محفوظ است.
        <span>ساخته شده توسط علی اصغر حسینی باقری❤️️</span>
      </div>
    </footer>
  );
}
