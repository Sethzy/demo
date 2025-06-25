export default function DashboardPage() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h2 className="text-xl font-bold mb-4 text-blue-600">
        Dashboard Page Content
      </h2>
      <p className="text-gray-600 mb-4">
        This is the UNIQUE content from <code>app/dashboard/page.tsx</code>
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold mb-2">Layout Nesting Order:</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>
            <strong>Root Layout</strong> (<code>app/layout.tsx</code>) - Blue
            header/footer
          </li>
          <li>
            <strong>Dashboard Layout</strong> (
            <code>app/dashboard/layout.tsx</code>) - Sidebar + gray
            header/footer
          </li>
          <li>
            <strong>Dashboard Page</strong> (<code>app/dashboard/page.tsx</code>
            ) - This yellow box content
          </li>
        </ol>
      </div>

      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-semibold mb-2">What You're Seeing:</h3>
        <p className="text-sm">
          The final UI combines all three layers: Root Layout + Dashboard Layout
          + Dashboard Page content. Visit{" "}
          <code>http://localhost:3001/dashboard</code> to see this in action!
        </p>
      </div>
    </div>
  );
}
