import Link from "next/link";

function MyButton({ name, href }) {
  return (
    <>
      <Link
        className="border border-black rounded-md w-32 h-12 hover:bg-black hover:text-white duration-300 text-center items-center flex justify-center"
        href={href}
      >
        {name}
      </Link>
    </>
  );
}
export default MyButton;
