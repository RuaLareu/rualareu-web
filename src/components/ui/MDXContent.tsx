import { marked } from "marked";

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  const html = marked.parse(source) as string;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
