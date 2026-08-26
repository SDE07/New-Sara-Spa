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
      <section className="pt-8 pb-4 md:pt-12 md:pb-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* LEFT: Compact Deep Dark Emerald VIP Sanctuary Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-[#0E241B] via-[#0A1A13] to-[#050D09] text-white p-6 sm:p-7 border border-[#1E4D39] shadow-[0_15px_40px_rgba(14,36,27,0.35)] relative overflow-hidden flex flex-col justify-between space-y-6"
            >
              {/* Emerald & Gold Ambient Halos */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#52B788]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#D4A373]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#E3BA8F] block">
                    Beauty, Cosmetic & Personal Care
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-white leading-snug">
                    NEW Sara Spa Wakad
                  </h3>
                  <p className="text-xs text-[#A7E8CD] leading-relaxed font-light">
                    Best massage spa in Wakad, Pune. A sanctuary of authentic Ayurvedic therapies, private Jacuzzis, and deep relaxation.
                  </p>
                </div>

                {/* Contact Coordinates */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Location & Address</div>
                      <div className="text-xs font-medium text-white leading-relaxed">
                        Office No 213 Wbiz Next To Ginger Hotel Bhumkar Chowk Pune Wakad - 411057
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Direct Call & WhatsApp</div>
                      <a href="tel:+919834366828" className="text-xs font-medium text-white hover:text-[#E3BA8F] transition-colors block">
                        +91 98343 66828
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Inquiry & Appointments</div>
                      <a href="mailto:saranewspa@gmail.com" className="text-xs font-medium text-white hover:text-[#E3BA8F] transition-colors block">
                        saranewspa@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-[#1E4D39] text-[#A7E8CD] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider text-[#A7E8CD] font-semibold">Sanctuary Hours</div>
                      <div className="text-xs font-medium text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse"></span>
                        <span>Open 24 Hours (Mon – Sun)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Reserve Button */}
              <div className="relative z-10 pt-3 border-t border-[#1E4D39]/80">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online Instantly</span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT: Spacious Balanced Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 rounded-3xl bg-white p-6 sm:p-10 border border-[#EAE0D3] shadow-[0_15px_45px_rgba(45,36,30,0.06)] relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#2D241E]">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5A4E] font-light leading-relaxed">
                    Have a bespoke request, corporate retreat, or private VIP booking question? Leave a message and our concierge will respond within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-14 text-center space-y-4">
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
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Lady Evelyn Sinclair"
                          className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="evelyn@sanctuary.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98343 66828"
                          className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                          Preferred Service / Package
                        </label>
                        <select
                          value={formData.preferredService}
                          onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                        >
                          <optgroup label="── 1. DRY MASSAGES ──">
                            <option>Head Massages (Indian Champ)</option>
                            <option>Foot Reflexology</option>
                            <option>Back Massages</option>
                            <option>Thai Dry Stretch Massage</option>
                          </optgroup>
                          <optgroup label="── 2. SIGNATURE MASSAGE ──">
                            <option>Hammam Massage + Scrub</option>
                            <option>Body Thai Massage + Scrub</option>
                            <option>Body Massage + Scrub + Jacuzzi</option>
                            <option>Thai Massage + Jacuzzi</option>
                            <option>Four Hand Massage + Jacuzzi</option>
                            <option>Four Hand Massage + Jacuzzi + Scrub</option>
                          </optgroup>
                          <optgroup label="── 3. REJUVENATE AND RELAXING ──">
                            <option>Lomi Lomi Massage</option>
                            <option>Sandalwood Scrub + Massage</option>
                            <option>Special Couple Treatment</option>
                            <option>Couple Treatment + Jacuzzi</option>
                            <option>Heritage Ladies Special</option>
                            <option>French Aroma Massage</option>
                            <option>Swedish Massage</option>
                            <option>Deep Tissue Massage</option>
                            <option>Baliness Massage</option>
                            <option>Jasmin Scrub</option>
                            <option>Mud Wraps</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Message / Special Requests
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share your preferred date, timing, or specific therapy requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#D4A373]" />
                      <span>Send Message to Concierge</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE WAKAD PUNE GOOGLE MAP SECTION ── */}
      <section className="pt-2 pb-12 md:pt-4 md:pb-16 relative">
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
                    NEW Sara Spa Wakad Pune Location Map
                  </h4>
                  <p className="text-xs text-[#6B5A4E]">Office No 213 Wbiz Next To Ginger Hotel Bhumkar Chowk Pune Wakad - 411057</p>
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
                title="NEW Sara Spa Wakad Pune Google Maps Location"
                src={`https://maps.google.com/maps?q=NEW%20Sara%20Spa%20Wakad%20Pune%20-%20Best%20Massage%20Spa%20In%20Wakad%20Office%20No%20213%20Wbiz%20Next%20To%20Ginger%20Hotel%20Bhumkar%20Chowk%20Pune%20Wakad%20411057&t=${mapType === "satellite" ? "k" : "m"}&z=16&ie=UTF8&iwloc=&output=embed`}
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
