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
    rightText:
      [
        "🧑‍🏫 Professional Guide ",
        "🛡 Safety Briefing ",
        "🚁 Drone Footage "
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
    rightText:
      ["⛰️ Mountain views", "🐴 experienced horses", "⭐ Traditional Georgian style"],
    rating: 4.7,
    reviews: [
      { rating: 5, username: "Emma", review: "So relaxing and enjoyable!" },
      { rating: 4.5, username: "Liam", review: "Great horses and beautiful scenery." }
    ],
    additionalServices: [
      { name: "Photo session", price: "20 GEL" },
      { name: "Guided trail maps", price: "Free" },
      { name: "Traditional snacks", price: "15 GEL" }
    ]
  },

  {
    id: 3,
    season: ['Spring', 'Summer', 'Autumn', "Winter"],
    title: "Paragliding Experience",
    description:
      "Feel absolute freedom while flying above mountains with professional instructors.",
    evaluation: "4.9",
    difficulty: "Easy",
    price: "From 350 GEL",
    location: '📍Gudauri • Ananuri',

    img: "src/assets/Frame 1984077871 (2).png",
    buttonText: "Book Adventure",
    rightText:
      ["✅Tandem flight with certified instructor", "💯 Full equipment", "💥Video recording"],
    rating: 4.9,
    reviews: [
      { rating: 5, username: "Sophia", review: "Incredible views, unforgettable experience!" },
      { rating: 4.8, username: "Noah", review: "Well organized and safe flight." }
    ],
    additionalServices: [
      { name: "HD video recording", price: "40 GEL" },
      { name: "Drone photos", price: "50 GEL" },
      { name: "Equipment rental", price: "Free" }
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
    rightText:
      ["✅ Professional guide", "💯 Full safety equipment", "🚗 Transportation to the river", "📷 Video recording"],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Mia", review: "Heart-pumping fun! Excellent guides." },
      { rating: 5, username: "Ethan", review: "Perfect combination of adventure and safety." }
    ],
    additionalServices: [
      { name: "Safety equipment", price: "Free" },
      { name: "Transport to river", price: "Included" },
      { name: "Drone filming", price: "60 GEL" }
    ]
  },
  {
    id: 5,
    season: ['Winter'],
    title: "Ski & Snowboard lessons ⛷️",
    description:
      "Why just watch when you can ski? Join our Ski & Snowboard lessons and experience the best of Georgia’s winter, Individual and group sessions available for all skill levels.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 150 GEL",
    location: '📍Gudauri ',

    img: "https://www.mechanicsofsport.com/skiing/how_to_ski/graphics/parallel-turn-walkthrough.png",
    buttonText: "Book Adventure",
    rightText:
      ["⛷️ Professional Instructor Support", "🛡️ Safety First Approach", "💹 From Zero to Hero"],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],
    additionalServices: [
      { name: "Equipment rental", price: "Free" },
      { name: "Instructor guidance", price: "Included" },
      { name: "Video recording", price: "40 GEL" }
    ]
  },

  {
    id: 5,
    season: ['Winter'],
    title: "Full Ski & Snowboard Equipment Rental ⛷️",
    description:
      "Everything you need for the perfect ride. Our full set includes: skis or snowboard, Boots & Bindings, Poles (for skiers), Helmet & Goggles.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 70 GEL",
    location: '📍Gudauri',

    img: "https://www.redlodgemountain.com/wp-content/uploads/header.img-rossignol-rental-shop-skis-red-lodge-mountain-montana.jpg",
    buttonText: "Book Adventure",
    rightText:
      ["💎 Premium Gear", "✨ Perfectly Tuned", "⚙️ Daily Maintenance", "📏 All Sizes Available", ],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],
    additionalServices: [
      { name: "Equipment rental", price: "Free" },
      { name: "Instructor guidance", price: "Included" },
      { name: "Video recording", price: "40 GEL" }
    ]
  },
  {
    id: 5,
    season: ['Winter'],
    title: "Snowmobile Adventure ❄️",
    description:
      "Experience the ultimate winter thrill! Explore hidden mountain trails and breathtaking landscapes with our high-power snowmobiles. Perfect for adrenaline seekers and nature lovers alike.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 150 GEL",
    location: '📍Gudauri',

    img: "https://staylapland.com/app/uploads/2025/04/StayLapland-Snowmobile-Customer-10-scaled.jpeg",
    buttonText: "Book Adventure",
    rightText:
      ["❄️ Deep Snow Experience", "👤 Expert Guide Support", "🌅 Breathtaking Views", "🚁 Drone Footage"],
    rating: 5.0,
    reviews: [
      { rating: 5, username: "Oliver", review: "Excellent instructors and equipment." },
      { rating: 4.9, username: "Ava", review: "Amazing slopes and very safe." }
    ],
    additionalServices: [
      { name: "Equipment rental", price: "Free" },
      { name: "Instructor guidance", price: "Included" },
      { name: "Video recording", price: "40 GEL" }
    ]
  },
  // {
  //   id: 6,
  //   season: ['Spring', 'Summer'],
  //   title: "Hiking Adventure",
  //   description:
  //     "Guided hiking tour through forests, valleys, and stunning mountain views.",
  //   evaluation: "4.7",
  //   difficulty: "Easy",
  //   price: "From 80 GEL",
  //   location: '📍Gudauri • Pasanauri • Ananuri',

  //   img: "src/assets/Frame 1984077871 (5).png",
  //   buttonText: "Book Adventure",
  //   rightText:
  //     ["Suitable for beginners and families", "Comfortable shoes are required", "Photo stops included."],
  //   rating: 4.7,
  //   reviews: [
  //     { rating: 4.8, username: "Isabella", review: "Beautiful trails, well organized." },
  //     { rating: 4.6, username: "Lucas", review: "Great hike, friendly guide." }
  //   ],
  //   additionalServices: [
  //     { name: "Drone footage", price: "30 GEL" },
  //     { name: "Guided photos", price: "20 GEL" },
  //     { name: "Refreshments included", price: "Free" }
  //   ]
  // }
];

export default adventureCards;
