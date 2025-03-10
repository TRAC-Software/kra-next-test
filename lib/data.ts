export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  date: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Airlines Expand Routes Across Asia Pacific",
    excerpt: "Major carriers announce new destinations and increased frequencies across the region",
    content: `Major airlines across the Asia Pacific region have announced significant route expansions, marking a robust recovery in international travel. The expansion includes new direct flights between major business hubs and emerging markets.

Several leading carriers have revealed plans to increase flight frequencies and add new destinations to their networks. This development comes as travel demand continues to surge in the post-pandemic era.

Key highlights of the expansion include:
- New direct routes connecting major business centers
- Increased flight frequencies on popular routes
- Introduction of new aircraft on key routes
- Enhanced connectivity to emerging markets

Industry analysts predict this expansion will significantly boost regional connectivity and economic growth.`,
    image: "/images/airline-routes.jpg",
    category: "Commercial",
    date: "2024-03-20"
  },
  {
    id: 2,
    title: "New Aviation Safety Regulations Proposed",
    excerpt: "International aviation authorities consider stricter safety measures for commercial flights",
    content: `Aviation regulatory bodies worldwide are considering new safety measures aimed at enhancing commercial flight operations. The proposed regulations focus on incorporating advanced technologies and updating existing safety protocols.

The new measures include enhanced pilot training requirements, stricter maintenance schedules, and advanced weather monitoring systems. These changes reflect the industry's commitment to maintaining the highest safety standards.

Key aspects of the proposed regulations:
- Updated pilot training protocols
- Enhanced maintenance requirements
- Advanced weather monitoring systems
- Improved emergency response procedures

The proposals are currently under review by major aviation authorities and are expected to be implemented gradually over the next two years.`,
    image: "/images/aviation-safety.jpg",
    category: "Regulations",
    date: "2024-03-19"
  },
  {
    id: 3,
    title: "Advanced Air Mobility Takes Off",
    excerpt: "Urban air mobility projects gain momentum with successful test flights",
    content: `The urban air mobility sector has achieved significant milestones with successful test flights of new electric vertical takeoff and landing (eVTOL) aircraft. These developments mark a crucial step toward the future of urban transportation.

Several leading companies have demonstrated their eVTOL prototypes, showcasing advanced capabilities in autonomous flight and electric propulsion. The successful tests bring us closer to the reality of urban air taxis.

Major developments include:
- Successful autonomous flight tests
- Improved battery technology
- Advanced air traffic management systems
- Progress in regulatory frameworks

Industry experts predict commercial urban air mobility services could begin operations in select cities within the next few years.`,
    image: "/images/urban-mobility.jpg",
    category: "Technology",
    date: "2024-03-18"
  },
  {
    id: 4,
    title: "Military Aviation Technology Breakthrough",
    excerpt: "New stealth technology development promises enhanced capabilities",
    content: `A significant breakthrough in military aviation technology has been announced, focusing on advanced stealth capabilities. The new developments promise to enhance aircraft survivability and mission effectiveness.

The technology incorporates cutting-edge materials and radar-absorbing coatings, representing a major advance in stealth aircraft design. These innovations will significantly impact future military aircraft development.

Key technological advances:
- New radar-absorbing materials
- Enhanced stealth geometry
- Improved thermal signature reduction
- Advanced electronic warfare capabilities

Military aviation experts consider this development a significant leap forward in aircraft stealth technology.`,
    image: "/images/military-tech.jpg",
    category: "Military",
    date: "2024-03-17"
  },
  {
    id: 5,
    title: "Sustainable Aviation Fuel Production Scales Up",
    excerpt: "New facilities begin production of sustainable aviation fuel at commercial scale",
    content: `Major energy companies have announced the commencement of large-scale sustainable aviation fuel (SAF) production. These new facilities represent a significant step toward reducing aviation's carbon footprint.

The production facilities utilize advanced technologies to convert sustainable feedstocks into high-quality aviation fuel. This development marks a crucial milestone in the industry's commitment to environmental sustainability.

Key developments:
- New production facilities operational
- Advanced conversion technologies
- Sustainable feedstock supply chains
- Industry partnerships for distribution

Environmental experts praise this development as a significant step toward achieving aviation sustainability goals.`,
    image: "/images/saf-production.jpg",
    category: "Sustainability",
    date: "2024-03-16"
  },
  {
    id: 6,
    title: "Private Aviation Market Growth",
    excerpt: "Business aviation sector shows strong recovery with increasing demand",
    content: `The private aviation sector has reported substantial growth, with increasing demand for business and private travel solutions. This growth reflects changing travel preferences and the sector's ability to adapt to new market conditions.

Industry data shows significant increases in both aircraft sales and charter operations. Private aviation companies are expanding their fleets and services to meet the growing demand.

Market highlights:
- Increased aircraft sales
- Growing charter operations
- New service offerings
- Enhanced customer experience

Industry analysts predict continued growth in the private aviation sector through 2024 and beyond.`,
    image: "/images/private-aviation.jpg",
    category: "Business",
    date: "2024-03-15"
  }
]; 