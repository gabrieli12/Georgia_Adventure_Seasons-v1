import { useRef } from 'react';
import ReviewsComp from './ReviewsComp';

function Reviews({ title }) {
    const slider = useRef(null);

    const ReviewInfo = [
    {
      text: "Incredible hiking experience! The trails were well-maintained and the views were absolutely spectacular. Our guide was very knowledgeable about the local flora and fauna. The traditional lunch they prepared was a perfect way to experience Georgian cuisine.",
      tag: "Mountain Hiking Adventure",
      loc: "Sydney, Australia",
      time: "3 weeks ago",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      name: "James Wilson"
    },
    {
      text: "One of the best outdoor experiences I’ve ever had. The hike was challenging but rewarding, and the panoramic mountain views were unforgettable.",
      tag: "Alpine Trail Experience",
      loc: "Zurich, Switzerland",
      time: "1 month ago",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      name: "Emily Carter"
    },
    {
      text: "Perfect mix of adventure and relaxation. The guide made everyone feel safe, and the scenery looked straight out of a postcard.",
      tag: "Nature & Adventure Hike",
      loc: "Gudauri, Georgia",
      time: "2 months ago",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      name: "Luka Beridze"
    },
    {
      text: "A must-do experience for nature lovers. Fresh mountain air, peaceful trails, and incredible photo opportunities throughout the hike.",
      tag: "Scenic Mountain Walk",
      loc: "Banff, Canada",
      time: "5 weeks ago",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
      name: "Daniel Thompson"
    },
    {
      text: "Absolutely worth it! The hike was well-organized and the group atmosphere was amazing. I’d do it again in a heartbeat.",
      tag: "Guided Hiking Tour",
      loc: "Queenstown, New Zealand",
      time: "4 days ago",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      name: "Oliver Scott"
    },
    {
      text: "Absolutely worth it! The hike was well-organized and the group atmosphere was amazing. I’d do it again in a heartbeat.",
      tag: "Guided Hiking Tour",
      loc: "Queenstown, New Zealand",
      time: "4 days ago",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      name: "Oliver Scott"
    },
    {
      text: "Absolutely worth it! The hike was well-organized and the group atmosphere was amazing. I’d do it again in a heartbeat.",
      tag: "Guided Hiking Tour",
      loc: "Queenstown, New Zealand",
      time: "4 days ago",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      name: "Oliver Scott"
    },
    {
      text: "Absolutely worth it! The hike was well-organized and the group atmosphere was amazing. I’d do it again in a heartbeat.",
      tag: "Guided Hiking Tour",
      loc: "Queenstown, New Zealand",
      time: "4 days ago",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      name: "Oliver Scott"
    }
  ]
  const scrollNext = () => {
    if (!slider.current) return
    const cardWidth = slider.current.children[0].offsetWidth
    const gap = 35
    slider.current.scrollBy({ left: cardWidth + gap, behavior: "smooth" })
  }

  const scrollPrev = () => {
    if (!slider.current) return
    const cardWidth = slider.current.children[0].offsetWidth;
    const gap = 35;
    slider.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  }


  return (
      <div className="py-32 bg-[#f1fdf5] flex items-center justify-center flex-col gap-[20px]">
            <p className="bg-[#dbfce7] px-[15px] py-[5px] rounded-[15px] w-[max-content] text-[12px] text-[#4e6f30] font-[700]">Customer Reviews</p>
            <h1 className='text-4xl md:text-5xl mb-6 text-gray-900 text-center'>What Our Adventurers Say</h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto text-center'>Don't just take our word for it. Here's what our guests have to say about their unforgettable Georgian adventure experiences.</p>
            <div className="flex items-center justify-center gap-[50px] w-full ">
                <div className="w-[30px] h-[30px] bg-white rounded-[50%] cursor-pointer flex items-center justify-center border-gray-300 border-[1px]"  
                onClick={scrollPrev}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className={`${'w-[79%] flex justify-between overflow-hidden gap-[35px]'} max-md:w-full`} id='main-div' ref={slider}>
                    {
                      ReviewInfo.map((review, index) => (
                        <ReviewsComp {...review} key={index}/>
                      ))
                    }
                </div>
                <div className="w-[30px] h-[30px] bg-white rounded-[50%] cursor-pointer flex items-center justify-center border-gray-300 border-[1px]" onClick={scrollNext}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
  );
}

export default Reviews;