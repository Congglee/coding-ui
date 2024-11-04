import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/typography.css";

export default function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
