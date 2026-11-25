import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-admin-penilaian">
                                
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div class="glass-card rounded-2xl p-4 flex items-center justify-between border border-white/5 bg-indigo-500/5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                                <!>
                                            </div>
                                            <div>
                                                <span class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Rata-rata
                                                    Kategori
                                                    Pelajar</span>
                                                <strong id="admin-eval-avg-pelajar" class="text-lg font-extrabold text-white font-mono">0.00</strong>
                                            </div>
                                        </div>
                                        <span id="admin-eval-count-pelajar" class="text-[10px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">0
                                            Proposal</span>
                                    </div>
                                    <div class="glass-card rounded-2xl p-4 flex items-center justify-between border border-white/5 bg-emerald-500/5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                                <!>
                                            </div>
                                            <div>
                                                <span class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Rata-rata
                                                    Kategori
                                                    Umum</span>
                                                <strong id="admin-eval-avg-umum" class="text-lg font-extrabold text-white font-mono">0.00</strong>
                                            </div>
                                        </div>
                                        <span id="admin-eval-count-umum" class="text-[10px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">0
                                            Proposal</span>
                                    </div>
                                </div>

                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">
                                                        Judul Proposal
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Inovator
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Nilai Rata-rata
                                                    </th>
                                                    <th class="px-6 py-4 text-right">
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-penilaian-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="table-admin-penilaian-empty" class="p-12 text-center text-slate-500 hidden">
                                        Belum ada penilaian proposal yang
                                        terekam.
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S)),w=l(c(C));e(w,{name:`graduation-cap`,class:`w-5 h-5`}),f(),s(C),f(3),s(S),f(3),s(x);var T=l(x,2),E=l(c(T)),D=l(c(E)),O=l(c(D));e(O,{name:`users`,class:`w-5 h-5`}),f(),s(D),f(3),s(E),f(3),s(T),f(),s(b),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-penilaian`})),o(i,_),g()}export{m as default};