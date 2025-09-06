import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
      <h1>Hello WOrld</h1>
      <Button className={"primary"}>Click Me</Button>
      <UserButton />
    </div>
  );
}