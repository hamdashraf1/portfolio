import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hamd Ashraf - Professional Swimming Coach & Digital Content Creator",
  description:
    "18-year-old professional swimming coach and digital content creator. Expert in swimming training, web design, graphic design, video editing, AI prompts, and media buying.",
  keywords: [
    "Hamd Ashraf",
    "Swimming Coach",
    "Digital Content Creator",
    "Web Designer",
    "Graphic Designer",
    "Video Editor",
    "AI Prompt Engineer",
    "Media Buyer",
    "Cairo Egypt",
    "Swimming Training",
    "PUMP Academy",
  ],
  authors: [{ name: "Hamd Ashraf" }],
  creator: "Hamd Ashraf",
  publisher: "Hamd Ashraf",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamdashraf.com",
    title: "Hamd Ashraf - Professional Swimming Coach & Digital Content Creator",
    description:
      "18-year-old professional swimming coach and digital content creator. Expert in swimming training, web design, graphic design, video editing, AI prompts, and media buying.",
    siteName: "Hamd Ashraf Portfolio",
    images: [
      {
        url: "/images/hamd-ashraf.png",
        width: 1200,
        height: 630,
        alt: "Hamd Ashraf - Professional Swimming Coach & Digital Content Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamd Ashraf - Professional Swimming Coach & Digital Content Creator",
    description:
      "18-year-old professional swimming coach and digital content creator. Expert in swimming training, web design, graphic design, video editing, AI prompts, and media buying.",
    images: ["/images/hamd-ashraf.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://hamdashraf.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Performance & SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="color-scheme" content="dark" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hamd Ashraf",
              jobTitle: ["Swimming Coach", "Digital Content Creator", "Web Designer"],
              description:
                "Professional swimming coach and digital content creator with 3+ years experience and 150+ trained swimmers.",
              url: "https://hamdashraf.com",
              image: "https://hamdashraf.com/images/hamd-ashraf.png",
              sameAs: [
                "https://www.linkedin.com/in/hamd-ashraf-a4051a312",
                "https://www.instagram.com/hamd__ashraf",
                "https://github.com/hamdashraf1",
                "https://hamdashraf1.github.io/PUMP/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nasr City",
                addressRegion: "Cairo",
                addressCountry: "Egypt",
              },
              email: "hamdashraf540@gmail.com",
              telephone: "+201284211212",
              knowsAbout: [
                "Swimming Training",
                "Web Development",
                "Graphic Design",
                "Video Editing",
                "AI Prompt Engineering",
                "Digital Marketing",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#1f2937", color: "white" }}>
            This website requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
