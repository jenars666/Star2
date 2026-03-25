'use client';

import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import '../vesthi.css';

const collectionData = {
  premium: {
    title: 'Premium Vesthi & Shirts',
    desc: 'The gold standard of traditional wear. Made from high-grade silk and premium cotton for that royal look.',
    heroImg: '/images/Manamagan/WhatsApp Image 2026-03-22 at 10.50.07 AM.jpeg',
    products: [
      { id: 101, name: 'Manamagan Premium Gold Set', price: '1,599', oldPrice: '2,200', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.07%20AM%20%281%29.jpeg' },
      { id: 102, name: 'Manamagan Royal Green Set', price: '1,599', oldPrice: '2,200', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.07%20AM.jpeg' },
      { id: 103, name: 'Manamagan Premium Blue Set ', price: '1,599', oldPrice: '2,200', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.08%20AM.jpeg' },
    ]
  },
  tissue: {
    title: 'Tissue Vesthi & Shirts',
    desc: 'Lightweight and elegant tissue fabrics, perfect for a modern yet traditional style.',
    heroImg: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.49.10%20PM.jpeg',
    products: [
      { id: 18, name: 'Mappillai Collection - Pearl White Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.48.53%20PM.jpeg' },
      { id: 19, name: 'Mappillai Collection - Luxury Cream Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.49.05%20PM.jpeg' },
      { id: 20, name: 'Mappillai Collection - Elegant White Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.49.10%20PM.jpeg' },
      { id: 21, name: 'Mappillai Collection - Modern Fit Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.49.13%20PM.jpeg' },
      { id: 22, name: 'Mappillai Collection - Prime Edition Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/light gold.jpg' },
      { id: 23, name: 'Mappillai Collection - Classic White Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.49.16%20PM.jpeg' },
      { id: 24, name: 'Mappillai Collection - Elite Collection Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/elite.jpg' },
      { id: 25, name: 'Mappillai Collection - Heritage Series Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/green.jpg' },
      { id: 26, name: 'Mappillai Collection - Signature Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/silver.png' },
      { id: 28, name: 'Mappillai Collection - Wedding Special Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/goold%20copy.jpg' },
    ]
  },
  classic: {
    title: 'Classic Vesthi & Shirts',
    desc: 'The timeless essence of tradition. Our Heritage Classic matching sets are crafted for comfort and dignity.',
    heroImg: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.03%20AM.jpeg',
    products: [
      { id: 5, name: 'Heritage Classic - Pearl White Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.02%20AM.jpeg' },
      { id: 6, name: 'Heritage Classic - Silk Cream Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.03%20AM%20%281%29.jpeg' },
      { id: 7, name: 'Traditional Classic Matching Set', price: '1,450', oldPrice: '1,999', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.03%20AM.jpeg' },
      { id: 8, name: 'Heritage Classic - Ocean Blue Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.04%20AM%20%281%29.jpeg' },
      { id: 9, name: 'Heritage Classic - Charcoal Grey Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.04%20AM%20%282%29.jpeg' },
      { id: 10, name: 'Heritage Classic - Pure Silver Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.04%20AM.jpeg' },
      { id: 11, name: 'Heritage Classic - Golden Aura Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.05%20AM%20%281%29.jpeg' },
      { id: 12, name: 'Heritage Classic - Deep Ebony Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.05%20AM.jpeg' },
      { id: 13, name: 'Heritage Classic - Slate Grey Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.06%20AM.jpeg' },
      { id: 14, name: 'Heritage Classic - Teal Green Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.07%20AM.jpeg' },
      { id: 15, name: 'Heritage Classic - Royal Maroon Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.08%20AM%20%281%29.jpeg' },
      { id: 16, name: 'Heritage Classic - Deep Navy Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.08%20AM%20%282%29.jpeg' },
      { id: 17, name: 'Heritage Classic - Midnight Black Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.08%20AM.jpeg' },
    ]
  }
};

import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';

export default function TypeCollectionPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const type = (params.type as string)?.toLowerCase() || 'classic';
  const data = collectionData[type as keyof typeof collectionData] || collectionData.classic;

  return (
    <div className="vesthi-page-wrapper">
      <Header />
      <Navbar />

      <main>
        <div className="container back-container">
          <Link href="/vesthi-shirt" className="back-link">
            <ArrowLeft size={16} /> BACK TO COLLECTIONS
          </Link>
        </div>

        <section className="type-collection-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="collection-page-title"
            >
              {data.title}
            </motion.h1>
            <p className="collection-page-desc">{data.desc}</p>
          </div>
        </section>

        <section className="collection-grid-section">
          <div className="container">
            <div className="collection-toolbar">
              <div className="results-count">
                Showing all {data.products.length} results
              </div>
              <div className="sort-filter">
                <span className="sort-label">Sort by latest</span>
                <div className="view-toggles">
                  <span className="view-grid active"></span>
                  <span className="view-list"></span>
                </div>
              </div>
            </div>

            <div className="product-grid">
              {data.products.map((product, idx) => (
                <Link href={`/vesthi-shirt/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="v-product-card"
                  >
                    <div className="v-product-image-box">
                      <span className="v-discount-badge">-25%</span>
                      <img src={product.img} alt={product.name} className="v-product-img-tag" />
                      <div className="v-hover-actions">
                        <button 
                          className="v-action-btn" 
                          title="Add to Cart"
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart({ id: product.id, name: product.name, price: product.price, img: product.img, quantity: 1 });
                          }}
                        >
                          <ShoppingCart size={18} />
                        </button>
                        <button 
                          className="v-action-btn" 
                          title={isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
                          onClick={(e) => {
                            e.preventDefault();
                            if (isInWishlist(product.id)) {
                              removeFromWishlist(product.id);
                            } else {
                              addToWishlist({ id: product.id, name: product.name, price: product.price, img: product.img });
                            }
                          }}
                        >
                          <Heart size={18} fill={isInWishlist(product.id) ? "currentColor" : "none"} color={isInWishlist(product.id) ? "#d32f2f" : "currentColor"} />
                        </button>
                      </div>
                    </div>
                    <div className="v-product-details">
                      <h3 className="v-product-name">{product.name}</h3>
                      <div className="v-product-price">
                        <span className="v-old-price">₹{product.oldPrice}</span>
                        <span className="v-new-price">₹{product.price}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
