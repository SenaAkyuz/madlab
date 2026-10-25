import { getReviews } from "@/lib/data";
import SafeImage from "@/components/ui/SafeImage";
import ReviewCarousel from "./ReviewCarousel";

export default async function CustomerLove() {
  const reviews = await getReviews();
  return (
    <section id="sonuclar" className="relative overflow-hidden text-cream">
      <SafeImage src="/images/reviews/bg.webp" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="container-x relative section-y">
        <h2 className="font-display-tight uppercase text-blush text-[clamp(3rem,10vw,9rem)]">
          <span className="block">Müşteri</span>
          <span className="block pl-[12%] sm:pl-[24%]">Sevgisi</span>
        </h2>
        <ReviewCarousel reviews={reviews} />
      </div>
    </section>
  );
}
