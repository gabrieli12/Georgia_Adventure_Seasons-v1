import React, { useState, useEffect } from "react";

const LegalConsent = () => {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("legalAccepted");
        if (consent === "true") {
            setAccepted(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("legalAccepted", "true");
        setAccepted(true);
    };

    if (accepted) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-95 z-50 flex items-center justify-center px-6">
            <div className="bg-white max-w-2xl w-full p-8 rounded-2xl shadow-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Legal Agreement
                </h1>

                <p className="text-gray-600 mb-6 text-sm text-center">
                    By using this website and booking services from Georgia Adventure Seasons,
                    you confirm that you have read and agree to our legal policies.
                </p>

                <div className="space-y-2 text-sm mb-6 text-center">
                    <a href="/terms" target="_blank" className="block underline text-blue-600">
                        Terms of Service
                    </a>
                    <a href="/cancellation" target="_blank" className="block underline text-blue-600">
                        Cancellation Policy
                    </a>
                    <a href="/liabilityWaiver" target="_blank" className="block underline text-blue-600">
                        Liability Waiver
                    </a>
                    <a href="/safety" className="block underline text-blue-600">Safety Guidelines</a>

                    <a href="/privacy-policy" target="_blank" className="block underline text-blue-600">
                        Privacy Policy
                    </a>
                </div>

                <button
                    onClick={handleAccept}
                    className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition cursor-pointer"
                >
                    I Agree & Continue
                </button>
            </div>
        </div>
    );
};

export default LegalConsent;