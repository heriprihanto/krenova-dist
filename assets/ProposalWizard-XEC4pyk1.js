const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wizard-BLktFDbX.js","./vendor-loader-0bGKZbCT.js","./ui-sIajGE2U.js","./ui-Dj9QK-c8.js","./firebase-n2sTgpQs.js","./countdown-zVbHYNkW.js"])))=>i.map(i=>d[i]);
import{r as e}from"./bootstrap-BQdxUVW_.js";import{$ as ee,D as te,E as ne,G as re,N as t,S as ie,U as ae,b as oe,ct as se,dt as n,et as r,k as ce,r as le,rt as i,st as ue,tt as de,ut as a,x as fe}from"./ui-sIajGE2U.js";import"./legacy-H09MZMJz.js";var pe=re(`
<section id="section-form">
            <div class="max-w-4xl mx-auto px-4">
                
                <div class="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                    <div>
                        <h2 id="form-wizard-title" class="font-display font-extrabold text-2xl text-white">
                            Entry Proposal Inovasi
                        </h2>
                        <p class="text-slate-400 text-sm mt-1">
                            Lengkapi usulan karya kreatif Krenova Anda
                            langkah demi langkah.
                        </p>
                    </div>
                    <button id="btn-cancel-wizard" class="text-xs text-slate-400 hover:text-red-400 transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/20 bg-white/5">
                        Batalkan & Kembali
                    </button>
                </div>

                
                <div class="relative flex justify-between items-center mb-10 max-w-3xl mx-auto">
                    
                    <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-slate-800 rounded-full z-0">
                        <div id="wizard-progress-bar" class="h-full bg-indigo-500 rounded-full transition-all duration-300" style="width: 0%">
                        </div>
                    </div>

                    
                    <div class="relative z-10 flex flex-col items-center gap-2">
                        <div data-step="1" class="step-dot active w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-display font-bold text-sm cursor-pointer">
                            1
                        </div>
                        <span class="text-[10px] sm:text-xs font-semibold text-slate-400">Identitas</span>
                    </div>

                    <div class="relative z-10 flex flex-col items-center gap-2">
                        <div data-step="2" class="step-dot w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-display font-bold text-sm cursor-pointer">
                            2
                        </div>
                        <span class="text-[10px] sm:text-xs font-semibold text-slate-400">Ide Inovasi</span>
                    </div>

                    <div class="relative z-10 flex flex-col items-center gap-2">
                        <div data-step="3" class="step-dot w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-display font-bold text-sm cursor-pointer">
                            3
                        </div>
                        <span class="text-[10px] sm:text-xs font-semibold text-slate-400">Isi Proposal</span>
                    </div>

                    <div class="relative z-10 flex flex-col items-center gap-2">
                        <div data-step="4" class="step-dot w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-display font-bold text-sm cursor-pointer">
                            4
                        </div>
                        <span class="text-[10px] sm:text-xs font-semibold text-slate-400">Kuisioner</span>
                    </div>

                    <div class="relative z-10 flex flex-col items-center gap-2">
                        <div data-step="5" class="step-dot w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-display font-bold text-sm cursor-pointer">
                            5
                        </div>
                        <span class="text-[10px] sm:text-xs font-semibold text-slate-400">Finalisasi</span>
                    </div>
                </div>

                
                <div id="wizard-revision-banner" class="hidden mb-6 bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-transparent border-2 border-amber-500/40 rounded-2xl p-5 shadow-xl relative overflow-hidden animate-fade-in">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                            <!>
                        </div>
                        <div class="space-y-2 flex-1">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <h4 class="font-display font-bold text-base text-amber-300">
                                    Catatan Revisi dari Reviewer / Admin
                                </h4>
                                <div id="wizard-revision-deadline-badge" class="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-200 border border-amber-500/40">
                                    Batas Perbaikan: <span id="wizard-revision-deadline-text">-</span>
                                </div>
                            </div>
                            <p class="text-xs text-slate-300 leading-relaxed">
                                Mohon cermati catatan perbaikan di bawah ini. Anda dapat langsung mengedit formulir dan berkas tanpa perlu mendaftar akun atau entri ulang.
                            </p>
                            <div id="wizard-revision-notes-container" class="mt-3 bg-black/40 rounded-xl p-3.5 border border-amber-500/20 space-y-2 text-xs">
                                
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="bg-slate-900/80 backdrop-blur border border-white/10 rounded-2xl p-4 mb-6 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div class="flex items-center gap-3 flex-1 min-w-0">
                        <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                            <!>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between text-xs mb-1">
                                <span class="text-slate-300 font-semibold flex items-center gap-1.5">
                                    Kelengkapan Berkas
                                    <span id="wizard-progress-pct-badge" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300">0%</span>
                                </span>
                                <span id="wizard-completion-stats" class="text-slate-400 text-[11px] font-mono">0 / 0 Lengkap</span>
                            </div>
                            <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div id="wizard-completion-bar" class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-300" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="flex items-center gap-3 shrink-0 self-end md:self-center">
                        
                        <div id="wizard-autosave-indicator" class="flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 font-mono">
                            <span id="wizard-autosave-dot" class="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span id="wizard-autosave-text">Autosave Siap</span>
                        </div>

                        
                        <button type="button" id="btn-toggle-checklist" class="px-3.5 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95">
                            <!>
                            <span>Checklist</span>
                            <span id="checklist-missing-badge" class="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-slate-950 font-black hidden">0</span>
                        </button>
                    </div>
                </div>

                
                <dialog id="modal-wizard-checklist" class="bg-[#121829] border border-white/10 rounded-3xl p-0 w-full max-w-lg shadow-2xl overflow-hidden backdrop:bg-[#0a0f1d]/85 backdrop:backdrop-blur-sm">
                    <div class="px-6 py-4 bg-[#1b233d] border-b border-white/5 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <!>
                            </div>
                            <div>
                                <h3 class="font-display font-bold text-base text-white">Checklist Kelengkapan Proposal</h3>
                                <p class="text-[11px] text-slate-400">Klik item untuk langsung menuju ke kolom terkait</p>
                            </div>
                        </div>
                        <button aria-label="Tutup" id="btn-close-checklist-modal" type="button" class="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors">
                            <!>
                        </button>
                    </div>
                    <div class="p-6 max-h-[70vh] overflow-y-auto space-y-4">
                        <div class="bg-white/5 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                            <div>
                                <span class="text-xs text-slate-400">Status Kelengkapan:</span>
                                <p id="checklist-summary-text" class="text-sm font-bold text-white mt-0.5">Memeriksa kelengkapan...</p>
                            </div>
                            <div class="text-right">
                                <span id="checklist-summary-pct" class="font-display font-black text-2xl text-indigo-400">0%</span>
                            </div>
                        </div>
                        <div id="checklist-sections-container" class="space-y-3">
                            
                        </div>
                    </div>
                </dialog>

                
                <form id="proposal-wizard-form" class="space-y-8">
                    
                    <input type="hidden" id="field-proposal-id" value=""/>

                    
                    <div id="step-content-1">
                        <h3 class="font-display font-bold text-lg text-indigo-400 border-b border-white/5 pb-2">
                            Langkah 1: Identitas Inovator & Tim
                        </h3>

                        <div class="grid sm:grid-cols-3 gap-6">
                            <div>
                                <label for="field-tahun" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tahun
                                    Lomba</label>
                                <input type="number" id="field-tahun" value="2027" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="2027"/>
                            </div>

                            <div>
                                <label for="field-email" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email
                                    Terdaftar (Read-Only)</label>
                                <input type="email" id="field-email" readonly="" class="w-full px-4 py-3 rounded-xl text-slate-500 bg-slate-900/40 text-sm cursor-not-allowed border-dashed" placeholder="email@domain.com"/>
                            </div>

                            <div>
                                <label for="field-nama-email" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama
                                    Akun Email</label>
                                <input type="text" id="field-nama-email" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="Nama Lengkap"/>
                            </div>
                        </div>

                        <div>
                            <label for="field-fullname" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nama
                                Lengkap Inovator</label>
                            <input type="text" id="field-fullname" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="Nama Lengkap"/>
                        </div>

                        <div class="grid sm:grid-cols-3 gap-6">
                            <div>
                                <label for="field-phone" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nomor
                                    HP / WhatsApp</label>
                                <input type="tel" id="field-phone" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="08123456789"/>
                            </div>

                            <div>
                                <label for="field-kategori-pengusul" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Kategori
                                    Peserta</label>
                                <select id="field-kategori-pengusul" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm cursor-pointer">
                                    <option selected="">
                                        Pelajar
                                    </option>
                                    <option>Umum</option>
                                </select>
                            </div>

                            <div>
                                <label for="field-status-tim" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Status
                                    Keanggotaan</label>
                                <select id="field-status-tim" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm cursor-pointer">
                                    <option selected="">
                                        Perorangan
                                    </option>
                                    <option>
                                        Kelompok
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="field-address" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Alamat
                                Lengkap</label>
                            <input type="text" id="field-address" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="Alamat Lengkap"/>
                        </div>

                        
                        <div id="container-anggota-tim" class="hidden space-y-4 p-4 rounded-2xl bg-white/5 border border-white/5 animate-fade-in-up">
                            <h4 class="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                                Nama Anggota Kelompok
                            </h4>
                            <div class="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label for="field-anggota1" class="block text-[11px] text-slate-400 mb-1">Anggota
                                        1</label>
                                    <input type="text" id="field-anggota1" class="w-full px-3 py-2 rounded-lg text-slate-200 text-xs" placeholder="Nama Anggota 1"/>
                                </div>
                                <div>
                                    <label for="field-anggota2" class="block text-[11px] text-slate-400 mb-1">Anggota
                                        2</label>
                                    <input type="text" id="field-anggota2" class="w-full px-3 py-2 rounded-lg text-slate-200 text-xs" placeholder="Nama Anggota 2"/>
                                </div>
                                <div>
                                    <label for="field-anggota3" class="block text-[11px] text-slate-400 mb-1">Anggota
                                        3</label>
                                    <input type="text" id="field-anggota3" class="w-full px-3 py-2 rounded-lg text-slate-200 text-xs" placeholder="Nama Anggota 3"/>
                                </div>
                                <div>
                                    <label for="field-anggota4" class="block text-[11px] text-slate-400 mb-1">Anggota
                                        4</label>
                                    <input type="text" id="field-anggota4" class="w-full px-3 py-2 rounded-lg text-slate-200 text-xs" placeholder="Nama Anggota 4"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div id="step-content-2">
                        <h3 class="font-display font-bold text-lg text-indigo-400 border-b border-white/5 pb-2">
                            Langkah 2: Deskripsi Ide Inovasi
                        </h3>

                        <div>
                            <label for="field-title" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Judul
                                Proposal Lomba</label>
                            <input type="text" id="field-title" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm placeholder-slate-600 transition-colors" placeholder="Contoh: Alat Filtrasi Air Berbasis Sensor Cerdas"/>
                            <div id="field-title-warning" class="hidden mt-2.5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                                <!>
                                <span id="field-title-warning-text">Peringatan: Judul proposal ini sudah terdaftar. Judul inovasi tidak boleh sama dengan proposal lainnya!</span>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-3 gap-6">
                            <div>
                                <label for="field-bidang" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Bidang
                                    Lomba</label>
                                <select id="field-bidang" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm cursor-pointer">
                                    <option disabled="" selected="">
                                        Pilih Bidang Lomba
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label for="field-jenis-inovasi" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Jenis
                                    Inovasi</label>
                                <select id="field-jenis-inovasi" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm cursor-pointer">
                                    <option>Digital</option>
                                    <option>
                                        Non Digital
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label for="field-tahap-inovasi" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tahap
                                    Perkembangan</label>
                                <select id="field-tahap-inovasi" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm cursor-pointer">
                                    <option>
                                        Uji Coba
                                    </option>
                                    <option>
                                        Penerapan / Implementasi
                                    </option>
                                    <option>
                                        Sudah Dipasarkan
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label for="field-description" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Deskripsi
                                Singkat Inovasi</label>
                            <input type="text" id="field-description" required="" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="Penjelasan singkat inovasi dalam 1 kalimat"/>
                        </div>
                    </div>

                    
                    <div id="step-content-3">
                        <h3 class="font-display font-bold text-lg text-indigo-400 border-b border-white/5 pb-2">
                            Langkah 3: Substansi Proposal
                        </h3>

                        <div class="space-y-6">
                            
                            <div class="animate-fade-in-up">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">A.
                                    Abstrak / Ringkasan</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Ringkasan menyeluruh mengenai latar belakang permasalahan, ide solusi inovasi, metode penerapan, hasil utama yang dicapai, dan potensi manfaatnya (disarankan 200–300 kata).
                                </p>
                                <div id="editor-abstrak" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 50ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">B.
                                    Latar Belakang</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Uraikan kondisi riil atau permasalahan spesifik di masyarakat/lingkungan sekitar yang mendorong terciptanya inovasi, serta kelemahan dari solusi yang telah ada sebelumnya.
                                </p>
                                <div id="editor-background" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 100ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">C.
                                    Maksud dan Tujuan</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Jelaskan maksud pengembangan karya inovasi (apa yang dilakukan) dan sasaran/target terukur yang hendak dicapai melalui inovasi ini.
                                </p>
                                <div id="editor-objectives" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 150ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">D.
                                    Manfaat Inovasi</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Paparkan dampak positif dan manfaat nyata bagi pengguna, masyarakat, efisiensi kerja, peningkatan ekonomi, maupun kelestarian lingkungan.
                                </p>
                                <div id="editor-benefits" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 200ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">E.
                                    Keunggulan Inovasi</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Tegaskan unsur kebaruan (novelty), keunikan, serta kelebihan komparatif inovasi dibandingkan produk, alat, atau metode sejenis yang sudah ada.
                                </p>
                                <div id="editor-keunggulan" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 250ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">F.
                                    Aspek Inovasi</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Uraikan aspek teknis, teknologi, metodologi rekayasa, rancang bangun, spesifikasi material, atau alur kerja proses produksi yang digunakan.
                                </p>
                                <div id="editor-aspek" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 300ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">G.
                                    Penerapan Inovasi</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Jelaskan cara pengoperasian/penggunaan, status tahapan implementasi (uji coba laboratorium / penerapan di masyarakat), cakupan wilayah, dan potensi replikasi.
                                </p>
                                <div id="editor-penerapan" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>

                            
                            <div class="animate-fade-in-up" style="animation-delay: 350ms">
                                <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">H.
                                    Anggaran</span>
                                <p class="text-xs text-slate-400 mb-2 leading-relaxed">
                                    Rincian rencana kebutuhan biaya (RAB) pembuatan prototipe, pengadaan alat/bahan, pengujian, hingga implementasi operasional inovasi.
                                </p>
                                <div id="editor-budget" class="w-full min-h-[220px] text-slate-200"></div>
                            </div>
                        </div>
                    </div>

                    
                    <div id="step-content-4">
                        <h3 class="font-display font-bold text-lg text-indigo-400 border-b border-white/5 pb-2">
                            Langkah 4: Kuisioner Inovasi (Jawaban Singkat)
                        </h3>

                        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                            
                            <div class="space-y-4">
                                <h4 class="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                                    A. Orisinalitas dan Kepioniran
                                </h4>
                                <div class="space-y-3">
                                    <div>
                                        <label for="field-q-orisinalitas1" class="block text-xs font-semibold text-slate-400 mb-1.5">1. Apakah temuan
                                            benar-benar
                                            asli milik saudara ?</label>
                                        <textarea id="field-q-orisinalitas1" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan orisinalitas temuan..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-orisinalitas2" class="block text-xs font-semibold text-slate-400 mb-1.5">2. Apakah
                                            ide/inovasi hasil
                                            pengembangan sebelumnya? Jika
                                            iya, pengembangan ada di bagian
                                            apa?</label>
                                        <textarea id="field-q-orisinalitas2" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan riwayat pengembangan..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-orisinalitas3" class="block text-xs font-semibold text-slate-400 mb-1.5">3. Apakah ada
                                            inovasi sejenis?
                                            Jika ada, apa perbedaan inovasi
                                            yang anda miliki?</label>
                                        <textarea id="field-q-orisinalitas3" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan perbedaan dengan inovasi sejenis..."></textarea>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="space-y-4 border-t border-white/5 pt-4">
                                <h4 class="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                                    B. Penerapan di Masyarakat
                                </h4>
                                <div class="space-y-3">
                                    <div>
                                        <label for="field-q-penerapan1" class="block text-xs font-semibold text-slate-400 mb-1.5">1. Apakah sudah
                                            dilakukan
                                            ujicoba pada lingkungan yang
                                            relevan? Di mana dan bagaimana
                                            hasil penerapannya?</label>
                                        <textarea id="field-q-penerapan1" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan hasil uji coba..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-penerapan2" class="block text-xs font-semibold text-slate-400 mb-1.5">2. Apakah inovasi
                                            yang
                                            dihasilkan sudah siap terapkan?
                                            Siapakah yang menerapkan?</label>
                                        <textarea id="field-q-penerapan2" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan kesiapan penerapan..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-penerapan3" class="block text-xs font-semibold text-slate-400 mb-1.5">3. Skala jangkauan
                                            penerapan
                                            pada skala apa
                                            (Nasional/Provinsi/Kab dan
                                            Kota/Kecamatan/Desa)?</label>
                                        <select id="field-q-penerapan3" required="" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs cursor-pointer">
                                            <option>
                                                Desa / Kelurahan
                                            </option>
                                            <option>
                                                Kecamatan
                                            </option>
                                            <option selected="">
                                                Kabupaten / Kota
                                            </option>
                                            <option>
                                                Provinsi
                                            </option>
                                            <option>
                                                Nasional
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="space-y-4 border-t border-white/5 pt-4">
                                <h4 class="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                                    C. Manfaat Inovasi
                                </h4>
                                <div class="space-y-3">
                                    <div>
                                        <label for="field-q-manfaat1" class="block text-xs font-semibold text-slate-400 mb-1.5">1. Apakah inovasi
                                            yang
                                            dihasilkan dapat menyelesaikan
                                            permasalahan aktual saat ini?
                                            Jelaskan?</label>
                                        <textarea id="field-q-manfaat1" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan solusi atas masalah aktual..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-manfaat2" class="block text-xs font-semibold text-slate-400 mb-1.5">2. Apakah inovasi
                                            dapat
                                            meningkatkan proses
                                            produksi/efisiensi?
                                            Jelaskan</label>
                                        <textarea id="field-q-manfaat2" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan peningkatan produksi/efisiensi..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-manfaat3" class="block text-xs font-semibold text-slate-400 mb-1.5">3. Apakah memberi
                                            manfaat ke
                                            lingkungan? Dalam bentuk
                                            apa?</label>
                                        <textarea id="field-q-manfaat3" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan manfaat bagi lingkungan..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-manfaat4" class="block text-xs font-semibold text-slate-400 mb-1.5">4. Apakah menyerap
                                            tenaga kerja
                                            pada proses produksi?
                                            Berapa?</label>
                                        <textarea id="field-q-manfaat4" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan penyerapan tenaga kerja..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-manfaat5" class="block text-xs font-semibold text-slate-400 mb-1.5">5. Apakah dapat
                                            meningkatkan
                                            pendapatan masyarakat?
                                            Berapa?</label>
                                        <textarea id="field-q-manfaat5" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan peningkatan pendapatan masyarakat..."></textarea>
                                    </div>
                                </div>
                            </div>

                            
                            <div class="space-y-4 border-t border-white/5 pt-4">
                                <h4 class="text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                                    D. Keberlangsungan / Komersialisasi
                                </h4>
                                <div class="space-y-3">
                                    <div>
                                        <label for="field-q-keberlangsungan1" class="block text-xs font-semibold text-slate-400 mb-1.5">1. Berapa persen
                                            penyerapan
                                            penggunaan sumberdaya lokal (SDM
                                            dan bahan baku)?</label>
                                        <textarea id="field-q-keberlangsungan1" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan persentase penyerapan sumber daya lokal..."></textarea>
                                    </div>
                                    <div>
                                        <label for="field-q-keberlangsungan2" class="block text-xs font-semibold text-slate-400 mb-1.5">2. Apakah
                                            ketersediaan bahan
                                            baku kontinyu secara kualitas
                                            dan kuantitas?</label>
                                        <textarea id="field-q-keberlangsungan2" required="" rows="2" class="w-full px-3 py-2 rounded-xl text-slate-200 text-xs" placeholder="Jelaskan kontinuitas bahan baku..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div id="step-content-5">
                        <h3 class="font-display font-bold text-lg text-indigo-400 border-b border-white/5 pb-2">
                            Langkah 5: Berkas Pendukung & Lokasi Inovasi
                        </h3>

                        <div class="grid md:grid-cols-2 gap-6">
                            
                            <div class="space-y-4">
                                <div>
                                    <label for="field-latitude" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pin
                                        Lokasi Inovasi (Peta Kota
                                        Tegal)</label>
                                    <div id="wizard-map" class="h-56 w-full rounded-2xl border border-white/10 z-0">
                                    </div>
                                    <div class="grid grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <label for="field-latitude" class="block text-[10px] font-semibold text-slate-500 uppercase">Latitude</label>
                                            <input type="text" id="field-latitude" required="" readonly="" class="w-full px-3 py-2 rounded-xl text-xs bg-slate-900/40 border-dashed" placeholder="-7.47"/>
                                        </div>
                                        <div>
                                            <label for="field-longitude" class="block text-[10px] font-semibold text-slate-500 uppercase">Longitude</label>
                                            <input type="text" id="field-longitude" required="" readonly="" class="w-full px-3 py-2 rounded-xl text-xs bg-slate-900/40 border-dashed" placeholder="110.21"/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="field-video-url" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Link
                                        Video Hasil Inovasi (YouTube /
                                        Drive / DLL)</label>
                                    <input type="url" id="field-video-url" class="w-full px-4 py-3 rounded-xl text-slate-200 text-sm" placeholder="https://www.youtube.com/watch?v=..."/>
                                </div>
                            </div>

                            
                            <div class="space-y-4 overflow-y-auto pr-1">
                                
                                <div class="space-y-2">
                                    <label for="upload-photo-input" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">1.
                                        Foto Peserta / Tim (JPG/PNG, Max
                                        2MB, Wajib)</label>
                                    <div id="dropzone-photo" class="file-dropzone rounded-2xl p-4 text-center cursor-pointer flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[100px]">
                                        <input type="file" id="upload-photo-input" accept="image/png, image/jpeg" class="absolute inset-0 opacity-0 cursor-pointer"/>
                                        <div id="photo-dropzone-info" class="space-y-1">
                                            <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mx-auto">
                                                <!>
                                            </div>
                                            <p class="text-[10px] text-slate-400 font-semibold">
                                                Tarik & lepaskan foto di
                                                sini
                                            </p>
                                        </div>
                                        <div id="photo-preview-container" class="hidden flex items-center gap-3 text-left w-full">
                                            <img id="photo-preview-img" src="" alt="Preview Tim" loading="lazy" decoding="async" class="w-10 h-10 rounded-lg object-cover"/>
                                            <div class="flex-grow min-w-0">
                                                <p id="photo-preview-filename" class="text-[10px] font-semibold text-white truncate"></p>
                                                <p id="photo-preview-filesize" class="text-[9px] text-slate-500"></p>
                                            </div>
                                            <button aria-label="Aksi" type="button" id="btn-remove-photo" class="p-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400">
                                                <!>
                                            </button>
                                        </div>
                                    </div>
                                    <input type="hidden" id="field-photo-url" value=""/>
                                </div>

                                
                                <div class="space-y-2">
                                    <label for="upload-identity-input" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">2.
                                        Identitas Peserta (KTP / Kartu
                                        Pelajar PDF, Max 5MB,
                                        Wajib)</label>
                                    <div id="dropzone-identity" class="file-dropzone rounded-2xl p-4 text-center cursor-pointer flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[100px]">
                                        <input type="file" id="upload-identity-input" accept="application/pdf" class="absolute inset-0 opacity-0 cursor-pointer"/>
                                        <div id="identity-dropzone-info" class="space-y-1">
                                            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto">
                                                <!>
                                            </div>
                                            <p class="text-[10px] text-slate-400 font-semibold">
                                                Tarik & lepaskan berkas PDF
                                                identitas
                                            </p>
                                        </div>
                                        <div id="identity-preview-container" class="hidden flex items-center gap-3 text-left w-full">
                                            <div class="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                                <!>
                                            </div>
                                            <div class="flex-grow min-w-0">
                                                <p id="identity-preview-filename" class="text-[10px] font-semibold text-white truncate"></p>
                                            </div>
                                            <button aria-label="Aksi" type="button" id="btn-remove-identity" class="p-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400">
                                                <!>
                                            </button>
                                        </div>
                                    </div>
                                    <input type="hidden" id="field-identity-url" value=""/>
                                </div>

                                
                                <div class="space-y-2">
                                    <label for="upload-originality-input" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">3.
                                        Surat Pernyataan Keaslian
                                        Inovasi (PDF, Max 5MB,
                                        Wajib)</label>
                                    <div id="dropzone-originality" class="file-dropzone rounded-2xl p-4 text-center cursor-pointer flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[100px]">
                                        <input type="file" id="upload-originality-input" accept="application/pdf" class="absolute inset-0 opacity-0 cursor-pointer"/>
                                        <div id="originality-dropzone-info" class="space-y-1">
                                            <div class="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mx-auto">
                                                <!>
                                            </div>
                                            <p class="text-[10px] text-slate-400 font-semibold">
                                                Tarik & lepaskan surat
                                                pernyataan PDF
                                            </p>
                                        </div>
                                        <div id="originality-preview-container" class="hidden flex items-center gap-3 text-left w-full">
                                            <div class="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                <!>
                                            </div>
                                            <div class="flex-grow min-w-0">
                                                <p id="originality-preview-filename" class="text-[10px] font-semibold text-white truncate"></p>
                                            </div>
                                            <button aria-label="Aksi" type="button" id="btn-remove-originality" class="p-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400">
                                                <!>
                                            </button>
                                        </div>
                                    </div>
                                    <input type="hidden" id="field-originality-url" value=""/>
                                </div>

                                
                                <div class="space-y-2">
                                    <label for="upload-approval-input" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">4.
                                        Lembar Pengesahan Resmi (PDF,
                                        Max 5MB, Wajib)</label>
                                    <div id="dropzone-approval" class="file-dropzone rounded-2xl p-4 text-center cursor-pointer flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[100px]">
                                        <input type="file" id="upload-approval-input" accept="application/pdf" class="absolute inset-0 opacity-0 cursor-pointer"/>
                                        <div id="approval-dropzone-info" class="space-y-1">
                                            <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mx-auto">
                                                <!>
                                            </div>
                                            <p class="text-[10px] text-slate-400 font-semibold">
                                                Tarik & lepaskan lembar
                                                pengesahan PDF
                                            </p>
                                        </div>
                                        <div id="approval-preview-container" class="hidden flex items-center gap-3 text-left w-full">
                                            <div class="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                <!>
                                            </div>
                                            <div class="flex-grow min-w-0">
                                                <p id="approval-preview-filename" class="text-[10px] font-semibold text-white truncate"></p>
                                            </div>
                                            <button aria-label="Aksi" type="button" id="btn-remove-approval" class="p-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-400">
                                                <!>
                                            </button>
                                        </div>
                                    </div>
                                    <input type="hidden" id="field-approval-url" value=""/>
                                </div>

                                
                                <div class="space-y-2">
                                    <label for="upload-products-input" class="block text-xs font-semibold text-slate-400 uppercase tracking-wider">5.
                                        Foto Hasil Inovasi / Produk
                                        (Maks 5 Foto, JPG/PNG, @2MB,
                                        Wajib)</label>
                                    <div id="dropzone-products" class="file-dropzone rounded-2xl p-4 text-center cursor-pointer flex flex-col items-center justify-center gap-2 relative overflow-hidden min-h-[100px]">
                                        <input type="file" id="upload-products-input" accept="image/png, image/jpeg" multiple="" class="absolute inset-0 opacity-0 cursor-pointer"/>
                                        <div id="products-dropzone-info" class="space-y-1">
                                            <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mx-auto">
                                                <!>
                                            </div>
                                            <p class="text-[10px] text-slate-400 font-semibold">
                                                Tarik & lepaskan foto produk
                                                (maks 5)
                                            </p>
                                        </div>

                                        
                                        <div id="products-preview-list" class="hidden grid grid-cols-5 gap-2 w-full mt-2">
                                            
                                        </div>
                                    </div>
                                    <input type="hidden" id="field-products-urls" value="[]"/>
                                </div>
                            </div>
                        </div>

                        
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                            <h4 class="font-display font-bold text-sm text-indigo-400 flex items-center gap-2">
                                <!>
                                Pernyataan Kelayakan Usulan
                            </h4>
                            <p class="text-xs text-slate-400 leading-relaxed">
                                Dengan menekan tombol
                                <strong>Kirim Proposal Lomba</strong> di
                                bawah, Anda menyatakan bahwa seluruh data
                                proposal inovasi yang diisikan beserta
                                berkas dukung (Foto, Identitas, Surat
                                Pernyataan & Pengesahan) adalah asli, dibuat
                                oleh pengusul/tim yang bersangkutan, dan
                                siap mengikuti seluruh rangkaian seleksi
                                KRENOVA 2027.
                            </p>

                            <div class="flex flex-wrap gap-4 pt-2">
                                <div class="text-xs text-slate-500">
                                    <span class="text-slate-300 font-semibold" id="review-summary-title">Judul
                                        Lomba:</span>
                                    (Belum Terisi)
                                </div>
                                <div class="text-xs text-slate-500">
                                    <span class="text-slate-300 font-semibold" id="review-summary-category">Bidang
                                        Lomba:</span>
                                    (Belum Terpilih)
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
                        
                        <div class="flex gap-3 w-full sm:w-auto">
                            <button type="button" id="btn-wizard-prev" class="flex-1 sm:flex-none px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-sm font-semibold active:scale-98 transition-all disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center gap-2">
                                <!>
                                Kembali
                            </button>

                            <button type="button" id="btn-save-draft" class="flex-1 sm:flex-none px-6 py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 rounded-xl text-sm font-semibold active:scale-98 transition-all flex items-center justify-center gap-2">
                                <!>
                                Simpan Draf
                            </button>
                        </div>

                        
                        <button type="button" id="btn-wizard-next" class="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center justify-center gap-2">
                            <span>Lanjut</span>
                            <!>
                        </button>
                    </div>
                </form>
            </div>
        </section>`,1);function me(re,me){se(me,!1);let he=()=>te(le,`$activeSection`,ge),o=()=>te(oe,`$wizardStep`,ge),[ge,_e]=ne();ie(async()=>{try{(await fe(()=>import(`./wizard-BLktFDbX.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)).initWizardEvents()}catch(e){console.error(`Wizard onMount error:`,e)}}),ce(),a();var ve=pe(),s=i(de(ve));let ye;var be=i(r(s)),c=i(r(be),5),xe=i(r(c)),Se=i(r(xe)),Ce=i(r(Se));e(Ce,{name:`alert-triangle`,class:`w-5 h-5 animate-bounce`}),a(),n(Se),a(3),n(xe),a(),n(c);var l=i(c,2),u=i(r(l)),we=i(r(u)),Te=i(r(we));e(Te,{name:`check-circle-2`,class:`w-5 h-5`}),a(),n(we),a(3),n(u);var Ee=i(u,2),De=i(r(Ee),3),Oe=i(r(De));e(Oe,{name:`list-checks`,class:`w-4 h-4`}),a(5),n(De),a(),n(Ee),a(),n(l);var d=i(l,2),ke=i(r(d)),f=i(r(ke)),Ae=i(r(f)),je=i(r(Ae));e(je,{name:`list-checks`,class:`w-4 h-4`}),a(),n(Ae),a(3),n(f);var Me=i(f,2),Ne=i(r(Me));e(Ne,{name:`x`,class:`w-5 h-5`}),a(),n(Me),a(),n(ke),a(3),n(d);var Pe=i(d,2),Fe=i(r(Pe)),p=i(Fe,2);let Ie;var Le=i(r(p),7),m=i(r(Le),3),h=i(r(m),3),g=i(r(h));g.value=g.__value=`Pelajar`;var _=i(g,2);_.value=_.__value=`Umum`,a(),n(h),a(),n(m);var v=i(m,2),y=i(r(v),3),b=i(r(y));b.value=b.__value=`Perorangan`;var Re=i(b,2);Re.value=Re.__value=`Kelompok`,a(),n(y),a(),n(v),a(),n(Le),a(5),n(p);var x=i(p,2);let ze;var S=i(r(x),3),Be=i(r(S),5),Ve=i(r(Be));e(Ve,{name:`alert-triangle`,class:`w-4 h-4 shrink-0 text-rose-400`}),a(3),n(Be),a(),n(S);var He=i(S,2),C=i(r(He)),Ue=i(r(C),3),We=i(r(Ue));We.value=We.__value=``,a(),n(Ue),a(),n(C);var w=i(C,2),Ge=i(r(w),3),T=i(r(Ge));T.value=T.__value=`Digital`;var Ke=i(T,2);Ke.value=Ke.__value=`Non Digital`,a(),n(Ge),a(),n(w);var qe=i(w,2),Je=i(r(qe),3),E=i(r(Je));E.value=E.__value=`Uji Coba`;var D=i(E,2);D.value=D.__value=`Penerapan / Implementasi`;var Ye=i(D,2);Ye.value=Ye.__value=`Sudah Dipasarkan`,a(),n(Je),a(),n(qe),a(),n(He),a(3),n(x);var Xe=i(x,2);let Ze;var O=i(Xe,2);let Qe;var $e=i(r(O),3),et=i(r($e),3),tt=i(r(et),3),nt=i(r(tt),5),rt=i(r(nt),3),k=i(r(rt));k.value=k.__value=`Desa`;var A=i(k,2);A.value=A.__value=`Kecamatan`;var j=i(A,2);j.value=j.__value=`Kab dan Kota`;var M=i(j,2);M.value=M.__value=`Provinsi`;var it=i(M,2);it.value=it.__value=`Nasional`,a(),n(rt),a(),n(nt),a(),n(tt),a(),n(et),a(5),n($e),a(),n(O);var N=i(O,2);let at;var P=i(r(N),3),ot=i(r(P),3),F=i(r(ot)),I=i(r(F),3),L=i(r(I),3),st=i(r(L)),ct=i(r(st));e(ct,{name:`image`,class:`w-4 h-4`}),a(),n(st),a(3),n(L);var lt=i(L,2),ut=i(r(lt),5),dt=i(r(ut));e(dt,{name:`trash`,class:`w-3.5 h-3.5`}),a(),n(ut),a(),n(lt),a(),n(I),i(I,2),a(),n(F);var R=i(F,2),z=i(r(R),3),B=i(r(z),3),ft=i(r(B)),pt=i(r(ft));e(pt,{name:`file-text`,class:`w-4 h-4`}),a(),n(ft),a(3),n(B);var mt=i(B,2),V=i(r(mt)),ht=i(r(V));e(ht,{name:`file`,class:`w-4 h-4`}),a(),n(V);var gt=i(V,4),_t=i(r(gt));e(_t,{name:`x`,class:`w-3.5 h-3.5`}),a(),n(gt),a(),n(mt),a(),n(z),i(z,2),a(),n(R);var H=i(R,2),U=i(r(H),3),W=i(r(U),3),vt=i(r(W)),yt=i(r(vt));e(yt,{name:`file-check`,class:`w-4 h-4`}),a(),n(vt),a(3),n(W);var bt=i(W,2),G=i(r(bt)),xt=i(r(G));e(xt,{name:`file`,class:`w-4 h-4`}),a(),n(G);var St=i(G,4),Ct=i(r(St));e(Ct,{name:`x`,class:`w-3.5 h-3.5`}),a(),n(St),a(),n(bt),a(),n(U),i(U,2),a(),n(H);var K=i(H,2),q=i(r(K),3),J=i(r(q),3),wt=i(r(J)),Tt=i(r(wt));e(Tt,{name:`file-check-2`,class:`w-4 h-4`}),a(),n(wt),a(3),n(J);var Et=i(J,2),Y=i(r(Et)),Dt=i(r(Y));e(Dt,{name:`file`,class:`w-4 h-4`}),a(),n(Y);var Ot=i(Y,4),kt=i(r(Ot));e(kt,{name:`x`,class:`w-3.5 h-3.5`}),a(),n(Ot),a(),n(Et),a(),n(q),i(q,2),a(),n(K);var At=i(K,2),X=i(r(At),3),jt=i(r(X),3),Mt=i(r(jt)),Nt=i(r(Mt));e(Nt,{name:`images`,class:`w-4 h-4`}),a(),n(Mt),a(3),n(jt),a(3),n(X),i(X,2),a(),n(At),a(),n(ot),a(),n(P);var Pt=i(P,2),Z=i(r(Pt)),Ft=i(r(Z));e(Ft,{name:`shield-alert`,class:`w-4 h-4`}),a(),n(Z),a(5),n(Pt),a(),n(N);var It=i(N,2),Q=i(r(It)),$=i(r(Q)),Lt=i(r($));e(Lt,{name:`arrow-left`,class:`w-4 h-4`}),a(),n($);var Rt=i($,2),zt=i(r(Rt));e(zt,{name:`save`,class:`w-4 h-4`}),a(),n(Rt),a(),n(Q);var Bt=i(Q,2),Vt=i(r(Bt),3);e(Vt,{name:`arrow-right`,class:`w-4 h-4`}),a(),n(Bt),a(),n(It),a(),n(Pe),a(),n(be),a(),n(s),ee(()=>{ye=t(s,1,`view-section py-10 relative`,null,ye,{hidden:he()!==`section-form`,active:he()===`section-form`}),Ie=t(p,1,`wizard-step-content space-y-6`,null,Ie,{hidden:o()!==1}),ze=t(x,1,`wizard-step-content space-y-6`,null,ze,{hidden:o()!==2}),Ze=t(Xe,1,`wizard-step-content space-y-6`,null,Ze,{hidden:o()!==3}),Qe=t(O,1,`wizard-step-content space-y-6`,null,Qe,{hidden:o()!==4}),at=t(N,1,`wizard-step-content space-y-6`,null,at,{hidden:o()!==5})}),ae(re,ve),ue(),_e()}export{me as default};