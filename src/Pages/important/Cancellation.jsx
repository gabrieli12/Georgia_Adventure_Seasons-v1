import React from "react";

const Cancellation = () => {
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
          <h1 className="text-5xl font-bold mt-15 ">
            Cancellation Policy
          </h1>

        </div>

      </section>
      <div className="max-w-7xl mx-auto py-20">
        <h1 className="text-xl font-bold mb-8">Cancellation Policy</h1>

        {/*    Advance Payment    */}
        <h2 className="text-4xl font-bold mt-10">Advance Payment</h2>
        <div className="text-gray-600 flex flex-col gap-6 py-5">
          <p>A 30% advance payment is required to confirm all bookings. The advance payment is strictly NON-REFUNDABLE under all circumstances,including client cancellation, schedule changes, personal reasons,travel delays, or no-show.</p>
        </div>


        {/*    Client Cancellation    */}
        <h2 className="text-4xl font-bold mt-10">Client Cancellation</h2>
        <p className="text-gray-600 flex flex-col gap-6 py-5">If the client cancels at any time, the 30% advance payment will not be refunded.</p>

        {/*    No-Show    */}
        <h2 className="text-4xl font-bold mt-10">No-Show</h2>
        <p className="text-gray-600 flex flex-col gap-6 py-5">Failure to appear at the agreed time is considered a no-show and the advance payment will not be refunded.</p>


        {/*     Force Majeure     */}
        <h2 className="text-4xl font-bold mt-10">Force Majeure</h2>
        <p className="text-gray-600 flex flex-col gap-6 py-5">In case of severe weather, road closure, natural disaster, or other safety-related conditions beyond the Company’s control, services may be rescheduled. Refunds are not guaranteed and remain at the Company’s sole discretion.</p>

        {/*    Weather Conditions    */}
        <h2 className="text-4xl font-bold mt-10">Weather Conditions</h2>
        <div className="text-gray-600 flex flex-col gap-6 py-5">
          <p>If weather conditions are deemed unsafe, the Company may:</p>
          <p>- Reschedule the activity</p>
          <p>- Offer partial refund at its discretion</p>
        </div>

      
        {/*    Remaining Balance    */}
        <h2 className="text-4xl font-bold mt-10">Remaining Balance</h2>
        <p className="text-gray-600 flex flex-col gap-6 py-5">If cancellation occurs after full payment is made, refund eligibility will be determined at the Company’s discretion.</p>


        {/*    Company Cancellation    */}
        <h2 className="text-4xl font-bold mt-10">Company Cancellation</h2>
        <p className="text-gray-600 flex flex-col gap-6 py-5">If the Company cancels a service due to operational or safety reasons, the client may receive rescheduling options.</p>


      </div>
    </div>
  );
};

export default Cancellation;