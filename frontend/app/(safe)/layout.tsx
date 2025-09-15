import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timelord",
  description: "Those who control time, control everything",
};

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
