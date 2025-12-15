
import { Button } from "../ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "../ui/sidebar";

export function Sidebar01() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src="https://placehold.co/100x40" alt="Logo" />
      </SidebarHeader>
      <SidebarContent>
        <p>Dashboard</p>
        <p>Users</p>
        <p>Settings</p>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline">Logout</Button>
      </SidebarFooter>
    </Sidebar>
  );
}
