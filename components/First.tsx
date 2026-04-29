import Image from "next/image";
export default function First() {
  return (
    <div className=" max-w-9xl mx-auto">
      <Image
        alt=""
        width={1400}
        height={560}
        src="/1.jpg"
        className="aspect-10/2 w-full object-cover "
      />
    </div>
  );
}
