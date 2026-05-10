import { useRef, useEffect } from 'react';
import ReviewsComp from './ReviewsComp';

function Reviews({ title }) {
  const slider = useRef(null);

  const ReviewInfo = [
    {
      text: "Everything was perfectly organized — from airport pickup to skiing and paragliding. Truly a full-service experience!",
      tag: "Ski & Snowboard Lessons",
      loc: "UK",
      img: "unnamed.png",
      name: "Emily",
      rating: 5

    },
    {
      text: "Best ski school in Georgia, Super friendly team, great communication, and really fun lessons. I improved a lot in just one day!",
      tag: "Ski & Snowboard Lessons",
      loc: "Sydney, Australia",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      name: "James Wilson",
      rating: 5
    },
    {
      text: "We booked quad tours and snowmobiles. Amazing team, very professional and friendly. Highly recommended!",
      tag: "ATV & Snowmobile Tours",
      loc: "Zurich, Switzerland",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      name: "Emily Carter",
      rating: 5
    },
    {
      text: "Perfect for tourists! They helped us plan everything and we just enjoyed our trip.",
      tag: "Full Trip",
      loc: "Gudauri, Georgia",
      time: "2 months ago",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      name: "Sophie",
      rating: 4
    },
    {
      text: "We booked our entire Gudauri trip through this company — transportation, accommodation, ski lessons, and even paragliding. Everything was organized perfectly, and the team was always available to help. This is exactly what you want when traveling abroad",
      tag: "Full Gudauri Trip",
      loc: "France",
      time: "5 weeks ago",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
      name: "Daniel Thompson",
      rating: 5
    },
    {
      text: "Highly recommended for tourists visiting Georgia, If you don’t want to waste time searching and organizing everything yourself, this is the perfect solution. They offer everything in one place — activities, guides, transport, and support.",
      tag: "Full Trip",
      loc: "Queenstown, New Zealand",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      name: "Oliver Scott",
      rating: 5
    },

  ]
  const scrollNext = () => {
    if (!slider.current) return
    // const cardWidth = slider.current.children[0].offsetWidth
    // const gap = 35
    // slider.current.scrollBy({ left: cardWidth + gap, behavior: "smooth"  } )



    const sliderEl = slider.current
    const cardWidth = sliderEl.children[0].offsetWidth
    const gap = 35
    const step = cardWidth + gap

    sliderEl.scrollBy({ left: step, behavior: "smooth" })

    const half = sliderEl.scrollWidth / 2


    if (sliderEl.scrollLeft >= half) {

      setTimeout(() => {
        sliderEl.scrollLeft -= (half + 200)
      }, 1)

    }
  }


  const scrollPrev = () => {
    if (!slider.current) return
    const cardWidth = slider.current.children[0].offsetWidth;
    const gap = 35;
    slider.current.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
  }


  return (
    <section id='reviews' className="py-32 bg-[#f1fdf5] flex items-center justify-center flex-col gap-[20px]">
      <p className="bg-[#dbfce7] px-[15px] py-[5px] rounded-[15px] w-[max-content] text-[12px] text-[#4e6f30] font-[700]">Customer Reviews</p>
      <h1 className='text-4xl md:text-5xl mb-6 text-gray-900 text-center'>What Our Adventurers Say</h1>
      <p className='text-xl text-gray-600 max-w-3xl mx-auto text-center'>Don't just take our word for it. Here's what our guests have to say about their unforgettable Georgian adventure experiences.</p>
      <div className="flex items-center justify-center sm:gap-[50px] gap-[10px] px-3 w-full ">
        <div className='flex gap-2'>
          <div className="p-1.5 bg-white rounded-[50%] cursor-pointer flex items-center justify-center border-gray-300 border-[1px]"
            onClick={scrollPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          </div>

          <div className="p-1.5 bg-white rounded-[50%] cursor-pointer flex items-center justify-center border-gray-300 border-[1px]" onClick={scrollNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>

        </div>

        <div className={`${' flex justify-between overflow-hidden gap-[35px] '}  `} id='main-div' ref={slider}>
          {
            ReviewInfo.map((review, index) => (
              <ReviewsComp {...review} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Reviews;