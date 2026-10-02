import { useState } from 'react';
import { X, CheckCircle2, Phone, Building2, Send } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Multifamily / HOA',
    urgency: 'Same-Day Dispatch',
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E0E0E0] rounded-[10px] max-w-[540px] w-full p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#6B6B6B] hover:text-[#080808] hover:bg-[#F5F5F5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#146EF5]"></span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#3B4146]">
                DIRECT DISPATCH INTAKE
              </span>
            </div>

            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#080808] tracking-tight mb-2">
              Request a Priority Callback
            </h3>

            <p className="text-[14px] text-[#6B6B6B] leading-relaxed mb-6">
              Connect directly with Ironwood dispatch for commercial, multifamily, boiler, and hot-water infrastructure service.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-mono text-[#3B4146] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E0E0E0] bg-[#F5F5F5] focus:bg-white focus:border-[#146EF5] focus:outline-none text-[14px] text-[#080808] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-mono text-[#3B4146] uppercase tracking-wider mb-1.5">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(949) 555-0199"
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E0E0E0] bg-[#F5F5F5] focus:bg-white focus:border-[#146EF5] focus:outline-none text-[14px] text-[#080808] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-mono text-[#3B4146] uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E0E0E0] bg-[#F5F5F5] focus:bg-white focus:border-[#146EF5] focus:outline-none text-[14px] text-[#080808] transition-colors"
                  >
                    <option value="Multifamily / HOA">Multifamily / HOA</option>
                    <option value="Apartment Complex">Apartment Complex</option>
                    <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                    <option value="School / College / Institutional">School / College / Institutional</option>
                    <option value="Manufacturing / Industrial">Manufacturing / Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-mono text-[#3B4146] uppercase tracking-wider mb-1.5">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E0E0E0] bg-[#F5F5F5] focus:bg-white focus:border-[#146EF5] focus:outline-none text-[14px] text-[#080808] transition-colors font-medium text-[#146EF5]"
                  >
                    <option value="Immediate Emergency">24/7 Immediate Emergency</option>
                    <option value="Same-Day Dispatch">Same-Day Priority</option>
                    <option value="Scheduled Maintenance / Bid">Scheduled Maintenance / Bid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-mono text-[#3B4146] uppercase tracking-wider mb-1.5">
                  Brief System / Issue Overview
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="e.g. Commercial boiler temperature drop, 80-unit apartment domestic hot water recirculating pump issue..."
                  className="w-full px-3.5 py-2.5 rounded-[6px] border border-[#E0E0E0] bg-[#F5F5F5] focus:bg-white focus:border-[#146EF5] focus:outline-none text-[14px] text-[#080808] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#146EF5] text-white font-semibold text-[15px] rounded-[6px] flex items-center justify-center gap-2 btn-wipe shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Request to Dispatch</span>
                </button>
              </div>

              <div className="text-center pt-2 space-y-1">
                <p className="text-[12px] text-[#6B6B6B]">
                  For urgent emergency assistance, you may{' '}
                  <a href="tel:18774847575" className="text-[#146EF5] font-bold hover:underline">
                    Call 24/7 Dispatch
                  </a>
                  {' '}or{' '}
                  <a href="mailto:seth@ironwoodplumbing.com" className="text-[#146EF5] font-bold hover:underline">
                    Email Dispatch
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 bg-[#146EF5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#146EF5]" />
            </div>

            <h3 className="text-[24px] font-bold text-[#080808] mb-2">
              Callback Dispatched
            </h3>

            <p className="text-[15px] text-[#3B4146] max-w-[400px] mx-auto mb-6">
              Thank you, {formData.name || 'valued client'}. Your {formData.urgency.toLowerCase()} request for {formData.propertyType} has been routed to our Southern California dispatch queue.
            </p>

            <div className="p-4 bg-[#F5F5F5] rounded-[6px] border border-[#E0E0E0] text-left max-w-[360px] mx-auto mb-6 text-[13px] space-y-1">
              <div>
                <span className="text-[#6B6B6B]">Target Phone:</span>{' '}
                <span className="font-semibold text-[#080808]">{formData.phone || 'Direct line'}</span>
              </div>
              <div>
                <span className="text-[#6B6B6B]">Priority Level:</span>{' '}
                <span className="font-semibold text-[#146EF5]">{formData.urgency}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#080808] text-white text-[14px] font-semibold rounded-[6px] hover:bg-[#146EF5] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
