// =====================================================================
// Supabase の設定（ここだけ書きかえます）
//
// Supabase の画面 →「Project Settings」→「API Keys」（または「Data API」）で確認できます。
//   SUPABASE_URL ：Project URL（https://xxxx.supabase.co の形）
//   SUPABASE_KEY ：公開用の鍵（anon key / publishable key）
//
// ※ 公開用の鍵は、ここに書いて GitHub に上げても大丈夫です（データは RLS で守られています）。
// ※ service_role の鍵（secret key）は、ぜったいに書かないでください。
// =====================================================================
window.APP_CONFIG = {
  SUPABASE_URL: "sb_publishable_ZUDkLIqizJXlLmHA7xw_Fw_QWBKy_vy",
  SUPABASE_KEY: ""
};
