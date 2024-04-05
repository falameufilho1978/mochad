import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="../mo-webclip.png" rel="apple-touch-icon"></link>
        <link href="../mo-favicon.png" rel="shortcut icon" type="image/x-icon"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
