import { use, useState } from 'react'

function ReviewsComp({username, date, rate, reviewTitle, reviewMessage, colorOfProfile}) {
    let starsCount = []
    for (let i = 0; i < rate; i++){
        starsCount.push(0)
    }
    return (
        <div className='h-[320px] rounded-[16px] shadow-lg p-[24px] flex flex-col  justify-center gap-[10px] min-w-[300px] max-w-[405px] flex-shrink-0'>
            <section className='flex items-center gap-[10px]'>
                <div className='w-[65px] h-[65px] rounded-[50%] flex items-center justify-center' style={{backgroundColor: colorOfProfile}}>
                    <h2 className='text-[28px] font-[700] text-white'>{username[0]}</h2>
                </div>
                <section className='flex flex-col'>
                    <h2 className='font-[700] text-[20px] '>{
                        username.split(" ")[0][0]
                        .toUpperCase() + username.split(" ")[0].slice(1) + " " +
                        username.split(" ")[1][0]
                        .toUpperCase() + username.split(" ")[1].slice(1)
                    }</h2>
                    <h3 className='text-[16px] text-[#000000] opacity-[0.6]'>on {date}</h3>
                </section>
            </section>
            <section className='flex gap-[3px] '>
                    {
                        starsCount.map((_, i) => (
                            <div className='bg-[#219653] w-[24px] h-[24px] flex items-center justify-center'>
                                <i className="fa-solid fa-star text-white"></i>
                            </div>
                        ))
                    }
            </section>
            <section className='flex flex-col'>
                <h2 className='font-[700] text-[20px] '>{reviewTitle}</h2>
                <p className='text-[20px] text-[#000000] opacity-[0.6]'>{reviewMessage}</p>
            </section>
        </div>
    )
}

export default ReviewsComp
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