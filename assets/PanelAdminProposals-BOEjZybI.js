import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-admin-proposals">
                                <div class="flex items-center gap-2 border-b border-white/5 pb-2 overflow-x-auto">
                                    <button data-afilter="all" class="tab-afilter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap">
                                        Semua
                                    </button>
                                    <button data-afilter="Submitted" class="tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Diajukan (Submitted)
                                    </button>
                                    <button data-afilter="Perlu Revisi" class="tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-amber-400 hover:text-amber-300 transition-all whitespace-nowrap flex items-center gap-1.5">
                                        <!>
                                        Perlu Revisi
                                    </button>
                                    <button data-afilter="Approved" class="tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Diapprove
                                    </button>
                                    <button data-afilter="Rejected" class="tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Direject
                                    </button>
                                    <button data-afilter="Draft" class="tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Draft
                                    </button>
                                </div>

                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">
                                                        Judul Inovasi
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Pengusul / Tim
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Bidang
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Status
                                                    </th>
                                                    <th class="px-6 py-4 text-right">
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-proposals-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="table-admin-proposals-empty" class="p-12 text-center text-slate-500 hidden">
                                        Tidak ada proposal yang sesuai.
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b),5),S=l(c(x));e(S,{name:`alert-circle`,class:`w-3.5 h-3.5`}),f(),s(x),f(7),s(b),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-proposals`})),o(i,_),g()}export{m as default};