import{r as e}from"./bootstrap-BQdxUVW_.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var p=i(`
<div id="panel-admin-api">
                                <div class="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 space-y-6">
                                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
                                        <div>
                                            <h3 class="font-display font-extrabold text-xl text-white flex items-center gap-2">
                                                <!>
                                                Integrasi API Data Proposal (Aplikasi Lokal)
                                            </h3>
                                            <p class="text-xs text-slate-400 mt-1">
                                                Gunakan API Key di bawah ini untuk menarik data proposal Krenova ke aplikasi dan database lokal Anda.
                                            </p>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <a href="api/" target="_blank" class="px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm">
                                                <!>
                                                Buka Dokumentasi & Live Console
                                            </a>
                                        </div>
                                    </div>

                                    
                                    <div class="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <div>
                                                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Master Integration API Key</span>
                                                <p class="text-[11px] text-slate-500">Sertakan kunci ini pada HTTP Header <code class="text-indigo-400 font-mono">X-API-KEY</code> di aplikasi lokal Anda.</p>
                                            </div>
                                            <span class="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                Status: Aktif
                                            </span>
                                        </div>

                                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-slate-900/90 border border-white/10 p-2 rounded-xl">
                                            <input type="text" readonly="" id="admin-api-key-input" class="flex-1 bg-transparent px-3 py-1.5 font-mono text-xs text-indigo-300 focus:outline-none select-all" value="Memuat API Key..."/>
                                            <div class="flex items-center gap-1.5 shrink-0">
                                                <button id="btn-copy-admin-api-key" class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/20 active:scale-95">
                                                    <!>
                                                    <span id="btn-copy-admin-text">Salin Key</span>
                                                </button>
                                                <button id="btn-regen-admin-api-key" class="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 font-bold text-xs transition-all flex items-center gap-1.5" title="Generate ulang API key baru">
                                                    <!>
                                                    <span>Regenerasi</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="grid md:grid-cols-2 gap-4">
                                        <div class="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                                            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                                                <!>
                                                Endpoint URL
                                            </span>
                                            <div class="p-3 bg-slate-950 rounded-xl border border-white/5 font-mono text-xs text-slate-300 select-all overflow-x-auto" id="admin-api-endpoint-url">
                                                http://localhost/api/proposals.php
                                            </div>
                                            <p class="text-[11px] text-slate-500">Method: <strong>GET</strong> | Query params: <code class="text-slate-400">?status=Approved&tahun=2027&format=full</code></p>
                                        </div>

                                        <div class="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                                            <span class="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                                                <!>
                                                Contoh Pemanggilan cURL
                                            </span>
                                            <pre class="p-3 bg-slate-950 rounded-xl border border-white/5 font-mono text-[11px] text-emerald-400 select-all overflow-x-auto leading-relaxed" id="admin-curl-example">curl -H "X-API-KEY: krnv_live_..." "http://localhost/api/proposals.php?status=Approved"</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b)),S=l(c(x)),C=l(c(S)),w=l(c(C));e(w,{name:`network`,class:`w-5 h-5 text-indigo-400`}),f(),s(C),f(3),s(S);var T=l(S,2),E=l(c(T)),D=l(c(E));e(D,{name:`external-link`,class:`w-3.5 h-3.5`}),f(),s(E),f(),s(T),f(),s(x);var O=l(x,2),k=l(c(O),3),A=l(c(k)),j=l(A,2),M=l(c(j)),N=l(c(M));e(N,{name:`copy`,class:`w-3.5 h-3.5`}),f(3),s(M);var P=l(M,2),F=l(c(P));e(F,{name:`refresh-cw`,class:`w-3.5 h-3.5 text-slate-400`}),f(3),s(P),f(),s(j),f(),s(k),f(),s(O);var I=l(O,2),L=l(c(I)),R=l(c(L)),z=l(c(R));e(z,{name:`link`,class:`w-4 h-4 text-indigo-400`}),f(),s(R),f(5),s(L);var B=l(L,2),V=l(c(B)),H=l(c(V));e(H,{name:`terminal`,class:`w-4 h-4 text-emerald-400`}),f(),s(V),f(3),s(B),f(),s(I),f(),s(b),f(),s(v),t(()=>y=a(v,1,`dashboard-panel space-y-6`,null,y,{hidden:m()!==`panel-admin-api`})),o(i,_),g()}export{m as default};