/* odeme sayfasi: ikas'in acik temasi okunur kalsin (koyu arka plan basliklari gorunmez yapiyordu) */
(function(){
  function on(){ return /^\/checkout/.test(location.pathname); }
  function apply(){
    var st = document.getElementById('bg-checkout');
    if (on()) {
      if (!st) { st = document.createElement('style'); st.id = 'bg-checkout'; st.textContent = 'html,body{background:#fff!important}'; (document.head || document.documentElement).appendChild(st); }
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
