"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const privacyData = [
    {
      title: "Introduction",
      content: "VX Software Solutions Pvt. Ltd. (\"we\", \"our\", or \"us\") is committed to safeguarding the privacy of users who interact with our V Remind product across all platforms (Web, Android, and iOS). This policy outlines how we collect, use, disclose, and protect your personal information."
    },
    {
      title: "1. Information We Collect",
      content: "We collect the following categories of data:",
      bullets: [
        {
          subtitle: "Personal Identifiable Information (PII):",
          items: ["Student/Parent/Teacher name, phone number, email ID, profile photo", "School name, admin details, class, section, etc."]
        },
        {
          subtitle: "Usage Data:",
          items: ["Login times, pages viewed, features used"]
        },
        {
          subtitle: "Device Information:",
          items: ["Device model, operating system, IP address, browser type (web), device identifier (mobile)"]
        },
        {
          subtitle: "Location Data (if permitted):",
          items: ["For transport and geo-tracking features"]
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      bullets: [
        {
          items: [
            "To create and manage user accounts",
            "To deliver key features such as attendance, timetable, fee details, and academic reporting",
            "To send alerts/notifications via SMS, WhatsApp, email",
            "To generate analytics for academic or administrative improvements",
            "To ensure user authentication and security"
          ]
        }
      ]
    },
    {
      title: "3. Data Sharing and Disclosure",
      content: "We do not sell your personal data. We may share it with:",
      bullets: [
        {
          items: [
            "School authorities and staff (internally)",
            "Payment gateways for processing transactions",
            "Third-party services strictly bound by confidentiality, for features like SMS/email"
          ]
        }
      ]
    },
    {
      title: "4. Data Retention",
      content: "We retain user data for as long as the school maintains an active subscription. Upon deactivation, data may be archived or deleted as per request."
    },
    {
      title: "5. Children's Privacy",
      content: "Our app is meant for educational institutions. Parental consent is considered obtained via school registration. No direct collection is done from children under 13 without institutional consent."
    },
    {
      title: "6. Security Measures",
      content: "We implement robust encryption, firewall, and access control measures to protect your data."
    },
    {
      title: "7. User Rights",
      content: "Users have the right to:",
      bullets: [
        {
          items: [
            "Access, update, or delete their profile",
            "Withdraw consent",
            "Request data portability or correction via school admin"
          ]
        }
      ]
    },
    {
      title: "8. Platform-Specific Permissions",
      bullets: [
        {
          subtitle: "Web:",
          items: ["Uses cookies and session-based login"]
        },
        {
          subtitle: "Android/iOS:",
          items: ["May request camera, storage, location, notification permissions for specific features"]
        }
      ]
    },
    {
      title: "9. Policy Updates",
      content: "We may update this Privacy Policy periodically. Changes will be posted in-app and on our website. Continued use implies consent."
    },
    {
      title: "10. Contact Us",
      content: "For questions or concerns about your privacy:",
      contact: {
        email: "Remind@vxsoftwaresolutions.com",
        phone: "*************",
        address: "VX Software Solutions Pvt. Ltd\n102, Namas Building, #945 Road No - 48,\nAyyappa Society, Madhapur\nHyderabad 500081"
      }
    }
  ];

 


  const Contact = () => (
    <div className="w-full bg-[#121015] border border-[#232323] rounded-xl p-6 mb-6">
      <h3 className="text-[#1423C9] text-xl font-semibold mb-4">Get in Touch</h3>
      <p className="text-gray-300">Have questions about our privacy practices? Contact us anytime.</p>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#0C0C0C] text-white">
      <Navbar />
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 px-3 sm:px-6 lg:px-8 xl:px-4">
        {/* Privacy Policy Header */}
        <div className="w-full bg-[#1423C933] border-[0.8px] border-[#1423C9] px-3 sm:px-6 py-6 sm:py-9 rounded-xl mt-6 sm:mt-8">
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl uppercase font-semibold text-center">
            Privacy Policy
          </p>
          <p className="font-sans text-sm sm:text-base text-center mt-2 opacity-80">
            Last Updated: December 2024
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {privacyData.map((section, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 w-full bg-[#121015] border-[0.8px] border-[#232323] px-3 sm:px-4 lg:px-6 py-4 sm:py-6 rounded-xl"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <p className="font-sans text-[#1423C9] text-lg sm:text-xl font-semibold">
                  {section.title}
                </p>
                <div className="text-[#1423C9] text-xl">
                  {expandedSection === index ? '−' : '+'}
                </div>
              </div>
              
              {(expandedSection === index || expandedSection === null) && (
                <div className="mt-2">
                  {section.content && (
                    <p className="text-base sm:text-lg font-sans font-medium leading-relaxed mb-3">
                      {section.content}
                    </p>
                  )}
                  
                  {section.bullets && (
                    <div className="space-y-3">
                      {section.bullets.map((bulletGroup, bulletIndex) => (
                        <div key={bulletIndex}>
                          {bulletGroup.subtitle && (
                            <p className="text-[#1423C9] font-semibold mb-2">
                              {bulletGroup.subtitle}
                            </p>
                          )}
                          <ul className="space-y-2 ml-4">
                            {bulletGroup.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-base sm:text-lg font-sans font-medium leading-relaxed flex items-start">
                                <span className="text-[#1423C9] mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.contact && (
                    <div className="mt-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-[#1423C9] font-semibold">Email:</span>
                        <span className="text-base sm:text-lg font-sans font-medium">
                          {section.contact.email}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-[#1423C9] font-semibold">Phone:</span>
                        <span className="text-base sm:text-lg font-sans font-medium">
                          {section.contact.phone}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-[#1423C9] font-semibold">Address:</span>
                        <pre className="text-base sm:text-lg font-sans font-medium leading-relaxed whitespace-pre-line">
                          {section.contact.address}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="w-full bg-[#D8FF2933] border-[0.8px] border-[#D8FF29] px-3 sm:px-6 py-4 sm:py-6 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="text-[#D8FF29] text-xl mt-1">⚠️</div>
            <div>
              <p className="font-sans text-[#D8FF29] text-lg font-semibold mb-2">
                Important Notice
              </p>
              <p className="text-base sm:text-lg font-sans font-medium leading-relaxed">
                This privacy policy applies specifically to our V Remind product. By using our services, you acknowledge that you have read and understood this policy. For the most current version, please visit our website or check the in-app policy section.
              </p>
            </div>
          </div>
        </div>

        <Contact />
      </div>
      <Footer />
    </div>
  );
}