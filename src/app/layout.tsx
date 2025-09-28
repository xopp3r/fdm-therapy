import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FDM терапия",
  description: "Модель фасциальных дисторсий. Интенсивный двухдневный курс Евгения Хаимова по клинико-физиологическому объяснению и клиническому применению",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
