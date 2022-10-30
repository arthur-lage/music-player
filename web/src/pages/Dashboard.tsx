import { useAuth } from "../hooks/useAuth";

type DashboardProps = {
  code: string;
};

export function Dashboard({ code }: DashboardProps) {
  const accessToken = useAuth({ code });

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{code}</p>
    </div>
  );
}
