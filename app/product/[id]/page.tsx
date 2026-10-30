import React from "react";
import type { Metadata } from "next";
import { ProductDetailView } from "@/components/ProductDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return [
    { id: "prod-1" },
    { id: "prod-2" },
    { id: "prod-3" },
    { id: "prod-4" },
    { id: "prod-5" },
    { id: "prod-6" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: "Solid Linen Shirt | Varna Custom Wear",
    description:
      "Woven from 100% natural European flax linen. Relaxed tailored cut, pre-washed softness, breathable resort collar. Order directly on WhatsApp.",
    openGraph: {
      title: "Solid Linen Shirt - 100% European Flax Linen | Varna",
      description:
        "Effortless resort wear tailored for the tropics. Available in Forest Pine, Olive Moss, Charcoal Noir.",
      images: [
        {
          url: "/images/products/01-solid-linen-shirt.webp",
          width: 800,
          height: 1000,
          alt: "Solid Linen Shirt - Varna Custom Wear",
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  return <ProductDetailView productId={id} />;
}
