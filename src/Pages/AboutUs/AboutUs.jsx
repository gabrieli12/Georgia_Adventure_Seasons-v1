// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero Section */}
//       <section className="bg-black text-white py-24 pt-40 px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             About Georgia Adventure Seasons
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300">
//             Four Seasons. Endless Adventures in Georgia / Mtiuleti.
//           </p>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Georgia Adventure Seasons was created to connect travelers with the true
//               spirit of Georgia’s mountains. We believe that every season brings a new
//               opportunity to explore, experience, and create unforgettable memories.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Our mission is simple — to provide safe, well-organized, and authentic
//               mountain experiences for both local and international guests.
//             </p>
//           </div>

//           <div>
//             <img
//               src="src\assets\photo-1709506530108-4951e792208f 4.png"
//               alt="Georgia Mountains"
//               className="rounded-2xl shadow-lg"
//             />
//           </div>

//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="bg-gray-50 py-20 px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

//           <div className="grid md:grid-cols-3 gap-10">

//             <div className="p-6 bg-white rounded-2xl shadow-md">
//               <h3 className="text-xl font-semibold mb-4">
//                 Professional Team
//               </h3>
//               <p className="text-gray-600">
//                 Experienced instructors and local experts dedicated to your safety
//                 and enjoyment.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-2xl shadow-md">
//               <h3 className="text-xl font-semibold mb-4">
//                 All-Season Experiences
//               </h3>
//               <p className="text-gray-600">
//                 Unique activities designed for winter, spring, summer, and autumn
//                 adventures.
//               </p>
//             </div>

//             <div className="p-6 bg-white rounded-2xl shadow-md">
//               <h3 className="text-xl font-semibold mb-4">
//                 Trusted & Reliable
//               </h3>
//               <p className="text-gray-600">
//                 Transparent communication, flexible scheduling, and high-quality
//                 service every step of the way.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 px-6 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//           <p className="text-gray-600 leading-relaxed text-lg">
//             To showcase the beauty of Georgia’s mountains through carefully
//             curated outdoor experiences that inspire adventure, confidence,
//             and connection with nature.
//           </p>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default AboutUs;

// import React from 'react';

// const AboutUs = () => {
//     return (
//         <div className="bg-white">

//             {/* 1. Hero Section - მთების ფონით */}
//             <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
//                 <div className="absolute inset-0 z-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&q=80&w=1600"
//                         alt="Georgia Mountains"
//                         className="w-full h-full object-cover scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/50"></div>
//                 </div>

//                 <div className="relative z-10 text-center px-6">
//                     <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight uppercase">
//                         აღმოაჩინე <span className="text-orange-500">საქართველო</span>
//                     </h1>
//                     <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light italic">
//                         "Georgia Adventure Seasons — შენი მეგზური ველურ ბუნებასა და დაუვიწყარ თავგადასავლებში"
//                     </p>
//                 </div>
//             </section>

//             {/* 2. Story Section - ვინ ვართ ჩვენ */}
//             <section className="py-20 container mx-auto px-6">
//                 <div className="grid lg:grid-cols-2 gap-16 items-center">
//                     <div className="space-y-6">
//                         <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm">ჩვენი ისტორია</span>
//                         <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//                             ჩვენ არ ვყიდით უბრალოდ ტურებს, ჩვენ ვქმნით მოგონებებს
//                         </h2>
//                         <p className="text-gray-600 leading-relaxed text-lg">
//                             **Georgia Adventure Seasons** შეიქმნა ადამიანების მიერ, რომლებსაც უზომოდ უყვართ საქართველოს მთები, მდინარეები და ფარული ბილიკები. ჩვენი მიზანია, გაჩვენოთ საქართველო ისეთი, როგორიც ის სინამდვილეშია — ველური, ავთენტური და სტუმართმოყვარე.
//                         </p>
//                         <div className="grid grid-cols-2 gap-6 pt-4">
//                             <div className="border-l-4 border-orange-500 pl-4">
//                                 <h4 className="font-bold text-2xl">100%</h4>
//                                 <p className="text-sm text-gray-500">უსაფრთხოების გარანტია</p>
//                             </div>
//                             <div className="border-l-4 border-orange-500 pl-4">
//                                 <h4 className="font-bold text-2xl">50+</h4>
//                                 <p className="text-sm text-gray-500">ლოკალური მარშრუტი</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="relative group">
//                         <img
//                             src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&q=80&w=800"
//                             alt="Adventure Group"
//                             className="rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
//                         />
//                         <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
//                             <p className="text-orange-600 font-black text-3xl">Professional</p>
//                             <p className="text-gray-800 font-medium">Mountain Guides</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* 3. Why Us - რატომ ჩვენ? */}
//             <section className="py-20 bg-gray-900 text-white">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-5xl font-bold mb-4">რატომ უნდა აირჩიოთ ჩვენ?</h2>
//                         <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
//                     </div>

//                     <div className="grid md:grid-cols-3 gap-12">
//                         {/* Feature 1 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-20 h-20 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                                 <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.106-1.789l5-2.5a2 2 0 011.788 0l5 2.5A2 2 0 0117 6v9.487a2 2 0 01-1.106 1.789L10.447 18M9 20a2 2 0 002 0l2.121-1.061l1.59-3.18a2 2 0 011.747-1.127H19m-7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold">ექსკლუზიური მარშრუტები</h3>
//                             <p className="text-gray-400">ჩვენ მიგყავართ იქ, სადაც ჩვეულებრივი ტურისტული გზები არ გადის.</p>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-20 h-20 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                                 <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold">უსაფრთხოება უპირველეს ყოვლისა</h3>
//                             <p className="text-gray-400">ჩვენი აღჭურვილობა და გიდები სერტიფიცირებულია საერთაშორისო სტანდარტებით.</p>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="text-center space-y-4">
//                             <div className="w-20 h-20 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                                 <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="text-xl font-bold">ლოკალური ცოდნა</h3>
//                             <p className="text-gray-400">ჩვენ ვიცით ყველა სოფლის ისტორია, ყველა მთის ლეგენდა და საუკეთესო მასპინძლები.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* 4. CTA Section */}
//             <section className="py-20 text-center px-6">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">მზად ხარ შენი შემდეგი თავგადასავლისთვის?</h2>
//                 <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
//                     დაჯავშნე ტური ახლავე
//                 </button>
//             </section>

//         </div>
//     );
// };

// export default AboutUs;






import React from "react";
import LegalConsent from "../important/LegalConsent";

const About = () => {
    return (
        <div className="bg-white text-gray-800">

            <LegalConsent />

            {/* HERO SECTION */}
            <section className="relative bg-black text-white py-32 pt-50 px-6 text-center">
                <div className="absolute inset-0 z-0 w-full overflow-hidden" >
                    <img
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
                            src="https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/566206451_2237987146688726_2547429142356105792_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_ohc=kG9cYIutEp4Q7kNvwGXuFbS&_nc_oc=AdkbWWCDYmwaD_8wDKjLvGHvZ0oBF-lnm6Tlhk-qWJZNMLzkkkKnbSDg-H27TQuwJPLAdBDgn-YTKXV1WpdUimdu&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=hENcPsjeJKnb_7u8WskilQ&_nc_ss=8&oh=00_AfsHOpsvniBNvXh3yKL4jiAYQXBEk3OdQL2dEErWBx2TIA&oe=69A9F5A1"
                            alt="Founder"
                            className="rounded-3xl shadow-xl"
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
                                <img className="w-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/960px-2023_Facebook_icon.svg.png" alt="" />
                                <h3 className="font-semibold text-lg mb-3">Facebook</h3>
                            </div>

                        </a>

                        <a href="https://www.instagram.com/georgia_adventure_seasons/" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img className="w-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/960px-Instagram_logo_2022.svg.png" alt="" />
                                <h3 className="font-semibold text-lg mb-3">Instagram</h3>
                            </div>
                        </a>

                        <a href="https://www.tiktok.com/@georgiaadventureseasons" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img className="w-15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/960px-Tiktok_icon.svg.png" alt="" />
                                <h3 className="font-semibold text-lg mb-3">TikTok</h3>
                            </div>
                        </a>


                        <a href="https://www.youtube.com/@GeorgiaAdventureSeasons/shorts" target="__blank">
                            <div className="flex flex-col justify-center items-center gap-3 cursor-pointer">
                                <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="" />
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
                        href="https://wa.me/995XXXXXXXXX"
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
};

export default About;
