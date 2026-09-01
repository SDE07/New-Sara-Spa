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
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const cleanPhone = (formData.phone || "").replace(/[^0-9]/g, "");
    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    const bookingHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Sara Spa Online Booking</title>
        <style>
          body { margin: 0; padding: 0; background-color: #F5EFEB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; }
          .btn-primary { background: linear-gradient(135deg, #2D241E 0%, #1A120B 100%); color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block; }
          .btn-whatsapp { background: #25D366; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; display: inline-block; }
          @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; padding: 12px 6px !important; }
            .email-card { width: 100% !important; border-radius: 14px !important; }
            .header-padding { padding: 26px 16px !important; }
            .content-padding { padding: 24px 16px !important; }
          }
        </style>
      </head>
      <body>
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="background-color: #F5EFEB; padding: 36px 12px;">
          <tr>
            <td align="center">
              
              <!-- Main Luxury Card -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-card" style="max-width: 640px; background-color: #ffffff; border-radius: 22px; overflow: hidden; box-shadow: 0 16px 50px rgba(45,36,30,0.14); border: 1px solid #E8DFD5;">

                <!-- ── 1. LUXURY GOLD HEADER ── -->
                <tr>
                  <td align="center" class="header-padding" style="background: linear-gradient(180deg, #1A120B 0%, #2A1D13 100%); padding: 36px 28px; text-align: center; border-bottom: 3px solid #D4A373; position: relative;">
                    
                    <!-- Official Brand Logo Medallion -->
                    <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto 16px auto;">
                      <tr>
                        <td align="center" style="background: #2D241E; border: 1.5px solid #D4A373; border-radius: 9999px; padding: 6px 22px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width: 28px; height: 28px; background: linear-gradient(135deg, #E3BA8F 0%, #B07D54 100%); border-radius: 50%; text-align: center; vertical-align: middle; color: #1A120B; font-family: Georgia, serif; font-size: 14px; font-weight: 900; line-height: 28px;">
                                ✦
                              </td>
                              <td style="color: #FAF7F2; font-family: 'Times New Roman', Georgia, serif; font-size: 15px; font-weight: 800; letter-spacing: 3px; padding-left: 10px; vertical-align: middle; text-transform: uppercase;">
                                NEW SARA SPA
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <h1 style="color: #FFFFFF; margin: 6px 0 6px 0; font-family: 'Times New Roman', Georgia, serif; font-size: 24px; font-weight: 700; letter-spacing: 0.8px; line-height: 1.25;">
                      Online Appointment Reservation
                    </h1>
                    
                    <p style="color: #D4A373; margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2.8px; font-weight: 600;">
                      Sanctuary of Holistic Wellness • Wakad, Pune
                    </p>
                  </td>
                </tr>

                <!-- ── 2. STAT PILLS BAR ── -->
                <tr>
                  <td style="background-color: #FAF7F2; padding: 12px 20px; border-bottom: 1px solid #EDE4D9; text-align: center;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="font-size: 11px; color: #6B503F; font-weight: 600; letter-spacing: 0.5px;">
                          <span>⭐ 4.6★ Rated</span>
                          <span style="color: #D4A373; margin: 0 8px;">•</span>
                          <span>🌿 Instant Booking</span>
                          <span style="color: #D4A373; margin: 0 8px;">•</span>
                          <span>🕒 Open 24/7 Hours</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ── 3. CONTENT BODY ── -->
                <tr>
                  <td class="content-padding" style="padding: 36px 30px; background-color: #ffffff;">
                    
                    <p style="margin: 0 0 22px 0; color: #2D241E; font-size: 15px; font-weight: 600; line-height: 1.5;">
                      A new spa appointment has been reserved through the website booking modal:
                    </p>

                    <!-- Reservation Details Card Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAF7F2; border-radius: 12px; border: 1px solid #E8DFD5; overflow: hidden; margin-bottom: 24px; border-collapse: separate;">
                      
                      <!-- Name -->
                      <tr style="border-bottom: 1px solid #EFE6DC;">
                        <td style="padding: 14px 18px; width: 145px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Guest Name
                        </td>
                        <td style="padding: 14px 18px; color: #1F1712; font-size: 14.5px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${formData.name}
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr style="border-bottom: 1px solid #EFE6DC;">
                        <td style="padding: 14px 18px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Email Address
                        </td>
                        <td style="padding: 14px 18px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          <a href="mailto:${formData.email}" style="color: #8C6A43; text-decoration: none; font-weight: 600;">${formData.email}</a>
                        </td>
                      </tr>

                      <!-- Phone -->
                      <tr style="border-bottom: 1px solid #EFE6DC;">
                        <td style="padding: 14px 18px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Phone Number
                        </td>
                        <td style="padding: 14px 18px; font-size: 14.5px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${formData.phone ? `<a href="tel:${formData.phone}" style="color: #1F1712; text-decoration: none; font-weight: 600;">${formData.phone}</a>` : '<span style="color: #998577;">Not provided</span>'}
                        </td>
                      </tr>

                      <!-- Therapy -->
                      <tr style="border-bottom: 1px solid #EFE6DC;">
                        <td style="padding: 14px 18px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Selected Therapy
                        </td>
                        <td style="padding: 14px 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          <span style="display: inline-block; background-color: #EBF5F0; color: #1E4D39; border: 1px solid #B8DEC9; padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 600;">
                            ${formData.service}
                          </span>
                        </td>
                      </tr>

                      <!-- Date & Time -->
                      <tr style="border-bottom: 1px solid #EFE6DC;">
                        <td style="padding: 14px 18px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Date & Time
                        </td>
                        <td style="padding: 14px 18px; color: #1F1712; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${formData.date} at ${formData.time}
                        </td>
                      </tr>

                      <!-- Timestamp -->
                      <tr>
                        <td style="padding: 14px 18px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Submission Time
                        </td>
                        <td style="padding: 14px 18px; color: #6B5A4E; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST
                        </td>
                      </tr>

                    </table>

                    <!-- ── 4. QUICK ACTION BUTTONS ── -->
                    ${cleanPhone ? `
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 10px; margin-bottom: 12px;">
                      <tr>
                        <td align="center">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 4px 8px;">
                                <a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(formData.name)},%20thank%20you%20for%20booking%20at%20NEW%20SARA%20SPA%20Wakad.%20We%20have%20received%20your%20appointment%20for%20${encodeURIComponent(formData.service)}%20on%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}." class="btn-whatsapp" target="_blank">
                                  💬 WhatsApp Guest
                                </a>
                              </td>
                              <td style="padding: 4px 8px;">
                                <a href="tel:${formData.phone}" class="btn-primary">
                                  📞 Call Guest
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    ` : ''}

                  </td>
                </tr>

                <!-- ── 5. LUXURY FOOTER ── -->
                <tr>
                  <td align="center" style="background-color: #FAF7F2; padding: 24px 24px; text-align: center; border-top: 1px solid #EDE4D9;">
                    <p style="margin: 0 0 6px 0; font-size: 12px; color: #2D241E; font-weight: 700;">
                      NEW SARA SPA — A Sanctuary of Holistic Wellness
                    </p>
                    <p style="margin: 0 0 8px 0; font-size: 11px; color: #6B503F; line-height: 1.5;">
                      Office No 213 Wbiz Next To Ginger Hotel Bhumkar Chowk Pune Wakad - 411057
                    </p>
                    <p style="margin: 0 0 14px 0; font-size: 11px; color: #B07D54; font-weight: 600;">
                      Direct Helpline: +91 98343 66828 • Email: saranewspa@gmail.com
                    </p>

                    <!-- Official Website Link Button -->
                    <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                      <tr>
                        <td align="center">
                          <a href="https://saraspa.com" style="background: #2D241E; color: #E3BA8F; border: 1px solid #D4A373; border-radius: 9999px; padding: 7px 20px; font-size: 11px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 1.5px; display: inline-block;">
                            🌐 Visit Official Website →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    try {
      await fetch("https://clientwebsite.blog/email-api/api/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer f6fd8e29605d39b351560af0bd3ed0c6",
        },
        body: JSON.stringify({
          to: "saranewspa@gmail.com",
          subject: `NEW SARA SPA — Online Booking from ${formData.name} (${formData.service})`,
          body: bookingHtml,
        }),
      });
    } catch (err) {
      console.error("Booking email error:", err);
    } finally {
      setLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-[430px] my-auto rounded-xl p-6 sm:p-7 bg-[#FAF7F2] border border-[#E5D6C4] shadow-2xl shadow-black/50 text-[#2D241E] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md bg-[#F0E6DA] hover:bg-[#E5D6C4] text-[#6B5A4E] hover:text-[#2D241E] transition-colors cursor-pointer z-10"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EAE0D3] border border-[#C59B6D] text-[#8C6A43] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-[#2D241E]">Reservation Confirmed</h3>
            <p className="text-xs sm:text-sm text-[#6B5A4E] max-w-xs mx-auto leading-relaxed">
              Thank you, <span className="text-[#8C6A43] font-bold">{formData.name}</span>. Your sanctuary session at Sara Spa is reserved. We look forward to welcoming you.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="space-y-1 mb-5 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-[#E5D6C4] text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#8C6A43]">
                <Sparkles className="w-3 h-3 text-[#B07D54]" />
                <span>Sanctuary Reservation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#2D241E] leading-tight">
                Book Your Sara Spa Moment
              </h2>
              <p className="text-[11px] sm:text-xs text-[#6B5A4E] leading-relaxed">
                Select your preferred treatment, date and time for a serene escape.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white/95 border border-[#E5D6C4] rounded-lg text-xs sm:text-sm text-[#2D241E] placeholder-[#9E8A7C] shadow-2xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98343 66828"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white/95 border border-[#E5D6C4] rounded-lg text-xs sm:text-sm text-[#2D241E] placeholder-[#9E8A7C] shadow-2xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul.sharma@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-white/95 border border-[#E5D6C4] rounded-lg text-xs sm:text-sm text-[#2D241E] placeholder-[#9E8A7C] shadow-2xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all"
                  />
                </div>
              </div>

              {/* Select Treatment */}
              <div>
                <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1">
                  Select Treatment
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white/95 border border-[#E5D6C4] rounded-lg text-xs sm:text-sm text-[#2D241E] shadow-2xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all cursor-pointer truncate"
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

              {/* Row: Date & Time */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-8 pr-2 py-2.5 bg-white/95 border border-[#E5D6C4] rounded-lg text-xs text-[#2D241E] shadow-2xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#5C4D44] mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7364]" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-8 pr-2 py-2.5 bg-white/95 border border-[#E5D6C4] rounded-lg text-xs text-[#2D241E] shadow-2xs focus:outline-none focus:border-[#B07D54] focus:ring-2 focus:ring-[#D4A373]/20 transition-all cursor-pointer"
                    >
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-5 rounded-lg bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.18em] shadow-lg shadow-[#2D241E]/20 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? (
                    <span>Confirming Appointment…</span>
                  ) : (
                    <span>Confirm Appointment →</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
