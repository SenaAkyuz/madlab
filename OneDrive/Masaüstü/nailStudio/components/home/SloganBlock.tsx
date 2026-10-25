import Button from "@/components/ui/Button";
import { site } from "@/config/site";

export default function SloganBlock() {
  return (
    <section className="container-x section-y text-center">
      <h2 className="font-display-tight mx-auto max-w-5xl text-display-l uppercase">
        Parmak uçlarında <em className="font-display normal-case italic text-rosewood">küçük bir kaçış</em>
      </h2>
      <p className="mx-auto mt-8 max-w-[60ch] text-ink-soft">{site.subtagline}</p>
      <div className="mt-10">
        <Button href="/book" variant="mocha">
          Randevu Al
        </Button>
      </div>
    </section>
  );
}
