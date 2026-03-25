'use client';

import Header from '../../../../components/Header';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, Star, Minus, Plus, MessageCircle, HelpCircle, Image as ImageIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import '../product.css';

// Consolidating product data
const allProducts = {
  // Premium
  101: { name: 'Manamagan Premium Gold Set', price: '1,599', oldPrice: '2,200', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.07%20AM%20%281%29.jpeg', length: '2 Meters', weight: '0.35kg', desc: 'A royal gold silk vesthi set with a premium matching shirt. Perfect for weddings and grand traditional ceremonies.' },
  102: { name: 'Manamagan Royal Green Set', price: '1,599', oldPrice: '2,200', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.07%20AM.jpeg', length: '2 Meters', weight: '0.35kg', desc: 'Exquisite royal green silk set designed for a majestic presence. High-grade silk and premium cotton blend.' },
  103: { name: 'Manamagan Premium Blue Set', price: '1,599', oldPrice: '2,200', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.08%20AM.jpeg', length: '2 Meters', weight: '0.35kg', desc: 'Premium blue vesthi and shirt set. Executive styling meets traditional comfort for a sophisticated look.' },
  
  // Tissue
  18: { name: 'Mappillai Collection - Pearl White Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.48.53%20PM.jpeg', length: '2 Meters', weight: '0.28kg', desc: 'Lightweight and elegant tissue fabric set in pearl white. Modern yet deeply traditional.' },
  19: { name: 'Mappillai Collection - Luxury Cream Set', price: '1,150', oldPrice: '1,600', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.49.05%20PM.jpeg', length: '2 Meters', weight: '0.28kg', desc: 'Luxury cream tissue set. Perfect for grooming rituals and semi-formal traditional events.' },
  
  // Classic
  5: { name: 'Heritage Classic - Pearl White Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.02%20AM.jpeg', length: '2 Meters', weight: '0.30kg', desc: 'The timeless essence of tradition. Crafted for comfort and dignity in pure cotton.' },
  6: { name: 'Heritage Classic - Silk Cream Set', price: '950', oldPrice: '1,300', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.03%20AM%20%281%29.jpeg', length: '2 Meters', weight: '0.30kg', desc: 'Classic cream matching set with a subtle silk finish for everyday elegance.' },
};

// Recommended defaults
const recommendations = [
  { id: 101, name: 'Manamagan Premium Gold', price: '1,599', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.07%20AM%20%281%29.jpeg' },
  { id: 18, name: 'Pearl White Mappillai', price: '1,150', img: '/images/Mappillai/WhatsApp%20Image%202026-03-22%20at%2010.48.53%20PM.jpeg' },
  { id: 5, name: 'Heritage Classic Set', price: '950', img: '/images/Classic%20Matching%20Set/WhatsApp%20Image%202026-03-22%20at%2010.49.02%20AM.jpeg' },
  { id: 103, name: 'Premium Blue Set', price: '1,599', img: '/images/Manamagan/WhatsApp%20Image%202026-03-22%20at%2010.50.08%20AM.jpeg' },
];

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = allProducts[parseInt(id) as keyof typeof allProducts] || allProducts[101];
  
  const [qty, setQty] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="product-detail-wrapper">
      <Header />
      <Navbar />

      <main>
        <div className="container product-section">
          <div className="product-grid-main">
            {/* Left: Image */}
            <div className="product-image-container">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={product.img} 
                alt={product.name} 
                className="main-product-img"
              />
            </div>

            {/* Right: Info */}
            <div className="product-info-column">
              <div className="product-header-group">
                <div className="product-badges">
                  <span className="p-badge">Collection 2026</span>
                  <span className="p-badge">Best Seller</span>
                </div>
                <h1>{product.name}</h1>
                <div className="rating-row" style={{ display: 'flex', gap: '5px', color: '#ffc107', margin: '1rem 0' }}>
                  <Star fill="#ffc107" size={18} />
                  <Star fill="#ffc107" size={18} />
                  <Star fill="#ffc107" size={18} />
                  <Star fill="#ffc107" size={18} />
                  <Star fill="#ffc107" size={18} />
                  <span style={{ color: '#888', marginLeft: '10px', fontSize: '0.9rem' }}>(No reviews yet)</span>
                </div>
              </div>

              <div className="price-tag">
                <span className="new-price-lg">₹{product.price}</span>
                <span className="old-price-lg">₹{product.oldPrice}</span>
              </div>

              <p className="product-desc-text">
                {product.desc} Our garments are designed with comfort, quality, and perfection in mind. 
                Perfect for weddings, festivals, and grand celebrations.
              </p>

              <div className="spec-list">
                <div className="spec-item">
                  <span className="spec-label">Length</span>
                  <span className="spec-value">{product.length}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Weight</span>
                  <span className="spec-value">{product.weight}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Availability</span>
                  <span className="spec-value">In Stock</span>
                </div>
              </div>

              <div className="purchase-actions">
                <div className="quantity-picker">
                  <span className="qty-label">Quantity</span>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={16} /></button>
                    <span className="qty-num">{qty}</span>
                    <button className="qty-btn" onClick={() => setQty(qty + 1)}><Plus size={16} /></button>
                  </div>
                </div>

                <div className="buy-buttons">
                  <button className="add-btn">ADD TO CART</button>
                  <button className="buy-btn">BUY IT NOW</button>
                </div>

                <div className="extra-actions" style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
                  <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Heart size={18} /> ADD TO WISHLIST
                  </button>
                  <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 600 }}>
                    <Share2 size={18} /> SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="reviews-section">
          <div className="container">
            <div className="reviews-container">
              <div className="reviews-header">
                <h2>Customer Reviews</h2>
                <button className="write-review-btn" onClick={() => setShowReviewForm(!showReviewForm)}>
                  {showReviewForm ? 'CLOSE FORM' : 'WRITE A REVIEW'}
                </button>
              </div>

              {showReviewForm && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="review-form-box"
                >
                  <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>Write a Review</h3>
                  <div className="form-group">
                    <label>Rating</label>
                    <div className="rating-stars-input">
                      <Star size={32} />
                      <Star size={32} />
                      <Star size={32} />
                      <Star size={32} />
                      <Star size={32} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Review Title</label>
                      <input type="text" placeholder="Give your review a title" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" placeholder="Enter your name" className="input-field" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Review Content</label>
                    <textarea rows={5} placeholder="Start writing here..." className="input-field"></textarea>
                  </div>
                  <div className="form-group">
                    <label>Picture/Video (optional)</label>
                    <div className="upload-area">
                      <ImageIcon size={40} style={{ marginBottom: '1rem' }} />
                      <p>Drag and drop or click to upload</p>
                    </div>
                  </div>
                  <button className="buy-btn" style={{ width: '100%' }}>SUBMIT REVIEW</button>
                </motion.div>
              )}

              <div className="empty-reviews">
                <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Be the first to write a review</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                  <span className="ask-q-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MessageCircle size={18} /> Write a review
                  </span>
                  <span className="ask-q-text" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <HelpCircle size={18} /> Ask a question
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section className="recommended-section">
          <div className="container">
            <h2>Recommended Products</h2>
            <div className="product-grid">
              {recommendations.map((prod) => (
                <div key={prod.id} className="v-product-card">
                  <div className="v-product-image-box">
                    <img src={prod.img} alt={prod.name} className="v-product-img-tag" />
                  </div>
                  <div className="v-product-details">
                    <h3 className="v-product-name">{prod.name}</h3>
                    <div className="v-product-price">
                       <span className="v-new-price">₹{prod.price}</span>
                    </div>
                    <Link href={`/vesthi-shirt/product/${prod.id}`} style={{ display: 'block', marginTop: '1rem', fontWeight: 700, fontSize: '0.8rem', color: '#111', textDecoration: 'none', border: '1px solid #111', padding: '0.5rem 1rem' }}>
                      VIEW DETAILS
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
