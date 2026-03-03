import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="bg-white text-gray-800 px-6 w-full  relative flex flex-col justify-center items-center">
            <section>
                <div className="absolute inset-0 z-0 w-full h-96 overflow-hidden" >
                    <img
                        src="main.png"
                        alt="Georgia Mountains"
                        className="w-full h-full object-cover  scale-105"
                    />
                    <div className="absolute inset-0 bg-black/75"></div>
                </div>

                <div className="max-w-4xl h-96 relative flex justify-center items-center text-white ">
                    <h1 className="text-5xl font-bold mt-7">
                        Privacy Policy
                    </h1>

                </div>

            </section>

            <section className="py-20 ">
                <div className="max-w-7xl mx-auto relative">
                    <h2 className="text-xl font-bold mb-8">Privacy Policy</h2>
                    <p className="mb-5">Last updated: March 01, 2026</p>

                    <div className="text-gray-600 flex flex-col gap-6">
                        <p>
                            Georgia Adventure Seasons (“Company”, “We”, “Us”, or “Our”) respects your privacy and is committed to
                            protecting your personal information.
                        </p>
                        <p >This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                        <p >We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Template.</p>

                        <p>Interpretation and Definitions</p>

                    </div>


                    {/*    Interpretation   */}
                    <h2 className="text-4xl font-bold mt-10">Interpretation</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    </div>

                    {/*     Definitions    */}
                    <h2 className="text-4xl font-bold mt-10">Definitions</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>For the purposes of this Privacy Policy:</p>
                        <p><b className="text-black">Company</b> “We”, “Us”, or “Our” refers to Georgia Adventure Seasons, operating adventure tours, transportation, and related services in Georgia.</p>
                        <p><b className="text-black">Service</b> refers to all services provided by the Company, including but not limited to transportation, guided activities, seasonal adventure experiences, and related coordination.</p>
                        <p><b className="text-black">Client</b> “You”, or “Your” refers to any individual who contacts, books, or uses our services via WhatsApp, online communication, or other official channels.</p>
                        <p><b className="text-black">Personal Data</b> means any information that identifies or can identify an individual, including but not limited to name, phone number, booking details, and payment confirmation.</p>
                        <p><b className="text-black">Advance Payment</b> refers to the required 30% non-refundable or partially refundable deposit used to secure a booking.</p>
                        <p><b className="text-black">Online Payment Provider</b> refers to third-party payment processing services used to securely process transactions. The Company does not store full card details.</p>
                        <p><b className="text-black">Force Majeure</b> refers to circumstances beyond the Company’s reasonable control, including but not limited to severe weather conditions, government restrictions, road closures, natural events, or safety-related incidents.</p>
                        <p><b className="text-black">Activity</b> refers to any outdoor, transportation, or adventure-related service provided by the Company.</p>
                        <p><b className="text-black">Communication Channels</b> refer to official contact methods including WhatsApp, phone, or email.</p>
                    </div>


                    {/*     Information We Collect    */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Information We Collect</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p className="text-gray-600 mb-4">We may collect the following personal information when you contact us or book a service:</p>
                        <p>- Full name</p>
                        <p>- Phone number</p>
                        <p>- Booking details</p>
                        <p>- Payment confirmation details</p>
                        <p>- Any information voluntarily provided via WhatsApp or other communication channels</p>
                    </div>



                    {/*     Method of Collection     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Method of Collection</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>Information is collected directly from you through WhatsApp, phone communication, or other official contact methods. We do not offer user account registration on our website.</p>
                    </div>


                    {/*    Purpose of Processing     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Purpose of Processing</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>We use your information solely for:</p>
                        <p>- Booking confirmation and coordination</p>
                        <p>- Service delivery</p>
                        <p>- Payment processing</p>
                        <p>- Communication regarding schedule changes or safety matters</p>
                    </div>


                    {/*    Payment Processing      */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Payment Processing</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>All online payments are processed through third-party payment providers. We do not store full credit/debit card details.</p>
                    </div>



                    {/*     Data Retention     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Data Retention</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>We retain personal data only for as long as necessary to fulfill service obligations or comply with legal requirements.</p>
                    </div>


                    {/*     Data Sharing     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Data Sharing</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>We do not sell or rent personal data. Information may be shared only when required to:</p>
                        <p>- Complete your booking</p>
                        <p>- Comply with legal obligations</p>
                        <p>- Protect safety and operational integrity</p>
                    </div>


                    {/*     Data Security     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Data Security</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>While we implement reasonable safeguards, no online communication method can guarantee absolute security.</p>
                    </div>


                    {/*     Your Rights    */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Your Rights</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>You may request access, correction, or deletion of your personal information by contacting us.</p>
                    </div>


                    {/*     How We Use Your Information     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">
                        How We Use Your Information
                    </h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>To process bookings and respond to inquiries</li>
                        <li>To coordinate transportation and activities</li>
                        <li>To improve our services</li>
                    </ul>


                    {/*   International Clients (GDPR Compliance)   */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">International Clients (GDPR Compliance)</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>If you are located in the European Union or United Kingdom, you have the right to:</p>
                        <p>- Request access to your personal data</p>
                        <p>- Request correction of inaccurate information</p>
                        <p>- Request deletion of your data where legally permitted</p>
                        <p>- Object to certain processing activities</p>
                        <p>We process personal data based on legitimate business interest and contractual necessity.</p>
                    </div>



                    {/*     Contact     */}
                    <h2 className="text-4xl font-bold mt-10 mb-4">Contact</h2>
                    <div className="text-gray-600 flex flex-col gap-6 py-5">
                        <p>For privacy inquiries, please contact us via official communication channels.</p>
                    </div>




                </div>

            </section>

        </section>
    );
};

export default PrivacyPolicy;