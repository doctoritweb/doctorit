import { 
  SiHp, 
  SiDell, 
  SiLenovo, 
  SiAsus, 
  SiAcer, 
  SiApple, 
  SiSamsung,
  SiMsi
} from "react-icons/si";

const brands = [
  { name: "HP", icon: SiHp },
  { name: "Dell", icon: SiDell },
  { name: "Lenovo", icon: SiLenovo },
  { name: "ASUS", icon: SiAsus },
  { name: "Acer", icon: SiAcer },
  { name: "Apple", icon: SiApple },
  { name: "Samsung", icon: SiSamsung },
  { name: "MSI", icon: SiMsi },
];

export default function BrandsWeSupport() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Trusted Brands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Brands We Support
          </h2>
          <p className="text-slate-600 text-lg">
            We repair and service all major laptop, desktop and printer brands
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="
                group relative
                bg-white 
                border border-slate-200 
                rounded-2xl 
                h-28 
                flex flex-col items-center justify-center gap-2
                transition-all duration-300 ease-out
                hover:border-blue-400
                hover:shadow-xl hover:shadow-blue-100
                hover:-translate-y-1
                cursor-pointer
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Logo moves only on hover */}
              <brand.icon 
                className="
                  relative z-10 w-9 h-9 text-slate-700 
                  group-hover:text-blue-700 
                  transition-colors duration-300
                  group-hover:animate-swing
                " 
              />
              
              <span className="relative z-10 text-sm font-semibold text-slate-600 group-hover:text-blue-700 transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10">
          And many more brands...
        </p>

      </div>
    </section>
  );
}