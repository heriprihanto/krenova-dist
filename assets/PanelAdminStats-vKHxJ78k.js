import{A as e,G as t,M as n,O as r,R as i,T as a,it as o,j as s,t as c}from"./ui-BHEDetRA.js";import{r as l}from"./bootstrap-DVua3HyD.js";var u={class:`grid grid-cols-2 lg:grid-cols-4 gap-4`},d={class:`glass-card rounded-2xl p-4 flex items-center gap-3`},f={class:`w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0`},p={class:`glass-card rounded-2xl p-4 flex items-center gap-3`},m={class:`w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0`},h={class:`glass-card rounded-2xl p-4 flex items-center gap-3`},g={class:`w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0`},_={class:`glass-card rounded-2xl p-4 flex items-center gap-3`},v={class:`w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0`},y={class:`grid md:grid-cols-3 gap-6`},b={class:`glass-card rounded-2xl p-6 space-y-4`},x={class:`font-display font-bold text-base text-white flex items-center gap-2`},S={__name:`PanelAdminStats`,setup(S){return(S,C)=>(i(),r(`div`,{id:`panel-admin-stats`,class:o([`dashboard-panel space-y-6`,{hidden:t(c)!==`panel-admin-stats`}])},[a(`div`,u,[a(`div`,d,[a(`div`,f,[n(l,{name:`files`,class:`w-5 h-5`})]),C[0]||=s(),C[1]||=a(`div`,null,[a(`p`,{class:`text-[10px] text-slate-500 font-semibold uppercase tracking-wider`},`
                                                Total Proposal
                                            `),s(),a(`h4`,{id:`admin-stat-proposals`,class:`font-display font-bold text-xl text-white mt-0.5`},`
                                                0
                                            `)],-1)]),C[8]||=s(),a(`div`,p,[a(`div`,m,[n(l,{name:`users`,class:`w-5 h-5`})]),C[2]||=s(),C[3]||=a(`div`,null,[a(`p`,{class:`text-[10px] text-slate-500 font-semibold uppercase tracking-wider`},`
                                                Total User
                                            `),s(),a(`h4`,{id:`admin-stat-users`,class:`font-display font-bold text-xl text-white mt-0.5`},`
                                                0
                                            `)],-1)]),C[9]||=s(),a(`div`,h,[a(`div`,g,[n(l,{name:`award`,class:`w-5 h-5`})]),C[4]||=s(),C[5]||=a(`div`,null,[a(`p`,{class:`text-[10px] text-slate-500 font-semibold uppercase tracking-wider`},`
                                                Total Juri
                                            `),s(),a(`h4`,{id:`admin-stat-juries`,class:`font-display font-bold text-xl text-white mt-0.5`},`
                                                0
                                            `)],-1)]),C[10]||=s(),a(`div`,_,[a(`div`,v,[n(l,{name:`trending-up`,class:`w-5 h-5`})]),C[6]||=s(),C[7]||=a(`div`,null,[a(`p`,{class:`text-[10px] text-slate-500 font-semibold uppercase tracking-wider`},`
                                                Scored Props
                                            `),s(),a(`h4`,{id:`admin-stat-scored`,class:`font-display font-bold text-xl text-white mt-0.5`},`
                                                0
                                            `)],-1)])]),C[14]||=s(),a(`div`,y,[a(`div`,b,[a(`h3`,x,[n(l,{name:`bar-chart-3`,class:`w-4 h-4 text-indigo-400`}),C[11]||=s(`
                                            Rata-rata Nilai per Kategori
                                        `,-1)]),C[12]||=e(` <div class="space-y-3"><div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5"><span class="text-xs font-semibold text-slate-300">Pelajar:</span> <div class="text-right"><strong id="admin-avg-pelajar" class="text-sm font-extrabold text-indigo-400 font-mono">0.00</strong> <span id="admin-count-pelajar" class="text-[9px] text-slate-500 block">0 proposal</span></div></div> <div class="flex justify-between items-center bg-white/5 px-3 py-2 rounded-xl border border-white/5"><span class="text-xs font-semibold text-slate-300">Umum:</span> <div class="text-right"><strong id="admin-avg-umum" class="text-sm font-extrabold text-emerald-400 font-mono">0.00</strong> <span id="admin-count-umum" class="text-[9px] text-slate-500 block">0 proposal</span></div></div></div>`,2)]),C[13]||=e(` <div class="glass-card rounded-2xl p-6 space-y-3"><h3 class="font-display font-bold text-base text-white">
                                            Status Registrasi &amp; Kompetisi
                                        </h3> <p class="text-sm text-slate-400" id="admin-schedule-status-text">
                                            Memuat jadwal...
                                        </p></div> <div class="glass-card rounded-2xl p-6 space-y-3"><h3 class="font-display font-bold text-base text-white">
                                            Panduan Administrator
                                        </h3> <p class="text-xs text-slate-400 leading-relaxed">
                                            Sebagai Admin, Anda dapat
                                            mengelola data juri, kategori
                                            lomba (Bidang), jadwal periode
                                            entri/penilaian, user account,
                                            serta melakukan verifikasi
                                            dokumen proposal
                                            (Approve/Reject) sebelum
                                            diajukan ke dewan juri untuk
                                            dinilai.
                                        </p></div>`,4)])],2))}};export{S as default};