const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./countdown-zVbHYNkW.js","./ui-Dj9QK-c8.js","./vendor-loader-0bGKZbCT.js","./ui-sIajGE2U.js","./firebase-n2sTgpQs.js","./app-ZXeDGH7f.js","./auth-B3RD7oKg.js","./wizard-BLktFDbX.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,t as n}from"./bootstrap-BQdxUVW_.js";import{$ as r,B as i,D as a,E as o,G as s,H as c,I as l,J as u,M as d,N as f,P as p,R as m,S as h,U as g,V as _,W as v,X as y,Y as b,Z as x,a as S,at as C,c as w,ct as T,d as E,dt as D,et as O,f as k,g as A,i as j,it as M,j as N,k as P,n as ee,nt as F,o as I,q as L,r as te,rt as R,s as z,st as B,t as V,tt as H,u as U,ut as W,v as G,x as K,y as q,z as J}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var Y=s(`

<div id="loading-overlay">
  <div class="loading-card svelte-9238kg" role="status" aria-live="polite" aria-atomic="true">
    <div class="loading-emblem svelte-9238kg" aria-hidden="true">
      <div class="loading-ring svelte-9238kg"></div>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M9 18h6M10 21h4M8.5 14.5a6 6 0 1 1 7 0c-1 .7-1.5 1.5-1.5 3.5h-4c0-2-.5-2.8-1.5-3.5Z"></path>
      </svg>
    </div>
    <p class="loading-brand svelte-9238kg">KRENOVA 2027</p>
    <p id="loading-text" class="loading-title svelte-9238kg"> </p>
    <p class="loading-description svelte-9238kg"> </p>
    <div class="loading-track svelte-9238kg" aria-hidden="true"><span class="svelte-9238kg"></span></div>
  </div>
</div>

`,1);function X(e,t){T(t,!1);let n=()=>a(U,`$loading`,l),i=()=>a(w,`$dashboardPending`,l),s=()=>a(q,`$wizardPending`,l),[l,u]=o();P(),W();var d=Y(),p=R(H(d));let m;var h=R(O(p)),_=R(O(h),5),v=F(_,!0),y=R(_,2),b=F(y,!0);W(3),D(h),W(),D(p),W(),r(()=>{m=f(p,1,`login-overlay svelte-9238kg`,null,m,{hidden:!n().visible&&!i()&&!s()}),c(v,s()?`Menyiapkan formulir...`:i()?`Loading...`:n().text),c(b,i()?`Mohon menunggu sebentar...`:`Mohon tunggu sebentar.`)}),g(e,d),B(),u()}var Z=s(`
                <button id="btn-auth-action" class="btn-glow btn-navy px-5 py-2.5 rounded-xl text-sm font-bold text-white active:scale-95 transition-all flex items-center gap-2 shadow-lg">
                    <!>
                    <span>Masuk Portal</span>
                </button>
                `,1),ne=s(`

    
    <div id="scroll-progress" class="scroll-indicator"></div>

    
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
                <span class="flex items-center gap-1.5 font-semibold text-emerald-400"><!> </span>
                <span class="text-slate-700">|</span>
                <span class="text-amber-400/90 font-mono font-bold">Tahun Anggaran 2027</span>
            </div>
        </div>
    </div>

    <!>

    
    <header class="sticky top-0 z-40 glass border-b border-white/10 transition-all duration-300 shadow-lg shadow-black/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            <a href="#scroll-progress" class="flex items-center gap-3.5 group">
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
                    <span class="font-sans font-medium text-[11px] block text-slate-400 -mt-0.5 tracking-wider uppercase">BAPPERIDA
                        • Kota Tegal</span>
                </div>
            </a>

            
            <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
                <a href="#about" class="hover:text-amber-400 transition-colors">Tentang Krenova</a>
                <a href="#categories" class="hover:text-amber-400 transition-colors">Bidang Lomba</a>
                <a href="#timeline" class="hover:text-amber-400 transition-colors">Jadwal Kegiatan</a>
                <a href="polling.html" class="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 transition-colors">
                    <!>
                    <span>Polling</span>
                </a>
                <a href="#faq" class="hover:text-amber-400 transition-colors">FAQ</a>
            </nav>

            
            <div class="flex items-center gap-3">
                
                <span id="nav-user-email" class="hidden text-xs text-slate-300 border border-amber-500/20 rounded-full px-3 py-1.5 bg-amber-500/10 font-mono font-semibold"></span>

                
                <div class="relative hidden" id="nav-notifications-wrapper">
                    <button id="btn-toggle-notifications" type="button" class="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-amber-400/30 transition-all active:scale-95 flex items-center justify-center relative" title="Notifikasi Masuk">
                        <!>
                        <span id="nav-notif-badge" class="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-rose-500 text-white min-w-[17px] text-center border-2 border-slate-900 shadow hidden">0</span>
                    </button>

                    
                    <div id="dropdown-notifications" class="hidden absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-[#0d1527] border border-white/15 shadow-2xl p-4 z-50 space-y-3 backdrop-blur-xl">
                        <div class="flex items-center justify-between border-b border-white/10 pb-2.5">
                            <div class="flex items-center gap-2">
                                <!>
                                <span class="font-display font-bold text-xs text-white">Pusat Notifikasi</span>
                            </div>
                            <button id="btn-dropdown-mark-all" type="button" class="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                                Tandai Dibaca
                            </button>
                        </div>
                        <div id="dropdown-notifications-list" class="max-h-72 overflow-y-auto custom-scrollbar space-y-2 text-xs">
                            <p class="text-center text-slate-500 py-4">Memuat notifikasi...</p>
                        </div>
                        <div class="border-t border-white/10 pt-2 text-center">
                            <button id="btn-dropdown-view-all" type="button" class="text-xs text-indigo-400 hover:text-indigo-300 font-bold transition-colors w-full py-1">
                                Buka Pusat Notifikasi Lengkap &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                
                <button id="btn-theme-toggle" class="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-amber-400/30 transition-all active:scale-95 flex items-center justify-center" title="Ubah Tema">
                    <!>
                    <!>
                </button>

                <!>
            </div>
        </div>
    </header>

    
    <div id="toast-container" class="toast-container"><!></div>

    `,1);function re(n){let s=()=>a(S,`$currentUser`,c),[c,l]=o();W();var u=ne(),f=R(H(u),3),p=R(f,2),m=R(O(p)),h=R(O(m),3),_=R(O(h)),v=O(_);t(v,{name:`shield-check`,class:`w-3.5 h-3.5`}),W(),D(_),W(5),D(h),W(),D(m),W(),D(p);var y=R(p,2);X(y,{});var b=R(y,2),x=R(O(b)),C=R(O(x)),w=R(O(C)),T=R(O(w)),E=R(O(T));t(E,{name:`award`,class:`w-6 h-6 text-amber-400`}),W(),D(T),W(),D(w),W(3),D(C);var k=R(C,2),A=R(O(k),7),j=R(O(A));t(j,{name:`thumbs-up`,class:`w-4 h-4`}),W(3),D(A),W(3),D(k);var M=R(k,2),N=R(O(M),3),P=R(O(N)),ee=R(O(P));t(ee,{name:`bell`,class:`w-5 h-5`}),W(3),D(P);var F=R(P,2),I=R(O(F)),L=R(O(I)),te=R(O(L));t(te,{name:`bell`,class:`w-4 h-4 text-indigo-400`}),W(3),D(L),W(3),D(I),W(5),D(F),W(),D(N);var z=R(N,2),B=R(O(z));t(B,{name:`sun`,class:`w-5 h-5 hidden dark:block text-amber-400`});var V=R(B,2);t(V,{name:`moon`,class:`w-5 h-5 block dark:hidden text-blue-900`}),W(),D(z);var U=R(z,2),G=e=>{var n=Z(),r=R(H(n)),i=R(O(r));t(i,{name:`log-in`,class:`w-4 h-4`}),W(3),D(r),W(),g(e,n)};i(U,e=>{s()||e(G)}),W(),D(M),W(),D(x),W(),D(b);var K=R(b,2),q=O(K);e(q,{}),D(K),W(),r(()=>{d(f,s()?`display: none !important;`:``),d(p,s()?`display: none !important;`:``),d(b,s()?`display: none !important;`:``),d(k,s()?`display: none !important;`:``)}),g(n,u),l()}var ie={teknologi:`cpu`,seni:`palette`,desain:`palette`,olahraga:`trophy`,pendidikan:`book-open`,kesehatan:`heart-pulse`,agribisnis:`sprout`,pangan:`wheat`,energi:`zap`,lingkungan:`leaf`,sosial:`users`,kuliner:`utensils`,digital:`monitor`,ekonomi:`bar-chart-3`},ae=[{bg:`bg-indigo-500/10`,text:`text-indigo-400`},{bg:`bg-purple-500/10`,text:`text-purple-400`},{bg:`bg-amber-500/10`,text:`text-amber-400`},{bg:`bg-cyan-500/10`,text:`text-cyan-400`},{bg:`bg-red-500/10`,text:`text-red-400`},{bg:`bg-emerald-500/10`,text:`text-emerald-400`},{bg:`bg-rose-500/10`,text:`text-rose-400`},{bg:`bg-sky-500/10`,text:`text-sky-400`},{bg:`bg-orange-500/10`,text:`text-orange-400`},{bg:`bg-teal-500/10`,text:`text-teal-400`}];function Q(e){let t=(e||``).toLowerCase();for(let[e,n]of Object.entries(ie))if(t.includes(e))return n;return`lightbulb`}var $={indigo:{dot:`bg-indigo-600`,text:`text-indigo-400`},cyan:{dot:`bg-cyan-500`,text:`text-cyan-400`},purple:{dot:`bg-purple-500`,text:`text-purple-400`},emerald:{dot:`bg-emerald-500`,text:`text-emerald-400`},amber:{dot:`bg-amber-500`,text:`text-amber-400`},rose:{dot:`bg-rose-500`,text:`text-rose-400`},sky:{dot:`bg-sky-500`,text:`text-sky-400`}},oe=s(`
  <div class="glass-card rounded-2xl p-6 text-center space-y-3 flex flex-col items-center animate-pulse min-h-[148px] justify-center">
    <div class="w-12 h-12 rounded-xl bg-white/5 shrink-0"></div>
    <div class="h-4 w-24 rounded bg-white/5"></div>
  </div>
`,1),se=s(`
                        
<!>`,1);function ce(e){W();var t=se(),n=R(H(t));m(n,0,()=>[,,,,,,],J,(e,t)=>{W();var n=oe();W(2),g(e,n)}),g(e,t)}var le=s(`
    <!>
  `,1),ue=s(`
    <div class="col-span-full text-center py-8"><p class="text-slate-500 text-sm"> </p></div>
  `,1),de=s(`
      
      <div class="glass-card rounded-2xl p-6 text-center space-y-3 flex flex-col items-center min-h-[148px] justify-center">
        <div><!></div>
        <h4 class="font-display font-bold text-sm text-white"> </h4>
      </div>
    `,1),fe=s(`
<div id="categories-grid">
  <!>
</div>`,1);function pe(e,n){T(n,!1);let s=()=>a(j,`$categories`,l),[l,u]=o(),d=e=>e>=6?`grid-cols-2 md:grid-cols-3 lg:grid-cols-6`:e>=4?`grid-cols-2 md:grid-cols-4`:`grid-cols-2 md:grid-cols-3`;P(),W();var p=fe(),h=R(H(p)),_=R(O(h)),v=e=>{var t=le();ce(R(H(t)),{}),W(),g(e,t)},y=e=>{var t=ue(),n=R(H(t)),i=O(n),a=F(i,!0);D(n),W(),r(()=>c(a,s().status===`error`?`Gagal memuat kategori lomba.`:`Belum ada kategori lomba yang tersedia.`)),g(e,t)},b=e=>{var n=le(),i=R(H(n));m(i,1,()=>s().items,J,(e,n,i)=>{let a=M(()=>ae[i%ae.length]);W();var o=de(),s=R(H(o)),l=R(O(s)),u=O(l);{let e=M(()=>Q(x(n).nama));t(u,{get name(){return x(e)},class:`w-6 h-6`})}D(l);var d=R(l,2),p=F(d,!0);W(),D(s),W(),r(()=>{f(l,1,`w-12 h-12 rounded-xl ${x(a).bg??``} flex items-center justify-center ${x(a).text??``}`),c(p,x(n).nama)}),g(e,o)}),W(),g(e,n)};i(_,e=>{s().status===`loading`?e(v):s().status===`error`||!s().items.length?e(y,1):e(b,-1)}),W(),D(h),r(e=>f(h,1,`grid ${e??``} gap-6 min-h-[148px]`),[()=>d(s().status===`loading`?6:s().items.length)]),g(e,p),B(),u()}var me=s(`
  <div>
    <div class="absolute -left-3 top-2 w-6 h-6 rounded-full bg-slate-800 border-4 border-slate-900"></div>
    <div class="h-3 w-28 bg-white/10 rounded mb-2"></div>
    <div class="h-5 w-48 bg-white/15 rounded mb-2"></div>
    <div class="h-3.5 w-full max-w-xl bg-white/5 rounded"></div>
  </div>
`,1),he=s(`
                        
<!>`,1);function ge(e){W();var t=he(),n=R(H(t));m(n,0,()=>[,,,,,,],J,(e,t,n)=>{W();var r=me(),i=R(H(r));f(i,1,`relative pl-8 animate-pulse ${n===0?`p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20`:``}`),W(),g(e,r)}),g(e,t)}var _e=s(`
  <!>
`,1),ve=s(`
  <div class="p-8 text-center text-slate-500"> </div>
`,1),ye=s(`
        <div><span class="w-2 h-2 rounded-full bg-white"></span></div>
      `,1),be=s(`
        <div></div>
      `,1),xe=s(`<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse ml-2"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Tahapan Berjalan</span>`),Se=s(`
    
    
    <div>
      <!>
      <span> </span>
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-display font-bold text-lg text-white"> </h3>
        <!>
      </div>
      <p> </p>
    </div>
  `,1),Ce=s(`
<!>`,1);function we(e,t){T(t,!1);let n=()=>a(A,`$timeline`,s),[s,l]=o();P(),W();var u=Ce(),d=R(H(u)),p=e=>{var t=_e();ge(R(H(t)),{}),W(),g(e,t)},h=e=>{var t=ve(),i=R(H(t)),a=F(i,!0);W(),r(()=>c(a,n().status===`error`?`Gagal memuat timeline.`:`Belum ada jadwal timeline yang dipublikasikan.`)),g(e,t)},_=e=>{var t=_e(),a=R(H(t));m(a,1,()=>n().items,J,(e,t,a)=>{let o=M(()=>a===n().activeIndex),s=M(()=>$[x(t).warna]||$.indigo);W();var l=Se(),u=R(H(l)),d=R(O(u)),p=e=>{var t=ye(),n=R(H(t));W(),r(()=>f(n,1,`absolute -left-3.5 top-3 w-7 h-7 rounded-full ${x(s).dot??``} border-4 border-slate-900 flex items-center justify-center animate-pulse shadow-lg`)),g(e,t)},m=e=>{var t=be(),n=R(H(t));W(),r(()=>f(n,1,`absolute -left-3 top-1.5 w-6 h-6 rounded-full ${x(s).dot??``} border-4 border-slate-900 flex items-center justify-center`)),g(e,t)};i(d,e=>{x(o)?e(p):e(m,-1)});var h=R(d,2),_=F(h,!0),v=R(h,2),y=R(O(v)),b=F(y,!0),S=R(y,2),C=e=>{var t=xe();g(e,t)};i(S,e=>{x(o)&&e(C)}),W(),D(v);var w=R(v,2),T=F(w,!0);W(),D(u),W(),r(()=>{f(u,1,`relative pl-8 transition-all ${x(o)?`p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 shadow-lg shadow-indigo-600/10`:``}`),f(h,1,`absolute -left-4 md:-left-32 top-1 text-xs font-mono font-bold ${x(o)?`text-indigo-300 font-extrabold`:`text-slate-400`} uppercase tracking-widest md:text-right md:w-24`),c(_,x(t).tanggal||`-`),c(b,x(t).judul||`-`),f(w,1,`${x(o)?`text-slate-200`:`text-slate-400`} text-sm mt-1 leading-relaxed`),c(T,x(t).deskripsi||`-`)}),g(e,l)}),W(),g(e,t)};i(d,e=>{n().status===`loading`?e(p):n().items.length?e(_,-1):e(h,1)}),g(e,u),B(),l()}var Te=s(`
<section id="section-landing">
            
            <div class="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
                
                <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-3xl pointer-events-none">
                </div>
                <div class="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none">
                </div>

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-6 space-y-7 text-center lg:text-left">
                        

                        <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.15] text-white">
                            Inovasi Berkelanjutan
                            <br class="hidden sm:inline"/>
                            <span class="text-gradient-brand">
                                Membangun Daya Saing Kota
                            </span>
                        </h1>

                        <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                            Pemerintah Kota Tegal melalui BAPPERIDA menyelenggarakan <strong class="text-white">KRENOVA
                                2027</strong> guna menjaring, membina, dan mengapresiasi
                            kreativitas serta karya inovasi teknologi masyarakat demi kemandirian dan kemajuan daerah.
                        </p>

                        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                            <button class="btn-glow btn-gold px-8 py-4 rounded-xl text-sm font-extrabold active:scale-98 transition-all flex items-center justify-center gap-2.5 shadow-xl">
                                <!>
                                Daftarkan Proposal Inovasi
                            </button>
                            <a href="panduan-peserta.html" class="px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white rounded-xl text-sm font-semibold active:scale-98 transition-all flex items-center justify-center gap-2 hover:border-amber-400/40">
                                <!>
                                Panduan Peserta
                            </a>
                        </div>

                        
                        <div class="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                            <div>
                                <p class="font-display font-extrabold text-3xl text-amber-400">
                                    Rp 30 Jt+
                                </p>
                                <p class="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                                    Total Dana Pembinaan
                                </p>
                            </div>
                            <div>
                                <p class="font-display font-extrabold text-3xl text-blue-400">
                                    6+ Bidang
                                </p>
                                <p class="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                                    Kategori Inovasi
                                </p>
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <p class="font-display font-extrabold text-3xl text-emerald-400">
                                    100%
                                </p>
                                <p class="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                                    Seleksi Transparan
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-6 relative flex justify-center">
                        
                        <div class="relative w-full max-w-[640px] rounded-3xl bg-gradient-to-tr from-blue-900/40 via-slate-800/40 to-amber-500/20 p-1 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/60 group">
                            <div class="w-full h-full rounded-[22px] overflow-hidden bg-[#0c1c36] relative">
                                <img src="./images/poster.jpg" alt="Poster Resmi KRENOVA 2027 Kota Tegal" class="w-full h-auto object-cover rounded-[20px] shadow-lg transition-transform duration-500 group-hover:scale-[1.02]" width="1254" height="1254" loading="eager" fetchpriority="high"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="about" class="py-20 bg-[#08182b]/70 border-y border-white/10 relative">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <div class="gov-badge gov-badge-gold mx-auto">
                            📜 Landasan & Tujuan Kegiatan
                        </div>
                        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white">
                            Mengenai Krenova Kota Tegal
                        </h2>
                        <div class="h-1 w-24 bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600 mx-auto rounded-full">
                        </div>
                        <p class="text-slate-300 text-base leading-relaxed">
                            Ajang Pemberian Penghargaan Kreativitas dan Inovasi Masyarakat (KRENOVA) merupakan program
                            strategis Pemerintah Kota Tegal dalam mendorong iklim riset, penciptaan teknologi tepat
                            guna, dan peningkatan daya saing ekonomi berbasis potensi daerah.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="glass-card rounded-2xl p-8 space-y-4 border border-white/10">
                            <div class="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-blue-400">
                                <!>
                            </div>
                            <h3 class="font-display font-bold text-xl text-white">
                                Orisinalitas & Integritas
                            </h3>
                            <p class="text-sm text-slate-300 leading-relaxed">
                                Setiap karya yang diajukan wajib disertai Surat Pernyataan Orisinalitas bermaterai untuk
                                menjamin keaslian ide dan bebas dari plagiasi.
                            </p>
                        </div>

                        <div class="glass-card rounded-2xl p-8 space-y-4 border border-white/10">
                            <div class="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <!>
                            </div>
                            <h3 class="font-display font-bold text-xl text-white">
                                Kategori Peserta Terbuka
                            </h3>
                            <p class="text-sm text-slate-300 leading-relaxed">
                                Dapat diikuti oleh seluruh lapisan masyarakat Kota Tegal, baik perseorangan maupun
                                kelompok (Pelajar SMP/SMA/SMK, Mahasiswa, Praktisi, dan Masyarakat Umum).
                            </p>
                        </div>

                        <div class="glass-card rounded-2xl p-8 space-y-4 border border-white/10">
                            <div class="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                <!>
                            </div>
                            <h3 class="font-display font-bold text-xl text-white">
                                Kemanfaatan Ekonomi & Sosial
                            </h3>
                            <p class="text-sm text-slate-300 leading-relaxed">
                                Prioritas penilaian diberikan pada inovasi yang aplikatif, bernilai ekonomi, dan mampu
                                menjadi solusi nyata permasalahan pembangunan daerah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="categories" class="py-20 relative">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                        <div class="gov-badge gov-badge-gold mx-auto">
                            🎯 Fokus Bidang Inovasi
                        </div>
                        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white">
                            Kategori & Bidang Lomba
                        </h2>
                        <div class="h-1 w-24 bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600 mx-auto rounded-full">
                        </div>
                        <p id="categories-subtitle" class="text-slate-300 text-base"><!></p>
                    </div>

                    
                    <!>
                </div>
            </div>

            
            <div id="timeline" class="py-20 bg-[#08182b]/70 border-t border-white/10 relative">
                <div class="max-w-4xl mx-auto px-4 sm:px-6">
                    <div class="text-center space-y-4 mb-16">
                        <div class="gov-badge gov-badge-gold mx-auto">
                            📅 Agenda & Linimasa
                        </div>
                        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white">
                            Jadwal Pelaksanaan Krenova 2027
                        </h2>
                        <div class="h-1 w-24 bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600 mx-auto rounded-full">
                        </div>
                        <p id="timeline-subtitle" class="text-slate-300 text-base">
                            Rangkaian tahapan pendaftaran, verifikasi berkas, dan evaluasi dewan juri:
                        </p>
                    </div>

                    
                    <div id="timeline-container" class="relative border-l border-slate-700 ml-4 md:ml-32 space-y-12 min-h-[500px]"><!></div>
                </div>
            </div>



            
            <div id="faq" class="py-20 relative">
                <div class="max-w-4xl mx-auto px-4 sm:px-6">
                    <div class="text-center space-y-4 mb-16">
                        <h2 class="font-display font-extrabold text-3xl sm:text-4xl text-white">
                            Tanya Jawab (FAQ)
                        </h2>
                        <div class="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    <div class="space-y-4">
                        <details name="krenova-faq" class="glass-card rounded-2xl overflow-hidden" open="">
                            <summary class="p-6 font-display font-bold text-slate-100 cursor-pointer flex justify-between items-center select-none hover:bg-white/5 transition-colors">
                                Apakah boleh mengedit proposal setelah
                                disubmit?
                            </summary>
                            <div class="p-6 pt-0 text-slate-400 text-sm border-t border-white/5 bg-slate-900/20">
                                Selama proposal masih berstatus
                                <span class="text-indigo-400 font-semibold font-mono bg-indigo-500/10 px-2 py-0.5 rounded">Draft</span>,
                                Anda bebas mengedit data dan berkasnya.
                                Namun, apabila sudah berstatus
                                <span class="text-emerald-400 font-semibold font-mono bg-emerald-500/10 px-2 py-0.5 rounded">Submitted</span>,
                                berkas telah dikunci untuk dinilai juri
                                dan tidak dapat diubah lagi.
                            </div>
                        </details>

                        <details name="krenova-faq" class="glass-card rounded-2xl overflow-hidden">
                            <summary class="p-6 font-display font-bold text-slate-100 cursor-pointer flex justify-between items-center select-none hover:bg-white/5 transition-colors">
                                Berapa ukuran berkas maksimum yang bisa
                                diunggah?
                            </summary>
                            <div class="p-6 pt-0 text-slate-400 text-sm border-t border-white/5 bg-slate-900/20">
                                Batas maksimum unggah berkas adalah:
                                <ul class="list-disc list-inside mt-2 space-y-1">
                                    <li>
                                        Foto Tim (JPG/PNG):
                                        <strong>2 MB</strong>
                                    </li>
                                    <li>
                                        Surat Pernyataan Orisinalitas (PDF):
                                        <strong>5 MB</strong>
                                    </li>
                                    <li>
                                        Lembar Pengesahan (PDF):
                                        <strong>5 MB</strong>
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details name="krenova-faq" class="glass-card rounded-2xl overflow-hidden">
                            <summary class="p-6 font-display font-bold text-slate-100 cursor-pointer flex justify-between items-center select-none hover:bg-white/5 transition-colors">
                                Bagaimana jika saya belum memiliki akun
                                Firebase?
                            </summary>
                            <div class="p-6 pt-0 text-slate-400 text-sm border-t border-white/5 bg-slate-900/20">
                                Tenang! Aplikasi ini dilengkapi dengan
                                <strong>MOCK MODE</strong> otomatis. Jika
                                kunci konfigurasi Firebase belum diatur,
                                portal akan tetap berfungsi penuh
                                menggunakan penyimpanan lokal peramban
                                (LocalStorage) sehingga Anda tetap bisa
                                memvisualisasikan seluruh sistem.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>`,1);function Ee(e,n){T(n,!1);let s=()=>a(te,`$activeSection`,u),l=()=>a(j,`$categories`,u),[u,d]=o();P(),W();var p=Te(),m=R(H(p));let h;var _=R(O(m)),v=R(O(_),5),y=R(O(v)),x=R(O(y),5),S=R(O(x)),C=R(O(S));t(C,{name:`file-plus`,class:`w-5 h-5`}),W(),D(S);var w=R(S,2),E=R(O(w));t(E,{name:`book-open`,class:`w-5 h-5 text-amber-400`}),W(),D(w),W(),D(x),W(3),D(y),W(3),D(v),W(),D(_);var A=R(_,2),M=R(O(A)),N=R(O(M),3),ee=R(O(N)),F=R(O(ee)),I=R(O(F));t(I,{name:`shield-check`,class:`w-6 h-6`}),W(),D(F),W(5),D(ee);var z=R(ee,2),V=R(O(z)),U=R(O(V));t(U,{name:`users`,class:`w-6 h-6`}),W(),D(V),W(5),D(z);var G=R(z,2),K=R(O(G)),q=R(O(K));t(q,{name:`trending-up`,class:`w-6 h-6`}),W(),D(K),W(5),D(G),W(),D(N),W(),D(M),W(),D(A);var J=R(A,2),Y=R(O(J)),X=R(O(Y)),Z=R(O(X),7),ne=O(Z),re=e=>{var t=L();r(()=>c(t,`Krenova mewadahi berbagai gagasan inovatif dalam ${l().items.length??``} kategori:`)),g(e,t)},ie=e=>{var t=L(`
                            Penjaringan karya inovasi daerah mencakup bidang-bidang fokus pembangunan strategis berikut:
                        `);g(e,t)};i(ne,e=>{l().items.length?e(re):e(ie,-1)}),D(Z),W(),D(X),pe(R(X,2),{}),W(),D(Y),W(),D(J);var ae=R(J,2),Q=R(O(ae)),$=R(O(Q),3);we(O($),{}),D($),W(),D(Q),W(),D(ae),W(3),D(m),r(()=>h=f(m,1,`view-section`,null,h,{hidden:s()!==`section-landing`,active:s()===`section-landing`})),b(`click`,S,()=>k(`section-auth`)),g(e,p),B(),d()}u([`click`]);var De=s(`
<section id="section-auth">
            <div class="max-w-md mx-auto px-4">
                
                <div class="glass-card rounded-3xl p-8 relative overflow-hidden">
                    <div class="absolute -top-16 -left-16 w-32 h-32 bg-indigo-600/20 rounded-full blur-xl"></div>
                    <div class="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-600/20 rounded-full blur-xl"></div>

                    
                    <div id="auth-mock-badge" class="hidden mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-400 flex items-center gap-2">
                        <!>
                        <span>Mode Demo Aktif: Anda dapat masuk dengan
                            password apa saja (email tervalidasi).</span>
                    </div>

                    
                    <div class="text-center mb-8">
                        <h2 class="font-display font-extrabold text-2xl text-white mb-2">
                            Login
                        </h2>
                        <p class="text-slate-400 text-sm">
                            Gunakan salah satu akun sosial Anda di bawah ini
                            untuk mengakses dashboard Krenova.
                        </p>
                    </div>

                    
                    <div class="space-y-4">
                        
                        <button id="btn-google-auth" type="button" class="w-full py-3.5 rounded-xl text-slate-200 text-sm font-semibold border border-white/10 bg-white/5 hover:bg-white/10 active:scale-98 transition-all flex items-center justify-center gap-3">
                            <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"></path>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                            </svg>
                            <span>Google Account</span>
                        </button>

                        
                        <button id="btn-x-auth" type="button" class="w-full py-3.5 rounded-xl text-slate-200 text-sm font-semibold border border-white/10 bg-grey hover:bg-zinc-900 active:scale-98 transition-all flex items-center justify-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x me-3" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z">
                                </path>
                            </svg>
                            <span>Akun X</span>
                        </button>

                        
                        <button id="btn-facebook-auth" type="button" class="w-full py-3.5 rounded-xl text-slate-200 text-sm font-semibold border border-white/10 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-white active:scale-98 transition-all flex items-center justify-center gap-3">
                            <svg class="w-5 h-5 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                            </svg>
                            <span>Facebook</span>
                        </button>
                    </div>

                    
                    <div class="mt-6 text-center">
                        <button id="btn-back-to-landing" class="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 mx-auto">
                            <!>
                            Kembali ke Landing Page
                        </button>
                    </div>
                </div>
            </div>
        </section>`,1);function Oe(e){let n=()=>a(te,`$activeSection`,i),[i,s]=o();W();var c=De(),l=R(H(c));let u;var d=R(O(l)),p=R(O(d)),m=R(O(p),5),h=R(O(m));t(h,{name:`alert-triangle`,class:`w-4 h-4 shrink-0`}),W(3),D(m);var _=R(m,6),v=R(O(_)),y=R(O(v));t(y,{name:`arrow-left`,class:`w-3.5 h-3.5`}),W(),D(v),W(),D(_),W(),D(p),W(),D(d),W(),D(l),r(()=>u=f(l,1,`view-section py-12 sm:py-20 relative`,null,u,{hidden:n()!==`section-auth`,active:n()===`section-auth`})),g(e,c),s()}var ke=s(`
  <button>
    <!><span> </span>
  </button>
`,1),Ae=s(`
<!>`,1);function je(e){let n=()=>a(z,`$dashboardMenu`,s),i=()=>a(V,`$activePanel`,s),[s,l]=o();W();var u=Ae(),d=R(H(u));m(d,1,n,e=>e.panel,(e,n)=>{W();var a=ke(),o=R(H(a)),s=R(O(o));t(s,{get name(){return x(n).icon},class:`w-4 h-4`});var l=R(s),u=F(l,!0);W(),D(o),W(),r(()=>{f(o,1,`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all text-left ${i()===x(n).panel?`font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-600/10`:`font-semibold text-slate-400 hover:text-white hover:bg-white/5`}`),c(u,x(n).label)}),b(`click`,o,function(...e){x(n).onselect?.apply(this,e)}),g(e,a)}),g(e,u),l()}u([`click`]);var Me=s(`
  
  <button>
    <!><span> </span>
  </button>
`,1),Ne=s(`
<!>`,1);function Pe(e,n){T(n,!1);let s=()=>a(I,`$dashboardHeader`,l),[l,u]=o();P(),W();var d=Ne(),m=R(H(d)),h=e=>{let n=M(()=>s().action);var i=Me(),a=R(H(i)),o=R(O(a));t(o,{get name(){return x(n).icon},class:`w-4 h-4`});var l=R(o),u=F(l,!0);W(),D(a),W(),r(()=>{N(a,`id`,x(n).id),f(a,1,p(x(n).className)),c(u,x(n).label)}),b(`click`,a,function(...e){x(n).onclick?.apply(this,e)}),g(e,i)};i(m,e=>{s().action&&e(h)}),g(e,d),B(),u()}u([`click`]);var Fe=s(`
                              <!>
                            `,1),Ie=s(`
                              <div class="glass-card rounded-2xl p-8 text-center text-sm text-slate-400">Memuat panel…</div>
                            `,1),Le=s(`
<section id="section-dashboard">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="flex flex-col lg:flex-row gap-8">
                    
                    <aside class="w-full lg:w-64 shrink-0 flex flex-col gap-6">
                        
                        <div class="glass-card rounded-2xl p-4 flex items-center gap-3.5 shadow-lg border border-white/5">
                            <div class="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-600 to-amber-500 p-0.5 shadow-lg shadow-blue-950/50 flex items-center justify-center shrink-0">
                                <div class="w-full h-full bg-[#061224] rounded-[10px] flex items-center justify-center">
                                    <!>
                                </div>
                            </div>
                            <div class="min-w-0">
                                <div class="flex items-center gap-2">
                                    <span class="font-display font-extrabold text-xl tracking-tight text-white">KRENOVA</span>
                                    <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold font-mono border border-amber-500/30">2027</span>
                                </div>
                                <span class="font-sans font-medium text-[10.5px] block text-slate-400 tracking-wider uppercase truncate">BAPPERIDA
                                    • Kota Tegal</span>
                            </div>
                        </div>

                        
                        <div class="glass-card rounded-2xl p-6 text-center relative overflow-hidden flex flex-col items-center gap-3">
                            <div class="absolute -top-12 -left-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-lg">
                            </div>
                            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-display font-extrabold text-xl shadow-lg" id="sidebar-user-avatar">
                                P
                            </div>
                            <div class="min-w-0 w-full">
                                <h4 id="sidebar-user-name" class="font-display font-bold text-white text-base truncate">
                                    User
                                </h4>
                                <p id="sidebar-user-email" class="text-xs text-slate-400 font-mono truncate">
                                    user@email.com
                                </p>
                                <div class="mt-2.5">
                                    <span id="sidebar-user-role-badge" class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                        Role
                                    </span>
                                </div>
                            </div>
                        </div>

                        
                        <nav id="sidebar-nav-menu" class="glass-card rounded-2xl p-4 flex flex-col gap-1.5"><!></nav>

                        
                        <div class="glass-card rounded-2xl p-3 flex flex-col gap-2">
                            <button id="btn-theme-toggle-sidebar" type="button" class="p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-amber-400/30 transition-all active:scale-95 flex items-center justify-center text-xs font-semibold gap-2" title="Ubah Tema">
                                <!>
                                <!>
                                <span>Ubah Tema</span>
                            </button>
                            <button id="btn-auth-action" type="button" class="w-full py-2.5 px-3 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95">
                                <!>
                                <span>Keluar Portal</span>
                            </button>
                        </div>
                    </aside>

                    
                    <div class="flex-grow min-w-0 space-y-6">
                        
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                            <div>
                                <h2 id="dashboard-main-title" class="font-display font-extrabold text-2xl sm:text-3xl text-white"> </h2>
                                <p id="dashboard-main-subtitle" class="text-slate-400 text-sm mt-1"> </p>
                            </div>

                            <div id="dashboard-action-container"><!></div>
                        </div>

                        
                        <div id="dashboard-panels-container">
                            <!>
                        </div>
                    </div>
                </div>
            </div>
        </section>

`,1);function Re(e,n){T(n,!1);let s=()=>a(w,`$dashboardPending`,m),u=()=>a(te,`$activeSection`,m),d=()=>a(I,`$dashboardHeader`,m),p=()=>a(ee,`$activePanelComponent`,m),[m,h]=o();function _(){document.documentElement.classList.contains(`dark`)?(document.documentElement.classList.remove(`dark`),document.documentElement.classList.add(`light`),localStorage.setItem(`krenova_theme`,`light`)):(document.documentElement.classList.remove(`light`),document.documentElement.classList.add(`dark`),localStorage.setItem(`krenova_theme`,`dark`))}P(),W();var v=Le(),b=R(H(v));let x;var S=R(O(b)),C=R(O(S)),E=R(O(C)),k=R(O(E)),A=R(O(k)),j=R(O(A)),M=R(O(j));t(M,{name:`award`,class:`w-6 h-6 text-amber-400`}),W(),D(j),W(),D(A),W(3),D(k);var L=R(k,4);je(O(L),{}),D(L);var z=R(L,2),V=R(O(z)),U=R(O(V));t(U,{name:`sun`,class:`w-4 h-4 hidden dark:block text-amber-400`});var G=R(U,2);t(G,{name:`moon`,class:`w-4 h-4 block dark:hidden text-blue-900`}),W(3),D(V);var K=R(V,2),q=R(O(K));t(q,{name:`log-out`,class:`w-4 h-4`}),W(3),D(K),W(),D(z),W(),D(E);var J=R(E,2),Y=R(O(J)),X=R(O(Y)),Z=R(O(X)),ne=F(Z,!0),re=R(Z,2),ie=F(re,!0);W(),D(X);var ae=R(X,2);Pe(O(ae),{}),D(ae),W(),D(Y);var Q=R(Y,2),$=R(O(Q)),oe=e=>{var t=Fe(),n=R(H(t));l(n,p,(e,t)=>{t(e,{})}),W(),g(e,t)},se=e=>{var t=Ie();W(2),g(e,t)};i($,e=>{p()?e(oe):e(se,-1)}),W(),D(Q),W(),D(J),W(),D(C),W(),D(S),W(),D(b),W(),r(()=>{N(b,`aria-busy`,s()),x=f(b,1,`view-section py-6 relative svelte-1y1a8hs`,null,x,{"dashboard-ready":!s(),hidden:u()!==`section-dashboard`,active:u()===`section-dashboard`}),c(ne,d().title),c(ie,d().subtitle)}),y(`click`,V,_),g(e,v),B(),h()}var ze=s(`
<dialog id="modal-proposal-detail" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-4xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        
        <div class="px-6 py-4 bg-[#1b233d] border-b border-white/5 flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                        <!>
                    </div>
                    <h3 class="font-display font-bold text-lg text-white">
                        Detail Proposal Krenova
                    </h3>
                </div>

                <div class="flex items-center gap-3">
                    <span id="detail-status" class="px-2.5 py-1 rounded-full text-xs font-mono font-bold"></span>
                    <button id="btn-print-detail" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold" title="Cetak Proposal">
                        <!>
                        <span class="hidden sm:inline">Cetak</span>
                    </button>
                    <button aria-label="Tutup" id="btn-close-detail" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                        <!>
                    </button>
                </div>
            </div>

            
            <div class="flex items-center gap-2 border-b border-white/5 pb-1 text-sm font-semibold overflow-x-auto">
                <button id="tab-det-overview" class="tab-det active px-4 py-2 border-b-2 border-indigo-500 text-white transition-all whitespace-nowrap">
                    Ringkasan & Identitas
                </button>
                <button id="tab-det-substance" class="tab-det px-4 py-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all whitespace-nowrap">
                    Isi Proposal
                </button>
                <button id="tab-det-questionnaire" class="tab-det px-4 py-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all whitespace-nowrap">
                    Kuesioner
                </button>
                <button id="tab-det-attachments" class="tab-det px-4 py-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all whitespace-nowrap">
                    Berkas & Galeri
                </button>
                <button id="tab-det-ai-analysis" class="tab-det px-4 py-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all whitespace-nowrap flex items-center gap-1.5">
                    <!>Analisa AI
                </button>
            </div>
        </div>

        
        <div class="p-6 overflow-y-auto max-h-[60vh] space-y-6">
            
            <div id="panel-det-overview" class="tab-det-panel space-y-6">
                
                <div id="detail-revision-alert" class="hidden bg-amber-500/10 border-2 border-amber-500/30 rounded-2xl p-5 space-y-3">
                    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/20 pb-3">
                        <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
                            <!>
                            <span>Proposal Perlu Revisi</span>
                        </div>
                        <div class="text-xs font-mono font-bold text-amber-300 bg-amber-500/20 px-3 py-1 rounded-lg border border-amber-500/30">
                            Batas Perbaikan: <span id="detail-revision-deadline">-</span>
                        </div>
                    </div>
                    <div id="detail-revision-content" class="text-xs text-slate-300 space-y-2 bg-black/40 p-4 rounded-xl border border-white/5">
                        
                    </div>
                    <div class="flex justify-end pt-1">
                        <button id="btn-detail-fix-proposal" type="button" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95">
                            <!>
                            <span>Perbaiki Proposal Sekarang</span>
                        </button>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-6">
                    
                    <div class="md:col-span-2 space-y-4">
                        <h2 id="detail-title" class="font-display font-extrabold text-xl sm:text-2xl text-white text-glow-primary"><span class="sr-only">Judul proposal</span></h2>
                        <p id="detail-description" class="text-sm text-slate-400 leading-relaxed"></p>

                        <div class="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 text-xs">
                            <div>
                                <span class="text-slate-500 block uppercase font-semibold">Bidang Lomba</span>
                                <strong id="detail-category" class="text-slate-200 text-sm"></strong>
                            </div>
                            <div>
                                <span class="text-slate-500 block uppercase font-semibold">Tahun Lomba</span>
                                <strong id="detail-tahun" class="text-slate-200 text-sm">2027</strong>
                            </div>
                            <div>
                                <span class="text-slate-500 block uppercase font-semibold">Jenis Inovasi</span>
                                <strong id="detail-jenis" class="text-slate-200 text-sm">Digital</strong>
                            </div>
                            <div>
                                <span class="text-slate-500 block uppercase font-semibold">Tahap</span>
                                <strong id="detail-tahap" class="text-slate-200 text-sm">Uji Coba</strong>
                            </div>
                        </div>
                    </div>

                    
                    <div class="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 text-center space-y-3 shrink-0">
                        <img id="detail-team-photo" src="" alt="Foto Tim" class="w-24 h-24 rounded-full object-cover border-2 border-indigo-500 shadow-md"/>
                        <div>
                            <p id="detail-fullname" class="text-sm font-bold text-white"></p>
                            <p id="detail-email" class="text-xs text-slate-400 font-mono"></p>
                            <p id="detail-phone" class="text-xs text-indigo-400 font-semibold mt-1"></p>
                            <span id="detail-kategori-pengusul" class="inline-block mt-2 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-semibold text-slate-400"></span>
                        </div>
                    </div>
                </div>

                
                <div id="detail-team-members-container" class="space-y-2 hidden">
                    <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Anggota Tim Kelompok
                    </h4>
                    <ul id="detail-team-members" class="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        
                    </ul>
                </div>

                
                <div id="detail-juri-scores-summary" class="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-4 space-y-3 hidden">
                    <h4 class="text-xs font-semibold text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                        <!>
                        Hasil Penilaian Dewan Juri
                    </h4>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                            <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Orisinalitas</span>
                            <strong id="det-score-orisinalitas" class="text-sm text-white">0</strong>
                        </div>
                        <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                            <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Penerapan</span>
                            <strong id="det-score-penerapan" class="text-sm text-white">0</strong>
                        </div>
                        <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                            <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Manfaat</span>
                            <strong id="det-score-manfaat" class="text-sm text-white">0</strong>
                        </div>
                        <div class="bg-white/5 p-2.5 rounded-xl border border-white/5">
                            <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Keberlangsungan</span>
                            <strong id="det-score-keberlangsungan" class="text-sm text-white">0</strong>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-white/5 pt-3 text-xs text-slate-400 mt-2">
                        <span>Rata-rata Nilai Akhir:</span>
                        <strong id="det-score-avg" class="text-indigo-400 text-sm font-extrabold font-display">0.00</strong>
                    </div>
                    <div id="detail-juri-comments" class="border-t border-white/5 pt-2.5 space-y-1.5 text-xs text-slate-400">
                        <span class="font-semibold text-slate-300">Catatan Juri:</span>
                        <div id="detail-comments-container" class="space-y-1">
                            
                        </div>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-6">
                    
                    <div class="space-y-2">
                        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            Koordinat & Lokasi Inovasi
                        </h4>
                        <div id="detail-map" class="h-44 w-full rounded-2xl border border-white/10 z-0"></div>
                        <div class="text-[11px] text-slate-500 font-mono mt-1 text-center">
                            Latitude:
                            <strong id="detail-lat-txt" class="text-slate-300"></strong>
                            | Longitude:
                            <strong id="detail-lng-txt" class="text-slate-300"></strong>
                        </div>
                    </div>

                    
                    <div class="space-y-2">
                        <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            Video Demo Inovasi
                        </h4>
                        <div id="detail-video-container" class="h-44 w-full rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col items-center justify-center gap-3 text-center p-4">
                            <div class="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <!>
                            </div>
                            <div class="text-xs">
                                <p class="font-bold text-slate-200" id="detail-video-text">
                                    Link Video Tersedia
                                </p>
                                <a id="detail-video-link" target="_blank" class="mt-2 text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mx-auto justify-center">
                                    <span>Tonton Video</span>
                                    <!>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="panel-det-substance" class="tab-det-panel space-y-4 hidden">
                <div class="grid md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-1">
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            A. Abstrak / Ringkasan
                        </h4>
                        <div id="detail-abstrak" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            B. Latar Belakang
                        </h4>
                        <div id="detail-background" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            C. Maksud dan Tujuan
                        </h4>
                        <div id="detail-objectives" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            D. Manfaat Inovasi
                        </h4>
                        <div id="detail-benefits" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            E. Keunggulan Inovasi
                        </h4>
                        <div id="detail-keunggulan" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            F. Aspek Inovasi
                        </h4>
                        <div id="detail-aspek" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            G. Penerapan Inovasi
                        </h4>
                        <div id="detail-penerapan" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            H. Anggaran
                        </h4>
                        <div id="detail-budget" class="text-xs text-slate-300 p-4 bg-white/5 rounded-xl border border-white/5 min-h-[60px] prose prose-invert max-w-none">
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="panel-det-questionnaire" class="tab-det-panel space-y-4 hidden">
                <div class="max-h-[50vh] overflow-y-auto pr-1 space-y-5">
                    
                    <div class="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h4 class="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                            A. Orisinalitas dan Kepioniran
                        </h4>
                        <div class="space-y-2">
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    1. Apakah temuan benar-benar asli milik
                                    saudara?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-orisinalitas1"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    2. Apakah ide/inovasi hasil pengembangan
                                    sebelumnya? Jika iya, pengembangan ada
                                    di bagian apa?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-orisinalitas2"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    3. Apakah ada inovasi sejenis? Jika ada
                                    apa perbedaan inovasi yang anda miliki?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-orisinalitas3"></p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h4 class="text-xs font-bold text-purple-400 uppercase tracking-wider">
                            B. Penerapan di Masyarakat
                        </h4>
                        <div class="space-y-2">
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    1. Apakah sudah dilakukan Ujicoba pada
                                    lingkungan yang relevan? Dimana dan
                                    Bagaimana hasil penerapannya?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-penerapan1"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    2. Apakah inovasi yang di hasilkan sudah
                                    siap terapkan? Siapakah yang menerapkan?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-penerapan2"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    3. Skala jangkauan penerapan pada skala
                                    apa?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-penerapan3"></p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h4 class="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                            C. Manfaat
                        </h4>
                        <div class="space-y-2">
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    1. Apakah inovasi yang dihasilkan dapat
                                    menyelesaikan permasalahan aktual saat
                                    ini? Jelaskan
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-manfaat1"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    2. Apakah inovasi dapat meningkatkan
                                    proses produksi/efisiensi? Jelaskan
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-manfaat2"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    3. Apakah memberi manfaat kelingkungan?
                                    Dalam bentuk apa?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-manfaat3"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    4. Apakah menyerap tenaga kerja pada
                                    proses produksi? Berapa?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-manfaat4"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    5. Apakah dapat meningkatkan pendapatan
                                    masyarakat? Berapa?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-manfaat5"></p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                        <h4 class="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                            D. Keberlangsungan / Komersialisasi
                        </h4>
                        <div class="space-y-2">
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    1. Berapa persen penyerapan penggunaan
                                    sumberdaya lokal (SDM dan Bahan baku
                                    lokal)?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-keberlangsungan1"></p>
                            </div>
                            <div>
                                <p class="text-[11px] font-semibold text-slate-400">
                                    2. Apakah ketersediaan bahan baku
                                    kontinyu secara kualitas dan kuantitas?
                                </p>
                                <p class="text-xs text-slate-200 mt-1 italic pl-2 border-l border-indigo-500/30" id="det-q-keberlangsungan2"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div id="panel-det-attachments" class="tab-det-panel space-y-6 hidden">
                
                <div class="space-y-2">
                    <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Berkas Dokumen PDF
                    </h4>
                    <div class="grid sm:grid-cols-3 gap-4">
                        
                        <a id="detail-download-identity" target="_blank" class="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all flex items-center justify-between group">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                    <!>
                                </div>
                                <div class="truncate">
                                    <p class="text-xs font-bold text-slate-200 truncate">
                                        Identitas Peserta
                                    </p>
                                    <p class="text-[9px] text-slate-500">
                                        KTP / Kartu Pelajar
                                    </p>
                                </div>
                            </div>
                            <!>
                        </a>

                        
                        <a id="detail-download-originality" target="_blank" class="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all flex items-center justify-between group">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                                    <!>
                                </div>
                                <div class="truncate">
                                    <p class="text-xs font-bold text-slate-200 truncate">
                                        Surat Pernyataan
                                    </p>
                                    <p class="text-[9px] text-slate-500">
                                        Keaslian Inovasi
                                    </p>
                                </div>
                            </div>
                            <!>
                        </a>

                        
                        <a id="detail-download-approval" target="_blank" class="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-between group">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                    <!>
                                </div>
                                <div class="truncate">
                                    <p class="text-xs font-bold text-slate-200 truncate">
                                        Lembar Pengesahan
                                    </p>
                                    <p class="text-[9px] text-slate-500">
                                        Tanda Tangan Resmi
                                    </p>
                                </div>
                            </div>
                            <!>
                        </a>
                    </div>
                </div>

                
                <div class="space-y-3 border-t border-white/5 pt-4">
                    <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Galeri Foto Produk / Hasil Inovasi (Maks 5)
                    </h4>
                    <div id="detail-product-photos-grid" class="grid grid-cols-5 gap-3">
                        
                    </div>
                    <div id="detail-product-photos-empty" class="p-4 text-center text-xs text-slate-500 bg-white/5 rounded-2xl border border-dashed border-white/5 hidden">
                    </div>
                </div>
            </div>

            
            <div id="panel-det-ai-analysis" class="tab-det-panel space-y-6 hidden">
                
                <div id="ai-key-settings-container" class="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div class="flex items-center justify-between cursor-pointer" id="btn-toggle-ai-settings">
                        <span class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                            <!>
                            Konfigurasi API Key AI Provider (Database)
                        </span>
                        <div class="flex items-center gap-2">
                            <span id="ai-keys-status-summary" class="text-[10px] text-indigo-400 font-mono hidden sm:inline-block"></span>
                            <!>
                        </div>
                    </div>

                    <form id="ai-key-settings-fields" autocomplete="off" class="hidden space-y-4 pt-3 border-t border-white/5">
                        <p class="text-[11px] text-slate-400 leading-relaxed">
                            Kelola API Key untuk masing-masing AI Provider. Kunci akan tersimpan secara aman di
                            <strong>database sistem</strong> dan digunakan untuk analisis proposal otomatis.
                        </p>

                        <div class="space-y-3">
                            
                            <div class="space-y-1">
                                <div class="flex items-center justify-between">
                                    <label for="field-gemini-key" class="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                        <span class="w-2 h-2 rounded-full bg-indigo-400"></span>
                                        Google Gemini API Key
                                        <span class="text-[10px] text-slate-500 font-normal">(Model: Gemini 3.8)</span>
                                    </label>
                                    <span id="badge-gemini-status" class="text-[9px] px-2 py-0.5 rounded-full font-semibold bg-white/5 text-slate-400">Belum
                                        diatur</span>
                                </div>
                                <div class="relative">
                                    <input type="password" id="field-gemini-key" autocomplete="off" class="w-full px-3 py-2 pr-10 rounded-lg bg-slate-900 border border-white/10 text-slate-200 text-xs focus:border-indigo-500 focus:outline-none" placeholder="AIzaSy..."/>
                                    <button aria-label="Aksi" type="button" class="btn-toggle-ai-key-vis absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-200" data-target="field-gemini-key">
                                        <!>
                                    </button>
                                </div>
                            </div>

                            
                            <div class="space-y-1">
                                <div class="flex items-center justify-between">
                                    <label for="field-openai-key" class="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                                        OpenAI API Key
                                        <span class="text-[10px] text-slate-500 font-normal">(Model: GPT 5.6)</span>
                                    </label>
                                    <span id="badge-openai-status" class="text-[9px] px-2 py-0.5 rounded-full font-semibold bg-white/5 text-slate-400">Belum
                                        diatur</span>
                                </div>
                                <div class="relative">
                                    <input type="password" id="field-openai-key" autocomplete="off" class="w-full px-3 py-2 pr-10 rounded-lg bg-slate-900 border border-white/10 text-slate-200 text-xs focus:border-emerald-500 focus:outline-none" placeholder="sk-proj-..."/>
                                    <button aria-label="Aksi" type="button" class="btn-toggle-ai-key-vis absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-200" data-target="field-openai-key">
                                        <!>
                                    </button>
                                </div>
                            </div>

                            
                            <div class="space-y-1">
                                <div class="flex items-center justify-between">
                                    <label for="field-anthropic-key" class="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                                        <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                                        Anthropic Claude API Key
                                        <span class="text-[10px] text-slate-500 font-normal">(Model: Opus 5.5)</span>
                                    </label>
                                    <span id="badge-anthropic-status" class="text-[9px] px-2 py-0.5 rounded-full font-semibold bg-white/5 text-slate-400">Belum
                                        diatur</span>
                                </div>
                                <div class="relative">
                                    <input type="password" id="field-anthropic-key" autocomplete="off" class="w-full px-3 py-2 pr-10 rounded-lg bg-slate-900 border border-white/10 text-slate-200 text-xs focus:border-amber-500 focus:outline-none" placeholder="sk-ant-..."/>
                                    <button aria-label="Aksi" type="button" class="btn-toggle-ai-key-vis absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-200" data-target="field-anthropic-key">
                                        <!>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-end pt-2">
                            <button id="btn-save-ai-keys" type="button" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/20">
                                <!>
                                Simpan API Key ke Database
                            </button>
                        </div>
                    </form>
                </div>

                
                <div id="ai-not-generated" class="p-6 sm:p-8 text-center space-y-5 rounded-3xl bg-indigo-950/20 border border-indigo-500/10">
                    <div class="w-16 h-16 mx-auto rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-glow-primary animate-pulse">
                        <!>
                    </div>
                    <div class="max-w-md mx-auto space-y-2">
                        <h4 class="font-display font-bold text-lg text-white">
                            Analisis Proposal dengan Kecerdasan Buatan (AI)
                        </h4>
                        <p class="text-xs text-slate-400">
                            Dapatkan evaluasi instan berbasis kecerdasan
                            buatan mengenai tingkat orisinalitas, kelayakan
                            implementasi, potensi dampak, dan keberlanjutan
                            proposal ini.
                        </p>
                    </div>

                    
                    <div class="max-w-xl mx-auto w-full text-left space-y-2">
                        <span class="block text-xs font-semibold text-slate-300">Pilih Provider AI untuk
                            Analisis:</span>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" id="ai-provider-selector-container">
                            
                            <div data-provider="gemini" class="ai-provider-card cursor-pointer p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between border-indigo-500 bg-indigo-950/40 shadow-lg shadow-indigo-500/10">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                        <!>
                                    </div>
                                    <span class="provider-radio-dot w-4 h-4 rounded-full border-2 border-indigo-400 flex items-center justify-center">
                                        <span class="w-2 h-2 rounded-full bg-indigo-400"></span>
                                    </span>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-white">Google Gemini</h5>
                                    <p class="text-[10px] text-slate-400">gemini-3.8</p>
                                </div>
                                <div class="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                                    <span class="text-slate-500">Status DB:</span>
                                    <span id="pill-gemini-key-status" class="font-mono text-slate-400">Memeriksa...</span>
                                </div>
                            </div>

                            
                            <div data-provider="openai" class="ai-provider-card cursor-pointer p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between border-white/10 bg-white/5 hover:border-emerald-500/50">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                        <!>
                                    </div>
                                    <span class="provider-radio-dot w-4 h-4 rounded-full border-2 border-slate-600 flex items-center justify-center">
                                        <span class="w-2 h-2 rounded-full bg-transparent"></span>
                                    </span>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-white">OpenAI</h5>
                                    <p class="text-[10px] text-slate-400">gpt-5.6</p>
                                </div>
                                <div class="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                                    <span class="text-slate-500">Status DB:</span>
                                    <span id="pill-openai-key-status" class="font-mono text-slate-400">Memeriksa...</span>
                                </div>
                            </div>

                            
                            <div data-provider="anthropic" class="ai-provider-card cursor-pointer p-3.5 rounded-2xl border-2 transition-all flex flex-col justify-between border-white/10 bg-white/5 hover:border-amber-500/50">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                                        <!>
                                    </div>
                                    <span class="provider-radio-dot w-4 h-4 rounded-full border-2 border-slate-600 flex items-center justify-center">
                                        <span class="w-2 h-2 rounded-full bg-transparent"></span>
                                    </span>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-white">Anthropic</h5>
                                    <p class="text-[10px] text-slate-400">opus-5.5</p>
                                </div>
                                <div class="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                                    <span class="text-slate-500">Status DB:</span>
                                    <span id="pill-anthropic-key-status" class="font-mono text-slate-400">Memeriksa...</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="ai-run-trigger-container" class="flex flex-col gap-2 items-center pt-2">
                        <button id="btn-run-ai-analysis" class="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all font-bold text-sm shadow-lg shadow-indigo-600/20 flex items-center gap-2 mx-auto active:scale-95">
                            <!>
                            <span id="btn-run-ai-text">Mulai Analisa dengan Google Gemini</span>
                        </button>
                        <p id="ai-run-participant-restricted" class="text-[10px] text-slate-500 italic hidden">
                            Analisa AI belum dijalankan. Hanya Juri atau
                            Admin yang dapat memicu analisis pertama kali.
                        </p>
                    </div>
                </div>

                
                <div id="ai-generating" class="p-12 text-center space-y-6 rounded-3xl bg-indigo-950/20 border border-indigo-500/10 hidden">
                    <div class="relative w-20 h-20 mx-auto">
                        
                        <div class="absolute inset-0 rounded-full border-4 border-indigo-500/20 animate-ping"></div>
                        <div class="absolute inset-2 rounded-full border-4 border-indigo-500/40 animate-pulse"></div>
                        <div class="absolute inset-4 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                            <!>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <h4 class="font-display font-semibold text-sm text-indigo-300 animate-pulse" id="ai-loading-step">
                            Membaca isi proposal...
                        </h4>
                        <div class="w-48 h-1.5 bg-white/5 rounded-full mx-auto overflow-hidden">
                            <div id="ai-loading-bar" class="h-full bg-indigo-500 transition-all duration-300 w-0"></div>
                        </div>
                        <p class="text-[10px] text-slate-500" id="ai-loading-desc">
                            AI sedang menelaah seluruh parameter
                            kuesioner dan abstrak proposal
                        </p>
                    </div>
                </div>

                
                <div id="ai-results" class="space-y-6 hidden">
                    
                    <div class="p-6 rounded-3xl bg-gradient-to-r from-indigo-950/50 to-slate-900/50 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div class="space-y-2 text-center md:text-left">
                            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                <span id="ai-model-badge" class="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider flex items-center gap-1">
                                    <!>
                                    Model: Gemini 3.8
                                </span>
                                <span id="ai-analyzed-at" class="text-[9px] text-slate-500 font-mono"></span>
                            </div>
                            <h4 class="font-display font-extrabold text-xl text-white">
                                Kajian Kelayakan Proposal
                            </h4>
                            <p class="text-xs text-slate-400">
                                Rangkuman skor evaluasi AI untuk referensi
                                penilaian dewan juri.
                            </p>
                            <div id="ai-reanalyze-container" class="pt-1">
                                <button id="btn-reanalyze-ai" class="text-xs px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all inline-flex items-center gap-1.5 font-medium">
                                    <!>
                                    <span>Analisa Ulang / Ganti Provider</span>
                                </button>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 shrink-0 bg-white/5 px-6 py-4 rounded-2xl border border-white/5">
                            <div class="text-center">
                                <div class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                    Skor Kelayakan AI
                                </div>
                                <div class="flex items-baseline justify-center gap-1">
                                    <span id="ai-score-overall" class="font-display font-black text-4xl text-indigo-400 text-glow-primary">0</span>
                                    <span class="text-xs text-slate-500">/ 100</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="grid sm:grid-cols-2 gap-4">
                        
                        <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-semibold text-slate-300">Orisinalitas & Kebaruan</span>
                                <span id="ai-score-orisinalitas" class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-xs font-mono font-bold border border-amber-500/20">0</span>
                            </div>
                            <p id="ai-feedback-orisinalitas" class="text-xs text-slate-400 leading-relaxed"></p>
                        </div>

                        
                        <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-semibold text-slate-300">Kelayakan Implementasi</span>
                                <span id="ai-score-implementasi" class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">0</span>
                            </div>
                            <p id="ai-feedback-implementasi" class="text-xs text-slate-400 leading-relaxed"></p>
                        </div>

                        
                        <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-semibold text-slate-300">Dampak & Manfaat</span>
                                <span id="ai-score-manfaat" class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold border border-indigo-500/20">0</span>
                            </div>
                            <p id="ai-feedback-manfaat" class="text-xs text-slate-400 leading-relaxed"></p>
                        </div>

                        
                        <div class="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-semibold text-slate-300">Keberlanjutan Inovasi</span>
                                <span id="ai-score-keberlanjutan" class="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-xs font-mono font-bold border border-purple-500/20">0</span>
                            </div>
                            <p id="ai-feedback-keberlanjutan" class="text-xs text-slate-400 leading-relaxed"></p>
                        </div>
                    </div>

                    
                    <div class="grid sm:grid-cols-2 gap-6 pt-2">
                        
                        <div class="space-y-3">
                            <div class="flex items-center gap-2 text-emerald-400">
                                <!>
                                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-300">
                                    Kelebihan Utama (Strengths)
                                </h5>
                            </div>
                            <ul id="ai-strengths-list" class="space-y-2 list-disc list-inside text-xs text-slate-400">
                                
                            </ul>
                        </div>

                        
                        <div class="space-y-3">
                            <div class="flex items-center gap-2 text-indigo-400">
                                <!>
                                <h5 class="text-xs font-bold uppercase tracking-wider text-slate-300">
                                    Rekomendasi Perbaikan
                                </h5>
                            </div>
                            <ul id="ai-suggestions-list" class="space-y-2 list-disc list-inside text-xs text-slate-400">
                                
                            </ul>
                        </div>
                    </div>

                    
                    <div class="p-4 rounded-2xl bg-white/5 border border-white/10 flex gap-3 text-[11px] text-slate-400 leading-relaxed">
                        <!>
                        <div>
                            <span class="font-bold text-slate-300">Catatan Penting:</span>
                            Analisis di atas dihasilkan secara otomatis oleh
                            asisten AI untuk memetakan relevansi substansi
                            proposal. Hasil ini ditujukan murni sebagai
                            referensi tambahan bagi dewan juri dalam
                            memberikan penilaian akhir secara mandiri.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="px-6 py-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs text-slate-500">Proposal ID:
                <strong id="detail-uuid" class="font-mono"></strong></span>

            <div class="flex gap-3">
                
                <button id="btn-detail-edit" class="px-5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 transition-colors flex items-center gap-1.5">
                    <!>
                    <span>Edit Draft</span>
                </button>
                <button id="btn-detail-delete" class="px-5 py-2 rounded-xl text-xs font-bold bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors flex items-center gap-1.5">
                    <!>
                    <span>Hapus Draft</span>
                </button>
            </div>
        </div>
    </dialog>`,1);function Be(e){W();var n=ze(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o)),c=R(O(s));t(c,{name:`file-text`,class:`w-4 h-4`}),W(),D(s),W(3),D(o);var l=R(o,2),u=R(O(l),3),d=R(O(u));t(d,{name:`printer`,class:`w-4 h-4`}),W(3),D(u);var f=R(u,2),p=R(O(f));t(p,{name:`x`,class:`w-5 h-5`}),W(),D(f),W(),D(l),W(),D(a);var m=R(a,2),h=R(O(m),9),_=R(O(h));t(_,{name:`sparkles`,class:`w-3.5 h-3.5 text-indigo-400 animate-pulse`}),W(),D(h),W(),D(m),W(),D(i);var v=R(i,2),b=R(O(v)),x=R(O(b)),S=R(O(x)),C=R(O(S)),w=R(O(C));t(w,{name:`alert-triangle`,class:`w-5 h-5 animate-pulse`}),W(3),D(C),W(3),D(S);var T=R(S,4),E=R(O(T)),k=R(O(E));t(k,{name:`edit-3`,class:`w-4 h-4`}),W(3),D(E),W(),D(T),W(),D(x);var A=R(x,6),j=R(O(A)),M=R(O(j));t(M,{name:`award`,class:`w-4 h-4`}),W(),D(j),W(7),D(A);var P=R(A,2),ee=R(O(P),3),F=R(O(ee),3),I=R(O(F)),L=R(O(I));t(L,{name:`video`,class:`w-6 h-6 animate-pulse`}),W(),D(I);var te=R(I,2),z=R(O(te),3);N(z,`href`,void 0);var B=R(O(z),3);t(B,{name:`external-link`,class:`w-3.5 h-3.5`}),W(),D(z),W(),D(te),W(),D(F),W(),D(ee),W(),D(P),W(),D(b);var V=R(b,6),U=R(O(V)),G=R(O(U),3),K=R(O(G));N(K,`href`,void 0);var q=R(O(K)),J=R(O(q)),Y=R(O(J));t(Y,{name:`file-text`,class:`w-4 h-4`}),W(),D(J),W(3),D(q);var X=R(q,2);t(X,{name:`external-link`,class:`w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors`}),W(),D(K);var Z=R(K,2);N(Z,`href`,void 0);var ne=R(O(Z)),re=R(O(ne)),ie=R(O(re));t(ie,{name:`file-signature`,class:`w-4 h-4`}),W(),D(re),W(3),D(ne);var ae=R(ne,2);t(ae,{name:`external-link`,class:`w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors`}),W(),D(Z);var Q=R(Z,2);N(Q,`href`,void 0);var $=R(O(Q)),oe=R(O($)),se=R(O(oe));t(se,{name:`file-check-2`,class:`w-4 h-4`}),W(),D(oe),W(3),D($);var ce=R($,2);t(ce,{name:`external-link`,class:`w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors`}),W(),D(Q),W(),D(G),W(),D(U),W(3),D(V);var le=R(V,2),ue=R(O(le)),de=R(O(ue)),fe=R(O(de)),pe=R(O(fe));t(pe,{name:`key`,class:`w-3.5 h-3.5 text-indigo-400`}),W(),D(fe);var me=R(fe,2),he=R(O(me),3);t(he,{name:`chevron-down`,id:`icon-toggle-ai-settings`,class:`w-4 h-4 text-slate-400 transition-transform`}),W(),D(me),W(),D(de);var ge=R(de,2),_e=R(O(ge),3),ve=R(O(_e)),ye=R(O(ve),3),be=R(O(ye),3),xe=R(O(be));t(xe,{name:`eye`,class:`w-3.5 h-3.5`}),W(),D(be),W(),D(ye),W(),D(ve);var Se=R(ve,2),Ce=R(O(Se),3),we=R(O(Ce),3),Te=R(O(we));t(Te,{name:`eye`,class:`w-3.5 h-3.5`}),W(),D(we),W(),D(Ce),W(),D(Se);var Ee=R(Se,2),De=R(O(Ee),3),Oe=R(O(De),3),ke=R(O(Oe));t(ke,{name:`eye`,class:`w-3.5 h-3.5`}),W(),D(Oe),W(),D(De),W(),D(Ee),W(),D(_e);var Ae=R(_e,2),je=R(O(Ae)),Me=R(O(je));t(Me,{name:`save`,class:`w-3.5 h-3.5`}),W(),D(je),W(),D(Ae),W(),D(ge),W(),D(ue);var Ne=R(ue,2),Pe=R(O(Ne)),Fe=R(O(Pe));t(Fe,{name:`sparkles`,class:`w-8 h-8`}),W(),D(Pe);var Ie=R(Pe,4),Le=R(O(Ie),3),Re=R(O(Le)),Be=R(O(Re)),Ve=R(O(Be)),He=R(O(Ve));t(He,{name:`sparkles`,class:`w-4 h-4`}),W(),D(Ve),W(3),D(Be),W(5),D(Re);var Ue=R(Re,2),We=R(O(Ue)),Ge=R(O(We)),Ke=R(O(Ge));t(Ke,{name:`bot`,class:`w-4 h-4`}),W(),D(Ge),W(3),D(We),W(5),D(Ue);var qe=R(Ue,2),Je=R(O(qe)),Ye=R(O(Je)),Xe=R(O(Ye));t(Xe,{name:`cpu`,class:`w-4 h-4`}),W(),D(Ye),W(3),D(Je),W(5),D(qe),W(),D(Le),W(),D(Ie);var Ze=R(Ie,2),Qe=R(O(Ze)),$e=R(O(Qe));t($e,{name:`sparkles`,class:`w-4 h-4`}),W(3),D(Qe),W(3),D(Ze),W(),D(Ne);var et=R(Ne,2),tt=R(O(et)),nt=R(O(tt),5),rt=R(O(nt));t(rt,{name:`brain-circuit`,class:`w-8 h-8 animate-spin-slow`}),W(),D(nt),W(),D(tt),W(3),D(et);var it=R(et,2),at=R(O(it)),ot=R(O(at)),st=R(O(ot)),ct=R(O(st)),lt=R(O(ct));t(lt,{name:`sparkles`,class:`w-3 h-3`}),W(),D(ct),W(3),D(st);var ut=R(st,6),dt=R(O(ut)),ft=R(O(dt));t(ft,{name:`refresh-cw`,class:`w-3 h-3 text-indigo-400`}),W(3),D(dt),W(),D(ut),W(),D(ot),W(3),D(at);var pt=R(at,4),mt=R(O(pt)),ht=R(O(mt)),gt=R(O(ht));t(gt,{name:`check-circle-2`,class:`w-4 h-4`}),W(3),D(ht),W(3),D(mt);var _t=R(mt,2),vt=R(O(_t)),yt=R(O(vt));t(yt,{name:`help-circle`,class:`w-4 h-4`}),W(3),D(vt),W(3),D(_t),W(),D(pt);var bt=R(pt,2),xt=R(O(bt));t(xt,{name:`alert-circle`,class:`w-4 h-4 text-indigo-400 shrink-0 mt-0.5`}),W(3),D(bt),W(),D(it),W(),D(le),W(),D(v);var St=R(v,2),Ct=R(O(St),3),wt=R(O(Ct)),Tt=R(O(wt));t(Tt,{name:`edit-3`,class:`w-3.5 h-3.5`}),W(3),D(wt);var Et=R(wt,2),Dt=R(O(Et));t(Dt,{name:`trash-2`,class:`w-3.5 h-3.5`}),W(3),D(Et),W(),D(Ct),W(),D(St),W(),D(r),y(`submit`,ge,e=>e.preventDefault()),g(e,n)}var Ve=s(`
<dialog id="modal-admin-revision" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <!>
                </div>
                <div>
                    <h3 class="font-display font-bold text-lg text-white">
                        Minta Revisi Proposal
                    </h3>
                    <p class="text-xs text-slate-400">
                        Kirimkan catatan perbaikan dan tenggat waktu kepada peserta
                    </p>
                </div>
            </div>
            <button aria-label="Tutup" id="btn-close-revision-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-admin-revision" class="p-6 space-y-5 overflow-y-auto max-h-[80vh]">
            <input type="hidden" id="revision-proposal-id" value=""/>

            
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-1">
                <span class="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Proposal Target</span>
                <h4 id="revision-proposal-title" class="font-display font-bold text-white text-sm line-clamp-2">
                    -
                </h4>
                <p id="revision-proposal-author" class="text-xs text-indigo-400 font-mono">
                    -
                </p>
            </div>

            
            <div>
                <label for="revision-deadline" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <!>
                    Batas Waktu Perbaikan (Deadline) <span class="text-red-400">*</span>
                </label>
                <input type="date" id="revision-deadline" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none"/>
                <p class="text-[10px] text-slate-500 mt-1">Peserta wajib mengirimkan perbaikan sebelum tanggal ini berakhir.</p>
            </div>

            
            <div>
                <label for="revision-note-general" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Catatan Umum / Instruksi Utama <span class="text-red-400">*</span>
                </label>
                <textarea id="revision-note-general" required="" rows="3" class="w-full px-4 py-3 rounded-xl text-xs bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none placeholder-slate-600" placeholder="Tuliskan alasan perbaikan dan poin-poin penting yang harus direvisi peserta..."></textarea>
            </div>

            
            <div class="space-y-3 pt-1">
                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Catatan Spesifik Per Bagian (Opsional)
                </span>

                
                <div class="space-y-1">
                    <label for="revision-note-dokumen" class="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <!>
                        1. Berkas Dokumen (KTP, Surat Keaslian, Lembar Pengesahan, Foto)
                    </label>
                    <textarea id="revision-note-dokumen" rows="2" class="w-full px-3 py-2 rounded-xl text-xs bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none placeholder-slate-600" placeholder="Contoh: Lampiran surat keaslian belum bertandatangan materai..."></textarea>
                </div>

                
                <div class="space-y-1">
                    <label for="revision-note-substansi" class="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <!>
                        2. Isi Proposal & Rencana Anggaran (RAB)
                    </label>
                    <textarea id="revision-note-substansi" rows="2" class="w-full px-3 py-2 rounded-xl text-xs bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none placeholder-slate-600" placeholder="Contoh: Latar belakang masalah perlu ditambahkan data empiris dan rincian RAB..."></textarea>
                </div>

                
                <div class="space-y-1">
                    <label for="revision-note-kuesioner" class="block text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <!>
                        3. Kuesioner & Parameter Inovasi
                    </label>
                    <textarea id="revision-note-kuesioner" rows="2" class="w-full px-3 py-2 rounded-xl text-xs bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none placeholder-slate-600" placeholder="Contoh: Poin kepioniran mohon dijelaskan diferensiasi terhadap produk sejenis..."></textarea>
                </div>
            </div>

            
            <div class="pt-2 flex items-center justify-end gap-3">
                <button type="button" id="btn-cancel-revision-modal" class="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-semibold transition-colors">
                    Batal
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-lg shadow-amber-600/20 active:scale-95 transition-all flex items-center gap-2">
                    <!>
                    Kirim Catatan Revisi
                </button>
            </div>
        </form>
    </dialog>`,1);function He(e){W();var n=Ve(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`file-edit`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,4),p=R(O(f)),m=R(O(p));t(m,{name:`calendar`,class:`w-3.5 h-3.5 text-amber-400`}),W(3),D(p),W(5),D(f);var h=R(f,4),_=R(O(h),3),v=R(O(_)),y=R(O(v));t(y,{name:`file-check`,class:`w-3.5 h-3.5 text-cyan-400`}),W(),D(v),W(3),D(_);var b=R(_,2),x=R(O(b)),S=R(O(x));t(S,{name:`file-text`,class:`w-3.5 h-3.5 text-indigo-400`}),W(),D(x),W(3),D(b);var C=R(b,2),w=R(O(C)),T=R(O(w));t(T,{name:`help-circle`,class:`w-3.5 h-3.5 text-purple-400`}),W(),D(w),W(3),D(C),W(),D(h);var E=R(h,2),k=R(O(E),3),A=R(O(k));t(A,{name:`send`,class:`w-4 h-4`}),W(),D(k),W(),D(E),W(),D(u),W(),D(r),g(e,n)}var Ue=s(`
<dialog id="modal-juri-score" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-lg shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <h3 class="font-display font-bold text-lg text-white">
                    Form Penilaian Inovasi
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-score-modal" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-juri-score" class="p-6 space-y-5 overflow-y-auto max-h-[85vh] overscroll-contain">
            <input type="hidden" id="score-proposal-id" value=""/>

            <div>
                <p class="text-xs text-slate-400">Judul Proposal:</p>
                <h4 id="score-proposal-title" class="font-display font-bold text-white text-sm mt-0.5">
                    Judul Proposal Lomba
                </h4>
            </div>

            
            <div class="space-y-4">
                
                <div class="bg-white/5 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-4">
                    <label for="score-orisinalitas" class="text-xs font-semibold text-slate-400 uppercase tracking-wider">1. Orisinalitas dan
                        Kepioniran</label>
                    <input type="number" id="score-orisinalitas" min="1" max="100" value="80" required="" class="w-20 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-center text-sm font-bold text-indigo-400 focus:border-indigo-500 focus:outline-none"/>
                </div>

                
                <div class="bg-white/5 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-4">
                    <label for="score-penerapan" class="text-xs font-semibold text-slate-400 uppercase tracking-wider">2. Penerapan</label>
                    <input type="number" id="score-penerapan" min="1" max="100" value="80" required="" class="w-20 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-center text-sm font-bold text-indigo-400 focus:border-indigo-500 focus:outline-none"/>
                </div>

                
                <div class="bg-white/5 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-4">
                    <label for="score-manfaat" class="text-xs font-semibold text-slate-400 uppercase tracking-wider">3.
                        Manfaat</label>
                    <input type="number" id="score-manfaat" min="1" max="100" value="80" required="" class="w-20 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-center text-sm font-bold text-indigo-400 focus:border-indigo-500 focus:outline-none"/>
                </div>

                
                <div class="bg-white/5 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-4">
                    <label for="score-keberlangsungan" class="text-xs font-semibold text-slate-400 uppercase tracking-wider">4. Keberlangsungan dan
                        Komersialisasi</label>
                    <input type="number" id="score-keberlangsungan" min="1" max="100" value="80" required="" class="w-20 px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-center text-sm font-bold text-indigo-400 focus:border-indigo-500 focus:outline-none"/>
                </div>
            </div>

            
            <div class="bg-indigo-500/5 p-4 rounded-2xl border border-indigo-500/10 flex justify-between items-center text-xs">
                <span class="text-slate-400">Rata-rata Nilai Akhir:</span>
                <strong id="score-avg-display" class="text-lg font-extrabold text-indigo-400 font-display">80.00</strong>
            </div>

            <div>
                <label for="score-comment" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Catatan Rekomendasi
                    Juri</label>
                <textarea id="score-comment" required="" rows="3" class="w-full px-3 py-2 rounded-xl text-xs" placeholder="Tuliskan ulasan masukan konstruktif..."></textarea>
            </div>

            <button type="submit" class="w-full btn-glow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/15 active:scale-98 transition-all flex items-center justify-center gap-2">
                <!>
                Simpan Penilaian
            </button>
        </form>
    </dialog>`,1);function We(e){W();var n=Ue(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`award`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,10),p=R(O(f));t(p,{name:`check`,class:`w-4 h-4`}),W(),D(f),W(),D(u),W(),D(r),g(e,n)}var Ge=s(`
<dialog id="modal-admin-user" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-md shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <h3 id="modal-user-title" class="font-display font-bold text-lg text-white">
                    Tambah User Baru
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-user-modal" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-admin-user" class="p-6 space-y-5">
            <input type="hidden" id="admin-user-uid" value=""/>

            <div>
                <label for="user-name" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama
                    Lengkap</label>
                <input type="text" id="user-name" required="" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="Masukkan nama lengkap"/>
            </div>

            <div>
                <label for="user-email" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Alamat
                    Email</label>
                <input type="email" id="user-email" required="" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="user@krenova.com"/>
            </div>

            <div>
                <label for="user-role" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Role / Hak
                    Akses</label>
                <select id="user-role" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none">
                    <option>Peserta</option>
                    <option>Juri</option>
                    <option>Admin</option>
                </select>
            </div>

            <div id="user-password-container">
                <label for="user-password" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Password Akun (Mock
                    Mode)</label>
                <input type="text" id="user-password" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="Masukkan password untuk login" value="krenova123"/>
            </div>

            <button type="submit" class="w-full btn-glow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/15 active:scale-98 transition-all flex items-center justify-center gap-2">
                <!>
                Simpan Data User
            </button>
        </form>
    </dialog>`,1);function Ke(e){W();var n=Ge(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`user-plus`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,6),p=R(O(f),3),m=R(O(p));m.value=m.__value=`peserta`;var h=R(m,2);h.value=h.__value=`juri`;var _=R(h,2);_.value=_.__value=`admin`,W(),D(p),W(),D(f);var v=R(f,4),y=R(O(v));t(y,{name:`save`,class:`w-4 h-4`}),W(),D(v),W(),D(u),W(),D(r),g(e,n)}var qe=s(`
<dialog id="modal-admin-bidang" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-sm shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <h3 id="modal-bidang-title" class="font-display font-bold text-lg text-white">
                    Tambah Bidang Lomba
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-bidang-modal" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-admin-bidang" class="p-6 space-y-5">
            <input type="hidden" id="admin-bidang-id" value=""/>

            <div>
                <label for="bidang-name" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama Bidang
                    Lomba</label>
                <input type="text" id="bidang-name" required="" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="contoh: Kesehatan &amp; Obat-obatan"/>
            </div>

            <button type="submit" class="w-full btn-glow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/15 active:scale-98 transition-all flex items-center justify-center gap-2">
                <!>
                Simpan Bidang Lomba
            </button>
        </form>
    </dialog>`,1);function Je(e){W();var n=qe(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`tag`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,4),p=R(O(f));t(p,{name:`save`,class:`w-4 h-4`}),W(),D(f),W(),D(u),W(),D(r),g(e,n)}var Ye=s(`
<dialog id="modal-admin-juri-evaluations" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-2xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        
        <div class="px-6 py-4 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <div>
                    <h3 class="font-display font-bold text-base text-white">
                        Evaluasi Juri
                    </h3>
                    <p id="eval-modal-subtitle" class="text-xs text-slate-400 mt-0.5"></p>
                </div>
            </div>
            <button aria-label="Tutup" id="btn-close-eval-modal" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>
        
        <div class="p-6 overflow-y-auto max-h-[60vh] space-y-4" id="eval-modal-content">
            
        </div>
    </dialog>`,1);function Xe(e){W();var n=Ye(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`award`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i),W(3),D(r),g(e,n)}var Ze=s(`
<dialog id="modal-admin-timeline" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-lg shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <h3 id="modal-timeline-title" class="font-display font-bold text-lg text-white">
                    Tambah Tahapan Timeline
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-timeline-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-admin-timeline" class="p-6 space-y-4">
            <input type="hidden" id="admin-timeline-id" value=""/>

            <div class="grid grid-cols-3 gap-4">
                <div>
                    <label for="admin-timeline-urutan" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Urutan
                    </label>
                    <input type="number" id="admin-timeline-urutan" required="" min="1" class="w-full px-4 py-3 rounded-xl text-sm" placeholder="1"/>
                </div>
                <div class="col-span-2">
                    <label for="admin-timeline-warna" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Aksen Warna
                    </label>
                    <select id="admin-timeline-warna" class="w-full px-4 py-3 rounded-xl text-sm">
                        <option>Indigo (Ungu Biru)</option>
                        <option>Cyan (Biru Muda)</option>
                        <option>Purple (Ungu)</option>
                        <option>Emerald (Hijau)</option>
                        <option>Amber (Kuning / Emas)</option>
                        <option>Rose (Merah Muda)</option>
                        <option>Sky (Biru Langit)</option>
                    </select>
                </div>
            </div>

            <div>
                <label for="admin-timeline-tanggal" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Rentang Tanggal / Waktu
                </label>
                <input type="text" id="admin-timeline-tanggal" required="" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="contoh: 1 Juni - 31 Agustus 2027"/>
            </div>

            <div>
                <label for="admin-timeline-judul" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Judul Tahapan
                </label>
                <input type="text" id="admin-timeline-judul" required="" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="contoh: Pendaftaran &amp; Unggah Berkas"/>
            </div>

            <div>
                <label for="admin-timeline-deskripsi" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Deskripsi Tahapan
                </label>
                <textarea id="admin-timeline-deskripsi" rows="3" required="" class="w-full px-4 py-3 rounded-xl text-sm placeholder-slate-600" placeholder="Penjelasan ringkas alur tahapan ini..."></textarea>
            </div>

            <button type="submit" class="w-full btn-glow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/15 active:scale-98 transition-all flex items-center justify-center gap-2 mt-4">
                <!>
                Simpan Tahapan Timeline
            </button>
        </form>
    </dialog>`,1);function Qe(e){W();var n=Ze(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`clock`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,2),p=R(O(f),3),m=R(O(p),3),h=R(O(m));h.value=h.__value=`indigo`;var _=R(h,2);_.value=_.__value=`cyan`;var v=R(_,2);v.value=v.__value=`purple`;var y=R(v,2);y.value=y.__value=`emerald`;var b=R(y,2);b.value=b.__value=`amber`;var x=R(b,2);x.value=x.__value=`rose`;var S=R(x,2);S.value=S.__value=`sky`,W(),D(m),W(),D(p),W(),D(f);var C=R(f,8),w=R(O(C));t(w,{name:`save`,class:`w-4 h-4`}),W(),D(C),W(),D(u),W(),D(r),g(e,n)}var $e=s(`
<dialog id="modal-admin-presentasi" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <h3 id="modal-presentation-title" class="font-display font-bold text-lg text-white">
                    Jadwalkan Presentasi Finalis
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-presentation-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-admin-presentation" class="p-6 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <input type="hidden" id="admin-pres-id" value=""/>

            <div>
                <label for="admin-pres-proposal-id" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Pilih Proposal Finalis
                </label>
                <select id="admin-pres-proposal-id" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none">
                    <option>-- Pilih Proposal Finalis --</option>
                </select>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="admin-pres-order" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Nomor Urut Sidang
                    </label>
                    <input type="text" id="admin-pres-order" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 font-mono focus:border-indigo-500 focus:outline-none" placeholder="01"/>
                </div>
                <div>
                    <label for="admin-pres-session-name" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Nama / Tajuk Sesi
                    </label>
                    <input type="text" id="admin-pres-session-name" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none" placeholder="contoh: Sesi Sidang 1 - Pagi"/>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="admin-pres-type" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Format Sidang
                    </label>
                    <select id="admin-pres-type" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none">
                        <option>Hybrid (Tatap Muka & Virtual)</option>
                        <option>Offline (Tatap Muka Saja)</option>
                        <option>Online (Virtual Meeting Saja)</option>
                    </select>
                </div>
                <div>
                    <label for="admin-pres-status" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Status Sidang
                    </label>
                    <select id="admin-pres-status" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none">
                        <option>Dijadwalkan</option>
                        <option>Sedang Berlangsung</option>
                        <option>Selesai</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="admin-pres-start" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Waktu Mulai
                    </label>
                    <input type="datetime-local" id="admin-pres-start" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none"/>
                </div>
                <div>
                    <label for="admin-pres-end" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Waktu Selesai
                    </label>
                    <input type="datetime-local" id="admin-pres-end" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-indigo-500 focus:outline-none"/>
                </div>
            </div>

            <div>
                <label for="admin-pres-location" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Lokasi Fisik / Gedung
                </label>
                <input type="text" id="admin-pres-location" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none" placeholder="contoh: Ruang Rapat Bappeda Lt. 2, Jl. Ki Gede Sebayu"/>
            </div>

            <div>
                <label for="admin-pres-link" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Tautan Virtual Meeting (Zoom / Google Meet)
                </label>
                <input type="url" id="admin-pres-link" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none" placeholder="https://meet.google.com/xyz-abcd-efg"/>
            </div>

            <div>
                <label for="admin-pres-jurors" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Dewan Juri Penguji
                </label>
                <input type="text" id="admin-pres-jurors" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none" placeholder="contoh: Dr. Hendra (Akademisi), Ir. Budi (Praktisi)"/>
            </div>

            <div>
                <label for="admin-pres-notes" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Petunjuk Teknis / Catatan untuk Peserta
                </label>
                <textarea id="admin-pres-notes" rows="2" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none" placeholder="Waktu presentasi 15 menit, tanya jawab 15 menit. Harap menyiapkan file PPT."></textarea>
            </div>

            <button type="submit" class="w-full btn-glow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/15 active:scale-98 transition-all flex items-center justify-center gap-2 mt-4">
                <!>
                Simpan Jadwal Presentasi
            </button>
        </form>
    </dialog>`,1);function et(e){W();var n=$e(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`calendar-plus`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,2),p=R(O(f),3),m=R(O(p));m.value=m.__value=``,W(),D(p),W(),D(f);var h=R(f,4),_=R(O(h)),v=R(O(_),3),y=R(O(v));y.value=y.__value=`Hybrid`;var b=R(y,2);b.value=b.__value=`Offline`;var x=R(b,2);x.value=x.__value=`Online`,W(),D(v),W(),D(_);var S=R(_,2),C=R(O(S),3),w=R(O(C));w.value=w.__value=`Scheduled`;var T=R(w,2);T.value=T.__value=`InProgress`;var E=R(T,2);E.value=E.__value=`Completed`,W(),D(C),W(),D(S),W(),D(h);var k=R(h,12),A=R(O(k));t(A,{name:`save`,class:`w-4 h-4`}),W(),D(k),W(),D(u),W(),D(r),g(e,n)}var tt=s(`
<dialog id="modal-admin-sertifikat" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <!>
                </div>
                <h3 id="modal-certificate-title" class="font-display font-bold text-lg text-white">
                    Terbitkan Sertifikat Resmi
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-certificate-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-admin-certificate" class="p-6 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <input type="hidden" id="admin-cert-id" value=""/>

            <div>
                <label for="admin-cert-proposal-id" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Pilih Proposal Inovasi
                </label>
                <select id="admin-cert-proposal-id" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none">
                    <option>-- Pilih Proposal --</option>
                </select>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="admin-cert-award" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Predikat Penghargaan
                    </label>
                    <select id="admin-cert-award" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none">
                        <option>Juara I (Utama)</option>
                        <option>Juara II</option>
                        <option>Juara III</option>
                        <option>Juara Harapan I</option>
                        <option>Juara Harapan II</option>
                        <option>Juara Favorit Polling Publik</option>
                        <option>Finalis Terbaik</option>
                        <option>Peserta Terpilih</option>
                    </select>
                </div>

                <div>
                    <label for="admin-cert-number" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Nomor Sertifikat
                    </label>
                    <input type="text" id="admin-cert-number" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-amber-300 placeholder-slate-500 font-mono focus:border-amber-500 focus:outline-none" placeholder="KRN-2027-XXXXXX"/>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="admin-cert-recipient" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Nama Penerima / Inovator
                    </label>
                    <input type="text" id="admin-cert-recipient" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none" placeholder="Nama lengkap atau tim inovator"/>
                </div>

                <div>
                    <label for="admin-cert-date" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Tanggal Ditetapkan
                    </label>
                    <input type="date" id="admin-cert-date" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 focus:border-amber-500 focus:outline-none"/>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="admin-cert-signatory" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Nama Pejabat Penandatangan
                    </label>
                    <input type="text" id="admin-cert-signatory" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none" value="Dr. H. Hendrar Prihadi, S.E., M.M."/>
                </div>

                <div>
                    <label for="admin-cert-signatory-title" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Jabatan Pejabat
                    </label>
                    <input type="text" id="admin-cert-signatory-title" required="" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none" value="Kepala BAPPERIDA Kota Tegal"/>
                </div>
            </div>

            <div>
                <label for="admin-cert-note" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Catatan Tambahan (Opsional)
                </label>
                <textarea id="admin-cert-note" rows="2" class="w-full px-4 py-3 rounded-xl text-sm bg-slate-900 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none" placeholder="Keterangan khusus mengenai penghargaan ini..."></textarea>
            </div>

            <button type="submit" class="w-full btn-glow py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 rounded-xl text-sm font-extrabold shadow-lg shadow-amber-600/20 active:scale-98 transition-all flex items-center justify-center gap-2 mt-4">
                <!>
                Terbitkan & Sahkan Sertifikat
            </button>
        </form>
    </dialog>`,1);function nt(e){W();var n=tt(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`award`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(d,2),p=R(O(f),3),m=R(O(p));m.value=m.__value=``,W(),D(p),W(),D(f);var h=R(f,2),_=R(O(h)),v=R(O(_),3),y=R(O(v));y.value=y.__value=`Juara I`;var b=R(y,2);b.value=b.__value=`Juara II`;var x=R(b,2);x.value=x.__value=`Juara III`;var S=R(x,2);S.value=S.__value=`Juara Harapan I`;var C=R(S,2);C.value=C.__value=`Juara Harapan II`;var w=R(C,2);w.value=w.__value=`Juara Favorit Polling Publik`;var T=R(w,2);T.value=T.__value=`Finalis Terbaik`;var E=R(T,2);E.value=E.__value=`Peserta Terpilih`,W(),D(v),W(),D(_),W(3),D(h);var k=R(h,8),A=R(O(k));t(A,{name:`file-badge`,class:`w-4 h-4`}),W(),D(k),W(),D(u),W(),D(r),g(e,n)}var rt=s(`
<div id="certificate-modal-wrapper">
        <dialog id="modal-view-certificate" class="bg-slate-950 border border-white/10 rounded-3xl p-0 w-full max-w-5xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/90 backdrop:backdrop-blur-md">
            
            <div class="px-6 py-4 bg-[#121829] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 no-print">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <!>
                    </div>
                    <div>
                        <h3 class="font-display font-bold text-base text-white">Sertifikat Digital Resmi KRENOVA 2027</h3>
                        <p class="text-[11px] text-slate-400">Terverifikasi sistem dengan kode QR digital yang sah</p>
                    </div>
                </div>

                <div class="flex items-center gap-2.5">
                    <button id="btn-copy-cert-verify-link" type="button" class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold transition-all flex items-center gap-1.5">
                        <!>
                        <span id="btn-copy-cert-text">Salin Tautan Validasi</span>
                    </button>
                    <button id="btn-print-certificate-action" type="button" class="btn-glow px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs font-black transition-all flex items-center gap-1.5 shadow-lg shadow-amber-600/20 active:scale-95">
                        <!>
                        <span>Cetak / Unduh PDF</span>
                    </button>
                    <button aria-label="Tutup" id="btn-close-view-certificate" type="button" class="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors">
                        <!>
                    </button>
                </div>
            </div>

            
            <div class="p-4 sm:p-8 bg-slate-900 overflow-x-auto flex justify-center">
                <div id="certificate-print-card" class="certificate-frame w-full max-w-[960px] aspect-[1.414/1] p-8 sm:p-12 relative flex flex-col justify-between select-none">
                    
                    
                    <div class="certificate-watermark"></div>

                    
                    <div class="absolute inset-4 certificate-inner-border pointer-events-none rounded"></div>

                    
                    <div class="text-center relative z-10 space-y-1">
                        <div class="flex items-center justify-center gap-3 mb-2">
                            <span class="text-xs uppercase tracking-[0.25em] font-extrabold text-blue-900 border-b-2 border-amber-600 pb-0.5">
                                PEMERINTAH KOTA TEGAL
                            </span>
                        </div>
                        <h4 class="text-xs uppercase tracking-widest font-bold text-slate-600">
                            BADAN PERENCANAAN PEMBANGUNAN, RISET DAN INOVASI DAERAH
                        </h4>
                        <p class="text-[10px] text-slate-500 font-semibold tracking-wider">
                            AJANG KREATIVITAS DAN INOVASI MASYARAKAT (KRENOVA) TAHUN 2027
                        </p>

                        <div class="pt-4">
                            <h1 class="font-serif font-black text-2xl sm:text-4xl text-blue-950 uppercase tracking-widest leading-tight">
                                SERTIFIKAT PENGHARGAAN
                            </h1>
                            <div class="flex items-center justify-center gap-3 pt-1">
                                <div class="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-600"></div>
                                <span class="font-mono text-xs font-bold text-amber-800 tracking-wider">
                                    NOMOR: <span id="cert-display-number">KRN-2027-000000</span>
                                </span>
                                <div class="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-600"></div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="text-center relative z-10 my-4 sm:my-6 space-y-3">
                        <p class="text-xs sm:text-sm text-slate-600 italic">
                            Diberikan dengan penuh kehormatan dan apresiasi setinggi-tingginya kepada:
                        </p>

                        
                        <h2 id="cert-display-recipient" class="font-serif font-black text-xl sm:text-3xl text-slate-900 tracking-wide underline decoration-amber-500/50 decoration-2 underline-offset-8">
                            Nama Inovator / Tim Pengusul
                        </h2>

                        
                        <div class="pt-2">
                            <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold block">Sebagai:</span>
                            <span id="cert-display-award" class="inline-block px-5 py-1.5 mt-1 rounded-full bg-amber-500/15 border border-amber-600/40 text-amber-900 font-serif font-black text-base sm:text-xl tracking-wider shadow-sm">
                                Juara I (Utama)
                            </span>
                        </div>

                        
                        <div class="max-w-2xl mx-auto pt-2 space-y-1">
                            <p class="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                                Atas Karya Inovasi Unggulan:
                            </p>
                            <p id="cert-display-title" class="font-bold text-sm sm:text-base text-blue-950 font-serif italic">
                                "Judul Karya Proposal Inovasi"
                            </p>
                            <p id="cert-display-category" class="text-[11px] text-slate-600 font-semibold">
                                Bidang: Teknologi Informasi dan Komunikasi
                            </p>
                        </div>
                    </div>

                    
                    <div class="relative z-10 grid grid-cols-3 items-end pt-4 border-t border-amber-600/30">
                        
                        <div class="flex flex-col items-center sm:items-start space-y-1.5">
                            <div class="p-1.5 bg-white border border-slate-300 rounded-lg shadow-sm">
                                <div id="cert-qr-target" class="w-20 h-20 flex items-center justify-center">
                                    
                                </div>
                            </div>
                            <div class="text-[9px] text-slate-500 leading-tight text-center sm:text-left">
                                <span class="font-bold block text-slate-700">Verifikasi Resmi</span>
                                Pindai QR untuk validasi keaslian dokumen
                            </div>
                        </div>

                        
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full certificate-seal flex flex-col items-center justify-center text-center p-1 shadow-md">
                                <!>
                                <span class="text-[7.5px] font-black uppercase tracking-tight text-amber-950 font-serif block">KRENOVA 2027</span>
                                <span class="text-[6.5px] font-bold uppercase text-amber-900">OFFICIAL SEAL</span>
                            </div>
                        </div>

                        
                        <div class="text-center sm:text-right space-y-1">
                            <p id="cert-display-date" class="text-[11px] text-slate-700 font-medium">
                                Tegal, 13 Oktober 2027
                            </p>
                            <p id="cert-display-signatory-title" class="text-[10px] text-slate-600 font-bold uppercase">
                                Kepala BAPPERIDA Kota Tegal
                            </p>
                            <div class="h-12 flex items-center justify-center sm:justify-end">
                                
                                <span class="font-serif italic text-xs text-blue-900 font-bold tracking-widest opacity-80 border-b border-slate-400 px-4 py-1">
                                    Ttd. Elektronik Sah
                                </span>
                            </div>
                            <p id="cert-display-signatory" class="font-serif font-black text-xs sm:text-sm text-slate-900 underline decoration-slate-400">
                                Dr. H. Hendrar Prihadi, S.E., M.M.
                            </p>
                            <p class="text-[9px] text-slate-500 font-mono">
                                Pembina Utama Muda / NIP. 19710330 199803 1 004
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </div>`,1);function it(e){W();var n=rt(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o)),c=R(O(s));t(c,{name:`award`,class:`w-5 h-5`}),W(),D(s),W(3),D(o);var l=R(o,2),u=R(O(l)),d=R(O(u));t(d,{name:`share-2`,class:`w-4 h-4`}),W(3),D(u);var f=R(u,2),p=R(O(f));t(p,{name:`printer`,class:`w-4 h-4`}),W(3),D(f);var m=R(f,2),h=R(O(m));t(h,{name:`x`,class:`w-5 h-5`}),W(),D(m),W(),D(l),W(),D(a);var _=R(a,2),v=R(O(_)),y=R(O(v),9),b=R(O(y),3),x=R(O(b)),S=R(O(x));t(S,{name:`shield-check`,class:`w-5 h-5 text-amber-900`}),W(5),D(x),W(),D(b),W(3),D(y),W(),D(v),W(),D(_),W(),D(i),W(),D(r),g(e,n)}var at=s(`
<dialog id="modal-public-verify-cert" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-lg shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <!>
                </div>
                <h3 class="font-display font-bold text-base text-white">
                    Verifikasi Dokumen Resmi
                </h3>
            </div>
            <button aria-label="Tutup" id="btn-close-verify-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <div class="p-6 space-y-6">
            
            <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <!>
                </div>
                <div>
                    <h4 class="font-display font-bold text-sm text-emerald-300">Sertifikat Digital Sah & Terdaftar</h4>
                    <p class="text-xs text-slate-300 mt-0.5">Dokumen ini telah resmi diterbitkan dan dicatat dalam basis data ajang KRENOVA 2027.</p>
                </div>
            </div>

            
            <div class="rounded-xl bg-white/5 border border-white/5 p-4 space-y-3 text-xs">
                <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-slate-400">Nomor Sertifikat:</span>
                    <span id="verify-modal-number" class="font-mono font-bold text-amber-300">-</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-slate-400">Penerima / Inovator:</span>
                    <span id="verify-modal-recipient" class="font-bold text-white text-right">-</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-slate-400">Predikat Penghargaan:</span>
                    <span id="verify-modal-award" class="font-bold text-amber-400">-</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-slate-400">Karya Inovasi:</span>
                    <span id="verify-modal-title" class="font-medium text-slate-200 text-right max-w-xs truncate">-</span>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                    <span class="text-slate-400">Bidang Lomba:</span>
                    <span id="verify-modal-category" class="font-medium text-slate-300">-</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-400">Tanggal Ditetapkan:</span>
                    <span id="verify-modal-date" class="font-medium text-slate-300">-</span>
                </div>
            </div>

            <button id="btn-verify-view-full" type="button" class="w-full btn-glow py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                <!>
                <span>Lihat Desain Penuh Sertifikat</span>
            </button>
        </div>
    </dialog>`,1);function ot(e){W();var n=at(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`shield-check`,class:`w-4 h-4`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u)),f=R(O(d)),p=R(O(f));t(p,{name:`badge-check`,class:`w-7 h-7`}),W(),D(f),W(3),D(d);var m=R(d,4),h=R(O(m));t(h,{name:`eye`,class:`w-4 h-4`}),W(3),D(m),W(),D(u),W(),D(r),g(e,n)}var st=s(`
<dialog id="modal-update-monitoring" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-2xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <!>
                </div>
                <div>
                    <h3 class="font-display font-bold text-base text-white">
                        Pembaruan Perkembangan Inovasi
                    </h3>
                    <p class="text-xs text-slate-400">Monitoring dampak & tindak lanjut pembinaan pascalomba</p>
                </div>
            </div>
            <button aria-label="Tutup" id="btn-close-monitoring-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <form id="form-update-monitoring" class="p-6 space-y-5 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <input type="hidden" id="monitor-proposal-id" name="proposalId"/>
            <input type="hidden" id="monitor-entry-id" name="monitorId"/>

            
            <div class="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                <div class="p-2 rounded-lg bg-indigo-500/15 text-indigo-400 mt-0.5">
                    <!>
                </div>
                <div class="flex-1">
                    <span id="monitor-proposal-bidang" class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">-</span>
                    <h4 id="monitor-proposal-title" class="font-bold text-sm text-white mt-0.5">-</h4>
                    <span id="monitor-proposal-author" class="text-xs text-slate-400 block mt-1">Inovator: -</span>
                </div>
            </div>

            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label for="monitor-tahap" class="block text-xs font-semibold text-slate-300 mb-1.5">
                        Tahap Penerapan Terkini <span class="text-rose-400">*</span>
                    </label>
                    <select id="monitor-tahap" name="tahapPenerapan" required="" class="w-full bg-[#1e293b] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500">
                        <option>1. Riset / Prototipe Laboratorium</option>
                        <option>2. Uji Coba Lapangan (Pilot Project)</option>
                        <option>3. Produksi & Penerapan Terbatas</option>
                        <option>4. Komersialisasi / Difusi Mandiri</option>
                        <option>5. Diadopsi Pemerintah / BUMD / OPD</option>
                    </select>
                </div>

                <div>
                    <label for="monitor-pengguna" class="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimasi Pengguna / Pemanfaat Aktif <span class="text-rose-400">*</span>
                    </label>
                    <div class="relative">
                        <input type="number" id="monitor-pengguna" name="jumlahPengguna" min="0" required="" placeholder="Contoh: 150" class="w-full bg-[#1e293b] border border-white/10 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-white focus:outline-none focus:border-cyan-500"/>
                        <!>
                    </div>
                </div>
            </div>

            
            <div>
                <label for="monitor-mitra" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mitra Kerja Sama & Kolaborasi (Jika ada)
                </label>
                <input type="text" id="monitor-mitra" name="mitraKerjasama" placeholder="Contoh: Dinas Lingkungan Hidup Kota Tegal, UMKM Kerajinan, Politeknik Harber" class="w-full bg-[#1e293b] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"/>
            </div>

            
            <div>
                <label for="monitor-dampak" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Dampak Riil Sosial, Ekonomi, atau Lingkungan <span class="text-rose-400">*</span>
                </label>
                <textarea id="monitor-dampak" name="dampakSosialEkonomi" rows="3" required="" placeholder="Uraikan efisiensi biaya, omzet/pendapatan baru, pengurangan limbah, atau kemudahan yang dirasakan masyarakat..." class="w-full bg-[#1e293b] border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-cyan-500"></textarea>
            </div>

            
            <div>
                <label for="monitor-kebutuhan" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Dukungan / Fasilitasi yang Diharapkan dari BAPPERIDA Kota Tegal
                </label>
                <textarea id="monitor-kebutuhan" name="kebutuhanPembinaan" rows="2" placeholder="Contoh: Fasilitasi Hak Cipta/Paten HKI gratis, uji lab sertifikasi halal/BPOM, pendampingan inkubasi bisnis..." class="w-full bg-[#1e293b] border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-cyan-500"></textarea>
            </div>

            
            <div>
                <label for="monitor-link" class="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tautan Dokumentasi / Foto / Video Penerapan (Google Drive / YouTube / Web)
                </label>
                <div class="relative">
                    <input type="url" id="monitor-link" name="linkDokumentasi" placeholder="https://..." class="w-full bg-[#1e293b] border border-white/10 rounded-xl px-3.5 py-2.5 pl-9 text-xs text-white focus:outline-none focus:border-cyan-500"/>
                    <!>
                </div>
            </div>

            
            <div class="flex items-center justify-end gap-3 pt-3 border-t border-white/5">
                <button type="button" id="btn-cancel-update-monitoring" class="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors">
                    Batal
                </button>
                <button type="submit" id="btn-submit-monitoring" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-xs font-bold text-white shadow-lg shadow-cyan-600/20 transition-all flex items-center gap-2">
                    <!>
                    <span>Simpan Perkembangan Inovasi</span>
                </button>
            </div>
        </form>
    </dialog>`,1);function ct(e){W();var n=st(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`trending-up`,class:`w-5 h-5`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u),5),f=R(O(d)),p=R(O(f));t(p,{name:`lightbulb`,class:`w-4 h-4`}),W(),D(f),W(3),D(d);var m=R(d,2),h=R(O(m)),_=R(O(h),3),v=R(O(_));v.value=v.__value=`Riset / Prototipe Laboratorium`;var y=R(v,2);y.value=y.__value=`Uji Coba Lapangan (Pilot Project)`;var b=R(y,2);b.value=b.__value=`Produksi & Penerapan Terbatas`;var x=R(b,2);x.value=x.__value=`Komersialisasi / Difusi Mandiri`;var S=R(x,2);S.value=S.__value=`Diadopsi Pemerintah / BUMD / OPD`,W(),D(_),W(),D(h);var C=R(h,2),w=R(O(C),3),T=R(O(w),3);t(T,{name:`users`,class:`w-4 h-4 text-slate-400 absolute left-3 top-2.5`}),W(),D(w),W(),D(C),W(),D(m);var E=R(m,8),k=R(O(E),3),A=R(O(k),3);t(A,{name:`link`,class:`w-4 h-4 text-slate-400 absolute left-3 top-2.5`}),W(),D(k),W(),D(E);var j=R(E,2),M=R(O(j),3),N=R(O(M));t(N,{name:`save`,class:`w-4 h-4`}),W(3),D(M),W(),D(j),W(),D(u),W(),D(r),g(e,n)}var lt=s(`
<dialog id="modal-detail-monitoring" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-3xl shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
        <div class="px-6 py-5 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <!>
                </div>
                <div>
                    <h3 class="font-display font-bold text-base text-white">
                        Detail Monitoring & Catatan Pembinaan BAPPERIDA
                    </h3>
                    <p class="text-xs text-slate-400">Pemantauan difusi inovasi daerah dan fasilitasi hilirisasi</p>
                </div>
            </div>
            <button aria-label="Tutup" id="btn-close-detail-monitoring" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                <!>
            </button>
        </div>

        <div class="p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
            
            <div class="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <span id="detail-monitor-bidang" class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">-</span>
                    <h4 id="detail-monitor-title" class="font-bold text-base text-white mt-0.5">-</h4>
                    <p id="detail-monitor-author" class="text-xs text-slate-300 mt-1">Inovator: -</p>
                </div>
                <div class="shrink-0">
                    <span id="detail-monitor-tahap-badge" class="px-3 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        -
                    </span>
                </div>
            </div>

            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span class="text-[11px] text-slate-400 block">Pemanfaat / Pengguna</span>
                    <span id="detail-monitor-users" class="font-display font-bold text-lg text-emerald-400 mt-1 block">0 Orang</span>
                </div>
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span class="text-[11px] text-slate-400 block">Mitra Terjalin</span>
                    <span id="detail-monitor-mitra-count" class="font-display font-bold text-lg text-cyan-400 mt-1 block">-</span>
                </div>
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <span class="text-[11px] text-slate-400 block">Update Terakhir</span>
                    <span id="detail-monitor-updated-at" class="font-mono text-xs text-slate-300 mt-1 block">-</span>
                </div>
            </div>

            
            <div class="space-y-3 text-xs">
                <div>
                    <h5 class="font-bold text-slate-300 mb-1">Dampak Riil Inovasi:</h5>
                    <div id="detail-monitor-dampak" class="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-slate-200 leading-relaxed whitespace-pre-wrap">
                        -
                    </div>
                </div>

                <div>
                    <h5 class="font-bold text-slate-300 mb-1">Mitra Kolaborasi:</h5>
                    <div id="detail-monitor-mitra" class="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-slate-200">
                        -
                    </div>
                </div>

                <div>
                    <h5 class="font-bold text-slate-300 mb-1">Kebutuhan Fasilitasi dari Peserta:</h5>
                    <div id="detail-monitor-kebutuhan" class="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-amber-300/90 leading-relaxed">
                        -
                    </div>
                </div>

                <div id="detail-monitor-link-wrapper" class="hidden">
                    <h5 class="font-bold text-slate-300 mb-1">Tautan Bukti Penerapan:</h5>
                    <a id="detail-monitor-link" target="_blank" class="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 underline font-medium">
                        <!>
                        <span>Buka Tautan Dokumentasi</span>
                    </a>
                </div>
            </div>

            
            <div class="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 space-y-4">
                <div class="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                    <!>
                    <span>Tindak Lanjut & Pembinaan BAPPERIDA</span>
                </div>

                <input type="hidden" id="detail-monitor-id"/>

                <div>
                    <label for="detail-monitor-status-pembinaan" class="block text-xs font-semibold text-slate-300 mb-1.5">
                        Status Pembinaan BAPPERIDA
                    </label>
                    <select id="detail-monitor-status-pembinaan" class="w-full bg-[#1e293b] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500">
                        <option>1. Dalam Pemantauan Berkala</option>
                        <option>2. Pendampingan Fasilitasi HKI & Paten</option>
                        <option>3. Uji Sertifikasi & Standarisasi Produk</option>
                        <option>4. Inkubasi & Jejaring Mitra Industri</option>
                        <option>5. Rekomendasi Adopsi OPD / Pemkot Tegal</option>
                    </select>
                </div>

                <div>
                    <label for="detail-monitor-catatan-admin" class="block text-xs font-semibold text-slate-300 mb-1.5">
                        Catatan Arahan & Rencana Intervensi BAPPERIDA
                    </label>
                    <textarea id="detail-monitor-catatan-admin" rows="3" placeholder="Tuliskan catatan arahan tim BAPPERIDA, tanggal rencana monev lapangan, atau PIC fasilitator..." class="w-full bg-[#1e293b] border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-indigo-500"></textarea>
                </div>

                <div class="flex justify-end">
                    <button type="button" id="btn-save-admin-monitoring" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2">
                        <!>
                        <span>Simpan Catatan Pembinaan</span>
                    </button>
                </div>
            </div>
        </div>
    </dialog>`,1);function ut(e){W();var n=lt(),r=R(H(n)),i=R(O(r)),a=R(O(i)),o=R(O(a)),s=R(O(o));t(s,{name:`compass`,class:`w-5 h-5`}),W(),D(o),W(3),D(a);var c=R(a,2),l=R(O(c));t(l,{name:`x`,class:`w-5 h-5`}),W(),D(c),W(),D(i);var u=R(i,2),d=R(O(u),5),f=R(O(d),7),p=R(O(f),3);N(p,`href`,void 0);var m=R(O(p));t(m,{name:`external-link`,class:`w-3.5 h-3.5`}),W(3),D(p),W(),D(f),W(),D(d);var h=R(d,2),_=R(O(h)),v=R(O(_));t(v,{name:`file-edit`,class:`w-4 h-4`}),W(3),D(_);var y=R(_,4),b=R(O(y),3),x=R(O(b));x.value=x.__value=`Dalam Pemantauan`;var S=R(x,2);S.value=S.__value=`Pendampingan HKI & Paten`;var C=R(S,2);C.value=C.__value=`Uji Sertifikasi & Standarisasi`;var w=R(C,2);w.value=w.__value=`Inkubasi & Jejaring Mitra Industri`;var T=R(w,2);T.value=T.__value=`Rekomendasi Adopsi OPD / Pemkot`,W(),D(b),W(),D(y);var E=R(y,4),k=R(O(E)),A=R(O(k));t(A,{name:`check-circle`,class:`w-4 h-4`}),W(3),D(k),W(),D(E),W(),D(h),W(),D(u),W(),D(r),g(e,n)}var dt=s(`
<!>
<!>
<!>
<!>
<!>
<!>
<!>
<!>
<!>
<!>
<!>
<!>
<!>`,1);function ft(e){W();var t=dt(),n=R(H(t));Be(n,{});var r=R(n,2);He(r,{});var i=R(r,2);We(i,{});var a=R(i,2);Ke(a,{});var o=R(a,2);Je(o,{});var s=R(o,2);Xe(s,{});var c=R(s,2);Qe(c,{});var l=R(c,2);et(l,{});var u=R(l,2);nt(u,{});var d=R(u,2);it(d,{});var f=R(d,2);ot(f,{});var p=R(f,2);ct(p,{}),ut(R(p,2),{}),g(e,t)}var pt=s(`
<footer class="mt-auto border-t border-white/10 bg-[#040d1a] relative z-10 text-slate-400">
        <div class="gov-gold-stripe"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
                
                <div class="md:col-span-2 space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 to-amber-500 p-0.5 flex items-center justify-center">
                            <div class="w-full h-full bg-[#061224] rounded-[10px] flex items-center justify-center">
                                <!>
                            </div>
                        </div>
                        <div>
                            <span class="font-display font-extrabold text-lg text-white block">KRENOVA KOTA TEGAL
                                2027</span>
                            <span class="text-xs text-amber-400 font-medium tracking-wide">Pemerintah Kota Tegal</span>
                        </div>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed max-w-md">
                        Ajang Penjaringan Kreativitas dan Inovasi Masyarakat (KRENOVA) diselenggarakan oleh Badan
                        Perencanaan Pembangunan, Riset dan Inovasi Daerah (BAPPERIDA) Kota Tegal sebagai wujud komitmen
                        memajukan riset dan inovasi daerah.
                    </p>
                </div>

                
                <div class="space-y-3">
                    <h4 class="font-display font-bold text-xs uppercase tracking-wider text-slate-200">Tautan Resmi</h4>
                    <ul class="space-y-2 text-xs">
                        <li><a href="#about" class="hover:text-amber-400 transition-colors">Tentang Krenova</a></li>
                        <li><a href="#categories" class="hover:text-amber-400 transition-colors">Bidang & Kategori</a>
                        </li>
                        <li><a href="#timeline" class="hover:text-amber-400 transition-colors">Linimasa Pelaksanaan</a>
                        </li>
                        <li><a href="polling.html" class="hover:text-amber-400 transition-colors">Polling Inovasi
                                Terfavorit</a></li>
                        <li><a href="#faq" class="hover:text-amber-400 transition-colors">Tanya Jawab (FAQ)</a></li>
                    </ul>
                </div>

                
                <div class="space-y-3">
                    <h4 class="font-display font-bold text-xs uppercase tracking-wider text-slate-200">Sekretariat
                        Panitia</h4>
                    <div class="space-y-2 text-xs text-slate-400">
                        <p class="flex items-start gap-2">
                            <!>
                            <span>Jl. Ki Gede Sebayu No. 12, Kompleks Balai Kota, Tegal 52123</span>
                        </p>
                        <p class="flex items-center gap-2">
                            <!>
                            <span>bapperida@tegalkota.go.id</span>
                        </p>
                        <p class="flex items-center gap-2">
                            <!>
                            <span>(0283) 351001 / 351002</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <p>&copy; 2027 Pemerintah Kota Tegal • BAPPERIDA. Hak Cipta Dilindungi Undang-Undang.</p>
                <p class="text-[11px] text-slate-600 font-mono">Sistem Informasi Inovasi Daerah (e-Krenova Kota Tegal)
                </p>
            </div>
        </div>
    </footer>`,1);function mt(e){W();var n=pt(),r=R(H(n)),i=R(O(r),3),a=R(O(i)),o=R(O(a)),s=R(O(o)),c=R(O(s)),l=R(O(c)),u=R(O(l));t(u,{name:`award`,class:`w-5 h-5 text-amber-400`}),W(),D(l),W(),D(c),W(3),D(s),W(3),D(o);var d=R(o,4),f=R(O(d),3),p=R(O(f)),m=R(O(p));t(m,{name:`map-pin`,class:`w-4 h-4 text-amber-400 shrink-0 mt-0.5`}),W(3),D(p);var h=R(p,2),_=R(O(h));t(_,{name:`mail`,class:`w-4 h-4 text-amber-400 shrink-0`}),W(3),D(h);var v=R(h,2),y=R(O(v));t(y,{name:`phone`,class:`w-4 h-4 text-amber-400 shrink-0`}),W(3),D(v),W(),D(f),W(),D(d),W(),D(a),W(3),D(i),W(),D(r),g(e,n)}var ht=s(`


    
    <div id="floating-countdown" class="fixed bottom-6 left-6 z-50 glass rounded-2xl p-4 border border-white/10 shadow-2xl transition-all duration-300 translate-y-0 flex flex-col gap-2 w-[285px] max-w-[calc(100vw-3rem)] animate-fade-in-up">
        <div class="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
            <div class="flex items-center gap-2 text-rose-400 font-display font-bold text-xs uppercase tracking-wider">
                <span id="cd-pulse" class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                <span id="cd-header-text">Sisa Waktu Entri Proposal</span>
            </div>
            <button aria-label="Aksi" id="btn-toggle-countdown" class="p-1 rounded hover:bg-white/5 text-slate-500 hover:text-white transition-all">
                <!>
            </button>
        </div>

        <div id="countdown-timer-display" class="flex gap-2.5 justify-center py-1 font-display transition-all duration-300 overflow-hidden max-h-[80px]">
            <div class="text-center bg-white/5 rounded-xl px-2.5 py-1 min-w-[50px] border border-white/5">
                <span id="cd-days" class="text-lg font-extrabold text-white block -mb-1">00</span>
                <span class="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Hari</span>
            </div>
            <div class="text-center bg-white/5 rounded-xl px-2.5 py-1 min-w-[50px] border border-white/5">
                <span id="cd-hours" class="text-lg font-extrabold text-white block -mb-1">00</span>
                <span class="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Jam</span>
            </div>
            <div class="text-center bg-white/5 rounded-xl px-2.5 py-1 min-w-[50px] border border-white/5">
                <span id="cd-mins" class="text-lg font-extrabold text-white block -mb-1">00</span>
                <span class="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Mnt</span>
            </div>
            <div class="text-center bg-white/5 rounded-xl px-2.5 py-1 min-w-[50px] border border-white/5">
                <span id="cd-secs" class="text-lg font-extrabold text-rose-400 block -mb-1">00</span>
                <span class="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Det</span>
            </div>
        </div>

        <p id="cd-date-text" class="text-[9.5px] text-slate-500 text-center font-medium transition-all duration-300 overflow-hidden max-h-[20px]">
            Memuat jadwal entri proposal...
        </p>
    </div>`,1);function gt(e,n){T(n,!1),h(async()=>{try{let{loadScheduleConfig:e,initCountdown:t}=await K(async()=>{let{loadScheduleConfig:e,initCountdown:t}=await import(`./countdown-zVbHYNkW.js`);return{loadScheduleConfig:e,initCountdown:t}},__vite__mapDeps([0,1,2,3,4]),import.meta.url);await e(),t()}catch(e){console.error(`Error initializing countdown widget:`,e)}}),P(),W();var r=ht(),i=R(H(r)),a=R(O(i)),o=R(O(a),3),s=R(O(o));t(s,{name:`chevron-down`,id:`cd-chevron`,class:`w-4 h-4 transition-transform duration-300`}),W(),D(o),W(),D(a),W(5),D(i),g(e,r),B()}var _t=s(`
  <!>
`,1),vt=s(`

<!>
<main class="flex-grow">
  <!>
  <!>
  <!>
  <!>
</main>
<!>
<!>
<!>`,1);function yt(e,t){T(t,!1);let r=()=>a(E,`$mountedSurfaces`,c),s=()=>a(G,`$wizardComponent`,c),[c,u]=o();h(()=>{n(()=>K(()=>import(`./app-ZXeDGH7f.js`),__vite__mapDeps([5,2,3,1,4,6,0,7]),import.meta.url))}),P(),W();var d=vt(),f=R(H(d));re(f,{});var p=R(f,2),m=R(O(p));Ee(m,{});var _=R(m,2);Oe(_,{});var y=R(_,2),b=e=>{Re(e,{})};i(y,e=>{r().dashboard&&e(b)});var S=R(y,2),w=e=>{var t=v(),n=H(t);l(n,s,(e,t)=>{t(e,{})}),g(e,t)};i(S,e=>{r().wizard&&s()&&e(w)}),W(),D(p);var k=R(p,2),A=e=>{var t=_t();ft(R(H(t)),{}),W(),g(e,t)},j=C(()=>r().dialogs||new URLSearchParams(window.location.search).has(`verify_cert`)||new URLSearchParams(window.location.search).has(`certificate`));i(k,e=>{x(j)&&e(A)});var M=R(k,2);mt(M,{}),gt(R(M,2),{}),g(e,d),B(),u()}_(yt,{target:document.body});