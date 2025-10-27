import CustomerReviewsDiv from './CustomerReviewsDiv'

function CustomerReviews() {
    return (
        <div className="h-screen bg-[#f1fdf5] flex items-center justify-center flex-col gap-[20px]">
            <p className="bg-[#dbfce7] px-[15px] py-[5px] rounded-[15px] w-[max-content] text-[12px] text-[#4e6f30] font-[700]">Customer Reviews</p>
            <h1 className='text-4xl md:text-5xl mb-6 text-gray-900 text-center'>What Our Adventurers Say</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto text-center'>Don't just take our word for it. Here's what our guests have to say about their unforgettable Georgian adventure experiences.</p>
            <div className="flex items-center justify-between w-full ">
                <div className="w-[30px] h-[30px] bg-white rounded-[50%] cursor-pointer flex items-center justify-center border-gray-300 border-[1px]" 
                onClick={()=> {
                    document.getElementById('main-div').scrollBy({ left: -350, behavior: "smooth" })
                }}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className={`${'w-[75%] flex justify-between overflow-hidden gap-[35px]'} max-md:w-full`} id='main-div'>
                    <CustomerReviewsDiv text='"Incredible hiking experience! The trails were well-maintained and the views were absolutely spectacular. Our guide was very knowledgeable about the local flora and fauna. The traditional lunch they prepared was a perfect way to experience Georgian cuisine."' tag='Mountain Hiking Adventure' loc='Sydney, Australia' time='3 weeks ago' img='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' name='James Wilson'/>
                    <CustomerReviewsDiv text='The paragliding was a dream come true! Flying over the Georgian mountains with such experienced pilots made me feel completely safe. The hiking portion afterwards showed us hidden gems of the region. Highly recommend for anyone seeking adventure with breathtaking views.' tag='Sky & Mountain Explorer' loc='Toronto, Canada' time='1 month ago' img='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' name='Michael Chen'/>
                    <CustomerReviewsDiv text='Perfect winter getaway! The skiing lessons were great for beginners like me, and the snowmobile tour was exhilarating. The mountain cottage was cozy and warm, with traditional Georgian hospitality. The hot springs after a day of activities were the perfect way to relax.' tag='Winter Wonderland Package' loc='Sydney, Australia' time='3 weeks ago' img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' name='James Wilson'/>
                    <CustomerReviewsDiv text='What an adrenaline rush! The rapids were challenging but our guides were professional and kept everyone safe. The scenery along the river is stunning. They even managed to get great action photos of us navigating the rapids. Definitely doing this again!' tag='White Water Rafting' loc='Sydney, Australia' time='3 weeks ago' img='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' name='James Wilson'/>
                    <CustomerReviewsDiv text='Such a peaceful and beautiful experience. The horses were well-trained and gentle, perfect for riders of all levels. Riding through the mountain valleys felt like stepping back in time. Our guide shared fascinating stories about Georgian history and culture along the way.' tag='Horse Riding Mountain Trail' loc='Sydney, Australia' time='3 weeks ago' img='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face' name='James Wilson'/>
                    <CustomerReviewsDiv text='Absolutely incredible experience! The quad biking through the mountains was thrilling, and the traditional Georgian lunch in the village was authentic and delicious. Our guide Giorgi was knowledgeable and made sure everyone felt safe. The drone footage they provided is amazing - perfect memories!' tag='Mountain Hiking Adventure' loc='Sydney, Australia' time='3 weeks ago' img='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' name='James Wilson'/>
                </div>
                <div className="w-[30px] h-[30px] bg-white rounded-[50%] cursor-pointer flex items-center justify-center border-gray-300 border-[1px]" onClick={()=> {
                    document.getElementById('main-div').scrollBy({ left: 350, behavior: "smooth" })
                }}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews
