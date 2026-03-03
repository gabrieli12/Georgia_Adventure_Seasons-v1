import React from "react";

const Terms = () => {
    return (
        <div className="bg-white text-gray-800 px-6  flex flex-col justify-center items-center">
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
                    <h1 className="text-5xl font-bold mt-8 ">
                        Terms of Service
                    </h1>

                </div>

            </section>
            <section className="max-w-7xl mx-auto py-20">
                <h2 className="text-xl font-bold mb-8">Terms of Service</h2>

                <p className="text-gray-600 mb-6">
                    By booking or using services provided by Georgia Adventure Seasons, you agree to the following terms:
                </p>

                {/*     Booking Confirmation     */}
                <h2 className="text-4xl font-bold mt-10">Booking Confirmation</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">A booking is confirmed only after receipt of a 30% advance payment.</p>


                {/*    Payment Terms    */}
                <h2 className="text-4xl font-bold mt-10">Payment Terms</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">The remaining balance must be paid prior to or on the day of service, as agreed.</p>


                {/*    Advance Payment    */}
                <h2 className="text-4xl font-bold mt-10">Advance Payment</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">The 30% advance payment secures your reservation and may be non-refundable</p>


                {/*     Risk Acknowledgment     */}
                <h2 className="text-4xl font-bold mt-10">Risk Acknowledgment</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">Outdoor and mountain activities involve inherent risks. By participating, you voluntarily accept these risks.</p>


                {/*    Limitation of Liability    */}
                <h2 className="text-4xl font-bold mt-10">Limitation of Liability</h2>
                <div className="text-gray-600 flex flex-col gap-6 py-5">
                    <p>The Company is not liable for:</p>
                    <p>- Injuries resulting from failure to follow instructions</p>
                    <p>- Weather-related disruptions</p>
                    <p>- Third-party service provider actions</p>
                    <p>- Force Majeure events</p>
                </div>


                {/*    Force Majeure   */}
                <h2 className="text-4xl font-bold mt-10">Force Majeure</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">The Company shall not be responsible for delays, changes, or cancellations caused by events beyond reasonable control, including severe weather, road closures, natural disasters, or government restrictions.</p>


                {/*    Governing Law    */}
                <h2 className="text-4xl font-bold mt-10">Governing Law</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">These terms are governed by the laws of Georgia.</p>



                {/*    Booking & Payment    */}
                <h2 className="text-4xl font-bold mt-10">Booking & Payment</h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">
                    Bookings must be confirmed in advance. Payment terms will be
                    communicated prior to confirmation.
                </p>


                {/*    Responsibility    */}
                <h2 className="text-4xl font-bold mt-10">
                    Responsibility
                </h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">
                    Participants must follow all safety instructions. The company is not
                    responsible for incidents caused by failure to follow guidelines.
                </p>


                {/*     Liability    */}
                <h2 className="text-4xl font-bold mt-10">
                    Liability
                </h2>
                <p className="text-gray-600 flex flex-col gap-6 py-5">
                    Outdoor activities involve inherent risks. By participating,
                    clients acknowledge and accept these risks.
                </p>



                {/*   Insurance Disclaimer   */}
                <h2 className="text-4xl font-bold mt-10">Insurance Disclaimer</h2>
                <div className="text-gray-600 flex flex-col gap-6 py-5">
                    <p>The Company recommends that all clients obtain personal travel insurance covering:</p>
                    <p>- Medical emergencies</p>
                    <p>- Mountain rescue</p>
                    <p>- Activity-related injuries</p>
                    <p>- Trip cancellations</p>
                    <p>The Company does not provide personal accident insurance unless explicitly stated.</p>
                </div>

                
            </section>
        </div>
    );
};

export default Terms;