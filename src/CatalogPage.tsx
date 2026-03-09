import React from 'react';
import { Zap, ChevronRight, ShieldCheck, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';

const HIDOW_BLUE = '#00AEEF';

const catalogProducts = [
  {
    id: 1,
    title: 'impact labs massage gun',
    price: '$399.99',
    amazonUrl: 'PON_AQUI_LINK_AMAZON_PRODUCTO_1',
    images: [
      '/assets/images/massage-gun-1.jpg',
      //'RUTA_DE_TU_IMAGEN_PRODUCTO_1_2',
      //'RUTA_DE_TU_IMAGEN_PRODUCTO_1_3',
    ],
    description:
      'The Percussion Massage Gun is engineered to deliver powerful deep-tissue relief, helping reduce muscle soreness, improve circulation, and accelerate recovery after intense workouts or long days on your feet..',
  },
  {
    id: 2,
    title: 'Impact Labs Mini Relief',
    price: '$149.99',
    amazonUrl: 'PON_AQUI_LINK_AMAZON_PRODUCTO_2',
    images: [
      '/assets/images/pro-gun-1.jpg',
      '/assets/images/pro-gun-2.jpg',
      '/assets/images/pro-gun-3.jpg',
    ],
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 3,
    title: 'Tens xpd 12',
    price: '$399.99',
    amazonUrl: 'PON_AQUI_LINK_AMAZON_PRODUCTO_3',
    images: [
      '/assets/images/Tens-pad-1.jpg',
      '/assets/images/Tens-pad-2.jpg',
      '/assets/images/Tens-pad-3.jpg',
      
    ],
    description:
      'XPD 12 hits the balance that wired users trust: strong output, smart design, and just the right amount of control. With 12 therapeutic modes (6 TENS, 6 EMS), 20 intensity levels, and dual output ports, it delivers broad, simultaneous relief without overcomplication. You can run four pads at once, with independent intensity control on each side so every session meets your body where it’s at..',
      
  },
  {
    id: 4,
    title: 'Tens xpds 18',
    price: '$499.99',
    amazonUrl: 'PON_AQUI_LINK_AMAZON_PRODUCTO_4',
    images: [
      '/assets/images/Tens-pad18-1.jpg',
      '/assets/images/Tens-pad18-2.jpg',
      '/assets/images/Tens-pad18-3.jpg',
      '/assets/images/Tens-pad18-4.jpg',
      '/assets/images/Tens-pad18-5.png',
    ],
    description:
      'The XPDS 18 is a standout in HiDow’s wired lineup—powerful, versatile, and refreshingly easy to use. With 18 therapy modes (hello, microcurrent and trigger point) and 20 intensity levels, it gives you plenty of ways to fine-tune your recovery. Dual ports let you target multiple areas at once, each with its own settings.',
  },
  {
    id: 5,
    title: 'Hidow spot',
    price: '$179.99',
    amazonUrl: 'PON_AQUI_LINK_AMAZON_PRODUCTO_5',
    images: [
      '/assets/images/hidow-spot-1.jpg',
      '/assets/images/hidow-spot-2.jpg',
      '/assets/images/hidow-spot-3.jpg',
      '/assets/images/hidow-spot-4.jpg',
    ],
    description:
      'Meet the HiDow SPOT: your portable solution for pain relief, relaxation, and recovery. Designed for life on the go, this first-generation Wireless TENS/EMS device delivers effective therapy wherever and whenever you need it. With 4 modes and 20 intensity levels, the SPOT adapts to your needs—from soothing post-workout soreness to easing daily discomfort. Its compact, lightweight design makes it easy to carry and use discreetly at home, in the office, or while traveling. Paired with electrode gel pads, it provides simple, wire-free relief so you can get back to doing what you love, pain-free.',
  },
];

export default function CatalogPage() {
  const [selectedProduct, setSelectedProduct] = React.useState<any | null>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white">
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
            <a href="/" className="hover:text-hidow-blue transition-colors">
              Home
            </a>
            <span className="text-hidow-blue">Product</span>
          </div>
          <a
            href="/catalog.html"
            className="bg-hidow-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-hidow-blue transition-all"
          >
            SHOP NOW
          </a>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />

      {/* Header / Intro */}
      <section className="pt-12 pb-12 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-hidow-blue/10 rounded-full text-hidow-blue font-bold text-xs uppercase tracking-widest mb-4">
              <ShieldCheck size={16} /> Impact Labs Catalog
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              Premium Recovery Devices
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
            Discover Impact Labs recovery devices designed to offer a minimalist, powerful, and easy-to-use experience.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {catalogProducts.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => {
                  setSelectedProduct(product);
                  setActiveImageIndex(0);
                }}
                className="group text-left bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-hidow-blue focus:ring-offset-2 focus:ring-offset-white"
              >
                <div className="relative bg-white">
                  <div className="aspect-[4/3] w-full flex items-center justify-center overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                    <p className="text-hidow-blue font-semibold">{product.price}</p>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-gray-700 mt-2 group-hover:text-hidow-blue">
                    Ver Detalles
                    <ChevronRight
                      size={16}
                      className="ml-1 group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Support strip */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-4">
              Soporte local y garantía confiable
            </h2>
            <p className="text-gray-600 mb-6">
              Cuando eliges Impact Labs, no solo obtienes un dispositivo de
              recuperación premium, también acceso a soporte dedicado y respaldo
              local.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-hidow-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-hidow-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Punto físico de demostración</h4>
                  <p className="text-gray-500 text-sm">
                    Prueba los equipos en persona antes de decidir, con el
                    acompañamiento de especialistas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-hidow-blue/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Award className="text-hidow-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Garantía y servicio</h4>
                  <p className="text-gray-500 text-sm">
                    Cobertura local para soporte técnico y piezas de reemplazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="relative z-10 max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <h3 className="text-xl font-bold">{selectedProduct.title}</h3>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <span className="sr-only">Cerrar</span>
                ✕
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src={selectedProduct.images[activeImageIndex]}
                    alt={selectedProduct.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex gap-3">
                  {selectedProduct.images.map((img: string, index: number) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-16 w-16 rounded-xl overflow-hidden border-2 bg-white flex items-center justify-center transition-all ${
                        activeImageIndex === index
                          ? 'border-hidow-blue'
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${selectedProduct.title} miniatura ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-2xl font-black mb-1">
                    {selectedProduct.title}
                  </h4>
                  <p className="text-xl font-semibold text-hidow-blue">
                    {selectedProduct.price}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed flex-1">
                  {selectedProduct.description}
                </p>
                <a
                  href={selectedProduct.amazonUrl || 'https://www.amazon.com/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4 text-center flex items-center justify-center"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

