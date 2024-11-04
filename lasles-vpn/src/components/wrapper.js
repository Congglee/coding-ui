import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/typography.css";
import Header from "@/components/header/header";

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
    </div>
  );
}
