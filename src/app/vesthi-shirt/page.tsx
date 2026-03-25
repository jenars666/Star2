'use client';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Share2, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import './vesthi.css';

const vProducts = [
  {
    id: 1,
    name: 'Manamagan Premium Gold Silk Set',
    price: '1,599',
    oldPrice: '2,200',
    img: '/images/Manamagan/WhatsApp Image 2026-03-22 at 10.50.07 AM.jpeg',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Executive White Cotton Shirt & Vesthi Set',
    price: '2,250',
    oldPrice: '2,999',
    img: '/images/group2.png',
    tag: 'Premium'
  },
  {
    id: 3,
    name: 'Kalyan Traditional Pattu Vesthi',
    price: '3,500',
    oldPrice: '4,500',
    img: '/images/groupshirt.png',
    tag: 'New'
  },
  {
    id: 4,
    name: 'Pure Cotton Wedding Vesthi Collection',
    price: '1,200',
    oldPrice: '1,800',
    img: '/images/group2.png',
    tag: 'Traditional'
  }
];

import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function VesthiShirtPage() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  return (
    <div className="vesthi-page-wrapper">
      <Header />
      <Navbar />

      <main>
        {/* Category Hero */}
        <section className="vesthi-hero">
          <div className="vesthi-hero-content">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-tag"
            >
              Exclusive Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title"
            >
              Vesthi & <br /><span>Premium Shirts</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-desc"
            >
              Elevate your traditional look with our premium collection of Vesthis and exquisitely tailored shirts. Perfect for weddings, festivals, and every special occasion.
            </motion.p>
          </div>
          <div className="vesthi-hero-image">
            <div className="image-overlay" />
          </div>
        </section>

        {/* Top Categories Section */}
        <section className="vesthi-types">
          <div className="container">
            <h2 className="section-title text-center">Top Categories</h2>
            <div className="types-grid">
              <Link href="/vesthi-shirt/premium" className="type-card-link">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="type-card"
                >
                  <div className="type-image silk-bg" />
                  <div className="type-overlay">
                    <h3>Premium Vesthi&Shirts </h3>
                    <p>Premium Wedding Wear</p>
                  </div>
                </motion.div>
              </Link>
              <Link href="/vesthi-shirt/tissue" className="type-card-link">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="type-card"
                >
                  <div className="type-image cotton-bg" />
                  <div className="type-overlay">
                    <h3> tissue Vesthi&Shirts</h3>
                    <p>Everyday Traditional</p>
                  </div>
                </motion.div>
              </Link>
              <Link href="/vesthi-shirt/classic" className="type-card-link">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="type-card"
                >
                  <div className="type-image wedding-bg" />
                  <div className="type-overlay">
                    <h3>Classic Vesthi&Shirts</h3>
                    <p>Heritage Classic Collection</p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section className="vesthi-collection">
          <div className="container">
            <div className="collection-header">
              <h2 className="collection-title">Traditional Elegance</h2>
              <p className="collection-subtitle">Explore our finest selection of Vesthis and matching shirts.</p>
            </div>

            <div className="product-grid">
              {vProducts.map((product, idx) => (
                <Link href={`/vesthi-shirt/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="v-product-card"
                  >
                    <div className="v-product-image-box">
                      {product.tag && <span className="v-tag">{product.tag}</span>}
                      <div
                        className="v-product-image"
                        style={{ backgroundImage: `url(${product.img})` }}
                      />
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
                        <button 
                          className="v-action-btn" 
                          title="Share Product"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="v-product-details">
                      <h3 className="v-product-name">{product.name}</h3>
                      <div className="v-product-price">
                        <span className="v-old-price">₹{product.oldPrice}</span>
                        <span className="v-new-price">₹{product.price}</span>
                      </div>
                      <button 
                        className="v-enquire-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          // navigate or open modal
                        }}
                      >
                        ENQUIRE NOW <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="vesthi-offer">
          <div className="offer-content">
            <h3>Special Combo Offer</h3>
            <p>Buy any Silk Vesthi and get a Premium Formal Shirt at 20% OFF!</p>
            <button className="offer-btn">CLAIM OFFER</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
