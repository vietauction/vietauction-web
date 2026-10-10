import { Roles } from "@/enums/roles.enum"

export type User = {
  id: string
  email: string
  role: Roles
}
