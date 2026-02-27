import { MapPin, Phone, Mail } from "lucide-react";
import { departmentInfo } from "@/data/departmentData";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Get in Touch</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Contact Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="section-header">
                <p className="section-label">Reach Us</p>
                <h2 className="section-title">Department Address</h2>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 mb-8">
                <p className="flex items-start gap-3 text-sm text-muted-foreground font-body">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {departmentInfo.address}
                </p>
                <p className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  {departmentInfo.phone}
                </p>
                <p className="flex items-center gap-3 text-sm text-muted-foreground font-body">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  {departmentInfo.email}
                </p>
              </div>

              <div className="section-header">
                <p className="section-label">Key Contacts</p>
                <h2 className="section-title">Key Personnel</h2>
              </div>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm font-body">
                  <tbody>
                    {[
                      { name: "Dr. Sudipta Sahana", role: "Head of Department", email: "sudipta.sahana@uem.edu.in" }
                    ].map((c) => (
                      <tr key={c.name} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 font-medium text-foreground">{c.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{c.role}</td>
                        <td className="px-4 py-3 text-primary">{c.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="section-header">
                <p className="section-label">Send a Message</p>
                <h2 className="section-title">Contact Form</h2>
              </div>
              {submitted ? (
                <div className="bg-success/10 border border-success/20 rounded-lg p-6 text-center">
                  <p className="text-success font-semibold font-body">Thank you! Your message has been sent.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-4"
                >
                  {[
                    { label: "Full Name", name: "name", type: "text" },
                    { label: "Email Address", name: "email", type: "email" },
                    { label: "Subject", name: "subject", type: "text" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-foreground mb-1 font-body">
                        {field.label} <span className="text-destructive">*</span>
                      </label>
                      <input
                        type={field.type}
                        required
                        className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 font-body">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-light transition-colors font-body"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
