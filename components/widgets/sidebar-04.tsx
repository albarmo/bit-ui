
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";
import { Home, Users, Settings } from "lucide-react";

export function Sidebar04() {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src="https://placehold.co/40x40" alt="Logo" />
      </SidebarHeader>
      <SidebarContent>
        <a href="#" className="flex items-center justify-center py-2"><Home /></a>
        <a href="#" className="flex items-center justify-center py-2"><Users /></a>
        <a href="#" className="flex items-center justify-center py-2"><Settings /></a>
      </SidebarContent>
    </Sidebar>
  );
}
