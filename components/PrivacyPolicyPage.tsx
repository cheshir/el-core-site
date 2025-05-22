
import React from 'react';
import {CONTACTS} from "@/constants.tsx";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white text-brand-primary py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"> {/* Added max-w-3xl for readability */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Effective Date: 01.02.2024</p>
          <p className="text-sm text-slate-500">Last Updated: 01.01.2025</p>
        </header>

        <div className="text-slate-700 space-y-6"> {/* Base text color and spacing for sections */}
          <section>
            <p className="leading-relaxed">Welcome to ELEVATE CORE (“we,” “our,” or “us”). This Privacy Policy outlines how we collect, use, and protect your information when you visit our website: <a href="https://el-core.eu" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent-dark underline">https://el-core.eu</a>.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Who We Are</h2>
            <p className="leading-relaxed">Our website address is: <a href="https://el-core.eu" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent-dark underline">https://el-core.eu</a>.</p>
            <p className="leading-relaxed">For any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <ul className="list-none space-y-2 my-4 pl-0 text-slate-600">
              <li className="leading-relaxed">Email: <a href={CONTACTS.mailto} className="text-brand-accent hover:text-brand-accent-dark underline">{CONTACTS.email}</a></li>
              <li className="leading-relaxed">Phone: <a href={CONTACTS.tel} className="text-brand-accent hover:text-brand-accent-dark underline">{CONTACTS.phone}</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. What Data We Collect and Why</h2>
            
            <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.1 Comments</h3>
            <p className="leading-relaxed">When visitors leave comments on the site, we collect the following data:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">Data provided in the comment form.</li>
              <li className="leading-relaxed">Visitor’s IP address and browser user agent string (to help with spam detection).</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.2 Media</h3>
            <p className="leading-relaxed">If you upload images to our site:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">Avoid uploading images with embedded location data (EXIF GPS).</li>
              <li className="leading-relaxed">Visitors to the website may download and extract location data from such images.</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.3 Cookies</h3>
            <p className="leading-relaxed">We do not use cookies to store any information.</p>
            {/*<p className="leading-relaxed">We use cookies to improve user experience. Specific uses include:</p>*/}
            {/*<ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">*/}
            {/*  <li className="leading-relaxed">Comment cookies: Saving your name, email, and website for future comments (lasts 1 year).</li>*/}
            {/*  <li className="leading-relaxed">Login cookies: Temporary cookies to determine if your browser accepts cookies (discarded upon browser closure).</li>*/}
            {/*  <li className="leading-relaxed">When you log in, cookies save your login information for 2 days and screen preferences for 1 year.</li>*/}
            {/*  <li className="leading-relaxed">Selecting “Remember Me” extends login persistence to 2 weeks. Logout removes login cookies.</li>*/}
            {/*  <li className="leading-relaxed">Editing cookies: A temporary cookie is set when editing or publishing an article, expiring after 1 day.</li>*/}
            {/*</ul>*/}

            <h3 className="text-xl font-semibold text-brand-secondary mt-6 mb-3">2.4 Embedded Content</h3>
            <p className="leading-relaxed">Articles on this site may include embedded content (e.g., videos, images, articles).</p>
            <p className="leading-relaxed">Embedded content behaves as if you visited the other website.</p>
            <p className="leading-relaxed">Such websites may collect your data, use cookies, and track your interactions, especially if you are logged into their account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Who We Share Your Data With</h2>
            {/*<ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">*/}
              <p className="leading-relaxed">We do not share your data with any service.</p>
              {/*<li className="leading-relaxed">Password resets: If you request a password reset, your IP address will be included in the reset email.</li>*/}
              {/*<li className="leading-relaxed">Spam detection: Visitor comments may be checked through automated spam detection services.</li>*/}
            {/*</ul>*/}
          </section>

          {/*<section>*/}
          {/*  <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. How Long We Retain Your Data</h2>*/}
          {/*  <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">*/}
          {/*    <li className="leading-relaxed">Comments and their metadata are stored indefinitely to recognize and approve follow-up comments automatically.</li>*/}
          {/*    <li className="leading-relaxed">For registered users, we store personal information provided in their profile indefinitely.</li>*/}
          {/*    <li className="leading-relaxed">Users can view, edit, or delete their information (except for usernames).</li>*/}
          {/*    <li className="leading-relaxed">Administrators also have access to edit this information.</li>*/}
          {/*  </ul>*/}
          {/*</section>*/}
          
          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Your Rights Over Your Data</h2>
            <p className="leading-relaxed">You have the following rights:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">Access and portability: Request an exported file of the personal data we hold about you.</li>
              <li className="leading-relaxed">Erasure: Request deletion of any personal data we hold, excluding data retained for legal, administrative, or security purposes.</li>
            </ul>
            <p className="leading-relaxed">To exercise your rights, please contact us at <a href={CONTACTS.mailto} className="text-brand-accent hover:text-brand-accent-dark underline">{CONTACTS.email}</a>.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. How We Protect Your Data</h2>
            <p className="leading-relaxed">We implement robust security measures, including:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">Encrypted data transfer.</li>
              <li className="leading-relaxed">Restricted access to personal information.</li>
              <li className="leading-relaxed">Regular security audits.</li>
            </ul>
            <p className="leading-relaxed">However, no method of data transmission or storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
          </section>

          {/*<section>*/}
          {/*  <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">7. Where Your Data Is Sent</h2>*/}
          {/*  <p className="leading-relaxed">Visitor comments may be processed through automated spam detection systems or other third-party tools as necessary to provide our services.</p>*/}
          {/*</section>*/}

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Updates to This Privacy Policy</h2>
            <p className="leading-relaxed">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. Your continued use of our site after such updates constitutes acceptance of the changes.</p>
          </section>

          <section>
            <p className="leading-relaxed mt-4">Thank you for trusting ELEVATE CORE. Your privacy matters to us.</p>
            <p className="leading-relaxed">For further assistance, please contact us:</p>
            <ul className="list-none space-y-2 my-4 pl-0 text-slate-600">
              <li className="leading-relaxed">Email: <a href={CONTACTS.mailto} className="text-brand-accent hover:text-brand-accent-dark underline">{CONTACTS.email}</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
