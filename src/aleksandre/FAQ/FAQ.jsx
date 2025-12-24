function FAQ() {
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


    return (
        <section className="w-full flex flex-col pl-[30px] bg-[#f6f7fd]">
            <h2 className="border-b w-[150px] text-[25px] h-[50px] text-[#193352] font-[700] border-[#e0e3eb]">FAQ</h2>
            <div className="pt-[15px]">
                <section className="flex items-center gap-[10px] py-[15px]">
                    <details>
                        <summary  className="text-[30px] text-[#193352]">GENERAL</summary>
                        {
                            generalQuestions.map((question, index) => {
                                return <details key={index} className="pl-[10px]">
                                    <summary className="text-[25px] text-[#193352] list-none flex gap-[10px] items-center"><i className="fa-solid fa-plus relative top-[2px]"></i><p>{question.question}</p></summary>
                                    <p className="pl-[10px] text-[#193352]">{question.answer}</p>
                                </details>
                            })
                        }
                    </details>
                </section>
                <hr className="text-[#e0e3eb]"/>
                <section className="flex items-center gap-[10px] py-[15px]">
                    <details>
                        <summary className="text-[30px] text-[#193352]">SKI</summary>
                        {
                            skiQuestions.map((question, index) => {
                                return <details key={index} className="pl-[10px]">
                                    <summary className="text-[25px] text-[#193352] list-none flex gap-[10px] items-center"><i className="fa-solid fa-plus relative top-[2px]"></i><p>{question.question}</p></summary>
                                    <p className="pl-[10px] text-[#193352]">{question.answer}</p>
                                </details>
                            })
                        }
                    </details>
                </section>
                <hr className="text-[#e0e3eb]"/>
                <section className="flex items-center gap-[10px] py-[15px]">
                    <details>
                        <summary className="text-[30px] text-[#193352]">PARAGLIDING</summary>
                        {
                            paraglidingQuestions.map((question, index) => {
                                return <details key={index} className="pl-[10px]">
                                    <summary className="text-[25px] text-[#193352] list-none flex gap-[10px] items-center"><i className="fa-solid fa-plus relative top-[2px]"></i><p>{question.question}</p></summary>
                                    <p className="pl-[10px] text-[#193352]">{question.answer}</p>
                                </details>
                            })
                        }
                    </details>
                </section>
            </div>
            <hr  className="text-[#e0e3eb]"/>
        </section>
    )
}

export default FAQ
