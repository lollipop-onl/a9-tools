import { NextPage } from "next";
import randomColor from "randomcolor";
import { UITable } from "~/components/UITable";
import { useConstructions } from "~/hooks/useConstructions";

const SearchConstructionsPage: NextPage = () => {
  const { constructions } = useConstructions();

  return (
    <div className="mx-auto max-w-screen-md px-4">
      <UITable
        headers={["カテゴリ", "名称", "長辺", "短辺", "高さ"]}
        items={constructions}
        keyProperty="name"
        renderRow={({ category, name, width, depth, height }) => [
          <div key={0} className="text-center">
            <span
              className="rounded-md px-2 py-1 text-xs"
              style={{
                backgroundColor: randomColor({
                  luminosity: "light",
                  seed: category,
                }),
              }}
            >
              {category}
            </span>
          </div>,
          <>{name}</>,
          <div key={2} className="text-center">
            {width} m
          </div>,
          <div key={3} className="text-center">
            {depth} m
          </div>,
          <div key={4} className="text-center">
            {height} m
          </div>,
        ]}
      />
    </div>
  );
};

export default SearchConstructionsPage;
