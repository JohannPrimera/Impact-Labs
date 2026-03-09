/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  MapPin, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle2, 
  Smartphone,
  Battery,
  Award,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

const HIDOW_BLUE = "#00AEEF";

export default function App() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/assets/images/impact-labs-logo.png"
              alt="Impact Labs Recovery & Wellness"
              className="h-50 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
            <a href="#benefits" className="hover:text-hidow-blue transition-colors">Why Impact Labs</a>
            <a href="/catalog.html" className="hover:text-hidow-blue transition-colors">Catalog</a>
            <a href="#location" className="hover:text-hidow-blue transition-colors">Visit Our Stand</a>
          </div>
          <a 
            href="/catalog.html"
            className="bg-hidow-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-hidow-blue transition-all"
          >
            SHOP NOW
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-hidow-blue/10 rounded-full text-hidow-blue font-bold text-xs uppercase tracking-widest mb-6">
              <ShieldCheck size={16} /> Recovery &amp; Wellness Technology
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8">
              Accelerate Your<br />
              <span className="text-hidow-blue">Muscle Recovery.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-lg leading-relaxed">
              Professional percussion therapy designed to relieve muscle tension, reduce soreness, and improve mobility — anytime, anywhere.
            </p>
            <div className="space-y-1 text-gray-800 font-semibold mb-8">
              <p>Recover faster.</p>
              <p>Move better.</p>
              <p>Perform stronger.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.amazon.com/s?k=impact+labs+massage+gun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Shop Now <ExternalLink size={18} />
              </a>
              <button onClick={scrollToCatalog} className="btn-secondary">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-hidow-blue/20 blur-3xl rounded-full" />
            <img 
              src="/impact-labs-hero-2.jpg"
              alt="Impact Labs Percussion Massage Gun" 
              className="relative w-full h-auto rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Impact Labs Section */}
      <section id="benefits" className="py-24 bg-hidow-dark text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 italic">Why Impact Labs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Recovery technology designed for real life. We build powerful tools that help your body perform at its best — whether you are training hard, on your feet all day, or simply dealing with everyday muscle tension.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-World Recovery",
                desc: "From athletes to people who work long shifts, our percussion technology helps reduce soreness and restore comfort so you can keep moving.",
                icon: <Activity className="text-hidow-blue" size={32} />
              },
              {
                title: "Performance, Not Just Relaxation",
                desc: "Deep-tissue percussion helps improve circulation, release tight muscle knots, and support better mobility and range of motion.",
                icon: <Zap className="text-hidow-blue" size={32} />
              },
              {
                title: "Accessible Pro-Level Care",
                desc: "Enjoy professional-grade muscle recovery at home without expensive clinic visits or complicated equipment.",
                icon: <Smartphone className="text-hidow-blue" size={32} />
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Location & Contact Section */}
      <section id="location" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-8">Visit Us at Our Stand</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Want to feel the difference before you buy? Visit our physical stand and get a free product demo from our recovery specialists.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-hidow-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-hidow-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">8001 S Orange Blossom Trl</h4>
                    <p className="text-gray-500">Orlando, FL  32809
                    United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-hidow-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Award className="text-hidow-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Local Warranty & Support</h4>
                    <p className="text-gray-500">On-site technical support and immediate access to replacement parts.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/16892710391?text=Hi%2C%20I%20saw%20the%20Impact%20Labs%20page%20and%20would%20like%20more%20information%20about%20the%20massage%20gun."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg"
                >
                  <MessageCircle size={20} /> Message us on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="/impact-labs-stand.jpg"
                alt="Impact Labs Stand"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <p className="font-bold uppercase tracking-widest text-sm mb-2">Official Recovery Stand</p>
                  <h3 className="text-2xl font-black">Relief and recovery, just around the corner.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
<footer className="py-12 bg-gray-100 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
    
    {/* Nuevo logo agregado aquí */}
    <a href="/" className="flex items-center">
      <img
        src="/assets/images/impact-labs-logo.png"
        alt="Impact Labs Recovery & Wellness"
        className="h-50 w-auto"
      />
    </a>

    <p className="text-gray-500 text-sm">
      © 2024 Impact Labs Recovery &amp; Wellness. All rights reserved.
    </p>
    
    <div className="flex gap-6 text-gray-400">
      <a href="#" className="hover:text-hidow-blue transition-colors">Privacidad</a>
      <a href="#" className="hover:text-hidow-blue transition-colors">Términos</a>
    </div>
  </div>
</footer>
    </div>
  );
}
