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
    img: "src/assets/Frame 1984077871.png",
    buttonText: "Book Adventure",
    rightText:
      "Professional guide, safety briefing, Drone images.",
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
    img: "src/assets/Frame 1984077871 (1).png",
    buttonText: "Book Adventure",    
    rightText:
      "Mountain views, experienced horses, Traditional Georgian style.",
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
    season: ['Spring', 'Summer', 'Autumn'],
    title: "Paragliding Experience",
    description:
      "Feel absolute freedom while flying above mountains with professional instructors.",
    evaluation: "4.9",
    difficulty: "Easy",
    price: "From 150 GEL",
    img: "src/assets/Frame 1984077871 (2).png",
    buttonText: "Book Adventure",
    rightText:
      "Tandem flight with certified instructor, full equipment, and HD video recording.",
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
    img: "src/assets/Frame 1984077871 (3).png",
    buttonText: "Book Adventure",
    rightText:
      "Professional guide, full safety equipment, transportation to the river, and insurance are included in the price.",
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
    title: "Ski & Snowboard Tour",
    description:
      "Winter adventure for ski and snowboard lovers in breathtaking mountain resorts.",
    evaluation: "5.0",
    difficulty: "Medium",
    price: "From 150 GEL",
    img: "src/assets/Frame 1984077871 (4).png",
    buttonText: "Book Adventure",
    rightText:
      "The tour includes high-quality equipment, professional instructor support, and a full safety briefing.",
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
    id: 6,
    season: ['Spring', 'Summer'],
    title: "Hiking Adventure",
    description:
      "Guided hiking tour through forests, valleys, and stunning mountain views.",
    evaluation: "4.7",
    difficulty: "Easy",
    price: "From 80 GEL",
    img: "src/assets/Frame 1984077871 (5).png",
    buttonText: "Book Adventure",
    rightText:
      "Suitable for beginners and families. Comfortable shoes are required. Photo stops included.",
    rating: 4.7,
    reviews: [
      { rating: 4.8, username: "Isabella", review: "Beautiful trails, well organized." },
      { rating: 4.6, username: "Lucas", review: "Great hike, friendly guide." }
    ],
    additionalServices: [
      { name: "Drone footage", price: "30 GEL" },
      { name: "Guided photos", price: "20 GEL" },
      { name: "Refreshments included", price: "Free" }
    ]
  }
];

export default adventureCards;
