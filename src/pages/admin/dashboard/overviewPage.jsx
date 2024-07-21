import { useEffect } from "react";

export function Component() {
  useEffect(() => {
    document.title = "Dashboard | Overview";
  }, []);
  return <div>Overview</div>;
}
