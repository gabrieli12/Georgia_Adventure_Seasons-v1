import React from 'react'

function LiabilityWaiver() {
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
                    <h1 className="text-5xl font-bold mt-7">
                        Liability Waiver & Assumption of Risk
                    </h1>

                </div>

            </section>

            <div className="max-w-7xl mx-auto py-20">
                <h2 className="text-xl font-bold mb-8">Liability Waiver & Assumption of Risk</h2>

                <p className='text-gray-600 flex flex-col gap-6 py-5'>By booking and participating in services provided by Georgia Adventure Seasons, you acknowledge and agree that:</p>

                <h2 className="text-4xl font-bold mt-10">Adventure and mountain activities involve inherent risks including but not limited to:</h2>
                <div className='text-gray-600 flex flex-col gap-6 py-5'>
                    <p>- Weather changes</p>
                    <p>- Slippery surfaces</p>
                    <p>- Road conditions</p>
                    <p>- Physical injury</p>
                </div>


                {/*    You voluntarily assume all risks associated with participation.    */}
                <h2 className="text-4xl font-bold mt-10">You voluntarily assume all risks associated with participation.</h2>


                {/*    You confirm that you are physically capable of participating and have disclosed any relevant medical conditions.  */}
                <h2 className="text-4xl font-bold mt-10">You confirm that you are physically capable of participating and have disclosed any relevant medical conditions.</h2>


                {/*   Georgia Adventure Seasons, its guides, drivers, and affiliates shall not be held liable for:   */}
                <h2 className="text-4xl font-bold mt-10">Georgia Adventure Seasons, its guides, drivers, and affiliates shall not be held liable for:</h2>
                <div className='text-gray-600 flex flex-col gap-6 py-5'>
                    <p>- Personal injury</p>
                    <p>- Property damage</p>
                    <p>- Travel delays</p>
                    <p>- Losses caused by third parties</p>
                    <p>- Events classified as Force Majeure</p>
                </div>


                {/*  You agree that participation is entirely voluntary and at your own risk.  */}
                <h2 className="text-4xl font-bold mt-10">You agree that participation is entirely voluntary and at your own risk.</h2>
            </div>
        </div>
    )
}

export default LiabilityWaiver