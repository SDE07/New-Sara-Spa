import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultService = "Signature Experience" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    date: '',
    time: '14:00',
    guests: '1 Person',
    notes: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg md:max-w-xl my-6 sm:my-8 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 bg-[#FAF7F2] border border-[#E5D6C4] shadow-2xl shadow-black/40 text-[#2D241E] max-h-[calc(100vh-3.5rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F0E6DA] hover:bg-[#E5D6C4] text-[#6B5A4E] hover:text-[#2D241E] transition-colors cursor-pointer z-10"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#EAE0D3] border border-[#C59B6D] text-[#8C6A43] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-serif-luxury font-bold text-[#2D241E]">Reservation Confirmed</h3>
            <p className="text-sm text-[#6B5A4E] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#8C6A43] font-bold">{formData.name}</span>. Your sanctuary session at Sara Spa is reserved. We look forward to welcoming you.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="space-y-1.5 mb-5 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-[#E5D6C4] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6A43]">
                <Sparkles className="w-3.5 h-3.5 text-[#B07D54]" />
                <span>Sanctuary Reservation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#2D241E] leading-tight">
                Book Your Sara Spa Moment
              </h2>
              <p className="text-xs sm:text-sm text-[#6B5A4E] leading-relaxed">
                Select your preferred treatment, date and time for a serene escape.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <input
                      type="text"
                      required
                      placeholder="Sophia Laurent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/90 border border-[#E5D6C4] rounded-xl text-sm text-[#2D241E] placeholder-[#9E8A7C] shadow-xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98343 66828"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/90 border border-[#E5D6C4] rounded-xl text-sm text-[#2D241E] placeholder-[#9E8A7C] shadow-xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email & Select Treatment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <input
                      type="email"
                      required
                      placeholder="sophia@sanctuary.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/90 border border-[#E5D6C4] rounded-xl text-sm text-[#2D241E] placeholder-[#9E8A7C] shadow-xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1.5">
                    Select Treatment
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 bg-white/90 border border-[#E5D6C4] rounded-xl text-sm text-[#2D241E] shadow-xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all cursor-pointer truncate"
                  >
                    <optgroup label="── 1. DRY MASSAGES ──">
                      <option value="Head Massages (Indian Champ)">Head Massages (Indian Champ)</option>
                      <option value="Foot Reflexology">Foot Reflexology</option>
                      <option value="Back Massages">Back Massages</option>
                      <option value="Thai Dry Stretch Massage">Thai Dry Stretch Massage</option>
                    </optgroup>
                    <optgroup label="── 2. SIGNATURE MASSAGE ──">
                      <option value="Hammam Massage + Scrub">Hammam Massage + Scrub</option>
                      <option value="Body Thai Massage + Scrub">Body Thai Massage + Scrub</option>
                      <option value="Body Massage + Scrub + Jacuzzi">Body Massage + Scrub + Jacuzzi</option>
                      <option value="Thai Massage + Jacuzzi">Thai Massage + Jacuzzi</option>
                      <option value="Four Hand Massage + Jacuzzi">Four Hand Massage + Jacuzzi</option>
                      <option value="Four Hand Massage + Jacuzzi + Scrub">Four Hand Massage + Jacuzzi + Scrub</option>
                    </optgroup>
                    <optgroup label="── 3. REJUVENATE AND RELAXING ──">
                      <option value="Lomi Lomi Massage">Lomi Lomi Massage</option>
                      <option value="Sandalwood Scrub + Massage">Sandalwood Scrub + Massage</option>
                      <option value="Special Couple Treatment">Special Couple Treatment</option>
                      <option value="Couple Treatment + Jacuzzi">Couple Treatment + Jacuzzi</option>
                      <option value="Heritage Ladies Special">Heritage Ladies Special</option>
                      <option value="French Aroma Massage">French Aroma Massage</option>
                      <option value="Swedish Massage">Swedish Massage</option>
                      <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                      <option value="Baliness Massage">Baliness Massage</option>
                      <option value="Jasmin Scrub">Jasmin Scrub</option>
                      <option value="Mud Wraps">Mud Wraps</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 3: Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/90 border border-[#E5D6C4] rounded-xl text-sm text-[#2D241E] shadow-xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-white/90 border border-[#E5D6C4] rounded-xl text-sm text-[#2D241E] shadow-xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all cursor-pointer"
                    >
                      <option value="10:00">10:00 AM — Morning Serenity</option>
                      <option value="12:00">12:00 PM — Midday Renewal</option>
                      <option value="14:00">02:00 PM — Afternoon Sanctuary</option>
                      <option value="16:00">04:00 PM — Twilight Restore</option>
                      <option value="18:00">06:00 PM — Evening Calm</option>
                      <option value="20:00">08:00 PM — Night Hydrotherapy</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#2D241E]/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Appointment →</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
