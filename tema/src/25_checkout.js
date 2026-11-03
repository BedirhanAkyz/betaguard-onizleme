/* odeme sayfasi: ikas'in acik temasi okunur kalsin (koyu arka plan basliklari gorunmez yapiyordu) */
(function(){
  function on(){ return /^\/checkout/.test(location.pathname); }
  function apply(){
    var st = document.getElementById('bg-checkout');
    if (on()) {
      if (!st) { st = document.createElement('style'); st.id = 'bg-checkout'; st.textContent = 'html,body{background:#fff!important}html body input,html body select,html body textarea{background:#fff!important;color:#1A1A1C!important;border-color:#D4D4D8!important;border-radius:8px!important}html body input::placeholder,html body textarea::placeholder{color:#8A8A90!important}html body input:focus,html body select:focus,html body textarea:focus{border-color:#C9A45C!important;box-shadow:0 0 0 1px #C9A45C!important}'; (document.head || document.documentElement).appendChild(st); }
      document.documentElement.classList.add('bg-ready');
      /* daha once koyulastirilmis ogeleri geri al */
      [].forEach.call(document.querySelectorAll('[style*="important"]'), function(e){
        if (e.closest && e.closest('[class^="bg-"],[class*=" bg-"]')) return;
        ['background-color','color','border-color'].forEach(function(p){ if (e.style.getPropertyPriority(p) === 'important') e.style.removeProperty(p); });
      });
    } else if (st) st.remove();
  }
  apply(); setInterval(apply, 1000);
})();
