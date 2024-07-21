import { useEffect } from "react";

export function Component() {
  useEffect(() => {
    document.title = "Dashboard | Posts";
  }, []);
  return (
    <div>
      <div className="w-[200px] h-[300px] bg-green-300"></div>
    </div>
  );
}
