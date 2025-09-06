"use client"

import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { UserResponse } from "@/types/auth"


export function NavUser({
  user,
}: {
  user: UserResponse
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.email}</span>
                </div>
              </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
