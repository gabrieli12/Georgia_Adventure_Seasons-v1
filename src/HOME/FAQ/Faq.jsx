function Faq() {
    const generalQuestions = [
        {
            question: "Do I need experience to ski in Gudauri?",
            answer: "No, Gudauri has beginner slopes and ski schools for first-time skiers."
        },
        {
            question: "Is Gudauri suitable for professional skiers?",
            answer: "Yes, Gudauri offers advanced slopes and off-piste areas for experienced skiers."
        },
        {
            question: "What is the best time to visit Gudauri for skiing?",
            answer: "The best time for skiing in Gudauri is from December to April."
        },
        {
            question: "Can beginners try paragliding in Gudauri?",
            answer: "Yes, beginners can do tandem paragliding flights with professional instructors."
        },
        {
            question: "Is paragliding in Gudauri safe?",
            answer: "Yes, paragliding in Gudauri is safe when done with licensed pilots and good weather conditions."
        },
        {
            question: "How long does a paragliding flight last?",
            answer: "A typical paragliding flight lasts between 10 and 20 minutes."
        },
        {
            question: "Do I need special clothing for paragliding?",
            answer: "You should wear warm clothes, gloves, and comfortable shoes."
        },
        {
            question: "Are ski rentals available in Gudauri?",
            answer: "Yes, ski and snowboard rental shops are widely available in Gudauri."
        },
        {
            question: "Is Gudauri good for family trips?",
            answer: "Yes, Gudauri is family-friendly with activities for both adults and children."
        },
        {
            question: "Can I visit Gudauri if I don’t ski?",
            answer: "Yes, Gudauri offers activities like paragliding, snowmobile rides, and mountain views."
        }
    ]
    const skiQuestions = [
        {
            question: "Do I need experience to start skiing?",
            answer: "No, skiing is beginner-friendly and ski schools can teach you the basics."
        },
        {
            question: "What should I wear when skiing?",
            answer: "You should wear warm waterproof clothing, gloves, goggles, and a helmet."
        },
        {
            question: "Is skiing dangerous?",
            answer: "Skiing is generally safe if you follow the rules, wear a helmet, and ski within your level."
        },
        {
            question: "Do I need to buy my own skis?",
            answer: "No, you can rent skis and boots at most ski resorts."
        },
        {
            question: "How long does it take to learn skiing?",
            answer: "Most beginners can learn basic skiing skills in one or two days."
        },
        {
            question: "Can children learn skiing?",
            answer: "Yes, skiing is suitable for children and many resorts offer kids’ ski lessons."
        },
        {
            question: "What is the best weather for skiing?",
            answer: "Cold weather with fresh snow and good visibility is best for skiing."
        },
        {
            question: "What are ski lifts?",
            answer: "Ski lifts are machines that carry skiers up the mountain."
        },
        {
            question: "What does off-piste skiing mean?",
            answer: "Off-piste skiing means skiing outside marked and prepared ski trails."
        },
        {
            question: "Do I need lessons as a beginner?",
            answer: "Yes, taking lessons helps beginners learn faster and ski more safely."
        }
    ]
    const paraglidingQuestions = [
        {
            question: "Do I need experience to try paragliding?",
            answer: "No, beginners can fly in tandem with a certified instructor."
        },
        {
            question: "Is paragliding safe?",
            answer: "Paragliding is safe when done with licensed pilots and in good weather conditions."
        },
        {
            question: "How long does a paragliding flight last?",
            answer: "A typical flight lasts between 10 and 30 minutes."
        },
        {
            question: "What should I wear for paragliding?",
            answer: "You should wear warm clothes, gloves, and sturdy shoes."
        },
        {
            question: "Can children go paragliding?",
            answer: "Yes, children can paraglide in tandem if they meet age and weight requirements."
        },
        {
            question: "Is paragliding affected by weather?",
            answer: "Yes, wind, rain, and visibility strongly affect paragliding safety."
        },
        {
            question: "Will I feel scared during the flight?",
            answer: "Most people feel nervous at first, but the flight is smooth and relaxing."
        },
        {
            question: "Can I take photos or videos while paragliding?",
            answer: "Yes, most instructors offer GoPro photos and videos."
        },
        {
            question: "What happens if the wind stops?",
            answer: "Paragliders can glide safely to a landing area even with low wind."
        },
        {
            question: "Where can I paraglide?",
            answer: "Paragliding can be done in mountains, hills, and coastal areas with proper launch sites."
        }
    ]
    const quadBikeQuestions = [
    {
        question: "Do I need experience to ride a quad bike?",
        answer: "No, beginners can start after a short safety briefing and practice session."
    },
    {
        question: "What should I wear for quad biking?",
        answer: "Comfortable clothing, closed shoes, and sometimes gloves. Helmets and safety gear are provided."
    },
    {
        question: "Is quad biking dangerous?",
        answer: "Like any off-road sport, it has risks, but with proper instruction and safety gear, it’s safe for most riders."
    },
    {
        question: "Are children allowed to ride?",
        answer: "Children can ride as passengers, usually from age 7–10 depending on size and the operator’s rules."
    },
    {
        question: "How long are the quad bike tours?",
        answer: "Tours usually last from 1 to 3 hours, depending on the route."
    },
    {
        question: "Can I ride alone or only in groups?",
        answer: "Both options are available; solo riding is allowed after instruction."
    }
];

// HORSE RIDING
const horseRidingQuestions = [
    {
        question: "Do I need experience to ride a horse?",
        answer: "No, beginner lessons are available, and all rides are supervised by instructors."
    },
    {
        question: "Is horse riding safe?",
        answer: "Yes, with proper guidance, helmets, and safety instructions, riding is safe."
    },
    {
        question: "How long do horse rides last?",
        answer: "Rides can last from 30 minutes to 2 hours depending on the tour."
    },
    {
        question: "Can children ride horses?",
        answer: "Yes, with appropriate-sized horses and supervision, children can ride from age 4–5."
    },
    {
        question: "What should I wear for horse riding?",
        answer: "Comfortable clothing, long pants, and closed shoes. Helmets are provided."
    },
    {
        question: "Are guided tours available?",
        answer: "Yes, guided trail rides are available for all skill levels."
    }
];

// WHITE WATER RAFTING
const raftingQuestions = [
    {
        question: "Do I need experience to go rafting?",
        answer: "No, beginners can join guided tours with experienced instructors."
    },
    {
        question: "Is rafting safe?",
        answer: "Yes, life jackets, helmets, and trained guides ensure safety."
    },
    {
        question: "What age is suitable for rafting?",
        answer: "Usually children over 8 can participate, depending on the river’s difficulty."
    },
    {
        question: "How long does a rafting trip last?",
        answer: "Trips typically last 2–4 hours, depending on the section of the river."
    },
    {
        question: "What should I wear for rafting?",
        answer: "Quick-dry clothes, water shoes, and a swimsuit. Safety gear is provided."
    },
    {
        question: "Can I take photos during rafting?",
        answer: "Yes, but keep devices waterproofed; some tours offer professional photography."
    }
];

// WINTER SPORTS (OTHER THAN SKIING)
const winterSportsQuestions = [
    {
        question: "What winter sports can I try in Gudauri?",
        answer: "Snowboarding, tubing, snowshoeing, and ziplining, in addition to skiing and paragliding."
    },
    {
        question: "Do I need experience?",
        answer: "No, beginner lessons and guided activities are available."
    },
    {
        question: "What clothing is required?",
        answer: "Warm, waterproof layers, gloves, hats, and appropriate boots. Equipment is available for rent."
    },
    {
        question: "Are there activities suitable for children?",
        answer: "Yes, many winter sports have family-friendly options, including kids’ slopes and sledding areas."
    },
    {
        question: "Is equipment rental available?",
        answer: "Yes, snowboards, sleds, and other gear can be rented locally."
    },
    {
        question: "Is it safe for non-skiers to try other winter activities?",
        answer: "Yes, many activities are designed for beginners and non-skiers."
    }
]


    return (
        <section className="w-full flex justify-center items-center bg-[#f1fdf5] pt-40">
            <div className="w-[80%] flex pl-7.5 ">
                <div className="w-full flex flex-col pl-7.5 ">
                    <h2 className="border-b w-37.5 text-[25px] h-12.5 text-[#193352] font-[700]">FAQ</h2>
                    <div className="pt-3.75">
                        <section className="flex items-center gap-2.5 py-3.75">
                            <details open>
                                <summary className="text-[30px] text-[#193352] cursor-pointer">GENERAL</summary>
                                {
                                    generalQuestions.map((question, index) => {
                                        return <details key={index} className="pl-[10px]">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-[10px] items-center cursor-pointer"><i className="fa-solid fa-plus relative top-[2px] "></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                        
                        <section className="flex items-center gap-[10px] py-[15px]">
                            <details >
                                <summary className="text-[30px] text-[#193352] cursor-pointer">SKI</summary>
                                {
                                    skiQuestions.map((question, index) => {
                                        return <details key={index} className="pl-[10px]">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-[10px] items-center cursor-pointer"><i className="fa-solid fa-plus relative top-[2px]"></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                        
                        <section className="flex items-center gap-2.5 py-3.75">
                            <details>
                                <summary className="text-[30px] text-[#193352] cursor-pointer">PARAGLIDING</summary>
                                {
                                    paraglidingQuestions.map((question, index) => {
                                        return <details key={index} className="pl-[10px]">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-[10px] items-center cursor-pointer"><i className="fa-solid fa-plus relative top-[2px] "></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                        {/* QUAD BIKE TOURS */}
                        <section className="flex items-center gap-2.5 py-3.75">
                            <details>
                                <summary className="text-[30px] text-[#193352] cursor-pointer">QUAD BIKE TOURS</summary>
                                {
                                    quadBikeQuestions.map((question, index) => {
                                        return <details key={index} className="pl-2.5">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-2.5 items-center  cursor-pointer"><i className="fa-solid fa-plus relative top-0.5"></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                        {/* HORSE RIDING */}
                        <section className="flex items-center gap-2.5 py-3.75">
                            <details>
                                <summary className="text-[30px] text-[#193352] cursor-pointer">HORSE RIDING</summary>
                                {
                                    horseRidingQuestions.map((question, index) => {
                                        return <details key={index} className="pl-2.5">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-2.5 items-center cursor-pointer"><i className="fa-solid fa-plus relative top-0.5 "></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                        {/* WHITE WATER RAFTING */}
                        <section className="flex items-center gap-2.5 py-3.75 cursor-pointer">
                            <details>
                                <summary className="text-[30px] text-[#193352]">WHITE WATER RAFTING</summary>
                                {
                                    raftingQuestions.map((question, index) => {
                                        return <details key={index} className="pl-2.5">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-2.5 items-center cursor-pointer"><i className="fa-solid fa-plus relative top-0.5"></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                        {/* WINTER SPORTS (OTHER THAN SKIING) */}
                        <section className="flex items-center gap-2.5 py-3.75">
                            <details>
                                <summary className="text-[30px] text-[#193352] cursor-pointer">WINTER SPORTS (OTHER THAN SKIING)</summary>
                                {
                                    winterSportsQuestions.map((question, index) => {
                                        return <details key={index} className="pl-2.5">
                                            <summary className="text-[25px] text-[#193352] list-none flex gap-2.5 items-center cursor-pointer"><i className="fa-solid fa-plus relative top-0.5 "></i><p>{question.question}</p></summary>
                                            <p className="pl-15 text-[#193352]">{question.answer}</p>
                                        </details>
                                    })
                                }
                            </details>
                        </section>
                    </div>
                    <hr />
                </div>
                <img className="" src="src/assets/men.png" alt="" />
            </div>
        </section>
    )
}

export default Faq
