import { PARTNERS } from '../../lib/constants';

export default function BrandsBar() {
  return (
    <section className="py-6 bg-surface-light border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-text-light text-xs font-medium uppercase tracking-widest">Powered by</span>
          {PARTNERS.map(brand => (
            <span
              key={brand}
              className="text-text-mid/40 hover:text-text-mid text-sm font-semibold transition-all duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
