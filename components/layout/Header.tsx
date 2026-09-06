// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";
// import logo from "../../public/logo.png";

// interface NavLink {
//   name: string;
//   href: string;
//   section?: string; // set when this link should scroll to a section on the homepage
// }

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const navLinks: NavLink[] = [
//     { name: "Home", href: "/" },
//     { name: "Products", href: "/products" },
//     { name: "Services", href: "#services", section: "services" },
//     { name: "Why Us", href: "#why-choose-us", section: "why-choose-us" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const isActive = (href: string) => pathname === href;

//   function handleSectionClick(e: React.MouseEvent, sectionId: string) {
//     e.preventDefault();
//     setIsOpen(false);

//     if (pathname === "/") {
//       document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       router.push(`/#${sectionId}`);
//     }
//   }

//   function renderLink(link: NavLink, className: string) {
//     if (link.section) {
//       return (
//         <a
//           key={link.name}
//           href={link.href}
//           onClick={(e) => handleSectionClick(e, link.section as string)}
//           className={className}
//         >
//           {link.name}
//         </a>
//       );
//     }

//     return (
//       <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={className}>
//         {link.name}
//       </Link>
//     );
//   }

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src={logo}
//               alt="DoctorIT Logo"
//               width={210}
//               height={150}
//               className="rounded-lg"
//               priority
//             />
//           </Link>

//           {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-12">
//               {navLinks.map((link) =>
//                 renderLink(
//                   link,
//                   `text-sm font-medium transition-colors hover:text-blue-600 ${
//                     isActive(link.href) ? "text-blue-600" : "text-gray-700"
//                   }`
//                 )
//               )}
//             </nav>

//           {/* Right Side Actions */}
//           {/* <div className="flex items-center gap-4"> */}
//             {/* Search (optional) */}
//             {/* <button className="hidden sm:flex p-2 text-gray-600 hover:text-blue-600 transition-colors">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </button> */}

//             {/* Cart */}
//             {/* <Link
//               href="/cart"
//               className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//                 2
//               </span>
//             </Link> */}

//             {/* Login Button */}
//             {/* <Link
//               href="/login"
//               className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Login
//             </Link> */}

//             {/* Mobile Menu Button */}
//             {/* <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 text-gray-600 hover:text-blue-600"
//             >
//               {isOpen ? (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button> */}
//           {/* </div> */}
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden border-t border-gray-200 py-4">
//             <nav className="flex flex-col gap-3">
//               {navLinks.map((link) =>
//                 renderLink(
//                   link,
//                   `px-2 py-2 text-sm font-medium rounded-md ${
//                     isActive(link.href)
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-700 hover:bg-gray-50"
//                   }`
//                 )
//               )}
//               {/* <Link
//                 href="/login"
//                 onClick={() => setIsOpen(false)}
//                 className="mt-2 px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 rounded-lg"
//               >
//                 Login
//               </Link> */}
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";

interface NavLink {
  name: string;
  href: string;
  section?: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "#services", section: "services" },
    { name: "Why Us", href: "#why-choose-us", section: "why-choose-us" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy (only runs on homepage)
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["services", "why-choose-us"];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;

      let current = "";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId;
            break;
          }
        }
      }

      if (window.scrollY < 200) {
        current = "";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // run once

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [pathname]);

  const isActive = (link: NavLink) => {
    // Normal pages (Products, About, Contact...)
    if (!link.section) {
      return pathname === link.href;
    }

    // Section links only active on homepage
    if (pathname === "/") {
      return activeSection === link.section;
    }

    return false;
  };

  function handleSectionClick(e: React.MouseEvent, sectionId: string) {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  }

  function renderLink(link: NavLink, className: string) {
    if (link.section) {
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleSectionClick(e, link.section as string)}
          className={className}
        >
          {link.name}
        </a>
      );
    }

    return (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className={className}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={logo}
              alt="DoctorIT Logo"
              width={180}
              height={120}
              className="rounded-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              renderLink(
                link,
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link) =>
              renderLink(
                link,
                `px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                  isActive(link)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}