import Image from "next/image";
import Link from "next/link";
import cn from "clsx";
import styles from "@/styles/header.module.css";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <Image
        width={160}
        height={22}
        src="/omnifood-logo.png"
        alt="Omnifood logo"
        className={cn(styles.logo, className)}
      />
    </Link>
  );
}
