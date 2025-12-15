import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="mx-auto w-full min-w-0">
      
      {/* Breadcrumb Sederhana */}
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
        <ChevronRight className="h-4 w-4" />
        <div className="font-medium text-foreground">Introduction</div>
      </div>

      {/* Judul Halaman */}
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground">
          Component library modern yang didesain untuk kecepatan dan fleksibilitas.
        </p>
      </div>

      {/* Konten Dokumentasi */}
      <div className="pb-12 pt-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Bit UI</strong> adalah koleksi komponen reusable yang bisa kamu copy-paste langsung ke project Next.js kamu. 
            Ini bukanlah library component biasa yang kamu install lewat npm sebagai dependency besar (seperti MUI atau Bootstrap).
          </p>

          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Kenapa pakai ini?
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Kendalikan kode sepenuhnya.</li>
            <li>Desain modern dan minimalis.</li>
            <li>Support Dark Mode otomatis.</li>
            <li>Ringan, karena kamu hanya mengambil apa yang kamu butuhkan.</li>
          </ul>

          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            FAQ
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <strong>Apakah ini framework baru?</strong><br/>
            Bukan. Ini adalah pola pikir baru dalam membangun UI, terinspirasi dari Shadcn UI.
          </p>
        </div>

        {/* Tombol Navigasi Next */}
        <div className="mt-12 flex flex-row items-center justify-between">
          <div /> {/* Spacer */}
          <Link
            href="/docs/installation"
            className="group flex flex-col items-end gap-1 rounded-lg border p-4 hover:bg-muted/50 transition-colors text-right"
          >
            <span className="text-xs text-muted-foreground">Next</span>
            <span className="font-medium text-primary flex items-center">
              Installation <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}