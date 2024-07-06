import { InfiniteMovingCards } from "../ui/InfiMoving";

export function InfiniteMovingCardsDemo() {
  const testimonials = [
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/ca02977a981b37669039b8b14516407973f97ac9-48x41.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/05f6781e6a954b176d6d31dd1b60428e66baacec-55x20.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/2635c71404f99add72c526c4922111f524e9cf06-43x51.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/e50eee9a9cd8df87180afd769c360c1260377118-47x48.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/8431bd8fb81a98f61e4445690e68a0e446eb5652-44x44.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/0babc1679a4f22bf7fa381dea49530022e3bba7b-43x42.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/2f413939513e2e04329d600164980fe4cee63961-43x42.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/4742f9dcf2aceb681e4054500edb768af246fdf1-43x42.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/ce9ae0e9f55eeb57d3d3b4ecacf21fabbe32c44c-42x42.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/65e12174266a778516ef5700d6949c7abb808b8f-43x42.svg?w=100&fit=max&auto=format",
    },
    {
      image: "https://cdn.sanity.io/images/hvk0tap5/production/1ffb50ecf2bb72b8ffcf3c973598afe965e4a957-47x40.svg?w=100&fit=max&auto=format",
    },
    {
      image:"https://cdn.sanity.io/images/hvk0tap5/production/6fca86af8e2c89b257587ccef7000469c267d190-45x48.svg?w=100&fit=max&auto=format"
    },
    {
      image:"https://cdn.sanity.io/images/hvk0tap5/production/23c9204e5cf6cd814cb85f60417f85df0050bb46-43x38.svg?w=100&fit=max&auto=format"
    },
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-b from-[#111] to-black  items-center justify-center relative overflow-hidden">
      <p className="px-4 text-3xl md:text-6xl font-bold bg-gradient-to-l from-purple-700 via-red-700 to-blue-700 text-transparent bg-clip-text mb-20">Whatever your stack, it runs on Render.</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
