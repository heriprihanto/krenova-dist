import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-peserta-monitoring">
                                <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 space-y-6">
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                                        <div>
                                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                                                <!>
                                                <span>Pendampingan & Keberlanjutan Inovasi</span>
                                            </div>
                                            <h3 class="font-display font-extrabold text-xl text-white">
                                                Monitoring Inovasi Pascalomba
                                            </h3>
                                            <p class="text-xs text-slate-400 mt-1">
                                                Perbarui data penerapan inovasi, jumlah pengguna/mitra, dan kebutuhan pembinaan dari Pemerintah Kota Tegal (BAPPERIDA).
                                            </p>
                                        </div>
                                        <button id="btn-peserta-add-monitoring" type="button" class="btn-glow px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-extrabold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-600/20 active:scale-95 self-start sm:self-auto">
                                            <!>
                                            <span>Update Perkembangan Inovasi</span>
                                        </button>
                                    </div>

                                    
                                    <div id="peserta-monitoring-proposals-grid" class="grid sm:grid-cols-2 gap-6">
                                        
                                    </div>

                                    
                                    <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                                        <h4 class="font-display font-bold text-sm text-white flex items-center gap-2">
                                            <!>
                                            Riwayat Laporan Perkembangan Penerapan
                                        </h4>
                                        <div id="peserta-monitoring-history-list" class="space-y-3">
                                            <p class="text-xs text-slate-500">Belum ada riwayat perkembangan inovasi yang dikirim.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S)),w=l(c(C));e(w,{name:`trending-up`,class:`w-3.5 h-3.5`}),f(3),s(C),f(5),s(S);var T=l(S,2),E=l(c(T));e(E,{name:`plus-circle`,class:`w-4 h-4`}),f(3),s(T),f(),s(x);var D=l(x,4),O=l(c(D)),k=l(c(O));e(k,{name:`history`,class:`w-4 h-4 text-emerald-400`}),f(),s(O),f(3),s(D),f(),s(b),f(),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-peserta-monitoring`})),o(i,_),g()}export{m as default};