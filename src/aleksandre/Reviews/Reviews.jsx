import { useRef } from 'react';
import ReviewsComp from './ReviewsComp';

function Reviews({ title }) {
  const slider = useRef(null);

  const ReviewInfo = [
    {
      username: "Sophia Carter",
      date: "Mar 12, 2024",
      reviewTitle: "Amazing Experience!",
      reviewMessage: "I couldn’t be happier with my purchase. The quality is exceptional, and the support team was incredibly helpful.",
      rate: 5,
      colorOfProfile: "red"
    },
    {
      username: "Gabriel molodini",
      date: "May 23, 2025",
      reviewTitle: "Unbelieveable!",
      reviewMessage: "First time in my years i could enjoy my life with full entartaiment, thank you for your work!",
      rate: 4,
      colorOfProfile: "green"
    },
    {
      username: "Aleksandre dzukaevi",
      date: "May 30, 2025",
      reviewTitle: "Unbelieveable!",
      reviewMessage: "First time in my years i could enjoy my life with full entartaiment, thank you for your work!",
      rate: 5,
      colorOfProfile: "blue"
    },
    {
      username: "Aleksandre dzukaevi",
      date: "May 30, 2025",
      reviewTitle: "Unbelieveable!",
      reviewMessage: "First time in my years i could enjoy my life with full entartaiment, thank you for your work!",
      rate: 5,
      colorOfProfile: "blue"
    },
    {
      username: "Aleksandre dzukaevi",
      date: "May 30, 2025",
      reviewTitle: "Unbelieveable!",
      reviewMessage: "First time in my years i could enjoy my life with full entartaiment, thank you for your work!",
      rate: 5,
      colorOfProfile: "blue"
    },
    {
      username: "Aleksandre dzukaevi",
      date: "May 30, 2025",
      reviewTitle: "Unbelieveable!",
      reviewMessage: "First time in my years i could enjoy my life with full entartaiment, thank you for your work!",
      rate: 5,
      colorOfProfile: "blue"
    }
  ]

  const scroll = (direction) => {

    const { scrollLeft, scrollWidth, clientWidth, firstChild } = slider.current
    const cardWidth = firstChild.clientWidth + 20

    if (direction === 'next') {
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5
      
      if (isAtEnd) {
        slider.current.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        slider.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    } else {
      if (scrollLeft <= 0) {
        slider.current.scrollTo({ left: scrollWidth, behavior: 'smooth' })
      } else {
        slider.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className='flex flex-col justify-center gap-[10px] items-center'>
      <h2 className='text-[60px] font-[700] text-center'>{title}</h2>
      
      <div className='flex items-center gap-4'>
        <i 
          className="fa-solid fa-angle-left text-[40px] cursor-pointer" 
          onClick={() => scroll('prev')}
        ></i>

        <div 
          className="flex items-center gap-[20px] overflow-x-auto scrollbar-hide w-[1275px] h-[400px] scroll-smooth" 
          ref={slider}
        > 
          {ReviewInfo.map((review, index) => (
            <ReviewsComp key={index} {...review} />
          ))}
        </div>

        <i 
          className="fa-solid fa-angle-right text-[40px] cursor-pointer" 
          onClick={() => scroll('next')}
        ></i>
      </div>
    </section>
  );
}

export default Reviews;