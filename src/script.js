/* ===== 言語切替 ===== */
function setLang(lang) {
  document.body.className = 'lang-' + lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase().startsWith(lang === 'ja' ? '日' : 'en'));
  });
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';
}

/* ===== Q&Aアコーディオン ===== */
function toggleQA(btn) {
  const item = btn.closest('.qa-item');
  // 同じカテゴリ（日/英）の他を閉じる
  document.querySelectorAll('.qa-item').forEach(i => {
    if (i !== item) i.classList.remove('open');
  });
  item.classList.toggle('open');
}
