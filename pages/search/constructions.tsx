import { NextPage } from "next";
import { useConstructions } from "~/hooks/useConstructions";

const SearchConstructionsPage: NextPage = () => {
  const { constructions } = useConstructions();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="sticky top-0 bg-white py-2 text-center">カテゴリ</th>
            <th className="sticky top-0 bg-white py-2 text-center">名称</th>
            <th className="sticky top-0 bg-white py-2 text-center">長辺</th>
            <th className="sticky top-0 bg-white py-2 text-center">短辺</th>
            <th className="sticky top-0 bg-white py-2 text-center">高さ</th>
          </tr>
        </thead>
        <tbody>
          {constructions.map(({ category, name, width, depth, height }) => (
            <tr key={name}>
              <td className="px-4 py-2">{category}</td>
              <td className="px-4 py-2">{name}</td>
              <td className="px-4 py-2">{width}m</td>
              <td className="px-4 py-2">{depth}m</td>
              <td className="px-4 py-2">{height}m</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchConstructionsPage;
