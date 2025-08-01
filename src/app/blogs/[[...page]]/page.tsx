import Box from '@mui/material/Box';
import type { Metadata, NextPage } from 'next';
import NextLink from 'next/link';
import { MainLayout } from '@component';
import { blogs } from '@data';
import { ICatchAll, ICatchAllParams } from '@types';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Blogs | Vimal Menon',
};

const Page: NextPage<ICatchAllParams> = async ({ params }) => {
  const { page } = await params;
  const selectedPage = blogs.find((blog) => blog.link == String(page?.[0]));
  return (
    <MainLayout>
      <Box>
        <Box>
          <span>
            <NextLink href="/blogs">Blog</NextLink> |
          </span>
          {blogs.map((blog) => (
            <span key={blog.link}>
              <NextLink href={`/blogs/${blog.link}`}>{blog.title}</NextLink> |
            </span>
          ))}
        </Box>
        <Box>{page}</Box>
        <Box>{selectedPage?.name}</Box>
        <Box>
          {selectedPage?.topics.map((data) => (
            <Box key={data.link}>
              <Box>{data.name}</Box>
              <Box>{data.tags}</Box>
              <Box>{data.title}</Box>
              <Box dangerouslySetInnerHTML={{ __html: data.text }}></Box>
              <Box></Box>
              <Box></Box>
            </Box>
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};

export const generateStaticParams = async (): Promise<ICatchAll[]> => {
  const links = blogs.map((value) => ({
    page: [value.link],
  }));
  return [
    {
      page: [''],
    },
    ...links,
  ];
};

export default Page;
