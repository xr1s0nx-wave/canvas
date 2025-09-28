import { RouterProvider } from './RouterProvider';

export function Providers({ url }: { url?: string | undefined } = {}) {
  return (
    <>
      <RouterProvider url={url} />
    </>
  );
}
