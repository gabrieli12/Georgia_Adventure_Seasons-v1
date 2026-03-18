




import React from "react";
import LegalConsent from "../important/LegalConsent";

const About = React.memo(() => {


    const handleWhatsAppClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Contact');
        }
    };

    return (
        <div className="bg-white text-gray-800">

            <LegalConsent />

            {/* HERO SECTION */}
            <section className="relative bg-black text-white py-32 pt-50 px-6 text-center">
                <div className="absolute inset-0 z-0 w-full overflow-hidden" >
                    <img
                        loading="lazy"
                        src="main.png"
                        alt="Georgia Mountains"
                        className="w-full h-full object-cover  scale-105"
                    />
                    <div className="absolute inset-0 bg-black/75"></div>
                </div>
                <div className="max-w-4xl mx-auto relative">
                    <h1 className="text-5xl font-bold mb-6">
                        About Georgia Adventure Seasons
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Four Seasons. Endless Adventures in Georgia / Mtiuleti.
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We create complete mountain experiences — combining activities,
                        transportation, trusted partners, and seamless organization
                        into one unforgettable journey.
                    </p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Georgia Adventure Seasons is a mountain experience platform
                            operating in Mtiuleti and surrounding regions. Our mission is
                            to make Georgia’s natural beauty accessible through organized,
                            safe, and high-quality outdoor experiences.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We work with certified instructors, professional drivers,
                            and reliable local partners to deliver a smooth experience
                            from airport transfer to the final adventure moment.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-10 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-semibold mb-6">Our Core Values</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li>✔ Safety & Professionalism</li>
                            <li>✔ Transparency & Fair Pricing</li>
                            <li>✔ Local Expertise</li>
                            <li>✔ Personalized Experience</li>
                            <li>✔ Long-Term Trust</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* STATISTICS SECTION */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-black">4</h3>
                        <p className="text-gray-600 mt-2">Seasons Covered</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">1000+</h3>
                        <p className="text-gray-600 mt-2">Happy Guests</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black">10+</h3>
                        <p className="text-gray-600 mt-2">Activity Types</p>
                    </div>
                </div>
            </section>

            {/* FOUNDER STORY */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <img
                            src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/566206451_2237987146688726_2547429142356105792_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEvk4FXBsPAtclWFlO6IAI4M1OgTOPuegEzU6BM4-56ATchwhspDbG91AEjgI_SlW23rdC-glkiIWyu2wVBO1LE&_nc_ohc=S40YM_NR0pQQ7kNvwGjdymV&_nc_oc=Adlfpnt4uWCgJjLUELjX-IQi6adukZon_ZLUT6Lixky7Ti4nNj9JiJQwUezIAcd-vZAj7ROJG4sJ6qMKecun7aWP&_nc_zt=23&_nc_ht=scontent.ftbs5-2.fna&_nc_gid=1Iddkv3P6yLb-BGQCK0iHw&_nc_ss=8&oh=00_AfyRGiWrk32RLYtQomBLSwyIkDGyjSvxhetK1bK6qRKsTQ&oe=69B8E6A1"
                            alt="Founder"
                            className="rounded-3xl shadow-xl"
                            loading="lazy"

                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Founder’s Vision
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Georgia Adventure Seasons was founded by Gabriel M.
                            with a simple but powerful idea — to build a trusted adventure
                            platform that simplifies mountain travel in Georgia.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Instead of guests searching separately for activities,
                            transfers, and local contacts, we created a unified system
                            where everything is organized professionally under one brand.
                        </p>
                        {/* <div className="mt-8 flex gap-10">
                            <div>
                                <h3 className="text-3xl font-bold">4</h3>
                                <p className="text-gray-500 text-sm">Seasons Covered</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">1000+</h3>
                                <p className="text-gray-500 text-sm">Happy Guests</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold">24/7</h3>
                                <p className="text-gray-500 text-sm">Support</p>
                            </div>
                        </div> */}
                    </div>

                </div>
            </section>

            <section className="bg-gray-50 py-24 px-6 text-center">
                <div className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-3">
                    <img src="main_logo/Georgia Adventure Logo for images.png" className="w-30" alt="" />
                    <h2 className="text-3xl font-bold ">Our Social Pages</h2>
                    <hr className="bg-black  w-full mt-4" />
                    <div className="grid grid-cols-4 max-md:grid-cols-3 gap-x-20 gap-y-10 mt-10 justify-center items-center px-5">
                        <a href="https://www.facebook.com/profile.php?id=61580045558141" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img loading="lazy"
                                    className="w-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/960px-2023_Facebook_icon.svg.png" alt="facebook logo" />
                                <h3 className="font-semibold text-lg mb-3">Facebook</h3>
                            </div>

                        </a>

                        <a href="https://www.instagram.com/georgia_adventure_seasons/" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img loading="lazy"
                                    className="w-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/960px-Instagram_logo_2022.svg.png" alt="instagram logo" />
                                <h3 className="font-semibold text-lg mb-3">Instagram</h3>
                            </div>
                        </a>

                        <a href="https://www.tiktok.com/@georgiaadventureseasons" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img loading="lazy"
                                    className="w-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/960px-Tiktok_icon.svg.png" alt="tiktok logo" />
                                <h3 className="font-semibold text-lg mb-3">TikTok</h3>
                            </div>
                        </a>


                        <a href="https://www.youtube.com/@GeorgiaAdventureSeasons/shorts" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="youtube logo" />
                                <h3 className="font-semibold text-lg mb-3">YouTube</h3>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* WHAT MAKES US DIFFERENT */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">
                        What Makes Us Different
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Unlike individual service providers, we combine everything
                        into one organized system. Instead of searching for separate
                        instructors, transfers, rentals, and activities — we bring
                        everything together under one trusted brand.
                    </p>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="bg-black text-white py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">
                        More Than an Activity — A Complete Experience
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-10">
                        Whether you visit during winter snow or summer sunshine,
                        we ensure every moment in Georgia’s mountains feels
                        organized, exciting, and effortless.
                    </p>
                    <a
                        href="https://wa.me/995595706585?text=Hello,%20I%20would%20like%20to%20book%20an%20activity."
                        onClick={handleWhatsAppClick}

                        className="inline-block bg-white text-black font-semibold px-10 py-4 rounded-2xl hover:bg-gray-200 transition"
                    >
                        Plan Your Adventure
                    </a>
                </div>
            </section>


            {/* Temporarily unused */}
            {/* TEAM SECTION */}
            {/* <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">
                        Meet Our Team
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <img
                                src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/434741241_1793314374489341_868622480388596603_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_ohc=SB95DTJAuAIQ7kNvwFrkO_c&_nc_oc=Adm7gj41W1ZLpLs2Yix3V5q-FQuV4Wivzbkh4M90O_0wTbaOWLGtTH08VtSikFrOeIQcI5c2vtTwk2mqjaQfTrwp&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=_QFA1phN7v4_agqWNUibBA&_nc_ss=8&oh=00_Aftt3f_nNgSsSJfDxWumQwWvBqbQFlKQF5gU7wTTxU_0XQ&oe=69A9DA2B"
                                alt="Founder"
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold">Gabriel Molodini</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Founder & Operations Manager
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Responsible for organizing experiences, coordinating partners,
                                and ensuring every guest receives professional and reliable service.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <img
                                src="/images/team2.jpg"
                                alt="Instructor"
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold">Certified Instructor</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Mountain Activity Specialist
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Experienced professional focused on safety, skill development,
                                and delivering high-quality mountain experiences.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-md">
                            <img
                                src="/images/team3.jpg"
                                alt="Driver"
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-semibold">Professional Driver</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Transportation Specialist
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ensuring safe, comfortable, and reliable transportation
                                throughout every journey.
                            </p>
                        </div>

                    </div>
                </div>
            </section> */}
        </div>
    );
});

export default About;
