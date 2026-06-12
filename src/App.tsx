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
  Smartphone,
  Award,
  ExternalLink,
  ArrowRight,
  Target,
  Heart,
} from 'lucide-react';
import { motion } from 'motion/react';

/* ─── Announcement Bar ─── */
function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-black py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hidow-blue/20 to-transparent" />
      <span className="relative">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-hidow-blue animate-pulse" />
        Recovery &amp; Wellness Technology · Live Demos at Our Orlando Stand
        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-hidow-blue animate-pulse" />
      </span>
    </div>
  );
}

/* ─── Navigation ─── */
function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
      <AnnouncementBar />
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between gap-4 md:h-32">
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/assets/images/impact-labs-logo.png"
            alt="Impact Labs Recovery & Wellness"
            className="h-20 w-auto sm:h-24 md:h-28"
          />
        </a>
        <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
          <a href="/catalog.html" className="transition-colors duration-300 hover:text-white md:hidden">
            Catalog
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="transition-colors duration-300 hover:text-white">
              Why Impact Labs
            </a>
            <a href="/catalog.html" className="transition-colors duration-300 hover:text-white">
              Catalog
            </a>
            <a href="#location" className="transition-colors duration-300 hover:text-white">
              Visit Our Stand
            </a>
          </div>
        </div>
        <a
          href="/catalog.html"
          className="group relative overflow-hidden bg-hidow-blue px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,174,239,0.4)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)' }}
        >
          Shop Now
        </a>
      </div>
    </nav>
  );
}

/* ─── Footer ─── */
function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-hidow-blue/[0.03] to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/assets/images/impact-labs-logo.png"
            alt="Impact Labs Recovery & Wellness"
            className="h-20 w-auto sm:h-24 md:h-28"
          />
        </a>
        <p className="text-xs text-white/30 tracking-wider">
          &copy; {new Date().getFullYear()} Impact Labs Recovery &amp; Wellness. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-white/25">
          <a href="#" className="transition-colors hover:text-hidow-blue">Privacy</a>
          <a href="#" className="transition-colors hover:text-hidow-blue">Terms</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Stat Counter Component ─── */
function StatBlock({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="text-3xl font-black lg:text-5xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
        {label}
      </p>
    </motion.div>
  );
}

/* ─── Main App ─── */
export default function App() {
  const benefits = [
    {
      title: 'Real-World Recovery',
      desc: 'From athletes to people who work long shifts, our percussion technology helps reduce soreness and restore comfort so you can keep moving.',
      icon: <Activity size={24} />,
      accent: 'hidow-blue',
    },
    {
      title: 'Performance, Not Just Relaxation',
      desc: 'Deep-tissue percussion helps improve circulation, release tight muscle knots, and support better mobility and range of motion.',
      icon: <Zap size={24} />,
      accent: 'impact-cyan',
    },
    {
      title: 'Accessible Pro-Level Care',
      desc: 'Enjoy professional-grade muscle recovery at home without expensive clinic visits or complicated equipment.',
      icon: <Smartphone size={24} />,
      accent: 'impact-red',
    },
  ];

  const products = [
    {
      name: 'Impact Labs Massage Gun',
      category: 'Percussion Massager',
      price: '$399.00',
      image: '/assets/images/massage-gun-1.jpg',
      badge: 'FLAGSHIP',
    },
    {
      name: 'Pro Gun Mini',
      category: 'Compact Massager',
      price: '$149.99',
      image: '/assets/images/pro-gun-1.jpg',
      badge: 'BEST SELLER',
    },
    {
      name: 'HiDow XPDS 18',
      category: 'TENS/EMS Device',
      price: '$499.99',
      image: '/assets/images/Tens-pad18-1.jpg',
      badge: 'PRO',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden selection:bg-hidow-blue/30">
      <SiteNav />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient glows */}
        <div className="absolute -right-60 top-1/3 h-[600px] w-[600px] rounded-full bg-hidow-blue/[0.08] blur-[150px]" />
        <div className="absolute -left-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-impact-red/[0.05] blur-[120px]" />
        {/* Vertical accent lines */}
        <div className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-hidow-blue/20 to-transparent" style={{ left: '8%' }} />
        <div className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" style={{ left: '92%' }} />

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center pt-40 pb-24 lg:pt-44 lg:pb-32">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-hidow-blue" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-hidow-blue flex items-center gap-2">
                <ShieldCheck size={12} />
                Recovery &amp; Wellness Technology
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.88] mb-8">
              Accelerate
              <br />
              Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-hidow-blue via-impact-cyan to-hidow-blue bg-clip-text text-transparent">
                  Recovery.
                </span>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-hidow-blue/60 to-transparent" />
              </span>
            </h1>

            <p className="text-base lg:text-lg text-white/40 max-w-md leading-relaxed mb-6">
              Professional percussion therapy designed to relieve muscle tension,
              reduce soreness, and improve mobility — anytime, anywhere.
            </p>

            <div className="space-y-1 mb-10">
              {['Recover faster.', 'Move better.', 'Perform stronger.'].map((text, i) => (
                <motion.p
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-2 text-sm font-semibold text-white/70"
                >
                  <span className="h-[3px] w-[3px] rounded-full bg-hidow-blue" />
                  {text}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/catalog.html"
                className="group/btn relative flex items-center justify-center gap-2.5 overflow-hidden bg-hidow-blue px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.35)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 95% 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
                <span className="relative flex items-center gap-2">
                  Shop Now
                  <ExternalLink size={14} />
                </span>
              </a>
              <a
                href="#benefits"
                className="flex items-center justify-center gap-2 border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-hidow-blue/40 hover:text-hidow-blue"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right — Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Dramatic glow behind image */}
            <div className="absolute -inset-10 bg-hidow-blue/[0.08] blur-[80px] rounded-full" />

            {/* Image container with angular clip */}
            <div
              className="relative overflow-hidden border border-white/[0.08]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)' }}
            >
              <img
                src="/impact-labs-hero-2.jpg"
                alt="Impact Labs Percussion Massage Gun"
                className="relative w-full h-auto"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-hidow-blue via-impact-cyan to-transparent" />
            </div>

            {/* Floating specs badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 border border-white/[0.08] bg-zinc-950/90 backdrop-blur-xl px-5 py-4"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-hidow-blue mb-1">
                Pro-grade
              </p>
              <p className="text-lg font-black">6h Battery</p>
              <p className="text-[10px] text-white/30">Brushless motor</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll</span>
          <motion.div
            className="h-8 w-px bg-gradient-to-b from-hidow-blue/50 to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="relative border-y border-white/[0.06] bg-black px-6 py-16">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBlock value="5+" label="Devices" delay={0} />
          <StatBlock value="20+" label="Intensity levels" delay={0.1} />
          <StatBlock value="6h" label="Battery life" delay={0.2} />
          <StatBlock value="100%" label="Satisfaction" delay={0.3} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY IMPACT LABS — Bento Grid
      ═══════════════════════════════════════════ */}
      <section id="benefits" className="relative py-24 lg:py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] bg-hidow-blue/[0.04] blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-hidow-blue" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-hidow-blue">
                Why choose us
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black leading-[0.9]">
              Built for{' '}
              <span className="italic bg-gradient-to-r from-hidow-blue to-impact-cyan bg-clip-text text-transparent">
                real life.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-white/35 leading-relaxed">
              Recovery technology that helps your body perform at its best — whether you're training hard,
              on your feet all day, or simply dealing with everyday muscle tension.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10 transition-all duration-500 hover:border-hidow-blue/20 hover:bg-white/[0.04]"
              >
                {/* Top line on hover */}
                <div className="absolute left-0 top-0 z-10 h-[2px] w-0 bg-gradient-to-r from-hidow-blue via-impact-cyan to-hidow-blue transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className={`mb-8 flex h-14 w-14 items-center justify-center border border-white/[0.08] text-${benefit.accent} transition-all duration-500 group-hover:border-hidow-blue/30 group-hover:shadow-[0_0_25px_rgba(0,174,239,0.1)]`}>
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-black mb-4 leading-tight">{benefit.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{benefit.desc}</p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-white/[0.04] transition-colors duration-500 group-hover:border-hidow-blue/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PRODUCTS SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 bg-hidow-blue/[0.04] blur-[140px]" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-impact-red" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-impact-red">
                  Featured
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black leading-[0.9]">
                Our{' '}
                <span className="italic">devices.</span>
              </h2>
            </div>
            <a
              href="/catalog.html"
              className="group/link flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-hidow-blue"
            >
              View full catalog
              <ChevronRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </motion.div>

          {/* Product showcase grid */}
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product, i) => (
              <motion.a
                key={i}
                href="/catalog.html"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover="hover"
                className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-hidow-blue/30"
              >
                {/* Outer glow */}
                <motion.div
                  className="absolute -inset-px opacity-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,174,239,0.3) 0%, rgba(0,174,239,0) 50%, rgba(232,50,74,0.15) 100%)',
                  }}
                  variants={{ hover: { opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                  {/* Badge */}
                  <div
                    className="absolute left-0 top-6 z-20 bg-hidow-blue px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-black"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0 100%)' }}
                  >
                    {product.badge}
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/[0.04] to-transparent">
                    <motion.div
                      className="absolute left-0 top-0 z-10 h-[2px] bg-gradient-to-r from-hidow-blue via-impact-cyan to-hidow-blue"
                      initial={{ width: '0%' }}
                      variants={{ hover: { width: '100%' } }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-10"
                      variants={{ hover: { scale: 1.08 } }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-white/[0.06] transition-colors duration-500 group-hover:border-hidow-blue/40" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-hidow-blue/70 mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-black">{product.name}</h3>
                    <div className="mt-4 flex items-end justify-between">
                      <p className="text-2xl font-black text-hidow-blue">{product.price}</p>
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-hidow-blue">
                        Explore
                        <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LOCATION & CONTACT
      ═══════════════════════════════════════════ */}
      <section id="location" className="relative py-24 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-hidow-blue/[0.05] blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-hidow-blue" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-hidow-blue">
                  Visit us
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black leading-[0.9] mb-8">
                Experience it{' '}
                <span className="italic bg-gradient-to-r from-hidow-blue to-impact-cyan bg-clip-text text-transparent">
                  in person.
                </span>
              </h2>

              <p className="text-base text-white/40 leading-relaxed mb-10 max-w-md">
                Want to feel the difference before you buy? Visit our physical stand and get a free
                product demo from our recovery specialists.
              </p>

              {/* Info cards */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 p-5 border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-hidow-blue/20">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-hidow-blue/30 text-hidow-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm">8001 S Orange Blossom Trl</h4>
                    <p className="text-xs text-white/35 mt-1">Orlando, FL 32809 · United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-hidow-blue/20">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-impact-cyan/30 text-impact-cyan">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm">Local Warranty &amp; Support</h4>
                    <p className="text-xs text-white/35 mt-1">On-site technical support and immediate access to replacement parts.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/16892710391?text=Hi%2C%20I%20saw%20the%20Impact%20Labs%20page%20and%20would%20like%20more%20information%20about%20the%20massage%20gun."
                target="_blank"
                rel="noopener noreferrer"
                className="group/wa relative inline-flex items-center justify-center gap-2.5 overflow-hidden bg-[#25D366] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,211,102,0.3)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 95% 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover/wa:translate-x-[100%]" />
                <span className="relative flex items-center gap-2">
                  <MessageCircle size={16} />
                  Message us on WhatsApp
                </span>
              </a>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-hidow-blue/[0.05] blur-[80px] rounded-full" />

              <div
                className="relative overflow-hidden border border-white/[0.08] h-[500px] lg:h-[600px]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}
              >
                <img
                  src="/impact-labs-stand.jpg"
                  alt="Impact Labs Stand"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-hidow-blue via-impact-cyan to-transparent" />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-hidow-blue mb-2">
                    Official Recovery Stand
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-black leading-tight max-w-sm">
                    Relief and recovery, just around the corner.
                  </h3>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-2 top-8 border border-white/[0.08] bg-zinc-950/90 backdrop-blur-xl px-5 py-4"
              >
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.25em] text-impact-cyan">
                  <Target size={12} />
                  Free demos
                </div>
                <p className="mt-1 text-lg font-black">Walk-ins welcome</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-black px-6 py-24 lg:py-32">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-hidow-blue/[0.05] blur-[150px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center border border-hidow-blue/30 text-hidow-blue">
                <Heart size={24} />
              </div>
            </div>

            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl leading-[0.95]">
              Your recovery{' '}
              <span className="italic bg-gradient-to-r from-hidow-blue to-impact-cyan bg-clip-text text-transparent">
                starts now.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/35">
              Join thousands of people who've transformed their recovery routine with Impact Labs.
              Professional-grade devices, real results.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/catalog.html"
                className="group/cta relative flex items-center justify-center gap-2 overflow-hidden bg-hidow-blue px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.35)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 95% 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover/cta:translate-x-[100%]" />
                <span className="relative flex items-center gap-2">
                  Browse catalog
                  <ChevronRight size={14} />
                </span>
              </a>
              <a
                href="#location"
                className="flex items-center justify-center gap-2 border border-white/15 px-10 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-hidow-blue/40 hover:text-hidow-blue"
              >
                Visit our stand
                <MapPin size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
