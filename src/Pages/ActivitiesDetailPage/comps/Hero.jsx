import { useContext, useRef, useState, useEffect, memo } from "react";



const LoadingSpinner = memo(() => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        <span className="ml-3 text-xl font-merienda">Loading...</span>
    </div>
));


function Hero({ chosenActivity, setChosenActivity }) {

    const scrollRef = useRef(null);

    // საწყისი მედია სთეითი
    const [mainMedia, setMainMedia] = useState({
        type: "image",
        url: null,
    });

    // როგორც კი chosenActivity შეიცვლება (URL-ის მიხედვით), განაახლე მთავარი მედია
    // 2. ეს ეფექტი აუცილებელია! როცა chosenActivity შეივსება, ფოტოც მაშინ გამოჩნდება
    useEffect(() => {
        if (chosenActivity?.detail?.images?.length > 0) {
            setMainMedia({
                type: "image",
                url: chosenActivity.detail.images[0],
            });
        }

        console.log(chosenActivity)
    }, [chosenActivity]); // უსმენს chosenActivity-ს ცვლილებას



    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    // თუ მონაცემები ჯერ კიდევ იტვირთება
    if (!chosenActivity || Object.keys(chosenActivity).length === 0) return <LoadingSpinner />;




    return (
        <div className="flex flex-col  relative group ">

            {/* Main Display Area */}
            <div className="w-full h-80 md:h-137.5 overflow-hidden rounded-3xl shadow-2xl bg-gray-100 transition-all duration-500 mt-40 max-sm:mt-50">
                {mainMedia.url ? ( // 1. ჯერ ვამოწმებთ საერთოდ თუ არსებობს URL
                    mainMedia.type === "video" ? (
                        <video
                            key={mainMedia.url}
                            src={mainMedia.url}
                            controls
                            autoPlay
                            className="w-full h-full object-contain bg-black"
                        />
                    ) : (
                        <img
                            src={mainMedia.url}
                            alt="Main Preview"
                            className="w-full h-full object-cover"
                        />
                    )
                ) : (
                    // 2. თუ URL ჯერ არ არის, გამოაჩინე ცარიელი ნაცრისფერი ბლოკი (Placeholder)
                    <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                        <span className="text-gray-400">Loading media...</span>
                    </div>
                )}
            </div>

            {/* Gallery Slider */}
            <div className="relative group/slider w-full py-6  ">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 items-center  no-scrollbar scroll-smooth overflow-x-auto overflow-y-hidden py-2"
                >
                    {/* ვიდეოს პრევიუ (სტატიკურია თქვენს კოდში) */}
                    <div
                        className={`relative h-28 w-44 md:h-32 md:w-52 shrink-0 cursor-pointer group rounded-2xl overflow-hidden border-4 transition-all ${mainMedia.type === "video" ? "border-orange-500 scale-105" : "border-transparent"}`}
                        onClick={() => setMainMedia({ type: "video", url: chosenActivity?.detail.video })}
                    >
                        <video className="h-full w-full object-cover" src={chosenActivity?.detail.video} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                            <div className="bg-white/90 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            </div>
                        </div>
                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-0.5 rounded font-bold">VIDEO</span>
                    </div>

                    {/* სურათების გალერეა */}
                    {chosenActivity?.detail?.images?.map((img, ind) => (
                        <img
                            loading="lazy"
                            key={ind}
                            src={img}
                            alt="Preview"
                            className={`h-28 w-44 md:h-32 md:w-52 shrink-0 object-cover rounded-2xl cursor-pointer border-4 transition-all hover:scale-105 ${mainMedia.url === img ? "border-orange-500 scale-105" : "border-transparent opacity-80 hover:opacity-100"}`}
                            onClick={() => setMainMedia({ type: "image", url: img })}
                        />
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>

    )
}

export default Hero