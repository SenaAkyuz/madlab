import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-x section-y text-center">
      <p className="label text-ink-soft">404</p>
      <h1 className="font-display-tight mt-4 text-display-l uppercase">Sayfa bulunamadı</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-soft">Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/" variant="mocha">Ana sayfa</Button>
        <Button href="/designs" variant="outline">Tasarımlar</Button>
      </div>
    </div>
  );
}
