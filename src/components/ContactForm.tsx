import React, { useState } from "react";

import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { TextArea } from "./ui/TextArea";
import { cn } from "../Utils/cn";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex justify-center items-center w-full px-4 sm:px-6 py-16 md:py-20" id="contact">
      <div className="w-full max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Get In <span className="text-[#d1b069]">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl">
            Have a project in mind? Let's bring your vision to life!
          </p>
          <div className="h-1 w-24 bg-[#d1b069] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <LabelInputContainer>
                <Label htmlFor="firstName" className="text-white text-sm sm:text-base md:text-lg font-medium">
                  First Name
                </Label>
                <Input 
                  id="firstName" 
                  placeholder="John" 
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName" className="text-white text-sm sm:text-base md:text-lg font-medium">
                  Last Name
                </Label>
                <Input 
                  id="lastName" 
                  placeholder="Doe" 
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </LabelInputContainer>
            </div>

            {/* Email Field */}
            <LabelInputContainer>
              <Label htmlFor="email" className="text-white text-sm sm:text-base md:text-lg font-medium">
                Email Address
              </Label>
              <Input 
                id="email" 
                placeholder="john.doe@example.com" 
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            {/* Phone Field */}
            <LabelInputContainer>
              <Label htmlFor="phone" className="text-white text-sm sm:text-base md:text-lg font-medium">
                Phone Number
              </Label>
              <Input 
                id="phone" 
                placeholder="+91-9999999999" 
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            {/* Message Field */}
            <LabelInputContainer>
              <Label htmlFor="message" className="text-white text-sm sm:text-base md:text-lg font-medium">
                Your Message
              </Label>
              <TextArea 
                id="message"
                rows={5} 
                cols={15}
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            {/* Submit Button */}
            <button
              className="bg-[#d1b069] relative group/btn w-full text-white rounded-lg h-12 md:h-14 font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl hover:shadow-[#d1b069]/50 hover:bg-[#b8985a] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              type="submit"
            >
              <span className="flex items-center justify-center gap-2">
                Send Message
                <span className="group-hover/btn:translate-x-1 transition-transform duration-300">&rarr;</span>
              </span>
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#d1b069] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px left-1/4 bg-gradient-to-r from-transparent via-[#d1b069] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
