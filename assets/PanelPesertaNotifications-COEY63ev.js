import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-peserta-notifications">
                                <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 space-y-6">
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
                                        <div>
                                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-2">
                                                <!>
                                                <span>Pemberitahuan Sistem & Reviewer</span>
                                            </div>
                                            <h3 class="font-display font-extrabold text-xl text-white">
                                                Pusat Notifikasi Peserta
                                            </h3>
                                            <p class="text-xs text-slate-400 mt-1">
                                                Pantau perkembangan status proposal, catatan revisi berkas, jadwal sidang finalis, serta penetapan sertifikat.
                                            </p>
                                        </div>
                                        <button id="btn-peserta-mark-all-read" type="button" class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto">
                                            <!>
                                            <span>Tandai Semua Dibaca</span>
                                        </button>
                                    </div>

                                    
                                    <div class="flex items-center gap-2 border-b border-white/5 pb-2 overflow-x-auto">
                                        <button data-notif-filter="all" class="notif-tab-filter px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap">
                                            Semua
                                        </button>
                                        <button data-notif-filter="unread" class="notif-tab-filter px-4 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap">
                                            Belum Dibaca
                                        </button>
                                        <button data-notif-filter="revision" class="notif-tab-filter px-4 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 border border-transparent text-amber-400 transition-all whitespace-nowrap">
                                            Revisi
                                        </button>
                                        <button data-notif-filter="presentation" class="notif-tab-filter px-4 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 border border-transparent text-cyan-400 transition-all whitespace-nowrap">
                                            Jadwal Sidang
                                        </button>
                                        <button data-notif-filter="certificate" class="notif-tab-filter px-4 py-2 text-xs font-semibold rounded-lg hover:bg-white/5 border border-transparent text-amber-300 transition-all whitespace-nowrap">
                                            Sertifikat & Hasil
                                        </button>
                                    </div>

                                    
                                    <div id="peserta-notifications-full-list" class="space-y-3">
                                        
                                    </div>

                                    
                                    <div id="peserta-notifications-empty" class="glass-card rounded-3xl p-10 text-center space-y-4 max-w-md mx-auto hidden">
                                        <div class="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto border border-white/5">
                                            <!>
                                        </div>
                                        <h4 class="font-display font-bold text-base text-white">
                                            Tidak Ada Notifikasi
                                        </h4>
                                        <p class="text-xs text-slate-400 leading-relaxed">
                                            Belum ada pesan atau pembaruan baru dari sistem panitia KRENOVA 2027.
                                        </p>
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S)),w=l(c(C));e(w,{name:`bell-ring`,class:`w-3.5 h-3.5`}),f(3),s(C),f(5),s(S);var T=l(S,2),E=l(c(T));e(E,{name:`check-check`,class:`w-4 h-4 text-emerald-400`}),f(3),s(T),f(),s(x);var D=l(x,6),O=l(c(D)),k=l(c(O));e(k,{name:`bell-off`,class:`w-7 h-7`}),f(),s(O),f(5),s(D),f(),s(b),f(),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-peserta-notifications`})),o(i,_),g()}export{m as default};