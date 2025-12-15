Berikut adalah draft **README.md** yang profesional dan lengkap untuk library Anda. Silakan simpan kode ini dalam file `README.md` di root folder proyek (atau di folder `packages/cli` agar muncul di halaman NPM).

-----

````markdown
# @albarmox/ui

Koleksi komponen UI yang didesain dengan indah, dibangun di atas **Radix UI** dan **Tailwind CSS**.

Ini **bukan** library komponen biasa. Anda tidak menginstallnya sebagai dependensi tunggal. Sebaliknya, Anda memilih komponen yang Anda butuhkan, dan kodenya akan langsung dicopy ke dalam proyek Anda.

Ini memberikan Anda kontrol penuh (ownership) atas kode tersebut untuk dimodifikasi sesuai kebutuhan desain Anda.

Inspired by [shadcn/ui](https://ui.shadcn.com/).

## 🚀 Fitur

- **Customizable:** Ubah style sesuka hati karena kodenya ada di project Anda.
- **Accessible:** Dibangun di atas Radix UI primitives.
- **Lightweight:** Hanya import apa yang Anda pakai.
- **Type Safe:** Ditulis sepenuhnya dengan TypeScript.

## 📦 Prasyarat

Sebelum menggunakan komponen ini, pastikan proyek Anda sudah terinstall **Tailwind CSS**.

Anda juga perlu menyiapkan file utility untuk menangani penggabungan class.
Buat file di `lib/utils.ts` (atau `src/lib/utils.ts`):

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
````

Dan install dependensi pendukung:

```bash
npm install clsx tailwind-merge class-variance-authority
```

## 🛠️ Penggunaan CLI

Cara termudah untuk menambahkan komponen adalah menggunakan CLI. Tidak perlu clone repo, cukup jalankan perintah berikut di terminal proyek Anda.

### 1\. Tambahkan Komponen

Contoh untuk menambahkan tombol (**Button**):

```bash
npx @albarmox/ui add button
```

Perintah ini akan:

1.  Mendownload kode komponen `button.tsx`.
2.  Menyimpannya di folder `components/ui/` proyek Anda.
3.  Memberitahu Anda jika ada dependensi tambahan yang perlu diinstall.

### 2\. Daftar Komponen yang Tersedia

Saat ini komponen yang tersedia antara lain:

  - `button`
  - `input`
  - *(Update list ini seiring Anda menambahkan komponen baru)*

-----

## 💻 Contoh Penggunaan

Setelah Anda menjalankan perintah `add button`, Anda bisa langsung menggunakannya seperti komponen React biasa.

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="p-10">
      <Button variant="default">Klik Saya</Button>
      <Button variant="destructive">Hapus</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}
```

## 🎨 Theming

Library ini menggunakan CSS Variables untuk warna. Pastikan file CSS global Anda (misal `app/globals.css`) memiliki konfigurasi warna dasar.

Contoh konfigurasi `:root` standar:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... tambahkan variabel lain sesuai kebutuhan */
  }
}
```

## 🤝 Kontribusi

Ingin menambahkan komponen baru?

1.  Clone repositori ini.
2.  Buat komponen baru di `components/ui`.
3.  Jalankan `npm run build:registry` untuk mengupdate database JSON.
4.  Buat Pull Request.

## 📄 Lisensi

MIT License. Bebas digunakan untuk proyek personal maupun komersial.

-----

\<p align="center"\>
Dibuat dengan ❤️ oleh \<a href="https://www.google.com/search?q=https://github.com/albarmo"\>Albar\</a\>
\</p\>

````

### Tips Tambahan agar README Menarik di NPM:

1.  **Tambahkan Badge:**
    Anda bisa menambahkan badge status di bagian paling atas (bawah judul) agar terlihat seperti library open-source populer.

    ```markdown
    [![NPM Version](https://img.shields.io/npm/v/@albarmox/ui)](https://www.npmjs.com/package/@albarmox/ui)
    [![License](https://img.shields.io/npm/l/@albarmox/ui)](https://github.com/albarmo/biteam)
    ```

2.  **Screenshot/GIF:**
    Jika memungkinkan, tambahkan gambar atau GIF yang menunjukkan betapa mudahnya menggunakan `npx @albarmox/ui add button`. Visual sangat membantu user baru.

3.  **Simpan File:**
    Simpan kode di atas sebagai `README.md` di folder `packages/cli/`. Saat Anda melakukan `npm publish` berikutnya, halaman NPM Anda akan otomatis menampilkan teks ini.
````