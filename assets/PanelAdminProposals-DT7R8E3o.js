import{A as e,M as t,O as n,R as r,T as i,W as a,j as o,rt as s,t as c}from"./ui-DnsUKVzW.js";import{r as l}from"./bootstrap-Dk4eCz5J.js";var u={class:`flex items-center gap-2 border-b border-white/5 pb-2 overflow-x-auto`},d={"data-afilter":`Perlu Revisi`,class:`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-amber-400 hover:text-amber-300 transition-all whitespace-nowrap flex items-center gap-1.5`},f={__name:`PanelAdminProposals`,setup(f){return(f,p)=>(r(),n(`div`,{id:`panel-admin-proposals`,class:s([`dashboard-panel space-y-6`,{hidden:a(c)!==`panel-admin-proposals`}])},[i(`div`,u,[p[1]||=i(`button`,{"data-afilter":`all`,class:`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap`},`
                                        Semua
                                    `,-1),p[2]||=o(),p[3]||=i(`button`,{"data-afilter":`Submitted`,class:`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap`},`
                                        Diajukan (Submitted)
                                    `,-1),p[4]||=o(),i(`button`,d,[t(l,{name:`alert-circle`,class:`w-3.5 h-3.5`}),p[0]||=o(`
                                        Perlu Revisi
                                    `,-1)]),p[5]||=o(),p[6]||=i(`button`,{"data-afilter":`Approved`,class:`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap`},`
                                        Diapprove
                                    `,-1),p[7]||=o(),p[8]||=i(`button`,{"data-afilter":`Rejected`,class:`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap`},`
                                        Direject
                                    `,-1),p[9]||=o(),p[10]||=i(`button`,{"data-afilter":`Draft`,class:`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap`},`
                                        Draft
                                    `,-1)]),p[11]||=e(` <div class="glass-card rounded-2xl overflow-hidden border border-white/5"><div class="overflow-x-auto"><table class="w-full text-left text-sm text-slate-300"><thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5"><tr><th class="px-6 py-4">
                                                        Judul Inovasi
                                                    </th> <th class="px-6 py-4">
                                                        Pengusul / Tim
                                                    </th> <th class="px-6 py-4">
                                                        Bidang
                                                    </th> <th class="px-6 py-4">
                                                        Status
                                                    </th> <th class="px-6 py-4 text-right">
                                                        Aksi
                                                    </th></tr></thead> <tbody id="table-admin-proposals-body" class="divide-y divide-white/5"></tbody></table></div> <div id="table-admin-proposals-empty" class="p-12 text-center text-slate-500 hidden">
                                        Tidak ada proposal yang sesuai.
                                    </div></div>`,2)],2))}};export{f as default};