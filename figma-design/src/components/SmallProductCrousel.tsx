import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";

// Example array of products. Replace this with your actual data source.
const products = [
  {
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqdeOuvTHzBTO18FRl7SfBu5Qk4-VyPQUeJRhWXW3s7PqBVljvmpgWDzrm7XP45C_zTVt70XOf61Y2JNB4QMBellAaBN5t6fGI48iEjG7q3RVHcm2dzThjJg&usqp=CAE",
    description: "Apple Watch Series 4",
    price: "$120.00",
  },
  {
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqdeOuvTHzBTO18FRl7SfBu5Qk4-VyPQUeJRhWXW3s7PqBVljvmpgWDzrm7XP45C_zTVt70XOf61Y2JNB4QMBellAaBN5t6fGI48iEjG7q3RVHcm2dzThjJg&usqp=CAE",
    description: "Girl Handy Beg",
    price: "$45.30",
  },
  {
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqdeOuvTHzBTO18FRl7SfBu5Qk4-VyPQUeJRhWXW3s7PqBVljvmpgWDzrm7XP45C_zTVt70XOf61Y2JNB4QMBellAaBN5t6fGI48iEjG7q3RVHcm2dzThjJg&usqp=CAE",
    description: "Beats Headphone",
    price: "$120.00",
  },
  // Add more products as needed
];

export function SmallProductCrousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-64 h-80"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col">
                    <img
                      src={product.imageSrc}
                      alt={product.description}
                      className="w-full h-auto"
                    />

                    <div className="text-18px font-semibold pt-2">
                      {product.description}
                    </div>
                    <div
                      style={{
                        color: "#60a5fa",
                      }}
                      className="text-16 font-semibold pt-2"
                    >
                      {product.price}
                    </div>
                    <button
                      style={{
                        background: "rgb(235, 241, 250)",
                        borderRadius: "5px",
                        padding: "5px",
                        marginTop: "10px",
                        width: "100px",
                        fontWeight: "semibold",
                        fontSize: "12px",
                       
                      }}
                     
                    >
                      Edit Product
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
