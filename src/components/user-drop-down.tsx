"use client";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@/hooks/use-auth";
import Loader from "@/components/loader";
import { useState } from "react";
import { ErrorType } from "@/types/error.type";
import { toast } from "@/hooks/use-toast";

const UserDropDown = () => {
  const { data: user, isLoading } = useAuth.useGetSession();
  const logout = useAuth.useLogout();
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    if (loading) return;
    setLoading(true);
    try {
      await logout.mutateAsync();
      toast({
        title: "Logout success",
        description: "You have successfully logged out",
      });
      route.push("/login");
    } catch (error) {
      console.error({ error });
      switch ((error as ErrorType).statusCode) {
        case 401:
          toast({
            title: "Unauthorized",
            description: "You are not authorized to perform this action",
          });
          break;
        default:
          toast({
            title: "Logout failed",
            description: "Failed to logout",
          });
          break;
      }
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) return <Loader />;

  if (!user)
    return (
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded px-4 py-1 outline-none xl:hover:bg-foreground/10">
        <div className="flex items-center justify-center md:gap-3">
          <div className="invisible w-0 text-right sm:visible sm:w-auto">
            <div className="text-[14px]">{user?.employee.name}</div>
            <div className="text-xs opacity-50">{user?.role.name}</div>
          </div>
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.employee.name}`}
              alt={user?.employee.name}
            />
            <AvatarFallback>{user?.employee.name}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuLabel className="text-center">
          {user?.employee.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-1 bg-foreground/20" />
        <DropdownMenuItem className="cursor-pointer gap-2">
          <User></User>
          <span>Profile</span>
        </DropdownMenuItem>
        <Link href="/settings">
          <DropdownMenuItem className="cursor-pointer gap-2">
            <Settings></Settings>
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="my-1 bg-foreground/20" />
        <Button
          variant={"ghost"}
          onClick={() => handleLogout()}
          className="pl-0 w-full"
        >
          <DropdownMenuItem className="cursor-pointer gap-2">
            <LogOut></LogOut>
            <span>Log out</span>
          </DropdownMenuItem>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
