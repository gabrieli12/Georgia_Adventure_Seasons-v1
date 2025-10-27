


export default function Footer() {
    return (

        <footer className="relative w-full bg-gray-900 text-white">
            <div className="container w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="w-full">
                        <div className="footer-logo flex items-center mb-6">
                            <span className="text-2xl text-green-400 mr-2">
                                🏔️
                            </span>

                            <span className="flex flex-col">
                                <h1 className="text-xl text-white leading-none">Georgia Adventure</h1>
                                <h2 className="text-green-400 text-sm leading-none">Seasons</h2>
                            </span>
                        </div>

                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            Experience the ultimate Georgian adventure with our year-round activities in the beautiful Mtiuleti region. Four seasons, endless adventures!
                        </p>

                        <div className="flex flex-row md:flex-col md:space-y-2">
                            <span class="w-fit inline-flex items-center rounded-lg bg-green-900 leading-none px-2 py-1 text-xs font-medium text-green-300 border border-solid border-green-700">
                                <i class="fa-solid fa-shield text-[10px] mr-2 "></i> Safety Certified
                            </span>

                            <span class="w-fit inline-flex items-center rounded-lg bg-blue-900 leading-none px-2 py-1 text-xs font-medium text-blue-300 border border-solid border-blue-700">
                                <i class="fa-solid fa-award text-[10px] mr-2"></i> Tourism Award Winner
                            </span>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-lg mb-6">Quick Links</h1>
                        <ul className="space-y-3">
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Tours & Activities</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Photo Gallery</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-lg mb-6">Adventures</h1>
                        <ul className="space-y-3">
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Quad Bike Tours</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Horse Riding</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Paragliding</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">White Water Rafting</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Winter Sports</a></li>
                            <li><a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Mountain Hiking</a></li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-lg mb-6">Get In Touch</h1>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3"><i class="fa-solid fa-location-dot text-[14px] text-green-400 mt-1.5"></i> <span className="block text-gray-300 hover:text-white transition-colors text-sm">Mtiuleti Region <br /> Georgia, Caucasus</span></li>
                            <li className="flex items-start gap-3"><i class="fa-solid fa-phone text-[14px] text-green-400 mt-0.5"></i> <span className="block text-gray-300 hover:text-white transition-colors text-sm">+995 555 123 456</span></li>
                            <li className="flex items-start gap-3"><i class="fa-regular fa-envelope text-[14px] text-green-400 mt-0.5"></i> <span className="block text-gray-300 hover:text-white transition-colors text-sm">info@georgiaadventure.ge</span></li>
                            <li className="flex items-start gap-3"><i class="fa-regular fa-clock text-[14px] text-green-400 mt-0.5"></i> <span className="block text-gray-300 hover:text-white transition-colors text-sm">9:00 AM - 8:00 PM</span></li>
                        </ul>

                        <div className="flex flex-col gap-3 mt-5">

                            <h1 className="text-sm">Stay Updated</h1>

                            <div className="flex flex-row gap-2">
                                <input className="rounded-lg outline-none text-sm px-2 py-2 bg-gray-800 border border-solid border-gray-700" type="email" name="email" placeholder="Your email" />
                                <button className="bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2 text-sm">Subscribe</button>
                            </div>

                            <p className="text-gray-400 text-xs">Get the latest adventure deals and seasonal offers</p>

                        </div>

                        <div className="flex flex-col gap-2 mt-3">
                            <strong className="text-sm">Follow Us</strong>
                            <ul className="flex items-center gap-5">
                                <li><a href="https://www.facebook.com/profile.php?id=61580045558141" aria-label="Home"><i class="fa-brands fa-facebook-f text-gray-400 hover:text-white"></i></a></li>
                                <li><a href="https://www.instagram.com/georgia_adventure_seasons/" aria-label="Home"><i class="fa-brands fa-instagram text-gray-400 hover:text-white"></i></a></li>
                                <li><a href="https://www.youtube.com/@GeorgiaAdventureSeasons" aria-label="Home"><i class="fa-brands fa-youtube text-gray-400 hover:text-white"></i></a></li>
                                <li><a href="https://www.tiktok.com/@georgiaadventureseasons" aria-label="Home"><i class="fa-brands fa-tiktok text-gray-400 hover:text-white"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <li><a href="#"><i class="fa-brands fa-twitter text-gray-400 hover:text-white"></i></a></li> */}



                </div>



                <div className="footer-center grid grid-cols-2 md:grid-cols-4 gap-3 border-t border-t-solid border-t-gray-700 pt-10 pb-16 mt-10">
                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl text-green-400 mb-1">10,000+</span>
                        <span className="text-sm text-gray-300">Happy Adventurers</span>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl text-green-400 mb-1">15+</span>
                        <span className="text-sm text-gray-300">Activity Types</span>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl text-green-400 mb-1">4.9/5</span>
                        <span className="text-sm text-gray-300">Average Rating</span>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center">
                        <span className="text-2xl text-green-400 mb-1">24/7</span>
                        <span className="text-sm text-gray-300">Customer Support</span>
                    </div>
                </div>




            </div>

            <div className="w-full border-t border-t-solid border-t-gray-700 pt-5 pb-5">
                <div className="container mx-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-gray-400">© 2024 Georgia Adventure Seasons. All rights reserved.</span>

                    <ul className="flex flex-row gap-6">
                        <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="text-sm text-gray-400 hover:text-white">Cancellation Policy</a></li>
                        <li><a href="#" className="text-sm text-gray-400 hover:text-white">Safety Guidelines</a></li>
                    </ul>
                </div>

            </div>
        </footer>

    )
}