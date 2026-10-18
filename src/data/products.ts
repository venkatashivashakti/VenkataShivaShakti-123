export interface Product {
  id: number;
  name: string;
  category: "Engine Parts" | "Brake Parts" | "Electrical" | "Body Parts" | "Accessories";
  image: string;
  description: string;
  featured?: boolean;
  bikeCompatibility?: string;
  spec?: string;
}

export const CATEGORIES = [
  "All",
  "Engine Parts",
  "Brake Parts",
  "Electrical",
  "Body Parts",
  "Accessories",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const products: Product[] = [
  {
    id: 1,
    name: "XLD Brake Shoes",
    category: "Brake Parts",
    image: "/src/images/bikeparts/Break_shoes.png",
    description: "Reliable drum brake shoes with durable friction lining for consistent stopping power and dependable everyday braking.",
    featured: true,
    bikeCompatibility: "Available for popular commuter motorcycles and scooters",
    spec: "Durable friction lining with strong cast-metal backing",
  },
  {
    id: 2,
    name: "Honda Genuine Chain & Sprocket Set",
    category: "Engine Parts",
    image: "/src/images/bikeparts/Chain_set.png",
    description: "Honda Genuine Parts drive chain and sprocket set designed to transfer power smoothly and support long-lasting performance.",
    featured: true,
    bikeCompatibility: "Honda motorcycles; confirm model and year before ordering",
    spec: "Matched chain and sprocket set",
  },
  {
    id: 3,
    name: "Mebesto Steering Bearing Set",
    category: "Body Parts",
    image: "/src/images/bikeparts/Bearing_set.png",
    description: "Precision steering bearing set for smooth handlebar movement, stable steering control, and reliable front-end service.",
    featured: true,
    bikeCompatibility: "For compatible motorcycle steering-head applications",
    spec: "Matched bearing set for steering assembly",
  },
  {
    id: 4,
    name: "Uno Minda Blinker Signal Lights",
    category: "Electrical",
    image: "/src/images/bikeparts/Blinker_signal_lights.png",
    description: "Clear-lens Uno Minda indicator lights with bright amber illumination to make turns visible and improve road safety.",
    featured: true,
    bikeCompatibility: "Model-specific motorcycle and scooter applications",
    spec: "Pair-style indicator housings with wire leads",
  },
  {
    id: 5,
    name: "MICO DOT 3 & DOT 4 Brake Fluid",
    category: "Brake Parts",
    image: "/src/images/bikeparts/Break-fluid.png",
    description: "MICO synthetic brake fluid for vehicles requiring DOT 3 or DOT 4 specification, including compatible disc and ABS systems.",
    featured: true,
    bikeCompatibility: "Use only where the vehicle manufacturer specifies DOT 3 or DOT 4",
    spec: "100 ml pack; DOT 3 and DOT 4",
  },
  {
    id: 6,
    name: "Goetze Piston Assembly",
    category: "Engine Parts",
    image: "/src/images/bikeparts/Goetze_piston.png",
    description: "Goetze piston assembly built for accurate fitment and dependable compression in a properly serviced motorcycle engine.",
    featured: true,
    bikeCompatibility: "Model-specific engine fitment; verify bore size before purchase",
    spec: "Piston assembly with rings",
  },
  {
    id: 7,
    name: "Uno Minda Handlebar Switch",
    category: "Electrical",
    image: "/src/images/bikeparts/Hendel_bar_switch.png",
    description: "Uno Minda handlebar switch assembly for convenient control of indicators, lights, horn, and other motorcycle functions.",
    featured: true,
    bikeCompatibility: "Model-specific handlebar switch housing",
    spec: "Integrated switch module with horn and light controls",
  },
  {
    id: 8,
    name: "Spark Minda Premium Locks",
    category: "Accessories",
    image: "/src/images/bikeparts/Lockes.png",
    description: "Spark Minda premium lock components with robust construction and unique key combinations for dependable vehicle security.",
    featured: false,
    bikeCompatibility: "Model-specific motorcycle and scooter lock applications",
    spec: "OEM-specification lock set",
  },
  {
    id: 9,
    name: "Bosch Spark Plug",
    category: "Electrical",
    image: "/src/images/bikeparts/Spartk_plug.png",
    description: "Bosch spark plug designed for dependable ignition, steady combustion, and reliable starting performance in compatible engines.",
    featured: true,
    bikeCompatibility: "Model-specific fitment; check the recommended plug number",
    spec: "BS6-compliant spark plug",
  },
  {
    id: 10,
    name: "Usha Piston Assembly",
    category: "Engine Parts",
    image: "/src/images/bikeparts/Usha_piston.png",
    description: "Usha piston assembly with matching rings for reliable engine rebuilding and consistent compression after correct installation.",
    featured: true,
    bikeCompatibility: "Model-specific engine fitment; verify bore size before purchase",
    spec: "Piston assembly with rings",
  },
  {
    id: 11,
    name: "BEST Footrest Assembly with Rubber",
    category: "Body Parts",
    image: "/src/images/bikeparts/foot_rests.png",
    description: "BEST footrest assembly with a strong rubber grip to provide stable, comfortable footing and long service life.",
    featured: false,
    bikeCompatibility: "Model-specific motorcycle footrest mounting",
    spec: "ISO 9001:2015 certified manufacturer; rubber-covered footrest",
  },
];

export default products;
