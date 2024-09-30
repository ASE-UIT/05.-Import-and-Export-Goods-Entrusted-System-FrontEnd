import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 flex space-x-10">
      <h1 className="text-4xl">EntrustExim</h1>

      <div className="z-10">
        <ModeToggle />
      </div>

      <Button className="" variant={"default"}>
        Click me
      </Button>
    </div>
  );
}
