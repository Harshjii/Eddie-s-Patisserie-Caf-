export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  isBestSeller?: boolean;
  isCustom?: boolean;
}

export const SITE_CONFIG = {
  name: "The Cake Crumbles",
  tagline: "Every Celebration Deserves Something Sweet",
  location: "Kanpur, Uttar Pradesh, India",
  googleMapsUrl: "https://www.google.co.in/maps/place/The+Cake+Crumbles/",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Format for WhatsApp API
  email: "orders@thecakecrumbles.com",
  instagramUrl: "https://www.instagram.com/thecakecrumbles_kanpur/",
  businessHours: [
    { days: "Monday - Saturday", hours: "10:00 AM - 10:00 PM" },
    { days: "Sunday", hours: "11:00 AM - 11:00 PM" },
  ],
  categories: [
    "Birthday Cakes",
    "Wedding Cakes",
    "Anniversary Cakes",
    "Photo Cakes",
    "Designer Cakes",
    "Cupcakes",
    "Brownies",
    "Pastries",
    "Desserts"
  ],
  products: [
    {
      id: "brownie-trio",
      name: "Trio Gourmet Brownie Box",
      category: "Brownies",
      price: 650,
      description: "A signature assortment of our three finest brownies: rich Hazelnut Fudge, decadent Lotus Biscoff, and velvet Pistachio Chocolate. Freshly baked daily.",
      image: "/images/brownies_trio.png",
      rating: 5.0,
      isBestSeller: true
    },
    {
      id: "brownie-cup",
      name: "Chocolate Brownie Bites Tub",
      category: "Brownies",
      price: 320,
      description: "Bite-sized fudge brownie cubes, packed in a premium travel-friendly tub and drizzled with warm, rich Belgian milk chocolate.",
      image: "/images/brownies_cup.png",
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: "cup-dessert",
      name: "Premium Chocolate Fudge Ice Cream Cup",
      category: "Desserts",
      price: 260,
      description: "Double scoop premium vanilla bean ice cream served in a warm chocolate waffle bowl, finished with our signature dark chocolate fudge drizzle.",
      image: "/images/cup_dessert_icecream.png",
      rating: 4.8,
      isBestSeller: false
    },
    {
      id: "mango-matka",
      name: "Traditional Mango Shrikhand Matka",
      category: "Desserts",
      price: 240,
      description: "Creamy, hand-churned mango shrikhand served in an authentic, chilled earthen clay pot. Gilded with slivered pistachios and saffron strands.",
      image: "/images/dessert_claypot.png",
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: "strawberry-shake",
      name: "Strawberry Cream Freakshake",
      category: "Desserts",
      price: 290,
      description: "Thick, indulgent milkshake made with fresh Mahabaleshwar strawberries, finished with a crown of hand-whipped cream and strawberry compote.",
      image: "/images/strawberry_milkshake.png",
      rating: 4.7,
      isBestSeller: false
    },
    {
      id: "gold-truffle",
      name: "Luxurious Gold-Foil Truffle Cake",
      category: "Birthday Cakes",
      price: 1200,
      description: "Our signature Belgian chocolate truffle sponge cake, adorned with edible 24k gold leaf details and rich dark cocoa glaze.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: "wedding-cascade",
      name: "Elegant 3-Tier Floral Cascade",
      category: "Wedding Cakes",
      price: 4800,
      description: "A breathtaking three-tier wedding cake in classic vanilla bean and raspberry filling, decorated with handmade sugar roses cascading down.",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=600",
      rating: 5.0,
      isBestSeller: false,
      isCustom: true
    },
    {
      id: "red-velvet-anniversary",
      name: "Red Velvet Love Heart Cake",
      category: "Anniversary Cakes",
      price: 950,
      description: "Surprise your partner with our signature velvet sponge, frosted with sweet cream cheese frosting in a classic heart shape.",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      isBestSeller: false
    },
    {
      id: "photo-memories",
      name: "Custom Memories Photo Cake",
      category: "Photo Cakes",
      price: 1100,
      description: "Print your cherished moments on a delicious fresh fruit or chocolate gateau using edible sugar sheets and natural food coloring.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=600",
      rating: 4.7,
      isBestSeller: false,
      isCustom: true
    },
    {
      id: "fondant-designer",
      name: "Premium Floral Fondant Cake",
      category: "Designer Cakes",
      price: 2400,
      description: "Bespoke theme fondant cake handcrafted by our master pastry chefs, customized completely for your special occasion.",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      isBestSeller: false,
      isCustom: true
    },
    {
      id: "cupcake-box",
      name: "Pastel Cream Cupcakes (Box of 6)",
      category: "Cupcakes",
      price: 450,
      description: "An elegant box of six assorted cupcakes: vanilla bean, red velvet, and double chocolate, with pastel swirl buttercream frosting.",
      image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600",
      rating: 4.8,
      isBestSeller: false
    },
    {
      id: "pastry-truffle",
      name: "Belgian Chocolate Truffle Pastry",
      category: "Pastries",
      price: 120,
      description: "A slice of heaven. Alternating layers of moist dark chocolate sponge and smooth Belgian chocolate ganache.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
      rating: 4.9,
      isBestSeller: false
    }
  ] as Product[],
  testimonials: [
    {
      id: "rev1",
      name: "Shreya Verma",
      role: "Kanpur Foodie",
      rating: 5,
      comment: "The Cake Crumbles is my absolute go-to for celebrations. Their Trio Gourmet Brownie box is a literal work of art, so fudgy and flavorful! Kanpur needed a high-end bakery like this.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "rev2",
      name: "Rajesh Khanna",
      role: "Verified Buyer",
      rating: 5,
      comment: "Ordered a 3-tier custom wedding cake from them. The delivery was perfectly on time, the design looked exactly like the reference picture, and the guests couldn't stop praising the flavor!",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: "rev3",
      name: "Ananya Mishra",
      role: "Local Guide",
      rating: 5,
      comment: "Their Mango Shrikhand Matka is out of this world! Combining traditional Indian tastes with high-end premium presentation. Definitely recommend their custom order cakes as well.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ],
  faqs: [
    {
      question: "How far in advance should I order a custom cake?",
      answer: "For elaborate designer and wedding cakes, we recommend booking at least 48 to 72 hours in advance. For standard cakes and best sellers, same-day delivery is available if ordered before 4:00 PM."
    },
    {
      question: "Do you offer home delivery in Kanpur?",
      answer: "Yes, we offer safe, temperature-controlled delivery services across major areas of Kanpur. Delivery fees depend on your exact location and are calculated at checkout."
    },
    {
      question: "Can I customize the flavor and design of my cake?",
      answer: "Absolutely! Our custom order page allows you to specify flavors, weights, shapes, and upload reference photos. We will consult with you on WhatsApp to finalize the design before baking."
    },
    {
      question: "Are your cakes eggless?",
      answer: "Yes! All our standard items are 100% vegetarian (eggless) by default, keeping in mind the local preferences of Kanpur, without compromising on texture and richness."
    }
  ],
  instagramReels: [
    {
      id: "reel1",
      url: "https://www.instagram.com/reel/C0_dEhiyUAi/",
      thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=500",
      caption: "Baking fresh artisanal goodness daily. Watch our master chef glaze our signature creations! ✨🎂",
      views: "15.4K",
      likes: "1,204"
    },
    {
      id: "reel2",
      url: "https://www.instagram.com/reel/C29O801SVJR/",
      thumbnail: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=500",
      caption: "Chocolate overloaded fudge brownies being boxed for order. Satisfy your sweet tooth today! 🍫🤎",
      views: "24.1K",
      likes: "2,350"
    },
    {
      id: "reel3",
      url: "https://www.instagram.com/reel/DYz6avPzIGE/",
      thumbnail: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=500",
      caption: "A sneak peek behind the scenes of our luxurious Custom Fondant Cakes creation process! 👩‍🍳🍰",
      views: "42.8K",
      likes: "5,820"
    }
  ]
};
