import SideNav from "@/app/ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Dashboard Layout's Sidebar */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      {/* Dashboard Layout's Main Content Area */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* Dashboard Layout's Header */}
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Layout Header
          </h1>
          <p className="text-sm text-gray-600">
            This header appears on ALL dashboard pages
          </p>
        </div>

        {/* Dashboard Page's Unique Content goes here */}
        {children}

        {/* Dashboard Layout's Footer */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">
            Dashboard Layout Footer - © 2024 Acme Corp
          </p>
        </div>
      </div>
    </div>
  );
}
