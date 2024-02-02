import { Outlet } from "@remix-run/react";

export default function DashboardLayout() {
  return (
    <>
      <div>
        This is a dashboard layout page. It will be visible in every child route
        of &quot;/dashboard&quot; route
      </div>
      <Outlet />
    </>
  );
}
