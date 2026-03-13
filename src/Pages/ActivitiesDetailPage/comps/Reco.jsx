import React from 'react'

function Reco({ chosenActivity }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
            <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center gap-2">📍 Contact</h4>
                <div className="space-y-2 text-gray-700 text-sm">
                    <p>📞 +995 595 706 585</p>
                    <p>✉️ georgiaadventure1@gmail.com</p>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center gap-2">💡 Recommendations</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm">
                    {chosenActivity?.detail?.recommendations?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center gap-2">✨ Features</h4>
                <ul className="space-y-2 text-gray-600 list-disc list-inside text-sm">
                    {chosenActivity?.detail?.features?.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Reco