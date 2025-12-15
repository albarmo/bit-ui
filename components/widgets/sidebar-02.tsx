
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";

export function Sidebar02() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src="https://placehold.co/100x40" alt="Logo" />
      </SidebarHeader>
      <SidebarContent>
        <div>
          <p className="font-semibold">Analytics</p>
          <p>Dashboard</p>
          <p>Reports</p>
        </div>
        <div>
          <p className="font-semibold">Content</p>
          <p>Posts</p>
          <p>Pages</p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
