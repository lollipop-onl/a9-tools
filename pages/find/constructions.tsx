import { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import randomColor from "randomcolor";
import { DiscussionEmbed } from "disqus-react";
import { UITable } from "~/components/UITable";
import { UIHeading } from "~/components/UIHeading";
import { FormCheckboxGroup } from "~/components/FormCheckboxGroup";
import { useConstructions } from "~/hooks/useConstructions";

const SearchConstructionsPage: NextPage = () => {
  const { constructions, categories } = useConstructions();

  const [targetCategories, setTargetCategories] = useState(categories);

  const hiddenConstructions = useMemo(
    () =>
      constructions.filter(
        ({ category }) => !targetCategories.includes(category)
      ),
    [constructions, targetCategories]
  );

  useEffect(() => {
    setTargetCategories(categories);
  }, [categories]);

  return (
    <>
      <Head>
        <title>サイズから建物を探す - A9 Tools</title>
      </Head>
      <div className="mx-auto max-w-screen-md space-y-6 py-10">
        <UIHeading
          title="サイズから建物を探す"
          description="「このサイズに収まる建物って何があったっけ？」を解決する検索ツールです。"
        />
        <div className="space-y-4">
          <FormCheckboxGroup
            name="categories"
            options={categories.map((category) => ({ value: category }))}
            value={targetCategories}
            onChange={setTargetCategories}
          />
          <div className="overflow-x-auto px-4 md:px-0">
            <UITable
              headers={["カテゴリ", "名称", "長辺", "短辺", "高さ"]}
              items={constructions}
              hiddenItems={hiddenConstructions}
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
        </div>
        <DiscussionEmbed
          shortname="a9-tools"
          config={{
            identifier: "find/constructions",
          }}
        />
      </div>
    </>
  );
};

export default SearchConstructionsPage;
