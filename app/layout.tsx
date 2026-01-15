import "./globals.css";

export const metadata = {
  title: "Instant Booking Tour packages to Varnasi (Kashi)",
  description: "Experience the spiritual essence of India's holiest cities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
