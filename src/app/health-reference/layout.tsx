import "./health-reference.css";

export default function HealthReferenceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="health-reference-shell">{children}</div>;
}
