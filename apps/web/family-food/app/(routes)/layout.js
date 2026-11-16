import { Inter } from 'next/font/google'
import '../_styles/globals.scss' //sass
import '../_styles/global.css' // tailwindcss

const inter = Inter({ subsets: ['latin'] })

// Pages that set their own title get "<title> | Arbelaez Family Recipes"; the rest use the default.
// The icons are app/favicon.ico, app/icon.png and app/apple-icon.png (Next.js links them by name).
export const metadata = {
  title: {
    default: 'Arbelaez Family Recipes',
    template: '%s | Arbelaez Family Recipes',
  },
  description: 'The Arbelaez family recipe collection. Search the recipes and filter them by category and difficulty.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
