// const adventureCards = [
//   {
//     id: 1,
//     season: ['Spring', 'Summer', 'Autumn', 'Winter'],
//     title: "ATV Mountain Adventure",
//     description:
//       "An exciting off-road ATV experience through mountain trails and wild landscapes.",
//     evaluation: "4.8",
//     difficulty: "Medium",
//     price: "From 100 GEL",
//     location: '📍Gudauri • Pasanauri • Ananuri',
//     img: "src/assets/Frame 1984077871.png",
//     buttonText: "Book Adventure",
//     rightText:
//       [
//         "🧑‍🏫 Professional Guide ",
//         "🛡 Safety Briefing ",
//         "🚁 Drone Footage "
//       ],
//     rating: 4.8,
//     reviews: [
//       { rating: 5, username: "Alice", review: "Amazing experience, highly recommend!" },
//       { rating: 4.5, username: "John", review: "Thrilling ride, good safety measures." }
//     ],
//     additionalServices: [
//       { name: "Drone filming", price: "50 GEL" },
//       { name: "Professional photos", price: "30 GEL" },
//       { name: "Safety gear included", price: "Free" }
//     ]
//   },

//   {
//     id: 2,
//     season: ['Spring', 'Summer', 'Autumn'],
//     title: "Horse Riding Tour",
//     description:
//       "Peaceful horse riding experience across open fields and scenic nature routes.",
//     evaluation: "4.8",
//     difficulty: "Easy",
//     price: "From 80 GEL",
//     location: '📍Gudauri • Pasanauri • Ananuri',
//     img: "src/assets/Frame 1984077871 (1).png",
//     buttonText: "Book Adventure",
//     rightText:
//       ["⛰️ Mountain views", "🐴 experienced horses", "⭐ Traditional Georgian style"],
//     rating: 4.7,
//     reviews: [
//       { rating: 5, username: "Emma", review: "So relaxing and enjoyable!" },
//       { rating: 4.5, username: "Liam", review: "Great horses and beautiful scenery." }
//     ],
//     additionalServices: [
//       { name: "Photo session", price: "20 GEL" },
//       { name: "Guided trail maps", price: "Free" },
//       { name: "Traditional snacks", price: "15 GEL" }
//     ]
//   },

//   {
//     id: 3,
//     season: ['Spring', 'Summer', 'Autumn', "Winter"],
//     title: "Paragliding Experience",
//     description:
//       "Feel absolute freedom while flying above mountains with professional instructors.",
//     evaluation: "4.9",
//     difficulty: "Easy",
//     price: "From 350 GEL",
//     location: '📍Gudauri • Ananuri',

//     img: "src/assets/Frame 1984077871 (2).png",
//     buttonText: "Book Adventure",
//     rightText:
//       ["✅Tandem flight with certified instructor", "💯 Full equipment", "💥Video recording"],
//     rating: 4.9,
//     reviews: [
//       { rating: 5, username: "Sophia", review: "Incredible views, unforgettable experience!" },
//       { rating: 4.8, username: "Noah", review: "Well organized and safe flight." }
//     ],
//     additionalServices: [
//       { name: "HD video recording", price: "40 GEL" },
//       { name: "Drone photos", price: "50 GEL" },
//       { name: "Equipment rental", price: "Free" }
//     ]
//   },
//   {
//     id: 4,
//     season: ['Summer'],
//     title: "White Water Rafting",
//     description:
//       "Adrenaline-filled rafting adventure on fast mountain rivers.",
//     evaluation: "5.0",
//     difficulty: "Medium",
//     price: "From 120 GEL",
//     location: '📍Around Pasanauri',

//     img: "src/assets/Frame 1984077871 (3).png",
//     buttonText: "Book Adventure",
//     rightText:
//       ["✅ Professional guide", "💯 Full safety equipment", "🚗 Transportation to the river", "📷 Video recording"],
//     rating: 5.0,
//     reviews: [
//       { rating: 5, username: "Mia", review: "Heart-pumping fun! Excellent guides." },
//       { rating: 5, username: "Ethan", review: "Perfect combination of adventure and safety." }
//     ],
//     additionalServices: [
//       { name: "Safety equipment", price: "Free" },
//       { name: "Transport to river", price: "Included" },
//       { name: "Drone filming", price: "60 GEL" }
//     ]
//   },
//   {
//     id: 5,
//     season: ['Winter'],
//     title: "Ski & Snowboard lessons ⛷️",
//     description:
//       "Why just watch when you can ski? Join our Ski & Snowboard lessons and experience the best of Georgia’s winter, Individual and group sessions available for all skill levels.",
//     evaluation: "5.0",
//     difficulty: "Medium",
//     price: "From 150 GEL",
//     location: '📍Gudauri ',

//     img: "https://www.mechanicsofsport.com/skiing/how_to_ski/graphics/parallel-turn-walkthrough.png",
//     buttonText: "Book Adventure",
//     rightText:
//       ["⛷️ Professional Instructor Support", "🛡️ Safety First Approach", "💹 From Zero to Hero"],
//     rating: 5.0,
//     reviews: [
//       { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
//       { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
//     ],
//     additionalServices: [
//       { name: "Equipment rental", price: "Free" },
//       { name: "Instructor guidance", price: "Included" },
//       { name: "Video recording", price: "40 GEL" }
//     ]
//   },

//   {
//     id: 5,
//     season: ['Winter'],
//     title: "Full Ski & Snowboard Equipment Rental ⛷️",
//     description:
//       "Everything you need for the perfect ride. Our full set includes: skis or snowboard, Boots & Bindings, Poles (for skiers), Helmet & Goggles.",
//     evaluation: "5.0",
//     difficulty: "Medium",
//     price: "From 70 GEL",
//     location: '📍Gudauri',

//     img: "https://www.redlodgemountain.com/wp-content/uploads/header.img-rossignol-rental-shop-skis-red-lodge-mountain-montana.jpg",
//     buttonText: "Book Adventure",
//     rightText:
//       ["💎 Premium Gear", "✨ Perfectly Tuned", "⚙️ Daily Maintenance", "📏 All Sizes Available", ],
//     rating: 5.0,
//     reviews: [
//       { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
//       { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
//     ],
//     additionalServices: [
//       { name: "Equipment rental", price: "Free" },
//       { name: "Instructor guidance", price: "Included" },
//       { name: "Video recording", price: "40 GEL" }
//     ]
//   },
//   {
//     id: 5,
//     season: ['Winter'],
//     title: "Snowmobile Adventure ❄️",
//     description:
//       "Experience the ultimate winter thrill! Explore hidden mountain trails and breathtaking landscapes with our high-power snowmobiles. Perfect for adrenaline seekers and nature lovers alike.",
//     evaluation: "5.0",
//     difficulty: "Medium",
//     price: "From 150 GEL",
//     location: '📍Gudauri',

//     img: "https://staylapland.com/app/uploads/2025/04/StayLapland-Snowmobile-Customer-10-scaled.jpeg",
//     buttonText: "Book Adventure",
//     rightText:
//       ["❄️ Deep Snow Experience", "👤 Expert Guide Support", "🌅 Breathtaking Views", "🚁 Drone Footage"],
//     rating: 5.0,
//     reviews: [
//       { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
//       { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
//     ],
//     additionalServices: [
//       { name: "Equipment rental", price: "Free" },
//       { name: "Instructor guidance", price: "Included" },
//       { name: "Video recording", price: "40 GEL" }
//     ]
//   },
//   // {
//   //   id: 6,
//   //   season: ['Spring', 'Summer'],
//   //   title: "Hiking Adventure",
//   //   description:
//   //     "Guided hiking tour through forests, valleys, and stunning mountain views.",
//   //   evaluation: "4.7",
//   //   difficulty: "Easy",
//   //   price: "From 80 GEL",
//   //   location: '📍Gudauri • Pasanauri • Ananuri',

//   //   img: "src/assets/Frame 1984077871 (5).png",
//   //   buttonText: "Book Adventure",
//   //   rightText:
//   //     ["Suitable for beginners and families", "Comfortable shoes are required", "Photo stops included."],
//   //   rating: 4.7,
//   //   reviews: [
//   //     { rating: 4.8, username: "Isabella", review: "Beautiful trails, well organized." },
//   //     { rating: 4.6, username: "Lucas", review: "Great hike, friendly guide." }
//   //   ],
//   //   additionalServices: [
//   //     { name: "Drone footage", price: "30 GEL" },
//   //     { name: "Guided photos", price: "20 GEL" },
//   //     { name: "Refreshments included", price: "Free" }
//   //   ]
//   // }
// ];

// export default adventureCards;

const adventureCards = [
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
    additionalServices: [
      { name: "Drone filming", price: "50 GEL" },
      { name: "Professional photos", price: "30 GEL" },
      { name: "Safety gear included", price: "Free" }
    ],
  
    fullDescription:
      "Join us for an unforgettable ATV mountain adventure across the breathtaking landscapes of Gudauri, Pasanauri and Ananuri. Ride powerful quad bikes through rugged off-road trails, river crossings and panoramic mountain routes. This experience is perfect for adrenaline seekers who want to explore Georgia’s wild beauty in an active way.",
    features: [
      "Professional Guide",
      "Safety Briefing",
      "Drone Footage Included",
      "Protective Equipment"
    ],
    images: [
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ],
    recommendations: [
      "Follow the guide’s instructions at all times",
      "Wear protective equipment provided",
      "Not recommended for people with serious back problems",
      "Tours may be rescheduled in extreme weather conditions"
    ]
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
    img: "src/assets/Frame 1984077871 (1).png",
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
    additionalServices: [
      { name: "Photo session", price: "20 GEL" },
      { name: "Guided trail maps", price: "Free" },
      { name: "Traditional snacks", price: "15 GEL" }
    ],
    
    fullDescription:
      "Enjoy a calm and authentic horse riding tour through the scenic valleys and open mountain landscapes of Gudauri and surrounding areas. Our experienced horses and local guides ensure a safe and memorable journey in traditional Georgian style.",
    features: [
      "Mountain Views",
      "Experienced Horses",
      "Professional Guide",
      "Traditional Georgian Style"
    ],
    images: [
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ], 
     recommendations: [
      "Listen carefully to the horse riding instructor",
      "Wear comfortable clothing and closed shoes",
      "Inform staff about any allergies or medical conditions",
      "Tours may be canceled in severe weather"
    ]
  },
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
    additionalServices: [
      { name: "HD video recording", price: "40 GEL" },
      { name: "Drone photos", price: "50 GEL" },
      { name: "Equipment rental", price: "Free" }
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
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ],
    recommendations: [
      "Receive full instructor briefing before flight",
      "Follow all safety instructions carefully",
      "Not recommended for people with heart conditions",
      "Flights are not operated in bad weather conditions"
    ]
  },
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
    img: "src/assets/Frame 1984077871 (3).png",
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
    additionalServices: [
      { name: "Safety equipment", price: "Free" },
      { name: "Transport to river", price: "Included" },
      { name: "Drone filming", price: "60 GEL" }
    ],

    fullDescription:
      "Take on the thrilling rapids of mountain rivers near Pasanauri. Guided by professional rafting experts, this adventure combines teamwork, adrenaline and stunning natural scenery. All safety equipment and transportation are included.",
    features: [
      "Professional Guide",
      "Full Safety Equipment",
      "River Transportation",
      "Video Recording Included"
    ],
    images: [
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ],
    recommendations: [
      "Attend the mandatory safety briefing before rafting",
      "Wear life jacket and helmet at all times",
      "Not recommended for non-swimmers or people with serious medical conditions",
      "Activity depends on river and weather conditions"
    ]
  },
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
    additionalServices: [
      { name: "Equipment rental", price: "Free" },
      { name: "Instructor guidance", price: "Included" },
      { name: "Video recording", price: "40 GEL" }
    ],

    fullDescription:
      "Whether you are a beginner or advanced rider, our professional instructors will guide you from zero to hero. Individual and group sessions are available, focusing on technique, safety and confidence on the slopes of Gudauri.",
    features: [
      "Professional Instructor Support",
      "Safety First Approach",
      "Beginner to Advanced Levels",
      "Individual & Group Sessions"
    ],
    images: [
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ],
    recommendations: [
      "Arrive 15 minutes before lesson start time",
      "Wear warm and waterproof clothing",
      "Follow instructor’s safety guidelines",
      "Lessons may be rescheduled due to extreme weather"
    ]
  },
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
    img: "https://www.redlodgemountain.com/wp-content/uploads/header.img-rossignol-rental-shop-skis-red-lodge-mountain-montana.jpg",
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
    additionalServices: [
      { name: "Equipment rental", price: "Free" },
      { name: "Instructor guidance", price: "Included" },
      { name: "Video recording", price: "40 GEL" }
    ],
    
    fullDescription:
      "Rent high-quality ski or snowboard equipment in Gudauri. Our full set includes skis or snowboard, boots, bindings, poles (for skiers), helmet and goggles. All equipment is professionally maintained and available in all sizes.",
    features: [
      "Premium Gear",
      "Daily Maintenance",
      "All Sizes Available",
      "Perfectly Tuned Equipment"
    ],
    images: [
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ],
     recommendations: [
      "Provide correct shoe size for proper fitting",
      "Inspect equipment before use",
      "Return equipment on time to avoid extra charges",
      "Inform staff about your riding level"
    ]
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
      "🌅 Breathtaking Views",
      "🚁 Drone Footage"
    ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],
    additionalServices: [
      { name: "Equipment rental", price: "Free" },
      { name: "Instructor guidance", price: "Included" },
      { name: "Video recording", price: "40 GEL" }
    ],
    fullDescription:
      "Feel the winter adrenaline rush as you ride powerful snowmobiles across deep snow and hidden mountain trails in Gudauri. Guided by experts, this adventure offers breathtaking views and drone footage for unforgettable memories.",
    features: [
      "Deep Snow Experience",
      "Expert Guide Support",
      "Breathtaking Views",
      "Drone Footage Included"
    ],
    images: [
      "src/assets/Frame 1984077871.png",
      "src/assets/Frame 1984077871 (1).png",
      "src/assets/Frame 1984077871 (2).png"
    ],
    recommendations: [
      "Driver must follow guide instructions strictly",
      "Helmet must be worn at all times",
      "Not recommended for pregnant women or people with back problems",
      "Tours are weather dependent"
    ]
  }
];

export default adventureCards;


