import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <main>
      <PageHeader
        badge="GET IN TOUCH"
        title="Let's Grow a Healthier, Greener Tomorrow Together"
        subtitle="Connect directly with our headquarters in Chennai, Tamil Nadu for agricultural advisories, FPO procurement collaborations, dealership opportunities, or technical inquiries."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* 15: Contact Information & Interactive Inquiry Form */}
      <ContactSection />
    </main>
  );
};
