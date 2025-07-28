import "./globals.css";

export const metadata = {
  title: "Luabi Travels - Premium Travel Experiences Worldwide",
  description:
    "Discover extraordinary destinations with Luabi Travels. Premium travel experiences, personalized service, and unforgettable adventures await.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
