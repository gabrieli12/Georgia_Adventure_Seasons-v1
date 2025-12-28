import { useContext } from "react";
import { ChosenActivity } from "../../App";
function ActivitiesDetail() {
    const {chosenActivity, setChosenActivity} = useContext(ChosenActivity);
    

    console.log(chosenActivity)
    return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-2">
        <h1 className="text-5xl font-[700]">{chosenActivity.title}</h1>
        <p>მთიანეთი / მცხეთა, დაბა სართი <a href="https://maps.app.goo.gl/bnAXUoQWnBqHevsm6" className="text-blue-200">( მაპზე ნახვა )</a></p>
        {/* Hero Section */}
        <div className="flex justify-between max-lg:flex-wrap">
            <img
                src={chosenActivity.mainImage}
                alt="Paragliding"
                className="w-full h-full object-cover mr-[15px] rounded-2xl"
            />

            <div className="grid grid-rows-3 gap-4">
            {
                chosenActivity.imagesGallery ? chosenActivity.imagesGallery.map((i, ind) => (
                <img
                key={ind}
                src={i}
                alt="Preview"
                className="rounded-2xl object-cover h-full shadow-md"
                /> 
            )) : null
            }
            </div>
        </div>

        {/* Description + Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold">{chosenActivity.title}</h2>
            <p className="text-gray-600 leading-relaxed">
                {chosenActivity.description}
            </p>

            <footer className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
                    {/* Contacts */}
                    <div className="space-y-4">
                    <h4 className="text-lg font-semibold">საკონტაქტო</h4>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex items-center gap-3">📞 <span>+995 592 43 66 51</span></div>
                        <div className="flex items-center gap-3">✉️ <span>geoas@gmail.com</span></div>
                        <div className="flex items-center gap-3">📞 <span>+995 535 23 75 13</span></div>
                        <div className="flex items-center gap-3">📞 <span>+995 575 31 53 34</span></div>
                    </div>
                    </div>

                    {/* Rules */}
                    <div className="space-y-4">
                    <h4 className="text-lg font-semibold">რეკომენდაციები</h4>
                    <ul className="space-y-2 text-gray-600 leading-relaxed">
                        <li>ფრენამდე მიიღეთ ინსტრუქტორის მითითებები</li>
                        <li>გაითვალისწინეთ უსაფრთხოების წესები</li>
                        <li>არ არის რეკომენდებული გულის პრობლემების შემთხვევაში</li>
                        <li>ცუდ ამინდში ფრენა არ ტარდება</li>
                    </ul>
                    </div>

                    {/* Important */}
                    <div className="space-y-4">
                    <h4 className="text-lg font-semibold">ფასი მოიცავს:</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>ფრენა პარაპლანით</li>
                        <li>კვალიფიციური ინსტრუქტორი</li>
                        <li>უსაფრთხოების აღჭურვილობა</li>
                    </ul>
                    </div>
                </div>
            </footer>
            </div>

            {/* Reviews Box */}
            <div className="rounded-2xl border border-gray-200 shadow-lg p-6 space-y-2 w-[400px]">
            <h3 className="text-xl font-semibold">მიმოხილვები</h3>
            <div className="space-y-3 text-sm">
                {
                    chosenActivity.reviews ? chosenActivity.reviews.map((review, index) => {
                        return <div key={index} className="w-full min-w-[270px] h-auto border rounded-[10px] px-[10px] py-[15px]  flex flex-col  gap-[10px]">
                            <section className="flex justify-between items-center">
                                <div className="flex items-center gap-[5px]">
                                    <div className="w-[40px] h-[40px] bg-red-400 rounded-[50%] flex justify-center items-center text-white text-2xl">
                                        {review.username[0]}
                                    </div>
                                    <p className="text-[15px]">{review.userName}</p>
                                </div>
                                <div>
                                    {Array.from({ length: review.rating }).map((_, i) => <i className="fa-solid fa-star text-[#fdc700]"></i>)}
                                </div>
                            </section>
                            <section>
                                <p className="text-[12px]">{review.review}</p>
                            </section>
                        </div>
                    })  : null
                }
            </div>
            </div>
        </div>

        {/* Pricing */}
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">ტარიფები</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chosenActivity.additionalServices ? chosenActivity.additionalServices.map((service, i) => (
                <div
                key={i}
                className="rounded-2xl border border-gray-200 shadow-md p-6 text-center space-y-4"
                >
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <div className="text-3xl font-bold">{service.price}</div>
                <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
                    დაჯავშნა
                </button>
                </div>
            )) : null} 
            </div>
        </div>
        </div>
    )
}

export default ActivitiesDetail;