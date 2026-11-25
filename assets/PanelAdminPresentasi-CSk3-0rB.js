import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-admin-presentasi">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div class="flex items-center gap-2">
                                        <div class="relative">
                                            <input type="text" id="admin-pres-search-input" placeholder="Cari sesi / inovator / judul..." class="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-64"/>
                                            <!>
                                        </div>
                                    </div>
                                    <button id="btn-admin-add-presentation" type="button" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
                                        <!>
                                        <span>Jadwalkan Presentasi Baru</span>
                                    </button>
                                </div>

                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">No. Urut & Sesi</th>
                                                    <th class="px-6 py-4">Proposal & Inovator</th>
                                                    <th class="px-6 py-4">Waktu Sidang</th>
                                                    <th class="px-6 py-4">Format / Ruangan</th>
                                                    <th class="px-6 py-4">Juri Penguji</th>
                                                    <th class="px-6 py-4">Status</th>
                                                    <th class="px-6 py-4 text-right">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-presentations-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="table-admin-presentations-empty" class="p-12 text-center text-slate-500 hidden">
                                        Belum ada jadwal presentasi finalis. Klik "Jadwalkan Presentasi Baru" untuk menambahkan.
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S),3);e(C,{name:`search`,class:`w-4 h-4 text-slate-500 absolute left-3 top-2.5`}),f(),s(S),f(),s(x);var w=l(x,2),T=l(c(w));e(T,{name:`plus`,class:`w-4 h-4`}),f(3),s(w),f(),s(b),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-presentasi`})),o(i,_),g()}export{m as default};