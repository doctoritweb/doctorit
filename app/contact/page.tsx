"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ChangeEvent,
  type ElementType,
  type RefObject,
  type ReactNode,
} from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
  X,
  AlertCircle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Toast Component                                                    */
/* ------------------------------------------------------------------ */
function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed top-6 right-6 z-50"
      style={{
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <div
        className={`
          flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl border
          min-w-[300px] max-w-md
          ${
            type === "success"
              ? "bg-white border-green-200 text-green-800"
              : "bg-white border-red-200 text-red-800"
          }
        `}
      >
        <div
          className={`
            w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
            ${type === "success" ? "bg-green-100" : "bg-red-100"}
          `}
        >
          {type === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600" />
          )}
        </div>

        <p className="font-medium text-sm flex-1">{message}</p>

        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-100 transition"
        >
          <X className="w-4 h-4 text-slate-500" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Intersection Observer Hook                                         */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.2): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ------------------------------------------------------------------ */
/*  Contact Info Card                                                  */
/* ------------------------------------------------------------------ */
function ContactCard({
  icon: Icon,
  title,
  children,
  iconBg = "bg-[#022978]",
  delay = 0,
  inView,
}: {
  icon: ElementType;
  title: string;
  children: ReactNode;
  iconBg?: string;
  delay?: number;
  inView: boolean;
}) {
  return (
    <div
      className={`
        group flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl
        transition-all duration-500 ease-out
        hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1
        ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`
          w-12 h-12 ${iconBg} text-white rounded-xl flex items-center justify-center flex-shrink-0
          transition-all duration-300 group-hover:scale-110 group-hover:shadow-md
        `}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [infoRef, infoInView] = useInView(0.15);
  const [formRef, formInView] = useInView(0.15);
  const [mapRef, mapInView] = useInView(0.2);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // -------- Validation --------
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setToast({
        message: "Please fix the errors in the form",
        type: "error",
      });
      return;
    }

    // -------- Submit --------
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xljewrgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setIsSubmitted(true);
      setToast({
        message: "Message sent successfully! We will contact you soon.",
        type: "success",
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
        setErrors({});
      }, 4000);
    } catch (error) {
      setToast({
        message: "Something went wrong. Please try again or call us.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* ========== HERO ========== */}
      <section className="relative bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            Contact Us
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Have a device issue? Reach out to us - we are happy to help.
          </p>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT - Contact Info */}
            <div ref={infoRef}>
              <div
                className={`transition-all duration-700 ${
                  infoInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  You can call us, message us on WhatsApp, or fill out the form.
                  We will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  delay={80}
                  inView={infoInView}
                >
                  <a
                    href="tel:+94777143928"
                    className="text-[#022978] hover:underline font-medium transition-colors"
                  >
                    +94 777143928
                  </a>
                </ContactCard>

                <ContactCard
                  icon={MessageCircle}
                  title="WhatsApp"
                  iconBg="bg-green-500"
                  delay={160}
                  inView={infoInView}
                >
                  <a
                    href="https://wa.me/94777143928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline font-medium transition-colors"
                  >
                    Chat with us on WhatsApp
                  </a>
                </ContactCard>

                <ContactCard
                  icon={Mail}
                  title="Email"
                  delay={240}
                  inView={infoInView}
                >
                  <a
                    href="mailto:doctoritweb@gmail.com"
                    className="text-[#022978] hover:underline font-medium transition-colors"
                  >
                    doctoritweb@gmail.com
                  </a>
                </ContactCard>

                <ContactCard
                  icon={MapPin}
                  title="Address"
                  delay={320}
                  inView={infoInView}
                >
                  <p className="text-slate-600 leading-relaxed">
                    No.1014/1/1, Vihara Mawatha,
                    <br />
                    Kelaniya, Sri Lanka.
                  </p>
                </ContactCard>

                <ContactCard
                  icon={Clock}
                  title="Working Hours"
                  delay={400}
                  inView={infoInView}
                >
                  <p className="text-slate-600 leading-relaxed">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </ContactCard>
              </div>
            </div>

            {/* RIGHT - Form */}
            <div
              ref={formRef}
              className={`
                relative bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10
                transition-all duration-700 ease-out
                ${
                  formInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-400/5 pointer-events-none" />

              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send us a Message
                </h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-green-100">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-slate-600 text-lg">
                      Thank you. We will contact you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your name"
                        className={`
                          w-full px-4 py-3.5 rounded-xl border bg-white
                          text-slate-900 placeholder:text-slate-400
                          outline-none transition-all duration-300
                          ${
                            errors.name
                              ? "border-red-400 ring-2 ring-red-100"
                              : focusedField === "name"
                              ? "border-[#022978] ring-2 ring-blue-100 shadow-sm"
                              : "border-slate-300 hover:border-slate-400"
                          }
                        `}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your phone number"
                        className={`
                          w-full px-4 py-3.5 rounded-xl border bg-white
                          text-slate-900 placeholder:text-slate-400
                          outline-none transition-all duration-300
                          ${
                            errors.phone
                              ? "border-red-400 ring-2 ring-red-100"
                              : focusedField === "phone"
                              ? "border-[#022978] ring-2 ring-blue-100 shadow-sm"
                              : "border-slate-300 hover:border-slate-400"
                          }
                        `}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Enter your email"
                        className={`
                          w-full px-4 py-3.5 rounded-xl border bg-white
                          text-slate-900 placeholder:text-slate-400
                          outline-none transition-all duration-300
                          ${
                            errors.email
                              ? "border-red-400 ring-2 ring-red-100"
                              : focusedField === "email"
                              ? "border-[#022978] ring-2 ring-blue-100 shadow-sm"
                              : "border-slate-300 hover:border-slate-400"
                          }
                        `}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className={`
                          w-full px-4 py-3.5 rounded-xl border bg-white cursor-pointer
                          text-slate-900
                          outline-none transition-all duration-300
                          ${
                            focusedField === "service"
                              ? "border-[#022978] ring-2 ring-blue-100 shadow-sm"
                              : "border-slate-300 hover:border-slate-400"
                          }
                        `}
                      >
                        <option value="">Select a service</option>
                        <option value="laptop-repair">Laptop Repair</option>
                        <option value="desktop-repair">Desktop Repair</option>
                        <option value="printer-repair">Printer Repair</option>
                        <option value="data-recovery">Data Recovery</option>
                        <option value="hardware-upgrade">Hardware Upgrade</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Describe your issue..."
                        className={`
                          w-full px-4 py-3.5 rounded-xl border bg-white resize-none
                          text-slate-900 placeholder:text-slate-400
                          outline-none transition-all duration-300
                          ${
                            errors.message
                              ? "border-red-400 ring-2 ring-red-100"
                              : focusedField === "message"
                              ? "border-[#022978] ring-2 ring-blue-100 shadow-sm"
                              : "border-slate-300 hover:border-slate-400"
                          }
                        `}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="
                        group relative w-full flex items-center justify-center gap-2.5
                        bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb]
                        text-white font-semibold py-4 rounded-xl
                        transition-all duration-300
                        hover:opacity-95 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-0.5
                        active:scale-[0.98]
                        disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0
                      "
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAP ========== */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={mapRef}
            className={`
              relative w-full h-80 md:h-96 rounded-2xl overflow-hidden
              border border-slate-200 shadow-sm
              transition-all duration-700 ease-out
              ${
                mapInView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-[0.98]"
              }
            `}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2841.4536377579684!2d79.91766609999999!3d6.950001299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25942db189b49%3A0x5b02a0abf2679ac9!2sDoctor%20IT!5e1!3m2!1sen!2slk!4v1788621470452!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
              title="Doctor IT Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}