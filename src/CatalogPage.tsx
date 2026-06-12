import React from 'react';
import { ChevronLeft, ChevronRight, Minus, Plus, ExternalLink, Zap, Shield, Cpu, X, CreditCard, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { catalogProducts, type CatalogProduct } from '../lib/catalog-products';
import { startStripeCheckout } from './lib/checkout';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'percussion', label: 'Percussion' },
  { key: 'tens-ems', label: 'TENS / EMS' },
  { key: 'portable', label: 'Portable' },
] as const;

function formatUsd(amount: number) {
  return `$${amount.toFixed(2)} USD`;
}

/* ─── Announcement Bar ─── */
function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-black py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hidow-blue/20 to-transparent" />
      <span className="relative">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-hidow-blue animate-pulse" />
        Professional recovery technology · Live demos at our Orlando stand
        <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-hidow-blue animate-pulse" />
      </span>
    </div>
  );
}

/* ─── Site Header ─── */
function SiteHeader({
  catalogActive = false,
  onCatalogClick,
}: {
  catalogActive?: boolean;
  onCatalogClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
      <AnnouncementBar />
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 px-6 md:h-32">
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/assets/images/impact-labs-logo.png"
            alt="Impact Labs Recovery & Wellness"
            className="h-20 w-auto sm:h-24 md:h-28"
          />
        </a>
        <div className="flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
          <a
            href="/catalog.html"
            onClick={onCatalogClick}
            className={`md:hidden ${catalogActive ? 'text-hidow-blue' : 'transition-colors duration-300 hover:text-white'}`}
          >
            Catalog
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="/" className="transition-colors duration-300 hover:text-white">
              Home
            </a>
            <a
              href="/catalog.html"
              onClick={onCatalogClick}
              className={catalogActive ? 'text-hidow-blue' : 'transition-colors duration-300 hover:text-white'}
            >
              Catalog
            </a>
            <a href="/#location" className="transition-colors duration-300 hover:text-white">
              Visit Us
            </a>
          </nav>
        </div>
        <a
          href="/catalog.html"
          onClick={onCatalogClick}
          className="group relative overflow-hidden rounded-none bg-hidow-blue px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,174,239,0.4)]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)' }}
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}

/* ─── Site Footer ─── */
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
          <a href="#" className="transition-colors hover:text-hidow-blue">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-hidow-blue">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

type ProductCardProps = {
  product: CatalogProduct;
  index: number;
  isHero: boolean;
  onOpen: (slug: string) => void;
};

/* ─── Glassmorphism Product Card ─── */
function ProductCard({ product, index, isHero, onOpen }: ProductCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(product.slug)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className={`catalog-card group relative overflow-hidden text-left focus:outline-none ${
        isHero ? 'col-span-full' : ''
      }`}
    >
      {/* Outer glow on hover */}
      <motion.div
        className="absolute -inset-px z-0 rounded-none opacity-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,174,239,0.4) 0%, rgba(0,174,239,0) 50%, rgba(232,50,74,0.2) 100%)',
        }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      />

      {/* Card body */}
      <div
        className={`relative z-10 overflow-hidden border border-white/[0.06] bg-white/[0.02] transition-colors duration-500 group-hover:border-hidow-blue/30 group-hover:bg-white/[0.04] ${
          isHero ? 'grid md:grid-cols-2' : ''
        }`}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute left-0 top-6 z-20 bg-hidow-blue px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.3em] text-black"
            style={{ clipPath: 'polygon(0 0, 100% 0, 94% 100%, 0 100%)' }}
          >
            {product.badge}
          </div>
        )}

        {/* Image container */}
        <div className={`relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-transparent ${isHero ? 'aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'}`}>
          {/* Animated top line */}
          <motion.div
            className="absolute left-0 top-0 z-10 h-[2px] bg-gradient-to-r from-hidow-blue via-impact-cyan to-hidow-blue"
            initial={{ width: '0%' }}
            variants={{ hover: { width: '100%' } }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />

          {/* Background glow */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,174,239,0.08) 0%, transparent 70%)',
            }}
            variants={{ hover: { opacity: 1 } }}
            transition={{ duration: 0.6 }}
          />

          {/* Image with zoom */}
          <motion.img
            src={product.images[0]}
            alt={product.title}
            className={`h-full w-full object-contain ${isHero ? 'p-10 md:p-16' : 'p-8'}`}
            variants={{ hover: { scale: 1.08 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-white/[0.06] transition-colors duration-500 group-hover:border-hidow-blue/40" />
        </div>

        {/* Content */}
        <div className={`relative ${isHero ? 'flex flex-col justify-center p-8 md:p-12' : 'p-6'}`}>
          {/* Separator line */}
          {!isHero && (
            <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          )}

          <div className="mb-3 flex items-center gap-3">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-hidow-blue/70">
              {product.category === 'percussion' ? 'Percussion' : product.category === 'tens-ems' ? 'TENS/EMS' : 'Portable'}
            </span>
            <span className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/20">
              In stock
            </span>
          </div>

          <h3 className={`font-black leading-tight ${isHero ? 'text-2xl md:text-4xl' : 'text-lg'}`}>
            {product.title}
          </h3>

          {isHero && (
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {product.description}
            </p>
          )}

          {product.highlights && (
            <ul className={`mt-4 space-y-1.5 ${isHero ? '' : 'hidden md:block'}`}>
              {product.highlights.slice(0, isHero ? 3 : 2).map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-white/40">
                  <span className="h-[3px] w-[3px] rounded-full bg-hidow-blue" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className={`flex items-end justify-between ${isHero ? 'mt-8' : 'mt-5'}`}>
            <p className={`font-black text-white ${isHero ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
              <span className="text-hidow-blue">{formatUsd(product.price)}</span>
            </p>

            <motion.span
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-hidow-blue"
              variants={{ hover: { x: 4 } }}
              transition={{ duration: 0.3 }}
            >
              Explore
              <ChevronRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ─── Quick View Modal ─── */
function QuickViewModal({
  product,
  onClose,
}: {
  product: CatalogProduct;
  onClose: () => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [checkoutLoading, setCheckoutLoading] = React.useState(false);
  const [checkoutError, setCheckoutError] = React.useState<string | null>(null);

  const handleStripeCheckout = async () => {
    setCheckoutError(null);
    setCheckoutLoading(true);
    try {
      await startStripeCheckout(product.slug, quantity);
    } catch (err) {
      setCheckoutError(
        err instanceof Error
          ? err.message
          : 'No se pudo iniciar el pago. Comprueba .env.local y reinicia npm run dev.',
      );
      setCheckoutLoading(false);
    }
  };

  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [product.id]);

  const goToPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? product.images.length - 1 : current - 1,
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((current) =>
      current === product.images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative z-10 max-h-[90vh] w-full max-w-6xl overflow-y-auto border border-white/[0.08] bg-zinc-950/95 backdrop-blur-2xl"
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-hidow-blue to-transparent" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-6 z-20 flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-hidow-blue/50 hover:text-hidow-blue hover:shadow-[0_0_20px_rgba(0,174,239,0.15)]"
        >
          <X size={18} />
        </button>

        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          {/* Image section */}
          <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.03] to-transparent p-8 lg:p-16">
            {/* Dramatic radial glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{ background: 'radial-gradient(ellipse at center, rgba(0,174,239,0.12) 0%, transparent 60%)' }}
            />

            {/* Main image */}
            <motion.div
              className="relative z-10"
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -inset-8 rounded-full bg-hidow-blue/5 blur-3xl" />
              <img
                src={product.images[activeImageIndex]}
                alt={product.title}
                className="relative max-h-[360px] w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,174,239,0.15)]"
              />
            </motion.div>

            {/* Image nav */}
            {product.images.length > 1 && (
              <div className="relative z-10 mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={goToPreviousImage}
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-all hover:border-hidow-blue/50 hover:text-hidow-blue"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-14 w-14 overflow-hidden border p-1 transition-all duration-300 ${
                        index === activeImageIndex
                          ? 'border-hidow-blue bg-hidow-blue/10 shadow-[0_0_15px_rgba(0,174,239,0.2)]'
                          : 'border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <img src={image} alt="" className="pointer-events-none h-full w-full object-contain" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goToNextImage}
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-all hover:border-hidow-blue/50 hover:text-hidow-blue"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Info section */}
          <div className="flex flex-col justify-center border-l border-white/[0.06] p-8 lg:p-12">
            <span className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-hidow-blue">
              <span className="h-px w-6 bg-hidow-blue" />
              Impact Labs Recovery
            </span>

            <h2 className="text-3xl font-black leading-[0.95] lg:text-4xl xl:text-5xl">
              {product.title}
            </h2>

            <p className="mt-6 text-3xl font-black">
              <span className="bg-gradient-to-r from-hidow-blue to-impact-cyan bg-clip-text text-transparent">
                {formatUsd(product.price)}
              </span>
            </p>

            <p className="mt-6 text-sm leading-relaxed text-white/50">{product.description}</p>

            {/* Highlights bento */}
            {product.highlights && (
              <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {product.highlights.map((item, i) => {
                  const icons = [<Zap key="z" size={14} />, <Shield key="s" size={14} />, <Cpu key="c" size={14} />];
                  return (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 border border-white/[0.06] bg-white/[0.02] px-3 py-3 text-xs text-white/60"
                    >
                      <span className="text-hidow-blue">{icons[i % 3]}</span>
                      {item}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">Quantity</p>
              <div className="inline-flex items-center border border-white/10">
                <button
                  type="button"
                  onClick={() => setQuantity((c) => Math.max(1, c - 1))}
                  className="flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:bg-white/[0.05] hover:text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="flex h-10 w-12 items-center justify-center border-l border-r border-white/10 text-sm font-bold">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((c) => c + 1)}
                  className="flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:bg-white/[0.05] hover:text-white"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {checkoutError && (
              <p className="mt-6 text-xs text-impact-red" role="alert">
                {checkoutError}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleStripeCheckout}
                disabled={checkoutLoading}
                className="group/btn relative flex w-full items-center justify-center gap-2.5 overflow-hidden bg-hidow-blue px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.35)] disabled:cursor-wait disabled:opacity-70"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 95% 100%, 0 100%)' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] transition-transform duration-700 group-hover/btn:translate-x-[100%]" />
                <span className="relative flex items-center gap-2">
                  {checkoutLoading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Redirecting…
                    </>
                  ) : (
                    <>
                      <CreditCard size={14} />
                      Buy with card
                    </>
                  )}
                </span>
              </button>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex flex-1 items-center justify-center border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-hidow-blue/40 hover:text-hidow-blue"
                >
                  Continue exploring
                </button>
              </div>
              <p className="text-center text-[10px] text-white/25">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Catalog Page ─── */
function CheckoutSuccessBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-hidow-blue/30 bg-hidow-blue/10 px-6 py-4 text-center text-sm text-white/80"
      role="status"
    >
      <span className="font-semibold text-hidow-blue">Thank you!</span> Your payment was received.
      We&apos;ll confirm your order by email shortly.{' '}
      <button
        type="button"
        onClick={onDismiss}
        className="ml-2 text-[11px] font-bold uppercase tracking-wider text-white/50 underline-offset-2 hover:text-white hover:underline"
      >
        Dismiss
      </button>
    </motion.div>
  );
}

export default function CatalogPage() {
  const [selectedProductSlug, setSelectedProductSlug] = React.useState<string | null>(null);
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [quickViewProduct, setQuickViewProduct] = React.useState<CatalogProduct | null>(null);
  const [checkoutSuccess, setCheckoutSuccess] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('checkout') === 'success') {
      setCheckoutSuccess(true);
      const url = new URL(window.location.href);
      url.searchParams.delete('checkout');
      url.searchParams.delete('session_id');
      window.history.replaceState({}, '', url);
    }
    const productSlug = params.get('product');
    if (productSlug) {
      const found = catalogProducts.find((p) => p.slug === productSlug);
      if (found) setQuickViewProduct(found);
    }
    setSelectedProductSlug(productSlug);

    const handlePopState = () => {
      const updatedParams = new URLSearchParams(window.location.search);
      const slug = updatedParams.get('product');
      setSelectedProductSlug(slug);
      if (slug) {
        const found = catalogProducts.find((p) => p.slug === slug);
        if (found) setQuickViewProduct(found);
      } else {
        setQuickViewProduct(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openProduct = (slug: string) => {
    const found = catalogProducts.find((p) => p.slug === slug);
    if (found) {
      setQuickViewProduct(found);
      setSelectedProductSlug(slug);
      const url = new URL(window.location.href);
      url.searchParams.set('product', slug);
      window.history.pushState({}, '', url);
    }
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setSelectedProductSlug(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('product');
    window.history.pushState({}, '', url);
  };

  const filteredProducts = activeFilter === 'all'
    ? catalogProducts
    : catalogProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-hidow-blue/30">
      <SiteHeader catalogActive />
      {checkoutSuccess && (
        <CheckoutSuccessBanner onDismiss={() => setCheckoutSuccess(false)} />
      )}

      <main>
        {/* ─── Hero Banner ─── */}
        <section className="relative overflow-hidden px-6 py-20 lg:py-32">
          {/* Background effects */}
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-hidow-blue/[0.07] blur-[120px]" />
          <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-impact-red/[0.05] blur-[100px]" />

          {/* Diagonal accent lines */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-hidow-blue/20 to-transparent" style={{ left: '10%' }} />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" style={{ left: '90%' }} />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-hidow-blue" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-hidow-blue">
                  Official catalog
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.9] sm:text-6xl lg:text-[5.5rem]">
                Recovery
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-hidow-blue via-impact-cyan to-hidow-blue bg-clip-text text-transparent">
                    without limits.
                  </span>
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-gradient-to-r from-hidow-blue/60 to-transparent" />
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/40">
                Unlock your body&apos;s potential with advanced percussion therapy and professional
                electrotherapy. Built for athletes, professionals, and anyone chasing real performance.
              </p>

              <div className="mt-8 flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-hidow-blue/30 text-hidow-blue">
                    <Zap size={16} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/30">Products</p>
                    <p className="text-lg font-black">{catalogProducts.length}</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center border border-impact-red/30 text-impact-red">
                    <Shield size={16} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/30">Warranty</p>
                    <p className="text-lg font-black">Local</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Filter Pills + Product Grid ─── */}
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-4">
          {/* Floating filter bar */}
          <motion.div
            className="sticky top-[9.5rem] z-30 mb-12 md:top-[10.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-3 border border-white/[0.06] bg-black/70 px-5 py-4 backdrop-blur-xl">
              <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">
                Filter
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveFilter(cat.key)}
                  className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                    activeFilter === cat.key
                      ? 'bg-hidow-blue text-black shadow-[0_0_20px_rgba(0,174,239,0.25)]'
                      : 'border border-white/[0.08] text-white/40 hover:border-white/20 hover:text-white/70'
                  }`}
                  style={
                    activeFilter === cat.key
                      ? { clipPath: 'polygon(0 0, 100% 0, 100% 65%, 94% 100%, 0 100%)' }
                      : undefined
                  }
                >
                  {cat.label}
                </button>
              ))}

              <span className="ml-auto text-[10px] font-medium text-white/20">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </span>
            </div>
          </motion.div>

          {/* Editorial grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProducts.map((product, index) => (
                <React.Fragment key={product.id}>
                  <ProductCard
                    product={product}
                    index={index}
                    isHero={index === 0}
                    onOpen={openProduct}
                  />
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ─── Bottom CTA Section ─── */}
        <section className="relative overflow-hidden border-t border-white/[0.06] bg-black px-6 py-20">
          <div className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-hidow-blue/[0.04] blur-[120px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-black italic sm:text-4xl lg:text-5xl">
                Committed to your{' '}
                <span className="bg-gradient-to-r from-hidow-blue to-impact-cyan bg-clip-text text-transparent">
                  recovery
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/35">
                Innovative, elegant solutions that inspire resilience and wellness. Visit our
                Orlando stand to try the products before you buy.
              </p>
              <a
                href="/#location"
                className="group/cta mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-hidow-blue hover:shadow-[0_0_40px_rgba(0,174,239,0.3)]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 95% 100%, 0 100%)' }}
              >
                Visit our stand
                <ChevronRight size={16} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <QuickViewModal product={quickViewProduct} onClose={closeQuickView} />
        )}
      </AnimatePresence>
    </div>
  );
}
