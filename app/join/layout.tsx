import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image src="/logo.svg" alt="logo-svg" width={50} height={50} />
      </div>
      <section className="h-full flex flex-col items-center justify-between gap-4 pt-4 md:py-10">
        <div className="w-full h-full text-center justify-center">
          {children}
        </div>
      </section>
    </>
  );
}
