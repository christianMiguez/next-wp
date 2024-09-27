import { getPageBySlug, getAllPages } from "@/lib/wordpress";
import { Section, Container, Main } from "@/components/craft";
import { Metadata } from "next";

import BackButton from "@/components/back";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);
  return {
    title: page.title.rendered,
    description: page.excerpt.rendered,
  };
}

export async function generateStaticParams () {
  const pages = await getAllPages();

  
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPageBySlug(params.slug);

   // search if there some string 'https://serendipia-wp.ddev.site/wp-content/uploads' and replace it with '/images/uploads'
   const mainContentWithLocalImages = page.content.rendered.replace(/https:\/\/serendipia-wp.ddev.site\/wp-content\/uploads/g, '/images/uploads');

  return (
    <Section>
      <Container>
        <BackButton />
        <h1 className="pt-12">{page.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: mainContentWithLocalImages }} />
      </Container>
    </Section>
  );
}
