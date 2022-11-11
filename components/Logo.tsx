import Link from "next/link";

export const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/logo.svg" alt="" className="logo__img" />
      </Link>
    </div>
  );
};
