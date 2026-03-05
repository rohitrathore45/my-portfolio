import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  CheckCircle,
  Github,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const LeetCodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Guard: check env vars are loaded
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS env vars missing:", {
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        EMAILJS_PUBLIC_KEY,
      });
      showToast("error", "Email service not configured. Check your .env file.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS first
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          message: formData.message,
        }
      );

      console.log("EmailJS success:", result);
      setFormData({ name: "", email: "", message: "" });
      showToast("success", "I'll get back to you soon.");
    } catch (err) {
      console.error("EmailJS error:", err);
      // Show the actual EmailJS error text to help debug
      const detail = err?.text || err?.message || "Unknown error";
      showToast("error", `Failed: ${detail}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail,   label: "Email",    value: "rohitjeevanrathore@gmail.com", href: "mailto:rohitjeevanrathore@gmail.com" },
    { icon: Phone,  label: "Phone",    value: "+91 6261585656",               href: "tel:+916261585656" },
    { icon: MapPin, label: "Location", value: "Bengaluru, India",             href: null },
  ];

  const socialLinks = [
    { icon: Linkedin,     label: "LinkedIn", href: "#" },
    { icon: Twitter,      label: "Twitter",  href: "#" },
    { icon: Github,       label: "GitHub",   href: "#" },
    { icon: LeetCodeIcon, label: "LeetCode", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-background overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s <span className="text-primary text-glow">Connect</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "hsl(var(--foreground) / 0.55)" }}>
            Interested in collaborating on scalable backend systems, full-stack
            applications, or AI-powered platforms? I&apos;m open to internships,
            full-time roles, and exciting tech opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* ── Left ── */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "hsl(var(--foreground) / 0.4)" }}>
                Reach Out Directly
              </p>
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const El = href ? "a" : "div";
                return (
                  <El
                    key={label}
                    href={href ?? undefined}
                    className={cn(
                      "flex items-center gap-4 px-4 py-3.5 rounded-xl border border-border bg-card transition-all duration-300 group",
                      href && "hover:border-primary/40 hover:bg-primary/5 hover:translate-x-1 cursor-pointer"
                    )}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/15">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(var(--foreground) / 0.4)" }}>{label}</p>
                      <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
                    </div>
                  </El>
                );
              })}
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(var(--foreground) / 0.4)" }}>
                Follow Me
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5"
                    style={{ color: "hsl(var(--foreground) / 0.65)" }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-card border border-border rounded-2xl p-7 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { id: "name",  label: "Your Name",  type: "text",  placeholder: "Enter your full name" },
                { id: "email", label: "Your Email", type: "email", placeholder: "Enter your email address" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="flex flex-col gap-1.5">
                  <label htmlFor={id} className="text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(var(--foreground) / 0.5)" }}>
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required
                    value={formData[id]}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-foreground/30 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(var(--foreground) / 0.5)" }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, opportunity, or idea..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-foreground/30 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 mt-1",
                  isSubmitting && "opacity-70 cursor-not-allowed hover:scale-100 hover:shadow-none"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border bg-card shadow-xl animate-fade-in",
          toast.type === "success" ? "border-primary/30" : "border-red-500/30"
        )}>
          {toast.type === "success"
            ? <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          }
          <div>
            <p className="text-sm font-semibold text-foreground">
              {toast.type === "success" ? "Message sent! 🚀" : "Failed to send"}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "hsl(var(--foreground) / 0.5)" }}>
              {toast.message}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};