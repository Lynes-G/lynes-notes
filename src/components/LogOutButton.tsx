"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "../actions/users";

function LogOutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast.success("Success!", {
        description: "You have been logged out",
      });

      router.push("/");
    } else {
      toast.error("Error", { description: errorMessage });
    }

    setLoading(false);
    console.log("Logging out...");
  };
  return (
    <Button
      className="w-24"
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
