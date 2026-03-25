import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import CartSidebar from "../components/CartSidebar";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Star Mens Park | Dindigul",
  description: "Premium Menswear & Bulk Group Shirts in Dindigul Bazaar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <WishlistProvider>
          <CartProvider>
            <CartSidebar />
            <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
            {children}
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
