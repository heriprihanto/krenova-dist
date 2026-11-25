import{r as e}from"./bootstrap-mar4t7g4.js";import{$ as t,D as n,E as r,G as i,N as a,U as o,dt as s,et as c,rt as l,t as u,tt as d,ut as f}from"./ui-5TmKv6gv.js";import"./legacy-CWMBdBDL.js";var p=i(`
<div id="panel-peserta-profile">
                                <form id="form-profile-editor" class="glass-card rounded-3xl p-6 space-y-5 max-w-xl">
                                    <h3 class="font-display font-bold text-lg text-white border-b border-white/5 pb-2">
                                        Edit Data Diri Pengusul
                                    </h3>

                                    <div>
                                        <label for="profile-name" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama
                                            Lengkap Inovator</label>
                                        <input type="text" id="profile-name" required="" class="w-full px-4 py-3 rounded-xl text-sm" placeholder="Nama Lengkap"/>
                                    </div>

                                    <div>
                                        <label for="profile-phone" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nomor
                                            HP / WhatsApp</label>
                                        <input type="tel" id="profile-phone" required="" class="w-full px-4 py-3 rounded-xl text-sm" placeholder="08123456789"/>
                                    </div>

                                    <div>
                                        <label for="profile-address" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Alamat
                                            Lengkap</label>
                                        <textarea id="profile-address" required="" rows="3" class="w-full px-4 py-3 rounded-xl text-sm" placeholder="Alamat Lengkap"></textarea>
                                    </div>

                                    <div>
                                        <label for="profile-kategori" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Kategori
                                            Pengusul</label>
                                        <select id="profile-kategori" required="" class="w-full px-4 py-3 rounded-xl text-sm cursor-pointer">
                                            <option>
                                                Pelajar
                                            </option>
                                            <option>
                                                Umum
                                            </option>
                                        </select>
                                    </div>

                                    <button type="submit" class="btn-glow px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center justify-center gap-2">
                                        <!>
                                        Simpan Perubahan Profil
                                    </button>
                                </form>
                            </div>`,1);function m(i){let m=()=>n(u,`$activePanel`,h),[h,g]=r();f();var _=p(),v=l(d(_));let y;var b=l(c(v)),x=l(c(b),9),S=l(c(x),3),C=l(c(S));C.value=C.__value=`Pelajar`;var w=l(C,2);w.value=w.__value=`Umum`,f(),s(S),f(),s(x);var T=l(x,2),E=l(c(T));e(E,{name:`save`,class:`w-4 h-4`}),f(),s(T),f(),s(b),f(),s(v),t(()=>y=a(v,1,`dashboard-panel`,null,y,{hidden:m()!==`panel-peserta-profile`})),o(i,_),g()}export{m as default};