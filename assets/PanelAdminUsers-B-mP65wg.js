import{$ as e,D as t,E as n,G as r,N as i,U as a,rt as o,t as s,tt as c,ut as l}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var u=r(`
<div id="panel-admin-users">
                                
                                <div class="flex items-center gap-2 border-b border-white/5 pb-2">
                                    <button data-user-filter="all" class="user-tab-filter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all">
                                        Semua
                                    </button>
                                    <button data-user-filter="admin" class="user-tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all">
                                        Admin
                                    </button>
                                    <button data-user-filter="juri" class="user-tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all">
                                        Juri
                                    </button>
                                    <button data-user-filter="peserta" class="user-tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all">
                                        Peserta
                                    </button>
                                </div>

                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">
                                                        Nama Pengguna
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Email
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Role
                                                    </th>
                                                    <th class="px-6 py-4">
                                                        Tanggal Daftar
                                                    </th>
                                                    <th class="px-6 py-4 text-right">
                                                        Aksi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-users-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>`,1);function d(r){let d=()=>t(s,`$activePanel`,f),[f,p]=n();l();var m=u(),h=o(c(m));let g;e(()=>g=i(h,1,`dashboard-panel space-y-6`,null,g,{hidden:d()!==`panel-admin-users`})),a(r,m),p()}export{d as default};