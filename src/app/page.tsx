import Image from "next/image";
import Banner from "@/components/molecules/Banner";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner text="" />
      {/* <Button type="primary" /> */}
    </main>
  );
}
