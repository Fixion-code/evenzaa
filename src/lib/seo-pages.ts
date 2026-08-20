export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedPage {
  label: string;
  path: string;
}

export interface SEOPage {
  path: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  subtitle: string;
  description: string;
  features: string[];
  faqs: FAQ[];
  relatedPages?: RelatedPage[];
  type?: "client" | "volunteer";
}

export const SEO_PAGES: SEOPage[] = [
  // ============================================================
  // JAIPUR SERVICE PAGES — highest priority, most unique content
  // ============================================================
  {
    path: "/event-manpower-jaipur",
    seoTitle: "Event Manpower in Jaipur | Hire Trained Event Staff | Evenza",
    metaDescription:
      "Looking for reliable event manpower in Jaipur? Evenza provides trained, groomed, and vetted event staff for corporate events, weddings, concerts, and exhibitions in Jaipur.",
    keyword: "Event Manpower Jaipur",
    subtitle: "Jaipur's Most Trusted Event Staffing Agency — The Pink City's First Choice",
    description:
      "Jaipur hosts some of India's grandest events — from royal destination weddings at heritage palaces to MSME India conferences and international trade expos. Finding reliable, trained, and professional event manpower in Jaipur at the right time is the difference between an unforgettable event and a logistical nightmare. Evenza was built specifically to solve this. We are a Jaipur-based event staffing agency with deep roots in the city's events ecosystem. Our crew — runners, supervisors, hospitality staff, and event managers — are trained, background-checked, uniformed, and deployed with full on-ground supervision. We serve clients directly, with no middlemen and no hidden costs.",
    features: [
      "Based in Jaipur — local knowledge, fast deployment",
      "Vetted, trained, and uniformed event crew",
      "No middlemen — direct, transparent pricing",
      "Dedicated on-ground supervisors for every event",
      "Flexible single-day to multi-week deployment",
      "Experience at Jaipur's top venues — Rambagh, City Palace, JEC, JECC",
    ],
    faqs: [
      {
        q: "How quickly can Evenza deploy event manpower in Jaipur?",
        a: "We can deploy a crew within 24–48 hours for standard requirements in Jaipur. For large events requiring 50+ staff, we recommend booking 5–7 days in advance to ensure proper briefing and deployment.",
      },
      {
        q: "What types of events does Evenza cover in Jaipur?",
        a: "We cover all event types in Jaipur — destination weddings, corporate summits, product launches, AGMs, dealer meets, trade expos, concerts, marathons, and RSVP events at heritage venues.",
      },
      {
        q: "How many staff do I need for a 500-person wedding in Jaipur?",
        a: "A 500-person wedding typically requires 15–25 hospitality and service staff, plus 2–3 on-ground supervisors. The exact count depends on the number of events (mehendi, sangeet, reception), venue layout, and service style (buffet vs plated). We provide a free consultation and staffing plan.",
      },
      {
        q: "Is Evenza registered and legally compliant?",
        a: "Yes. Evenza is a brand of Shree Ji Company Pvt. Ltd., a registered company based in Jaipur, Rajasthan. We operate with full compliance and can provide GST-compliant invoices.",
      },
      {
        q: "What is the cost of event manpower in Jaipur?",
        a: "Pricing depends on the type of role, number of staff, duration, and event complexity. We offer transparent, competitive rates with no hidden fees. Contact us for a customised quote — most clients receive a detailed proposal within a few hours.",
      },
      {
        q: "Can Evenza provide event staff for events outside Jaipur?",
        a: "Absolutely. Our crew is pan-India deployable. We manage stay, travel, and food for our staff, so you get the same quality of service whether the event is in Jaipur, Delhi, Mumbai, or Goa.",
      },
    ],
    relatedPages: [
      { label: "Hospitality Team Jaipur", path: "/hospitality-team-jaipur" },
      { label: "Wedding Staff Jaipur", path: "/wedding-staff-jaipur" },
      { label: "Corporate Event Staffing Jaipur", path: "/corporate-event-staffing-jaipur" },
      { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
    ],
  },
  {
    path: "/event-volunteers-jaipur",
    seoTitle: "Event Volunteers in Jaipur | Registration & Guest Management Staff | Evenza",
    metaDescription:
      "Hire smart, trained event volunteers in Jaipur. Ideal for conference registrations, marathons, expos, and guest management. Bilingual, tech-savvy, and professional.",
    keyword: "Event Volunteers Jaipur",
    subtitle: "Smart, Energetic Volunteers Who Keep Your Event Moving",
    description:
      "Volunteers are the unsung heroes of every well-run event. Whether it's managing registration queues at a 2,000-delegate conference, guiding runners at a city marathon, or ensuring guests feel welcomed at an expo, the quality of your volunteers reflects directly on your organisation. Evenza's event volunteers in Jaipur are not just warm bodies filling seats — they are college-educated, bilingual (Hindi + English), trained in guest relations, and briefed specifically for your event. We deploy them with a supervisor who manages the team on the ground so you don't have to.",
    features: [
      "College-educated, bilingual (Hindi + English) volunteers",
      "Trained in crowd and queue management",
      "Tech-savvy for digital registration and badge scanning",
      "Proactive problem-solvers under pressure",
      "Experienced at Jaipur marathons, expos, and conferences",
      "On-ground supervisor included for groups of 8+",
    ],
    faqs: [
      {
        q: "What is the difference between event volunteers and event manpower?",
        a: "Event manpower typically refers to trained operational crew — runners, logistic staff, F&B service, show-flow crew. Event volunteers are primarily used for registration, ushering, guest guidance, and information desks. Both are available through Evenza.",
      },
      {
        q: "How many volunteers do I need for a 1,000-person conference in Jaipur?",
        a: "For a 1,000-person conference, we typically recommend 8–12 registration volunteers, 4–6 ushers, and 2–3 helpdesk staff, plus a supervisor — approximately 15–20 volunteers in total, depending on session structure and venue layout.",
      },
      {
        q: "Can volunteers handle digital registration systems and apps?",
        a: "Yes. Our volunteers are briefed specifically on your registration system — whether it's a custom event app, QR code scanner, or a spreadsheet-based check-in. Most adapt within 30 minutes of a pre-event briefing.",
      },
      {
        q: "Do you provide volunteers for marathons and outdoor events in Jaipur?",
        a: "Yes. We have experience at the Jaipur Literature Festival, Pink City Marathon, and similar large-scale outdoor events. Our volunteers are briefed for crowd management, first-responder coordination, and directional guidance.",
      },
      {
        q: "Can I hire volunteers for a single day?",
        a: "Yes. We offer single-day, multi-day, and full-event deployments. There is no minimum commitment beyond 6 working hours per person per day.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Exhibition Staff Jaipur", path: "/exhibition-staff-jaipur" },
      { label: "Corporate Event Staffing Jaipur", path: "/corporate-event-staffing-jaipur" },
    ],
  },
  {
    path: "/hospitality-team-jaipur",
    seoTitle: "Hospitality Team in Jaipur | VIP Guest Management | Evenza",
    metaDescription:
      "Evenza provides premium hospitality teams in Jaipur for VIP guest relations, welcome desks, airport pickups, and luxury events. Impeccable grooming, VVIP protocol knowledge.",
    keyword: "Hospitality Team Jaipur",
    subtitle: "Where Every Guest Feels Like Royalty — Hospitality Done Right",
    description:
      "In Jaipur — India's wedding and MICE capital — the quality of your hospitality team is the first and last impression your guests take home. Evenza's hospitality teams are curated specifically for luxury, heritage, and high-profile events in the Pink City. Our hostesses, guest relations executives, and welcome desk teams are meticulously trained in etiquette, body language, and VVIP protocol. We partner with Jaipur's finest venues — from rooftop palaces in Nahargarh to ballrooms at ITC Rajputana — and our teams know how to carry your brand with grace. Whether it's an airport welcome team, a hotel check-in desk, or a gala dinner floor crew, we have the right people for the job.",
    features: [
      "VVIP and VIP protocol training — etiquette and body language certified",
      "Airport and hotel welcome and check-in teams",
      "Fluent English, Hindi, and basic Rajasthani-dialect speaking",
      "Impeccable grooming — traditional attire or corporate formals as required",
      "Experience at Jaipur's luxury venues — Rambagh Palace, Taj Amer, Samode Haveli",
      "Luxury brand activation and product launch hostesses",
    ],
    faqs: [
      {
        q: "What makes Evenza's hospitality team different from a general staffing agency?",
        a: "We train specifically for hospitality — not just task execution. Our team members understand etiquette, read guests' needs proactively, and know how to handle sensitive or high-profile situations discreetly. We also provide full briefings on client brand standards before every event.",
      },
      {
        q: "Can your hospitality team handle multi-day destination weddings in Jaipur?",
        a: "Yes. This is one of our core strengths. We provide hospitality crew for all functions — sangeet, mehendi, haldi, wedding ceremony, and reception — with consistent team members across days so your guests see familiar, trusted faces throughout.",
      },
      {
        q: "Do you provide airport pickup and hotel welcome teams?",
        a: "Yes. We can place a welcome team at Jaipur International Airport (JAI) and coordinate with hotel reception teams for large groups of guests. We manage the full guest journey from airport to accommodation.",
      },
      {
        q: "What attire do your hospitality staff wear?",
        a: "We provide attire options — traditional Rajasthani, corporate formal, or custom uniforms per your brand guidelines. We also manage grooming standards to ensure consistency across the team.",
      },
      {
        q: "Can you provide hospitality staff who speak foreign languages?",
        a: "We have limited availability of staff with working knowledge of French and German, commonly needed at international corporate events in Jaipur. Contact us with advance notice (minimum 10 days) for language-specific requirements.",
      },
    ],
    relatedPages: [
      { label: "Wedding Staff Jaipur", path: "/wedding-staff-jaipur" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Hospitality Manpower Jaipur", path: "/hospitality-manpower-jaipur" },
    ],
  },
  {
    path: "/wedding-staff-jaipur",
    seoTitle: "Wedding Staff in Jaipur | Destination Wedding Crew | Evenza",
    metaDescription:
      "Planning a destination wedding in Jaipur? Hire Evenza's specialised wedding staff — shadow teams, RSVP coordinators, luggage handlers, and guest management crew for a flawless celebration.",
    keyword: "Wedding Staff Jaipur",
    subtitle: "Flawless Destination Weddings Need the Right Ground Crew",
    description:
      "Jaipur is the undisputed capital of India's destination wedding industry. Palace venues, heritage havelis, garden banquets, and five-star hotels make it the dream backdrop — but behind every perfect frame is an invisible army of ground staff making it all happen. Evenza specialises in wedding manpower for Jaipur's demanding hospitality standards. From shadow staff who remain by the bride and groom's side throughout each function, to logistics coordinators managing hundreds of guest RSVP bookings, to luggage handlers who ensure every suitcase reaches the right room — we manage the human logistics so families can be fully present for every moment.",
    features: [
      "Dedicated shadow staff for bride, groom, and immediate family",
      "RSVP management and guest coordination team",
      "Luggage, transport, and room allocation managers",
      "Welcome desk and check-in staff for all functions",
      "F&B support and service crew for all meal functions",
      "Experience at Jaipur's iconic venues — City Palace, Rambagh, Samode, Oberoi Rajvilas",
    ],
    faqs: [
      {
        q: "What does a 'shadow' do at a wedding in Jaipur?",
        a: "A shadow is a dedicated personal assistant assigned to a specific member of the wedding party — typically the bride, groom, or key family members. They ensure the person has water, a phone, anything they need, manage their schedule between functions, liaise with the event manager, and handle personal requests discreetly so the guest of honour can be fully present.",
      },
      {
        q: "How many staff do I need for a 3-day destination wedding with 300 guests?",
        a: "A typical 3-day, 300-guest destination wedding in Jaipur requires approximately 20–35 ground staff including: 4–6 shadows, 5–8 hospitality staff per function, 2–3 luggage handlers, 2 RSVP coordinators, and 1 on-ground event supervisor. We provide a detailed staffing plan after understanding your specific programme.",
      },
      {
        q: "Can your team work alongside an existing wedding planner?",
        a: "Absolutely. We work seamlessly with wedding planners and their production teams. We handle the manpower side while the planner handles décor, vendor coordination, and creative direction. Many Jaipur-based wedding planners book us regularly.",
      },
      {
        q: "Do you provide staff for all wedding functions — mehendi, sangeet, haldi, wedding, and reception?",
        a: "Yes. We can staff all functions across multiple days with a consistent core team, so your guests see familiar faces throughout. Different functions may have different staffing levels depending on the guest count and nature of the event.",
      },
      {
        q: "Do you handle out-of-town guest coordination?",
        a: "Yes. We can coordinate airport pickups, hotel check-ins, shuttle logistics between venues, and on-call assistance for out-of-town guests throughout the wedding period.",
      },
    ],
    relatedPages: [
      { label: "Hospitality Team Jaipur", path: "/hospitality-team-jaipur" },
      { label: "Wedding Hospitality Jaipur", path: "/wedding-hospitality-jaipur" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/corporate-event-staffing-jaipur",
    seoTitle: "Corporate Event Staffing in Jaipur | Conference & AGM Crew | Evenza",
    metaDescription:
      "Professional corporate event staffing in Jaipur for AGMs, dealer meets, product launches, and conferences. Trained registration teams, stage managers, and delegate handlers.",
    keyword: "Corporate Event Staffing Jaipur",
    subtitle: "When Professionalism Is Non-Negotiable — Choose Evenza for Corporate Events",
    description:
      "Corporate events have zero tolerance for error. A mismanaged registration queue, an absent stage hand, or an untrained delegate handler can cost your organisation its reputation with the very clients you're trying to impress. Evenza's corporate event staffing team in Jaipur is built around this understanding. We provide trained, formally attired, briefed, and supervised corporate event staff for AGMs, dealer meets, product launches, investor summits, and annual conferences at Jaipur's premier venues — JECC, Hotel Clark's Amer, JW Marriott, Fairmont, and more. Every person on our team understands corporate decorum, NDA obligations, and represents your brand on the ground.",
    features: [
      "Formally attired, corporate-briefed event crew",
      "Registration, badge printing, and check-in teams",
      "Stage and backstage management personnel",
      "Speaker and delegate escort and coordination",
      "Product demonstration and exhibition staff",
      "Strict confidentiality and NDA-compliant briefings available",
    ],
    faqs: [
      {
        q: "What corporate events does Evenza staff in Jaipur?",
        a: "We staff AGMs, EGMs, dealer meets, distributor conferences, product launches, investor days, CSR events, award ceremonies, and training summits. We have experience at venues including JECC, Hotel Clark's Amer, JW Marriott Jaipur, and Fairmont Jaipur.",
      },
      {
        q: "Can Evenza handle badge printing and digital registration at the event?",
        a: "Yes. We provide both the staff and, on request, the equipment — badge printers, kiosks, and scanners — for on-spot registration. Our team is trained on multiple event management software platforms.",
      },
      {
        q: "How do you ensure corporate dress code compliance?",
        a: "We enforce a strict dress code as part of our pre-event briefing. Staff are inspected before deployment. For branded events, we can also source and provide uniforms or branded apparel at cost.",
      },
      {
        q: "Can you provide a dedicated event coordinator for our corporate event?",
        a: "Yes. Our event managers act as the single point of contact on the ground, liaising between your internal team, vendors, and our deployed crew. They manage show flow, handle issues proactively, and report to your team in real time.",
      },
      {
        q: "Is Evenza experienced with large-scale conferences of 500+ delegates?",
        a: "Yes. We have staffed multi-day conferences of 500–1,500+ delegates in Jaipur and other cities. Large events receive a dedicated project manager from our side who plans manpower requirements in detail well before the event date.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Exhibition Staff Jaipur", path: "/exhibition-staff-jaipur" },
      { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
    ],
  },
  {
    path: "/exhibition-staff-jaipur",
    seoTitle: "Exhibition Staff in Jaipur | Trade Fair & Booth Hostesses | Evenza",
    metaDescription:
      "Boost your exhibition ROI with Evenza's trained exhibition staff and booth hostesses in Jaipur. Proactive lead generators and product demonstrators for trade fairs and expos.",
    keyword: "Exhibition Staff Jaipur",
    subtitle: "Maximise Your Booth ROI with Proactive Exhibition Staff",
    description:
      "At a trade fair, your booth staff are your brand's first impression, lead generator, and product expert rolled into one. Evenza provides exhibition staff in Jaipur who don't just stand at your counter — they actively engage visitors, communicate your product's value, collect leads, and represent your brand with confidence. We supply staff for trade fairs at JECC (Jaipur Exhibition & Convention Centre), national exhibitions, roadshows, and brand activations. Our booth hosts, product demonstrators, and data collection staff are trained specifically to convert footfall into qualified enquiries.",
    features: [
      "Proactive visitor engagement — not passive booth standing",
      "Trained product demonstrators who understand your offering",
      "Lead collection, QR scanning, and data capture specialists",
      "Energetic, confident, and presentation-ready hostesses",
      "Experience at JECC and major Jaipur trade fairs",
      "Available for single-day, multi-day, and road-show formats",
    ],
    faqs: [
      {
        q: "What is the difference between a booth hostess and a product demonstrator?",
        a: "A booth hostess primarily greets visitors, directs them, and handles basic enquiries. A product demonstrator has deeper knowledge of your product/service and actively demonstrates features, answers technical questions, and generates qualified leads. Evenza provides both, and we recommend the right mix based on your booth's objectives.",
      },
      {
        q: "Can exhibition staff be briefed on a technical product?",
        a: "Yes. We recommend a product briefing session (1–2 hours) the day before the exhibition. Our staff retain briefing material well and can handle most standard product/service questions. For highly technical products, we recommend pairing one of our staff with your own technical expert.",
      },
      {
        q: "How many exhibition staff do I need for a single 10x10 ft booth?",
        a: "A standard 10x10 ft booth typically needs 2–3 staff: one proactive visitor-engager outside the booth, one inside to demonstrate/pitch, and one to handle data collection or paperwork. For busy expo days, we recommend 3–4.",
      },
      {
        q: "Do you provide exhibition staff for events outside Jaipur?",
        a: "Yes. We have staffed exhibitions in Delhi, Mumbai, Ahmedabad, and other cities. Our team travels and we manage their accommodation and logistics so you have consistency of quality wherever the show is.",
      },
      {
        q: "Can I get a uniform or branded outfit for the exhibition staff?",
        a: "Yes. We can source branded t-shirts, formals, or traditional attire as per your brand guidelines. This is recommended for brand-recognition at exhibitions. Coordinate with us at least 5 days before the event.",
      },
    ],
    relatedPages: [
      { label: "Corporate Event Staffing Jaipur", path: "/corporate-event-staffing-jaipur" },
      { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },

  // ============================================================
  // NEW RAJASTHAN / SERVICE PAGES — Tier 2 priority
  // ============================================================
  {
    path: "/hospitality-manpower-jaipur",
    seoTitle: "Hospitality Manpower in Jaipur | F&B & Guest Service Staff | Evenza",
    metaDescription:
      "Hire trained hospitality manpower in Jaipur for banquets, F&B service, hotel events, and MICE. Evenza provides vetted banquet staff, room service crew, and guest service executives.",
    keyword: "Hospitality Manpower Jaipur",
    subtitle: "Trained Hospitality Crew for Jaipur's Hotels, Banquets & Events",
    description:
      "Jaipur's hospitality industry — serving millions of tourists, wedding guests, and corporate delegates each year — demands a level of service that generic labour agencies cannot match. Evenza's hospitality manpower in Jaipur is specifically trained for the hospitality sector: F&B service, banquet setup and service, room allocation, concierge support, and guest relations. We work with Jaipur's hotels, banquet halls, wedding planners, and corporate event organisers to supply trained, uniformed, and professional hospitality staff on demand. Our crew understands hospitality service standards, follows briefing protocols, and delivers consistently — whether it's a 50-cover private dinner or a 1,000-cover banquet at a heritage venue.",
    features: [
      "Trained banquet and F&B service crew",
      "Hotel-standard grooming and uniform discipline",
      "Guest relations and concierge support staff",
      "MICE (Meetings, Incentives, Conferences, Exhibitions) specialists",
      "Available for day-of deployment or multi-event contracts",
      "Experienced with Jaipur's 5-star and heritage hotel standards",
    ],
    faqs: [
      {
        q: "What is the difference between hospitality manpower and event manpower?",
        a: "Hospitality manpower focuses specifically on guest service — F&B, room service, concierge, and guest relations. Event manpower is broader and includes operational roles like runners, logistics crew, show-flow managers, and stage hands. Evenza provides both and can mix roles based on your event.",
      },
      {
        q: "Can Evenza supply banquet waitstaff for a hotel event in Jaipur?",
        a: "Yes. We regularly supply banquet waitstaff for hotel events in Jaipur. Our crew is trained in both buffet and plated service styles, and understands hotel service standards including proper uniform, tray service, and guest interaction protocols.",
      },
      {
        q: "Do you provide hospitality manpower for MICE events at Jaipur hotels?",
        a: "Yes. MICE is one of our core competencies. We provide registration staff, concierge support, F&B crew, and on-ground logistics for conferences, incentive trips, and exhibitions at Jaipur's major MICE properties.",
      },
      {
        q: "What is the minimum booking size for hospitality manpower in Jaipur?",
        a: "We can fulfil requirements starting from 3–4 staff members for smaller events. For single-staff requirements, we recommend reaching out directly as availability varies.",
      },
    ],
    relatedPages: [
      { label: "Hospitality Team Jaipur", path: "/hospitality-team-jaipur" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Wedding Staff Jaipur", path: "/wedding-staff-jaipur" },
    ],
  },
  {
    path: "/wedding-hospitality-jaipur",
    seoTitle: "Wedding Hospitality in Jaipur | Guest Management for Weddings | Evenza",
    metaDescription:
      "Evenza provides complete wedding hospitality services in Jaipur — guest management, welcome teams, F&B support, and shadow staff for destination weddings at palace venues.",
    keyword: "Wedding Hospitality Jaipur",
    subtitle: "Complete Wedding Hospitality for Jaipur's Grandest Celebrations",
    description:
      "A destination wedding in Jaipur is a multi-day, multi-function affair — and the hospitality your guests experience shapes their memory of the entire event. Evenza's wedding hospitality service in Jaipur covers every touchpoint of the guest journey: airport welcome teams, hotel check-in coordination, function-by-function guest management, F&B service support, and a dedicated on-call team for guest requests throughout the wedding. We understand the complexity of managing guests from multiple cities and countries, navigating Jaipur's palace venues, and maintaining the high standards expected at destination weddings. Our wedding hospitality teams are groomed to match the grandeur of the occasion.",
    features: [
      "Airport welcome and guest transfer coordination",
      "Hotel check-in, room allocation, and amenity support",
      "Function-wise guest management for all wedding events",
      "F&B service crew for private dinners and formal banquets",
      "On-call guest assistance throughout the wedding period",
      "Multilingual team available for international guest groups",
    ],
    faqs: [
      {
        q: "What wedding hospitality services does Evenza provide in Jaipur?",
        a: "We provide end-to-end wedding hospitality: airport meet-and-greet, hotel check-in management, welcome desk at each function, guest ushering, F&B service support, shadow staff, and on-call assistance for the entire wedding period.",
      },
      {
        q: "How does Evenza handle international wedding guests in Jaipur?",
        a: "We have team members with working English and limited French/German capability. For large international groups, we coordinate closely with the wedding planner to ensure guests have a comfortable local support contact and relevant information in their language.",
      },
      {
        q: "Can Evenza handle a 500+ guest destination wedding in Jaipur?",
        a: "Yes. We have supported weddings of 200 to 1,000+ guests in Jaipur. For large weddings, we deploy a dedicated project manager who coordinates the full hospitality team across all functions and days.",
      },
    ],
    relatedPages: [
      { label: "Wedding Staff Jaipur", path: "/wedding-staff-jaipur" },
      { label: "Hospitality Team Jaipur", path: "/hospitality-team-jaipur" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-staffing-rajasthan",
    seoTitle: "Event Staffing in Rajasthan | Pan-Rajasthan Event Manpower | Evenza",
    metaDescription:
      "Evenza provides professional event staffing across Rajasthan — Jaipur, Udaipur, Jodhpur, Ajmer, Kota, and beyond. Trained event crew for weddings, corporate events, and expos statewide.",
    keyword: "Event Staffing Rajasthan",
    subtitle: "Rajasthan's Trusted Event Staffing Partner — From the Pink City to the Blue",
    description:
      "Rajasthan is one of India's most active event destinations — from Jaipur's heritage palace weddings to Udaipur's lakeside celebrations, Jodhpur's fortress venues, and Pushkar's spiritual gatherings. Staffing events across Rajasthan's diverse geography requires local knowledge, logistical capability, and a reliable network. Evenza is headquartered in Jaipur and has operational capability across the entire state. We have deployed event crews at Udaipur's Taj Lake Palace, Jodhpur's Umaid Bhawan, and venues across Ajmer, Kota, and Pushkar. Our model — managing our team's travel, stay, and food — means you get the same quality of staff regardless of where in Rajasthan your event is held.",
    features: [
      "Pan-Rajasthan event deployment — all major cities covered",
      "Local knowledge of Rajasthan's top venue logistics",
      "Travel and accommodation managed for out-of-Jaipur deployments",
      "Experience at Udaipur, Jodhpur, Ajmer, Kota, and Pushkar venues",
      "Rajasthani-dialect speaking staff available on request",
      "Scalable crew — from 5 to 500+ staff statewide",
    ],
    faqs: [
      {
        q: "Does Evenza serve cities in Rajasthan beyond Jaipur?",
        a: "Yes. We serve all major Rajasthan cities including Udaipur, Jodhpur, Ajmer, Kota, Bikaner, Pushkar, Alwar, and Bharatpur. We manage our crew's travel and stay for out-of-Jaipur deployments.",
      },
      {
        q: "Can you staff a wedding at Udaipur's lake palace or Jodhpur's Umaid Bhawan?",
        a: "Yes. We have experience at these and many other iconic Rajasthan venues. Each venue has its own logistical requirements and our team is briefed accordingly.",
      },
      {
        q: "What is the turnaround time for deploying staff to a city like Udaipur or Jodhpur?",
        a: "For most Rajasthan cities, we can deploy within 48–72 hours for standard requirements. For large events (50+ staff), we recommend 7–10 days advance booking to allow proper briefing and logistics planning.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Manpower Udaipur", path: "/event-manpower-udaipur" },
      { label: "Event Manpower Jodhpur", path: "/event-manpower-jodhpur" },
    ],
  },
  {
    path: "/event-manpower-rajasthan",
    seoTitle: "Event Manpower in Rajasthan | Statewide Event Crew | Evenza",
    metaDescription:
      "Looking for event manpower across Rajasthan? Evenza deploys trained, supervised event crews to Jaipur, Udaipur, Jodhpur, Ajmer, Kota, and every corner of the state.",
    keyword: "Event Manpower Rajasthan",
    subtitle: "Reliable Event Manpower Across Every Corner of Rajasthan",
    description:
      "Rajasthan's events are as grand as its history — and the manpower that runs them must match. Evenza is the state's most reliable event manpower agency, with operational experience across Jaipur, Udaipur, Jodhpur, Ajmer, Kota, and smaller towns. Our crews include runners, logistics staff, hospitality teams, supervisors, and event managers — all trained, uniformed, and deployed with full on-ground supervision. Because we manage our crew's travel, stay, and food, clients across Rajasthan receive the same quality of trained manpower that makes Jaipur events run flawlessly.",
    features: [
      "State-wide coverage — all 33 districts of Rajasthan reachable",
      "Jaipur-based and locally sourced crew for faster deployment",
      "Trained in destination wedding, corporate, and exhibition roles",
      "Full logistics support — travel, stay, and food managed",
      "Supervisors on every deployment for accountability",
      "GST-compliant billing and transparent pricing",
    ],
    faqs: [
      {
        q: "Which cities in Rajasthan does Evenza cover for event manpower?",
        a: "We cover Jaipur, Udaipur, Jodhpur, Ajmer, Kota, Bikaner, Pushkar, Alwar, Sikar, Nagaur, and can deploy to smaller towns with advance notice. Contact us with your location and we'll confirm availability.",
      },
      {
        q: "Is Evenza's pricing different for events outside Jaipur in Rajasthan?",
        a: "Travel and accommodation costs for crew are added for out-of-Jaipur events. We provide a transparent, itemised quote so you know exactly what you're paying for.",
      },
    ],
    relatedPages: [
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Manpower Udaipur", path: "/event-manpower-udaipur" },
    ],
  },
  {
    path: "/manpower-agency-jaipur",
    seoTitle: "Manpower Agency in Jaipur | Event & Hospitality Staffing | Evenza",
    metaDescription:
      "Evenza is Jaipur's leading event and hospitality manpower agency. Hire trained, vetted, and supervised staff for any event. No middlemen, transparent pricing, GST billing.",
    keyword: "Manpower Agency Jaipur",
    subtitle: "Jaipur's Most Trusted Event and Hospitality Manpower Agency",
    description:
      "If you are searching for a reliable manpower agency in Jaipur for your event or hospitality requirement, the choice matters enormously. Generic staffing agencies provide bodies — Evenza provides trained, briefed, supervised, and accountable event professionals. As a manpower agency founded by event industry practitioners (not HR generalists), we understand the difference between a runner who makes your event smooth and one who creates more problems than they solve. Our agency model is simple: we source, train, uniform, brief, and deploy — and a supervisor from our side ensures the team performs as promised, not just shows up.",
    features: [
      "Founded by event professionals — not a generic HR agency",
      "Rigorous screening, training, and briefing for every deployment",
      "Uniformed, groomed, and briefed staff for every role",
      "On-ground supervisor included in all deployments",
      "Transparent pricing — no hidden charges or last-minute surprises",
      "GST-compliant invoicing from a registered company",
    ],
    faqs: [
      {
        q: "How is Evenza different from other manpower agencies in Jaipur?",
        a: "Most generic manpower agencies supply labour. Evenza supplies trained event professionals. We brief every person on your specific event, manage their uniform and grooming, and deploy a supervisor to ensure performance. We also handle all compliance and provide proper GST invoices.",
      },
      {
        q: "Does Evenza handle payroll, PF, and ESIC for the staff they supply?",
        a: "Yes. All compliance obligations for the staff Evenza supplies are managed by us. You receive a single service invoice; we handle the employment side.",
      },
      {
        q: "Can Evenza supply manpower for ongoing or recurring requirements?",
        a: "Yes. We work with clients on both one-time and recurring contracts. Clients with regular event calendars can discuss a preferred-vendor arrangement with dedicated crew.",
      },
      {
        q: "What is the minimum notice required to book manpower through Evenza?",
        a: "For small requirements (up to 10 staff), 48 hours is usually sufficient. For large deployments (50+ staff), we recommend 5–7 days minimum. Urgent requirements can sometimes be accommodated — contact us directly.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Hospitality Manpower Jaipur", path: "/hospitality-manpower-jaipur" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
    ],
  },

  // ============================================================
  // RAJASTHAN CITY PAGES — each with unique city-specific content
  // ============================================================
  {
    path: "/event-manpower-udaipur",
    seoTitle: "Event Manpower in Udaipur | Lake City Wedding & Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Udaipur for weddings at Taj Lake Palace, Oberoi Udaivilas, and lakeside venues. Evenza provides professional event staffing for Udaipur's luxury events.",
    keyword: "Event Manpower Udaipur",
    subtitle: "Where Lake City Weddings Meet Professional Event Staffing",
    description:
      "Udaipur — the City of Lakes — is one of India's most sought-after destinations for luxury weddings and high-end events. The Taj Lake Palace, Oberoi Udaivilas, RAAS Devigarh, and Fateh Garh regularly host events that demand flawless hospitality execution. Evenza provides trained event manpower in Udaipur for weddings, corporate retreats, and private celebrations, deployed from our Jaipur base with full travel and accommodation managed for our crew.",
    features: [
      "Experience at Udaipur's iconic lake and palace venues",
      "Specialised in destination wedding manpower",
      "Boat and lakeside event logistics expertise",
      "Travel and accommodation managed from Jaipur",
      "Multilingual team for international wedding guests",
      "Same-day supervisory escalation available",
    ],
    faqs: [
      {
        q: "How far in advance should I book event manpower in Udaipur?",
        a: "For Udaipur, we recommend booking at least 7–10 days in advance due to travel logistics. For large weddings at palace venues, 2–3 weeks advance booking is ideal.",
      },
      {
        q: "Can Evenza manage the unique logistics of lakeside events in Udaipur?",
        a: "Yes. Our team has experience at lakeside and water-access venues in Udaipur and understands the additional coordination required for boat transfers, floating platforms, and remote palace locations.",
      },
    ],
    relatedPages: [
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Manpower Jodhpur", path: "/event-manpower-jodhpur" },
    ],
  },
  {
    path: "/event-manpower-jodhpur",
    seoTitle: "Event Manpower in Jodhpur | Blue City Event Staffing | Evenza",
    metaDescription:
      "Looking for event manpower in Jodhpur? Evenza provides professional event staff for Umaid Bhawan, Mehrangarh, and Jodhpur's stunning event venues. Weddings, corporate events, and more.",
    keyword: "Event Manpower Jodhpur",
    subtitle: "Staffing Events in the Blue City — From Mehrangarh to Umaid Bhawan",
    description:
      "Jodhpur's fortress venues, sun-baked haveli settings, and the grandeur of Umaid Bhawan Palace make it one of India's most dramatic wedding and event destinations. Evenza provides trained event manpower in Jodhpur for weddings at heritage properties, corporate offsites, and private celebrations. Our Jaipur-based crew travels to Jodhpur with full logistics managed, ensuring the same quality of trained, uniformed staff at one of Rajasthan's most majestic cities.",
    features: [
      "Experience at Umaid Bhawan Palace and Mehrangarh Fort events",
      "Heritage and open-air venue event expertise",
      "Rajasthani-culture-aware team for authentic guest experiences",
      "All travel and accommodation managed from Jaipur base",
      "Adaptable to Jodhpur's heat-intensive outdoor event conditions",
      "Available for multi-day royal wedding deployments",
    ],
    faqs: [
      {
        q: "Does Evenza have experience staffing events at Umaid Bhawan Palace in Jodhpur?",
        a: "Yes. We have experience at Jodhpur's premium palace venues and understand the strict protocols and standards these properties require. We coordinate closely with venue managers for seamless integration.",
      },
      {
        q: "How do you handle outdoor events in Jodhpur's hot climate?",
        a: "We brief our team on heat management — hydration, rotational breaks, shaded rest zones — to ensure crew performance doesn't dip during outdoor events in Jodhpur's climate. Venue logistics support this as well.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Udaipur", path: "/event-manpower-udaipur" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-ajmer",
    seoTitle: "Event Manpower in Ajmer | Religious & Corporate Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Ajmer for religious gatherings, Pushkar Fair support, corporate events, and hospitality requirements. Professional staffing near the Dargah Sharif.",
    keyword: "Event Manpower Ajmer",
    subtitle: "Professional Event Staffing for Ajmer's Unique Event Landscape",
    description:
      "Ajmer and nearby Pushkar host some of India's most spiritually significant gatherings — the Urs at Ajmer Sharif and the Pushkar Camel Fair among them — alongside corporate events and hospitality requirements for the city's growing MICE sector. Evenza provides trained event manpower in Ajmer-Pushkar for crowd management, registration, hospitality support, and logistics — with sensitivity to the cultural and religious context that makes Ajmer's events unique.",
    features: [
      "Culturally sensitive crew briefed for religious event environments",
      "Pushkar Fair crowd management experience",
      "Registration and hospitality for corporate Ajmer events",
      "Close proximity to Jaipur — fast deployment capability",
      "Bilingual staff (Hindi + Urdu familiarity) available",
      "Coordination with Ajmer-Sharif venue and local authorities",
    ],
    faqs: [
      {
        q: "Can Evenza provide event staff for religious gatherings in Ajmer?",
        a: "Yes. We provide crowd management, registration, and hospitality support for large gatherings including the Urs at Ajmer Sharif. Our team is briefed on cultural sensitivities and dress codes appropriate for such events.",
      },
    ],
    relatedPages: [
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-kota",
    seoTitle: "Event Manpower in Kota | Industrial & Corporate Event Staff | Evenza",
    metaDescription:
      "Need event manpower in Kota for corporate events, industrial summits, or educational events? Evenza provides trained, professional event staff for Kota's growing events sector.",
    keyword: "Event Manpower Kota",
    subtitle: "Professional Event Staffing for Kota's Corporate and Educational Sector",
    description:
      "Kota — Rajasthan's industrial and educational hub — hosts corporate events for its major industrial players, coaching institute conclaves, and government gatherings. The city's event requirements are professional, structured, and growing. Evenza provides trained event manpower in Kota for corporate events, educational conclaves, product launches, and industrial summits, with the same quality of crew deployed for Jaipur's premier events.",
    features: [
      "Corporate-standard event staff for industrial and commercial events",
      "Educational and coaching-sector event experience",
      "Registration and delegate management specialists",
      "Government event and protocol-aware crew",
      "Quick deployment from Jaipur (3-hour distance)",
      "Cost-effective packages for Kota's mid-scale events",
    ],
    faqs: [
      {
        q: "What types of events does Evenza staff in Kota?",
        a: "We staff corporate events for Kota's industrial sector, educational institution conclaves and award ceremonies, product launches, government functions, and social events.",
      },
    ],
    relatedPages: [
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },

  // ============================================================
  // METRO CITY PAGES — unique value props per market
  // ============================================================
  {
    path: "/event-manpower-delhi",
    seoTitle: "Event Manpower in Delhi | Corporate & Wedding Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Delhi for corporate events, MICE, product launches, and destination weddings. Evenza deploys professional event staff across Delhi and NCR.",
    keyword: "Event Manpower Delhi",
    subtitle: "India's Capital Demands the Best — Evenza Delivers Event Manpower in Delhi",
    description:
      "Delhi's events calendar is one of the most demanding in India — from state-level government functions and Fortune 500 corporate summits to NCR's booming wedding industry. Evenza deploys trained, briefed, and supervised event manpower in Delhi for corporate events at venues like NSIC, Pragati Maidan, The Leela Palace, and ITC Maurya, as well as destination weddings in Gurugram and Greater Noida. Our crew travels from Jaipur with full logistics managed, bringing the same standard that drives Rajasthan's events to India's capital.",
    features: [
      "Corporate event staffing for Delhi's top conference venues",
      "Experience at Pragati Maidan, India Expo Mart, and major Delhi hotels",
      "NCR-wide deployment — Delhi, Gurgaon, Noida, Faridabad, Ghaziabad",
      "Government and protocol-aware crew for state functions",
      "Multilingual team for Delhi's diverse international event guests",
      "Same-standard deployment as Jaipur — fully managed crew",
    ],
    faqs: [
      {
        q: "Does Evenza serve all of NCR — Gurgaon, Noida, Faridabad, and Ghaziabad?",
        a: "Yes. Our Delhi deployment covers all of NCR. We coordinate a base in the Delhi area for multi-day events so crew logistics are efficient across the NCR geography.",
      },
      {
        q: "Can Evenza staff government or protocol-sensitive events in Delhi?",
        a: "Yes. We have crew experienced with government events and understand protocol requirements. Background checks are standard for all our staff.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Gurgaon", path: "/event-manpower-gurgaon" },
      { label: "Event Manpower Noida", path: "/event-manpower-noida" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-gurgaon",
    seoTitle: "Event Manpower in Gurgaon | Corporate & MICE Event Staff | Evenza",
    metaDescription:
      "Hire professional event manpower in Gurgaon for corporate events, MICE, product launches, and conferences. Evenza provides trained event staff for Gurgaon's corporate corridor.",
    keyword: "Event Manpower Gurgaon",
    subtitle: "Powering Gurgaon's Corporate Events With Professional Manpower",
    description:
      "Gurgaon's Millennium City has become one of India's most active corporate event hubs — home to hundreds of MNCs, startup campuses, and luxury hotels hosting conferences, product launches, and MICE events year-round. Evenza provides trained event manpower in Gurgaon for these corporate events — registration teams, delegate handlers, stage managers, and exhibition staff who understand the professional standards expected at Cyber Hub, Leela Ambience, Hyatt Regency, and similar venues.",
    features: [
      "Specialised in Gurgaon's corporate event environment",
      "MICE-trained staff for conferences and conventions",
      "Registration, badge printing, and check-in teams",
      "Stage and backstage management professionals",
      "Experience at Gurgaon's premium conference hotels",
      "Quick deployment alongside Delhi deployments for NCR-wide coverage",
    ],
    faqs: [
      {
        q: "Can Evenza provide manpower for tech company events in Gurgaon?",
        a: "Yes. Many of our corporate clients are tech and finance companies with offices in Gurgaon. Our staff are briefed on corporate decorum, NDAs can be arranged, and we maintain professional standards throughout.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Event Manpower Noida", path: "/event-manpower-noida" },
      { label: "Corporate Event Staffing Jaipur", path: "/corporate-event-staffing-jaipur" },
    ],
  },
  {
    path: "/event-manpower-noida",
    seoTitle: "Event Manpower in Noida | Exhibition & Corporate Event Staff | Evenza",
    metaDescription:
      "Need event manpower in Noida? Evenza provides trained staff for corporate events, exhibitions at India Expo Mart, product launches, and conferences in Noida and Greater Noida.",
    keyword: "Event Manpower Noida",
    subtitle: "Exhibition & Corporate Event Staffing for Noida and Greater Noida",
    description:
      "Noida and Greater Noida host some of India's largest exhibitions and trade fairs at India Expo Mart and Expo Centre, alongside corporate events for the city's rapidly expanding IT and manufacturing sectors. Evenza provides trained event manpower in Noida — exhibition staff, registration teams, booth hostesses, and corporate event crew — deployed with full supervision and coordination for both single-day and multi-day events.",
    features: [
      "Exhibition staffing specialists for India Expo Mart events",
      "Corporate event crew for Noida's IT and industrial sector",
      "Badge printing and digital registration teams",
      "Proactive booth staff for trade fairs and expos",
      "Greater Noida and Yamuna Expressway venue experience",
      "Coordinated deployment with Delhi for NCR-wide events",
    ],
    faqs: [
      {
        q: "Does Evenza have experience staffing at India Expo Mart in Greater Noida?",
        a: "Yes. India Expo Mart is one of the most frequent exhibition venues we staff at in the NCR region. Our exhibition staff are experienced with the venue layout and logistics.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Event Manpower Gurgaon", path: "/event-manpower-gurgaon" },
      { label: "Exhibition Staff Jaipur", path: "/exhibition-staff-jaipur" },
    ],
  },
  {
    path: "/event-manpower-mumbai",
    seoTitle: "Event Manpower in Mumbai | Corporate & Entertainment Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Mumbai for corporate events, film premieres, award shows, and brand activations. Evenza provides professional event staff for Mumbai and Navi Mumbai.",
    keyword: "Event Manpower Mumbai",
    subtitle: "Mumbai's Fast-Paced Events Need Equally Dynamic Manpower",
    description:
      "Mumbai — India's commercial, entertainment, and fashion capital — runs some of the country's most complex and high-visibility events: Bollywood premieres, award ceremonies, major product launches, brand activations, and the corporate events of India's largest financial institutions. Evenza provides event manpower in Mumbai for clients who need trained, presentable, and on-brief staff who understand the pace and professionalism that Mumbai's event industry demands. Our crew is deployed from Jaipur with full logistics handled, and we have a growing network of pre-vetted Mumbai-area staff for faster local deployment.",
    features: [
      "Experience with Mumbai's entertainment and corporate event formats",
      "Brand activation and experiential marketing staff",
      "High-profile event presentation standards",
      "Pan-Mumbai coverage — South Mumbai, BKC, Andheri, Navi Mumbai",
      "Bilingual (Hindi/English) and presentable crew",
      "Available for Bollywood, fashion, and corporate events",
    ],
    faqs: [
      {
        q: "Can Evenza provide staff for brand activations and experiential events in Mumbai?",
        a: "Yes. Brand activation and experiential marketing events are a core part of our portfolio. Our staff are trained to represent brands energetically and professionally in consumer-facing environments.",
      },
      {
        q: "Does Evenza have staff based in Mumbai for faster deployment?",
        a: "We are building a Mumbai-area network of pre-vetted staff to complement our Jaipur deployment. For time-sensitive events, contact us early and we'll confirm the fastest available option.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Ahmedabad", path: "/event-manpower-ahmedabad" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-ahmedabad",
    seoTitle: "Event Manpower in Ahmedabad | Trade Fair & Corporate Event Staff | Evenza",
    metaDescription:
      "Looking for event manpower in Ahmedabad? Evenza provides trained event staff for trade fairs, corporate events, and exhibitions at Helipad Grounds and major Ahmedabad venues.",
    keyword: "Event Manpower Ahmedabad",
    subtitle: "Professional Event Staffing for Gujarat's Commercial Capital",
    description:
      "Ahmedabad — Gujarat's trade and commerce capital — hosts major trade fairs at Helipad Exhibition Ground, Vibrant Gujarat summits, and one of India's most active MSME event calendars. Evenza provides trained event manpower in Ahmedabad for trade fairs, corporate events, and MICE, with particular strength in exhibition and registration staffing. Our proximity in Rajasthan makes Ahmedabad one of our faster out-of-state deployment destinations.",
    features: [
      "Trade fair and exhibition staffing for Ahmedabad venues",
      "Vibrant Gujarat and MSME summit experience",
      "Gujarati-speaking staff available for local audience events",
      "Registration, badge printing, and expo management teams",
      "Close to Jaipur — efficient travel logistics",
      "Corporate event staffing for Ahmedabad's industrial sector",
    ],
    faqs: [
      {
        q: "Can Evenza provide Gujarati-speaking staff for events in Ahmedabad?",
        a: "Yes. We have staff with working knowledge of Gujarati for events where local language capability is important, particularly for trade fairs and regional dealer meets.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
    ],
  },

  // ============================================================
  // ADDITIONAL METRO CITY PAGES
  // ============================================================
  {
    path: "/event-manpower-lucknow",
    seoTitle: "Event Manpower in Lucknow | Wedding & Corporate Event Staff | Evenza",
    metaDescription:
      "Hire professional event manpower in Lucknow for weddings, corporate events, and cultural gatherings. Evenza provides trained, groomed event staff across Lucknow and UP.",
    keyword: "Event Manpower Lucknow",
    subtitle: "Nawabi City Events Deserve Nawabi Standards of Hospitality",
    description:
      "Lucknow — the City of Nawabs — has a rich tradition of refined hospitality and grand celebrations. Its weddings are legendary, its corporate sector is growing rapidly, and its cultural events draw audiences from across North India. Evenza provides trained event manpower in Lucknow for weddings at the Taj Mahal Hotel, corporate events at Indira Gandhi Pratishthan, and cultural gatherings across the city — delivering the same warmth and professionalism that the city's traditions demand.",
    features: [
      "Trained for Lucknow's formal wedding and cultural event standards",
      "Experience at Taj Hotel Lucknow, Indira Gandhi Pratishthan, and major venues",
      "Hindi-speaking, culturally attuned event crew",
      "North India-wide deployment from a Jaipur base",
      "Courteous, formal, and guest-focused service standards",
      "Available for UP government and corporate events",
    ],
    faqs: [
      {
        q: "Can Evenza provide event staff for large weddings in Lucknow?",
        a: "Yes. Lucknow's wedding scene is one of the most active in North India. We provide hospitality staff, shadow teams, registration and logistics crew for multi-day Lucknow weddings.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-pune",
    seoTitle: "Event Manpower in Pune | Corporate & IT Sector Event Staff | Evenza",
    metaDescription:
      "Looking for event manpower in Pune? Evenza provides trained event staff for corporate events, IT sector conferences, product launches, and exhibitions in Pune and PCMC.",
    keyword: "Event Manpower Pune",
    subtitle: "Staffing Pune's Growing Corporate and IT Event Sector",
    description:
      "Pune's thriving IT corridor, manufacturing sector, and growing MICE infrastructure make it one of India's fastest-growing corporate event markets. The city hosts major tech conferences, manufacturing summits, educational events, and an active wedding industry. Evenza provides trained event manpower in Pune for these diverse requirements — from registration teams at JW Marriott Pune and The Westin to exhibition staff at Pune's growing trade fair venues.",
    features: [
      "IT and corporate sector event experience",
      "Tailored for Pune's conference and exhibition circuit",
      "Registration and delegate management for tech events",
      "Experience at Pune's premium hotels and convention centres",
      "PCMC (Pimpri-Chinchwad) industrial event coverage",
      "Marathi-speaking staff available for local-audience events",
    ],
    faqs: [
      {
        q: "Can Evenza provide staff for IT sector conferences in Pune?",
        a: "Yes. Corporate and IT sector events are among our strongest competencies. Our staff are trained in corporate decorum and can handle registration, delegate management, and technical session support.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
      { label: "Corporate Event Staffing Jaipur", path: "/corporate-event-staffing-jaipur" },
    ],
  },
  {
    path: "/event-manpower-bengaluru",
    seoTitle: "Event Manpower in Bengaluru | Tech & Corporate Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Bengaluru for tech conferences, product launches, startup events, and corporate summits. Evenza provides professional event staffing across Bangalore.",
    keyword: "Event Manpower Bengaluru",
    subtitle: "India's Silicon Valley Needs Event Manpower That Matches Its Ambitions",
    description:
      "Bengaluru is India's technology capital — and its events reflect that. Tech summits, startup conferences, VC meets, product launches, and one of India's most active wedding markets all converge in the Garden City. Evenza provides trained event manpower in Bengaluru for tech events at NIMHANS Convention Centre, Bangalore International Exhibition Centre (BIEC), and premium hotels across the city.",
    features: [
      "Technology and startup event staffing expertise",
      "Bengaluru International Exhibition Centre (BIEC) experience",
      "Kannada-speaking staff available for local events",
      "Corporate and product launch event crew",
      "Registration and delegate management for large tech conferences",
      "Experienced with Bengaluru's diverse international event audience",
    ],
    faqs: [
      {
        q: "Does Evenza staff events at BIEC — Bengaluru International Exhibition Centre?",
        a: "Yes. BIEC is one of South India's largest exhibition venues and we have experience deploying exhibition and event staff there for national and international trade fairs.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Hyderabad", path: "/event-manpower-hyderabad" },
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
    ],
  },
  {
    path: "/event-manpower-hyderabad",
    seoTitle: "Event Manpower in Hyderabad | HITEX & Corporate Event Staff | Evenza",
    metaDescription:
      "Looking for event manpower in Hyderabad? Evenza provides trained event staff for HITEX, HICC, corporate events, tech conferences, and weddings across Hyderabad and Secunderabad.",
    keyword: "Event Manpower Hyderabad",
    subtitle: "Professional Event Staffing for the City of Pearls",
    description:
      "Hyderabad's rapid growth as an IT and pharmaceutical hub has created one of India's most active corporate event markets. HITEX Exhibition Centre, Hyderabad International Convention Centre (HICC), and a string of luxury hotels host national and international events year-round. Evenza provides trained event manpower in Hyderabad for these corporate events, exhibitions, and weddings — deploying experienced crew with full logistics managed.",
    features: [
      "Experience at HITEX and HICC — Hyderabad's premier event venues",
      "Corporate event staffing for Hyderabad's IT and pharma sector",
      "Telugu-speaking staff available for local events",
      "Exhibition and trade fair staffing specialists",
      "Wedding event manpower for Hyderabad's grand celebrations",
      "Consistent quality managed from our Jaipur operations centre",
    ],
    faqs: [
      {
        q: "Can Evenza provide event staff for pharmaceutical and biotech conferences in Hyderabad?",
        a: "Yes. The pharma and biotech sector is a key part of Hyderabad's events calendar. Our staff are briefed on the professional standards and confidentiality requirements typical of this sector.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Bengaluru", path: "/event-manpower-bengaluru" },
      { label: "Event Manpower Chennai", path: "/event-manpower-chennai" },
    ],
  },
  {
    path: "/event-manpower-chennai",
    seoTitle: "Event Manpower in Chennai | Corporate & Cultural Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Chennai for corporate events, cultural gatherings, product launches, and exhibitions. Evenza provides professional event staffing across Chennai.",
    keyword: "Event Manpower Chennai",
    subtitle: "Event Staffing for Chennai's Rich Corporate and Cultural Event Landscape",
    description:
      "Chennai — South India's industrial and cultural capital — hosts a wide spectrum of events: from Tamil Nadu's major industrial summits and pharma conferences to classical music festivals and grand Tamil weddings. Evenza provides trained event manpower in Chennai for this diverse events landscape — corporate-standard staff for business events and culturally sensitive teams for Chennai's traditional celebrations.",
    features: [
      "Corporate event staffing for Chennai's industrial and tech sector",
      "Tamil-speaking staff available for local-audience events",
      "Cultural event manpower sensitive to Tamil traditions",
      "Exhibition staffing for Chennai Trade Centre events",
      "Wedding hospitality crew for Chennai's celebrations",
      "Consistent deployment standards from Evenza's operations",
    ],
    faqs: [
      {
        q: "Can Evenza provide Tamil-speaking event staff in Chennai?",
        a: "Yes. For events requiring Tamil language capability, we source staff with Tamil-speaking ability. Please specify this requirement when enquiring so we can confirm availability.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Bengaluru", path: "/event-manpower-bengaluru" },
      { label: "Event Manpower Hyderabad", path: "/event-manpower-hyderabad" },
    ],
  },
  {
    path: "/event-manpower-chandigarh",
    seoTitle: "Event Manpower in Chandigarh | North India Corporate Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Chandigarh for corporate events, agricultural summits, product launches, and Punjab-Haryana region events. Evenza provides professional event staffing.",
    keyword: "Event Manpower Chandigarh",
    subtitle: "North India's Planned City Meets Professional Event Staffing",
    description:
      "Chandigarh — shared capital of Punjab and Haryana — is an important event hub for North India's agricultural, automotive, and government sectors. The city hosts state government summits, agricultural conclaves, Fortis and other healthcare industry events, and a growing corporate calendar. Evenza provides trained event manpower in Chandigarh with swift deployment from our Jaipur base.",
    features: [
      "Proximity to Jaipur enables fast deployment to Chandigarh",
      "Government and state-sector event experience",
      "Punjabi and Hindi speaking crew available",
      "Agricultural and industrial sector event manpower",
      "Corporate standard staff for Chandigarh's growing MICE sector",
      "Tri-city coverage — Chandigarh, Mohali, Panchkula",
    ],
    faqs: [
      {
        q: "Does Evenza provide manpower for events in Mohali and Panchkula too?",
        a: "Yes. Our Chandigarh deployment covers the full tri-city area — Chandigarh, Mohali (Punjab), and Panchkula (Haryana).",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-goa",
    seoTitle: "Event Manpower in Goa | Beach & Luxury Event Staff | Evenza",
    metaDescription:
      "Need event manpower in Goa for beach weddings, corporate retreats, music festivals, and luxury events? Evenza provides trained event staff for Goa's unique event landscape.",
    keyword: "Event Manpower Goa",
    subtitle: "Beach Weddings, Corporate Retreats & Festivals — Event Staffing in Goa",
    description:
      "Goa's unique blend of beach luxury, Portuguese heritage, and vibrant nightlife makes it one of India's most popular destinations for corporate retreats, beach weddings, music festivals, and incentive travel events. Events in Goa require manpower that combines professionalism with adaptability to outdoor, beach, and resort environments. Evenza provides trained event manpower in Goa for these requirements — from luxury beach wedding hospitality to music festival crowd management.",
    features: [
      "Beach and outdoor event environment expertise",
      "Luxury resort event staffing experience",
      "Music festival and entertainment event crew",
      "Corporate retreat and incentive travel event staff",
      "English-speaking and tourist-facing team capability",
      "Experience at North and South Goa's premium properties",
    ],
    faqs: [
      {
        q: "Can Evenza provide hospitality staff for a beach wedding in Goa?",
        a: "Yes. Beach weddings are a speciality. Our team is experienced with outdoor and beach environments, including managing logistics like sand, sun, and wind that affect service standards differently from indoor venues.",
      },
      {
        q: "Does Evenza staff music festivals in Goa?",
        a: "Yes. We have experience at music and cultural festivals in Goa and can provide crowd management, registration, wristband distribution, and hospitality crew.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
      { label: "Wedding Staff Jaipur", path: "/wedding-staff-jaipur" },
    ],
  },
  {
    path: "/event-manpower-indore",
    seoTitle: "Event Manpower in Indore | Corporate & Trade Fair Event Staff | Evenza",
    metaDescription:
      "Looking for event manpower in Indore? Evenza provides trained event staff for corporate events, trade fairs, and weddings across Indore and MP. Fast deployment from Jaipur.",
    keyword: "Event Manpower Indore",
    subtitle: "MP's Commercial Capital Gets Professional Event Manpower",
    description:
      "Indore — Madhya Pradesh's commercial and financial capital — hosts a growing calendar of corporate events, trade fairs, and one of India's most celebrated wedding cultures. The city's proximity to Ujjain also makes it a hub for cultural and religious gatherings. Evenza provides trained event manpower in Indore for corporate events, trade fairs, and weddings — with relatively quick deployment from our Jaipur operations.",
    features: [
      "Commercial and trade event staffing for Indore's business sector",
      "Proximity to Jaipur means faster deployment than most agencies",
      "Hindi-speaking crew attuned to Madhya Pradesh's event culture",
      "Wedding hospitality manpower for Indore's grand celebrations",
      "Experience with MP government and public sector events",
      "Flexible deployment for Indore and surrounding MP cities",
    ],
    faqs: [
      {
        q: "Can Evenza staff events in Indore and also serve nearby cities like Bhopal?",
        a: "Yes. We can deploy to Indore, Bhopal, and other MP cities from our Jaipur base. For Bhopal specifically, contact us for availability and lead time.",
      },
    ],
    relatedPages: [
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Event Manpower Ahmedabad", path: "/event-manpower-ahmedabad" },
    ],
  },
  {
    path: "/event-manpower-surat",
    seoTitle: "Event Manpower in Surat | Diamond Industry & Wedding Event Staff | Evenza",
    metaDescription:
      "Hire event manpower in Surat for diamond industry events, corporate functions, and Gujarati weddings. Evenza provides trained event staff for Surat's booming events sector.",
    keyword: "Event Manpower Surat",
    subtitle: "Surat's Diamond-Bright Events Deserve Equally Polished Event Staff",
    description:
      "Surat — India's diamond and textile capital — hosts some of the most lavish trade events, industry conclaves, and Gujarati weddings in the country. The city's booming economy means corporate events are frequent and budgets are generous. Evenza provides trained event manpower in Surat for the diamond trade's industry events, corporate functions, and Surat's legendary wedding celebrations — where hospitality standards match the city's prosperity.",
    features: [
      "Diamond and textile industry event experience",
      "Gujarati-speaking staff for trade and community events",
      "High-standard hospitality crew for Surat's premium weddings",
      "Corporate event staffing for Surat's growing business sector",
      "Experienced with large-scale Gujarati wedding formats",
      "Efficient deployment from Jaipur via Gujarat corridor",
    ],
    faqs: [
      {
        q: "Can Evenza provide event staff for diamond trade events in Surat?",
        a: "Yes. The diamond trade's events have specific requirements around professionalism, security awareness, and presentation. We brief our team accordingly and have experience at Surat Diamond Bourse and related venues.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Ahmedabad", path: "/event-manpower-ahmedabad" },
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
    ],
  },
  {
    path: "/event-manpower-kolkata",
    seoTitle: "Event Manpower in Kolkata | Cultural & Corporate Event Staff | Evenza",
    metaDescription:
      "Hire trained event manpower in Kolkata for cultural events, corporate summits, trade fairs at Milan Mela, and weddings. Evenza provides professional event staffing across Kolkata.",
    keyword: "Event Manpower Kolkata",
    subtitle: "The City of Joy's Events Get Joy-Worthy Event Manpower",
    description:
      "Kolkata — India's cultural capital — hosts a magnificent spectrum of events: Durga Puja pandals that draw millions, literary festivals, trade fairs at Milan Mela and ICCR, and some of Bengal's grandest weddings. Evenza provides trained event manpower in Kolkata for this diverse events landscape — culturally attuned staff who understand the city's unique rhythms and the warmth that West Bengal's events demand.",
    features: [
      "Culturally attuned crew for Kolkata's unique event traditions",
      "Trade fair and exhibition staffing for Milan Mela and ICCR",
      "Bengali-speaking staff available for local events",
      "Corporate event staffing for Kolkata's growing business sector",
      "Wedding hospitality crew familiar with Bengali wedding traditions",
      "Festival and large-scale public event crowd management",
    ],
    faqs: [
      {
        q: "Can Evenza provide Bengali-speaking event staff in Kolkata?",
        a: "Yes. For events where Bengali language capability is important, we can source staff with Bengali-speaking ability. Please specify this when enquiring so we can confirm availability.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Event Manpower Bengaluru", path: "/event-manpower-bengaluru" },
    ],
  },

  // ============================================================
  // VOLUNTEER CITY PAGES — targets "volunteering [city]" searches
  // Supply-side: for freshers, students, freelancers looking for
  // genuine paid event volunteering opportunities
  // ============================================================
  {
    path: "/volunteering-jaipur",
    seoTitle: "Volunteering in Jaipur | Paid Event Volunteer Jobs | Evenza",
    metaDescription: "Looking for genuine volunteering in Jaipur? Join Evenza's paid event volunteer community. Real opportunities at JLF, Pink City Marathon, JECC expos & weddings. No registration fee. Students welcome.",
    keyword: "Volunteering in Jaipur",
    subtitle: "Jaipur's Only Paid Event Volunteer Community — Earn While You Learn",
    description: "Searching for volunteering in Jaipur? Most search results lead to NGOs offering free work. Evenza is different — we are a registered event company that pays volunteers for every event they work. Jaipur hosts some of India's grandest events: the Jaipur Literature Festival, Pink City Half Marathon, trade expos at JECC, corporate summits at JW Marriott and Fairmont, and hundreds of destination weddings at palace venues like Rambagh and City Palace. Whether you're a student at BITS Pilani, Poornima University, Rajasthan University, Manipal Jaipur, or a fresh graduate looking for your first industry break — Evenza gives you genuine paid event experience, a real professional network, and the flexibility to work around your schedule. Join our WhatsApp community and get notified first when Jaipur events go live.",
    features: [
      "Paid volunteering — earn for every event, no unpaid labour",
      "Access to Jaipur's biggest events: JLF, Pink City Marathon, JECC trade fairs, heritage weddings",
      "Zero registration fee — Evenza never charges volunteers to join",
      "Ideal for students at BITS Pilani, Poornima, Rajasthan University, Manipal Jaipur",
      "Flexible — choose events that fit around your college timetable",
      "WhatsApp community with real-time Jaipur event notifications",
    ],
    faqs: [
      {
        q: "Is there paid volunteering available for students in Jaipur?",
        a: "Yes. Evenza provides paid event volunteering for students in Jaipur at events like the Jaipur Literature Festival, JECC trade expos, corporate summits, and destination weddings at palace venues. You are paid per event — there is no unpaid internship model.",
      },
      {
        q: "Which Jaipur colleges can join Evenza as volunteers?",
        a: "Any student from any Jaipur or Rajasthan college can apply — including BITS Pilani, Poornima University, Rajasthan University, Manipal University Jaipur, JECRC, Amity Jaipur, Apex University, and others. No college restrictions. Join through our WhatsApp community link on the Volunteers page.",
      },
      {
        q: "What kinds of events can I volunteer at in Jaipur?",
        a: "Jaipur events are extremely varied: Jaipur Literature Festival, Pink City Marathon, JECC trade expos, corporate conferences, MICE events, destination weddings at Rambagh Palace, Samode Haveli and City Palace, brand activations, product launches, and government events.",
      },
      {
        q: "Can I volunteer in Jaipur even if I have zero event experience?",
        a: "Yes — and most first-time Evenza volunteers have no prior experience. We brief every volunteer before each event. Your availability, reliability, and attitude matter more than a resume.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Rajasthan", path: "/volunteering-rajasthan" },
      { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
    ],
  },
  {
    path: "/volunteering-delhi",
    seoTitle: "Volunteering in Delhi | Paid Event Volunteer Jobs in Delhi NCR | Evenza",
    metaDescription: "Find genuine paid volunteering opportunities in Delhi. Evenza connects freshers and students with real event volunteer work at trade fairs, corporate events & more. No fees. Join free.",
    keyword: "Volunteering in Delhi",
    subtitle: "Delhi's Biggest Events Need Energetic Volunteers — Join Evenza",
    description: "Delhi is India's event capital — from the India International Trade Fair at Pragati Maidan and the Auto Expo at India Expo Mart, to corporate summits at The Leela Palace and ITC Maurya, to high-profile cultural events and NGO gatherings across the city. Finding genuine, paid volunteering in Delhi used to mean navigating a maze of free charity work or shady agencies. Evenza changes that. We are a registered event company that places paid volunteers at real events across Delhi and the entire NCR — Gurgaon, Noida, Faridabad, and Ghaziabad included. If you're a student at Delhi University, Jamia Millia, IP University, Amity Delhi, Guru Gobind Singh Indraprastha University, or any Delhi college, or a fresher trying to break into the events industry, the Evenza Volunteers community is your entry point. No fees. No scam. Just real events and real pay.",
    features: [
      "Access to Delhi's landmark events — IITF, Auto Expo, corporate summits, cultural events",
      "Full NCR coverage — Delhi, Gurgaon, Noida, Faridabad, Ghaziabad",
      "Open to students from DU, Jamia, IP University, Amity, GGSIPU and all Delhi colleges",
      "Paid per event — not volunteer-for-free model",
      "No registration fee, no deposits, no scams — Evenza is a registered company",
      "WhatsApp community with Delhi NCR event alerts",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Delhi?",
        a: "Delhi's event calendar includes the India International Trade Fair at Pragati Maidan, Auto Expo, India Expo Mart exhibitions in Greater Noida, corporate summits, product launches, fashion events, marathons, cultural festivals, and NGO events. NCR also includes major corporate events in Gurgaon's Cyber Hub and Noida's business districts.",
      },
      {
        q: "Does Evenza cover Gurgaon and Noida for volunteers as well?",
        a: "Yes. Our Delhi volunteer community covers all of NCR — Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad. You can apply for events anywhere in the NCR region.",
      },
      {
        q: "How do I avoid getting scammed looking for volunteering in Delhi?",
        a: "Only join through the official Evenza Volunteers WhatsApp community linked on our website. We never ask for money, documents, or any registration fee. Any person or agency asking for payment to 'register you as a volunteer' is running a scam.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in India", path: "/volunteering-india" },
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
    ],
  },
  {
    path: "/volunteering-mumbai",
    seoTitle: "Volunteering in Mumbai | Paid Event Volunteer Jobs Mumbai | Evenza",
    metaDescription: "Searching for volunteering in Mumbai? Join Evenza's paid event volunteer community. Work at Bollywood events, corporate summits, Lollapalooza & more. Students & freshers welcome. No fee.",
    keyword: "Volunteering in Mumbai",
    subtitle: "Mumbai's Fastest Events Need Mumbai's Most Energetic Volunteers",
    description: "Mumbai never stops — and neither do its events. Film premieres at PVR Icon and BookMyShow Live venues, the Kala Ghoda Arts Festival, Lollapalooza India at Mahalaxmi Racecourse, NMACC galas, corporate summits at BKC's luxury hotels, brand activations in Bandra and Lower Parel, fashion weeks, and some of India's biggest weddings — Mumbai's event industry runs 365 days a year. Evenza places paid volunteers at these events across Mumbai, Navi Mumbai, and Thane. For students at Mumbai University, NMIMS, SP Jain, Tata Institute of Social Sciences, MICA, or any Mumbai college — and for freshers trying to break into Mumbai's entertainment and corporate event world — Evenza's volunteer community is the most direct entry point. Join the WhatsApp community and start getting real event calls.",
    features: [
      "Access to Bollywood events, fashion weeks, Lollapalooza, NMACC galas",
      "Coverage across Mumbai, Bandra, BKC, Lower Parel, Navi Mumbai, Thane",
      "Open to students from Mumbai University, NMIMS, SP Jain, TISS, and all Mumbai colleges",
      "Paid event work — earn per event, no unpaid volunteering",
      "No registration fee — join the community for free",
      "Real networking with Mumbai's entertainment and corporate event industry",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Mumbai?",
        a: "Mumbai events span film premieres, Lollapalooza India, Kala Ghoda Arts Festival, NMACC events, BKC corporate summits, fashion weeks (Lakme Fashion Week), weddings at Grand Hyatt and ITC Grand Central, brand activations, marathons, and international conferences.",
      },
      {
        q: "Is Evenza available for events in Navi Mumbai and Thane?",
        a: "Yes. Our Mumbai volunteer network covers the full Mumbai Metropolitan Region — Mumbai city, Navi Mumbai, Thane, and key satellite venues like Bombay Exhibition Centre.",
      },
      {
        q: "Can college students in Mumbai work events as freelance volunteers?",
        a: "Yes. The majority of Evenza's Mumbai volunteers are college students and recent graduates. Events typically happen on weekends and evenings, making it compatible with college schedules. You choose which events to apply for.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Maharashtra", path: "/volunteering-maharashtra" },
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
    ],
  },
  {
    path: "/volunteering-bengaluru",
    seoTitle: "Volunteering in Bengaluru | Paid Event Volunteer Jobs Bangalore | Evenza",
    metaDescription: "Looking for volunteering in Bengaluru? Join Evenza's paid event volunteer community. Work at tech summits, startup events, concerts & corporate events. Free to join. Students welcome.",
    keyword: "Volunteering in Bengaluru",
    subtitle: "India's Silicon Valley Has the Events — Evenza Has the Volunteer Community",
    description: "Bengaluru's event calendar reflects its identity — Bengaluru Tech Summit, Nasscom Leadership Forum, Startup India events, Great Backyard Bird Count, Palace Grounds concerts, BIEC trade fairs, and some of South India's most lavish corporate events. But it also has a massive student population hungry for real experience outside the classroom. Evenza places paid volunteers across all these events in Bengaluru. For students at IISc, Christ University, BMS College of Engineering, RV College, PES University, Jain University, Reva University — and for freshers navigating Bengaluru's competitive job market — the Evenza volunteer community gives you actual, paid event credits on your resume. Join free, no registration fee, get notified when Bengaluru events go live.",
    features: [
      "Access to Bengaluru Tech Summit, Nasscom, Palace Grounds concerts, BIEC fairs",
      "Ideal for students at IISc, Christ University, BMS, RV College, PES, Jain University",
      "Paid per event — Bengaluru's real-world event income for students",
      "Builds industry credentials beyond coding — event management, hospitality, coordination",
      "No fee to join — zero registration, zero deposit",
      "WhatsApp community with live Bengaluru event notifications",
    ],
    faqs: [
      {
        q: "What types of events can I volunteer at in Bengaluru?",
        a: "Bengaluru's events include Bengaluru Tech Summit, Nasscom Leadership Forum, startup demo days, BIEC (Bengaluru International Exhibition Centre) trade fairs, Palace Grounds concerts, corporate summits at ITC Gardenia and Leela Palace, film events, marathons, and cultural festivals.",
      },
      {
        q: "Does volunteering with Evenza help with a career in event management in Bengaluru?",
        a: "Yes. Event management is a growing sector in Bengaluru. Working real events as a volunteer builds hands-on experience, professional references, and industry contacts that academic certificates alone don't provide. Many of our Bengaluru volunteers have moved into full-time event and hospitality roles.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Karnataka", path: "/volunteering-karnataka" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
    ],
  },
  {
    path: "/volunteering-hyderabad",
    seoTitle: "Volunteering in Hyderabad | Paid Event Volunteer Jobs | Evenza",
    metaDescription: "Find genuine paid volunteering in Hyderabad. Join Evenza's event volunteer community. Work at HITEX, Hyderabad Literary Fest, pharma summits & IT events. Free to join. Students welcome.",
    keyword: "Volunteering in Hyderabad",
    subtitle: "The City of Pearls Has World-Class Events — And Evenza Has the Volunteer Community",
    description: "Hyderabad is one of India's fastest-growing event cities — HITEX International Trade Exposition, Hyderabad International Convention Centre (HICC), the Hyderabad Literary Festival, IT and pharmaceutical industry summits, film events, and Telangana government events. Beyond corporate events, Hyderabad's cultural scene — from Bonalu celebrations to the HIFF — generates significant event manpower needs. Evenza places paid volunteers across all of Hyderabad's major events. If you're a student at Osmania University, JNTU, GITAM, NALSAR, IIIT Hyderabad, Mahindra University, or any Hyderabad college, or a fresher looking for real-world event exposure — Evenza's volunteer community is the safest, most genuine way to get started. No fees, no scam, real pay for real work.",
    features: [
      "Access to HITEX, HICC, Hyderabad Literary Fest, IT and pharma summits",
      "Open to students from Osmania, JNTU, GITAM, IIIT Hyderabad, Mahindra University",
      "Paid event work in Hyderabad's booming events sector",
      "Both Telugu and English-speaking volunteer opportunities",
      "Zero registration fee — join the community free",
      "Covers Hyderabad, Secunderabad, and HITECH City events",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Hyderabad?",
        a: "Hyderabad event opportunities include HITEX trade fairs, HICC corporate conferences, Hyderabad Literary Festival, IT summits in HITECH City, pharma industry events, Telangana government events, film premieres, marathons, and large-scale cultural celebrations like Bonalu.",
      },
      {
        q: "Can students from Hyderabad's engineering colleges volunteer with Evenza?",
        a: "Yes. Engineering, commerce, arts, and management students are all welcome. Event volunteering doesn't require a specific degree — it requires reliability, communication, and energy. We brief you before every event.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Telangana", path: "/volunteering-india" },
      { label: "Event Manpower Hyderabad", path: "/event-manpower-hyderabad" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
    ],
  },
  {
    path: "/volunteering-chennai",
    seoTitle: "Volunteering in Chennai | Paid Event Volunteer Jobs Tamil Nadu | Evenza",
    metaDescription: "Looking for volunteering in Chennai? Evenza offers paid event volunteer opportunities at Chennai Trade Centre, cultural festivals, Madras Music Season events & corporate summits. Free to join.",
    keyword: "Volunteering in Chennai",
    subtitle: "Chennai's Rich Event Culture Needs Equally Passionate Volunteers",
    description: "Chennai is both a corporate powerhouse and India's cultural capital. The Chennai Trade Centre hosts national trade fairs; the Madras Music Season — one of the world's largest music festivals — runs annually; the Tamil Nadu government hosts major state events; and a growing IT corridor in OMR and Sholinganallur generates constant corporate event demand. For students at Anna University, IIT Madras, SRM Institute, VIT Chennai, Loyola College, Madras University, or any Chennai college, and for freshers exploring event careers, Evenza's paid volunteer community in Chennai is your starting point. We place trained, briefed volunteers at real events. You gain experience, earn income, and build a network in Tamil Nadu's events industry — all without paying a single rupee to register.",
    features: [
      "Access to Chennai Trade Centre events, Madras Music Season, cultural festivals",
      "IT sector and corporate events in OMR, Tidel Park, and Chennai city venues",
      "Open to students from Anna University, IIT Madras, SRM, VIT Chennai, Loyola",
      "Tamil and English-speaking volunteer opportunities",
      "Paid event work — not free volunteering",
      "Zero registration fee — genuinely free to join",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Chennai?",
        a: "Chennai event opportunities include trade fairs at Chennai Trade Centre, Madras Music Season events, IT sector corporate events in OMR and Sholinganallur, Tamil Nadu government functions, product launches, marathons, film premieres, and private corporate conferences at ITC Grand Chola and Taj Coromandel.",
      },
      {
        q: "Is Evenza available for events outside central Chennai?",
        a: "Yes. We cover events across Chennai including OMR, Sholinganallur, Guindy, and the overall Chennai metropolitan area. For events in other Tamil Nadu cities like Coimbatore or Madurai, contact us directly.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Tamil Nadu", path: "/volunteering-tamil-nadu" },
      { label: "Event Manpower Chennai", path: "/event-manpower-chennai" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
    ],
  },
  {
    path: "/volunteering-kolkata",
    seoTitle: "Volunteering in Kolkata | Paid Event Volunteer Jobs West Bengal | Evenza",
    metaDescription: "Find paid volunteering in Kolkata. Join Evenza's event volunteer community. Work at Durga Puja events, Kolkata Book Fair, Milan Mela trade fair & corporate events. Free to join.",
    keyword: "Volunteering in Kolkata",
    subtitle: "The City of Joy's Events Are World-Class — Volunteer at the Very Best",
    description: "Kolkata is India's cultural capital in the truest sense. Durga Puja in Kolkata is a UNESCO-recognised cultural event attracting millions — and the event management behind it is enormous. The Kolkata Book Fair at Milan Mela is Asia's largest book fair. The Kolkata International Film Festival, trade fairs at ICCR, corporate events, and a growing startup ecosystem make Kolkata one of the most interesting event cities in India. Evenza places paid event volunteers across Kolkata's diverse event landscape. For students at Jadavpur University, Calcutta University, Presidency University, St. Xavier's, IIEST Shibpur, and West Bengal's colleges — and for freshers — Evenza's volunteer community is genuinely the best entry point into Bengal's events industry. No fees, no scam, real work at real events.",
    features: [
      "Access to Durga Puja, Kolkata Book Fair, KIFF, Milan Mela trade fairs",
      "Open to students from Jadavpur University, Calcutta University, Presidency, IIEST",
      "Paid event volunteering — earn for every event you work",
      "Bengali and English-speaking volunteer opportunities",
      "Zero registration fee — join the community free",
      "WhatsApp community with Kolkata event alerts",
    ],
    faqs: [
      {
        q: "Can I volunteer at Durga Puja events in Kolkata?",
        a: "Yes. The large-scale Durga Puja pandals and associated cultural events, competitions, and corporate-sponsored exhibitions require significant event support. Evenza deploys volunteers for these and associated events during the Puja season.",
      },
      {
        q: "What other events are there for volunteers in Kolkata?",
        a: "Beyond Durga Puja — Kolkata Book Fair (Asia's largest), Kolkata International Film Festival, Victoria Memorial cultural events, corporate events in Rajarhat New Town, trade fairs at Milan Mela, NASSCOM events, and private corporate conferences at ITC Royal Bengal and Taj Bengal.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in West Bengal", path: "/volunteering-west-bengal" },
      { label: "Event Manpower Kolkata", path: "/event-manpower-kolkata" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
    ],
  },
  {
    path: "/volunteering-pune",
    seoTitle: "Volunteering in Pune | Paid Event Volunteer Jobs Pune | Evenza",
    metaDescription: "Find paid volunteering opportunities in Pune. Join Evenza's event volunteer community. Work at Pune International Film Festival, corporate events, tech summits & more. Free to join.",
    keyword: "Volunteering in Pune",
    subtitle: "Pune's Growing Event Scene Needs Fresh Volunteer Energy — Join Evenza",
    description: "Pune is one of India's most dynamic cities — a blend of a booming IT corridor, a centuries-old cultural identity, and one of India's largest student populations. The Pune International Film Festival, Sawai Gandharva Bhimsen Mahotsav (classical music), corporate events in Hinjewadi and Baner, MCCIA trade fairs, fashion shows, and a thriving wedding industry make Pune a great city for event volunteers. Evenza places paid volunteers at Pune events across all these categories. For students at Savitribai Phule Pune University, Symbiosis, MIT, VIT Pune, Fergusson College, SCMHRD, and other Pune colleges — and for freshers from the city's IT sector — Evenza is the only platform that offers genuine paid event volunteering without any registration fee.",
    features: [
      "Access to Pune International Film Festival, Sawai Gandharva, corporate events",
      "IT corridor events in Hinjewadi, Baner, Kharadi covered",
      "Open to students from Pune University, Symbiosis, MIT, VIT, Fergusson",
      "Paid event volunteering — earn per event",
      "Zero registration fee — free to join",
      "WhatsApp community with live Pune event notifications",
    ],
    faqs: [
      {
        q: "What events are available for volunteers in Pune?",
        a: "Pune event volunteer opportunities include the Pune International Film Festival, Sawai Gandharva Bhimsen Mahotsav, MCCIA trade fairs, corporate events in Hinjewadi and Baner tech parks, Pune marathons, weddings, product launches, cultural events, and NGO events.",
      },
      {
        q: "Does Evenza cover events in Pimpri-Chinchwad and PCMC area?",
        a: "Yes. Our Pune volunteer network covers Pune city, Pimpri-Chinchwad (PCMC), Hinjewadi, Kharadi, Viman Nagar, and all major Pune Metropolitan Region venues.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Maharashtra", path: "/volunteering-maharashtra" },
      { label: "Event Manpower Pune", path: "/event-manpower-pune" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
    ],
  },
  {
    path: "/volunteering-ahmedabad",
    seoTitle: "Volunteering in Ahmedabad | Paid Event Volunteer Jobs Gujarat | Evenza",
    metaDescription: "Looking for volunteering in Ahmedabad? Join Evenza's paid event volunteer community. Work at Vibrant Gujarat, Kite Festival, trade fairs & corporate events. Free to join. No fee.",
    keyword: "Volunteering in Ahmedabad",
    subtitle: "Gujarat's Commercial Capital Has the Events — Evenza Has the Volunteer Network",
    description: "Ahmedabad is one of India's fastest-growing metropolitan cities and a major event hub. The Vibrant Gujarat Global Summit draws international delegations; the International Kite Festival on Uttarayan transforms the city; Heritage Festival events celebrate the city's UNESCO World Heritage City status; trade fairs at Helipad Exhibition Ground and Gujarat University Convention Centre run year-round. Evenza places paid volunteers at corporate, cultural, and trade events across Ahmedabad and the greater Gujarat region. For students at IIM Ahmedabad, Gujarat University, PDPU, CEPT, MICA, Nirma University — and for freshers — Evenza's volunteer community is the most reliable and safest entry point into Gujarat's event industry. Join free, zero registration fee, get paid per event.",
    features: [
      "Access to Vibrant Gujarat, Kite Festival, Heritage Walk events, trade fairs",
      "Open to students from IIM Ahmedabad, Gujarat University, PDPU, CEPT, Nirma",
      "Gujarati and Hindi-speaking volunteer opportunities",
      "Paid event volunteering — real income for real work",
      "Zero registration fee — join the community free",
      "WhatsApp community with live Ahmedabad and Gujarat event alerts",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Ahmedabad?",
        a: "Ahmedabad event opportunities include Vibrant Gujarat Global Summit, International Kite Festival, Heritage Festival events, trade fairs at Helipad Exhibition Ground, corporate conferences, MSME events, Navratri celebrations at major venues, weddings, and product launches.",
      },
      {
        q: "Does Evenza cover events in Gandhinagar and other Gujarat cities?",
        a: "Yes. Our Ahmedabad network covers Ahmedabad city, Gandhinagar (seat of Vibrant Gujarat events), and can extend to Surat, Vadodara, and Rajkot for specific events. Contact us if you're looking for opportunities in other Gujarat cities.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Gujarat", path: "/volunteering-gujarat" },
      { label: "Event Manpower Ahmedabad", path: "/event-manpower-ahmedabad" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
    ],
  },
  {
    path: "/volunteering-chandigarh",
    seoTitle: "Volunteering in Chandigarh | Paid Event Volunteer Jobs Punjab Haryana | Evenza",
    metaDescription: "Find paid volunteering in Chandigarh. Evenza connects freshers and students with real event volunteer jobs across Chandigarh, Mohali and Panchkula. Free to join. No registration fee.",
    keyword: "Volunteering in Chandigarh",
    subtitle: "India's Most Planned City — Evenza's Most Organised Volunteer Community",
    description: "Chandigarh — India's planned city and shared capital of Punjab and Haryana — hosts the Rose Festival, Chandigarh Carnival, major government functions, corporate events for North India's agricultural and industrial sectors, healthcare industry summits, and cultural events celebrating the Punjabi and Haryanvi heritage. For volunteers, Chandigarh's geographic centrality in North India is a major advantage — Mohali and Panchkula are minutes away, and events in Punjab (Ludhiana, Amritsar) and Haryana (Ambala, Kurukshetra) are accessible. Evenza places paid volunteers across all of this. Students at Panjab University, UIET, PEC, GGDSD, Chitkara University, and Chandigarh University — and freshers from the tri-city area — can join the Evenza Volunteers WhatsApp community and access real, paid event work in North India.",
    features: [
      "Access to Rose Festival, Chandigarh Carnival, government events, trade fairs",
      "Full tri-city coverage — Chandigarh, Mohali, Panchkula",
      "Open to students from Panjab University, PEC, Chitkara, Chandigarh University",
      "Punjabi and Hindi-speaking volunteer opportunities",
      "Paid event work — earn for each event",
      "Zero registration fee — genuinely free to join",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Chandigarh?",
        a: "Chandigarh event opportunities include the Rose Festival at Zakir Hussain Rose Garden, Chandigarh Carnival, Punjab and Haryana government events, healthcare summits, corporate events, product launches, agricultural sector conferences, and trade fairs.",
      },
      {
        q: "Does Evenza cover volunteer opportunities in Mohali and Panchkula too?",
        a: "Yes. Our Chandigarh network covers the entire tri-city — Chandigarh UT, Mohali (Punjab), and Panchkula (Haryana). For Punjab events in Ludhiana or Amritsar, check our Punjab page.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Punjab", path: "/volunteering-punjab" },
      { label: "Event Manpower Chandigarh", path: "/event-manpower-chandigarh" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
    ],
  },
  {
    path: "/volunteering-lucknow",
    seoTitle: "Volunteering in Lucknow | Paid Event Volunteer Jobs UP | Evenza",
    metaDescription: "Find genuine paid volunteering in Lucknow. Join Evenza's event volunteer community. Work at Lucknow Mahotsav, corporate events, cultural gatherings & government summits. Free to join.",
    keyword: "Volunteering in Lucknow",
    subtitle: "Lucknow's Nawabi Events Need Nawabi-Standard Volunteers — Join Evenza",
    description: "Lucknow — the City of Nawabs — is the cultural and administrative capital of Uttar Pradesh and hosts one of North India's richest event calendars. The Lucknow Mahotsav, Awadhi cultural festivals, UP government summits at Indira Gandhi Pratishthan, corporate events, and the city's legendary wedding culture generate constant demand for event volunteers. As Uttar Pradesh's premier city for MICE and hospitality events, Lucknow is also a gateway to volunteering opportunities across UP. Evenza places paid volunteers across all these events. For students at Lucknow University, AKTU, BBAU, IIIT Lucknow, SGPGI, and Dr. Ram Manohar Lohia National Law University — and for freshers in Lucknow — joining the Evenza volunteer community is your genuine, zero-fee path to paid event experience.",
    features: [
      "Access to Lucknow Mahotsav, Awadhi cultural events, UP government summits",
      "Corporate events at Taj Mahal Lucknow and Indira Gandhi Pratishthan",
      "Open to students from Lucknow University, AKTU, BBAU, IIIT Lucknow",
      "Hindi-speaking, culturally attuned volunteer opportunities",
      "Paid per event — real income in Lucknow's growing event sector",
      "Zero registration fee — join Evenza Volunteers community free",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Lucknow?",
        a: "Lucknow event opportunities include the Lucknow Mahotsav at Gomti Riverfront, UP government events at Indira Gandhi Pratishthan, corporate conferences, weddings at Taj Hotel, agricultural and MSME events, cultural programmes, and NGO events.",
      },
      {
        q: "Does Evenza cover other UP cities beyond Lucknow?",
        a: "Yes. Through our Lucknow base we can access events in Kanpur, Agra, Prayagraj, Varanasi, Meerut, and other UP cities. Check our Uttar Pradesh state page for the complete coverage.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Uttar Pradesh", path: "/volunteering-uttar-pradesh" },
      { label: "Event Manpower Lucknow", path: "/event-manpower-lucknow" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
    ],
  },
  {
    path: "/volunteering-goa",
    seoTitle: "Volunteering in Goa | Paid Event Volunteer Jobs at Festivals & Events | Evenza",
    metaDescription: "Find genuine paid volunteering in Goa. Evenza connects volunteers with real event work at music festivals, beach events, IFFI, corporate retreats & more in Goa. No registration fee.",
    keyword: "Volunteering in Goa",
    subtitle: "Goa's Festivals & Corporate Events — Join India's Most Exciting Volunteer Community",
    description: "Goa has one of India's most unique event landscapes. The International Film Festival of India (IFFI) at Panaji — India's largest film festival — runs annually; Sunburn Festival; NH7 Weekender; corporate retreats at five-star beach resorts; incentive travel events; beach weddings; and the Goa Carnival create a year-round demand for trained event volunteers. For students at Goa University, IIT Goa, and Goa's hospitality and arts colleges — and for freelancers based in or visiting Goa — Evenza's volunteer community gives access to India's most glamorous event experiences. You earn per event, you build a unique portfolio, and you get genuine industry experience that generic internships simply cannot offer. Join free, no registration fee.",
    features: [
      "Access to IFFI, Sunburn Festival, beach corporate retreats, Goa Carnival events",
      "Unique experience in entertainment, hospitality and experiential event formats",
      "Open to students from Goa University, IIT Goa and local hospitality colleges",
      "Ideal for freelancers spending time in Goa",
      "Paid per event — earn from some of India's most premium event experiences",
      "Zero registration fee — join the Evenza Volunteers community free",
    ],
    faqs: [
      {
        q: "Can I volunteer at music festivals in Goa like Sunburn?",
        a: "Yes. Evenza places volunteers at music festivals, film festival events, beach corporate events, and entertainment events across Goa. These are paid roles — not unpaid 'volunteer' placements that give you a wristband in exchange for days of free work.",
      },
      {
        q: "Can I volunteer in Goa even if I'm not a Goa resident?",
        a: "Yes. Many volunteers travel to Goa specifically for events. If you're in Goa during an event period and want to work, you can join the WhatsApp community and apply for available roles. Accommodation logistics are your own responsibility for out-of-state events.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Manpower Goa", path: "/event-manpower-goa" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
      { label: "Volunteering in India", path: "/volunteering-india" },
    ],
  },

  // ============================================================
  // VOLUNTEER STATE PAGES — covers entire states, all cities
  // ============================================================
  {
    path: "/volunteering-india",
    seoTitle: "Volunteering in India | Paid Event Volunteer Jobs Across India | Evenza",
    metaDescription: "Find genuine paid volunteering opportunities across India. Evenza's event volunteer community covers Jaipur, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune & 20+ more cities. Free to join.",
    keyword: "Volunteering in India",
    subtitle: "India's Only Pan-India Paid Event Volunteer Community — 25+ Cities Covered",
    description: "India hosts over one million events every year — from destination weddings in Rajasthan's palaces, to tech summits in Bengaluru, to Durga Puja in Kolkata, to Lollapalooza in Mumbai. The demand for trained, reliable, and professional event volunteers across India is enormous — and yet most people searching 'volunteering in India' find only free NGO work or charity drives. Evenza is India's only genuine platform that connects freshers, students, and freelancers with paid event volunteer work across 25+ cities and every major state. We are a registered company (Shree Ji Company Pvt. Ltd.) based in Jaipur. Our WhatsApp volunteer community gets real event updates from across India. Join free, no registration fee, no scam — just real events and real pay across the country.",
    features: [
      "25+ cities covered — Jaipur, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Goa and more",
      "All major states covered — Rajasthan, UP, Maharashtra, Karnataka, Tamil Nadu, West Bengal, Gujarat, Punjab and more",
      "Paid event volunteering — the only national platform that pays its volunteers",
      "Open to students, freshers, and freelancers from any Indian city or college",
      "Zero registration fee — the Evenza Volunteers community is free to join",
      "WhatsApp community with pan-India event notifications by region",
    ],
    faqs: [
      {
        q: "Does Evenza provide volunteering opportunities across all of India?",
        a: "Yes. Our volunteer community is pan-India. We have the highest volume of events in Jaipur, Delhi, Mumbai, Bengaluru, and other metros, with growing activity across all states. When a new event comes up in your city, we post it in the community and you can apply.",
      },
      {
        q: "I live in a smaller city — can I still join the Evenza volunteer community?",
        a: "Yes. While our primary event volume is in major metros and Tier-1 cities, events happen everywhere. Join the community, tell us your city, and we'll notify you when something comes up near you. As Evenza grows, our city coverage grows with it.",
      },
      {
        q: "Is Evenza a registered company or just a social media group?",
        a: "Evenza is the brand of Shree Ji Company Pvt. Ltd., a registered private limited company based in Jaipur, Rajasthan. We operate professionally, provide GST-compliant invoices to clients, and maintain all legal compliance. Our volunteer community is part of our genuine business operation — not a social media group or scam.",
      },
      {
        q: "How is Evenza different from other volunteering platforms in India?",
        a: "Most volunteering platforms in India place you in free NGO or charity work. Evenza is the only platform specifically for paid event volunteering — where you earn per event, work professionally managed events, build a real portfolio, and access a genuine events industry network across India.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Jaipur", path: "/volunteering-jaipur" },
      { label: "Volunteering in Delhi", path: "/volunteering-delhi" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
    ],
  },
  {
    path: "/volunteering-rajasthan",
    seoTitle: "Volunteering in Rajasthan | Paid Event Volunteer Jobs Rajasthan | Evenza",
    metaDescription: "Find paid volunteering in Rajasthan. Evenza covers Jaipur, Udaipur, Jodhpur, Ajmer, Kota, Pushkar & all of Rajasthan. Freshers and students welcome. Zero registration fee.",
    keyword: "Volunteering in Rajasthan",
    subtitle: "Rajasthan's Heritage Events Run on Passionate Volunteers — Be One of Them",
    description: "Rajasthan is India's event destination — from the Jaipur Literature Festival and Pink City Marathon in Jaipur, to the Pushkar Camel Fair, to heritage weddings at Umaid Bhawan in Jodhpur and Taj Lake Palace in Udaipur, to the Desert Festival in Jaisalmer and state government MICE events across the state. No other Indian state packs as much event variety into its calendar. Evenza is headquartered in Jaipur and has the deepest volunteer network in Rajasthan. We place paid volunteers across all of Rajasthan's 10+ event cities — Jaipur, Udaipur, Jodhpur, Ajmer, Pushkar, Kota, Bikaner, Alwar, Sikar, Jhunjhunu, and beyond. Students and freshers from any Rajasthan college — BITS Pilani, Poornima, Rajasthan University, MDS University Ajmer, MLSU Udaipur — join the volunteer community free and get notified when events open near you.",
    features: [
      "Rajasthan's widest volunteer network — 10+ cities covered statewide",
      "Access to JLF, Pink City Marathon, Pushkar Fair, Desert Festival, heritage weddings",
      "Open to students from all Rajasthan colleges — BITS Pilani, Poornima, Rajasthan University, MLSU Udaipur, MDS Ajmer",
      "Paid event volunteering — the only platform that pays Rajasthan volunteers",
      "Evenza is Jaipur-based — local knowledge and fast deployment across Rajasthan",
      "Zero registration fee — join the community free",
    ],
    faqs: [
      {
        q: "Which cities in Rajasthan does Evenza cover for volunteers?",
        a: "We cover Jaipur, Udaipur, Jodhpur, Ajmer, Pushkar, Kota, Bikaner, Alwar, Sikar, Jhunjhunu, Nagaur, Churu, and smaller towns with event activity. Our base in Jaipur means fast deployment across the state.",
      },
      {
        q: "Are there volunteering opportunities in smaller Rajasthan towns and heritage venues?",
        a: "Yes. Rajasthan's heritage venues — Mehrangarh Fort, Umaid Bhawan, Rambagh Palace, Samode Haveli, RAAS Jodhpur — regularly host events that require trained volunteers. These are some of the most premium event experiences available for volunteers in India.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Jaipur", path: "/volunteering-jaipur" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
    ],
  },
  {
    path: "/volunteering-uttar-pradesh",
    seoTitle: "Volunteering in Uttar Pradesh | Paid Event Volunteer Jobs UP | Evenza",
    metaDescription: "Find paid volunteering in Uttar Pradesh. Evenza covers Lucknow, Agra, Varanasi, Prayagraj, Kanpur, Meerut & all of UP. Students and freshers welcome. Zero registration fee.",
    keyword: "Volunteering in Uttar Pradesh",
    subtitle: "UP's Massive Event Calendar — From Mahakumbh to Corporate Summits — Needs You",
    description: "Uttar Pradesh is India's most populous state and has one of the most diverse event calendars in the country. The Mahakumbh at Prayagraj is the world's largest human gathering — requiring thousands of event volunteers and support personnel. Lucknow Mahotsav, Agra's tourism events near the Taj Mahal, Varanasi's Ganga Aarti and cultural events, Mathura-Vrindavan festivals, corporate events in Noida and Greater Noida, government summits in Lucknow — UP hosts events at every scale, in every format. Evenza places paid volunteers across all major UP cities. For students at BHU (Banaras Hindu University), AMU (Aligarh Muslim University), AKTU, Lucknow University, BBAU, IIIT Allahabad, IIIT Lucknow, or any UP college — and for freshers across the state — Evenza's volunteer community is your zero-fee, genuine entry point.",
    features: [
      "Pan-UP coverage — Lucknow, Agra, Varanasi, Prayagraj, Kanpur, Meerut, Noida, Mathura",
      "Access to Mahakumbh, Lucknow Mahotsav, Taj Mahal tourism events, Ganga Aarti events",
      "Open to students from BHU, AMU, AKTU, Lucknow University, BBAU, IIIT Allahabad",
      "Paid event volunteering — earn per event across UP",
      "Hindi-speaking, culturally attuned volunteer opportunities throughout UP",
      "Zero registration fee — Evenza never charges to join",
    ],
    faqs: [
      {
        q: "Can I volunteer at Mahakumbh events in Prayagraj?",
        a: "Yes. Evenza deploys volunteers for events and exhibitions within and around the Mahakumbh Mela at Prayagraj. These are large-scale, high-profile deployments that provide exceptional experience for volunteers.",
      },
      {
        q: "What volunteering opportunities exist in Agra and Varanasi?",
        a: "Agra's event scene is heavily tourism-focused — cultural events near Taj Mahal, corporate retreats at Oberoi Amarvilas, and travel industry conferences. Varanasi hosts Ganga Aarti-associated events, cultural programmes, and government events. Both cities are covered by our UP volunteer network.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Lucknow", path: "/volunteering-lucknow" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Manpower Lucknow", path: "/event-manpower-lucknow" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
    ],
  },
  {
    path: "/volunteering-maharashtra",
    seoTitle: "Volunteering in Maharashtra | Paid Event Volunteer Jobs Mumbai Pune | Evenza",
    metaDescription: "Find paid volunteering in Maharashtra. Evenza covers Mumbai, Pune, Nashik, Nagpur, Aurangabad & all of Maharashtra. Freshers and students welcome. Zero registration fee.",
    keyword: "Volunteering in Maharashtra",
    subtitle: "Maharashtra's Events Are India's Biggest — Evenza Has the Volunteer Network",
    description: "Maharashtra is India's event powerhouse. Mumbai alone hosts film premieres, Lollapalooza, fashion weeks, and corporate summits. Pune's IT corridor and cultural events, Nashik's wine festivals and Kumbh Mela, Nagpur's political and corporate events, and Aurangabad's tourism-linked events make Maharashtra India's most diverse event state. Evenza's Maharashtra volunteer network spans all major cities — placing paid volunteers at events across the state. Whether you're a student at Mumbai University, Savitribai Phule Pune University, Nagpur University, RTMNU, or any Maharashtra college, or a fresher looking to enter the events industry in India's most commercially vibrant state — Evenza is the platform that gives you genuine, paid access. Zero registration fee, real events, real income.",
    features: [
      "Pan-Maharashtra coverage — Mumbai, Pune, Nashik, Nagpur, Aurangabad, Thane, Navi Mumbai",
      "Access to Lollapalooza, fashion weeks, film events, Nashik wine festivals, Kumbh Mela events",
      "Open to students from Mumbai University, Pune University, Nagpur University, and all Maharashtra colleges",
      "Largest state volunteer network — most event volume in India",
      "Paid event volunteering — earn across Maharashtra",
      "Zero registration fee — join the community free",
    ],
    faqs: [
      {
        q: "Does Evenza cover volunteer opportunities in Nashik and Nagpur?",
        a: "Yes. Our Maharashtra network covers Nashik (known for Trimbakeshwar Kumbh Mela events, wine festivals), Nagpur (political summits, MIHAN-related events), Aurangabad (Ajanta-Ellora Tourism Festival, AURIC events), and all major Maharashtra cities.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Mumbai", path: "/volunteering-mumbai" },
      { label: "Volunteering in Pune", path: "/volunteering-pune" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
    ],
  },
  {
    path: "/volunteering-karnataka",
    seoTitle: "Volunteering in Karnataka | Paid Event Volunteer Jobs Bengaluru Mysuru | Evenza",
    metaDescription: "Find paid volunteering in Karnataka. Evenza covers Bengaluru, Mysuru, Mangaluru, Hubli & all of Karnataka. Freshers and students welcome. Zero registration fee. No scam.",
    keyword: "Volunteering in Karnataka",
    subtitle: "Karnataka's Tech, Heritage and Cultural Events — Join Evenza's Volunteer Community",
    description: "Karnataka blends India's most advanced tech ecosystem with some of its most celebrated heritage and culture. Bengaluru is the tech event hub; Mysuru's Dasara festival is one of India's grandest royal celebrations; Mangaluru has a growing corporate and cultural event scene; and Karnataka's diverse landscape hosts sporting events, agricultural fairs, and government summits. Evenza's Karnataka volunteer network covers Bengaluru's corporate and startup events, Mysuru's Dasara and tourism events, and growing activity in Mangaluru, Hubli-Dharwad, and Belagavi. Students from IISc, PESIT, VTU colleges, Mysuru University, Mangalore University — and freshers from Karnataka — can join the Evenza volunteer community free of charge and access paid event work across the state.",
    features: [
      "Pan-Karnataka coverage — Bengaluru, Mysuru, Mangaluru, Hubli, Belagavi",
      "Access to Bengaluru Tech Summit, Mysuru Dasara, Hampi festivals, BIEC trade fairs",
      "Open to students from IISc, VTU colleges, Mysuru University, Mangalore University",
      "Kannada and English-speaking volunteer opportunities",
      "Paid event volunteering across Karnataka",
      "Zero registration fee — join the community free",
    ],
    faqs: [
      {
        q: "Can I volunteer at Mysuru Dasara events?",
        a: "Yes. Mysuru Dasara is one of India's grandest events and requires significant volunteer support for procession management, tourism guidance, event coordination, and hospitality at associated corporate events. Our Karnataka volunteers can access these opportunities.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Bengaluru", path: "/volunteering-bengaluru" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
      { label: "Volunteering in India", path: "/volunteering-india" },
    ],
  },
  {
    path: "/volunteering-tamil-nadu",
    seoTitle: "Volunteering in Tamil Nadu | Paid Event Volunteer Jobs Chennai Coimbatore | Evenza",
    metaDescription: "Find paid volunteering in Tamil Nadu. Evenza covers Chennai, Coimbatore, Madurai, Salem, Trichy & all of Tamil Nadu. Freshers and students welcome. Zero registration fee.",
    keyword: "Volunteering in Tamil Nadu",
    subtitle: "Tamil Nadu's Rich Event Calendar — Classical, Corporate, and Cultural — Join Evenza",
    description: "Tamil Nadu has one of India's richest and most varied event landscapes. Chennai hosts Madras Music Season — one of the world's largest classical music festivals — alongside Chennai Trade Centre expos and growing IT sector corporate events. Coimbatore's textile and manufacturing sector hosts industrial summits; Madurai's temple culture and tourism generates cultural events; Trichy, Salem, and Tirunelveli have their own event ecosystems. Evenza places paid volunteers across Tamil Nadu's diverse events — from classical cultural programmes to modern corporate conferences. Students from Anna University, IIT Madras, SRM, VIT, SASTRA, and PSG Tech — and freshers across the state — can join the Evenza volunteer community free and access genuine paid event work without any registration fee or advance payment.",
    features: [
      "Pan-Tamil Nadu coverage — Chennai, Coimbatore, Madurai, Salem, Trichy, Tirunelveli",
      "Access to Madras Music Season, Chennai Trade Centre events, textile industry summits",
      "Open to students from Anna University, IIT Madras, SRM, VIT, PSG Tech, SASTRA",
      "Tamil and English-speaking volunteer opportunities",
      "Paid event volunteering across Tamil Nadu's corporate and cultural events",
      "Zero registration fee — join the community free",
    ],
    faqs: [
      {
        q: "Does Evenza cover events in Coimbatore and Madurai beyond Chennai?",
        a: "Yes. Our Tamil Nadu network covers Chennai, Coimbatore (textile and manufacturing events), Madurai (cultural and temple tourism events), Salem, Trichy, and Tirunelveli. Events in other TN cities can be accommodated with advance notice.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Chennai", path: "/volunteering-chennai" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Manpower Chennai", path: "/event-manpower-chennai" },
      { label: "Volunteering in India", path: "/volunteering-india" },
    ],
  },
  {
    path: "/volunteering-west-bengal",
    seoTitle: "Volunteering in West Bengal | Paid Event Volunteer Jobs Kolkata | Evenza",
    metaDescription: "Find paid volunteering in West Bengal. Evenza covers Kolkata, Howrah, Siliguri & all of West Bengal. Work at Durga Puja events, book fair, film festival & corporate events. Free to join.",
    keyword: "Volunteering in West Bengal",
    subtitle: "West Bengal's Cultural Events Are Legendary — Be Part of the Team Behind Them",
    description: "West Bengal's events are in a class of their own. Durga Puja is a UNESCO Cultural Heritage event attracting millions — the largest street festival in the world. The Kolkata Book Fair is Asia's biggest book fair. KIFF (Kolkata International Film Festival) is India's most prestigious film festival outside Goa. Add trade fairs at Milan Mela, corporate events in Rajarhat New Town's business district, Siliguri's tourism events, and Shantiniketan's cultural celebrations — and you have one of India's richest event calendars. Evenza places paid volunteers at West Bengal's events, from Kolkata city to the state's growing Tier-2 cities. Students from Jadavpur University, Calcutta University, Presidency, IIEST, Scottish Church, or any West Bengal college — and freshers — join the Evenza Volunteers community free and access paid event work across the state.",
    features: [
      "Access to Durga Puja, Kolkata Book Fair, KIFF, Milan Mela trade fairs",
      "Coverage across Kolkata, Howrah, Rajarhat, Siliguri, and growing cities",
      "Open to students from Jadavpur University, Calcutta University, Presidency, IIEST",
      "Bengali and English-speaking volunteer opportunities",
      "Paid event volunteering — earn across West Bengal's event calendar",
      "Zero registration fee — join the community free",
    ],
    faqs: [
      {
        q: "Does Evenza cover events in Siliguri and North Bengal?",
        a: "Yes. Events in Siliguri, Darjeeling, and North Bengal are covered. The tea industry, tourism sector, and government events in North Bengal create event opportunities outside Kolkata.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Kolkata", path: "/volunteering-kolkata" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Manpower Kolkata", path: "/event-manpower-kolkata" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
    ],
  },
  {
    path: "/volunteering-gujarat",
    seoTitle: "Volunteering in Gujarat | Paid Event Volunteer Jobs Ahmedabad Surat Vadodara | Evenza",
    metaDescription: "Find paid volunteering in Gujarat. Evenza covers Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar & all of Gujarat. Students and freshers welcome. Zero registration fee.",
    keyword: "Volunteering in Gujarat",
    subtitle: "Gujarat's Trade, Culture and Business Events — Evenza's Volunteer Community Covers It All",
    description: "Gujarat is one of India's most commercially vibrant states with an event calendar that reflects its prosperity. Vibrant Gujarat Global Summit in Gandhinagar draws global leaders. The International Kite Festival on Uttarayan transforms Ahmedabad. Surat's diamond industry hosts exclusive trade events; Vadodara's Navratri is one of India's grandest cultural festivals; Rajkot's growing IT and manufacturing sector generates corporate events. Evenza places paid volunteers across all of Gujarat's major events — Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Jamnagar, and beyond. Students from IIM Ahmedabad, Gujarat University, PDPU, CEPT, MICA, Nirma University, Veer Narmad South Gujarat University (Surat), and all Gujarat colleges — and freshers — can join the Evenza volunteer community free and earn from Gujarat's busy event sector.",
    features: [
      "Pan-Gujarat coverage — Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Jamnagar",
      "Access to Vibrant Gujarat, International Kite Festival, Navratri events, diamond trade events",
      "Open to students from IIM Ahmedabad, PDPU, Nirma, Veer Narmad South Gujarat University",
      "Gujarati and Hindi-speaking volunteer opportunities",
      "Paid event volunteering across Gujarat's commercial and cultural events",
      "Zero registration fee — join free",
    ],
    faqs: [
      {
        q: "Does Evenza cover volunteer opportunities in Surat, Vadodara, and Rajkot?",
        a: "Yes. Our Gujarat network covers Surat (diamond and textile trade events), Vadodara (Navratri, Baroda Museum events, corporate), Rajkot (manufacturing and government events), Gandhinagar (Vibrant Gujarat, government events), Jamnagar, and all Gujarat cities.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Ahmedabad", path: "/volunteering-ahmedabad" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Manpower Ahmedabad", path: "/event-manpower-ahmedabad" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
    ],
  },
  {
    path: "/volunteering-punjab",
    seoTitle: "Volunteering in Punjab | Paid Event Volunteer Jobs Ludhiana Amritsar | Evenza",
    metaDescription: "Find paid volunteering in Punjab. Evenza covers Ludhiana, Amritsar, Jalandhar, Mohali, Patiala & all of Punjab. Freshers and students welcome. Zero registration fee.",
    keyword: "Volunteering in Punjab",
    subtitle: "Punjab's Events Reflect Its Energy — Join Evenza's Punjab Volunteer Community",
    description: "Punjab is one of India's most vibrant states — culturally rich, economically thriving, and proud of its traditions. Ludhiana's hosiery and manufacturing trade events, Amritsar's Golden Temple tourism events and tourism summits, Jalandhar's sports goods industry trade fairs, Mohali's IT sector corporate events, Patiala's government events and cultural festivals, and Punjab's legendary wedding culture — create a robust event calendar across the state. Evenza places paid volunteers at events across Punjab. Students from Panjab University, PEC Chandigarh, LPU (Lovely Professional University), Chitkara University, GNDU, GGSIP and all Punjab colleges — and freshers — join the Evenza volunteer community free and access paid event work in Punjab's growing events sector. The Chandigarh tri-city (Mohali + Panchkula) is fully covered too.",
    features: [
      "Pan-Punjab coverage — Ludhiana, Amritsar, Jalandhar, Mohali, Patiala, Bathinda",
      "Access to trade fairs, tourism events, cultural festivals, corporate events, weddings",
      "Open to students from Panjab University, LPU, Chitkara, GNDU, PEC",
      "Punjabi and Hindi-speaking volunteer opportunities",
      "Paid event volunteering in Punjab's growing events sector",
      "Zero registration fee — join free",
    ],
    faqs: [
      {
        q: "What events can I volunteer at in Punjab?",
        a: "Punjab event opportunities include Ludhiana trade fairs, Amritsar tourism and government events, Jalandhar sports goods industry events, Mohali IT sector corporate events, Patiala cultural festivals, state government summits, wedding events, and agricultural fairs.",
      },
    ],
    relatedPages: [
      { label: "Volunteering in Chandigarh", path: "/volunteering-chandigarh" },
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Manpower Chandigarh", path: "/event-manpower-chandigarh" },
      { label: "Volunteering in India", path: "/volunteering-india" },
    ],
  },

  // ============================================================
  // STUDENT & FRESHER SPECIFIC PAGES
  // Targets people searching by their situation, not just by city
  // ============================================================
  {
    path: "/event-jobs-students",
    seoTitle: "Event Jobs for Students in India | Part-Time Event Work | Evenza",
    metaDescription: "Looking for event jobs for students? Evenza offers genuine paid event volunteer work for college students across India. Earn part-time, gain real experience, build your resume. No registration fee.",
    keyword: "Event Jobs for Students",
    subtitle: "Real Event Jobs That Fit Around College — Not After You Graduate",
    description: "Most event jobs in India require 2–3 years of experience before you get in the door. Evenza breaks that cycle. We place college students directly into real, paid event work — not unpaid internships, not free volunteering, not 'certificate courses.' If you're a student in India looking for genuine part-time income from events, Evenza is the platform built specifically for you. You join the Evenza Volunteers WhatsApp community, receive notifications when events come up in your city, apply for roles that interest you, get briefed before the event, show up and work, and get paid after. No complex process, no interviews, no experience required for your first event. The experience you build working real events — weddings, corporate summits, trade fairs, concerts, marathons — is worth more on a resume than any college certificate.",
    features: [
      "Genuine part-time event income — paid per event, not monthly fixed commitment",
      "Zero experience required for first event — we brief every volunteer before each event",
      "Build a real event industry resume — weddings, corporate, concerts, expos",
      "Flexible scheduling — events mostly on weekends, works around any college timetable",
      "Network with event professionals, organizers, and fellow event workers",
      "Zero registration fee — join the community free, no hidden charges",
    ],
    faqs: [
      {
        q: "Do I need any event experience to get event jobs as a student?",
        a: "No. Evenza places students with zero event experience into their first events. We brief every volunteer before each event — covering what the role involves, how to handle common situations, dress code, and who to report to. Enthusiasm, punctuality, and communication are what matter most.",
      },
      {
        q: "How much can I earn from event jobs as a student?",
        a: "Pay varies by event type, duration, and role. We share all payment details upfront before you confirm your participation — no surprises. Events typically run for 8–12 hours, and rates are competitive with other forms of part-time student work. Over time, as you take on more events and build experience, your earning potential increases.",
      },
      {
        q: "How do event jobs fit around a college schedule?",
        a: "Most events — corporate conferences, trade fairs, weddings, concerts — happen on weekends, national holidays, or evenings. We share event dates well in advance through the WhatsApp community so you can choose events that don't conflict with exams or college commitments.",
      },
      {
        q: "Can I add event work to my CV as a student?",
        a: "Yes. Event volunteering experience counts as legitimate work experience on a resume. Companies and recruiters value candidates who show initiative and real-world work experience alongside their academic record. You can list your events, roles, and skills gained from Evenza work on your CV.",
      },
      {
        q: "Which cities does Evenza have event jobs for students?",
        a: "We have student event opportunities in Jaipur, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Chandigarh, Lucknow, and 15+ more cities. New cities are added as our network grows. Join the community and tell us your city.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
      { label: "Volunteering in India", path: "/volunteering-india" },
      { label: "Event Internship Jaipur", path: "/event-internship-jaipur" },
    ],
  },
  {
    path: "/part-time-event-work",
    seoTitle: "Part-Time Event Work in India | Earn from Events | Evenza",
    metaDescription: "Looking for part-time event work in India? Join Evenza's volunteer community. Earn part-time at weddings, corporate events, trade fairs & concerts across India. No fees. Freshers welcome.",
    keyword: "Part-Time Event Work",
    subtitle: "The Best Part-Time Work You'll Find — Real Events, Real Pay, Real Flexibility",
    description: "Part-time event work is one of the most rewarding and flexible ways to earn income in India. Unlike retail or food delivery, event work puts you inside the most exciting experiences happening in your city — backstage at concerts, at the registration desk of a major trade fair, welcoming guests at a destination wedding, or managing crowd flow at a city marathon. Evenza is India's only registered event company that actively recruits part-time volunteers across 25+ cities. You choose when you want to work. You pick events from our WhatsApp community that fit your schedule. You show up, work professionally, and earn. Whether you're a student, a professional between jobs, someone who wants to earn on weekends, or a freelancer building a portfolio — Evenza's part-time event work model is designed around your life, not a company schedule.",
    features: [
      "Work when you want — choose events that fit your schedule, no fixed commitment",
      "Earn from events across 25+ cities — Jaipur, Delhi, Mumbai, Bengaluru, Hyderabad, and more",
      "Work at India's best events — destination weddings, trade fairs, concerts, corporate summits",
      "No experience needed to start — Evenza briefs every volunteer before every event",
      "Zero registration fee — join the part-time volunteer community free",
      "Build a side-income that grows with your event experience and reputation",
    ],
    faqs: [
      {
        q: "How does part-time event work with Evenza actually work?",
        a: "You join the Evenza Volunteers WhatsApp community (link on our website). When an event comes up in your city, we post the details — date, location, role, and pay. You reply if you're interested. If selected, we brief you before the event. You work the event. You get paid after.",
      },
      {
        q: "How many events can I work per month?",
        a: "There's no minimum or maximum. Some months there are 3–4 events in your city, others more. It depends on the city and season. Peak event seasons are October–March (post-monsoon) and May–June. You always choose which events to apply for.",
      },
      {
        q: "Is part-time event work in India legal and legitimate?",
        a: "Yes. Evenza is a registered company — brand of Shree Ji Company Pvt. Ltd. — and all our event deployments are fully compliant. We do not ask for documents upfront or charge any registration fee. Anyone asking you to pay to do event work is running a scam.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
      { label: "Freelance Event Work India", path: "/freelance-event-work-india" },
      { label: "Volunteering in India", path: "/volunteering-india" },
    ],
  },
  {
    path: "/freelance-event-work-india",
    seoTitle: "Freelance Event Work in India | Event Freelancer Jobs | Evenza",
    metaDescription: "Looking for freelance event work in India? Evenza connects event freelancers with paid work at weddings, corporate events, trade fairs & concerts across 25+ cities. No registration fee.",
    keyword: "Freelance Event Work India",
    subtitle: "Build Your Freelance Event Career With India's Most Active Event Network",
    description: "Freelancing in the events industry in India is one of the most rewarding and underrated career paths available. But the hardest part has always been finding consistent, legitimate event work without going through traditional agencies that take large commissions or charge you upfront fees. Evenza solves this. We are a registered event company that works with India's top event clients — corporate brands, wedding planners, exhibition organisers, and government agencies — and we actively recruit freelance event workers across 25+ cities. As a freelancer in the Evenza community, you get first-access to event opportunities in your city. You work independently, build your own track record, and earn market rates. Over time, as you build a reputation within the community, you access larger events, senior roles, and a genuine career as an event industry professional.",
    features: [
      "Access to real freelance event work across 25+ Indian cities",
      "Work directly with event clients — no agency middlemen taking your earnings",
      "Event types: corporate summits, destination weddings, trade fairs, concerts, brand activations",
      "Build a freelance portfolio with real, creditable event credits",
      "Zero registration fee — the Evenza freelance community is free to join",
      "Grow from volunteer to supervisor to event manager — the career path is real",
    ],
    faqs: [
      {
        q: "What kind of freelance event work is available through Evenza?",
        a: "Freelance event roles include registration coordinator, guest relations executive, event usher, exhibition booth staff, show flow assistant, production support, logistics coordinator, hospitality staff, and event supervisor. Roles vary by event type and your experience level.",
      },
      {
        q: "Can I build a full-time freelance event career through Evenza?",
        a: "Yes — and many of our community members have done exactly that. Starting as a volunteer, performing consistently, and growing your reputation within the community leads to access to larger events, senior roles, and eventually a steady stream of freelance event income that can replace a traditional full-time salary.",
      },
      {
        q: "Does Evenza take a commission from freelancers?",
        a: "No. Evenza does not take a commission from the pay of our volunteer and freelance community members. Our revenue model is from our event clients, not from our people. You earn what you're promised.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Part-Time Event Work", path: "/part-time-event-work" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
      { label: "Volunteering in India", path: "/volunteering-india" },
    ],
  },
  {
    path: "/event-internship-jaipur",
    seoTitle: "Event Internship in Jaipur | Real Event Experience for Students | Evenza",
    metaDescription: "Looking for an event management internship in Jaipur? Evenza offers paid, real-world event internship experience for students. Work at real events, not just shadow someone. No fee.",
    keyword: "Event Internship Jaipur",
    subtitle: "Not a Shadow Internship — Real Work, Real Events, Real Pay in Jaipur",
    description: "Most event management internships in Jaipur mean sitting in an office, making chai, and getting a certificate at the end. Evenza's event internship model is completely different. As an Evenza event intern, you work at actual events — the Jaipur Literature Festival, JECC trade expos, corporate conferences at JW Marriott and Fairmont, and destination weddings at Rambagh Palace. You manage real responsibilities — registration desks, crowd management, guest coordination, logistics support. You interact with professional event managers, vendors, clients, and guests. You get paid for your time. And you graduate from the internship with a portfolio of actual events you worked — not just a certificate. For students at BITS Pilani, Poornima, Rajasthan University, Manipal Jaipur, IIS University, or any Jaipur college looking for a genuine event management internship, Evenza is the real thing.",
    features: [
      "Work at real events — not office internships or observation-only programmes",
      "Events portfolio: JLF, JECC expos, weddings at Rambagh and City Palace, corporate summits",
      "Paid internship — earn while you gain real event management experience",
      "Learn from on-ground event managers and Evenza's core team",
      "Open to students from any Jaipur college — BITS Pilani, Poornima, Rajasthan University, Manipal",
      "Zero registration fee — join the Evenza community and apply for internship slots free",
    ],
    faqs: [
      {
        q: "Does Evenza provide a certificate for event internship?",
        a: "Yes. Upon completing a defined number of events, Evenza provides an internship completion certificate that you can add to your resume and LinkedIn profile. More importantly, you'll have a portfolio of real events you worked — which carries far more weight with employers than any certificate.",
      },
      {
        q: "How is an Evenza event internship different from other event internships in Jaipur?",
        a: "Most internships are office-based or observational. Evenza interns work on-ground at real events — managing registration queues, coordinating guests, supporting show flow, and liaising with vendors and clients. You get hands-on experience that you can speak to confidently in any job interview.",
      },
      {
        q: "Can I do an event internship with Evenza during my college semester?",
        a: "Yes. Events mostly happen on weekends and during college holidays. You can complete a meaningful internship — working 5–10 events — without affecting your academic schedule. We are flexible because most of our interns are active students.",
      },
    ],
    relatedPages: [
      { label: "Volunteer with Evenza", path: "/volunteers" },
      { label: "Volunteering in Jaipur", path: "/volunteering-jaipur" },
      { label: "Event Jobs for Students", path: "/event-jobs-students" },
      { label: "Event Volunteers Jaipur", path: "/event-volunteers-jaipur" },
    ],
  },

  // ============================================================
  // MANPOWER STATE PAGES — demand side (clients/organisers hiring)
  // ============================================================
  {
    path: "/event-manpower-uttar-pradesh",
    seoTitle: "Event Manpower in Uttar Pradesh | Event Staff UP | Evenza",
    metaDescription: "Need event manpower in Uttar Pradesh? Evenza provides trained event staff across Lucknow, Agra, Varanasi, Prayagraj, Kanpur, Noida and all UP cities. GST billing. Pan-UP coverage.",
    keyword: "Event Manpower Uttar Pradesh",
    subtitle: "Trusted Event Manpower Across All of Uttar Pradesh — From Mahakumbh to Corporate Summits",
    description: "Uttar Pradesh is India's most populous state with one of its most diverse event calendars. The Mahakumbh at Prayagraj requires thousands of trained event personnel; Lucknow's government summits at Indira Gandhi Pratishthan demand professional staffing; Agra's tourism events near the Taj Mahal require hospitality-aware crews; Varanasi's Ganga Aarti events and cultural gatherings need sensitive and experienced staff; Noida and Greater Noida's corporate events and India Expo Mart exhibitions require trained exhibition and registration teams. Evenza provides trained, briefed, uniformed event manpower across all of UP. Our operations base in Jaipur gives us excellent access to the entire western, central, and eastern UP belt. We manage travel, accommodation, and food for our crews — so you receive the same quality of trained personnel regardless of where in UP your event is held.",
    features: [
      "Pan-UP coverage — Lucknow, Agra, Varanasi, Prayagraj, Kanpur, Noida, Meerut, Mathura",
      "Trained event manpower for government, corporate, cultural, and religious events",
      "Experience at Mahakumbh, Lucknow Mahotsav, Agra tourism events",
      "Exhibition and registration staff for India Expo Mart and UP trade fairs",
      "Travel and accommodation managed for inter-city UP deployments",
      "GST-compliant billing from a registered company",
    ],
    faqs: [
      {
        q: "Which cities in UP does Evenza serve for event manpower?",
        a: "We serve Lucknow, Agra, Varanasi, Prayagraj, Kanpur, Noida, Greater Noida, Meerut, Mathura, Vrindavan, Aligarh, Bareilly, Gorakhpur, and can deploy to smaller UP cities with advance notice.",
      },
      {
        q: "Can Evenza provide event staff for Mahakumbh and religious gatherings in UP?",
        a: "Yes. We provide event support staff for large gatherings in Prayagraj and across the UP pilgrimage circuit. Our team is briefed on cultural sensitivities and the specific crowd management requirements of large religious events.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Lucknow", path: "/event-manpower-lucknow" },
      { label: "Event Manpower Delhi", path: "/event-manpower-delhi" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
    ],
  },
  {
    path: "/manpower-agency-rajasthan",
    seoTitle: "Manpower Agency in Rajasthan | Event Staffing Statewide | Evenza",
    metaDescription: "Looking for a manpower agency in Rajasthan? Evenza provides trained event staff across all 33 districts — Jaipur, Udaipur, Jodhpur, Ajmer, Kota, Bikaner, Pushkar and beyond. GST billing.",
    keyword: "Manpower Agency Rajasthan",
    subtitle: "Rajasthan's Most Trusted State-Wide Event Manpower Agency",
    description: "Finding a reliable manpower agency in Rajasthan that can serve not just Jaipur but all of Rajasthan's event destinations — Udaipur's lakeside venues, Jodhpur's fortresses, Pushkar's spiritual sites, Kota's industrial facilities — is a genuine challenge. Most agencies have city-level capability at best. Evenza is headquartered in Jaipur and has proven operational reach across all 33 districts of Rajasthan. Our model — managing crew travel, accommodation, and food — means you get the same quality of trained, uniformed, briefed event staff whether your event is in Jaipur, the rural estates of Shekhawati, or the desert dunes of Jaisalmer. We have staffed events at Rajasthan's most iconic venues and understand the unique logistical and cultural requirements that each region demands. As the state's most trusted event manpower agency, Evenza provides GST-compliant billing, transparent pricing, and a supervisor on every deployment.",
    features: [
      "All 33 districts of Rajasthan covered — the widest state-wide reach of any agency",
      "Experienced at Jaipur, Udaipur, Jodhpur, Ajmer, Kota, Pushkar, Jaisalmer, Bikaner venues",
      "Travel and accommodation managed for every out-of-Jaipur deployment",
      "Rajasthani-dialect-aware crew for heritage and cultural events",
      "GST-compliant invoicing from a registered company",
      "Supervisor on every deployment for on-ground accountability",
    ],
    faqs: [
      {
        q: "Can Evenza provide manpower for events in all of Rajasthan — not just Jaipur?",
        a: "Yes. Evenza's operational model is specifically designed for statewide deployment. We manage our crew's travel, accommodation, and food for all non-Jaipur events in Rajasthan, ensuring you receive trained staff regardless of the event location.",
      },
      {
        q: "What types of events does Evenza staff across Rajasthan?",
        a: "Across Rajasthan we staff destination weddings (all venue types), corporate MICE events, government functions, trade fairs, cultural festivals (Pushkar Fair, Desert Festival), religious gatherings, and tourism-linked hospitality events.",
      },
    ],
    relatedPages: [
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Manpower Agency Jaipur", path: "/manpower-agency-jaipur" },
      { label: "Event Manpower Rajasthan", path: "/event-manpower-rajasthan" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
    ],
  },
  {
    path: "/event-manpower-maharashtra",
    seoTitle: "Event Manpower in Maharashtra | Event Staff Mumbai Pune Nashik Nagpur | Evenza",
    metaDescription: "Need event manpower in Maharashtra? Evenza provides trained event staff across Mumbai, Pune, Nashik, Nagpur, Aurangabad and all Maharashtra. GST billing. Pan-Maharashtra coverage.",
    keyword: "Event Manpower Maharashtra",
    subtitle: "Maharashtra's Biggest Events Run on Evenza-Trained Manpower",
    description: "Maharashtra is India's event powerhouse — home to the country's largest entertainment industry, fastest-growing corporate event sector, and some of its most lavish weddings. Managing event manpower across Maharashtra's geography — Mumbai's fast-paced entertainment events, Pune's IT corridor conferences, Nashik's wine festivals and Kumbh Mela, Nagpur's government summits, Aurangabad's tourism events — demands a staffing partner with genuine operational reach across the state. Evenza provides trained, supervised, and uniformed event manpower across all of Maharashtra. Our deployment model manages travel and accommodation for all out-of-Mumbai events within Maharashtra, ensuring consistent quality regardless of city. From NMACC galas in Mumbai to Nashik's massive Kumbh Mela to Pune's MCCIA corporate events — Evenza is Maharashtra's trusted statewide event staffing partner.",
    features: [
      "Pan-Maharashtra coverage — Mumbai, Pune, Nashik, Nagpur, Aurangabad, Thane, Navi Mumbai",
      "Experience at NMACC, BOMBAY EXHIBITION CENTRE, MCCIA, and major Maharashtra venues",
      "Entertainment, corporate, wedding, and government event staffing",
      "Travel and accommodation managed for inter-Maharashtra deployments",
      "Marathi-speaking staff available for regional events",
      "GST-compliant billing from a registered company",
    ],
    faqs: [
      {
        q: "Does Evenza cover event manpower in Nashik, Nagpur, and Aurangabad?",
        a: "Yes. We cover all major Maharashtra cities including Nashik (Kumbh Mela, wine festivals), Nagpur (MIHAN, government events, Nagpur Orange City events), Aurangabad (Ajanta-Ellora tourism events, AURIC industrial events), and Solapur, Kolhapur with advance notice.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Mumbai", path: "/event-manpower-mumbai" },
      { label: "Event Manpower Pune", path: "/event-manpower-pune" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
    ],
  },
  {
    path: "/event-manpower-karnataka",
    seoTitle: "Event Manpower in Karnataka | Event Staff Bengaluru Mysuru | Evenza",
    metaDescription: "Need event manpower in Karnataka? Evenza provides trained event staff across Bengaluru, Mysuru, Mangaluru, Hubli and all Karnataka. Tech events, weddings, cultural events. GST billing.",
    keyword: "Event Manpower Karnataka",
    subtitle: "Karnataka's Tech, Heritage and Cultural Events — Powered by Evenza Event Manpower",
    description: "Karnataka's events span two extremes of India's event industry — high-tech corporate summits in Bengaluru's ITPL and Manyata Tech Park, and the world-class cultural grandeur of Mysuru Dasara at the Mysore Palace. Between these extremes lie Mangaluru's coastal hospitality events, Hubli-Dharwad's commercial events, Hampi's heritage festivals, and Belagavi's growing corporate sector. Evenza provides trained event manpower across all of Karnataka for this diverse range of events. Our crew includes exhibition staff for BIEC, delegate management specialists for Bengaluru's tech conferences, and hospitality-aware teams for Mysuru's high-protocol royal events. Travel and accommodation is managed for all inter-city Karnataka deployments. Kannada-speaking staff is available on request.",
    features: [
      "Pan-Karnataka coverage — Bengaluru, Mysuru, Mangaluru, Hubli, Belagavi, Shimoga",
      "Experience at BIEC, Mysore Palace events, Bengaluru's tech conference venues",
      "Tech conference, corporate, cultural, and wedding event manpower",
      "Kannada-speaking staff available for local-audience events",
      "Travel and accommodation managed for inter-Karnataka deployments",
      "GST-compliant billing from a registered company",
    ],
    faqs: [
      {
        q: "Does Evenza cover event staffing for Mysuru Dasara?",
        a: "Yes. Mysuru Dasara at Mysore Palace is one of India's most high-protocol events. Our staff are briefed on royal event protocols, crowd management, and the specific requirements of this heritage celebration.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Bengaluru", path: "/event-manpower-bengaluru" },
      { label: "Event Manpower Hyderabad", path: "/event-manpower-hyderabad" },
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
    ],
  },
  {
    path: "/event-manpower-india",
    seoTitle: "Event Manpower Company India | Pan-India Event Staffing | Evenza",
    metaDescription: "Looking for a pan-India event manpower company? Evenza provides trained event staff across 25+ cities in India — Jaipur, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata & more. GST billing.",
    keyword: "Event Manpower Company India",
    subtitle: "India's Pan-India Event Manpower Partner — 25+ Cities, One Company",
    description: "When your event spans multiple cities or requires consistent staffing standards across India's diverse geography, you need a single manpower partner who can deliver nationally — not a different agency in every city with different quality, different billing practices, and different standards. Evenza is India's pan-India event manpower company. Headquartered in Jaipur, we have deployed trained event crews in 25+ cities across Rajasthan, Delhi NCR, Maharashtra, Karnataka, Telangana, Tamil Nadu, West Bengal, Gujarat, Uttar Pradesh, Punjab, Goa, and beyond. Our model — managing crew travel, accommodation, and food — means you get the same briefed, uniformed, supervised team regardless of which Indian city your event is in. One point of contact, one invoice, one quality standard across India.",
    features: [
      "25+ cities covered — single point of contact for all pan-India events",
      "Consistent standards — same briefing, uniform, and supervision model nationwide",
      "Travel and accommodation managed for all inter-city deployments",
      "All event types — corporate, wedding, exhibition, concert, government, MICE",
      "GST-compliant billing from a registered Indian company",
      "Proven track record across Rajasthan, Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata",
    ],
    faqs: [
      {
        q: "Can Evenza manage event staffing for a multi-city conference across India?",
        a: "Yes. We regularly manage multi-city deployments for corporate clients running events in multiple Indian cities simultaneously or sequentially. Our project manager handles coordination across all cities, ensuring consistent quality and seamless communication with your team.",
      },
      {
        q: "How does Evenza maintain quality standards across 25+ cities?",
        a: "Our quality system is standardised — every crew member is selected through the same screening process, briefed using the same pre-event protocol, uniformed to the same standard, and supervised by an Evenza-trained supervisor. The briefing for your event is the same whether we deploy in Jaipur or Chennai.",
      },
      {
        q: "Which cities does Evenza currently cover for pan-India event manpower?",
        a: "We cover Jaipur, Udaipur, Jodhpur, Ajmer, Delhi NCR, Gurgaon, Noida, Mumbai, Pune, Nashik, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Surat, Lucknow, Chandigarh, Goa, Indore, Surat, and 10+ additional cities. Contact us for any city not listed.",
      },
    ],
    relatedPages: [
      { label: "Event Manpower Jaipur", path: "/event-manpower-jaipur" },
      { label: "Event Staffing Rajasthan", path: "/event-staffing-rajasthan" },
      { label: "Manpower Agency Jaipur", path: "/manpower-agency-jaipur" },
      { label: "Manpower Agency Rajasthan", path: "/manpower-agency-rajasthan" },
    ],
  },
  {
    path: "/volunteering-jaipur",
    seoTitle: "Volunteering Jobs in Jaipur | Event Work for Students | Evenza",
    metaDescription: "Stop doing unpaid NGO work. Get paid part-time working real events, concerts, and weddings in Jaipur with Evenza. No registration fees.",
    keyword: "Volunteering Jaipur",
    subtitle: "Paid Event Volunteering for Freshers & Students in Jaipur",
    description: "Are you a college student or fresher in Jaipur looking for part-time work? At Evenza, we don't do unpaid NGO work. We hire paid event volunteers and crew for high-profile weddings, concerts, and corporate summits across Jaipur.",
    type: "volunteer",
    features: [
      "Paid, real-world event experience (concerts, hospitality, RSVP).",
      "100% Genuine — No scams, no registration fees, no fake forms.",
      "Flexible weekend and project-based shifts that fit your college schedule.",
      "Direct communication through our active WhatsApp Community.",
    ],
    faqs: [
      {
        q: "Is this paid volunteering?",
        a: "Yes! Unlike NGO volunteering, all our event crew and volunteers are paid for their shifts.",
      },
      {
        q: "Do I have to pay a registration fee?",
        a: "Absolutely not. Evenza never asks for registration fees. If someone asks you for money to join Evenza, it is a scam.",
      },
      {
        q: "What kind of events will I work on in Jaipur?",
        a: "You will work on live concerts, royal destination weddings, corporate summits, and RSVP management projects in Jaipur.",
      },
    ],
  },
  {
    path: "/event-jobs-students",
    seoTitle: "Part-Time Event Jobs for Students | Earn While You Learn | Evenza",
    metaDescription: "Flexible weekend and part-time event jobs perfect for college students in Jaipur and Rajasthan. Earn while you learn with Evenza.",
    keyword: "Event Jobs for Students",
    subtitle: "Flexible Part-Time Event Jobs for College Students",
    description: "Looking to earn part-time while studying? Evenza offers flexible, project-based event jobs tailored for students in Jaipur and across Rajasthan. Gain real hospitality, technical, and management experience while getting paid.",
    type: "volunteer",
    features: [
      "Work weekends or on short-term projects that don't disrupt your studies.",
      "Roles include RSVP management, Excel/Tech work, hospitality, and running.",
      "A safe, professional environment managed by experienced Evenza supervisors.",
      "Build your resume with hands-on on-ground management experience.",
    ],
    faqs: [
      {
        q: "Do I need prior experience to join?",
        a: "No prior experience is required for volunteer roles. We provide on-ground briefing and training before every event.",
      },
      {
        q: "How do I get notified about upcoming jobs?",
        a: "Simply join our WhatsApp Community. We post all upcoming event requirements directly in the group.",
      },
    ],
  },
  {
    path: "/part-time-event-work",
    seoTitle: "Part-Time Event Work & Freelance Crew | Rajasthan | Evenza",
    metaDescription: "Freelance and project-based event work for hospitality, RSVP, and technical event crew across Rajasthan.",
    keyword: "Part-time Event Work",
    subtitle: "Project-Based Event Work for Freelancers & Crew",
    description: "Whether you are looking for Excel/tech work, RSVP calling, or on-ground event management, Evenza is always looking for trusted, sharp individuals for part-time and freelance event work across Rajasthan.",
    type: "volunteer",
    features: [
      "Join a trusted network of the best event freelancers in Rajasthan.",
      "Opportunities in tech support, RSVP calling, hospitality, and crowd control.",
      "Transparent pay structure with fast payouts post-event.",
      "Work on massive international concerts and high-profile corporate summits.",
    ],
    faqs: [
      {
        q: "What is RSVP and tech event work?",
        a: "This involves managing guest lists, making confirmation calls, handling QR code check-ins, and managing basic Excel data on-ground at the event.",
      },
      {
        q: "Can I choose which events I work?",
        a: "Yes. All projects are posted in our WhatsApp community, and you can opt-in for the ones that fit your schedule.",
      },
    ],
  },
  {
    path: "/volunteering-rajasthan",
    seoTitle: "Event Volunteering Jobs Across Rajasthan | Paid Work | Evenza",
    metaDescription: "Join the largest community of paid event volunteers in Rajasthan. We have projects across Jaipur, Udaipur, Jodhpur, and more.",
    keyword: "Volunteering Rajasthan",
    subtitle: "Join Rajasthan's Largest Paid Event Volunteer Network",
    description: "Based anywhere in Rajasthan? Evenza operates across Jaipur, Udaipur, Jodhpur, and beyond. We are constantly seeking active, responsible volunteers and event crew for destination weddings and corporate expos.",
    type: "volunteer",
    features: [
      "Opportunities in major cities: Jaipur, Udaipur, Jodhpur, Pushkar.",
      "Travel and stay provided for select out-station destination weddings.",
      "A massive network of students and freshers working together.",
      "Direct entry into the events industry with a reputed agency.",
    ],
    faqs: [
      {
        q: "Does Evenza cover travel for outstation events?",
        a: "For large destination weddings outside your home city, Evenza typically arranges logistics, stay, and food.",
      },
      {
        q: "Is it safe for female students?",
        a: "100%. Safety is our top priority. Our teams are always led by trusted supervisors, and we ensure secure travel and safe working environments for all our crew.",
      },
    ],
  },
];
