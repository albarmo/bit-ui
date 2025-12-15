
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";

export function Sidebar06() {
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
    </Sidebar>
  );
}
