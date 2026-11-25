import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,j as l,rt as u,t as d,tt as f,ut as p}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var m=i(`
<div id="panel-peserta-presentasi">
                                <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 space-y-6">
                                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
                                        <div>
                                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-2">
                                                <!>
                                                <span>Tahap Sidang & Uji Gagasan Finalis</span>
                                            </div>
                                            <h3 class="font-display font-extrabold text-xl text-white">
                                                Jadwal Presentasi Finalis KRENOVA 2027
                                            </h3>
                                            <p class="text-xs text-slate-400 mt-1">
                                                Pantau waktu giliran sidang, ruang pertemuan virtual/offline, serta dewan juri penguji inovasi Anda.
                                            </p>
                                        </div>
                                    </div>

                                    
                                    <div id="peserta-pres-scheduled-card" class="hidden space-y-6">
                                        <div class="presentation-scheduled-card p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border-2 border-indigo-500/30 shadow-xl space-y-6 relative overflow-hidden">
                                            <div class="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                                                <div class="flex items-center gap-3">
                                                    <span class="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center font-display font-black text-xl shadow-inner">
                                                        #<span id="peserta-pres-order-badge">01</span>
                                                    </span>
                                                    <div>
                                                        <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-400 font-mono">Nomor Urut Sidang</span>
                                                        <h4 id="peserta-pres-session-title" class="font-display font-bold text-lg text-white">Sesi Sidang Utama</h4>
                                                    </div>
                                                </div>
                                                <div id="peserta-pres-type-badge" class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-2 self-start sm:self-auto">
                                                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                                    <span>Tatap Muka & Virtual</span>
                                                </div>
                                            </div>

                                            
                                            <div class="space-y-1">
                                                <span class="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Judul Inovasi yang Dipresentasikan</span>
                                                <h3 id="peserta-pres-prop-title" class="font-display font-black text-xl text-white leading-snug">
                                                    Memuat judul inovasi...
                                                </h3>
                                                <p id="peserta-pres-innovator" class="text-xs text-indigo-300 font-medium">Inovator: -</p>
                                            </div>

                                            
                                            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                                                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                                                    <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                                                        <!>
                                                        Tanggal & Jam Sidang
                                                    </span>
                                                    <p id="peserta-pres-datetime" class="font-display font-bold text-sm text-white pt-1">
                                                        -
                                                    </p>
                                                    <p id="peserta-pres-duration" class="text-[11px] text-slate-400">Durasi: 30 Menit</p>
                                                </div>

                                                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                                                    <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                                                        <!>
                                                        Lokasi Fisik
                                                    </span>
                                                    <p id="peserta-pres-location" class="font-display font-bold text-sm text-white pt-1">
                                                        Ruang Rapat Bappeda
                                                    </p>
                                                    <p class="text-[11px] text-slate-400">Gedung Bappeda Lantai 2</p>
                                                </div>

                                                <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                                                    <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                                                        <!>
                                                        Ruang Virtual / Meet
                                                    </span>
                                                    <div id="peserta-pres-link-container">
                                                        <a id="peserta-pres-link-btn" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md">
                                                            <!>
                                                            <span>Gabung Virtual Meet</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <div class="grid sm:grid-cols-2 gap-4 border-t border-white/10 pt-4">
                                                <div class="space-y-1.5">
                                                    <span class="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                                        <!>
                                                        Dewan Juri Penilai
                                                    </span>
                                                    <p id="peserta-pres-jurors" class="text-xs text-slate-200 leading-relaxed font-medium">
                                                        Dewan Juri KRENOVA
                                                    </p>
                                                </div>

                                                <div class="space-y-1.5">
                                                    <span class="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                                        <!>
                                                        Petunjuk Teknis Presentasi
                                                    </span>
                                                    <p id="peserta-pres-notes" class="text-xs text-slate-300 leading-relaxed">
                                                        Waktu presentasi 15 menit dan tanya jawab 15 menit. Harap bersiap 15 menit sebelum giliran dimulai.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div id="peserta-pres-empty-card" class="glass-card rounded-3xl p-10 text-center space-y-4 max-w-md mx-auto">
                                        <div class="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto border border-white/5 shadow-inner">
                                            <!>
                                        </div>
                                        <h4 class="font-display font-bold text-base text-white">
                                            Belum Ada Jadwal Presentasi
                                        </h4>
                                        <p class="text-xs text-slate-400 leading-relaxed">
                                            Proposal Anda saat ini berada dalam tahapan seleksi awal / administrasi. Jika proposal Anda dinyatakan lolos ke babak presentasi, sesi jadwal dan tautan sidang akan otomatis tercantum di halaman ini.
                                        </p>
                                    </div>
                                </div>
                            </div>`,1);function h(i){let h=()=>n(d,`$activePanel`,g),[g,_]=r();p();var v=m(),y=u(f(v));let b;var x=u(c(y)),S=u(c(x)),C=u(c(S)),w=u(c(C)),T=u(c(w));e(T,{name:`video`,class:`w-3.5 h-3.5`}),p(3),s(w),p(5),s(C),p(),s(S);var E=u(S,2),D=u(c(E)),O=u(c(D),7),k=u(c(O)),A=u(c(k)),j=u(c(A));e(j,{name:`calendar`,class:`w-3.5 h-3.5 text-indigo-400`}),p(),s(A),p(5),s(k);var M=u(k,2),N=u(c(M)),P=u(c(N));e(P,{name:`map-pin`,class:`w-3.5 h-3.5 text-rose-400`}),p(),s(N),p(5),s(M);var F=u(M,2),I=u(c(F)),L=u(c(I));e(L,{name:`video`,class:`w-3.5 h-3.5 text-cyan-400`}),p(),s(I);var R=u(I,2),z=u(c(R));l(z,`href`,void 0);var B=u(c(z));e(B,{name:`external-link`,class:`w-3.5 h-3.5`}),p(3),s(z),p(),s(R),p(),s(F),p(),s(O);var V=u(O,2),H=u(c(V)),U=u(c(H)),W=u(c(U));e(W,{name:`users`,class:`w-3.5 h-3.5 text-indigo-400`}),p(),s(U),p(3),s(H);var G=u(H,2),K=u(c(G)),q=u(c(K));e(q,{name:`info`,class:`w-3.5 h-3.5 text-amber-400`}),p(),s(K),p(3),s(G),p(),s(V),p(),s(D),p(),s(E);var J=u(E,2),Y=u(c(J)),X=u(c(Y));e(X,{name:`calendar-clock`,class:`w-7 h-7`}),p(),s(Y),p(5),s(J),p(),s(x),p(),s(y),t(()=>b=a(y,1,`dashboard-panel space-y-6`,null,b,{hidden:h()!==`panel-peserta-presentasi`})),o(i,v),_()}export{h as default};