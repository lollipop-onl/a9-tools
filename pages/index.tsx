import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <p>A9 Tools by lollipop.onl</p>
      <p>
        <Link href="/find/constructions">
          <a>Find constructions</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
