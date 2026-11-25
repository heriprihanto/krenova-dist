import{r as e}from"./bootstrap-BQdxUVW_.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var p=i(`
<div id="panel-admin-monitoring">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h3 class="font-display font-extrabold text-lg text-white flex items-center gap-2">
                                            <!>
                                            Monitoring Perkembangan Inovasi Pascalomba
                                        </h3>
                                        <p class="text-xs text-slate-400 mt-0.5">
                                            Data penerapan inovasi di masyarakat dan basis pendampingan/pembinaan lanjutan BAPPERIDA Kota Tegal.
                                        </p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="relative">
                                            <input type="text" id="admin-mon-search-input" placeholder="Cari inovasi / mitra / kebutuhan..." class="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 w-64"/>
                                            <!>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Inovasi Dipantau</p>
                                            <h4 id="admin-mon-stat-total" class="font-display font-bold text-lg text-white mt-0.5">0</h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Mitra Terlibat</p>
                                            <h4 id="admin-mon-stat-partners" class="font-display font-bold text-lg text-white mt-0.5">0</h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Butuh HKI/Paten</p>
                                            <h4 id="admin-mon-stat-hki" class="font-display font-bold text-lg text-white mt-0.5">0</h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Komersialisasi</p>
                                            <h4 id="admin-mon-stat-commercial" class="font-display font-bold text-lg text-white mt-0.5">0</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">Inovasi & Inovator</th>
                                                    <th class="px-6 py-4">Tahap Penerapan</th>
                                                    <th class="px-6 py-4">Penerima Manfaat / Pengguna</th>
                                                    <th class="px-6 py-4">Mitra Kolaborasi</th>
                                                    <th class="px-6 py-4">Kebutuhan Fasilitasi</th>
                                                    <th class="px-6 py-4">Tgl Pembaruan</th>
                                                    <th class="px-6 py-4 text-right">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-monitoring-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="table-admin-monitoring-empty" class="p-12 text-center text-slate-500 hidden">
                                        Belum ada data pemantauan inovasi yang dilaporkan peserta.
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S));e(C,{name:`trending-up`,class:`w-5 h-5 text-emerald-400`}),f(),s(S),f(3),s(x);var w=l(x,2),T=l(c(w)),E=l(c(T),3);e(E,{name:`search`,class:`w-4 h-4 text-slate-500 absolute left-3 top-2.5`}),f(),s(T),f(),s(w),f(),s(b);var D=l(b,2),O=l(c(D)),k=l(c(O)),A=l(c(k));e(A,{name:`award`,class:`w-5 h-5`}),f(),s(k),f(3),s(O);var j=l(O,2),M=l(c(j)),N=l(c(M));e(N,{name:`building-2`,class:`w-5 h-5`}),f(),s(M),f(3),s(j);var P=l(j,2),F=l(c(P)),I=l(c(F));e(I,{name:`shield-check`,class:`w-5 h-5`}),f(),s(F),f(3),s(P);var L=l(P,2),R=l(c(L)),z=l(c(R));e(z,{name:`shopping-bag`,class:`w-5 h-5`}),f(),s(R),f(3),s(L),f(),s(D),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-monitoring`})),o(i,_),g()}export{m as default};