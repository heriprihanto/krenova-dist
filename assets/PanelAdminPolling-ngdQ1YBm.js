import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-admin-polling">
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div class="glass-card rounded-2xl p-5 flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Total Partisipan (Suara)</p>
                                            <h4 id="admin-poll-total-votes" class="font-display font-extrabold text-2xl text-white mt-0.5">0</h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-5 flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/20">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Suara Pelajar</p>
                                            <h4 id="admin-poll-pelajar-votes" class="font-display font-extrabold text-2xl text-purple-300 mt-0.5">0
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="glass-card rounded-2xl p-5 flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 border border-cyan-500/20">
                                            <!>
                                        </div>
                                        <div>
                                            <p class="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                                Suara Umum</p>
                                            <h4 id="admin-poll-umum-votes" class="font-display font-extrabold text-2xl text-cyan-300 mt-0.5">0</h4>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="grid lg:grid-cols-2 gap-8">
                                    
                                    <div class="glass-card rounded-3xl p-6 border border-white/5 space-y-4">
                                        <h3 class="font-display font-bold text-base text-white border-b border-white/5 pb-3 flex items-center justify-between">
                                            <span>Peringkat Kategori Pelajar</span>
                                            <span class="text-xs text-purple-400 font-mono" id="admin-poll-pelajar-ratio">0%</span>
                                        </h3>
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-left text-sm text-slate-300">
                                                <thead>
                                                    <tr class="text-[10px] uppercase font-semibold text-slate-500 tracking-wider border-b border-white/5">
                                                        <th class="py-2 w-12 text-center">Rank</th>
                                                        <th class="py-2">Proposal Inovasi</th>
                                                        <th class="py-2 w-24 text-right">Suara</th>
                                                        <th class="py-2 w-28 text-right">Persentase</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="table-admin-poll-pelajar" class="divide-y divide-white/5">
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    
                                    <div class="glass-card rounded-3xl p-6 border border-white/5 space-y-4">
                                        <h3 class="font-display font-bold text-base text-white border-b border-white/5 pb-3 flex items-center justify-between">
                                            <span>Peringkat Kategori Umum</span>
                                            <span class="text-xs text-cyan-400 font-mono" id="admin-poll-umum-ratio">0%</span>
                                        </h3>
                                        <div class="overflow-x-auto">
                                            <table class="w-full text-left text-sm text-slate-300">
                                                <thead>
                                                    <tr class="text-[10px] uppercase font-semibold text-slate-500 tracking-wider border-b border-white/5">
                                                        <th class="py-2 w-12 text-center">Rank</th>
                                                        <th class="py-2">Proposal Inovasi</th>
                                                        <th class="py-2 w-24 text-right">Suara</th>
                                                        <th class="py-2 w-28 text-right">Persentase</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="table-admin-poll-umum" class="divide-y divide-white/5">
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S));e(C,{name:`vote`,class:`w-6 h-6`}),f(),s(S),f(3),s(x);var w=l(x,2),T=l(c(w)),E=l(c(T));e(E,{name:`graduation-cap`,class:`w-6 h-6`}),f(),s(T),f(3),s(w);var D=l(w,2),O=l(c(D)),k=l(c(O));e(k,{name:`users`,class:`w-6 h-6`}),f(),s(O),f(3),s(D),f(),s(b),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-polling`})),o(i,_),g()}export{m as default};