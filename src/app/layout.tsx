import type { Metadata } from "next";
import Link from 'next/link'
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import Animations from '../components/Animations'
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
  title: "PsychohistoryML",
  description: "Exploratory ML analysis of 372 historical polities from the Seshat Global History Databank.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body>
        <Animations />

        <div className="container">
          <header>
            <Link href="/" className="logo">PsychohistoryML</Link>
          </header>
          <main>
            {children}
          </main>

          <footer>
            <div className="footer-links">
              <a href="https://github.com/TheApexWu/psychohistoryML" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://amadeuswoo.com" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </div>
            <span className="copyright">&copy; 2026 PsychohistoryML</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
