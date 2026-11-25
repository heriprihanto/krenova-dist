import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-peserta-proposals">
                                
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Total Proposal
                                            </p>
                                            <div class="flex items-baseline gap-1.5 mt-0.5">
                                                <h4 id="peserta-stat-total" class="font-display font-bold text-xl text-white">
                                                    0
                                                </h4>
                                                <span class="text-xs text-slate-400 font-mono font-semibold">/ 2 Maks</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Draft
                                            </p>
                                            <h4 id="peserta-stat-draft" class="font-display font-bold text-xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Diajukan
                                            </p>
                                            <h4 id="peserta-stat-submitted" class="font-display font-bold text-xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Lolos
                                            </p>
                                            <h4 id="peserta-stat-accepted" class="font-display font-bold text-xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="flex items-center gap-2 border-b border-white/5 pb-2">
                                    <button data-filter="all" class="tab-filter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all">
                                        Semua
                                    </button>
                                    <button data-filter="Draft" class="tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all">
                                        Draft
                                    </button>
                                    <button data-filter="Submitted" class="tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all">
                                        Diajukan
                                    </button>
                                    <button data-filter="Accepted" class="tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all">
                                        Lolos
                                    </button>
                                    <button data-filter="Perlu Revisi" class="tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-amber-400 hover:text-amber-300 transition-all flex items-center gap-1.5">
                                        <!>
                                        <span>Perlu Revisi</span>
                                        <span id="peserta-filter-revisi-count" class="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500/20 text-amber-300 font-bold hidden">0</span>
                                    </button>
                                </div>

                                
                                <div id="peserta-quota-full-alert" class="hidden bg-red-500/10 border border-indigo-500/30 rounded-2xl p-4 flex items-center gap-3">
                                    <div class="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                                        <!>
                                    </div>
                                    <div>
                                        <h5 class="text-xs font-bold text-black-200">Batas Kuota Tercapai (2/2 Proposal)</h5>
                                        <p class="text-[11px] text-slate-300">Setiap peserta hanya dapat mendaftarkan maksimal 2 proposal inovasi. Anda tetap dapat mengedit draf atau memperbaiki proposal yang perlu revisi.</p>
                                    </div>
                                </div>

                                
                                <div id="peserta-revision-alert-banner" class="hidden bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-pulse">
                                    <div class="flex items-center gap-3">
                                        <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <h5 class="text-xs font-bold text-amber-300">Ada Catatan Revisi dari Reviewer / Admin</h5>
                                            <p class="text-[11px] text-slate-300">Mohon periksa dan perbaiki usulan proposal Anda sebelum batas waktu berakhir.</p>
                                        </div>
                                    </div>
                                    <button id="btn-peserta-view-revisi" type="button" class="shrink-0 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md flex items-center gap-1.5 self-start sm:self-auto">
                                        <!>
                                        <span>Lihat Proposal Revisi</span>
                                    </button>
                                </div>

                                
                                <div id="peserta-proposals-empty" class="glass-card rounded-3xl p-12 text-center space-y-4 max-w-md mx-auto hidden">
                                    <div class="w-12 h-12 rounded-full bg-slate-800/40 flex items-center justify-center text-slate-500 mx-auto border border-white/5">
                                        <!>
                                    </div>
                                    <h3 class="font-display font-bold text-base text-white">
                                        Belum Ada Proposal
                                    </h3>
                                    <p class="text-slate-400 text-xs max-w-xs mx-auto">
                                        Anda belum membuat proposal inovasi
                                        apa pun. Silahkan klik tombol 'Buat
                                        Proposal Baru' untuk mendaftarkan
                                        inovasi pertama Anda.
                                    </p>
                                </div>

                                <div id="peserta-proposals-grid" class="grid sm:grid-cols-2 gap-6">
                                    
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S));e(C,{name:`folder`,class:`w-5 h-5`}),f(),s(S),f(3),s(x);var w=l(x,2),T=l(c(w)),E=l(c(T));e(E,{name:`edit`,class:`w-5 h-5`}),f(),s(T),f(3),s(w);var D=l(w,2),O=l(c(D)),k=l(c(O));e(k,{name:`send`,class:`w-5 h-5`}),f(),s(O),f(3),s(D);var A=l(D,2),j=l(c(A)),M=l(c(j));e(M,{name:`check-circle`,class:`w-5 h-5`}),f(),s(j),f(3),s(A),f(),s(b);var N=l(b,2),P=l(c(N),9),F=l(c(P));e(F,{name:`alert-circle`,class:`w-3.5 h-3.5`}),f(5),s(P),f(),s(N);var I=l(N,2),L=l(c(I)),R=l(c(L));e(R,{name:`info`,class:`w-5 h-5`}),f(),s(L),f(3),s(I);var z=l(I,2),B=l(c(z)),V=l(c(B)),H=l(c(V));e(H,{name:`alert-triangle`,class:`w-5 h-5`}),f(),s(V),f(3),s(B);var U=l(B,2),W=l(c(U));e(W,{name:`edit-3`,class:`w-3.5 h-3.5`}),f(3),s(U),f(),s(z);var G=l(z,2),K=l(c(G)),q=l(c(K));e(q,{name:`folder-open`,class:`w-6 h-6`}),f(),s(K),f(5),s(G),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-peserta-proposals`})),o(i,_),g()}export{m as default};