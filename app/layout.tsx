import './globals.css'

export const metadata = {
  title: 'IoT-Based Automatic Irrigation System for Heat-Resistant Agriculture',
  description: 'Smart solution for heat-resistant agriculture with affordable and easy-to-implement technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"></script>
      </head>
      <body className="font-sans text-gray-800 bg-earth-50">
        {children}
      </body>
    </html>
  )
}
