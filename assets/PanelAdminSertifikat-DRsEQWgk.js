import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-admin-sertifikat">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h3 class="font-display font-extrabold text-lg text-white flex items-center gap-2">
                                            <!>
                                            Penerbitan Sertifikat Digital Resmi
                                        </h3>
                                        <p class="text-xs text-slate-400 mt-0.5">
                                            Terbitkan sertifikat resmi ber-QR Code untuk pemenang, finalis, dan peserta KRENOVA 2027.
                                        </p>
                                    </div>
                                    <button id="btn-admin-add-certificate" type="button" class="btn-glow px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs shadow-lg shadow-amber-600/20 active:scale-98 transition-all flex items-center gap-1.5">
                                        <!>
                                        <span>Terbitkan Sertifikat Baru</span>
                                    </button>
                                </div>

                                <div class="glass-card rounded-2xl overflow-hidden border border-white/5">
                                    <div class="overflow-x-auto">
                                        <table class="w-full text-left text-sm text-slate-300">
                                            <thead class="bg-[#1b233d] text-xs uppercase tracking-wider font-semibold text-slate-400 border-b border-white/5">
                                                <tr>
                                                    <th class="px-6 py-4">No. Sertifikat</th>
                                                    <th class="px-6 py-4">Penerima & Karya</th>
                                                    <th class="px-6 py-4">Predikat / Kategori</th>
                                                    <th class="px-6 py-4">Tgl Penetapan</th>
                                                    <th class="px-6 py-4">Penandatangan</th>
                                                    <th class="px-6 py-4 text-right">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody id="table-admin-certificates-body" class="divide-y divide-white/5">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="table-admin-certificates-empty" class="p-12 text-center text-slate-500 hidden">
                                        Belum ada sertifikat yang diterbitkan. Klik "Terbitkan Sertifikat Baru" untuk menetapkan hasil.
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S));e(C,{name:`award`,class:`w-5 h-5 text-amber-400`}),f(),s(S),f(3),s(x);var w=l(x,2),T=l(c(w));e(T,{name:`file-badge`,class:`w-4 h-4`}),f(3),s(w),f(),s(b),f(3),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-sertifikat`})),o(i,_),g()}export{m as default};