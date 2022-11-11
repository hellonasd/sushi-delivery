import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BreadArrow } from "./breadArrow";

interface Irouters {
  [key: string]: string;
}

const routers: Irouters = {
  rolls: "Роллы",
};

export const BreadCrumbs = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] = React.useState<string[] | null>();
  React.useEffect(() => {
    setBreadCrumbs(router.asPath.match(/[a-z0-9]+/g));
  }, [router.isReady]);

  const navBack = () => router.back();

  return (
    <nav className="breadcrumbs">
      <div className="breadcrumbs__wrapper">
        <button className="breadcrumbs__back" onClick={navBack}>
          <BreadArrow fill="#00cc2d" cl="left" />
          Назад
        </button>
        <Link href="/">
          <a href="/">
            <img src="/home.svg" alt="" className="breadcrumbs__home" />
          </a>
        </Link>

        <ul className="breadcrumbs__list">
          {breadCrumbs?.length &&
            breadCrumbs?.map((b, i) => (
              <li key={i} className="breadcrumbs__item">
                <div className="breadcrumbs__path">
                  <BreadArrow fill="#9E9E9E" cl="right" />
                  <Link
                    href={`${
                      i === breadCrumbs.length - 1 ? router.asPath : "/" + b
                    }`}
                  >
                    {routers[b] ? routers[b] : b}
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};
