import type { Metadata } from "next";
import Link from 'next/link'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: "Amadeus Woo - Building Psychohistory",
  description: "I fed 10,000 years of history to a machine learning model. Here's what it learned about why civilizations collapse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body>
        {/* Background elements - persist across all pages */}
        <div className="grid-bg" />
        <div className="float-decor" />
        
        <div className="container">
          <header>
            <Link href="/" className="logo">Amadeus Woo</Link>
          </header>
          <main>
            {children}
          </main>
          
          <footer>
            <div className="footer-links">
              <a href="https://github.com/TheApexWu" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://twitter.com/amadeuswoo" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://substack.com/@amadeusinsight" target="_blank" rel="noopener noreferrer">
                Substack
              </a>
            </div>
            <span className="copyright">© 2025 Amadeus Woo</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
