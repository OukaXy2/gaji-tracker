// Vercel Serverless Function.
// Membaca environment variables yang diset di Vercel Dashboard
// (Project Settings > Environment Variables) lalu mengirimkannya ke
// halaman sebagai JSON. Hanya berisi SUPABASE_URL dan anon key —
// keduanya memang aman untuk terlihat publik (lihat catatan di index.html).
export default function handler(req, res) {
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL || "",
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
  });
}
