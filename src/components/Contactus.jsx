import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Globe,
  ArrowRight,
} from "lucide-react";
import BookingModal from "./BookingModal";
import spa2Img from "../assets/spa2.png";
import spa4Img from "../assets/spa4.png";
import spa7Img from "../assets/spa7.png";

export default function Contactus() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [mapType, setMapType] = useState("roadmap");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredService: "Ayurvedic Herbal Hot Stone Ritual",
    preferredDate: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredService: "Ayurvedic Herbal Hot Stone Ritual",
        preferredDate: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D241E] pt-24 pb-20 selection:bg-[#D4A373] selection:text-white">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F2ECE4] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#EAE0D3]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#52B788]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold tracking-tight text-[#2D241E]">
            Contact Our <span className="skin-gradient-text italic font-normal">Sanctuary</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6B5A4E] max-w-2xl mx-auto font-light leading-relaxed">
            Begin your journey into restorative wellness. Our master therapists and concierge team are at your service for reservations, consultations, and private suite arrangements.
          </p>
        </div>
      </section>

      {/* ── 2. MAIN CONTACT & INQUIRY SECTION ── */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: Deep Dark Emerald VIP Sanctuary Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-[32px] bg-gradient-to-b from-[#0E241B] via-[#0A1A13] to-[#050D09] text-white p-8 sm:p-10 border border-[#1E4D39] shadow-[0_20px_50px_rgba(14,36,27,0.4)] relative overflow-hidden flex flex-col justify-between space-y-8"
            >
              {/* Emerald & Gold Ambient Halos */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#52B788]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                    Beverly Hills Sanctuary
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7E8CD] leading-relaxed font-light">
                    A private enclave of calm and therapeutic serenity nestled in the heart of the luxury wellness district.
                  </p>
                </div>

                {/* Contact Coordinates */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Location</div>
                      <div className="text-sm font-medium text-white">450 North Rodeo Drive, Suite 300, Beverly Hills, CA 90210</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Concierge Line</div>
                      <div className="text-sm font-medium text-white">+1 (310) 855-SARA / +1 (800) 555-7272</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Inquiry & VIP Reservations</div>
                      <div className="text-sm font-medium text-white">concierge@saraspa.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Sanctuary Hours</div>
                      <div className="text-sm font-medium text-white">Mon – Sun: 8:00 AM – 10:00 PM (PST)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Reserve Button */}
              <div className="relative z-10 pt-4 border-t border-[#1E4D39]/80">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online Instantly</span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT: Spacious Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 rounded-[32px] bg-white p-8 sm:p-12 lg:p-14 border border-[#EAE0D3] shadow-[0_15px_45px_rgba(45,36,30,0.06)] relative"
            >
              <div className="space-y-3 mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#2D241E]">
                  Send an Inquiry
                </h3>
                <p className="text-sm text-[#6B5A4E] font-light leading-relaxed">
                  Have a bespoke request, corporate retreat, or private VIP booking question? Leave a message and our concierge will respond within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAF7EE] text-[#2D6A4F] mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif-luxury font-bold text-[#2D241E]">
                    Inquiry Received
                  </h4>
                  <p className="text-sm text-[#6B5A4E] max-w-md mx-auto font-light">
                    Thank you. A dedicated Sara Spa wellness concierge will connect with you shortly with tailored options.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Lady Evelyn Sinclair"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="evelyn@sanctuary.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (310) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Preferred Service / Package
                      </label>
                      <select
                        value={formData.preferredService}
                        onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                      >
                        <option>Ayurvedic Herbal Hot Stone Ritual</option>
                        <option>Shirodhara Bliss Stream Therapy</option>
                        <option>Hydrothermal VIP Jacuzzi Suite</option>
                        <option>Royal Couple's Aromatherapy Sanctuary</option>
                        <option>24K Gold Luminosity Facial</option>
                        <option>Full Sanctuary Day Retreat</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your preferred date, party size, or specific health goals..."
                      className="w-full px-4 py-3.5 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#D4A373]" />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE BEVERLY HILLS MAP SECTION ── */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] overflow-hidden bg-white border border-[#EAE0D3] shadow-[0_15px_40px_rgba(45,36,30,0.06)]">
            
            {/* Clean Inline Header with View Switcher */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#EAE0D3] flex flex-wrap items-center justify-between gap-4 bg-[#FAF7F2]/60">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2D241E] text-[#D4A373] flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-luxury font-bold text-lg text-[#2D241E]">
                    Beverly Hills Sanctuary Map
                  </h4>
                  <p className="text-xs text-[#6B5A4E]">450 N Rodeo Dr, Beverly Hills, CA 90210</p>
                </div>
              </div>

              {/* Map / Satellite Mode Switcher Pills */}
              <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#EAE0D3] shadow-xs">
                <button
                  type="button"
                  onClick={() => setMapType("roadmap")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    mapType === "roadmap"
                      ? "bg-[#2D241E] text-white shadow-xs"
                      : "text-[#6B5A4E] hover:text-[#2D241E]"
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Map View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMapType("satellite")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    mapType === "satellite"
                      ? "bg-[#2D241E] text-white shadow-xs"
                      : "text-[#6B5A4E] hover:text-[#2D241E]"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Satellite</span>
                </button>
              </div>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative h-[420px] sm:h-[500px] w-full bg-[#EAE0D3]/40">
              <iframe
                title="Sara Spa Beverly Hills Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.887968595563!2d-118.40685992384738!3d34.07238211666718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04ce9df6f1%3A0x6b9d62ec1c87a20c!2sRodeo%20Dr%2C%20Beverly%20Hills%2C%20CA%2090210!5e${mapType === "satellite" ? "1" : "0"}!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Ayurvedic Herbal Hot Stone Ritual"
      />
    </div>
  );
}
