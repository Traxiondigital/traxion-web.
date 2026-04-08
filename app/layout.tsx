import './globals.css';
import type { Metadata } from 'next';

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  return {
    title: 'TRAXION - Agencia de Marketing Digital | Generación de Leads',
    description: 'Agencia de marketing digital especializada en generación de leads para negocios. Sistema automatizado de captación de clientes. O funciona, o no pagas.',
    metadataBase: new URL(baseUrl),
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    openGraph: {
      title: 'TRAXION - Agencia de Marketing Digital',
      description: 'Generación de leads predecible para tu negocio. O funciona, o no pagas.',
      images: ['/og-image.png'],
      type: 'website',
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
