
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sidebar, SidebarContent, SidebarHeader, SidebarItem } from "../ui/sidebar";

export function Dashboard01() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar>
        <SidebarHeader>
            <img src="https://placehold.co/100x40" alt="Logo" />
        </SidebarHeader>
        <SidebarContent>
            <SidebarItem href="#">Dashboard</SidebarItem>
            <SidebarItem href="#">Users</SidebarItem>
            <SidebarItem href="#">Settings</SidebarItem>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white border-b">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Pendapatan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$12,345</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Pengguna</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">1,234</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Pesanan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">567</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Total Produk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">89</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
