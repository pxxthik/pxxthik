import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Pratheek Bedre | Data Science Portfolio",
  description: "Data Science Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
