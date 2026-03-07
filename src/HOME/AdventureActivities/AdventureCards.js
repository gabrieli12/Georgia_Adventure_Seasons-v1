
const AdventureCards = [

  // ================= Rafting =================

  {
    id: 4,
    season: ['Summer'],
    title: "White Water Rafting",
    description:
      "Adrenaline-filled rafting adventure on fast mountain rivers.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 120 GEL",
    location: '📍Around Pasanauri',
    img: "activities_images/rafting/rafting1.png",
    buttonText: "Book Adventure",
    rightText: [
      "✅ Professional guide",
      "💯 Full safety equipment",
      "🚗 Transportation to the river",
      "📷 Video recording"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Mia", review: "Heart-pumping fun! Excellent guides." },
      { rating: 5, username: "Ethan", review: "Perfect combination of adventure and safety." }
    ],

    detail: {

      additionalServices: [
        { name: "Insta360 camera", price: "29 Usd" },
        { name: "4K Drone footage ", price: "60 Usd" },
        { name: "Drone filming", price: "60 GEL" }
      ],

      priceDetails: [
        {
          name: "Standard Rafting Experience",
          price: "120 Usd",
          serviceDetails: [
            "Up to 6 people per raft",
            "Rafting route approximately 7 km long",
            "River Transportation",
            "Safety briefing before the adventure",
            "Helmet and life jacket provided",
            "Exciting river rafting experience",
            "Amazing views of the surrounding nature",
          ],
          priceDetail: "Per Raft",
        },
      ],

      importantInfo: [
        {
          label: "Note",
          value: "Life jackets and helmets are <span class='font-bold text-red-800'>mandatory</span>."
        },
        {
          label: "Experience",
          value: "No previous experience is <span class='font-bold text-red-800'>required</span>. Our guides will explain everything before the tour."
        },
        {
          label: "Weather Policy",
          value: "Activity depends on <span class='font-bold text-red-800'>river and weather conditions</span>."
        }
      ],

      fullDescription:
        "Take on the thrilling rapids of mountain rivers near Pasanauri. Guided by professional rafting experts, this adventure combines teamwork, adrenaline and stunning natural scenery. All safety equipment and transportation are included for a safe and exciting experience.",

      images: [
        "activities_images/rafting/rafting1.png",
        "activities_images/rafting/rafting2.png",
        "activities_images/rafting/rafting3.png",
        "activities_images/rafting/rafting4.png",

      ],

      recommendations: [
        "Wear comfortable sports clothing",
        "Bring a change of clothes as you may get wet",
        "Wear secure water shoes or sports shoes",
        "Attend the mandatory safety briefing",
        "Wear life jacket and helmet at all times",
        "Arrive 15 minutes before activity start time",
        "Bring extra clothes and towel",
        "Follow the guide's instructions during the rafting trip"
      ],

      features: [
        "Professional Guide",
        "Full Safety Equipment",
        "River Transportation",
        "Team Adventure Experience"
      ]

    }

  },




  // ================= Ski & Snowboard lessons =================
  // სათხილამურო და სნოუბორდის გაკვეთილები
  {
    id: 5,
    season: ['Winter'],
    title: "Ski & Snowboard Lessons",
    description:
      "Join our Ski & Snowboard lessons and experience the best of Georgia’s winter.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 150 GEL",
    location: '📍Gudauri',
    img: "https://www.mechanicsofsport.com/skiing/how_to_ski/graphics/parallel-turn-walkthrough.png",
    buttonText: "Book Adventure",
    rightText: [
      "⛷️ Professional Instructor Support",
      "🛡️ Safety First Approach",
      "💹 From Zero to Hero"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],



    // დეტალისთვის საჭირო ინფორმაცია ერთ ობიექტში, რომელიც შემდეგ დეტალების გვერდზე გადაეცემა
    detail: {
      // დამატებითი სერვისები და ფასები 
      additionalServices: [
        { name: "Full Equipment rental", price: "20 Usd" },
        { name: "Drone video shoot", price: "60 Usd" },
        { name: "Video recording", price: "15 Usd" }
      ],

      // ფასების დეტალური ინფორმაცია სხვადასხვა პაკეტებისთვის
      priceDetails: [
        {
          name: "1-Hours Ski Lesson",
          price: "60 Usd",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        },
        {
          name: "3-Hours Ski Lesson",
          price: "170 Usd",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        },
        {
          name: "Full Day Private Ski Lesson",
          price: "270 Usd",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
          popular: true // ეს დაგვეხმარება ლოგიკაში, რომ ამ პაკეტს განსაკუთრებული სტილი მივანიჭოთ

        },
        {
          name: "Custom Duration Ski Lesson",
          price: "Price on Request",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        },

        {
          name: "1-Hours Snowboard Lesson",
          price: "70 Usd",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        },

        {
          name: "3-Hours Ski Lesson",
          price: "180 Usd",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        },
        {
          name: "Full Day Private Ski Lesson",
          price: "280 Usd",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        },
        {
          name: "Custom Duration Ski Lesson",
          price: "Price on Request",
          serviceDetails: [
            "Certified & Experienced Instructor",
            "Personalized Learning Approach",
            "Safe & Beginner-Friendly Environment"
          ],
          priceDetail: "Per Person",
        }
      ],



      // მნიშვნელოვანი ინფორმაცია
      importantInfo: [
        {
          label: "Note",
          value: "Lift tickets and Rental Equipment are <span class='font-bold text-red-800'>not included</span> in the lesson price."
        },
        {
          label: "Bundle Deal",
          value: "Get a <span class='font-bold text-red-800'>10% discount</span> on equipment rental when booked together with a lesson.",
          isLink: true // ეს დაგვეხმარება ლოგიკაში, თუ გვინდა კლიკზე სხვაგან გადავიდეს
        },
        {
          label: "Group Savings",
          value: "Groups of 2+ receive a progressive discount starting from <span class='font-bold text-red-800'>10% up to 45%</span>."
        }
      ],

      // სრული აღწერა დეტალების გვერდისთვის
      fullDescription:
        "Whether you are a beginner or advanced rider, our professional instructors will guide you from zero to hero. Individual and group sessions are available, focusing on technique, safety and confidence on the slopes of Gudauri.",

      // დეტალებისთვის საჭირო დამატებითი სურათები და რეკომენდაციები
      images: [
        "activities_images/skiSnowboard_lessons/ski1.png",
        "activities_images/skiSnowboard_lessons/ski2.png",
        "activities_images/skiSnowboard_lessons/ski3.png",
      ],

      // მთავარი ვიდეო
      video: "videos/2025-11-18-131947470.mp4",

      // რეკომენდაციები დეტალების გვერდისთვის
      recommendations: [
        "Arrive 15 minutes before lesson start time",
        "Wear warm and waterproof clothing",
        "Follow instructor’s safety guidelines",
        "Lessons may be rescheduled due to extreme weather"
      ],

      // 
      features: [
        "Professional Instructor Support",
        "Safety First Approach",
        "Beginner to Advanced Levels",
        "Individual & Group Sessions"
      ],

    },

  },




  // ================= EQUIPMENT RENTAL =================

  {
    id: 6,
    season: ['Winter'],
    title: "Full Ski & Snowboard Equipment Rental",
    description:
      "Everything you need for the perfect ride with premium gear.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 70 GEL",
    location: '📍Gudauri',
    img: "activities_images/skiSnowboard_rental/rent1.png",
    buttonText: "Book Adventure",
    rightText: [
      "💎 Premium Gear",
      "✨ Perfectly Tuned",
      "⚙️ Daily Maintenance",
      "📏 All Sizes Available"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],


    // დეტალისთვის საჭირო ინფორმაცია ერთ ობიექტში, რომელიც შემდეგ დეტალების გვერდზე გადაეცემა
    detail: {
      // დამატებითი სერვისები და ფასები 
      additionalServices: [
        { name: "GoPro rental", price: "35 Usd" },
        { name: "Professional instructor", price: "60 USD / hour" },
        { name: "Drone video", price: "60 Usd" },
      ],

      // ფასების დეტალური ინფორმაცია სხვადასხვა პაკეტებისთვის
      priceDetails: [
        {
          name: "Full Snowboard Equipment Rental",
          price: "40 Usd",
          serviceDetails: [
            "Snowboard, Boots & Bindings Included",
            "Googles, Helmet & Gloves Included",
            "High-Quality, Well-Maintained Equipment",
            "Sizes Available for Adults & Kids"
          ],
          priceDetail: "Per Day",
          popular: true // ეს დაგვეხმარება ლოგიკაში, რომ ამ პაკეტს განსაკუთრებული სტილი მივანიჭოთ
        },
        {
          name: "Full Ski Equipment Rental",
          price: "40 Usd",
          serviceDetails: [
            "Skis, Boots & Poles Included",
            "Googles, Helmet & Gloves Included",
            "High-Quality, Well-Maintained Equipment",
            "Sizes Available for Adults & Kids"
          ],
          priceDetail: "Per Day",
          popular: true // ეს დაგვეხმარება ლოგიკაში, რომ ამ პაკეტს განსაკუთრებული სტილი მივანიჭოთ
        },

      ],

      // მნიშვნელოვანი ინფორმაცია
      importantInfo: [
        {
          label: "Duration",
          value: "Standard rental duration is <span class='font-bold text-red-800'>one full day</span>. Longer rentals are available on request."
        },
        {
          label: "Bundle Deal",
          value: "Book equipment together with a <span class='font-bold text-red-800'>ski or snowboard lesson</span> and receive a discount.",
          isLink: true // ეს დაგვეხმარება ლოგიკაში, თუ გვინდა კლიკზე სხვაგან გადავიდეს
        },
        {
          label: "Responsibility",
          value: "Customers are responsible for the <span class='font-bold text-red-800'>equipment during the rental period</span>."
        }
      ],

      // სრული აღწერა დეტალების გვერდისთვის
      fullDescription: "Rent high-quality ski or snowboard equipment in Gudauri. Our full set includes skis or snowboard, boots, bindings, poles (for skiers), helmet and goggles. All equipment is professionally maintained and available in all sizes.",

      // მთავარი ვიდეო
      video: "videos/2025-11-18-131947470.mp4",

      // 
      features: [
        "Premium Gear",
        "Daily Maintenance",
        "All Sizes Available",
        "Perfectly Tuned Equipment"
      ],

      // დეტალებისთვის საჭირო დამატებითი სურათები და რეკომენდაციები
      images: [
        "activities_images/skiSnowboard_rental/rent1.png",
        "activities_images/skiSnowboard_rental/rent2.png",
        "activities_images/skiSnowboard_rental/rent3.png",
        "activities_images/skiSnowboard_rental/rent4.png"
      ],

      // რეკომენდაციები დეტალების გვერდისთვის
      recommendations: [
        "Provide correct shoe size for proper fitting",
        "Inspect equipment before use",
        "Return equipment on time to avoid extra charges",
        "Inform staff about your riding level",
        "Store equipment safely when not in use"
      ]
    },
  },


  // ================= Paragliding =================

  {
    id: 3,
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    title: "Paragliding Experience",
    description:
      "Feel absolute freedom while flying above mountains with professional instructors.",
    evaluation: "4.9",
    difficulty: "Easy",
    price: "From 350 GEL",
    location: '📍Gudauri • Ananuri',
    img: "src/assets/Frame 1984077871 (2).png",
    buttonText: "Book Adventure",
    rightText: [
      "✅ Tandem flight with certified instructor",
      "💯 Full equipment",
      "💥 Video recording"
    ],
    rating: 4.9,
    reviews: [
      { rating: 5, username: "Sophia", review: "Incredible views, unforgettable experience!" },
      { rating: 4.8, username: "Noah", review: "Well organized and safe flight." }
    ],

    detail: {

      // დამატებითი სერვისები და ფასები 
      additionalServices: [
        { name: "Insta360 camera", price: "29 Usd" },
        { name: "Drone Footage", price: "60 Usd" },
      ],

      // მთავარი ვიდეო



      // ფასების დეტალური ინფორმაცია სხვადასხვა პაკეტებისთვის
      priceDetails: [
        {
          name: "Standart flight",
          price: "150 Usd",
          serviceDetails: [
            "Breathtaking views of the Caucasus Mountains",
            "certified professional pilot",
            "Full equipment included (harness, helmet, reserve parachute)",
            "GoPro video recording included",
            "Flight duration 15–20 minutes ",
            "Safety briefing before the flight",
            "Included transportation within the Gudauri area"
          ],
          priceDetail: "Per Person",
        },
        {
          name: "Premium Paragliding Flight",
          price: "200 USD",
          serviceDetails: [
            "Extended tandem flight with a certified professional pilot",
            "Flight duration 25–30 minutes depending on weather conditions",
            "GoPro video and photos included",
            "Breathtaking panoramic views of the Caucasus Mountains",
            "Safety briefing and professional equipment provided",
            "Included transportation within the Gudauri area"

          ],
          priceDetail: "Per Person",
          popular: true // ეს დაგვეხმარება ლოგიკაში, რომ ამ პაკეტს განსაკუთრებული სტილი მივანიჭოთ

        },
        {
          name: "VIP Paragliding Experience",
          price: "250 USD",
          serviceDetails: [
            "Longest available flight time",
            "Professional GoPro video & photos",
            "Priority flight scheduling",
            "Spectacular aerial views of Gudauri and the Caucasus",
            "Premium paragliding equipment",
            "Included transportation within the Gudauri area"

          ],
          priceDetail: "Per Person"
        }

      ],

      // მნიშვნელოვანი ინფორმაცია
      importantInfo: [
        {
          label: "Weather Conditions",
          value: "Flights are <span class='font-bold text-red-800'>weather dependent</span> and may be rescheduled for safety reasons."
        },
        {
          label: "Weight Limit",
          value: "Recommended passenger weight is between <span class='font-bold text-red-800'>30 kg and 120 kg</span>.",
          isLink: true // ეს დაგვეხმარება ლოგიკაში, თუ გვინდა კლიკზე სხვაგან გადავიდეს
        },
        {
          label: "Experience",
          value: "No previous experience is <span class='font-bold text-red-800'>required</span>. The flight is performed with a professional pilot."
        }
      ],


      fullDescription:
        "Experience the ultimate freedom as you soar above the mountains of Gudauri. Our certified tandem instructors ensure maximum safety while you enjoy breathtaking aerial views. A once-in-a-lifetime adventure with full video recording included.",


      features: [
        "Tandem Flight with Certified Instructor",
        "Full Equipment Included",
        "HD Video Recording",
        "Safety Certified"
      ],


      images: [
        "activities_images/paragliding/paragliding1.png",
        "activities_images/paragliding/paragliding2.png",
        "src/assets/Frame 1984077871 (2).png"
      ],

      video: "videos/2025-11-18-131947470.mp4",



      recommendations: [
        "Wear comfortable clothing and sports shoes",
        "Bring sunglasses to protect your eyes during the flight",
        "Avoid heavy meals right before the flight",
        "Follow the pilot’s instructions for a safe takeoff and landing",
        "Not recommended for people with heart conditions",
        "Flights are not operated in bad weather conditions",
        "Bring a jacket as it may be colder in the air"
      ]

    },

  },



  // ================= Jetski adventure =================

  {
    id: 9,
    season: ['Summer'],
    title: "Jetski Adventure",
    description:
      "Adrenaline-filled jetski adventure around Pasanauri with professional guides.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 120 GEL",
    location: '📍Around Pasanauri',
    img: "activities_images/jetski/jetski1.png",
    buttonText: "Book Adventure",
    rightText: [
      "✅ Professional guide",
      "💯 Full safety equipment",
      "🚗 Transportation",
      "📷 Video recording"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Mia", review: "Heart-pumping fun! Excellent guides." },
      { rating: 5, username: "Ethan", review: "Perfect combination of adventure and safety." }
    ],

    detail: {

      additionalServices: [
        { name: "Safety equipment", price: "Free" },
        { name: "Transport", price: "Included" },
        { name: "Drone filming", price: "60 GEL" }
      ],

      priceDetails: [
        {
          name: "30-Minute Ride",
          price: "120 GEL",
          serviceDetails: [
            "Up to 6 people per raft",
            "Rafting route approximately 7 km long",
            "River Transportation",
            "Safety briefing before the adventure",
            "Helmet and life jacket provided",
            "Exciting river rafting experience",
            "Amazing views of the surrounding nature",
          ],
          priceDetail: "Per Raft",
        },
        {
          name: "Custom Duration Ride",
          price: "Price on Request",
          serviceDetails: [
            "Up to 6 people per raft",
            "Rafting route approximately 7 km long",
            "River Transportation",
            "Safety briefing before the adventure",
            "Helmet and life jacket provided",
            "Exciting river rafting experience",
            "Amazing views of the surrounding nature",
          ],
          priceDetail: "Per Raft",
        },

      ],

      importantInfo: [
        {
          label: "Note",
          value: "Life jacket is <span class='font-bold text-red-800'>mandatory</span> for all participants."
        },
        {
          label: "Safety",
          value: "Not recommended for <span class='font-bold text-red-800'>non-swimmers</span> or people with serious medical conditions."
        },
        {
          label: "Weather Policy",
          value: "Activity may be <span class='font-bold text-red-800'>rescheduled</span> due to unsafe weather or water conditions."
        }
      ],

      fullDescription:
        "Experience high-speed excitement on a powerful jetski around Pasanauri. Guided by professional instructors, this adventure combines adrenaline, safety and breathtaking river landscapes. Perfect for thrill-seekers looking for a fun summer escape.",


      video: "videos/2025-11-18-131947470.mp4",

      images: [
        "activities_images/jetski/jetski1.png",
        "activities_images/jetski/jetski2.png",
        "activities_images/jetski/jetski3.png",
        "activities_images/jetski/jetski4.png",
      ],

      recommendations: [
        "Arrive 15 minutes before activity start time",
        "Bring spare clothes and towel",
        "Follow instructor’s safety rules at all times",
        "Activity depends on water and weather conditions"
      ],

      features: [
        "Professional Guide",
        "Full Safety Equipment",
        "High-Speed Adventure",
        "Individual & Group Experience"
      ]

    }
  },

  {
    id: 10,
    season: ['Summer'],
    title: "MotorBoat Adventure",
    description:
      "Adrenaline-filled motorboat adventure around Pasanauri.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 120 GEL",
    location: '📍Around Pasanauri',
    img: "activities_images/ნავით გასეირნება ანანურში_1.2.13.png",
    buttonText: "Book Adventure",
    rightText: [
      "✅ Professional guide",
      "💯 Full safety equipment",
      "🚗 Transportation included"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Mia", review: "Heart-pumping fun! Excellent guides." },
      { rating: 5, username: "Ethan", review: "Perfect combination of adventure and safety." }
    ],

    detail: {

      additionalServices: [
        { name: "Safety equipment", price: "Free" },
        { name: "Drone filming", price: "60 GEL" },
        { name: "GoPro video recording", price: "40 GEL" }
      ],

      priceDetails: [
        { name: "30-Minute MotorBoat Ride", price: "120 GEL" },
        { name: "1-Hour MotorBoat Ride", price: "200 GEL" },
        { name: "Private 2-Hour Tour", price: "350 GEL" },
        { name: "Custom Duration Tour", price: "Price on Request" },

        { name: "30-Minute MotorBoat Ride", price: "120 GEL" },
        { name: "1-Hour MotorBoat Ride", price: "200 GEL" },
        { name: "Private 2-Hour Tour", price: "350 GEL" },
        { name: "Custom Duration Tour", price: "Price on Request" }
      ],

      importantInfo: [
        {
          label: "Note",
          value: "Life jackets are <span class='font-bold text-red-800'>mandatory</span> for all participants."
        },
        {
          label: "Safety",
          value: "Activity is <span class='font-bold text-red-800'>not recommended</span> for non-swimmers."
        },
        {
          label: "Weather Policy",
          value: "Tour may be <span class='font-bold text-red-800'>rescheduled</span> due to unsafe weather conditions."
        }
      ],

      fullDescription:
        "Enjoy a scenic and thrilling motorboat ride near Pasanauri. Guided by experienced professionals, this adventure combines speed, safety and breathtaking river landscapes. Perfect for families, friends and adrenaline lovers.",

      images: [
        "src/assets/Frame 1984077871.png",
        "src/assets/Frame 1984077871 (1).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png"
      ],

      recommendations: [
        "Arrive 15 minutes before activity start time",
        "Wear comfortable summer clothing",
        "Follow captain’s safety instructions",
        "Activity depends on weather and water conditions"
      ],

      features: [
        "Professional Guide",
        "Full Safety Equipment",
        "Scenic River Experience",
        "Individual & Group Sessions"
      ]

    }

  },

  {
    id: 2,
    season: ['Spring', 'Summer', 'Autumn'],
    title: "Horse Riding Tour",
    description:
      "Peaceful horse riding experience across open fields and scenic nature routes.",
    evaluation: "4.8",
    difficulty: "Easy",
    price: "From 80 GEL",
    location: '📍Gudauri • Pasanauri • Ananuri',
    img: "activities_images/ცხენოსნობა2-Recovered.png",
    buttonText: "Book Adventure",
    rightText: [
      "⛰️ Mountain views",
      "🐴 Experienced horses",
      "⭐ Traditional Georgian style"
    ],
    rating: 4.7,
    reviews: [
      { rating: 5, username: "Emma", review: "So relaxing and enjoyable!" },
      { rating: 4.5, username: "Liam", review: "Great horses and beautiful scenery." }
    ],

    detail: {

      additionalServices: [
        { name: "Photo session", price: "20 GEL" },
        { name: "Guided trail maps", price: "Free" },
        { name: "Traditional snacks", price: "15 GEL" }
      ],

      priceDetails: [
        { name: "30-Minute Ride", price: "80 GEL" },
        { name: "1-Hour Ride", price: "120 GEL" },
        { name: "2-Hour Scenic Tour", price: "200 GEL" },
        { name: "Private Custom Tour", price: "Price on Request" },

        { name: "30-Minute Ride", price: "80 GEL" },
        { name: "1-Hour Ride", price: "120 GEL" },
        { name: "2-Hour Scenic Tour", price: "200 GEL" },
        { name: "Private Custom Tour", price: "Price on Request" }
      ],

      importantInfo: [
        {
          label: "Note",
          value: "Riders must follow <span class='font-bold text-red-800'>guide instructions</span> at all times."
        },
        {
          label: "Safety",
          value: "Wearing <span class='font-bold text-red-800'>closed shoes</span> is mandatory."
        },
        {
          label: "Weather Policy",
          value: "Tours may be <span class='font-bold text-red-800'>rescheduled or canceled</span> in severe weather conditions."
        }
      ],

      fullDescription:
        "Enjoy a calm and authentic horse riding tour through the scenic valleys and open mountain landscapes of Gudauri, Pasanauri and Ananuri. Our experienced horses and professional guides ensure a safe, comfortable and memorable journey in traditional Georgian style.",

      images: [
        "src/assets/Frame 1984077871.png",
        "src/assets/Frame 1984077871 (1).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png"
      ],

      recommendations: [
        "Listen carefully to the instructor before the ride",
        "Wear comfortable clothing and closed shoes",
        "Inform staff about allergies or medical conditions",
        "Arrive 15 minutes before tour start time"
      ],

      features: [
        "Mountain Views",
        "Experienced Horses",
        "Professional Guide",
        "Traditional Georgian Style"
      ]

    }

  },

  {
    id: 7,
    season: ['Winter'],
    title: "Snowmobile Adventure",
    description:
      "Explore hidden mountain trails with high-power snowmobiles.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 150 GEL",
    location: '📍Gudauri',
    img: "https://staylapland.com/app/uploads/2025/04/StayLapland-Snowmobile-Customer-10-scaled.jpeg",
    buttonText: "Book Adventure",
    rightText: [
      "❄️ Deep Snow Experience",
      "👤 Expert Guide Support",
      "🌅 Breathtaking Views"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],

    detail: {

      additionalServices: [
        { name: "Equipment rental", price: "Free" },
        { name: "Professional guide", price: "Included" },
        { name: "Drone footage", price: "60 GEL" }
      ],

      priceDetails: [
        { name: "30-Minute Snowmobile Ride", price: "150 GEL" },
        { name: "1-Hour Snowmobile Tour", price: "250 GEL" },
        { name: "2-Hour Mountain Adventure", price: "400 GEL" },
        { name: "Private Custom Tour", price: "Price on Request" },

        { name: "30-Minute Snowmobile Ride", price: "150 GEL" },
        { name: "1-Hour Snowmobile Tour", price: "250 GEL" },
        { name: "2-Hour Mountain Adventure", price: "400 GEL" },
        { name: "Private Custom Tour", price: "Price on Request" }
      ],

      importantInfo: [
        {
          label: "Note",
          value: "Helmet use is <span class='font-bold text-red-800'>mandatory</span> during the entire ride."
        },
        {
          label: "Safety",
          value: "Not recommended for <span class='font-bold text-red-800'>pregnant women or people with back problems</span>."
        },
        {
          label: "Weather Policy",
          value: "Tours are <span class='font-bold text-red-800'>weather dependent</span> and may be rescheduled."
        }
      ],

      fullDescription:
        "Feel the winter adrenaline rush as you ride powerful snowmobiles across deep snow and hidden mountain trails in Gudauri. Guided by experts, this adventure offers breathtaking views and unforgettable winter memories.",

      images: [
        "src/assets/Frame 1984077871.png",
        "src/assets/Frame 1984077871 (1).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png"
      ],

      recommendations: [
        "Driver must strictly follow guide instructions",
        "Wear warm winter clothing",
        "Arrive 15 minutes before tour start time",
        "Bring gloves and protective eyewear"
      ],

      features: [
        "Deep Snow Experience",
        "Expert Guide Support",
        "Breathtaking Views",
        "Drone Footage Available"
      ]

    }

  },

  {
    id: 1,
    season: ['Spring', 'Summer', 'Autumn', 'Winter'],
    title: "ATV Mountain Adventure",
    description:
      "An exciting off-road ATV experience through mountain trails and wild landscapes.",
    evaluation: "4.8",
    difficulty: "Medium",
    price: "From 100 GEL",
    location: '📍Gudauri • Pasanauri • Ananuri',
    img: "src/assets/Frame 1984077871.png",
    buttonText: "Book Adventure",
    rightText: [
      "🧑‍🏫 Professional Guide",
      "🛡 Safety Briefing",
      "🚁 Drone Footage"
    ],
    rating: 4.8,
    reviews: [
      { rating: 5, username: "Alice", review: "Amazing experience, highly recommend!" },
      { rating: 4.5, username: "John", review: "Thrilling ride, good safety measures." }
    ],

    detail: {

      additionalServices: [
        { name: "Drone filming", price: "50 GEL" },
        { name: "Professional photos", price: "30 GEL" },
        { name: "Safety gear", price: "Free" }
      ],

      priceDetails: [
        { name: "30-Minute ATV Ride", price: "100 GEL" },
        { name: "1-Hour ATV Tour", price: "180 GEL" },
        { name: "2-Hour Mountain Adventure", price: "320 GEL" },
        { name: "Private Custom Tour", price: "Price on Request" },

        { name: "30-Minute ATV Ride", price: "100 GEL" },
        { name: "1-Hour ATV Tour", price: "180 GEL" },
        { name: "2-Hour Mountain Adventure", price: "320 GEL" },
        { name: "Private Custom Tour", price: "Price on Request" }
      ],

      importantInfo: [
        {
          label: "Note",
          value: "Participants must attend the <span class='font-bold text-red-800'>mandatory safety briefing</span> before the ride."
        },
        {
          label: "Safety",
          value: "Not recommended for <span class='font-bold text-red-800'>people with serious back problems</span>."
        },
        {
          label: "Weather Policy",
          value: "Tours may be <span class='font-bold text-red-800'>rescheduled</span> in extreme weather conditions."
        }
      ],

      fullDescription:
        "Join us for an unforgettable ATV mountain adventure across the breathtaking landscapes of Gudauri, Pasanauri and Ananuri. Ride powerful quad bikes through rugged off-road trails, river crossings and panoramic mountain routes. This experience is perfect for adrenaline seekers who want to explore Georgia’s wild beauty in an active way.",

      images: [
        "src/assets/Frame 1984077871.png",
        "src/assets/Frame 1984077871 (1).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png",
        "src/assets/Frame 1984077871 (2).png"
      ],

      recommendations: [
        "Follow the guide’s instructions at all times",
        "Wear protective equipment provided",
        "Arrive 15 minutes before tour start time",
        "Bring sunglasses and comfortable outdoor clothing"
      ],

      features: [
        "Professional Guide",
        "Safety Briefing",
        "Drone Footage Available",
        "Protective Equipment"
      ]

    }

  }

];

export default AdventureCards;


