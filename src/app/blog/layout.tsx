import { MarketingShell } from "@/components/layout/MarketingShell";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingShell>{children}</MarketingShell>;
}
