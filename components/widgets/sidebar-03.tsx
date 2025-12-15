
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";

export function Sidebar03() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src="https://placehold.co/100x40" alt="Logo" />
      </SidebarHeader>
      <SidebarContent>
        <p>Dashboard</p>
        <div>
          <p className="font-semibold">Users</p>
          <p className="ml-4">All Users</p>
          <p className="ml-4">Add New</p>
          <p className="ml-4">Roles</p>
        </div>
        <p>Settings</p>
      </SidebarContent>
    </Sidebar>
  );
}
