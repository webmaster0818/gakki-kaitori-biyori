(function() {
  var s = document.currentScript;
  if (!s) return;
  var box = document.createElement('div');
  box.setAttribute('style', 'box-sizing:border-box;max-width:340px;font-family:-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;border:1px solid #d9c58a;border-radius:12px;padding:14px 16px;background:linear-gradient(135deg,#fffdf5,#f6f0e2);color:#3a3326;line-height:1.5;');
  box.innerHTML = '<div style="font-size:11px;color:#8a7a55;margin-bottom:6px;">今週の楽器 実勢買取相場（中古中央値・2026-07-13更新）</div>'
    + '<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;margin-top:3px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Selmer Mark VI</span><span style="font-weight:600;white-space:nowrap;">\u00a5611,575</span></div>'
    + '<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;margin-top:3px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Gibson Les Paul Custom</span><span style="font-weight:600;white-space:nowrap;">\u00a5382,500</span></div>'
    + '<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;margin-top:3px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Selmer Series II</span><span style="font-weight:600;white-space:nowrap;">\u00a5363,000</span></div>'
    + '<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;margin-top:3px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Gibson Les Paul Standard</span><span style="font-weight:600;white-space:nowrap;">\u00a5220,000</span></div>'
    + '<div style="display:flex;justify-content:space-between;gap:8px;font-size:13px;margin-top:3px;"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">YAMAHA YAS-62</span><span style="font-weight:600;white-space:nowrap;">\u00a5212,933</span></div>'
    + '<div style="font-size:11px;margin-top:9px;"><a href="https://gakkikaitori-biyori.com/souba-ranking/" target="_blank" rel="noopener" style="color:#9a7b2d;text-decoration:underline;">楽器買取びより｜相場ランキング</a>（ヤフオク!落札データより毎週更新）</div>'
    + '<div style="font-size:10px;color:#9b8e6e;margin-top:4px;">※中古実勢の中央値。買取額は業者・状態により異なります。</div>';
  s.parentNode.insertBefore(box, s);
})();
