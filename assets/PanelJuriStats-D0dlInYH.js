import{r as e}from"./bootstrap-BQdxUVW_.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var p=i(`
<div id="panel-juri-stats">
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div class="glass-card rounded-2xl p-6 flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                                                Proposal Diapprove Admin
                                            </p>
                                            <h4 id="juri-stat-total" class="font-display font-bold text-2xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-6 flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                                                Belum Dinilai
                                            </p>
                                            <h4 id="juri-stat-unscored" class="font-display font-bold text-2xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-6 flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                                                Sudah Dinilai
                                            </p>
                                            <h4 id="juri-stat-scored" class="font-display font-bold text-2xl text-white mt-0.5">
                                                0
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="glass-card rounded-2xl p-6 space-y-3">
                                    <h3 class="font-display font-bold text-base text-white font-mono">
                                        Status Periode Penilaian
                                    </h3>
                                    <p class="text-sm text-slate-400" id="juri-schedule-status-text">
                                        Memuat jadwal kegiatan...
                                    </p>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S));e(C,{name:`clipboard-list`,class:`w-6 h-6`}),f(),s(S),f(3),s(x);var w=l(x,2),T=l(c(w)),E=l(c(T));e(E,{name:`clock`,class:`w-6 h-6`}),f(),s(T),f(3),s(w);var D=l(w,2),O=l(c(D)),k=l(c(O));e(k,{name:`check-circle-2`,class:`w-6 h-6`}),f(),s(O),f(3),s(D),f(),s(b),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-juri-stats`})),o(i,_),g()}export{m as default};