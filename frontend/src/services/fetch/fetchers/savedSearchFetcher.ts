import { SearchRequestBody } from "src/types/search/searchRequestTypes";

import { fetchUserWithMethod } from "./fetchers";

type SavedSearchResponse = {
  status_code: number;
  message: string;
  data: object | null;
};

// make call from server to API to save a search
export const handleSavedSearch = async (
  token: string,
  userId: string,
  savedSearch: SearchRequestBody,
  name: string,
): Promise<SavedSearchResponse> => {
  const response = await fetchUserWithMethod("POST")({
    subPath: `${userId}/saved-searches`,
    additionalHeaders: {
      "X-SGG-Token": token,
    },
    body: { search_query: savedSearch, name },
  });
  return (await response.json()) as SavedSearchResponse;
};
