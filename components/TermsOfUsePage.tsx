
import React from 'react';
import {CONTACTS} from "@/constants.tsx";

export const TermsOfUsePage: React.FC = () => {
  return (
    <div className="bg-white text-brand-primary py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"> {/* Added max-w-3xl for readability */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-2">Terms of Use</h1>
          <p className="text-sm text-slate-500">Effective Date: 01.02.2024</p>
          <p className="text-sm text-slate-500">Last Updated: 01.01.2025</p>
        </header>

        <div className="text-slate-700 space-y-6"> {/* Base text color and spacing for sections */}
          <section>
            <p className="leading-relaxed">Welcome to ELEVATE CORE (“we,” “us,” or “our”). By accessing or using our website https://el-core.eu (the “Website”), you agree to comply with and be bound by these Terms of Use (the “Terms”). If you do not agree with these Terms, please refrain from using the Website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">By accessing or using the Website, you confirm that you have read, understood, and agreed to these Terms. These Terms may be updated from time to time, and continued use of the Website indicates your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. Use of the Website</h2>
            <p className="leading-relaxed">You agree to use the Website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the Website. Prohibited activities include, but are not limited to:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">Using the Website for fraudulent purposes.</li>
              <li className="leading-relaxed">Uploading or sharing malicious content, including viruses, malware, or any harmful code.</li>
              <li className="leading-relaxed">Attempting to gain unauthorized access to the Website, servers, or other systems.</li>
            </ul>
            <p className="leading-relaxed">We reserve the right to terminate or restrict your access to the Website if you violate these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Intellectual Property</h2>
            <p className="leading-relaxed">All content on this Website, including text, graphics, logos, images, and software, is the property of ELEVATE CORE or its licensors and is protected by copyright and intellectual property laws.</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">You may view, download, and print content from the Website for personal, non-commercial use only.</li>
              <li className="leading-relaxed">You may not modify, reproduce, distribute, or exploit any content without prior written permission from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Third-Party Links and Content</h2>
            <p className="leading-relaxed">The Website may include links to third-party websites or embedded content. These are provided for your convenience only, and we are not responsible for the content, privacy practices, or availability of these external sites. Accessing third-party content is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">The Website and its content are provided “as is” and “as available” without any warranties, express or implied, including but not limited to:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">The accuracy, completeness, or reliability of the content.</li>
              <li className="leading-relaxed">The uninterrupted or error-free operation of the Website.</li>
            </ul>
            <p className="leading-relaxed">We disclaim all liability for any damages arising from your use of the Website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">To the maximum extent permitted by law, ELEVATE CORE shall not be liable for any direct, indirect, incidental, or consequential damages arising from:</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">Your use or inability to use the Website.</li>
              <li className="leading-relaxed">Unauthorized access to or alteration of your data.</li>
              <li className="leading-relaxed">Third-party content or links provided on the Website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">7. User-Generated Content</h2>
            <p className="leading-relaxed">If you post comments or submit content on the Website, you grant us a non-exclusive, royalty-free, perpetual license to use, reproduce, modify, or distribute your content.</p>
            <ul className="list-disc list-outside space-y-2 my-4 pl-5 text-slate-600">
              <li className="leading-relaxed">You are solely responsible for the content you submit.</li>
              <li className="leading-relaxed">Content must not violate any applicable laws, infringe upon third-party rights, or contain harmful or offensive material.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">8. Privacy Policy</h2>
            <p className="leading-relaxed">Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data. You can review our Privacy Policy <a href="/#privacy-policy" className="text-brand-accent hover:text-brand-accent-dark underline">here</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">9. Governing Law</h2>
            <p className="leading-relaxed">These Terms are governed by and construed in accordance with the laws of the Republic of Croatia. Any disputes arising from your use of the Website shall be subject to the exclusive jurisdiction of the courts of Croatia.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">10. Changes to These Terms</h2>
            <p className="leading-relaxed">We reserve the right to modify these Terms at any time. The updated Terms will be posted on this page with a revised “Last Updated” date. It is your responsibility to review the Terms regularly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">11. Contact Us</h2>
            <p className="leading-relaxed">If you have any questions or concerns about these Terms, please contact us:</p>
            <ul className="list-none space-y-2 my-4 pl-0 text-slate-600"> {/* Using list-none for contact details */}
              <li className="leading-relaxed">Email: <a href={CONTACTS.mailto} className="text-brand-accent hover:text-brand-accent-dark underline">{CONTACTS.email}</a></li>
              <li className="leading-relaxed">Phone: <a href={CONTACTS.tel} className="text-brand-accent hover:text-brand-accent-dark underline">{CONTACTS.phone}</a></li>
              {/*<li className="leading-relaxed">Address: [Insert Office Address, Croatia]</li>*/}
            </ul>
            <p className="leading-relaxed mt-4">By using the Website, you acknowledge that you have read, understood, and agree to these Terms of Use. Thank you for visiting ELEVATE CORE!</p>
          </section>
        </div>
      </div>
    </div>
  );
};
