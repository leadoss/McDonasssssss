import { motion } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, MapPin, Smartphone, ChevronRight, Star, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';

// --- Components ---

import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="w-12 h-12 bg-mcd-yellow rounded-full flex items-center justify-center p-1">
             <svg viewBox="0 0 24 24" className="fill-mcd-red w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
             </svg>
          </Link>
          <nav className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wider">
            <Link to="/menu" className="hover:text-mcd-red transition-colors">Menu</Link>
            <Link to="/deals" className="hover:text-mcd-red transition-colors">Deals</Link>
            <Link to="/locations" className="hover:text-mcd-red transition-colors">Locations</Link>
            <Link to="/app" className="hover:text-mcd-red transition-colors">Mobile App</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 font-bold text-mcd-red hover:underline">
            <MapPin size={18} />
            <span>Find a McDonald's</span>
          </button>
          <button className="btn-primary py-2 px-6 text-sm">
            Order Now
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden bg-mcd-gray">
    <div className="section-padding flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-8 text-center md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-mcd-yellow text-mcd-red font-black px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4">
            New & Improved
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-mcd-black">
            Your Favorites. <br />
            <span className="text-mcd-red">Faster Than Ever.</span>
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-lg mx-auto md:mx-0">
            Order ahead, skip the line, and enjoy McDonald’s your way. Fresh, hot, and ready when you are.
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="btn-primary">Order Now</button>
          <button className="btn-outline">View Menu</button>
        </div>
      </div>
      <div className="flex-1 relative">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" 
            alt="Big Mac Combo" 
            className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Ready in</p>
              <p className="text-lg font-black text-mcd-black">5 Minutes</p>
            </div>
          </div>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mcd-yellow/20 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="bg-white border-y border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black">69M+</span>
        <span className="text-xs font-bold uppercase leading-tight">Daily <br />Customers</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black">100+</span>
        <span className="text-xs font-bold uppercase leading-tight">Countries <br />Served</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black">38K+</span>
        <span className="text-xs font-bold uppercase leading-tight">Global <br />Locations</span>
      </div>
      <div className="flex items-center gap-2">
        <Star className="fill-mcd-yellow text-mcd-yellow" size={24} />
        <span className="text-2xl font-black">4.8/5</span>
        <span className="text-xs font-bold uppercase leading-tight">App <br />Rating</span>
      </div>
    </div>
  </section>
);

const Deals = () => (
  <section id="deals" className="section-padding">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
      <div>
        <h2 className="text-4xl font-black mb-2">Exclusive Deals</h2>
        <p className="text-gray-500">Save big on your favorites with these limited-time offers.</p>
      </div>
      <button className="text-mcd-red font-bold flex items-center gap-1 hover:underline">
        See All Deals <ChevronRight size={20} />
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "$1 Any Size Coffee", desc: "Start your morning right with any size hot or iced coffee.", img: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&w=400&q=80" },
        { title: "Free Fries Friday", desc: "Get a free medium Fries with any $1 minimum purchase in the app.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
        { title: "BOGO Big Mac", desc: "Buy one Big Mac, get one for just $0.50. Limited time only.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" }
      ].map((deal, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
        >
          <div className="h-48 overflow-hidden">
            <img src={deal.img} alt={deal.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
            <p className="text-gray-500 text-sm mb-6">{deal.desc}</p>
            <button className="btn-secondary w-full py-3 text-sm">Get the Deal</button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="bg-mcd-black text-white">
    <div className="section-padding flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-black">Hungry & Busy? <br /><span className="text-mcd-yellow">We've Got You.</span></h2>
        <p className="text-gray-400 text-lg">
          Life moves fast. You shouldn't have to slow down for a great meal. Whether you're between meetings, picking up the kids, or craving a late-night snack, we deliver consistency and speed every single time.
        </p>
        <ul className="space-y-4">
          {[
            "Zero wait time with Mobile Order & Pay",
            "Curbside pickup or McDelivery available",
            "Consistent taste you know and love"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-mcd-yellow" />
              <span className="font-bold">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" className="rounded-2xl h-64 w-full object-cover" referrerPolicy="no-referrer" />
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" className="rounded-2xl h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="section-padding text-center">
    <h2 className="text-4xl font-black mb-16">How to Get Your Fix</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { step: "01", title: "Browse Menu", desc: "Explore our full range of classics and new favorites." },
        { step: "02", title: "Order in Seconds", desc: "Customize your meal exactly how you like it." },
        { step: "03", title: "Pickup or Delivery", desc: "Choose the most convenient way to get your food." },
        { step: "04", title: "Enjoy Instantly", desc: "Hot, fresh, and ready to satisfy your cravings." }
      ].map((item, i) => (
        <div key={i} className="relative p-8 rounded-3xl bg-mcd-gray hover:bg-mcd-yellow/10 transition-colors group">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mcd-yellow text-mcd-red font-black px-4 py-1 rounded-full text-sm">
            {item.step}
          </span>
          <h3 className="text-xl font-bold mb-4 mt-4">{item.title}</h3>
          <p className="text-gray-500 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const MenuHighlights = () => (
  <section id="menu" className="section-padding bg-mcd-gray/50">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4">Fan Favorites</h2>
      <p className="text-gray-500">The icons that made us famous.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "Big Mac", price: "$5.99", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
        { name: "Quarter Pounder", price: "$6.49", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80" },
        { name: "McNuggets (10pc)", price: "$4.99", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=300&q=80" },
        { name: "World Famous Fries", price: "$2.99", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80" },
        { name: "Egg McMuffin", price: "$3.99", img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=300&q=80" },
        { name: "McFlurry", price: "$3.49", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" },
        { name: "Filet-O-Fish", price: "$4.49", img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=300&q=80" },
        { name: "Happy Meal", price: "$4.99", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=300&q=80" }
      ].map((item, i) => (
        <div key={i} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition-all text-center group cursor-pointer">
          <div className="h-32 mb-4 overflow-hidden rounded-2xl">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
          </div>
          <h3 className="font-bold text-sm md:text-base">{item.name}</h3>
          <p className="text-mcd-red font-black mt-1">{item.price}</p>
        </div>
      ))}
    </div>
    <div className="mt-12 text-center">
      <button className="btn-outline">Explore Full Menu</button>
    </div>
  </section>
);

const AppPromotion = () => (
  <section id="app" className="section-padding">
    <div className="bg-mcd-yellow rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
      <div className="flex-1 space-y-8 z-10">
        <h2 className="text-4xl md:text-6xl font-black text-mcd-red leading-tight">
          Unlock Rewards <br />With Every Bite.
        </h2>
        <p className="text-mcd-red/80 text-xl font-medium">
          Download the McDonald's app to earn points on every order and redeem them for free food. Plus, get exclusive deals you won't find anywhere else.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-mcd-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:opacity-90 transition-all">
            <Smartphone />
            <div className="text-left">
              <p className="text-[10px] uppercase opacity-60">Download on the</p>
              <p className="text-lg leading-none">App Store</p>
            </div>
          </button>
          <button className="bg-mcd-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:opacity-90 transition-all">
            <Smartphone />
            <div className="text-left">
              <p className="text-[10px] uppercase opacity-60">Get it on</p>
              <p className="text-lg leading-none">Google Play</p>
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <motion.div
           animate={{ y: [0, -20, 0] }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80" 
            alt="App Interface" 
            className="w-64 md:w-80 mx-auto rounded-[2.5rem] shadow-2xl border-8 border-mcd-black"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-mcd-red/10 rounded-full blur-3xl" />
      </div>
    </div>
  </section>
);

const TrustQuality = () => (
  <section className="section-padding bg-white">
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <img 
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80" 
          alt="Fresh Ingredients" 
          className="rounded-[3rem] shadow-xl"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-1 space-y-8">
        <h2 className="text-4xl font-black">Quality You Can Trust.</h2>
        <div className="space-y-6">
          {[
            { title: "100% Real Beef", desc: "Our patties are made with 100% pure beef with no fillers or extenders." },
            { title: "Freshly Prepared", desc: "Your meal is made to order, ensuring it's hot and fresh every time." },
            { title: "Global Standards", desc: "We maintain the highest food safety and quality standards worldwide." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-mcd-yellow/20 p-3 rounded-2xl h-fit">
                <CheckCircle2 className="text-mcd-red" />
              </div>
              <div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-mcd-gray/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How do I order for delivery?", a: "You can order delivery directly through the McDonald's app or via our partners like Uber Eats and DoorDash." },
            { q: "Is the full menu available all day?", a: "Most items are available during regular hours, but breakfast items are typically served until 10:30 AM or 11:00 AM depending on location." },
            { q: "Where can I find nutritional information?", a: "Detailed nutritional information for all our menu items is available on our website and in the app under each product description." },
            { q: "How do I earn rewards points?", a: "Simply scan your app at the kiosk or drive-thru, or place a Mobile Order & Pay to automatically earn points on every dollar spent." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button 
                className="w-full p-6 text-left font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <ChevronRight className={cn("transition-transform", openIndex === i && "rotate-90")} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-500 border-t border-gray-50">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="section-padding text-center">
    <div className="bg-mcd-red rounded-[3rem] p-12 md:p-24 text-white space-y-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-black">Ready to Eat?</h2>
        <p className="text-xl opacity-80 max-w-xl mx-auto mt-4">
          Don't wait another minute. Your favorites are just a few taps away.
        </p>
        <div className="mt-12">
          <button className="btn-secondary px-12 py-6 text-xl">
            Order Your Meal Now
          </button>
        </div>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-black rotate-12">M</div>
        <div className="absolute bottom-10 right-10 text-9xl font-black -rotate-12">M</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-mcd-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1 space-y-6">
          <div className="w-12 h-12 bg-mcd-yellow rounded-full flex items-center justify-center p-1">
             <svg viewBox="0 0 24 24" className="fill-mcd-red w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
             </svg>
          </div>
          <p className="text-gray-400 text-sm">
            Serving smiles and delicious meals since 1955. Fast, affordable, and always consistent.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-mcd-yellow">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Deals</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-mcd-yellow">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Franchising</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-mcd-yellow">Legal</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
        <p>© 2026 McDonald's. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page ---

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <Deals />
        <ProblemSolution />
        <HowItWorks />
        <MenuHighlights />
        <AppPromotion />
        <TrustQuality />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <button className="btn-primary w-full py-4 shadow-2xl flex items-center justify-center gap-2">
          <ShoppingBag size={20} />
          Order Now
        </button>
      </div>
    </div>
  );
}
