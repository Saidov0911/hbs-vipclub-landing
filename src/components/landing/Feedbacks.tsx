import { Section } from "./Section";
import { useI18n } from "@/i18n/I18nProvider";
import fb1 from "@/assets/feedback/fb-1.png";
import fb2 from "@/assets/feedback/fb-2.png";
import fb3 from "@/assets/feedback/fb-3.png";
import fb4 from "@/assets/feedback/fb-4.png";
import fb5 from "@/assets/feedback/fb-5.png";
import fb6 from "@/assets/feedback/fb-6.png";
import fb7 from "@/assets/feedback/fb-7.png";
import fb8 from "@/assets/feedback/fb-8.png";
import fb9 from "@/assets/feedback/fb-9.png";
import fb10 from "@/assets/feedback/fb-10.png";
import fb11 from "@/assets/feedback/fb-11.png";
import fb12 from "@/assets/feedback/fb-12.png";
import fb13 from "@/assets/feedback/fb-13.png";
import fb14 from "@/assets/feedback/fb-14.png";
import fb15 from "@/assets/feedback/fb-15.png";
import fb16 from "@/assets/feedback/fb-16.png";

const IMAGES = [fb1, fb2, fb3, fb4, fb5, fb6, fb7, fb8, fb9, fb10, fb11, fb12, fb13, fb14, fb15, fb16];

export const Feedbacks = () => {
  return (
    <Section
      id="feedbacks"
      eyebrow="Feedbacklar"
      title="A’zolarning haqiqiy fikrlari"
      subtitle="HBS VIP Club a’zolaridan kelgan jonli xabarlar va natijalar"
    >
      <div className="relative">
        <div className="pointer-events-none absolute -inset-x-10 -top-10 -bottom-10 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)] blur-3xl" />

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="mb-4 break-inside-avoid rounded-xl overflow-hidden border border-border/60 bg-card/40 shadow-md hover:border-primary/40 hover:shadow-elegant transition-all duration-300"
            >
              <img
                src={src}
                alt={`HBS VIP Club a'zo fikri ${i + 1}`}
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
