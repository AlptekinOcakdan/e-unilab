import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";

interface PreparatSidebarProps {
    preparats: string[];
}

export const PreparatSidebar = ({preparats}: PreparatSidebarProps) => {
    return (
        <Sidebar className="pt-16" collapsible="offcanvas">
            <SidebarContent className="bg-background">
                <SidebarGroup>
                    <SidebarMenu>
                        {preparats.map((preparat,index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <span>{preparat}</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}