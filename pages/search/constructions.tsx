import { NextPage } from "next";
import { useConstructions } from "~/hooks/useConstructions";

const SearchConstructionsPage: NextPage = () => {
  const { constructions } = useConstructions();

  return (
    <div>
      <ul>
        {constructions.map(({ name, width, depth }) => (
          <li key={name}>
            <p>
              {name} ({width}x{depth})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchConstructionsPage;
