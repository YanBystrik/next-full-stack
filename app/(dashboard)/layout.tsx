export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        Dashboard
        {children}
      </body>
    </html>
  );
}
