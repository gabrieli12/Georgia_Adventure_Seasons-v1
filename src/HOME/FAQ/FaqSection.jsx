import React from 'react';

const FaqSection = ({ title, questions, defaultOpen = false }) => {
    return (
        <section className="peer flex items-center gap-2.5 py-3.75 relative bg-[#f2f1fd] ">
            <details open={defaultOpen} className="w-full group/main open:z-40 relative  ">
                <summary className="text-[16px] text-[#193352] cursor-pointer font-bold uppercase list-none flex items-center gap-1">
                    <svg className=' group-open/main:-rotate-45 duration-300' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z" /></svg>

                    {/* <svg className='hidden! group-open:block! rotate-45 trans' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg> */}
                    {title}
                    <div className="flex items-start absolute right-0  group-open/main:top-[10%]  peer-open:hidden!">
                        <img
                            className="w-30 duration-1000 hover:scale-110 max-md:hidden"
                            src="src/assets/men.png"
                            alt="person"
                        />
                    </div>

                </summary>
                <div className="mt-2">
                    {questions.map((question, index) => (
                        <details key={index} className="pl-2.5 group/sub w-full">
                            <summary className="text-[14px] text-[#193352] list-none flex gap-2.5 items-center cursor-pointer py-1">
                                {/* პლუსი: ქრება როცა details ღიაა */}
                                <i className="fa-solid fa-plus relative top-0.5  flex group-open/sub:hidden!"></i>
                                {/* მინუსი: ჩნდება მხოლოდ მაშინ როცა details ღიაა */}
                                <i className="fa-solid fa-minus relative top-0.5 hidden! group-open/sub:block!"></i>

                                <p className="font-medium">{question.question}</p>
                            </summary>
                            <p className="pl-10 pb-2 text-[#193352] opacity-90 transition-all">
                                {question.answer}
                            </p>
                        </details>
                    ))}
                </div>

            </details>

            {/* <div className="flex items-start absolute right-0 ">
                <img
                    className="w-30 duration-1000 hover:scale-110 max-md:hidden"
                    src="src/assets/men.png"
                    alt="person"
                />
            </div> */}

        </section>
    );
};

export default FaqSection;