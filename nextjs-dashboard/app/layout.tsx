import "@/app/ui/global.css";
import { arial } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${arial.className} antialiased`}>
        {/* Root Layout's Header */}
        <div className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-xl font-bold">Root Layout Header</h1>
          <p className="text-sm">This appears on EVERY page of the app</p>
        </div>

        {/* Root Layout's Main Content */}
        <main>{children}</main>

        {/* Root Layout's Footer */}
        <div className="bg-gray-800 text-white p-4 text-center">
          <p className="text-sm">
            Root Layout Footer - This appears on EVERY page
          </p>
        </div>
      </body>
    </html>
  );
}
