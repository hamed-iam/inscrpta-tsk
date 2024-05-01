import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

interface Article {
  article: {
    source: {
      id: number | string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
  };
}

export function NewsItem({ article }: Article) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={expanded ? "min-h-full" : "min-h-[200px]"}>
      <CardHeader>
        <CardTitle
          className={`overflow-hidden line-clamp-${expanded ? "none" : "3"} mb-2 `}
        >
          {article?.title || "-"}
        </CardTitle>
        <CardDescription
          className={`overflow-hidden line-clamp-${expanded ? "none" : "3"}`}
        >
          {article?.description || "-"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`grid w-full items-center gap-4 ${expanded ? "overflow-auto" : ""}`}
        >
          {expanded && (
            <p
              className={`overflow-hidden line-clamp-${expanded ? "none" : "3"}`}
            >
              {article?.content || "-"}
            </p>
          )}
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {article?.author || "-"}
        <Button
          className="text-blue-500 hover:underline"
          variant="ghost"
          onClick={toggleExpanded}
        >
          Read {expanded ? "Less" : "More"}
        </Button>
      </CardFooter>
    </Card>
  );
}
