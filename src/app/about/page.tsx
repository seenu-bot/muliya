"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Heart, 
  Users, 
  Gem, 
  Shield, 
  Sparkles,
  MapPin,
  Clock,
  TrendingUp,
  Target,
  Eye,
  HandHeart
} from "lucide-react";

const milestones = [
  { year: "1944", title: "Established", description: "Muliya Jewels was founded by Late Shri Muliya Keshava Bhatta in Puttur, Karnataka." },
  { year: "1980", title: "First Air-Conditioned Showroom", description: "The first jewellery showroom with air conditioning on the Karavali coast. Store expanded from 70 sq. ft. to 400 sq. ft." },
  { year: "2000", title: "Renovation & Certification", description: "Puttur showroom renovated and expanded to 1800 sq. ft. Received BIS certification and ISO 9001:2000 accreditation." },
  { year: "2005", title: "Madikeri Showroom", description: "Launched a 1400 sq. ft. showroom in Madikeri, Kodagu." },
  { year: "2008", title: "Gonikoppal Showroom", description: "Opened a 1700 sq. ft. showroom in Gonikoppal, Kodagu." },
  { year: "2010", title: "Puttur Ultra-Modern Showroom", description: "Introduced a world-class 4000 sq. ft. showroom in Puttur." },
  { year: "2012", title: "Bengaluru Showroom", description: "Opened a 5000 sq. ft. showroom to cater to urban clientele." },
  { year: "2015", title: "Silver Section in Madikeri", description: "Launched a dedicated 700 sq. ft. silver jewellery section." },
  { year: "2017", title: "Belthangady's Largest Showroom", description: "Opened a 3000 sq. ft. showroom with advanced amenities." },
  { year: "2019", title: "New Madikeri Showroom & Amuliya Launch", description: "Relocated to a new premises in Madikeri. Introduced the Amuliya Diamond Collection." },
  { year: "2020", title: "Silveriya Showrooms", description: "Launched dedicated silver jewellery showrooms in Nelyadi and Somwarpet." },
  { year: "2024", title: "Brand Transformation", description: "Rebranded as Muliya – Gold & Diamonds. Launched Dakshina Kannada's largest 10,000 sq. ft. flagship showroom." },
];

const values = [
  { icon: Shield, title: "Transparency", description: "Honesty in every transaction." },
  { icon: Gem, title: "Quality", description: "Craftsmanship that speaks for itself." },
  { icon: Heart, title: "Commitment", description: "Every customer matters." },
  { icon: HandHeart, title: "Responsibility", description: "Upholding brand trust in every decision." },
];

const missionPoints = [
  "To enhance customer experience and loyalty through exceptional service.",
  "To turn jewellery dreams into reality with designs that suit every taste and budget.",
  "To foster a culture of professionalism, purpose, and innovation.",
  "To grow our brand with values that matter and a network that reaches far and wide.",
];

const csrPoints = [
  "Supporting community development schemes.",
  "Contributing to health camps and disaster relief efforts.",
  "Education, religious and Goseva activities.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 bg-sky-100/30 rounded-full blur-3xl top-40 right-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              In the quiet town of Puttur in 1944, Late Shri Muliya Keshava Bhatta laid the foundation 
              for what would become one of Karnataka's most cherished jewellery brands. Rooted in humility 
              and guided by integrity, he built more than a business—he built a legacy of trust, transparency, 
              and heartfelt service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="/images/muliya keshava bhatta.png"
                  alt="Late Shri Muliya Keshava Bhatta - Founder"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-serif text-white mb-2">Muliya Keshava Bhatta</h3>
                  <p className="text-white/80 text-sm">Founder (1944)</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#E92247]/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100/50 rounded-full blur-xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">A Legacy of Trust</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  After his passing, his son, Shri Muliya Shyama Bhat, took up the mantle of responsibility 
                  and upheld the brand's values with devotion and grace. Under his leadership, Muliya continued 
                  to be a name associated with honesty, tradition, and strong community ties.
                </p>
                <p>
                  In the early 2000s, the third generation—the Muliya Brothers – Keshava Prasad Muliya and 
                  Krishna Narayana Muliya—stepped in with a bold vision and modern approach. It was under their 
                  dynamic leadership that Muliya entered a phase of rapid growth and transformation.
                </p>
                <p>
                  They expanded the brand's presence across Karnataka, introduced cutting-edge technologies in 
                  jewellery authentication, launched new product lines like Amuliya and Silveriya, and unveiled 
                  Dakshina Kannada's largest showroom in Puttur.
                </p>
                <p className="font-medium text-gray-900">
                  From a humble beginning to a state-wide presence, Muliya's journey is a story of legacy preserved, 
                  and progress redefined—crafted with care, generation after generation.
                </p>
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Late Shri Muliya Keshava Bhatta, a visionary from an agricultural background, believed in 
                  creating more than just jewellery—he created relationships. With a deep sense of social 
                  responsibility and a passion for honest trade, he won the hearts of families across Puttur and beyond.
                </p>
                <div className="flex items-center gap-2 text-[#E92247] font-medium">
                  <Sparkles className="w-5 h-5" />
                  <span>Built with honesty. Grown with love. Trusted with pride.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">People Behind Muliya</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The visionaries shaping our future while honoring our past.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-gray-100">
                  <img
                    src="/images/prasad-removebg-preview.png"
                    alt="Shri Keshava Prasad Muliya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-2">Shri Keshava Prasad Muliya</h3>
                <p className="text-[#E92247] font-medium mb-4">Chairman & Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A certified gemologist and MBA in Marketing, he brings a perfect blend of technical knowledge, 
                  business acumen, and legacy-driven leadership.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-gray-100">
                  <img
                    src="/images/krishna-removebg-preview.png"
                    alt="Shri Krishna Narayana Muliya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-2">Shri Krishna Narayana Muliya</h3>
                <p className="text-[#E92247] font-medium mb-4">CEO & Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With an MBA in Finance and Accounting, his structured approach, combined with a creative eye, 
                  shapes the brand's strategic and design direction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Today */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 bg-sky-100/20 rounded-full blur-3xl bottom-20 right-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[#E92247]/10 rounded-full mb-6">
                <span className="text-[#E92247] font-medium text-sm">Today</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">Who We Are Today</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Today, Muliya – Gold & Diamonds is a symbol of elegance, trust, and forward-thinking craftsmanship. 
                With over 81 years of heritage, we proudly serve customers through 7 showrooms across Karnataka, 
                including Dakshina Kannada's largest showroom in Puttur, spanning 10,000 sq. ft.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our brand is built for every generation—from traditional gold lovers to the contemporary bride, 
                from silver seekers to diamond connoisseurs. Every collection at Muliya is designed to make you 
                feel proud, celebrated, and connected.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/muliya-aboutuspage.png"
                  alt="Muliya Showroom"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E92247]/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100/40 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#E92247]/5 to-pink-50 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Purpose – Creating Happiness</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Muliya, we believe jewellery is more than metal and gems—it's a part of life's most beautiful moments.
              </p>
              <p className="text-gray-900 font-medium text-lg mb-4">
                Our purpose is simple yet powerful: Creating Happiness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's a bride's first necklace, a father's gift to his daughter, or a couple's anniversary 
                surprise—every piece we design is made to bring joy. That joy, that spark, is what defines us. 
                We want to bring happiness to everyone associated with our brand – customers, vendors, staff etc.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">Milestones that shaped our legacy</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#E92247] to-gray-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md inline-block">
                      <span className="text-[#E92247] font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm mt-2 max-w-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#E92247] items-center justify-center z-10 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E92247]/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#E92247]" />
                </div>
                <h2 className="text-2xl font-serif text-gray-900">Our Mission</h2>
              </div>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E92247] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E92247]/10 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#E92247]" />
                </div>
                <h2 className="text-2xl font-serif text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be one of India's most trusted jewellery brands—delivering impeccable craftsmanship, 
                beautiful design, and heartfelt service—while setting new benchmarks in customer experience, 
                ethical business, and brand growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#E92247] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-10">Our values</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold text-white">Transparency:</span> Honesty in every transaction.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold text-white">Quality:</span> Craftsmanship that speaks for itself.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold text-white">Commitment:</span> Every customer matters.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <p className="text-white/90">
                    <span className="font-semibold text-white">Responsibility:</span> Upholding brand trust in every decision.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src="/images/Muliya-Mascot-1.png"
                  alt="Muliya Mascot"
                  className="w-80 h-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-yellow-300" />
                </div>
                <div className="absolute top-8 -right-8">
                  <Sparkles className="w-6 h-6 text-yellow-200" />
                </div>
                <div className="absolute top-16 -left-4">
                  <Sparkles className="w-5 h-5 text-yellow-200" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#E92247]/10 rounded-full flex items-center justify-center">
                  <HandHeart className="w-6 h-6 text-[#E92247]" />
                </div>
                <h2 className="text-3xl font-serif text-gray-900">Corporate Social Responsibility</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that true prosperity is when communities grow with us. On the occasion of the 
                founder's day celebration, we donate fund to orphan, poor, needy, children and aged out of 
                each and every customer's business. Rs.50/- per gram will keep separately and will be utilized 
                for this purpose.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our CSR efforts include:</h3>
              <ul className="space-y-3">
                {csrPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#E92247] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#E92247]/5 to-pink-50 rounded-3xl p-8 text-center"
            >
              <div className="text-6xl font-serif text-[#E92247] mb-4">81+</div>
              <p className="text-2xl font-medium text-gray-900 mb-2">Years of Excellence</p>
              <p className="text-gray-600">Creating Happiness Since 1944</p>
              <p className="text-gray-500 text-sm mt-6">
                A legacy built on trust, purity, and craftsmanship. Now redefining elegance across 
                generations—with gold, diamonds, silver and more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E92247]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">81+</div>
              <p className="text-white/80">Years of Heritage</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">7</div>
              <p className="text-white/80">Showrooms</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">10K</div>
              <p className="text-white/80">Sq. Ft. Flagship</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-serif text-white mb-2">3</div>
              <p className="text-white/80">Generations</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
