import Image from "next/image";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <SidebarProvider>
      {/* Header Section */}
      <header className="fixed top-0 left-80 right-0 z-50 bg-white shadow-md p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Demo Project: August 2024</h1>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-700 hover:text-blue-500">Product Manager</button>
          <div className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">5</span>
            <button className="text-gray-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center font-bold">
            PM
          </div>
        </div>
      </header>

      {/* Menu Bar */}
      <nav className="fixed top-16 left-80 right-0 z-40 bg-gray-100 border-b p-3">
        <ul className="flex justify-start space-x-6 px-4">
          <li>
            <Link href="#product-tracker" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Product Tracker
            </Link>
          </li>
          <li>
            <Link href="#products" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Products
            </Link>
          </li>
          <li>
            <Link href="#activities" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Activities
            </Link>
          </li>
          <li>
            <Link href="#workflow-members" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Workflow Members
            </Link>
          </li>
          <li>
            <Link href="#settings" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Layout */}
      <div className="flex h-screen pt-28">
        {/* Sidebar */}
        <AppSidebar  />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          {/* Product Tracker Section */}
          <section id="Sampling" className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Sampling</h2>
            <div className="grid grid-cols-4 gap-4">
              {/* Sample Milestone Card */}
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                  <h3 className="text-sm font-bold mb-2">Sampling</h3>
                  <p className="text-sm">Initial Review</p>
                  <div className="mt-2 text-xs text-gray-600">
                    <p>Overdue: 2 tasks</p>
                    <p>Pending: 1 task</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white">
                  <div>
                    <h3 className="text-sm font-bold mb-2">Pink Water Color Bibs</h3>
                    <p className="text-xs text-gray-500">BBU-WCF-BIB-AOPPNK</p>
                  </div>
                  <button className="text-blue-500 text-sm">View Details</button>
                </div>
              ))}
            </div>
          </section>

          {/* Activities Section */}
          <section id="activities" className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Activities</h2>
            <p className="text-sm">This section will display activity logs.</p>
          </section>

          {/* Workflow Members Section */}
          <section id="workflow-members" className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Workflow Members</h2>
            <p className="text-sm">This section will display details of workflow members.</p>
          </section>

          {/* Settings Section */}
          <section id="settings" className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            <p className="text-sm">This section will allow you to configure settings.</p>
          </section>
        </div>
      </div>
    </SidebarProvider>
  );
}
