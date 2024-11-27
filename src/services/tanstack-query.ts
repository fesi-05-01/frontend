import {
  dehydrate,
  HydrationBoundary,
  isServer,
  QueryClient,
} from '@tanstack/react-query';

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  });
};

let browserClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserClient) browserClient = makeQueryClient();
    return browserClient;
  }
};

const getDehydratedQuery = async (
  options: Parameters<QueryClient['prefetchQuery']>[0],
) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(options);

  const dehydratedState = dehydrate(queryClient);

  return dehydratedState;
};

const getDehydratedInfiniteQuery = async (
  options: Parameters<QueryClient['prefetchInfiniteQuery']>[0],
) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(options);

  const dehydratedState = dehydrate(queryClient);
  return dehydratedState;
};

const Hydration = HydrationBoundary;

export {
  getDehydratedInfiniteQuery,
  getDehydratedQuery,
  getQueryClient,
  Hydration,
};
