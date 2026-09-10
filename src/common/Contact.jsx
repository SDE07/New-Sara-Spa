import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

export default function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://clientwebsite.blog/email-api/api/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer f6fd8e29605d39b351560af0bd3ed0c6",
        },
        body: JSON.stringify({
          to: "saranewspa@gmail.com",
          from_name: "NEW SARA SPA",
          reply_to: formData.email,
          subject: `NEW SARA SPA — Support Inquiry: ${formData.name} (${formData.subject})`,
          body: `<div style="font-family: sans-serif; padding: 20px;">
            <h2>NEW SARA SPA — Support Inquiry</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong><br/>${formData.message}</p>
          </div>`,
          is_html: true,
        }),
      });
    } catch (err) {
      console.error("Contact send error:", err);
    } finally {
      setLoading(false);
      const submissionData = {
        type: 'contact',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      setFormData({ name: "", email: "", subject: "", message: "" });
      navigate('/thank-you', { state: submissionData });
    }
  };

  return (
    <section className={cn('py-16', 'bg-slate-50', 'border-t', 'border-slate-200/80')}>
      <div className={cn('max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <div className={cn('max-w-3xl', 'mx-auto', 'text-center', 'mb-10')}>
          <span className={cn('text-teal-600', 'font-semibold', 'text-sm', 'tracking-wider', 'uppercase')}>Get In Touch</span>
          <h2 className={cn('text-3xl', 'font-bold', 'text-slate-900', 'mt-2')}>Connect With Sara Spa Support</h2>
          <p className={cn('text-slate-600', 'mt-3')}>
            Submit an inquiry, request service customization, or schedule custom table data integration.
          </p>
        </div>

        <div className={cn('max-w-4xl', 'mx-auto', 'bg-white', 'rounded-2xl', 'shadow-sm', 'border', 'border-slate-200', 'overflow-hidden')}>
          <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-5')}>

            {/* Info panel */}
            <div className={cn('md:col-span-2', 'bg-gradient-to-br', 'from-teal-700', 'to-emerald-800', 'p-8', 'text-white', 'flex', 'flex-col', 'justify-between')}>
              <div>
                <h3 className={cn('text-xl', 'font-bold', 'mb-4')}>Contact Information</h3>
                <p className={cn('text-teal-100', 'text-sm', 'leading-relaxed', 'mb-6')}>
                  NEW Sara Spa Wakad Pune — Best Massage Spa In Wakad. Open 24 Hours.
                </p>
                <div className={cn('space-y-4', 'text-sm')}>
                  <div className={cn('flex', 'items-center', 'gap-3')}>
                    <Phone className={cn('w-4', 'h-4', 'text-teal-300')} />
                    <span>+91 98343 66828</span>
                  </div>
                  <div className={cn('flex', 'items-center', 'gap-3')}>
                    <Mail className={cn('w-4', 'h-4', 'text-teal-300')} />
                    <span>saranewspa@gmail.com</span>
                  </div>
                  <div className={cn('flex', 'items-start', 'gap-3')}>
                    <MapPin className={cn('w-4', 'h-4', 'text-teal-300', 'mt-0.5')} />
                    <span>Office No 213 Wbiz Next To Ginger Hotel Bhumkar Chowk Pune Wakad - 411057</span>
                  </div>
                </div>
              </div>

              <div className={cn('mt-8', 'pt-6', 'border-t', 'border-teal-600/50', 'text-xs', 'text-teal-200')}>
                Sara SPA Table Architecture • Ready for production
              </div>
            </div>

            {/* Form */}
            <div className={cn('md:col-span-3', 'p-8')}>
              {submitted ? (
                <div className={cn('h-full', 'flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'py-8')}>
                  <div className={cn('w-12', 'h-12', 'bg-emerald-100', 'text-emerald-600', 'rounded-full', 'flex', 'items-center', 'justify-center', 'mb-3')}>
                    <CheckCircle2 className={cn('w-6', 'h-6')} />
                  </div>
                  <h4 className={cn('text-lg', 'font-bold', 'text-slate-900')}>Message Received!</h4>
                  <p className={cn('text-slate-500', 'text-sm', 'mt-1')}>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    <div>
                      <label className={cn('block', 'text-xs', 'font-semibold', 'text-slate-700', 'uppercase', 'tracking-wider', 'mb-1')}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={cn('w-full', 'px-3.5', 'py-2', 'text-sm', 'border', 'border-slate-200', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-teal-500/20', 'focus:border-teal-500')}
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className={cn('block', 'text-xs', 'font-semibold', 'text-slate-700', 'uppercase', 'tracking-wider', 'mb-1')}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={cn('w-full', 'px-3.5', 'py-2', 'text-sm', 'border', 'border-slate-200', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-teal-500/20', 'focus:border-teal-500')}
                        placeholder="e.g. rahul.sharma@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={cn('block', 'text-xs', 'font-semibold', 'text-slate-700', 'uppercase', 'tracking-wider', 'mb-1')}>
                      Subject / Service Inquiry
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={cn('w-full', 'px-3.5', 'py-2', 'text-sm', 'border', 'border-slate-200', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-teal-500/20', 'focus:border-teal-500')}
                      placeholder="Table customization / Booking"
                    />
                  </div>

                  <div>
                    <label className={cn('block', 'text-xs', 'font-semibold', 'text-slate-700', 'uppercase', 'tracking-wider', 'mb-1')}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={cn('w-full', 'px-3.5', 'py-2', 'text-sm', 'border', 'border-slate-200', 'rounded-lg', 'focus:outline-none', 'focus:ring-2', 'focus:ring-teal-500/20', 'focus:border-teal-500')}
                      placeholder="Write your details or requirements here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={cn('w-full', 'inline-flex', 'items-center', 'justify-center', 'gap-2', 'px-5', 'py-2.5', 'rounded-lg', 'bg-teal-600', 'hover:bg-teal-700', 'text-white', 'font-medium', 'text-sm', 'transition-colors', 'shadow-sm')}
                  >
                    <Send className={cn('w-4', 'h-4')} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
