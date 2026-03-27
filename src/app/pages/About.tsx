import { motion } from "motion/react";
import { Award, Users, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We craft each piece with unmatched precision and quality",
  },
  {
    icon: Shield,
    title: "Trust",
    description: "BIS certified and 100% authentic jewelry",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every design tells a story of dedication and artistry",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our greatest achievement",
  },
];

const milestones = [
  { year: "1985", event: "Muliya was founded in Mumbai" },
  { year: "1995", event: "Expanded to 5 stores across Maharashtra" },
  { year: "2005", event: "Introduced Gold Savings Scheme" },
  { year: "2015", event: "Launched exclusive diamond collection" },
  { year: "2020", event: "Digital transformation with online store" },
  { year: "2026", event: "Serving 100,000+ satisfied customers" },
];

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772785952082-75941e8f99d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBpbnRlcmlvciUyMGVsZWdhbnR8ZW58MXx8fHwxNzczODIzMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Muliya Store"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700">
              Four decades of excellence in crafting timeless jewelry that celebrates
              life's precious moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-6">
                Since 1985
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Muliya was founded with a vision to bring the finest gold and diamond
                  jewelry to discerning customers who value authenticity, craftsmanship,
                  and timeless elegance.
                </p>
                <p>
                  What started as a small family-owned jewelry store in Mumbai has grown
                  into a trusted name across India, serving over 100,000 satisfied
                  customers.
                </p>
                <p>
                  Our commitment to excellence remains unchanged. Every piece of jewelry
                  is handcrafted by skilled artisans, using only the finest materials and
                  traditional techniques passed down through generations.
                </p>
                <p>
                  Today, Muliya stands as a symbol of trust, quality, and the celebration
                  of life's most precious moments.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1772442125263-c9dd28bbd938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwY3JhZnRzbWFuJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzM4MjMwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Craftsman at work"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To create exquisite jewelry that celebrates life's most precious
                  moments, while maintaining the highest standards of quality,
                  authenticity, and customer satisfaction. We strive to make luxury
                  accessible and trust our foundation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be India's most trusted and beloved jewelry brand, known for
                  exceptional craftsmanship, innovative designs, and unwavering
                  commitment to customer delight. We envision a future where every
                  family treasures a piece of Muliya.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600">40+ years of excellence and growth</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-amber-600 text-white flex items-center justify-center font-semibold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-serif mb-2">40+</p>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
            <div>
              <p className="text-5xl font-serif mb-2">100K+</p>
              <p className="text-lg opacity-90">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl font-serif mb-2">15</p>
              <p className="text-lg opacity-90">Store Locations</p>
            </div>
            <div>
              <p className="text-5xl font-serif mb-2">10K+</p>
              <p className="text-lg opacity-90">Unique Designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Trust & Certifications
            </h2>
            <p className="text-gray-600">
              Every piece is certified and hallmarked for your assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">BIS Hallmarked</h3>
                <p className="text-gray-600">
                  All gold jewelry is BIS hallmarked ensuring purity
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Award className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">IGI Certified Diamonds</h3>
                <p className="text-gray-600">
                  Diamonds certified by International Gemological Institute
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <Heart className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lifetime Guarantee</h3>
                <p className="text-gray-600">
                  Lifetime exchange and service guarantee on all purchases
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
