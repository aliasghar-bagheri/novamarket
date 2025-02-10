import { OUR_FEATURES } from '@/constants';

export default function OurFeatures() {
  return (
    <div className="w-full bg-secondary-0 p-5 grid grid-cols-2 lg:grid-cols-4 gap-5 rounded">
      {OUR_FEATURES.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="p-4 sm:p-2 rounded flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="p-4 rounded bg-primary-100/70 text-primary-500 shadow">
              <Icon className="size-7" />
            </div>
            <div className="text-center sm:text-right">
              <h4 className="text-sm font-medium">{feature.title}</h4>
              <p className="text-xs sm:text-sm mt-1">{feature.subTitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
