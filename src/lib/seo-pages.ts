export const SEO_PAGES = [
  {
    path: "/event-manpower-jaipur",
    seoTitle: "Event Manpower Jaipur | Hire Best Event Staff | Evenza",
    metaDescription: "Looking for event manpower in Jaipur? Evenza provides professional, trained, and reliable event staff for corporate events, weddings, and concerts in Jaipur.",
    keyword: "Event Manpower Jaipur",
    subtitle: "Top-Rated Event Staffing Agency in the Pink City",
    description: "Whether you are hosting a grand wedding, an international exhibition, or a corporate summit, finding reliable event manpower in Jaipur can be challenging. Evenza solves this by providing a verified, highly-trained, and well-groomed event crew.",
    features: [
      "Experienced & Trained Professionals",
      "No Middlemen - Direct Hiring",
      "Punctual and Well-Groomed Staff",
      "Flexible Hiring for Single or Multi-day Events",
      "Dedicated On-Ground Supervisors",
      "Pan-India Service Standard"
    ]
  },
  {
    path: "/event-volunteers-jaipur",
    seoTitle: "Event Volunteers Jaipur | Trained Registration Staff | Evenza",
    metaDescription: "Hire smart and dynamic event volunteers in Jaipur. Perfect for registration desks, ushering, guest management, and ground support.",
    keyword: "Event Volunteers Jaipur",
    subtitle: "Smart & Dynamic Volunteers for Seamless Operations",
    description: "Volunteers are the backbone of any large-scale event. Our event volunteers in Jaipur are college-educated, fluent in English and Hindi, and trained to handle high-pressure environments like marathons, music festivals, and conferences.",
    features: [
      "Bilingual & Excellent Communicators",
      "Trained in Guest Relations",
      "Tech-Savvy for Digital Registrations",
      "Proactive Problem Solvers",
      "Available for Exhibitions & Expos",
      "Crowd Management Experience"
    ]
  },
  {
    path: "/hospitality-team-jaipur",
    seoTitle: "Hospitality Team Jaipur | VIP Guest Relations | Evenza",
    metaDescription: "Evenza provides premium hospitality teams in Jaipur for VIP guest relations, welcome desks, and luxury events.",
    keyword: "Hospitality Team Jaipur",
    subtitle: "Luxury Guest Relations & VIP Management",
    description: "Make a lasting impression with Evenza's premium hospitality team in Jaipur. Our hostesses, ushers, and VIP relations staff are meticulously trained in etiquette to ensure your guests receive the highest standard of service.",
    features: [
      "Premium VIP Guest Management",
      "Airport & Hotel Welcome Teams",
      "Fluent English Speaking Hostesses",
      "Impeccable Grooming Standards",
      "VVIP Protocol Knowledge",
      "Luxury Brand Activation Staff"
    ]
  },
  {
    path: "/wedding-staff-jaipur",
    seoTitle: "Wedding Staff Jaipur | Destination Wedding Crew | Evenza",
    metaDescription: "Planning a destination wedding in Jaipur? Hire our specialized wedding staff, shadow teams, and guest management crew for a flawless celebration.",
    keyword: "Wedding Staff Jaipur",
    subtitle: "Expert Crew for Destination Weddings",
    description: "Jaipur is the destination wedding capital of India. Ensure your special day is flawless with Evenza's specialized wedding staff. From shadow staff for the bride and groom to logistics coordinators and luggage handlers, we manage the ground operations so you can enjoy the wedding.",
    features: [
      "Shadow Staff for Bride & Groom",
      "RSVP & Logistics Coordinators",
      "Luggage & Transport Management",
      "Welcome & F&B Support Staff",
      "Experienced with Royal Venues",
      "24/7 Ground Support Crew"
    ]
  },
  {
    path: "/corporate-event-staffing-jaipur",
    seoTitle: "Corporate Event Staffing Jaipur | AGM & Conference Crew | Evenza",
    metaDescription: "Professional corporate event staffing in Jaipur. Hire staff for AGMs, dealer meets, product launches, and conferences.",
    keyword: "Corporate Event Staffing Jaipur",
    subtitle: "Professional Staff for Conferences & Meets",
    description: "Corporate events demand a high level of professionalism. Our corporate event staffing in Jaipur provides reliable personnel for AGMs, dealer meets, product launches, and seminars. We provide registration teams, stage helpers, and event coordinators.",
    features: [
      "Corporate-Trained Personnel",
      "Registration & Badge Printing Team",
      "Stage & Backstage Managers",
      "Speaker & Delegate Handlers",
      "Product Demonstration Staff",
      "Strict Dress Code Adherence"
    ]
  },
  {
    path: "/exhibition-staff-jaipur",
    seoTitle: "Exhibition Staff Jaipur | Trade Fair & Booth Hosts | Evenza",
    metaDescription: "Boost your exhibition ROI with our trained exhibition staff and booth hostesses in Jaipur. Engaging, proactive, and knowledgeable staff.",
    keyword: "Exhibition Staff Jaipur",
    subtitle: "Engaging Trade Fair & Expo Personnel",
    description: "Stand out at your next trade fair with our expert exhibition staff in Jaipur. We provide proactive booth hosts, lead generators, and product demonstrators who actively engage with attendees and represent your brand perfectly.",
    features: [
      "Proactive Lead Generators",
      "Product Demonstrators",
      "Booth Hostesses & Promoters",
      "Data Collection & Scanning Staff",
      "Energetic & Engaging Personality",
      "Experience across major Expos"
    ]
  }
];

// Local SEO Pages Generator
const CITIES = ["Udaipur", "Jodhpur", "Ajmer", "Kota", "Delhi", "Gurgaon", "Noida", "Mumbai", "Ahmedabad"];

CITIES.forEach(city => {
  SEO_PAGES.push({
    path: `/event-manpower-${city.toLowerCase()}`,
    seoTitle: `Event Manpower ${city} | Hire Best Event Staff | Evenza`,
    metaDescription: `Looking for event manpower in ${city}? Evenza provides professional, trained, and reliable event staff for corporate events, weddings, and concerts in ${city}.`,
    keyword: `Event Manpower ${city}`,
    subtitle: `Top-Rated Event Staffing Agency in ${city}`,
    description: `Whether you are hosting a grand wedding, an exhibition, or a corporate summit, finding reliable event manpower in ${city} can be challenging. Evenza solves this by providing a verified, highly-trained, and well-groomed event crew.`,
    features: [
      "Experienced & Trained Professionals",
      "No Middlemen - Direct Hiring",
      "Punctual and Well-Groomed Staff",
      "Flexible Hiring for Single or Multi-day Events",
      "Dedicated On-Ground Supervisors",
      `Local Expertise in ${city}`
    ]
  });
});
