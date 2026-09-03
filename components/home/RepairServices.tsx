import Link from "next/link";
import { 
  Laptop, 
  Monitor, 
  Printer, 
  HardDrive, 
  Wifi, 
  Cpu,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Laptop Repair",
    description: "Screen replacement, battery issues, hinge repair, keyboard, motherboard & overheating solutions.",
    icon: Laptop,
    href: "/services/laptop-repair",
  },
  {
    id: 2,
    title: "Desktop / PC Repair",
    description: "Motherboard, Power supply, GPU, RAM issues, slow performance and complete system repair.",
    icon: Monitor,
    href: "/services/desktop-repair",
  },
  {
    id: 3,
    title: "Printer Repair",
    description: "Laser & Inkjet printer servicing, paper jam, printing quality issues and spare parts replacement.",
    icon: Printer,
    href: "/services/printer-repair",
  },
  {
    id: 4,
    title: "Data Recovery",
    description: "Recover important files from crashed hard disks, SSDs, pendrives and formatted drives.",
    icon: HardDrive,
    href: "/services/data-recovery",
  },
  {
    id: 5,
    title: "Network & WiFi Setup",
    description: "Router configuration, WiFi range problems, network troubleshooting and office setup.",
    icon: Wifi,
    href: "/services/network-repair",
  },
  {
    id: 6,
    title: "Hardware Upgrades",
    description: "SSD upgrade, RAM upgrade, Graphics card installation and complete performance boosting.",
    icon: Cpu,
    href: "/services/hardware-upgrade",
  },
];

export default function RepairServices() {
  return (
    <section className="py-16 md:py-24 bg-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Wrench className="w-4 h-4" />
            Professional Repair Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Repair Services
          </h2>
          <p className="text-slate-600 text-lg">
            We provide expert repair solutions for Laptops, Desktops, Printers and more with genuine parts and warranty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 bg-">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative bg-card-gradient hover:bg-card-soft-hover border border-slate-200 hover:border-blue-500 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="w-14 h-14 bg-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-5 leading-relaxed text-[15px]">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                View Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-5">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Warranty on Repairs</h4>
              <p className="text-sm text-slate-600">Up to 90 days service warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-5">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Fast Turnaround</h4>
              <p className="text-sm text-slate-600">Most repairs done in 24-48 hours</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-5">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Expert Technicians</h4>
              <p className="text-sm text-slate-600">Experienced & certified engineers</p>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}