/* Zenivita — memoria de intención de compra.

   Problema que resuelve: si la URL de la página de gracias configurada en
   Hotmart no lleva ?p=<producto>, gracias.html no sabe qué se compró y
   reporta US$9 al pixel — una venta de la Colección se registra como 9 en
   vez de 57 y el Meta nunca aprende quién compra caro.

   Este archivo guarda, en el navegador, el último producto cuyo checkout
   fue abierto. gracias.html lo usa como respaldo cuando falta ?p=.
   Si ?p= está presente, ?p= manda siempre.

   Límite: sólo funciona si el clic y el pago ocurren en el mismo navegador.
   Si la clienta abre el checkout en el celular y paga en la computadora,
   se cae al valor genérico de US$9 — el mismo comportamiento de antes.
   Por eso esto es una red de seguridad, no un sustituto de configurar ?p=. */
(function(){
  var MAP={
    'S106655226F':['intestino',9],  'L106655152B':['sueno',9],
    'K106813649H':['aroma',12],     'D106813694T':['tes',12],
    'E106710876K':['p30',27],       'F106799310T':['cuerpo',47],
    'F106802825S':['coleccion',57]
  };
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href*="pay.hotmart.com"]');
    if(!a)return;
    var h=a.getAttribute('href')||'';
    for(var c in MAP){
      if(h.indexOf(c)>-1){
        try{localStorage.setItem('zvIntent',
          JSON.stringify({k:MAP[c][0],v:MAP[c][1],t:Date.now()}));}catch(_){}
        break;
      }
    }
  },true);
})();
