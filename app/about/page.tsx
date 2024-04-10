import { title } from "@/components/primitives";
import Placement from "@/components/placement"; // Sesuaikan dengan path file Placement

export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className={title()}>About</h1>
      </div>
      <Placement />
    </>
  );
}
