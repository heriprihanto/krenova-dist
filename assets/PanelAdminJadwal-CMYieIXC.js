const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dashboard-admin-BYzwDqsT.js","./app-rariJPAM.js","./vendor-loader-0bGKZbCT.js","./ui-5TmKv6gv.js","./ui-DXL2SQNI.js","./firebase-n2sTgpQs.js","./auth-KXINZb3H.js","./wizard-MzFYKEAD.js"])))=>i.map(i=>d[i]);
import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,S as o,U as s,ct as c,dt as l,et as u,k as d,rt as f,st as p,t as m,tt as h,ut as g,x as _}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var v=i(`
<div id="panel-admin-jadwal">
                                <form id="form-schedule-settings" class="glass-card rounded-3xl p-6 space-y-5 max-w-xl">
                                    <h3 class="font-display font-bold text-lg text-white border-b border-white/5 pb-2">
                                        Pengaturan Jadwal Pelaksanaan
                                    </h3>

                                    <div class="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label for="schedule-entry-start" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mulai
                                                Entri Proposal</label>
                                            <input type="datetime-local" id="schedule-entry-start" required="" class="w-full px-4 py-3 rounded-xl text-sm"/>
                                        </div>
                                        <div>
                                            <label for="schedule-entry-end" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Batas
                                                Akhir Entri
                                                Proposal</label>
                                            <input type="datetime-local" id="schedule-entry-end" required="" class="w-full px-4 py-3 rounded-xl text-sm"/>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-2 gap-4 border-t border-white/5 pt-4">
                                        <div>
                                            <label for="schedule-eval-start" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mulai
                                                Penilaian Juri</label>
                                            <input type="datetime-local" id="schedule-eval-start" required="" class="w-full px-4 py-3 rounded-xl text-sm"/>
                                        </div>
                                        <div>
                                            <label for="schedule-eval-end" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Batas
                                                Akhir Penilaian
                                                Juri</label>
                                            <input type="datetime-local" id="schedule-eval-end" required="" class="w-full px-4 py-3 rounded-xl text-sm"/>
                                        </div>
                                    </div>

                                    <div class="border-t border-white/5 pt-4 space-y-3">
                                        <div class="flex items-center gap-2">
                                            <input type="checkbox" id="schedule-poll-active" class="w-4 h-4 rounded border-slate-700 bg-[#0a0f1d] text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 focus:ring-2"/>
                                            <label for="schedule-poll-active" class="text-xs font-semibold text-slate-400 uppercase tracking-wider cursor-pointer">Aktifkan
                                                Jadwal Polling</label>
                                        </div>

                                        <div class="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label for="schedule-poll-start" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mulai
                                                    Polling</label>
                                                <input type="datetime-local" id="schedule-poll-start" class="w-full px-4 py-3 rounded-xl text-sm"/>
                                            </div>
                                            <div>
                                                <label for="schedule-poll-end" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Batas
                                                    Akhir Polling</label>
                                                <input type="datetime-local" id="schedule-poll-end" class="w-full px-4 py-3 rounded-xl text-sm"/>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn-glow px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center justify-center gap-2">
                                        <!>
                                        Simpan Pengaturan Jadwal
                                    </button>
                                </form>
                            </div>`,1);function y(i,y){c(y,!1);let b=()=>n(m,`$activePanel`,x),[x,S]=r();o(()=>{_(()=>import(`./dashboard-admin-BYzwDqsT.js`).then(e=>{e.loadAdminJadwal()}),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).catch(e=>console.error(`Gagal inisialisasi panel jadwal:`,e))}),d(),g();var C=v(),w=f(h(C));let T;var E=f(u(w)),D=f(u(E),9),O=f(u(D));e(O,{name:`calendar`,class:`w-4 h-4`}),g(),l(D),g(),l(E),g(),l(w),t(()=>T=a(w,1,`dashboard-panel`,null,T,{hidden:b()!==`panel-admin-jadwal`})),s(i,C),p(),S()}export{y as default};