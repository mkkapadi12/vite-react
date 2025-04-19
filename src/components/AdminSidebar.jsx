import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Package, Settings, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const AdminSidebar = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(!isMobile);

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      {isMobile ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-64 p-4 bg-gray-300">
            <SheetHeader>
              <SheetTitle>Admin Panel</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 space-y-2">
              <>
                <Link
                  to="/"
                  label="Dashboard"
                  className="flex gap-2"
                  onClick={toggleSidebar}
                >
                  <Home size={20} className="text-black" />
                  Home
                </Link>
                <Link
                  to="/users"
                  label="Users"
                  className="flex gap-2"
                  onClick={toggleSidebar}
                >
                  <Users size={20} />
                  Users
                </Link>
                <Link
                  to="/orders"
                  label="Orders"
                  className="flex gap-2"
                  onClick={toggleSidebar}
                >
                  <Package size={20} />
                  Orders
                </Link>
                <Link
                  to="/settings"
                  label="Settings"
                  className="flex gap-2"
                  onClick={toggleSidebar}
                >
                  <Settings size={20} />
                  Settings
                </Link>
              </>
            </nav>
            <div className="p-4 border-t border-gray-700">
              <Button variant="destructive" className="w-full">
                Logout
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Sidebar className="w-64 h-screen text-black bg-white">
          <div className="p-5 text-xl font-bold border-b border-gray-700">
            Admin Panel
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <>
              <Link
                to="/"
                label="Dashboard"
                className="flex gap-2"
                onClick={toggleSidebar}
              >
                <Home size={20} className="text-black" />
                Home
              </Link>
              <Link
                to="/users"
                label="Users"
                className="flex gap-2"
                onClick={toggleSidebar}
              >
                <Users size={20} />
                Users
              </Link>
              <Link
                to="/orders"
                label="Orders"
                className="flex gap-2"
                onClick={toggleSidebar}
              >
                <Package size={20} />
                Orders
              </Link>
              <Link
                to="/settings"
                label="Settings"
                className="flex gap-2"
                onClick={toggleSidebar}
              >
                <Settings size={20} />
                Settings
              </Link>
            </>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <Button variant="destructive" className="w-full">
              Logout
            </Button>
          </div>
        </Sidebar>
      )}
      <Button
        className="absolute z-50 p-2 rounded-full top-4 left-4 sm:hidden"
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
      >
        <PanelLeft className="w-6 h-6" />
      </Button>
    </>
  );
};

export default AdminSidebar;
