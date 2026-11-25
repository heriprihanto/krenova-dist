const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./polling-CQ3UOqlr.js","./ui-5TmKv6gv.js","./ui-DXL2SQNI.js","./vendor-loader-0bGKZbCT.js","./firebase-n2sTgpQs.js","./auth-KXINZb3H.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./bootstrap-mar4t7g4.js";import{$ as r,B as i,D as a,E as o,G as s,H as c,J as l,N as u,O as d,R as f,S as p,U as m,V as h,Y as g,Z as _,at as v,ct as y,dt as b,et as x,j as S,k as C,nt as w,rt as T,st as E,tt as D,u as O,ut as k,x as A}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var j=d(``),M=d({status:`loading`,pelajar:[],umum:[],selectedPelajarId:null,selectedUmumId:null}),N=s(`
  <div class="p-4 text-center text-slate-400">Memuat...</div>
`,1),ee=s(`
  <div class="p-4 text-center text-rose-400">Gagal memuat data.</div>
`,1),P=s(`
  <div class="p-8 text-center text-slate-500 bg-white/5 rounded-2xl border border-white/5"> </div>
`,1),te=s(`
    
    <div role="button" tabindex="0">
      <div class="space-y-3">
        <div class="flex justify-between items-start gap-2">
          <span class="text-xs text-indigo-400 font-semibold bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full"> </span>
          <div><!></div>
        </div>
        <h4 class="font-display font-bold text-slate-100 text-sm line-clamp-2 group-hover:text-indigo-400 transition-colors"> </h4>
        <p class="text-xs text-slate-400 font-medium"> </p>
        <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed"> </p>
      </div>
    </div>
  `,1),F=s(`
  <!>
`,1),I=s(`
<!>`,1);function ne(e,n){y(n,!0);let s=()=>a(M,`$pollItems`,l),[l,d]=o();k();var p=I(),h=T(D(p)),C=e=>{var t=N();k(2),m(e,t)},O=e=>{var t=ee();k(2),m(e,t)},A=e=>{var t=P(),i=T(D(t)),a=w(i);k(),r(()=>c(a,`Belum ada proposal ${n.category??``} yang disetujui untuk dipolling.`)),m(e,t)},j=e=>{var i=F(),a=T(D(i));f(a,1,()=>s()[n.category],e=>e.id,(e,i)=>{let a=v(()=>(n.category===`pelajar`?s().selectedPelajarId:s().selectedUmumId)===_(i).id);k();var o=te(),l=T(D(o)),d=T(x(l)),f=T(x(d)),p=T(x(f)),h=w(p,!0),y=T(p,2),C=x(y);t(C,{name:`check`,class:`w-3.5 h-3.5`}),b(y),k(),b(f);var E=T(f,2),O=w(E,!0),A=T(E,2),j=w(A,!0),M=T(A,2),N=w(M,!0);k(),b(d),k(),b(l),k(),r(()=>{S(l,`aria-pressed`,_(a)),S(l,`data-id`,_(i).id),u(l,1,`glass-card rounded-2xl p-5 border ${_(a)?n.category===`pelajar`?`border-indigo-500/50 bg-indigo-500/5 shadow-lg shadow-indigo-500/5`:`border-cyan-500/50 bg-cyan-500/5 shadow-lg shadow-cyan-500/5`:`border-white/5 hover:border-white/10`} cursor-pointer flex flex-col justify-between transition-all relative overflow-hidden group`),c(h,_(i).bidang||_(i).category||`Inovasi`),u(y,1,`poll-select-indicator w-5 h-5 rounded-full ${_(a)?n.category===`pelajar`?`bg-indigo-500 border-indigo-500 text-white`:`bg-cyan-500 border-cyan-500 text-white`:`border border-white/20 text-transparent group-hover:border-indigo-400`} flex items-center justify-center transition-all`),c(O,_(i).title||_(i).judul_inovasi),c(j,_(i).fullName||_(i).nama_inovator||`Inovator`),c(N,_(i).description||_(i).abstrak||``)}),g(`click`,l,function(...e){_(i).onselect?.apply(this,e)}),g(`keydown`,l,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),_(i).onselect())}),m(e,o)}),k(),m(e,i)};i(h,e=>{s().status===`loading`?e(C):s().status===`error`?e(O,1):s()[n.category].length?e(j,-1):e(A,2)}),m(e,p),E(),d()}l([`click`,`keydown`]);var re=s(`

    
    <div class="gov-topbar-stripe"></div>
    <div class="bg-[#040d1a] border-b border-white/5 py-1.5 px-4 text-slate-400 text-[11px] font-medium hidden sm:block">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center w-5 h-5 rounded bg-amber-500/20 text-amber-400 font-bold text-[10px] border border-amber-500/30">🏛️</span>
                <span class="tracking-wide text-slate-200 font-bold">PEMERINTAH KOTA TEGAL</span>
                <span class="text-slate-600">•</span>
                <span class="text-slate-300">BADAN PERENCANAAN PEMBANGUNAN, RISET DAN INOVASI DAERAH
                    (BAPPERIDA)</span>
            </div>
            <div class="flex items-center gap-4 text-slate-400 text-xs">
                <span class="flex items-center gap-1.5 font-semibold text-emerald-400"><!> Portal Resmi Terverifikasi</span>
                <span class="text-slate-700">|</span>
                <span class="text-amber-400/90 font-mono font-bold">Tahun Anggaran 2027</span>
            </div>
        </div>
    </div>

    
    <div id="loading-overlay">
        <div class="relative w-16 h-16">
            <div class="absolute inset-0 rounded-full border-4 border-slate-700/50"></div>
            <div class="absolute inset-0 rounded-full border-4 border-blue-600 border-t-amber-400 animate-spin"></div>
        </div>
        <p class="text-amber-400 font-medium animate-pulse" id="loading-text"> </p>
    </div>

    
    <div id="toast-container" class="toast-container"><!></div>

    
    <header class="sticky top-0 z-40 glass border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            <a href="index.html" class="flex items-center gap-3.5 group">
                <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-600 to-amber-500 p-0.5 shadow-lg shadow-blue-950/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div class="w-full h-full bg-[#061224] rounded-[10px] flex items-center justify-center">
                        <!>
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <span class="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">KRENOVA</span>
                        <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold font-mono border border-amber-500/30">2027</span>
                    </div>
                    <span class="font-sans font-medium text-[11px] block text-slate-400 -mt-0.5 tracking-wider uppercase">Kota
                        Tegal • BAPPERIDA</span>
                </div>
            </a>

            
            <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
                <a href="index.html#about" class="hover:text-amber-400 transition-colors">Tentang Krenova</a>
                <a href="index.html#categories" class="hover:text-amber-400 transition-colors">Bidang Lomba</a>
                <a href="index.html#timeline" class="hover:text-amber-400 transition-colors">Jadwal Kegiatan</a>
                <a href="polling.html" class="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 transition-colors">
                    <!>
                    <span>Polling Publik</span>
                </a>
                <a href="index.html#faq" class="hover:text-amber-400 transition-colors">FAQ</a>
            </nav>

            
            <div class="flex items-center gap-3">
                
                <span id="nav-user-email" class="hidden text-xs text-slate-300 border border-amber-500/20 rounded-full px-3 py-1.5 bg-amber-500/10 font-mono font-semibold"></span>

                
                <button id="btn-theme-toggle" class="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-amber-400/30 transition-all active:scale-95 flex items-center justify-center" title="Ubah Tema">
                    <!>
                    <!>
                </button>

                <button id="btn-auth-action" class="btn-glow btn-navy px-5 py-2.5 rounded-xl text-sm font-bold text-white active:scale-95 transition-all flex items-center gap-2 shadow-lg">
                    <!>
                    <span>Masuk Portal</span>
                </button>
            </div>
        </div>
    </header>

    
    <main class="flex-grow">
        
        <div id="polling" class="py-20 relative min-h-[calc(100vh-200px)] flex flex-col justify-center">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none">
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <div class="mb-8 flex justify-center">
                        <a href="index.html" class="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:bg-white/10">
                            <!>
                            Kembali ke Beranda
                        </a>
                    </div>
                    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Polling Publik Krenova 2027
                    </span>
                    <h1 class="font-display font-extrabold text-3xl sm:text-4xl text-white">
                        Dukung Inovasi Terfavorit Anda
                    </h1>
                    <div class="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                    <p class="text-slate-400">
                        Berikan dukungan suara Anda untuk proposal inovasi terbaik. Satu email dapat memilih maksimal 1
                        proposal Kategori Pelajar dan 1 proposal Kategori Umum.
                    </p>
                </div>

                
                <div id="polling-active-container">
                    <div class="grid lg:grid-cols-2 gap-8 items-start">
                        
                        <div class="space-y-4">
                            <div class="flex items-center justify-between border-b border-white/5 pb-3">
                                <h3 class="font-display font-bold text-lg text-white flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                                    Kategori Pelajar
                                </h3>
                                <span class="text-xs text-slate-400 font-medium bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">Pilih
                                    1 Inovasi</span>
                            </div>
                            <div id="polling-pelajar-list" class="grid sm:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"><!></div>
                        </div>

                        
                        <div class="space-y-4">
                            <div class="flex items-center justify-between border-b border-white/5 pb-3">
                                <h3 class="font-display font-bold text-lg text-white flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                                    Kategori Umum
                                </h3>
                                <span class="text-xs text-slate-400 font-medium bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">Pilih
                                    1 Inovasi</span>
                            </div>
                            <div id="polling-umum-list" class="grid sm:grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar"><!></div>
                        </div>
                    </div>

                    
                    <div class="max-w-xl mx-auto glass-card rounded-2xl p-6 border border-white/10 mt-10">
                        <form id="form-submit-poll" class="space-y-4">
                            <h4 class="font-display font-bold text-sm text-white uppercase tracking-wider text-center">
                                Konfirmasi Pilihan Suara</h4>

                            
                            <div id="poll-auth-fields" class="space-y-4 hidden">
                                <div>
                                    <label for="poll-user-email" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Alamat
                                        Email Anda</label>
                                    <input type="email" id="poll-user-email" required="" placeholder="contoh: nama@email.com" class="w-full px-4 py-3 rounded-xl text-sm bg-brand-dark/50 border border-white/10 text-white focus:outline-none focus:border-indigo-500"/>
                                </div>

                                <button type="submit" class="btn-glow w-full py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center justify-center gap-2">
                                    <!>
                                    <span>Kirim Polling Suara</span>
                                </button>
                            </div>

                            
                            <div id="poll-unauth-fields" class="text-center space-y-4">
                                <p class="text-xs text-slate-400 leading-relaxed">
                                    Anda wajib masuk menggunakan Akun Google untuk dapat memberikan dukungan suara pada
                                    proposal inovasi pilihan Anda.
                                </p>
                                <button type="button" id="btn-poll-login-google" class="btn-glow w-full py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center justify-center gap-2">
                                    <!>
                                    <span>Login dengan Google</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                
                <div id="polling-inactive-container">
                    <div class="glass-card rounded-3xl p-10 border border-white/5 space-y-5">
                        <div class="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
                            <!>
                        </div>
                        <h3 class="font-display font-extrabold text-xl text-white">Polling Belum Dibuka / Sudah Berakhir
                        </h3>
                        <p class="text-sm text-slate-400 leading-relaxed">
                            Mohon maaf, periode polling publik saat ini sedang tidak aktif. Polling hanya dapat
                            dilakukan selama rentang waktu yang telah ditentukan oleh Administrator.
                        </p>
                        <div class="bg-white/5 border border-white/5 rounded-2xl p-4 inline-block text-left mx-auto">
                            <div class="flex items-center gap-2.5 text-xs text-slate-300 justify-center">
                                <!>
                                <span>Jadwal Polling:</span>
                            </div>
                            <p class="font-display font-bold text-xs text-slate-100 mt-1.5" id="poll-schedule-range-text">
                                -
                            </p>
                        </div>
                    </div>
                </div>

                
                <div id="polling-voted-container">
                    <div class="glass-card rounded-3xl p-10 border border-white/5 space-y-5">
                        <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                            <!>
                        </div>
                        <h3 class="font-display font-extrabold text-xl text-white">Terima Kasih Atas Partisipasi Anda!
                        </h3>
                        <p class="text-sm text-slate-400 leading-relaxed">
                            Anda telah berhasil menyalurkan dukungan suara pada Polling Inovasi Krenova 2027. Data
                            pilihan polling Anda telah berhasil direkam oleh sistem.
                        </p>
                        <button id="btn-poll-reset-local" type="button" class="text-xs text-indigo-400 hover:text-indigo-300 transition-colors underline">
                            Gunakan email lain untuk memberikan suara
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    
    <footer class="mt-auto border-t border-white/10 bg-[#040d1a] relative z-10 text-slate-400">
        <div class="gov-gold-stripe"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
                <div>
                    <p class="text-slate-300 font-bold">Pemerintah Kota Tegal • BAPPERIDA</p>
                    <p class="text-[11px] text-slate-500 mt-0.5">&copy; 2027 KRENOVA Kota Tegal. Hak Cipta Dilindungi
                        Undang-Undang.</p>
                </div>
                <p class="text-[11px] text-slate-500 font-mono">Portal Resmi Penjaringan Inovasi Daerah (e-Krenova)</p>
            </div>
        </div>
    </footer>

    
    

    `,1);function L(n,i){y(i,!1);let s=()=>a(O,`$loading`,d),l=()=>a(j,`$pollingView`,d),[d,f]=o();C(),k();var p=re(),h=T(D(p),3),g=T(x(h)),_=T(x(g),3),v=T(x(_)),S=x(v);t(S,{name:`shield-check`,class:`w-3.5 h-3.5`}),k(),b(v),k(5),b(_),k(),b(g),k(),b(h);var A=T(h,2);let M;var N=T(x(A),3),ee=w(N);k(),b(A);var P=T(A,2),te=x(P);e(te,{}),b(P);var F=T(P,2),I=T(x(F)),L=T(x(I)),R=T(x(L)),z=T(x(R)),ie=T(x(z));t(ie,{name:`award`,class:`w-6 h-6 text-amber-400`}),k(),b(z),k(),b(R),k(3),b(L);var B=T(L,2),ae=T(x(B),7),oe=T(x(ae));t(oe,{name:`thumbs-up`,class:`w-4 h-4`}),k(3),b(ae),k(3),b(B);var se=T(B,2),V=T(x(se),3),ce=T(x(V));t(ce,{name:`sun`,class:`w-5 h-5 hidden dark:block text-amber-400`});var le=T(ce,2);t(le,{name:`moon`,class:`w-5 h-5 block dark:hidden text-blue-900`}),k(),b(V);var H=T(V,2),ue=T(x(H));t(ue,{name:`log-in`,class:`w-4 h-4`}),k(3),b(H),k(),b(se),k(),b(I),k(),b(F);var U=T(F,2),W=T(x(U)),de=T(x(W),3),G=T(x(de)),fe=T(x(G)),pe=T(x(fe)),me=T(x(pe));t(me,{name:`arrow-left`,class:`w-3.5 h-3.5`}),k(),b(pe),k(),b(fe),k(9),b(G);var K=T(G,2);let he;var q=T(x(K)),J=T(x(q)),ge=T(x(J),3);ne(x(ge),{category:`pelajar`}),b(ge),k(),b(J);var _e=T(J,2),ve=T(x(_e),3);ne(x(ve),{category:`umum`}),b(ve),k(),b(_e),k(),b(q);var ye=T(q,2),be=T(x(ye)),Y=T(x(be),3),xe=T(x(Y),3),Se=T(x(xe));t(Se,{name:`send`,class:`w-4 h-4`}),k(3),b(xe),k(),b(Y);var Ce=T(Y,2),we=T(x(Ce),3),Te=T(x(we));t(Te,{name:`log-in`,class:`w-4 h-4`}),k(3),b(we),k(),b(Ce),k(),b(be),k(),b(ye),k(),b(K);var X=T(K,2);let Ee;var De=T(x(X)),Z=T(x(De)),Oe=T(x(Z));t(Oe,{name:`calendar-off`,class:`w-8 h-8`}),k(),b(Z);var Q=T(Z,6),ke=T(x(Q)),Ae=T(x(ke));t(Ae,{name:`calendar`,class:`w-4 h-4 text-cyan-400`}),k(3),b(ke),k(3),b(Q),k(),b(De),k(),b(X);var $=T(X,2);let je;var Me=T(x($)),Ne=T(x(Me)),Pe=T(x(Ne));t(Pe,{name:`check-circle`,class:`w-8 h-8`}),k(),b(Ne),k(7),b(Me),k(),b($),k(),b(de),k(),b(W),k(),b(U),k(3),r(()=>{M=u(A,1,`loader-overlay fixed inset-0 flex flex-col items-center justify-center gap-4`,null,M,{hidden:!s().visible}),c(ee,`
            ${s().text??``}
        `),he=u(K,1,`space-y-8 animate-fade-in`,null,he,{hidden:l()!==`active`}),Ee=u(X,1,`max-w-xl mx-auto text-center space-y-6`,null,Ee,{hidden:l()!==`inactive`}),je=u($,1,`max-w-xl mx-auto text-center space-y-6`,null,je,{hidden:l()!==`voted`})}),m(n,p),E(),f()}var R=s(`
<!>`,1);function z(e,t){y(t,!1),p(()=>{n(()=>A(()=>import(`./polling-CQ3UOqlr.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url))}),C(),k();var r=R();L(T(D(r)),{}),m(e,r),E()}h(z,{target:document.body});export{j as n,M as t};