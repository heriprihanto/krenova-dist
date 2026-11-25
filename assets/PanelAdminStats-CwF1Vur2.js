import{r as e}from"./bootstrap-BQdxUVW_.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var p=i(`
<div id="panel-admin-stats">
                                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Total Proposal
                                            </p>
                                            <h4 id="admin-stat-proposals" class="font-display font-bold text-xl text-white mt-0.5">
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
                                                Total User
                                            </p>
                                            <h4 id="admin-stat-users" class="font-display font-bold text-xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Total Juri
                                            </p>
                                            <h4 id="admin-stat-juries" class="font-display font-bold text-xl text-white mt-0.5">
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
                                                Scored Props
                                            </p>
                                            <h4 id="admin-stat-scored" class="font-display font-bold text-xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="grid md:grid-cols-3 gap-6">
                                    <div class="glass-card rounded-2xl p-6 space-y-4">
                                        <h3 class="font-display font-bold text-base text-white flex items-center gap-2">
                                            <!>
                                            Rata-rata Nilai per Kategori
                                        </h3>
                                        <div class="space-y-3">
                                            <div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5">
                                                <span class="text-xs font-semibold text-slate-300">Pelajar:</span>
                                                <div class="text-right">
                                                    <strong id="admin-avg-pelajar" class="text-sm font-extrabold text-indigo-400 font-mono">0.00</strong>
                                                    <span id="admin-count-pelajar" class="text-[9px] text-slate-500 block">0 proposal</span>
                                                </div>
                                            </div>
                                            <div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5">
                                                <span class="text-xs font-semibold text-slate-300">Umum:</span>
                                                <div class="text-right">
                                                    <strong id="admin-avg-umum" class="text-sm font-extrabold text-emerald-400 font-mono">0.00</strong>
                                                    <span id="admin-count-umum" class="text-[9px] text-slate-500 block">0 proposal</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-6 space-y-3">
                                        <h3 class="font-display font-bold text-base text-white">
                                            Status Registrasi & Kompetisi
                                        </h3>
                                        <p class="text-sm text-slate-400" id="admin-schedule-status-text">
                                            Memuat jadwal...
                                        </p>
                                    </div>
                                    <div class="glass-card rounded-2xl p-6 space-y-3">
                                        <h3 class="font-display font-bold text-base text-white">
                                            Panduan Administrator
                                        </h3>
                                        <p class="text-xs text-slate-400 leading-relaxed">
                                            Sebagai Admin, Anda dapat
                                            mengelola data juri, kategori
                                            lomba (Bidang), jadwal periode
                                            entri/penilaian, user account,
                                            serta melakukan verifikasi
                                            dokumen proposal
                                            (Approve/Reject) sebelum
                                            diajukan ke dewan juri untuk
                                            dinilai.
                                        </p>
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S));e(C,{name:`files`,class:`w-5 h-5`}),f(),s(S),f(3),s(x);var w=l(x,2),T=l(c(w)),E=l(c(T));e(E,{name:`users`,class:`w-5 h-5`}),f(),s(T),f(3),s(w);var D=l(w,2),O=l(c(D)),k=l(c(O));e(k,{name:`award`,class:`w-5 h-5`}),f(),s(O),f(3),s(D);var A=l(D,2),j=l(c(A)),M=l(c(j));e(M,{name:`trending-up`,class:`w-5 h-5`}),f(),s(j),f(3),s(A),f(),s(b);var N=l(b,2),P=l(c(N)),F=l(c(P)),I=l(c(F));e(I,{name:`bar-chart-3`,class:`w-4 h-4 text-indigo-400`}),f(),s(F),f(3),s(P),f(5),s(N),f(),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-stats`})),o(i,_),g()}export{m as default};