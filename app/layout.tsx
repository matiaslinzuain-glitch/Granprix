import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gran Prix — Ropa Masculina Premium | Liniers, CABA",
  description:
    "Tienda de ropa masculina premium en Rivadavia 11450 local 4, Liniers, CABA. Remeras, pantalones, buzos, camperas. Pickup en el día.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
