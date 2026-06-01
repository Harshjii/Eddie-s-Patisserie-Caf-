"use client";

import { useState } from "react";
import { MessageCircle, Sparkles, AlertCircle, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cakeType: "Fondant Designer Cake",
    flavor: "Chocolate Fudge Overload",
    weight: "1.0 kg",
    deliveryDate: "",
    deliveryAddress: "",
    occasion: "Birthday Party",
    specialInstructions: "",
  });

  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile WhatsApp message
    const message = `✨ *New Custom Cake Inquiry* ✨
-----------------------------
👤 *Customer Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
📧 *Email Address:* ${formData.email}

🎂 *Cake Details:*
• *Cake Type:* ${formData.cakeType}
• *Flavor Choice:* ${formData.flavor}
• *Target Weight:* ${formData.weight}
• *Occasion:* ${formData.occasion}

🚚 *Delivery Details:*
• *Delivery Date:* ${formData.deliveryDate}
• *Delivery Address:* ${formData.deliveryAddress}

📝 *Special Instructions:*
${formData.specialInstructions || "None specified"}
${fileName ? `🖼️ *Attached Reference Sketch:* ${fileName} (Ready to send)` : ""}
-----------------------------
🧁 *Eddie's Patisserie & Café Kanpur*`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-cream-50 min-h-screen pb-24">
      {/* Page Hero */}
      <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center bg-chocolate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-chocolate-950/80" />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1 className="text-4xl font-serif text-cream-50 mb-2">Bespoke Inquiries</h1>
          <p className="text-xs font-sans text-cream-200/80 uppercase tracking-widest">
            Design your dream cake & complete order on WhatsApp
          </p>
        </div>
      </section>

      {/* Main Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="glass-card bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/10 shadow-xl">
          
          {/* Header Info */}
          <div className="flex flex-col items-center text-center mb-10 pb-8 border-b border-cream-200">
            <div className="w-10 h-10 rounded-full bg-gold-100/50 text-gold-600 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <h2 className="text-2xl font-serif text-chocolate-900 mb-2">
              Custom Cake Inquiry Form
            </h2>
            <p className="text-xs text-chocolate-600/70 max-w-md leading-relaxed">
              Fill in your celebration specifications below. When you click send, we will compile your specifications and open WhatsApp to finalize design sketches, pricing, and order confirmations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Customer Details */}
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-600 mb-4 flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center text-[10px] text-gold-600">1</span>
                <span>Contact Information</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Cake Specifications */}
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-600 mb-4 flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center text-[10px] text-gold-600">2</span>
                <span>Cake Details</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Cake Style *</label>
                  <select
                    name="cakeType"
                    value={formData.cakeType}
                    onChange={handleChange}
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                  >
                    <option>Fondant Designer Cake</option>
                    <option>Buttercream Floral Cake</option>
                    <option>Photo Edible Cake</option>
                    <option>Semi-Naked Rustic Cake</option>
                    <option>Multi-Tier Wedding Cake</option>
                    <option>Custom Brownie Tower</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Flavor Choice *</label>
                  <select
                    name="flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                  >
                    <option>Chocolate Fudge Overload</option>
                    <option>Red Velvet Cheese Cream</option>
                    <option>Lotus Biscoff Premium</option>
                    <option>Mango Pistachio Custard</option>
                    <option>Fresh Vanilla Raspberry</option>
                    <option>Hazelnut Praline Ganache</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Target Weight *</label>
                  <select
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-gold-500 appearance-none cursor-pointer"
                  >
                    <option>1.0 kg</option>
                    <option>1.5 kg</option>
                    <option>2.0 kg</option>
                    <option>3.0 kg + (Multi-Tier)</option>
                    <option>4.0 kg + (Multi-Tier)</option>
                  </select>
                </div>
                <div className="flex flex-col sm:col-span-3">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Occasion *</label>
                  <input
                    type="text"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    placeholder="e.g. Dad's 50th Birthday, Wedding Reception, 1st Anniversary"
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Logistics */}
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-600 mb-4 flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center text-[10px] text-gold-600">3</span>
                <span>Logistics</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Delivery Date *</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Delivery Address in Kanpur *</label>
                  <input
                    type="text"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    placeholder="Flat/House no, Street name, Area, Kanpur"
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Step 4: Special Request & File Upload */}
            <div>
              <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-600 mb-4 flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center text-[10px] text-gold-600">4</span>
                <span>Attachments & Special Requests</span>
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {/* Image upload preview row */}
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Reference Image Sketch</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gold-500/15 border-dashed rounded-xl cursor-pointer bg-cream-50/50 hover:bg-cream-100 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FileText className="w-8 h-8 text-gold-500 mb-2" />
                        <p className="text-xs font-sans text-chocolate-850">
                          {fileName ? (
                            <span className="font-semibold text-gold-600">{fileName}</span>
                          ) : (
                            <span>Click to upload a reference photo (JPEG, PNG)</span>
                          )}
                        </p>
                        <p className="text-[10px] text-chocolate-400 font-sans mt-1">Max file size: 5MB</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-widest text-chocolate-700 mb-2">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Enter details like eggless customization adjustments, color theme palette, message banner texts on cake board, etc."
                    className="bg-cream-50 text-chocolate-900 border border-gold-500/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Note & CTA Button */}
            <div className="pt-6 border-t border-cream-200 space-y-4">
              <div className="flex items-start space-x-3 text-xs text-chocolate-600/80 bg-gold-100/30 p-4 rounded-xl border border-gold-500/5">
                <AlertCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  **Note:** Clicking order compiles these specifications and opens a chat directly with **Eddie&apos;s Patisserie & Café** kitchen. You can send the reference image file inside the WhatsApp window once it launches.
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-sans font-semibold text-sm uppercase tracking-widest transition-all shadow-md shadow-green-500/10 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white/10" />
                <span>Submit Inquiry to WhatsApp</span>
              </button>
            </div>
          </form>

          {submitted && (
            <p className="text-xs text-green-600 font-sans text-center mt-4 animate-bounce">
              Inquiry successfully generated! Re-directing/launching WhatsApp...
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
