import { Settings, LayoutDashboard, LayoutList, HandHelping, Target, Contact, LogOut  } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from "@/components/ui/sidebar";


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Categories",
    url: "#",
    icon: LayoutList,
  },
  {
    title: "Services",
    url: "#",
    icon: HandHelping ,
  },
  {
    title: "Projects",
    url: "#",
    icon: Target,
  },
  {
    title: "Contact",
    url: "#",
    icon: Contact,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarSeparator />
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                    <Link href="api/auth/logout" className="flex items-center justify-center gap-2 border-primary border-2 px-2 py-1 text-sm hover:bg-primary hover:text-white">
                      <LogOut />
                      <span>Logout</span>
                    </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
