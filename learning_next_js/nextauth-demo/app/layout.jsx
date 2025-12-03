import Providers from "./providers";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <nav style={{ display: "flex", gap: 12 }}>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/dashboard">Dashboard</a>
          </nav>

          {children}
        </Providers>
      </body>
    </html>
  );
}