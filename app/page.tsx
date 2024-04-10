import { getFlavours } from "../lib/dbservice/dbservice";

export default async function Home() {
  const flavours = getFlavours();
  const [flavoursData] = await Promise.all([flavours]);
  return (
    <main className="flex min-h-screen flex-col items-center text-black justify-between bg-gradient-radial to-50% from-[#F0FFEB] to-[#F2F4FF]">
      <div>{JSON.stringify(flavoursData)}</div>
      <button className="btn btn-primary">Button</button>
    </main>
  );
}
