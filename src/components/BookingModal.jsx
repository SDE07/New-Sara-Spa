import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, Calendar, Clock, User, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, defaultService = "Signature Experience" }) {
  const navigate = useNavigate();
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
        <title>New Appointment Reservation</title>
        <style>
          body { margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; color: #0F172A; }
          .btn-primary { background-color: #0F172A; color: #FFFFFF !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          .btn-whatsapp { background-color: #059669; color: #FFFFFF !important; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
          @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; padding: 12px 6px !important; }
            .email-card { width: 100% !important; border-radius: 8px !important; }
            .header-padding { padding: 20px 16px !important; }
            .content-padding { padding: 18px 16px !important; }
          }
        </style>
      </head>
      <body>
        <!-- Hidden Preheader for Gmail Primary Tab -->
        <div style="display: none; font-size: 1px; color: #f8fafc; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all;">
          New appointment booking from ${formData.name} (${formData.phone || "No phone"}) on ${formData.date} at ${formData.time}.
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="background-color: #F8FAFC; padding: 28px 12px;">
          <tr>
            <td align="center">
              
              <!-- Main Transactional Card -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-card" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid #E2E8F0;">

                <!-- ── 1. CLEAN HEADER WITH BRAND LOGO ── -->
                <tr>
                  <td class="header-padding" style="padding: 24px 28px; border-bottom: 1px solid #E2E8F0; background-color: #FFFFFF;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="vertical-align: middle; width: 52px;">
                          <img src="https://iili.io/n9ydFZN.png" alt="NEW SARA SPA" width="48" height="48" style="display: block; width: 48px; height: 48px; border-radius: 50%; border: 1px solid #E2E8F0;" />
                        </td>
                        <td style="vertical-align: middle; padding-left: 14px;">
                          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 700; color: #8C6A43; text-transform: uppercase; letter-spacing: 1px;">
                            NEW SARA SPA &bull; Appointment Desk
                          </div>
                          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 18px; font-weight: 700; color: #0F172A; margin-top: 2px;">
                            New Appointment Reservation
                          </div>
                        </td>
                        <td align="right" style="vertical-align: middle;">
                          <span style="background-color: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                            ● Online Booking
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ── 2. CONTENT BODY ── -->
                <tr>
                  <td class="content-padding" style="padding: 24px 28px;">
                    <p style="margin: 0 0 16px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #334155; line-height: 1.5;">
                      A new appointment reservation has been submitted through the website booking form:
                    </p>

                    <!-- Reservation Details Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; margin-bottom: 20px;">
                      
                      <!-- Name -->
                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 11px 14px; width: 130px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Guest Name
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 700; color: #0F172A;">
                          ${formData.name}
                        </td>
                      </tr>

                      <!-- Phone -->
                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Phone Number
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600;">
                          ${formData.phone ? `<a href="tel:${formData.phone}" style="color: #0F172A; text-decoration: none; font-weight: 700;">${formData.phone}</a>` : '<span style="color: #94A3B8;">Not provided</span>'}
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Email Address
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600;">
                          <a href="mailto:${formData.email}" style="color: #0284C7; text-decoration: none;">${formData.email}</a>
                        </td>
                      </tr>

                      <!-- Therapy -->
                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Selected Therapy
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 600; color: #0F172A;">
                          ${formData.service}
                        </td>
                      </tr>

                      <!-- Slot -->
                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Reserved Slot
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13.5px; font-weight: 700; color: #0F172A;">
                          ${formData.date} at ${formData.time}
                        </td>
                      </tr>

                      ${formData.guests ? `
                      <!-- Guests -->
                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Guest Count
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 600; color: #0F172A;">
                          ${formData.guests}
                        </td>
                      </tr>
                      ` : ''}

                      <!-- Timestamp -->
                      <tr>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; color: #64748B;">
                          Booking Time
                        </td>
                        <td style="padding: 11px 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 500; color: #64748B;">
                          ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST
                        </td>
                      </tr>

                    </table>

                    ${formData.notes ? `
                    <!-- Special Notes Container -->
                    <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-left: 3px solid #0F172A; border-radius: 6px; padding: 14px 16px; margin-bottom: 20px;">
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; margin-bottom: 4px;">
                        Special Requests / Notes:
                      </div>
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13.5px; color: #1E293B; line-height: 1.5; white-space: pre-wrap;">
                        ${formData.notes}
                      </div>
                    </div>
                    ` : ''}

                    <!-- ── 3. QUICK ACTION BUTTONS ── -->
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        ${cleanPhone ? `
                        <td style="padding-right: 8px;">
                          <a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(formData.name)},%20thank%20you%20for%20booking%20at%20NEW%20SARA%20SPA%20Wakad.%20We%20have%20received%20your%20appointment%20for%20${encodeURIComponent(formData.service)}%20on%20${encodeURIComponent(formData.date)}%20at%20${encodeURIComponent(formData.time)}." class="btn-whatsapp" target="_blank">
                            💬 WhatsApp Guest
                          </a>
                        </td>
                        <td style="padding-right: 8px;">
                          <a href="tel:${formData.phone}" class="btn-primary">
                            📞 Call Guest
                          </a>
                        </td>
                        ` : ''}
                        <td>
                          <a href="mailto:${formData.email}" style="background-color: #F1F5F9; color: #334155; text-decoration: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; font-size: 13px; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; border: 1px solid #E2E8F0;">
                            ✉️ Reply Email
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- ── 4. FOOTER ── -->
                <tr>
                  <td style="padding: 16px 28px; background-color: #F8FAFC; border-top: 1px solid #E2E8F0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; color: #64748B; text-align: center;">
                    This is an automated operational notification from NEW SARA SPA online booking system.
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const clientName = formData.name;

    try {
      await fetch("https://clientwebsite.blog/email-api/api/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer f6fd8e29605d39b351560af0bd3ed0c6",
        },
        body: JSON.stringify({
          to: "saranewspa@gmail.com",
          from_name: "NEW SARA SPA Alerts",
          reply_to: formData.email ? formData.email.trim() : undefined,
          subject: `[Booking Alert] New Reservation from ${clientName}`,
          body: bookingHtml,
          is_html: true,
        }),
      });
    } catch (err) {
      console.error("Booking email error:", err);
    } finally {
      setLoading(false);
      const bookingData = {
        type: 'booking',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        notes: formData.notes
      };
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: defaultService,
        date: '',
        time: '14:00',
        guests: '1 Person',
        notes: ''
      });
      onClose();
      navigate('/thank-you', { state: bookingData });
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
              Thank you, <span className="text-[#8C6A43] font-bold">{formData.name || "Valued Guest"}</span>. Your sanctuary session at Sara Spa is reserved. We look forward to welcoming you.
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
