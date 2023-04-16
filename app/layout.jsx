import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>logo</h1>
          <ul>
            <li>list </li>
            <li>list</li>
            <li>lsit</li>
          </ul>
        </nav>
        {/* children es la renderización de las diferentes vistas de la
página */}
        {children}
      </body>
    </html>
  );
}