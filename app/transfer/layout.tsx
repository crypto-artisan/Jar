import { Navbar } from "@/components/navbar";

export default function TransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full text-center justify-center pt-[50px]">
          {children}
        </div>
      </section>
    </>
  );
}
