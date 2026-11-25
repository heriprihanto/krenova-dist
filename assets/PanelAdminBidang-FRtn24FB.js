import{$ as e,D as t,E as n,G as r,N as i,U as a,rt as o,t as s,tt as c,ut as l}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var u=r(`
<div id="panel-admin-bidang">
                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">
                                                        ID Bidang
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Nama Bidang Lomba
                                                    </th>
                                                    <th class="px-6 py-4 text-right">
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-bidang-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="table-admin-bidang-empty" class="p-12 text-center text-slate-500 hidden">
                                        Belum ada bidang lomba. Klik 'Tambah
                                        Bidang' di pojok kanan atas.
                                    </div>
                                </div>
                            </div>`,1);function d(r){let d=()=>t(s,`$activePanel`,f),[f,p]=n();l();var m=u(),h=o(c(m));let g;e(()=>g=i(h,1,`dashboard-panel space-y-6`,null,g,{hidden:d()!==`panel-admin-bidang`})),a(r,m),p()}export{d as default};