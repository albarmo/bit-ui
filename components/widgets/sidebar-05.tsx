
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sidebar, SidebarContent, SidebarHeader } from "../ui/sidebar";

export function Sidebar05() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">shadcn</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <p>Dashboard</p>
        <p>Users</p>
        <p>Settings</p>
      </SidebarContent>
    </Sidebar>
  );
}
