"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 bg-sky-100/20 rounded-full blur-3xl bottom-20 right-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-base text-gray-600">
              Your privacy is important to us. Learn how we protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed text-sm">
                  <strong>Shyama Jewels Pvt. Ltd. "Muliya"</strong>, the registered Jewellery retailers which manages www.muliya.in is assure and committed to protecting the privacy of all users who visit this website and place order for various products. This privacy policy describes the collection, use, and security of information received when users visit our mentioned web address. From time to time Muliya may revise, amend, and update this privacy policy. It is responsibility of the users to refer the online privacy policy all the time.
                </p>
              </div>

              {/* Information Collected */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Information Collected
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  We respect your privacy and recognize the need to protect the personally identifiable information (any information by which you can be identified in terms of name, address, e-mail id, building name, pin code, telephone numbers etc.) you share with us. In general, you can visit our official website without any of your personal details.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  We track the internet address of the domains including browser type, IP address from which people visit us and analyze this data for trends and statistics, but the individual user remains anonymous till registration procedure is undertaken. Our collection of website usage information may involve the use of cookies. This information is saved in a secure environment and is kept for our records and to make it easier for you to use our services on return visits. This is to serve you faster and with better quality.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  No third party has access to the information at any point of time during collection and maintenance.
                </p>
              </div>

              {/* Use of Information */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Use of Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  All Information collected shall only be used internally for official purposes like storing records, processing orders and for MIS purpose or for sharing with only authorized and identified external service provider(s), sharing with govt. authorities if asked by them and for the purpose of mandatory submission of reports.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  The sole objective of the website is to provide the users with the best possible services. The administration shall use the Information to improve the website for better experience of the user. If and any demand arises we may disclose specific information upon governmental request, in response to a court order, or relevant government agency, statutory authorities when required by law, to enforce our corporate policies, or to protect our or others' rights, property, or safety.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  We do not provide information to those agencies or companies for marketing or any other type of commercial purposes.
                </p>
              </div>

              {/* Marketing Communications */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Marketing Communications
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  We may use your e-mail address and other contact information provided to us through the site to send you promotional information from us. If you do not want to receive such information, you can change your communication preferences and remove yourself from our e-mail list at any time.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  If you have a registered account, please log in and click unsubscribe newsletter. Please also note that even if you opt out of receiving promotional emails from us, we may still use your information to communicate with you for other purposes, such as orders / purchases, and customer service responses.
                </p>
              </div>

              {/* Account Management */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Account Management
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  If you have signed up through the site and registered with your the mail account, we have provided you with a means to log into your account and edit your personal information including name, postal address and phone number to ensure its accuracy at all times. It will be useful for future purchases.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  You can choose to have your computer alert you each time a cookie is being sent or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer or Firefox or Safari or Chrome) settings. Each browser is a little different, so look at your browser Help menu to learn the correct way to modify your cookie settings. If you turn cookies off, you won't have access to many features that make your site experience more efficient and some of our services will not function properly.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="bg-[#E92247]/5 rounded-2xl p-8 border border-[#E92247]/10">
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  In general our site is neither designed nor intended to collect personal information from children under the age group 15 and less. It does not knowingly collect personal information from anyone under the age of 15, and does not use such information if it discovers that it is has been provided.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  To respect the privacy of children and to comply with the laws of the country, children under the age of 15 and less should not provide any personal information on this Site. We request that parents supervise their children while online.
                </p>
              </div>

              {/* Information Security */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Information Security and Disclosure Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  The statistical and personally identifying information received by Muliya as a result of a visitor's use of the website will be gathered by us solely for internal purposes, such as; to understand how often its websites are accessed and how they might be improved.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  None of the statistical, non–personally identifying information collected by us will be used to identify a visitor or be linked to any personally identifying information about the visitor. Muliya does not exchange, or sell to third parties any of the information that visitors provide online.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  To prevent unauthorized access, maintain data accuracy, and ensure correct use of information, we will employ reasonable and current Internet security methods and technologies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Credit card Transactions processed are through a authorized bank hostage page integrated with SSL (Secured Socket Layer) technology is used to encrypt your personal information when you affirmatively respond to a Provider's offer and authorize us to transmit your personal information to a Provider for fulfilment.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  We never store your credit card/bank related information anywhere as per security compliance requirements. Any changes to our Privacy Policy will be communicated through our site at least seven (7) days in advance of implementation. Information collected before changes are made will be secured according to the previous Privacy Policy.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Your Rights Regarding the Use of Your Personal Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  You have the right at any time to prevent us from contacting you for marketing purposes. When we send a promotional communication to a user, the user can opt out of further promotional communications by following the unsubscribe instructions provided in each promotional e-mail.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  You can also indicate that you do not wish to receive marketing communications from us. Please note that notwithstanding the promotional preferences you indicate by either unsubscribing section of the Site, we may continue to send you administrative emails including, for example, periodic updates to our Privacy Policy.
                </p>
              </div>

              {/* Links to Other Websites */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Links to Other Websites
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  As part of the Service, we may provide links to or compatibility with other websites or applications. However, we are not responsible for the privacy practices employed by those websites or the information or content they contain.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  This Privacy Policy applies solely to information collected by us through the Site and the Service. Therefore, this Privacy Policy does not apply to your use of a third party website accessed by selecting a link on our Site or via our Service.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  To the extent that you access or use the Service through or on another website or application, then the privacy policy of that other website or application will apply to your access or use of that site or application. We encourage our users to read the privacy statements of other websites before proceeding to use them.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Changes to Our Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  The Company reserves the right to change this policy and our Terms of Service at any time. We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Significant changes will go into effect 30 days following such notification. Non-material changes or clarifications will take effect immediately. You should periodically check the Site and this privacy page for updates.
                </p>
              </div>

              {/* Contact Us */}
              <div className="bg-gradient-to-br from-[#E92247]/5 to-pink-50 rounded-2xl p-8 border border-[#E92247]/10">
                <h2 className="text-xl font-serif text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  If you have any questions regarding this Privacy Policy or the practices of this Site, please contact us by sending an email to:
                </p>
                <a href="mailto:info@muliyajewels.com" className="inline-block px-6 py-3 bg-[#E92247] text-white rounded-lg hover:bg-[#E92247]/90 transition-colors font-medium">
                  info@muliyajewels.com
                </a>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-xs pt-8 border-t border-gray-200">
                <p>Last Updated: April 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
