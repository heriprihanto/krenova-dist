import{A as e,O as t,R as n,W as r,rt as i,t as a}from"./ui-DnsUKVzW.js";var o={__name:`PanelJuriPenilaian`,setup(o){return(o,s)=>(n(),t(`div`,{id:`panel-juri-penilaian`,class:i([`dashboard-panel space-y-6`,{hidden:r(a)!==`panel-juri-penilaian`}])},[...s[0]||=[e(`<div class="flex items-center gap-2 border-b border-white/5 pb-2 overflow-x-auto"><button data-jfilter="unscored" class="tab-jfilter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap">
                                        Belum Dinilai
                                    </button> <button data-jfilter="scored" class="tab-jfilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Sudah Dinilai
                                    </button> <button data-jfilter="approved" class="tab-jfilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Lolos (Approved Admin)
                                    </button> <button data-jfilter="rejected" class="tab-jfilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                        Ditolak (Rejected Admin)
                                    </button></div> <div class="glass-card rounded-2xl overflow-hidden border border-white/5 animate-fade-in-up"><div class="overflow-x-auto"><table class="w-full text-left text-sm text-slate-300"><thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5"><tr><th class="px-6 py-4">
                                                        Judul Proposal
                                                    </th> <th class="px-6 py-4">
                                                        Pengusul
                                                    </th> <th class="px-6 py-4">
                                                        Bidang
                                                    </th> <th class="px-6 py-4">
                                                        Nilai Anda
                                                    </th> <th class="px-6 py-4 text-right">
                                                        Aksi
                                                    </th></tr></thead> <tbody id="table-juri-proposals-body" class="divide-y divide-white/5"></tbody></table></div> <div id="table-juri-empty" class="p-12 text-center text-slate-500 hidden">
                                        Tidak ada proposal yang sesuai
                                        filter.
                                    </div></div>`,3)]],2))}};export{o as default};