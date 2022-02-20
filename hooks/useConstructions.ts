import { useMemo } from "react";
import useSWR from "swr";
import fetch from "unfetch";
import type { A9Construction } from "~/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useConstructions = () => {
  const { data } = useSWR("/api/v1/constructions.json", fetcher);

  const categories = useMemo<string[]>(() => data?.categories || [], [data]);

  const constructions = useMemo<A9Construction[]>(() => {
    if (!data) return [];

    return data.constructions.map(({ category, ...construction }) => ({
      category: categories[category],
      ...construction,
    }));
  }, [data, categories]);

  return {
    constructions,
    categories,
  };
};
