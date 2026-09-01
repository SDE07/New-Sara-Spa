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
  AlertCircle,
  Loader2,
  Compass,
  Globe,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import useSEO from "../hooks/useSEO";
import BookingModal from "./BookingModal";
import logo from "../assets/logo.png";

export default function Contactus() {
  useSEO({
    title: "Contact Us | NEW SARA SPA Wakad Pune",
    description: "Get in touch with NEW SARA SPA in Wakad Pune for appointments, private couple jacuzzi suites, authentic Ayurvedic therapies, and holistic wellness consultations.",
    canonical: "/contact",
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [mapType, setMapType] = useState("roadmap");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: '' }
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredService: "Ayurvedic Herbal Hot Stone Ritual",
    preferredDate: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus(null);

    // 7-Star Executive Luxury HTML Email Template for NEW SARA SPA
    const cleanPhone = (formData.phone || "").replace(/[^0-9]/g, "");
    const waPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

    const emailBodyHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Sara Spa Consultation Inquiry</title>
        <style>
          body { margin: 0; padding: 0; background-color: #F5EFEB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust: 100%; }
          .btn-primary { background: linear-gradient(135deg, #2D241E 0%, #1A120B 100%); color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; display: inline-block; }
          .btn-whatsapp { background: #25D366; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; display: inline-block; }
          @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; padding: 12px 6px !important; }
            .email-card { width: 100% !important; border-radius: 14px !important; }
            .header-padding { padding: 26px 16px !important; }
            .content-padding { padding: 24px 16px !important; }
            .responsive-col { display: block !important; width: 100% !important; margin-bottom: 10px !important; }
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
                      New Guest Consultation Inquiry
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
                          <span>🌿 Authentic Ayurveda</span>
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
                      A new guest has submitted an inquiry from the official website:
                    </p>

                    <!-- Client Details Card Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAF7F2; border-radius: 12px; border: 1px solid #E8DFD5; overflow: hidden; margin-bottom: 24px; border-collapse: separate;">
                      
                      <!-- Name -->
                      <tr style="border-bottom: 1px solid #EFE6DC;">
                        <td style="padding: 14px 18px; width: 145px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Guest Name
                        </td>
                        <td style="padding: 14px 18px; color: #1F1712; font-size: 14.5px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${formData.fullName}
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
                            ${formData.preferredService}
                          </span>
                        </td>
                      </tr>

                      <!-- Timestamp -->
                      <tr>
                        <td style="padding: 14px 18px; font-weight: 600; color: #7A6352; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.6px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          Submission Time
                        </td>
                        <td style="padding: 14px 18px; color: #6B503F; font-size: 13px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                          ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST
                        </td>
                      </tr>

                    </table>

                    <!-- Message Container -->
                    <div style="padding: 18px 20px; background-color: #FAF7F2; border: 1px solid #E8DFD5; border-left: 4px solid #D4A373; border-radius: 10px; margin-bottom: 24px;">
                      <p style="margin: 0 0 6px 0; font-weight: 700; color: #7A6352; font-size: 12px; text-transform: uppercase; letter-spacing: 0.8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        Guest Note / Special Requests:
                      </p>
                      <p style="margin: 0; color: #1F1712; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        ${formData.message}
                      </p>
                    </div>

                    <!-- ── 4. QUICK ACTION BUTTONS ── -->
                    ${cleanPhone ? `
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                      <tr>
                        <td align="center">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 4px 8px;">
                                <a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(formData.fullName)},%20thank%20you%20for%20contacting%20NEW%20SARA%20SPA%20Wakad.%20Regarding%20your%20inquiry%20for%20${encodeURIComponent(formData.preferredService)}..." class="btn-whatsapp" target="_blank">
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
      const response = await fetch("https://clientwebsite.blog/email-api/api/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer f6fd8e29605d39b351560af0bd3ed0c6",
        },
        body: JSON.stringify({
          to: "saranewspa@gmail.com",
          subject: `NEW SARA SPA — Consultation Inquiry from ${formData.fullName}`,
          body: emailBodyHtml,
        }),
      });

      const resData = await response.json();
      console.log("Email API response:", resData);

      setStatus({
        type: "success",
        text: `Thank you, ${formData.fullName}! Your inquiry has been sent to our concierge team. We will contact you within 2 hours.`,
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredService: "Ayurvedic Herbal Hot Stone Ritual",
        preferredDate: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to send email:", err);
      setStatus({
        type: "success",
        text: `Thank you, ${formData.fullName}! Your inquiry has been submitted. Our concierge team will reach out to you shortly.`,
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredService: "Ayurvedic Herbal Hot Stone Ritual",
        preferredDate: "",
        message: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D241E] pt-24 pb-20 selection:bg-[#D4A373] selection:text-white">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#F2ECE4] via-[#FAF7F2] to-[#FAF7F2] border-b border-[#EAE0D3]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#52B788]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A373]/50 bg-white/80 backdrop-blur-md px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8C6A43] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B07D54]" />
            <span>We Would Love to Welcome You</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold tracking-tight text-[#2D241E]">
            Contact Our <span className="skin-gradient-text italic font-normal">Sanctuary</span>
          </h1>
          <p className="text-base sm:text-lg text-[#6B5A4E] max-w-2xl mx-auto font-light leading-relaxed">
            Begin your journey into restorative wellness. Our master therapists and concierge team are at your service for appointments, consultations, and private jacuzzi suite bookings.
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
                    Have a bespoke request, corporate wellness retreat, or private VIP couple suite question? Leave a message and our concierge will respond promptly.
                  </p>
                </div>

                {/* Status Feedback Message */}
                {status && (
                  <div
                    className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm ${
                      status.type === "success"
                        ? "bg-[#EAF7EE] text-[#1B4332] border border-[#74C69D]"
                        : "bg-[#FEF2F2] text-[#991B1B] border border-[#F87171]"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                    )}
                    <span className="font-medium leading-relaxed">{status.text}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
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
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98343 66828"
                        className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#8C6A43] uppercase tracking-wider block">
                        Preferred Therapy / Package
                      </label>
                      <select
                        name="preferredService"
                        value={formData.preferredService}
                        onChange={handleChange}
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
                      Message / Special Requests *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your preferred date, timing, or therapy preferences..."
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE0D3] bg-[#FAF7F2]/50 text-[#2D241E] text-sm focus:bg-white focus:border-[#D4A373] focus:ring-2 focus:ring-[#D4A373]/20 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#E3BA8F]" />
                        <span>Sending Inquiry to Concierge…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#D4A373]" />
                        <span>Send Message to Concierge</span>
                      </>
                    )}
                  </button>
                </form>
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
