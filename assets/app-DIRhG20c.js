const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PanelPesertaProposals-CUAdD9fi.js","./ui-DnsUKVzW.js","./bootstrap-Dk4eCz5J.js","./PanelPesertaProfile-CSBUWz6W.js","./PanelPesertaPresentasi-BOxxhLp0.js","./PanelPesertaSertifikat-tZfpgkCi.js","./PanelPesertaNotifications-tGOOt7oX.js","./PanelPesertaMonitoring-DcoapayS.js","./PanelJuriStats-CAAbZulv.js","./PanelJuriPenilaian-CTH8px8H.js","./PanelJuriJadwal-DPpfvMYK.js","./PanelAdminStats-BdsLxaPm.js","./PanelAdminBidang-CwtQFOvM.js","./PanelAdminProposals-DT7R8E3o.js","./PanelAdminPenilaian-Ct6ihGgR.js","./PanelAdminPresentasi-C_XDgfRW.js","./PanelAdminSertifikat-Blf351Fn.js","./PanelAdminJadwal-BmHPHWn0.js","./PanelAdminTimeline-wJKja98w.js","./PanelAdminUsers-B61IaSZG.js","./PanelAdminPolling-BRY5zPEd.js","./PanelAdminApi-B4nuJ5xm.js","./PanelAdminMonitoring-CUhhzrHf.js","./ai-analysis-JI254eJ_.js","./ui-D7gSSaqg.js","./firebase-DnjaEvUm.js","./vendor-loader-Bn2FMEYO.js","./rolldown-runtime-DK3Fl9T5.js","./countdown-k-ywahPC.js","./presentations-certificates-DTJDq8Ci.js"])))=>i.map(i=>d[i]);
import{$ as e,A as t,B as n,D as r,F as i,H as a,J as o,K as s,M as c,N as l,O as u,P as d,R as f,S as p,T as m,U as h,V as g,W as _,X as v,_ as y,a as b,b as x,c as S,et as C,f as w,g as T,i as E,j as ee,n as D,nt as O,o as k,p as A,r as j,s as M,t as N,tt as P,v as te,x as F}from"./ui-D7gSSaqg.js";import{I as ne,a as re,c as ie,g as ae,i as oe,m as se,n as ce,o as le,s as ue,x as I}from"./ui-DnsUKVzW.js";import{a as de,c as fe,i as pe,n as me,o as he,r as ge,s as _e,t as ve}from"./auth-BBcy4cEb.js";import{checkEvaluationActive as ye,checkRegistrationActive as be,initCountdown as xe,loadScheduleConfig as Se,n as R,t as Ce}from"./countdown-k-ywahPC.js";import{editProposalDraft as we,startProposalWizard as Te}from"./wizard-DQGtgAZe.js";import{t as Ee}from"./vendor-loader-Bn2FMEYO.js";var De={"panel-peserta-proposals":()=>I(()=>import(`./PanelPesertaProposals-CUAdD9fi.js`),__vite__mapDeps([0,1,2]),import.meta.url),"panel-peserta-profile":()=>I(()=>import(`./PanelPesertaProfile-CSBUWz6W.js`),__vite__mapDeps([3,1,2]),import.meta.url),"panel-peserta-presentasi":()=>I(()=>import(`./PanelPesertaPresentasi-BOxxhLp0.js`),__vite__mapDeps([4,1,2]),import.meta.url),"panel-peserta-sertifikat":()=>I(()=>import(`./PanelPesertaSertifikat-tZfpgkCi.js`),__vite__mapDeps([5,1,2]),import.meta.url),"panel-peserta-notifications":()=>I(()=>import(`./PanelPesertaNotifications-tGOOt7oX.js`),__vite__mapDeps([6,1,2]),import.meta.url),"panel-peserta-monitoring":()=>I(()=>import(`./PanelPesertaMonitoring-DcoapayS.js`),__vite__mapDeps([7,1,2]),import.meta.url),"panel-juri-stats":()=>I(()=>import(`./PanelJuriStats-CAAbZulv.js`),__vite__mapDeps([8,1,2]),import.meta.url),"panel-juri-penilaian":()=>I(()=>import(`./PanelJuriPenilaian-CTH8px8H.js`),__vite__mapDeps([9,1]),import.meta.url),"panel-juri-jadwal":()=>I(()=>import(`./PanelJuriJadwal-DPpfvMYK.js`),__vite__mapDeps([10,1,2]),import.meta.url),"panel-admin-stats":()=>I(()=>import(`./PanelAdminStats-BdsLxaPm.js`),__vite__mapDeps([11,1,2]),import.meta.url),"panel-admin-bidang":()=>I(()=>import(`./PanelAdminBidang-CwtQFOvM.js`),__vite__mapDeps([12,1]),import.meta.url),"panel-admin-proposals":()=>I(()=>import(`./PanelAdminProposals-DT7R8E3o.js`),__vite__mapDeps([13,1,2]),import.meta.url),"panel-admin-penilaian":()=>I(()=>import(`./PanelAdminPenilaian-Ct6ihGgR.js`),__vite__mapDeps([14,1,2]),import.meta.url),"panel-admin-presentasi":()=>I(()=>import(`./PanelAdminPresentasi-C_XDgfRW.js`),__vite__mapDeps([15,1,2]),import.meta.url),"panel-admin-sertifikat":()=>I(()=>import(`./PanelAdminSertifikat-Blf351Fn.js`),__vite__mapDeps([16,1,2]),import.meta.url),"panel-admin-jadwal":()=>I(()=>import(`./PanelAdminJadwal-BmHPHWn0.js`),__vite__mapDeps([17,1,2]),import.meta.url),"panel-admin-timeline":()=>I(()=>import(`./PanelAdminTimeline-wJKja98w.js`),__vite__mapDeps([18,1]),import.meta.url),"panel-admin-users":()=>I(()=>import(`./PanelAdminUsers-B61IaSZG.js`),__vite__mapDeps([19,1]),import.meta.url),"panel-admin-polling":()=>I(()=>import(`./PanelAdminPolling-BRY5zPEd.js`),__vite__mapDeps([20,1,2]),import.meta.url),"panel-admin-api":()=>I(()=>import(`./PanelAdminApi-B4nuJ5xm.js`),__vite__mapDeps([21,1,2]),import.meta.url),"panel-admin-monitoring":()=>I(()=>import(`./PanelAdminMonitoring-CUhhzrHf.js`),__vite__mapDeps([22,1,2]),import.meta.url)},Oe=new Map,ke=0;async function Ae(e){let t=++ke,n=De[e];if(!n)throw Error(`Panel tidak dikenal: ${e}`);let r=Oe.get(e);r||(r=(await n()).default,Oe.set(e,r)),t===ke&&(ce.value=r,await ne())}async function je(){try{let e=await p();oe.value={status:`ready`,items:e||[]}}catch(e){console.warn(`Gagal memuat kategori bidang untuk landing page:`,e),oe.value={status:`error`,items:[]}}}async function Me(){try{let[e,t]=await Promise.all([d(),l(`schedule`).catch(()=>null)]);if(!e?.length){ae.value={status:`ready`,items:[],activeIndex:0};return}let n=new Date,r=t&&t.entry_start?new Date(t.entry_start):new Date(`2027-06-01T00:00:00+07:00`),i=t&&t.entry_end?new Date(t.entry_end):new Date(`2027-08-31T23:59:59+07:00`),a=t&&t.eval_start?new Date(t.eval_start):new Date(`2027-09-01T00:00:00+07:00`),o=t&&t.eval_end?new Date(t.eval_end):new Date(`2027-10-15T23:59:59+07:00`),s=0;n>=a&&n<=o?(s=e.findIndex(e=>e.judul.toLowerCase().includes(`nilai`)||e.judul.toLowerCase().includes(`evaluasi`)),s===-1&&(s=1)):n>o?(s=e.findIndex(e=>e.judul.toLowerCase().includes(`sidang`)||e.judul.toLowerCase().includes(`presentasi`)||e.judul.toLowerCase().includes(`pemenang`)),s===-1&&(s=Math.min(2,e.length-1))):n>=r&&n<=i&&(s=e.findIndex(e=>e.judul.toLowerCase().includes(`daftar`)||e.judul.toLowerCase().includes(`unggah`)),s===-1&&(s=0)),ae.value={status:`ready`,items:e,activeIndex:s}}catch(e){console.warn(`Gagal memuat timeline untuk landing page:`,e),ae.value={status:`error`,items:[],activeIndex:0}}}var z,B,V,H,U,Ne=new WeakSet;function Pe(){z=document.getElementById(`modal-proposal-detail`),B=document.getElementById(`btn-close-detail`),V=document.getElementById(`btn-detail-edit`),H=document.getElementById(`btn-detail-delete`),U=document.getElementById(`btn-print-detail`)}function Fe(e,t){window.L?document.getElementById(`detail-map`)&&setTimeout(()=>{R.detailMap?(R.detailMap.invalidateSize(),R.detailMap.setView([e,t],14),R.detailMarker.setLatLng([e,t])):(R.detailMap=L.map(`detail-map`).setView([e,t],14),L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,{attribution:`&copy; OpenStreetMap contributors`}).addTo(R.detailMap),R.detailMarker=L.marker([e,t]).addTo(R.detailMap))},300):Ee().then(()=>Fe(e,t)).catch(console.error)}var Ie=null;async function Le(e){Be();try{let n=typeof e==`object`&&e?e:null,r=n?n.id:e;if(!n&&r&&R.activeDetailProposal&&R.activeDetailProposal.id===r&&(n=R.activeDetailProposal),!n&&r){k(`Memuat detail proposal...`);try{n=await t(r)}catch(e){console.error(`Gagal mengambil proposal:`,e)}finally{j()}}if(!n){S(`Data proposal tidak ditemukan.`,`error`);return}R.activeDetailProposal=n;let i=document.getElementById(`tab-det-overview`);i&&i.click();let a=(e,t)=>{let n=document.getElementById(e);n&&(n.textContent=t??`-`)};a(`detail-uuid`,n.id),a(`detail-title`,n.title),a(`detail-description`,n.description),a(`detail-category`,n.bidang||n.category),a(`detail-tahun`,n.tahun||2027),a(`detail-jenis`,n.jenisInovasi||`Digital`),a(`detail-tahap`,n.tahapInovasi||`Uji Coba`),a(`detail-fullname`,n.fullName),a(`detail-email`,n.authorEmail),a(`detail-phone`,n.phone),a(`detail-kategori-pengusul`,n.kategoriPengusul||`Pelajar`);let o=document.getElementById(`detail-team-members-container`),s=document.getElementById(`detail-team-members`);o&&s&&(n.statusTim===`Kelompok`&&n.anggota&&n.anggota.length>0?(o.classList.remove(`hidden`),s.innerHTML=n.anggota.map(e=>`
          <li class="flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5 truncate">
            <i data-lucide="user" class="w-3.5 h-3.5 text-indigo-400"></i>
            <span class="truncate">${e}</span>
          </li>
        `).join(``)):(o.classList.add(`hidden`),s.innerHTML=``));let c=document.getElementById(`detail-lat-txt`),l=document.getElementById(`detail-lng-txt`);c&&l&&(n.latitude&&n.longitude?(c.textContent=n.latitude.toFixed(6),l.textContent=n.longitude.toFixed(6),Fe(n.latitude,n.longitude)):(c.textContent=`-`,l.textContent=`-`));let u=document.getElementById(`detail-team-photo`);u&&(u.src=n.teamPhotoUrl?n.teamPhotoUrl:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256`,u.classList.remove(`hidden`));let d=document.getElementById(`detail-download-identity`),f=document.getElementById(`detail-download-originality`),p=document.getElementById(`detail-download-approval`);d&&(d.href=n.identityDocUrl||`#`),f&&(f.href=n.originalityDocUrl||`#`),p&&(p.href=n.approvalDocUrl||`#`);let m=document.getElementById(`detail-status`);m&&(m.textContent=n.status,m.className=`px-2.5 py-1 rounded-full text-xs font-mono font-bold `,n.status===`Draft`&&(m.className+=`bg-amber-500/10 text-amber-400 border border-amber-500/20`),n.status===`Perlu Revisi`&&(m.className+=`bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse`),n.status===`Submitted`&&(m.className+=`bg-indigo-500/10 text-indigo-400 border border-indigo-500/20`),n.status===`Under Review`&&(m.className+=`bg-cyan-500/10 text-cyan-400 border border-cyan-500/20`),(n.status===`Approved`||n.status===`Accepted`)&&(m.className+=`bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`),n.status===`Rejected`&&(m.className+=`bg-red-500/10 text-red-400 border border-red-500/20`));let h=document.getElementById(`detail-revision-alert`),g=document.getElementById(`detail-revision-content`),_=document.getElementById(`detail-revision-deadline`),v=document.getElementById(`btn-detail-fix-proposal`);if(h){if(n.status===`Perlu Revisi`&&n.revisionNotes){let e=n.revisionNotes;h.classList.remove(`hidden`),_&&(_.textContent=e.deadline?new Date(e.deadline).toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`}):`Tidak ditentukan`);let t=`
          <div class="mb-2">
            <span class="text-amber-400 font-bold block mb-1">Catatan Umum:</span>
            <p class="text-slate-200 leading-relaxed bg-white/5 p-2.5 rounded-lg">${e.catatanUmum||`-`}</p>
          </div>
        `;if(e.catatanDokumen&&(t+=`
            <div class="mt-2">
              <span class="text-cyan-400 font-bold block mb-0.5">Catatan Berkas Dokumen:</span>
              <p class="text-slate-300 bg-white/5 p-2 rounded-lg">${e.catatanDokumen}</p>
            </div>
          `),e.catatanSubstansi&&(t+=`
            <div class="mt-2">
              <span class="text-indigo-400 font-bold block mb-0.5">Catatan Isi Proposal & RAB:</span>
              <p class="text-slate-300 bg-white/5 p-2 rounded-lg">${e.catatanSubstansi}</p>
            </div>
          `),e.catatanKuesioner&&(t+=`
            <div class="mt-2">
              <span class="text-purple-400 font-bold block mb-0.5">Catatan Kuesioner:</span>
              <p class="text-slate-300 bg-white/5 p-2 rounded-lg">${e.catatanKuesioner}</p>
            </div>
          `),e.requestedBy&&(t+=`
            <div class="mt-3 text-[10px] text-slate-500 font-mono">
              Diminta oleh: <span class="text-slate-400 font-semibold">${e.requestedBy}</span>
              ${e.requestedAt?` &bull; ${new Date(e.requestedAt).toLocaleString(`id-ID`)}`:``}
            </div>
          `),g&&(g.innerHTML=t),v){let e=R.currentUser&&(R.currentUser.uid===n.userId||R.currentUser.role===`admin`);v.style.display=e?`inline-flex`:`none`,v.onclick=async()=>{z&&z.close(),we(n)}}}else h.classList.add(`hidden`)}let y=n.status===`Perlu Revisi`;if((n.status===`Draft`||y)&&R.currentUser&&(R.currentUser.role===`peserta`||R.currentUser.role===`admin`)&&V&&H){V.classList.remove(`hidden`);let e=V.querySelector(`span`);e&&(e.textContent=y?`Perbaiki Proposal (Revisi)`:`Edit Draft`),y&&R.currentUser?.role!==`admin`?H.classList.add(`hidden`):H.classList.remove(`hidden`),V.onclick=async()=>{if(R.currentUser&&R.currentUser.role===`peserta`){let e=await be();if(!e.active){S(e.reason,`error`);return}}z&&z.close(),we(n)},H.onclick=async()=>{if(confirm(`Apakah Anda yakin ingin menghapus draf proposal ini secara permanen?`)){z&&z.close(),k(`Menghapus draf...`);try{await T(n.id),S(`Draf proposal berhasil dihapus.`,`success`),window.dispatchEvent(new CustomEvent(`krenova:proposalSaved`))}catch(e){S(D(e),`error`)}finally{j()}}}}else V&&V.classList.add(`hidden`),H&&H.classList.add(`hidden`);let x=document.getElementById(`detail-video-link`),C=document.getElementById(`detail-video-container`),w=document.getElementById(`detail-video-text`);C&&x&&w&&(n.videoUrl?(C.classList.remove(`hidden`),x.href=n.videoUrl,w.textContent=`Link Video Tersedia`):(x.href=`#`,w.textContent=`Video tidak dilampirkan`));let E=n.proposalContent||{},O=(e,t)=>{let n=document.getElementById(e);n&&(n.innerHTML=t||`Tidak ada konten.`)};O(`detail-abstrak`,E.abstrak),O(`detail-background`,E.background),O(`detail-objectives`,E.objectives),O(`detail-benefits`,E.benefits),O(`detail-keunggulan`,E.keunggulan),O(`detail-aspek`,E.aspek),O(`detail-penerapan`,E.penerapan),O(`detail-budget`,E.budget);let A=n.questionnaire||{};a(`det-q-orisinalitas1`,A.orisinalitas1),a(`det-q-orisinalitas2`,A.orisinalitas2),a(`det-q-orisinalitas3`,A.orisinalitas3),a(`det-q-penerapan1`,A.penerapan1),a(`det-q-penerapan2`,A.penerapan2),a(`det-q-penerapan3`,A.penerapan3),a(`det-q-manfaat1`,A.manfaat1),a(`det-q-manfaat2`,A.manfaat2),a(`det-q-manfaat3`,A.manfaat3),a(`det-q-manfaat4`,A.manfaat4),a(`det-q-manfaat5`,A.manfaat5),a(`det-q-keberlangsungan1`,A.keberlangsungan1),a(`det-q-keberlangsungan2`,A.keberlangsungan2);let M=document.getElementById(`detail-product-photos-grid`),N=document.getElementById(`detail-product-photos-empty`);M&&N&&(M.innerHTML=``,n.productPhotosUrls&&n.productPhotosUrls.length>0?(N.classList.add(`hidden`),M.classList.remove(`hidden`),n.productPhotosUrls.forEach(e=>{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,t.className=`block rounded-lg overflow-hidden border border-white/5 aspect-square bg-white/5 hover:border-indigo-500/30 transition-all`,t.innerHTML=`<img src="${e}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">`,M.appendChild(t)})):(M.classList.add(`hidden`),N.classList.remove(`hidden`)));let P=document.getElementById(`detail-juri-scores-summary`);P&&(!R.currentUser||R.currentUser.role!==`admin`?P.classList.add(`hidden`):ee(n.id).then(e=>{if(e&&e.length>0){P.classList.remove(`hidden`);let t=e.reduce((e,t)=>e+t.scores.orisinalitas,0),n=e.reduce((e,t)=>e+t.scores.penerapan,0),r=e.reduce((e,t)=>e+t.scores.manfaat,0),i=e.reduce((e,t)=>e+t.scores.keberlangsungan,0),o=e.reduce((e,t)=>e+t.average,0),s=e.length;a(`det-score-orisinalitas`,(t/s).toFixed(1)),a(`det-score-penerapan`,(n/s).toFixed(1)),a(`det-score-manfaat`,(r/s).toFixed(1)),a(`det-score-keberlangsungan`,(i/s).toFixed(1)),a(`det-score-avg`,(o/s).toFixed(2));let c=document.getElementById(`detail-comments-container`);c&&(c.innerHTML=e.map(e=>`
                <div class="border-b border-white/5 pb-1 mb-1 last:border-b-0">
                  <span class="font-bold text-slate-300 text-[11px]">${e.juriName}:</span>
                  <p class="italic text-[11px] text-slate-400 mt-0.5">"${e.comment||`Tidak ada catatan.`}"</p>
                </div>
              `).join(``))}else P.classList.add(`hidden`)}).catch(e=>{console.warn(`Gagal mengambil evaluasi juri:`,e),P.classList.add(`hidden`)}));let te=document.getElementById(`tab-det-ai-analysis`);te&&(R.currentUser&&(R.currentUser.role===`admin`||R.currentUser.role===`juri`)?te.classList.remove(`hidden`):te.classList.add(`hidden`)),Ie=null,b(),z||=document.getElementById(`modal-proposal-detail`),z?z.open||z.showModal():(console.error(`Modal element #modal-proposal-detail tidak ditemukan di DOM.`),S(`Gagal menampilkan jendela detail proposal.`,`error`)),j()}catch(e){console.error(`Gagal memuat detail proposal:`,e),S(`Gagal memuat detail proposal.`,`error`)}finally{j()}}function W(e){if(!e||typeof e!=`string`)return!1;let t=e.split(`?`)[0].toLowerCase();return t.endsWith(`.jpg`)||t.endsWith(`.jpeg`)||t.endsWith(`.png`)||t.endsWith(`.webp`)||t.endsWith(`.gif`)||t.endsWith(`.svg`)||t.endsWith(`.bmp`)||e.startsWith(`data:image/`)}function Re(e){return!e||typeof e!=`string`?!1:e.split(`?`)[0].toLowerCase().endsWith(`.pdf`)||e.startsWith(`data:application/pdf`)}async function ze(e){let t=window.open(``,`_blank`);if(!t){S(`Gagal membuka jendela cetak. Pastikan pop-up diizinkan.`,`warning`);return}let n=e.title||e.judul_inovasi||`Proposal Inovasi`,r=e.fullName||e.nama_inovator||e.nama_email||`-`,i=e.authorEmail||e.email||`-`,a=e.phone||e.noHp||`-`,o=e.tahun||e.year||2027,s=e.bidang||e.category||`-`,c=e.kategoriPengusul||e.kategori||`-`,l=e.address||e.alamat||`-`,u=e.latitude==null?`-`:typeof e.latitude==`number`?e.latitude.toFixed(6):e.latitude,d=e.longitude==null?`-`:typeof e.longitude==`number`?e.longitude.toFixed(6):e.longitude,f=e.statusTim||(e.nama_anggota1?`Kelompok`:`Perorangan`),p=e.anggota||[e.nama_anggota1,e.nama_anggota2,e.nama_anggota3,e.nama_anggota4].filter(Boolean),m=f===`Kelompok`&&p&&p.length>0?p.map(e=>`<li>${e}</li>`).join(``):`<li>Tidak ada (Perorangan)</li>`,h=e.proposalContent||e.isi_proposal||{},g=e.questionnaire||e.kuesioner||{},_=e.teamPhotoUrl||e.foto_peserta||e.data_dukung?.foto_peserta||null,v=[];Array.isArray(e.productPhotosUrls)?v=e.productPhotosUrls:Array.isArray(e.foto_produk)?v=e.foto_produk:Array.isArray(e.data_dukung?.foto_produk)&&(v=e.data_dukung.foto_produk);let y=e.identityDocUrl||e.identitas_peserta||e.data_dukung?.identitas_peserta||null,b=e.originalityDocUrl||e.pernyataan_keaslian||e.data_dukung?.pernyataan_keaslian||null,x=e.approvalDocUrl||e.lembar_pengesahan||e.data_dukung?.lembar_pengesahan||null,C=e.videoUrl||e.video||e.data_dukung?.video||null,w=[];_&&w.push({url:_,cap:`Foto Inovator / Tim`,badge:`Foto Tim`}),v.forEach((e,t)=>{e&&w.push({url:e,cap:`Foto Produk / Dokumentasi #${t+1}`,badge:`Produk ${t+1}`})}),y&&W(y)&&w.push({url:y,cap:`Identitas Peserta (KTP / Kartu Pelajar)`,badge:`Identitas`}),b&&W(b)&&w.push({url:b,cap:`Surat Pernyataan Keaslian Inovasi`,badge:`Keaslian`}),x&&W(x)&&w.push({url:x,cap:`Lembar Pengesahan Resmi`,badge:`Pengesahan`}),Array.isArray(e.photos)&&e.photos.forEach((e,t)=>{e&&!w.some(t=>t.url===e)&&w.push({url:e,cap:`Foto Dokumentasi Tambahan #${t+1}`,badge:`Dokumentasi`})});let T=[];y&&(Re(y)||!W(y))&&T.push({label:`Identitas Peserta (KTP / Kartu Pelajar)`,url:y,badge:`KTP / Identitas`}),b&&(Re(b)||!W(b))&&T.push({label:`Surat Pernyataan Keaslian Inovasi`,url:b,badge:`Surat Keaslian`}),x&&(Re(x)||!W(x))&&T.push({label:`Lembar Pengesahan Resmi`,url:x,badge:`Lembar Pengesahan`});let E=(e,t,n=`doc`)=>t?n===`link`?`<tr>
        <td style="font-weight:600; width: 45%;">${e}</td>
        <td><span class="video-text">${t}</span></td>
      </tr>`:W(t)||n===`photo`?`<tr>
        <td style="font-weight:600; width: 45%;">${e}</td>
        <td><span class="badge-status badge-img">✓ Foto Terlampir (Ditampilkan pada Galeri Foto)</span></td>
      </tr>`:`<tr>
      <td style="font-weight:600; width: 45%;">${e}</td>
      <td><span class="badge-status badge-pdf">✓ Dokumen PDF Terlampir (Ditampilkan sebagai Embed PDF di bawah)</span></td>
    </tr>`:`<tr>
        <td style="font-weight:600; width: 45%;">${e}</td>
        <td><span class="badge-status badge-empty">Tidak diunggah</span></td>
      </tr>`,ee=[E(`Identitas Peserta (KTP / Kartu Pelajar)`,y),E(`Surat Pernyataan Keaslian Inovasi`,b),E(`Lembar Pengesahan Resmi`,x),E(`Foto Inovator / Tim`,_,`photo`),E(`Foto Produk / Dokumentasi Inovasi`,v.length?`exists`:null,`photo`).replace(`✓ Foto Terlampir`,`✓ ${v.length} Foto Produk Terlampir`),E(`Tautan Video Hasil Inovasi`,C,`link`)].join(``),D=T.length?`<div class="pdf-embeds-section">
        <h3 style="font-size: 13.5px; margin-top: 25px; margin-bottom: 12px; color: #1e3a8a; font-weight: 700; text-transform: uppercase;">
          Lampiran Berkas PDF (${T.length} Dokumen)
        </h3>
        ${T.map(e=>`
            <div class="pdf-embed-wrapper">
              <div class="pdf-embed-header">
                <div class="pdf-embed-title">
                  <span class="gallery-badge" style="background:#fee2e2; color:#991b1b;">PDF</span>
                  <strong>${e.label}</strong>
                </div>
                <span class="badge-status badge-pdf">✓ Embed PDF Terlampir</span>
              </div>
              <div class="pdf-frame-container">
                <iframe src="${e.url}#toolbar=0" class="pdf-embed-element" title="${e.label}">
                  <embed src="${e.url}" type="application/pdf" class="pdf-embed-element" />
                </iframe>
              </div>
            </div>
          `).join(``)}
      </div>`:``,O=w.length?`<div class="gallery">${w.map(e=>`<figure class="gallery-item">
              <div class="gallery-img-container">
                <img src="${e.url}" alt="${e.cap}" loading="eager">
              </div>
              <figcaption>
                <span class="gallery-badge">${e.badge||`Foto`}</span>
                <span>${e.cap}</span>
              </figcaption>
            </figure>`).join(``)}</div>`:`<div style="color:#94a3b8; font-style:italic; padding: 12px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1;">Tidak ada foto yang diunggah.</div>`,k=`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="utf-8">
      <title>Proposal Krenova: ${n}</title>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1e293b;
          line-height: 1.6;
          margin: 40px;
          font-size: 13.5px;
          background-color: #fff;
        }
        h1 {
          font-size: 22px;
          margin-bottom: 5px;
          color: #0f172a;
          text-align: center;
          font-weight: 800;
        }
        .subtitle {
          text-align: center;
          color: #4f46e5;
          font-size: 14px;
          margin-bottom: 30px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .section {
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        .section h2 {
          font-size: 14px;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 6px;
          color: #1e3a8a;
          margin-bottom: 12px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .identity-wrapper {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .identity-fields {
          flex: 1;
        }
        .team-photo-box {
          width: 130px;
          flex-shrink: 0;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          background: #f8fafc;
          text-align: center;
          page-break-inside: avoid;
        }
        .team-photo-box img {
          width: 100%;
          height: 155px;
          object-fit: cover;
          display: block;
        }
        .team-photo-label {
          font-size: 10px;
          font-weight: 700;
          color: #475569;
          padding: 4px 6px;
          background: #f1f5f9;
          border-top: 1px solid #e2e8f0;
          text-transform: uppercase;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }
        .info-item {
          margin-bottom: 8px;
        }
        .info-label {
          font-weight: 700;
          font-size: 10px;
          color: #64748b;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }
        .info-val {
          font-size: 13px;
          color: #1e293b;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          font-size: 12.5px;
        }
        .table th, .table td {
          border: 1px solid #e2e8f0;
          padding: 8px 12px;
          text-align: left;
        }
        .table th {
          background-color: #f8fafc;
          font-weight: 700;
          color: #475569;
        }
        .badge-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }
        .badge-pdf {
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }
        .badge-img {
          background-color: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
        }
        .badge-empty {
          color: #94a3b8;
          font-style: italic;
          font-size: 12px;
        }
        .video-text {
          font-family: monospace;
          font-size: 11.5px;
          color: #1e293b;
          background: #f8fafc;
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          word-break: break-all;
          display: inline-block;
        }
        .rich-text {
          font-size: 13px;
          color: #334155;
          background: #fafafa;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #f1f5f9;
        }
        .rich-text p {
          margin-top: 0;
          margin-bottom: 8px;
        }
        .rich-text p:last-child {
          margin-bottom: 0;
        }
        ol.q-list {
          padding-left: 20px;
          margin: 0;
        }
        ol.q-list li {
          margin-bottom: 12px;
        }
        .q-question {
          font-weight: 600;
          color: #0f172a;
          font-size: 13px;
        }
        .q-answer {
          color: #475569;
          font-style: italic;
          margin-top: 4px;
          font-size: 12.5px;
          background-color: #f8fafc;
          padding: 6px 10px;
          border-left: 2px solid #cbd5e1;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 12px;
        }
        .gallery-item {
          margin: 0;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          page-break-inside: avoid;
          background: #ffffff;
          display: flex;
          flex-direction: column;
        }
        .gallery-img-container {
          background-color: #f8fafc;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          max-height: 300px;
          overflow: hidden;
        }
        .gallery-item img {
          max-width: 100%;
          max-height: 280px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }
        .gallery-item figcaption {
          font-size: 11px;
          font-weight: 600;
          color: #334155;
          padding: 7px 10px;
          background: #f1f5f9;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
        }
        .gallery-badge {
          background: #e0e7ff;
          color: #3730a3;
          font-size: 9.5px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .pdf-embeds-section {
          margin-top: 25px;
        }
        .pdf-embed-wrapper {
          margin-top: 18px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
          page-break-inside: avoid;
        }
        .pdf-embed-header {
          padding: 8px 14px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .pdf-embed-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #0f172a;
        }
        .pdf-frame-container {
          width: 100%;
          height: 680px;
          background: #f1f5f9;
        }
        .pdf-embed-element {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .print-header-actions {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 25px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 15px;
        }
        .print-btn {
          background-color: #4f46e5;
          color: white;
          border: none;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .print-btn:hover {
          background-color: #4338ca;
        }
        @media print {
          body {
            margin: 20px;
          }
          .print-header-actions {
            display: none;
          }
          .gallery {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .gallery-item {
            page-break-inside: avoid;
            border: 1px solid #cbd5e1 !important;
          }
          .team-photo-box img,
          .gallery-item img {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .pdf-embed-wrapper {
            page-break-before: always;
            page-break-inside: avoid;
            margin-top: 20px;
          }
          .pdf-frame-container {
            height: 950px;
          }
          .badge-pdf,
          .badge-img,
          .gallery-badge,
          .video-text {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-header-actions">
        <button class="print-btn" onclick="window.print()">
          <svg style="width: 16px; height: 16px; fill: currentColor;" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
          Cetak Dokumen
        </button>
      </div>

      <h1>PROPOSAL INOVASI KRENOVA 2027</h1>
      <div class="subtitle">${n}</div>

      <div class="section">
        <h2>Identitas Proposal & Pengusul</h2>
        <div class="identity-wrapper">
          <div class="identity-fields">
            <div class="grid">
              <div>
                <div class="info-item">
                  <span class="info-label">ID Proposal</span>
                  <span class="info-val" style="font-family: monospace; font-weight: 600;">${e.id}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Nama Inovator / Ketua Tim</span>
                  <span class="info-val">${r}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email Pengusul</span>
                  <span class="info-val">${i}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">No. Telepon / WA</span>
                  <span class="info-val">${a}</span>
                </div>
              </div>

              <div>
                <div class="info-item">
                  <span class="info-label">Tahun Pelaksanaan</span>
                  <span class="info-val">${o}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Bidang Lomba</span>
                  <span class="info-val">${s}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Kategori Lomba</span>
                  <span class="info-val">${c}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Status Anggota</span>
                  <span class="info-val">${f}</span>
                </div>
              </div>
            </div>

            <div class="grid">
              <div>
                <div class="info-item">
                  <span class="info-label">Alamat Lengkap</span>
                  <span class="info-val">${l}</span>
                </div>
              </div>
              <div>
                <div class="info-item">
                  <span class="info-label">Koordinat Lokasi</span>
                  <span class="info-val">${u}, ${d}</span>
                </div>
              </div>
            </div>

            <div class="info-item" style="margin-top: 5px;">
              <span class="info-label">Anggota Kelompok</span>
              <span class="info-val">
                <ul style="margin: 0; padding-left: 20px;">
                  ${m}
                </ul>
              </span>
            </div>
          </div>

          ${_?`
            <div class="team-photo-box">
              <img src="${_}" alt="Foto Inovator / Tim">
              <div class="team-photo-label">Foto Inovator / Tim</div>
            </div>
          `:``}
        </div>
      </div>

      <div class="section">
        <h2>A. Abstrak / Ringkasan</h2>
        <div class="rich-text">${h.abstrak||e.description||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>B. Latar Belakang</h2>
        <div class="rich-text">${h.background||h.latar_belakang||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>C. Maksud dan Tujuan</h2>
        <div class="rich-text">${h.objectives||h.maksud_tujuan||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>D. Manfaat Inovasi</h2>
        <div class="rich-text">${h.benefits||h.manfaat||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>E. Keunggulan Inovasi</h2>
        <div class="rich-text">${h.keunggulan||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>F. Aspek Inovasi</h2>
        <div class="rich-text">${h.aspek||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>G. Penerapan Inovasi</h2>
        <div class="rich-text">${h.penerapan||`Tidak ada konten.`}</div>
      </div>

      <div class="section">
        <h2>H. Anggaran Biaya</h2>
        <div class="rich-text">${h.budget||h.anggaran||`Tidak ada konten.`}</div>
      </div>

      <div class="section" style="page-break-before: always;">
        <h2>Berkas Pendukung</h2>
        <table class="table">
          <thead>
            <tr>
              <th style="width: 45%;">Jenis Berkas</th>
              <th>Status Kelengkapan Berkas</th>
            </tr>
          </thead>
          <tbody>
            ${ee}
          </tbody>
        </table>

        ${D}
      </div>

      <div class="section" style="page-break-before: always;">
        <h2>Dokumentasi & Galeri Foto Inovasi (${w.length} Foto)</h2>
        ${O}
      </div>

      <div class="section" style="page-break-before: always;">
        <h2>Kuesioner Penilaian Mandiri</h2>

        <h3 style="font-size: 13px; margin-top: 15px; color: #1e3a8a; font-weight: 700;">A. ORISINALITAS DAN KEPIONIRAN</h3>
        <ol class="q-list">
          <li>
            <div class="q-question">Apakah temuan benar-benar asli milik saudara?</div>
            <div class="q-answer">${g.orisinalitas1||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah ide/inovasi hasil pengembangan sebelumnya? Apabila Jawaban "Iya" Pengembangan ada di bagian apa?</div>
            <div class="q-answer">${g.orisinalitas2||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah ada inovasi sejenis? Jika ada apa perbedaan inovasi yang anda miliki?</div>
            <div class="q-answer">${g.orisinalitas3||`-`}</div>
          </li>
        </ol>

        <h3 style="font-size: 13px; margin-top: 20px; color: #1e3a8a; font-weight: 700;">B. PENERAPAN DI MASYARAKAT</h3>
        <ol class="q-list" start="4">
          <li>
            <div class="q-question">Apakah sudah dilakukan Ujicoba pada lingkungan yang relevan? Dimana dan Bagaimana hasil penerapannya?</div>
            <div class="q-answer">${g.penerapan1||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah inovasi yang di hasilkan sudah siap terapkan? Siapakah yang menerapkan?</div>
            <div class="q-answer">${g.penerapan2||`-`}</div>
          </li>
          <li>
            <div class="q-question">Skala jangkauan penerapan pada skala apa (Nasional/Provinsi/Kab dan Kota/Kecamatan/Desa)?</div>
            <div class="q-answer">${g.penerapan3||`-`}</div>
          </li>
        </ol>

        <h3 style="font-size: 13px; margin-top: 20px; color: #1e3a8a; font-weight: 700;">C. MANFAAT</h3>
        <ol class="q-list" start="7">
          <li>
            <div class="q-question">Apakah inovasi yang dihasilkan dapat menyelesaikan permasalahan aktual saat ini? Jelaskan?</div>
            <div class="q-answer">${g.manfaat1||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah inovasi dapat meningkatkan proses produksi/efisiensi? Jelaskan</div>
            <div class="q-answer">${g.manfaat2||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah memberi manfaat kelingkungan? Dalam bentuk apa?</div>
            <div class="q-answer">${g.manfaat3||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah menyerap tenaga kerja pada proses produksi? Berapa?</div>
            <div class="q-answer">${g.manfaat4||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah dapat meningkatkan pendapatan masyarakat? Berapa?</div>
            <div class="q-answer">${g.manfaat5||`-`}</div>
          </li>
        </ol>

        <h3 style="font-size: 13px; margin-top: 20px; color: #1e3a8a; font-weight: 700;">D. KEBERLANGSUNGAN / KOMERSIALISASI</h3>
        <ol class="q-list" start="12">
          <li>
            <div class="q-question">Berapa persen penyerapan penggunaan sumberdaya lokal (SDM dan Bahan baku lokal)?</div>
            <div class="q-answer">${g.keberlangsungan1||`-`}</div>
          </li>
          <li>
            <div class="q-question">Apakah ketersediaan bahan baku kontinyu secara kualitas dan kuantitas?</div>
            <div class="q-answer">${g.keberlangsungan2||`-`}</div>
          </li>
        </ol>
      </div>
    </body>
    </html>
  `;t.document.write(k),t.document.close()}function Be(){Pe(),B&&!B.dataset.bound&&(B.dataset.bound=`true`,B.addEventListener(`click`,()=>{let e=z||document.getElementById(`modal-proposal-detail`);e&&e.close()})),U&&!U.dataset.bound&&(U.dataset.bound=`true`,U.addEventListener(`click`,async()=>{R.activeDetailProposal&&await ze(R.activeDetailProposal)}));let e=document.querySelectorAll(`.tab-det`);e.forEach(t=>{Ne.has(t)||(Ne.add(t),t.addEventListener(`click`,()=>{e.forEach(e=>{e.classList.remove(`active`,`border-indigo-500`,`text-white`),e.classList.add(`border-transparent`,`text-slate-400`)}),t.classList.add(`active`,`border-indigo-500`,`text-white`),t.classList.remove(`border-transparent`,`text-slate-400`),document.querySelectorAll(`.tab-det-panel`).forEach(e=>e.classList.add(`hidden`));let n=t.id.replace(`tab-`,`panel-`),r=document.getElementById(n);r&&r.classList.remove(`hidden`),n===`panel-det-overview`&&R.detailMap&&setTimeout(()=>R.detailMap.invalidateSize(),100),n===`panel-det-ai-analysis`&&R.activeDetailProposal&&Ie!==R.activeDetailProposal.id&&(Ie=R.activeDetailProposal.id,I(async()=>{let{initAIAnalysisTab:e,initAISettingsEvents:t}=await import(`./ai-analysis-JI254eJ_.js`);return{initAIAnalysisTab:e,initAISettingsEvents:t}},__vite__mapDeps([23,24,1,25,26,27,28]),import.meta.url).then(({initAIAnalysisTab:e,initAISettingsEvents:t})=>{t(),e(R.activeDetailProposal)}))}))})}async function Ve(){if(!R.currentUser)return;let e=await f(R.currentUser.uid),t=e.length,n=e.filter(e=>e.status===`Draft`).length,r=e.filter(e=>e.status===`Perlu Revisi`).length,i=e.filter(e=>e.status===`Submitted`||e.status===`Under Review`||e.status===`Approved`||e.status===`Rejected`).length,a=e.filter(e=>e.status===`Accepted`).length,o=document.getElementById(`peserta-stat-total`),s=document.getElementById(`peserta-stat-draft`),c=document.getElementById(`peserta-stat-submitted`),l=document.getElementById(`peserta-stat-accepted`);o&&(o.textContent=t),s&&(s.textContent=n),c&&(c.textContent=i),l&&(l.textContent=a);let u=document.getElementById(`peserta-quota-full-alert`);u&&(t>=2?u.classList.remove(`hidden`):u.classList.add(`hidden`));let d=document.getElementById(`peserta-filter-revisi-count`);d&&(r>0?(d.textContent=r,d.classList.remove(`hidden`)):d.classList.add(`hidden`));let p=document.getElementById(`peserta-revision-alert-banner`),m=document.getElementById(`btn-peserta-view-revisi`);p&&(r>0?(p.classList.remove(`hidden`),m&&(m.onclick=()=>{let t=document.querySelector(`#panel-peserta-proposals .tab-filter[data-filter="Perlu Revisi"]`);t?t.click():He(e,`Perlu Revisi`)})):p.classList.add(`hidden`)),He(e,`all`)}function He(e,t=`all`){let n=document.getElementById(`peserta-proposals-grid`),r=document.getElementById(`peserta-proposals-empty`);if(!n)return;n.innerHTML=``;let i=t===`all`?e:e.filter(e=>t===`Draft`?e.status===`Draft`:t===`Perlu Revisi`?e.status===`Perlu Revisi`:t===`Submitted`?e.status===`Submitted`||e.status===`Under Review`||e.status===`Approved`||e.status===`Rejected`:t===`Accepted`?e.status===`Accepted`:e.status===t);i.length===0?(n.classList.add(`hidden`),r&&r.classList.remove(`hidden`)):(r&&r.classList.add(`hidden`),n.classList.remove(`hidden`),i.forEach(e=>{let t=document.createElement(`div`);t.className=`glass-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer animate-fade-in-up`;let r=`bg-indigo-500/10 text-indigo-400 border-indigo-500/20`,i=`bg-indigo-400`;e.status===`Draft`?(r=`bg-slate-500/10 text-slate-400 border-slate-500/20`,i=`bg-slate-400`):e.status===`Perlu Revisi`?(r=`bg-amber-500/15 text-amber-300 border-amber-500/40 animate-pulse`,i=`bg-amber-400`):e.status===`Under Review`?(r=`bg-cyan-500/10 text-cyan-400 border-cyan-500/20`,i=`bg-cyan-400`):e.status===`Approved`||e.status===`Accepted`?(r=`bg-emerald-500/10 text-emerald-400 border-emerald-500/20`,i=`bg-emerald-400`):e.status===`Rejected`&&(r=`bg-red-500/10 text-red-400 border-red-500/20`,i=`bg-red-400`);let a=new Date(e.updatedAt||Date.now()).toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`});t.innerHTML=`
      <div class="space-y-4">
        <div class="flex items-start justify-between gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${r}">
            <span class="w-1.5 h-1.5 rounded-full ${i}"></span>
            ${e.status}
          </span>
          <span class="text-xs text-slate-500 font-mono">${a}</span>
        </div>

        <div>
          <h3 class="font-display font-bold text-white text-base line-clamp-1 hover:text-indigo-400 transition-colors">${e.title}</h3>
          <p class="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">${e.description||`-`}</p>
        </div>
      </div>

      <div class="border-t border-white/5 pt-4 mt-6 flex items-center justify-between text-xs text-slate-500">
        <span class="flex items-center gap-1.5">
          <i data-lucide="tag" class="w-4 h-4 text-indigo-400"></i>
          <span>${e.bidang||e.category||`Inovasi`}</span>
        </span>
        <div class="flex items-center gap-3">
          <button type="button" class="btn-print-peserta inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors" title="Cetak Proposal">
            <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          </button>
          <span class="font-medium text-indigo-400 group-hover:underline">Buka &rarr;</span>
        </div>
      </div>
    `,t.querySelector(`.btn-print-peserta`)?.addEventListener(`click`,t=>{t.stopPropagation(),ze(e)}),t.addEventListener(`click`,()=>Le(e)),n.appendChild(t)}),b())}function Ue(){if(!R.currentUser)return;let e=document.getElementById(`profile-name`),t=document.getElementById(`profile-phone`),n=document.getElementById(`profile-address`),r=document.getElementById(`profile-kategori`);e&&(e.value=R.currentUser.fullName||``),t&&(t.value=R.currentUser.phone||``),n&&(n.value=R.currentUser.address||``),r&&(r.value=R.currentUser.kategori||`Pelajar`)}function We(e){let t=document.querySelectorAll(`#panel-peserta-proposals .tab-filter`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>{e.className=`tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all`}),e.className=`tab-filter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all`;let n=e.getAttribute(`data-filter`);R.currentUser&&f(R.currentUser.uid).then(e=>He(e,n))})});let n=document.getElementById(`form-profile-editor`);n&&n.addEventListener(`submit`,async t=>{if(t.preventDefault(),!R.currentUser)return;let n=document.getElementById(`profile-name`)?.value.trim(),r=document.getElementById(`profile-phone`)?.value.trim(),i=document.getElementById(`profile-address`)?.value.trim(),a=document.getElementById(`profile-kategori`)?.value;k(`Menyimpan profil...`);try{let t=await P(R.currentUser.uid,{fullName:n,phone:r,address:i,kategori:a});R.currentUser={...R.currentUser,...t},S(`Profil berhasil disimpan.`,`success`),typeof e==`function`&&e(R.currentUser)}catch(e){S(D(e),`error`)}finally{j()}})}async function Ge(){if(!R.currentUser)return;let e=await F(R.currentUser?.role),t=await m(R.currentUser.uid),n=e.filter(e=>e.status===`Approved`).length,r=t.length,i=n-r,a=document.getElementById(`juri-stat-total`),o=document.getElementById(`juri-stat-scored`),s=document.getElementById(`juri-stat-unscored`);a&&(a.textContent=n),o&&(o.textContent=r),s&&(s.textContent=Math.max(0,i))}async function Ke(){R.currentUser&&qe(await F(R.currentUser?.role),await m(R.currentUser.uid),`unscored`)}function qe(e,t,n=`unscored`){let r=document.getElementById(`table-juri-proposals-body`),i=document.getElementById(`table-juri-empty`);if(!r)return;r.innerHTML=``;let a={};t.forEach(e=>{a[e.proposalId]=e});let o=[];n===`unscored`?o=e.filter(e=>e.status===`Approved`&&!a[e.id]):n===`scored`?o=e.filter(e=>e.status===`Approved`&&a[e.id]):n===`approved`?o=e.filter(e=>e.status===`Approved`):n===`rejected`&&(o=e.filter(e=>e.status===`Rejected`)),o.length===0?(r.classList.add(`hidden`),i&&i.classList.remove(`hidden`)):(i&&i.classList.add(`hidden`),r.classList.remove(`hidden`),o.forEach(e=>{let t=a[e.id],n=t?t.average.toFixed(2):`-`,i=document.createElement(`tr`);i.className=`hover:bg-white/5 transition-colors border-b border-white/5`,i.innerHTML=`
      <td class="px-6 py-4 font-semibold text-white truncate max-w-xs">${e.title}</td>
      <td class="px-6 py-4">${e.fullName||e.authorEmail}</td>
      <td class="px-6 py-4">${e.bidang||e.category||`-`}</td>
      <td class="px-6 py-4 font-mono font-bold ${t?`text-indigo-400`:`text-slate-500`}">${n}</td>
      <td class="px-6 py-4 text-right">
        <div class="flex items-center justify-end gap-2">
          <button class="btn-view-prop p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Lihat Detail">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </button>
          <button class="btn-print-prop p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Cetak Proposal">
            <i data-lucide="printer" class="w-4 h-4"></i>
          </button>
          ${e.status===`Approved`?`
            <button class="btn-score-prop px-3 py-1.5 rounded-lg text-xs font-bold ${t?`bg-amber-500/10 text-amber-400 hover:bg-amber-500/20`:`bg-indigo-600 hover:bg-indigo-700 text-white shadow-md`} transition-all">
              ${t?`Ubah Nilai`:`Beri Nilai`}
            </button>
          `:``}
        </div>
      </td>
    `,i.querySelector(`.btn-view-prop`)?.addEventListener(`click`,()=>Le(e)),i.querySelector(`.btn-print-prop`)?.addEventListener(`click`,()=>ze(e));let o=i.querySelector(`.btn-score-prop`);o&&o.addEventListener(`click`,()=>Je(e,t)),r.appendChild(i)}),b())}async function Je(e,t){let n=document.getElementById(`modal-juri-score`);if(!n)return;let r=document.getElementById(`score-proposal-id`),i=document.getElementById(`score-proposal-title`);r&&(r.value=e.id),i&&(i.textContent=e.title),[`orisinalitas`,`penerapan`,`manfaat`,`keberlangsungan`].forEach(e=>{let n=document.getElementById(`score-${e}`),r=t&&t.scores?t.scores[e]:80;n&&(n.value=r)});let a=document.getElementById(`score-comment`);a&&(a.value=t&&t.comment||``),Ye();let o=await ye(),s=n.querySelector(`button[type="submit"]`),c=document.getElementById(`juri-score-timeline-warning`);if(!c){c=document.createElement(`div`),c.id=`juri-score-timeline-warning`;let e=n.querySelector(`.p-6`)||n.firstElementChild;e&&e.insertAdjacentElement(`beforebegin`,c)}o.active?(c.classList.add(`hidden`),s&&(s.disabled=!1,s.classList.remove(`opacity-50`,`cursor-not-allowed`))):(c.className=`px-6 py-3 bg-amber-500/15 border-b border-amber-500/30 text-amber-300 text-xs flex items-center gap-2.5`,c.innerHTML=`<i data-lucide="alert-triangle" class="w-4 h-4 shrink-0 text-amber-400"></i><span><strong>Pemberitahuan Jadwal:</strong> ${o.reason} Penilaian disimpan dalam status pratinjau saja.</span>`,c.classList.remove(`hidden`),s&&(s.disabled=!0,s.classList.add(`opacity-50`,`cursor-not-allowed`))),b(),n.showModal()}function Ye(){let e=[`orisinalitas`,`penerapan`,`manfaat`,`keberlangsungan`].map(e=>{let t=document.getElementById(`score-${e}`);return t&&parseFloat(t.value)||0}),t=e.reduce((e,t)=>e+t,0)/e.length,n=document.getElementById(`score-avg-display`);return n&&(n.textContent=t.toFixed(2)),t}function Xe(){let e=document.querySelectorAll(`.tab-jfilter`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>{e.className=`tab-jfilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap`}),t.className=`tab-jfilter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap`;let n=t.getAttribute(`data-jfilter`);R.currentUser&&Promise.all([F(R.currentUser?.role),m(R.currentUser.uid)]).then(([e,t])=>{qe(e,t,n)})})});let t=document.getElementById(`form-juri-score`);t&&t.addEventListener(`submit`,async e=>{if(e.preventDefault(),!R.currentUser)return;let t=await ye();if(!t.active){S(t.reason,`error`);return}let n=document.getElementById(`score-proposal-id`)?.value,r=parseFloat(document.getElementById(`score-orisinalitas`)?.value||0),i=parseFloat(document.getElementById(`score-penerapan`)?.value||0),a=parseFloat(document.getElementById(`score-manfaat`)?.value||0),s=parseFloat(document.getElementById(`score-keberlangsungan`)?.value||0),c=document.getElementById(`score-comment`)?.value.trim()||``,l=(r+i+a+s)/4;k(`Menyimpan penilaian...`);try{await o({proposalId:n,juriId:R.currentUser.uid,juriName:R.currentUser.fullName||R.currentUser.email,scores:{orisinalitas:r,penerapan:i,manfaat:a,keberlangsungan:s},average:l,comment:c}),S(`Penilaian berhasil disimpan.`,`success`),document.getElementById(`modal-juri-score`)?.close(),await Ke(),await Ge()}catch(e){S(D(e),`error`)}finally{j()}}),[`orisinalitas`,`penerapan`,`manfaat`,`keberlangsungan`].forEach(e=>{let t=document.getElementById(`score-${e}`);t&&(t.addEventListener(`input`,()=>{Ye()}),t.addEventListener(`blur`,()=>{let e=parseInt(t.value,10);(isNaN(e)||e<1)&&(e=1),e>100&&(e=100),t.value=e,Ye()}))})}async function Ze(){let[e,t,r]=await Promise.all([F(),n(),x()]),i=e.length,a=t.length,o=t.filter(e=>e.role===`juri`).length,s=new Set(r.map(e=>e.proposalId)).size,c=document.getElementById(`admin-stat-proposals`),l=document.getElementById(`admin-stat-users`),u=document.getElementById(`admin-stat-juries`),d=document.getElementById(`admin-stat-scored`);c&&(c.textContent=i),l&&(l.textContent=a),u&&(u.textContent=o),d&&(d.textContent=s);let f={};r.forEach(e=>{f[e.proposalId]||(f[e.proposalId]=[]),f[e.proposalId].push(e)});let p=0,m=0,h=0,g=0;e.forEach(e=>{let t=f[e.id];if(t&&t.length>0){let n=t.map(e=>e.average),r=n.reduce((e,t)=>e+t,0)/n.length;(e.kategoriPengusul||`Pelajar`).trim().toLowerCase()===`umum`?(h+=r,g++):(p+=r,m++)}});let _=m>0?p/m:0,v=g>0?h/g:0,y=document.getElementById(`admin-avg-pelajar`),b=document.getElementById(`admin-count-pelajar`),S=document.getElementById(`admin-avg-umum`),C=document.getElementById(`admin-count-umum`);y&&(y.textContent=_.toFixed(2)),b&&(b.textContent=`${m} proposal`),S&&(S.textContent=v.toFixed(2)),C&&(C.textContent=`${g} proposal`)}function Qe(e=null){let t=document.getElementById(`modal-admin-user`);if(!t)return;let n=document.getElementById(`admin-user-uid`),r=document.getElementById(`user-name`),i=document.getElementById(`user-email`),a=document.getElementById(`user-role`),o=document.getElementById(`user-password-container`),s=document.getElementById(`modal-user-title`);e?(n&&(n.value=e.uid),r&&(r.value=e.fullName||``),i&&(i.value=e.email||``),a&&(a.value=e.role||`peserta`),o&&o.classList.add(`hidden`),s&&(s.textContent=`Edit Data User`)):(n&&(n.value=``),document.getElementById(`form-admin-user`)?.reset(),a&&(a.value=`peserta`),o&&o.classList.remove(`hidden`),s&&(s.textContent=`Tambah User Baru`)),t.showModal()}async function G(){$e(await n(),R.activeUserFilter)}function $e(e,t=`all`){let n=document.getElementById(`table-admin-users-body`);n&&(n.innerHTML=``,(t===`all`?e:e.filter(e=>(e.role||`peserta`).trim().toLowerCase()===t.trim().toLowerCase())).forEach(e=>{let t=e.createdAt?new Date(e.createdAt).toLocaleDateString(`id-ID`):`-`,r=`bg-indigo-500/10 text-indigo-400 border border-indigo-500/20`;e.role===`admin`&&(r=`bg-rose-500/10 text-rose-400 border border-rose-500/20`),e.role===`juri`&&(r=`bg-cyan-500/10 text-cyan-400 border border-cyan-500/20`);let i=document.createElement(`tr`);i.className=`hover:bg-white/5 transition-colors border-b border-white/5`,i.innerHTML=`
      <td class="px-6 py-4 font-semibold text-white">${e.fullName||e.email.split(`@`)[0]}</td>
      <td class="px-6 py-4 font-mono text-xs">${e.email}</td>
      <td class="px-6 py-4">
        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${r}">
          ${e.role}
        </span>
      </td>
      <td class="px-6 py-4 font-mono text-xs text-slate-500">${t}</td>
      <td class="px-6 py-4 text-right text-xs">
        <div class="flex items-center justify-end gap-2">
          <button class="btn-edit-user p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Edit User">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          ${R.currentUser&&R.currentUser.uid!==e.uid?`
            <button class="btn-delete-user p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors" title="Hapus User">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          `:`<span class="text-slate-500 font-medium">Akun Anda</span>`}
        </div>
      </td>
    `;let a=i.querySelector(`.btn-edit-user`);a&&a.addEventListener(`click`,()=>Qe(e));let o=i.querySelector(`.btn-delete-user`);o&&o.addEventListener(`click`,async()=>{if(confirm(`Apakah Anda yakin ingin menghapus akun ${e.fullName||e.email}?`)){k(`Menghapus user...`);try{await te(e.uid),S(`Akun user berhasil dihapus.`,`success`),await G()}catch(e){S(D(e),`error`)}finally{j()}}}),n.appendChild(i)}),b())}async function et(){tt(await p())}function tt(e){let t=document.getElementById(`table-admin-bidang-body`),n=document.getElementById(`table-admin-bidang-empty`);t&&(t.innerHTML=``,e.length===0?(t.classList.add(`hidden`),n&&n.classList.remove(`hidden`)):(n&&n.classList.add(`hidden`),t.classList.remove(`hidden`),e.forEach(e=>{let n=document.createElement(`tr`);n.className=`hover:bg-white/5 transition-colors border-b border-white/5`,n.innerHTML=`
      <td class="px-6 py-4 font-mono text-xs text-indigo-400 font-bold">${e.id}</td>
      <td class="px-6 py-4 font-semibold text-white">${e.nama}</td>
      <td class="px-6 py-4 text-right text-xs">
        <div class="flex items-center justify-end gap-2">
          <button class="btn-edit-bidang p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Edit Bidang">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          <button class="btn-delete-bidang p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors" title="Hapus Bidang">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </td>
    `,n.querySelector(`.btn-edit-bidang`)?.addEventListener(`click`,()=>nt(e)),n.querySelector(`.btn-delete-bidang`)?.addEventListener(`click`,async()=>{if(confirm(`Apakah Anda yakin ingin menghapus bidang lomba ${e.nama}?`)){k(`Menghapus bidang...`);try{await A(e.id),S(`Bidang lomba berhasil dihapus.`,`success`),await et()}catch(e){S(D(e),`error`)}finally{j()}}}),t.appendChild(n)}),b()))}function nt(e=null){let t=document.getElementById(`modal-admin-bidang`);if(!t)return;let n=document.getElementById(`admin-bidang-id`),r=document.getElementById(`bidang-name`),i=document.getElementById(`modal-bidang-title`);e?(n&&(n.value=e.id),r&&(r.value=e.nama),i&&(i.textContent=`Edit Bidang Lomba`)):(n&&(n.value=``),document.getElementById(`form-admin-bidang`)?.reset(),i&&(i.textContent=`Tambah Bidang Lomba`)),t.showModal()}async function rt(){it(await d())}function it(e){let t=document.getElementById(`table-admin-timeline-body`),n=document.getElementById(`table-admin-timeline-empty`);if(!t)return;if(t.innerHTML=``,e.length===0){t.classList.add(`hidden`),n&&n.classList.remove(`hidden`);return}n&&n.classList.add(`hidden`),t.classList.remove(`hidden`);let r={indigo:`bg-indigo-500/10 text-indigo-400 border-indigo-500/20`,cyan:`bg-cyan-500/10 text-cyan-400 border-cyan-500/20`,purple:`bg-purple-500/10 text-purple-400 border-purple-500/20`,emerald:`bg-emerald-500/10 text-emerald-400 border-emerald-500/20`,amber:`bg-amber-500/10 text-amber-400 border-amber-500/20`,rose:`bg-rose-500/10 text-rose-400 border-rose-500/20`,sky:`bg-sky-500/10 text-sky-400 border-sky-500/20`};e.forEach(e=>{let n=r[e.warna]||r.indigo,i=document.createElement(`tr`);i.className=`hover:bg-white/5 transition-colors border-b border-white/5`,i.innerHTML=`
      <td class="px-6 py-4 text-center font-bold font-mono text-white">
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 text-xs">
          ${e.urutan||1}
        </span>
      </td>
      <td class="px-6 py-4 font-mono text-xs text-indigo-300 font-semibold">${e.tanggal||`-`}</td>
      <td class="px-6 py-4 font-bold text-white">${e.judul||`-`}</td>
      <td class="px-6 py-4 text-xs text-slate-400 max-w-xs truncate" title="${e.deskripsi||``}">${e.deskripsi||`-`}</td>
      <td class="px-6 py-4 text-center">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${n}">
          ${e.warna||`indigo`}
        </span>
      </td>
      <td class="px-6 py-4 text-right text-xs">
        <div class="flex items-center justify-end gap-2">
          <button class="btn-edit-timeline p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Edit Tahapan">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          <button class="btn-delete-timeline p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors" title="Hapus Tahapan">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </td>
    `,i.querySelector(`.btn-edit-timeline`)?.addEventListener(`click`,()=>at(e)),i.querySelector(`.btn-delete-timeline`)?.addEventListener(`click`,async()=>{if(confirm(`Apakah Anda yakin ingin menghapus tahapan timeline "${e.judul}"?`)){k(`Menghapus tahapan timeline...`);try{await y(e.id),S(`Tahapan timeline berhasil dihapus.`,`success`),await rt(),Me()}catch(e){S(D(e),`error`)}finally{j()}}}),t.appendChild(i)}),b()}function at(e=null){let t=document.getElementById(`modal-admin-timeline`);if(!t)return;let n=(e,t)=>{let n=document.getElementById(e);n&&(n.value=t??``)};if(e){n(`admin-timeline-id`,e.id),n(`admin-timeline-urutan`,e.urutan||1),n(`admin-timeline-warna`,e.warna||`indigo`),n(`admin-timeline-tanggal`,e.tanggal||``),n(`admin-timeline-judul`,e.judul||``),n(`admin-timeline-deskripsi`,e.deskripsi||``);let t=document.getElementById(`modal-timeline-title`);t&&(t.textContent=`Edit Tahapan Timeline`)}else{n(`admin-timeline-id`,``),document.getElementById(`form-admin-timeline`)?.reset(),n(`admin-timeline-urutan`,1),n(`admin-timeline-warna`,`indigo`);let e=document.getElementById(`modal-timeline-title`);e&&(e.textContent=`Tambah Tahapan Timeline`)}t.showModal()}function ot(e){let t=document.getElementById(`modal-admin-revision`);if(!t||!e)return;let n=document.getElementById(`revision-proposal-id`),r=document.getElementById(`revision-proposal-title`),i=document.getElementById(`revision-proposal-author`),a=document.getElementById(`revision-deadline`),o=document.getElementById(`revision-note-general`),s=document.getElementById(`revision-note-dokumen`),c=document.getElementById(`revision-note-substansi`),l=document.getElementById(`revision-note-kuesioner`);n&&(n.value=e.id),r&&(r.textContent=e.title||`Tanpa Judul`),i&&(i.textContent=`${e.fullName||`-`} (${e.authorEmail||`-`})`);let u=e.revisionNotes||{};if(a){if(u.deadline)a.value=u.deadline;else{let e=new Date;e.setDate(e.getDate()+7),a.value=e.toISOString().split(`T`)[0]}}o&&(o.value=u.catatanUmum||``),s&&(s.value=u.catatanDokumen||``),c&&(c.value=u.catatanSubstansi||``),l&&(l.value=u.catatanKuesioner||``),t.showModal(),b()}async function K(){st(await F(),`all`)}function st(e,t=`all`){let n=document.getElementById(`table-admin-proposals-body`),r=document.getElementById(`table-admin-proposals-empty`);if(!n)return;n.innerHTML=``;let i=t===`all`?e:e.filter(e=>e.status===t);i.length===0?(n.classList.add(`hidden`),r&&r.classList.remove(`hidden`)):(r&&r.classList.add(`hidden`),n.classList.remove(`hidden`),i.forEach(e=>{let t=document.createElement(`tr`);t.className=`hover:bg-white/5 transition-colors border-b border-white/5`;let r=`bg-indigo-500/10 text-indigo-400 border border-indigo-500/20`;e.status===`Draft`&&(r=`bg-slate-500/10 text-slate-400 border border-slate-500/20`),e.status===`Perlu Revisi`&&(r=`bg-amber-500/15 text-amber-300 border border-amber-500/30`),e.status===`Approved`&&(r=`bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`),e.status===`Rejected`&&(r=`bg-red-500/10 text-red-400 border border-red-500/20`),t.innerHTML=`
      <td class="px-6 py-4 font-semibold text-white truncate max-w-xs">${e.title}</td>
      <td class="px-6 py-4">${e.fullName||e.authorEmail}</td>
      <td class="px-6 py-4">${e.bidang||e.category||`-`}</td>
      <td class="px-6 py-4">
        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold ${r}">
          ${e.status}
        </span>
      </td>
      <td class="px-6 py-4 text-right text-xs">
        <div class="flex items-center justify-end gap-2">
          <button class="btn-view-admin p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Lihat Detail">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </button>
          <button class="btn-print-admin p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Cetak Proposal">
            <i data-lucide="printer" class="w-4 h-4"></i>
          </button>
          ${e.status===`Submitted`?`
            <button class="btn-approve-admin px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all flex items-center gap-1">
              <i data-lucide="check" class="w-3.5 h-3.5"></i> Approve
            </button>
            <button class="btn-reject-admin px-2.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all flex items-center gap-1">
              <i data-lucide="x" class="w-3.5 h-3.5"></i> Reject
            </button>
          `:``}
          ${e.status===`Submitted`||e.status===`Approved`||e.status===`Perlu Revisi`?`
            <button class="btn-revision-admin px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-bold transition-all flex items-center gap-1" title="Catatan & Batas Waktu Revisi">
              <i data-lucide="file-edit" class="w-3.5 h-3.5"></i> Revisi
            </button>
          `:``}
          <button class="btn-edit-admin p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Edit Proposal">
            <i data-lucide="edit" class="w-4 h-4"></i>
          </button>
          <button class="btn-delete-admin p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors" title="Hapus Proposal">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </td>
    `,t.querySelector(`.btn-revision-admin`)?.addEventListener(`click`,()=>ot(e)),t.querySelector(`.btn-view-admin`)?.addEventListener(`click`,()=>Le(e)),t.querySelector(`.btn-print-admin`)?.addEventListener(`click`,()=>ze(e));let i=t.querySelector(`.btn-approve-admin`);i&&i.addEventListener(`click`,async()=>{if(confirm(`Setujui proposal "${e.title}" untuk diteruskan ke dewan juri?`)){k(`Menyetujui proposal...`);try{await O(e.id,`Approved`),S(`Proposal disetujui.`,`success`),await K()}catch(e){S(D(e),`error`)}finally{j()}}});let a=t.querySelector(`.btn-reject-admin`);a&&a.addEventListener(`click`,async()=>{if(confirm(`Tolak proposal "${e.title}"?`)){k(`Menolak proposal...`);try{await O(e.id,`Rejected`),S(`Proposal ditolak.`,`warning`),await K()}catch(e){S(D(e),`error`)}finally{j()}}}),t.querySelector(`.btn-edit-admin`)?.addEventListener(`click`,()=>we(e)),t.querySelector(`.btn-delete-admin`)?.addEventListener(`click`,async()=>{if(confirm(`Apakah Anda yakin ingin menghapus proposal "${e.title}" secara permanen?`)){k(`Menghapus proposal...`);try{await T(e.id),S(`Proposal berhasil dihapus.`,`success`),await K()}catch(e){S(D(e),`error`)}finally{j()}}}),n.appendChild(t)}),b())}async function ct(){let[e,t]=await Promise.all([F(),x()]);lt(e,t);let n={};t.forEach(e=>{n[e.proposalId]||(n[e.proposalId]=[]),n[e.proposalId].push(e)});let r=0,i=0,a=0,o=0;e.forEach(e=>{let t=n[e.id];if(t&&t.length>0){let n=t.map(e=>e.average),s=n.reduce((e,t)=>e+t,0)/n.length;(e.kategoriPengusul||`Pelajar`).trim().toLowerCase()===`umum`?(a+=s,o++):(r+=s,i++)}});let s=i>0?r/i:0,c=o>0?a/o:0,l=document.getElementById(`admin-eval-avg-pelajar`),u=document.getElementById(`admin-eval-count-pelajar`),d=document.getElementById(`admin-eval-avg-umum`),f=document.getElementById(`admin-eval-count-umum`);l&&(l.textContent=s.toFixed(2)),u&&(u.textContent=`${i} Proposal`),d&&(d.textContent=c.toFixed(2)),f&&(f.textContent=`${o} Proposal`)}function lt(e,t){let n=document.getElementById(`table-admin-penilaian-body`),r=document.getElementById(`table-admin-penilaian-empty`);if(!n)return;n.innerHTML=``;let i={};t.forEach(e=>{i[e.proposalId]||(i[e.proposalId]=[]),i[e.proposalId].push(e)});let a=e.filter(e=>i[e.id]&&i[e.id].length>0);a.length===0?(n.classList.add(`hidden`),r&&r.classList.remove(`hidden`)):(r&&r.classList.add(`hidden`),n.classList.remove(`hidden`),a.forEach(e=>{let t=i[e.id],r=t.map(e=>e.average),a=r.reduce((e,t)=>e+t,0)/r.length,o=document.createElement(`tr`);o.className=`hover:bg-white/5 transition-colors border-b border-white/5`,o.innerHTML=`
      <td class="px-6 py-4 font-semibold text-white truncate max-w-xs">${e.title}</td>
      <td class="px-6 py-4">${e.fullName||e.authorEmail}</td>
      <td class="px-6 py-4 font-mono font-bold text-indigo-400 text-base">${a.toFixed(2)}</td>
      <td class="px-6 py-4 text-right text-xs">
        <div class="flex items-center justify-end gap-2">
          <button class="btn-show-juri-eval px-3 py-1.5 rounded-lg bg-indigo-600/10 hover:bg-indigo-600/25 border border-indigo-500/20 text-indigo-400 hover:text-white transition-all text-[11px] font-bold" title="Tampilkan Evaluasi Juri">
            Tampilkan Evaluasi Juri
          </button>
          <button class="btn-view-eval p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" title="Lihat Detail Proposal">
            <i data-lucide="eye" class="w-4.5 h-4.5"></i>
          </button>
        </div>
      </td>
    `,o.querySelector(`.btn-show-juri-eval`)?.addEventListener(`click`,()=>ut(e,t)),o.querySelector(`.btn-view-eval`)?.addEventListener(`click`,()=>Le(e)),n.appendChild(o)}),b())}function ut(e,t){let n=document.getElementById(`modal-admin-juri-evaluations`),r=document.getElementById(`eval-modal-subtitle`),i=document.getElementById(`eval-modal-content`);n&&r&&i&&(r.textContent=e.title,i.innerHTML=t.map(e=>`
    <div class="bg-white/5 border border-white/5 rounded-2xl p-5 space-y-4">
      <div class="flex justify-between items-center border-b border-white/5 pb-3">
        <div>
          <span class="text-[10px] text-slate-400 font-semibold uppercase block">Nama Juri</span>
          <strong class="text-sm text-white">${e.juriName}</strong>
        </div>
        <div class="text-right">
          <span class="text-[10px] text-slate-400 font-semibold uppercase block font-mono">Nilai Rata-rata</span>
          <strong class="text-base text-indigo-400 font-extrabold font-mono">${e.average.toFixed(2)}</strong>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div class="bg-slate-900/50 p-2.5 rounded-xl border border-white/5">
          <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Orisinalitas</span>
          <strong class="text-sm text-slate-200">${e.scores?.orisinalitas||0}</strong>
        </div>
        <div class="bg-slate-900/50 p-2.5 rounded-xl border border-white/5">
          <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Penerapan</span>
          <strong class="text-sm text-slate-200">${e.scores?.penerapan||0}</strong>
        </div>
        <div class="bg-slate-900/50 p-2.5 rounded-xl border border-white/5">
          <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Manfaat</span>
          <strong class="text-sm text-slate-200">${e.scores?.manfaat||0}</strong>
        </div>
        <div class="bg-slate-900/50 p-2.5 rounded-xl border border-white/5">
          <span class="text-[9px] text-slate-500 uppercase block font-semibold font-mono">Keberlangsungan</span>
          <strong class="text-sm text-slate-200">${e.scores?.keberlangsungan||0}</strong>
        </div>
      </div>

      <div class="bg-slate-900/30 p-3.5 rounded-xl border border-white/5 text-xs text-slate-300">
        <span class="font-bold text-slate-400 block mb-1">Catatan Evaluasi:</span>
        <p class="italic leading-relaxed">"${e.comment||`Tidak ada catatan.`}"</p>
      </div>
    </div>
  `).join(``),b(),n.showModal())}async function dt(){let e=window.open(``,`_blank`);if(!e)S(`Gagal membuka jendela cetak. Pastikan pop-up diizinkan.`,`warning`);else{k(`Menyiapkan dokumen cetak...`);try{let[t,n,r]=await Promise.all([F(),x(),g(`juri`)]),i=new Map;r.forEach(e=>{i.set(e.uid,e.fullName||e.email||`Juri (${e.uid})`)}),n.forEach(e=>{i.has(e.juriId)||i.set(e.juriId,e.juriName||`Juri (${e.juriId})`)});let a=[];i.forEach((e,t)=>{a.push({uid:t,name:e})}),a.sort((e,t)=>e.name.localeCompare(t.name));let o={};n.forEach(e=>{o[e.proposalId]||(o[e.proposalId]=[]),o[e.proposalId].push(e)});let s=t.filter(e=>o[e.id]&&o[e.id].length>0).map(e=>{let t=o[e.id].map(e=>e.average),n=t.reduce((e,t)=>e+t,0)/t.length;return{...e,averageScore:n}}),c=s.filter(e=>(e.kategoriPengusul||`Pelajar`).trim().toLowerCase()===`pelajar`).sort((e,t)=>t.averageScore-e.averageScore),l=s.filter(e=>(e.kategoriPengusul||`Pelajar`).trim().toLowerCase()===`umum`).sort((e,t)=>t.averageScore-e.averageScore),u=e=>e.length===0?`<tr><td colspan="${5+a.length}" style="text-align: center; color: #64748b; padding: 15px;">Tidak ada data penilaian untuk kategori ini.</td></tr>`:e.map((e,t)=>{let n=o[e.id]||[],r=a.map(e=>{let t=n.find(t=>t.juriId===e.uid);return`<td style="text-align: center; font-family: monospace; font-size: 12px;">${t?t.average.toFixed(2):`-`}</td>`}).join(``);return`
              <tr>
                <td style="text-align: center; font-weight: bold;">${t+1}</td>
                <td style="font-weight: 600;">${e.title}</td>
                <td>${e.fullName||e.authorEmail}</td>
                <td>${e.bidang||`-`}</td>
                ${r}
                <td style="text-align: center; font-family: monospace; font-weight: bold; color: #4f46e5; font-size: 14px;">${e.averageScore.toFixed(2)}</td>
              </tr>
            `}).join(``),d=`
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8">
        <title>Rekapitulasi Hasil Penilaian Krenova 2027</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #1e293b;
            line-height: 1.6;
            margin: 40px;
            font-size: 13px;
            background-color: #fff;
          }
          h1 {
            font-size: 20px;
            margin-bottom: 5px;
            color: #0f172a;
            text-align: center;
            font-weight: 800;
            text-transform: uppercase;
          }
          .subtitle {
            text-align: center;
            color: #64748b;
            font-size: 12px;
            margin-bottom: 30px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .section {
            margin-bottom: 35px;
            page-break-inside: avoid;
          }
          .section h2 {
            font-size: 13px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 6px;
            color: #1e3a8a;
            margin-top: 0;
            margin-bottom: 12px;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            font-size: 12px;
          }
          .table th, .table td {
            border: 1px solid #e2e8f0;
            padding: 8px 12px;
            text-align: left;
          }
          .table th {
            background-color: #f8fafc;
            font-weight: 700;
            color: #475569;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 0.5px;
          }
          .print-header-actions {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 25px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 15px;
          }
          .print-btn {
            background-color: #4f46e5;
            color: white;
            border: none;
            padding: 8px 16px;
            font-size: 12px;
            font-weight: 700;
            border-radius: 6px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .print-btn:hover {
            background-color: #4338ca;
          }
          @media print {
            body {
              margin: 20px;
            }
            .print-header-actions {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-header-actions">
          <button class="print-btn" onclick="window.print()">
            <svg style="width: 16px; height: 16px; fill: currentColor;" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
            Cetak Laporan
          </button>
        </div>

        <h1>Laporan Rekapitulasi Hasil Penilaian Proposal Krenova 2027</h1>
        <div class="subtitle">Diurutkan Berdasarkan Nilai Rata-rata Tertinggi per Kategori</div>

        <div class="section">
          <h2>Kategori: Pelajar</h2>
          <table class="table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">Peringkat</th>
                <th>Judul Proposal</th>
                <th>Inovator / Ketua Tim</th>
                <th>Bidang Lomba</th>
                ${a.map(e=>`<th style="text-align: center; font-size: 10px;">${e.name}</th>`).join(``)}
                <th style="width: 120px; text-align: center;">Nilai Rata-rata</th>
              </tr>
            </thead>
            <tbody>
              ${u(c)}
            </tbody>
          </table>
        </div>

        <div class="section">
          <h2>Kategori: Umum</h2>
          <table class="table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">Peringkat</th>
                <th>Judul Proposal</th>
                <th>Inovator / Ketua Tim</th>
                <th>Bidang Lomba</th>
                ${a.map(e=>`<th style="text-align: center; font-size: 10px;">${e.name}</th>`).join(``)}
                <th style="width: 120px; text-align: center;">Nilai Rata-rata</th>
              </tr>
            </thead>
            <tbody>
              ${u(l)}
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `;e.document.write(d),e.document.close()}catch(t){console.error(`Gagal mencetak laporan rekapitulasi penilaian:`,t),S(`Gagal memproses data laporan.`,`error`),e.close()}finally{j()}}}async function ft(){let e=document.getElementById(`admin-poll-total-votes`),t=document.getElementById(`admin-poll-pelajar-votes`),n=document.getElementById(`admin-poll-umum-votes`),r=document.getElementById(`admin-poll-pelajar-ratio`),i=document.getElementById(`admin-poll-umum-ratio`),a=document.getElementById(`table-admin-poll-pelajar`),o=document.getElementById(`table-admin-poll-umum`);if(a&&o){a.innerHTML=`<tr><td colspan="4" class="px-6 py-4 text-center text-slate-400">Memuat...</td></tr>`,o.innerHTML=`<tr><td colspan="4" class="px-6 py-4 text-center text-slate-400">Memuat...</td></tr>`;try{let s=await u(),c=await F(`juri`),l=s.length,d={},f={},p=0,m=0;s.forEach(e=>{e.pelajarProposalId&&(d[e.pelajarProposalId]=(d[e.pelajarProposalId]||0)+1,p++),e.umumProposalId&&(f[e.umumProposalId]=(f[e.umumProposalId]||0)+1,m++)}),e&&(e.textContent=l),t&&(t.textContent=p),n&&(n.textContent=m);let h=l>0?(p/l*100).toFixed(0):0,g=l>0?(m/l*100).toFixed(0):0;r&&(r.textContent=`${h}% dari total suara`),i&&(i.textContent=`${g}% dari total suara`);let _=c.filter(e=>(e.kategoriPengusul||`Pelajar`).trim().toLowerCase()===`pelajar`),v=c.filter(e=>(e.kategoriPengusul||`Pelajar`).trim().toLowerCase()===`umum`);_.forEach(e=>{e.pollVotes=d[e.id]||0}),v.forEach(e=>{e.pollVotes=f[e.id]||0}),_.sort((e,t)=>t.pollVotes-e.pollVotes),v.sort((e,t)=>t.pollVotes-e.pollVotes),_.length===0?a.innerHTML=`<tr><td colspan="4" class="px-6 py-4 text-center text-slate-500">Belum ada proposal pelajar yang disetujui.</td></tr>`:(a.innerHTML=``,_.forEach((e,t)=>{let n=p>0?e.pollVotes/p*100:0;a.appendChild(pt(e,t+1,n,`purple`))})),v.length===0?o.innerHTML=`<tr><td colspan="4" class="px-6 py-4 text-center text-slate-500">Belum ada proposal umum yang disetujui.</td></tr>`:(o.innerHTML=``,v.forEach((e,t)=>{let n=m>0?e.pollVotes/m*100:0;o.appendChild(pt(e,t+1,n,`cyan`))}))}catch(e){console.error(`Gagal memuat hasil polling admin:`,e),a.innerHTML=`<tr><td colspan="4" class="px-6 py-4 text-center text-rose-400">Gagal memuat data polling.</td></tr>`,o.innerHTML=`<tr><td colspan="4" class="px-6 py-4 text-center text-rose-400">Gagal memuat data polling.</td></tr>`}b()}}function pt(e,t,n,r){let i=document.createElement(`tr`);i.className=`hover:bg-white/5 transition-colors border-b border-white/5`;let a=t;a=t===1?`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold">🥇</span>`:t===2?`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-400/20 text-slate-300 border border-slate-400/30 text-xs font-bold">🥈</span>`:t===3?`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700/20 text-amber-600 border border-amber-700/30 text-xs font-bold">🥉</span>`:`<span class="text-xs text-slate-400 font-mono font-bold">${t}</span>`;let o=r===`purple`?`bg-purple-500`:`bg-cyan-400`;return i.innerHTML=`
    <td class="px-4 py-4 text-center">${a}</td>
    <td class="px-4 py-4">
      <h4 class="font-display font-bold text-white text-sm truncate max-w-[200px]" title="${e.title||e.judul_inovasi}">${e.title||e.judul_inovasi}</h4>
      <p class="text-xs text-slate-500 mt-0.5">${e.fullName||e.nama_inovator||`Inovator`}</p>
    </td>
    <td class="px-4 py-4 text-right font-mono font-bold text-white">${e.pollVotes}</td>
    <td class="px-4 py-4">
      <div class="flex items-center justify-end gap-2">
        <div class="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div class="h-full ${o} rounded-full" style="width: ${n}%"></div>
        </div>
        <span class="text-xs font-mono font-semibold text-slate-400 w-10 text-right">${n.toFixed(0)}%</span>
      </div>
    </td>
  `,i}function mt(){let e=document.querySelectorAll(`.user-tab-filter`);e.forEach(t=>{t.addEventListener(`click`,async()=>{e.forEach(e=>{e.className=`user-tab-filter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all`}),t.className=`user-tab-filter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all`,R.activeUserFilter=t.getAttribute(`data-user-filter`),await G()})});let t=document.querySelectorAll(`.tab-afilter`);t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>{e.className=`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 border border-transparent text-slate-400 transition-all whitespace-nowrap`}),e.className=`tab-afilter px-4 py-2 text-sm font-semibold rounded-lg bg-white/5 border border-white/10 text-white transition-all whitespace-nowrap`;let n=e.getAttribute(`data-afilter`);F().then(e=>st(e,n))})});let n=document.getElementById(`form-admin-user`);n&&n.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`admin-user-uid`)?.value,n=document.getElementById(`user-name`)?.value.trim(),r=document.getElementById(`user-email`)?.value.trim(),i=document.getElementById(`user-role`)?.value;k(`Menyimpan data user...`);try{if(t)await P(t,{fullName:n,email:r,role:i}),S(`User berhasil diperbarui.`,`success`);else{let e=`pre-`+Math.random().toString(36).substr(2,9);await P(e,{email:r,fullName:n,role:i}),S(`User baru berhasil didaftarkan.`,`success`)}document.getElementById(`modal-admin-user`)?.close(),await G()}catch(e){S(D(e),`error`)}finally{j()}}),document.getElementById(`btn-close-user-modal`)?.addEventListener(`click`,()=>{document.getElementById(`modal-admin-user`)?.close()});let r=document.getElementById(`form-admin-revision`);r&&r.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`revision-proposal-id`)?.value,n=document.getElementById(`revision-deadline`)?.value,r=document.getElementById(`revision-note-general`)?.value.trim(),i=document.getElementById(`revision-note-dokumen`)?.value.trim(),a=document.getElementById(`revision-note-substansi`)?.value.trim(),o=document.getElementById(`revision-note-kuesioner`)?.value.trim();if(!t||!r){S(`Proposal ID dan Catatan Umum wajib diisi.`,`warning`);return}let s={deadline:n||null,catatanUmum:r,catatanDokumen:i||null,catatanSubstansi:a||null,catatanKuesioner:o||null,requestedAt:new Date().toISOString(),requestedBy:R.currentUser?.fullName||R.currentUser?.email||`Admin`};k(`Menyimpan catatan revisi...`);try{await O(t,`Perlu Revisi`,s),S(`Status proposal berhasil diubah ke 'Perlu Revisi' dan catatan terkirim.`,`success`),document.getElementById(`modal-admin-revision`)?.close(),await K(),window.dispatchEvent(new CustomEvent(`krenova:proposalSaved`))}catch(e){S(D(e),`error`)}finally{j()}}),document.getElementById(`btn-close-revision-modal`)?.addEventListener(`click`,()=>{document.getElementById(`modal-admin-revision`)?.close()}),document.getElementById(`btn-cancel-revision-modal`)?.addEventListener(`click`,()=>{document.getElementById(`modal-admin-revision`)?.close()});let i=document.getElementById(`form-admin-bidang`);i&&i.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`admin-bidang-id`)?.value,n=document.getElementById(`bidang-name`)?.value.trim();k(`Menyimpan bidang lomba...`);try{await s({id:t||null,nama:n}),S(`Bidang lomba berhasil disimpan.`,`success`),document.getElementById(`modal-admin-bidang`)?.close(),await et()}catch(e){S(D(e),`error`)}finally{j()}});let a=document.getElementById(`form-admin-timeline`);a&&a.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`admin-timeline-id`)?.value,n=document.getElementById(`admin-timeline-urutan`)?.value,r=document.getElementById(`admin-timeline-warna`)?.value,i=document.getElementById(`admin-timeline-tanggal`)?.value.trim(),a=document.getElementById(`admin-timeline-judul`)?.value.trim(),o=document.getElementById(`admin-timeline-deskripsi`)?.value.trim();k(`Menyimpan tahapan timeline...`);try{await C({id:t||null,urutan:n,warna:r,tanggal:i,judul:a,deskripsi:o}),S(`Tahapan timeline berhasil disimpan.`,`success`),document.getElementById(`modal-admin-timeline`)?.close(),await rt(),Me()}catch(e){S(D(e),`error`)}finally{j()}}),document.getElementById(`btn-close-timeline-modal`)?.addEventListener(`click`,()=>{document.getElementById(`modal-admin-timeline`)?.close()}),ht()}function ht(){let t=document.getElementById(`form-schedule-settings`);t&&!t.dataset.bound&&(t.dataset.bound=`true`,t.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`schedule-entry-start`)?.value,r=document.getElementById(`schedule-entry-end`)?.value,i=document.getElementById(`schedule-eval-start`)?.value,a=document.getElementById(`schedule-eval-end`)?.value;if(!n||!r||!i||!a){S(`Lengkapi seluruh tanggal jadwal pelaksanaan lomba!`,`warning`);return}if(new Date(n)>new Date(r)){S(`Tanggal mulai entri proposal tidak boleh melewati batas akhir entri!`,`warning`);return}if(new Date(i)>new Date(a)){S(`Tanggal mulai penilaian juri tidak boleh melewati batas akhir penilaian!`,`warning`);return}k(`Menyimpan jadwal...`);let o=document.getElementById(`schedule-poll-active`)?.checked||!1,s=document.getElementById(`schedule-poll-start`)?.value||``,c=document.getElementById(`schedule-poll-end`)?.value||``;if(o&&(!s||!c))j(),S(`Lengkapi tanggal mulai dan batas akhir polling jika polling aktif!`,`warning`);else try{await e(`schedule`,{entry_start:n,entry_end:r,eval_start:i,eval_end:a,poll_active:o,poll_start:s,poll_end:c}),S(`Jadwal pelaksanaan berhasil disimpan.`,`success`),await Se()}catch(e){S(D(e),`error`)}finally{j()}}))}async function gt(){ht(),await Se()}async function _t(){let e=document.getElementById(`admin-api-key-input`),t=document.getElementById(`admin-api-endpoint-url`),n=document.getElementById(`admin-curl-example`),r=document.getElementById(`btn-copy-admin-api-key`),i=document.getElementById(`btn-copy-admin-text`),a=document.getElementById(`btn-regen-admin-api-key`);try{let r=await(await fetch(`api/sync.php?action=get_info`)).json();if(r.success&&r.data){let i=r.data;e&&(e.value=i.api_key),t&&(t.textContent=i.endpoint_url),n&&(n.textContent=`curl -H "X-API-KEY: ${i.api_key}" "${i.endpoint_url}?status=Approved"`)}}catch(e){console.warn(`Gagal memuat info API:`,e)}try{let e=await F();e&&e.length>0&&fetch(`api/sync.php`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}).catch(()=>{})}catch{}r&&!r.dataset.bound&&(r.dataset.bound=`true`,r.onclick=()=>{let t=e?e.value:``;t&&navigator.clipboard.writeText(t).then(()=>{S(`API Key berhasil disalin ke clipboard!`,`success`),i&&(i.textContent=`Tersalin!`,setTimeout(()=>{i.textContent=`Salin Key`},2500))})}),a&&!a.dataset.bound&&(a.dataset.bound=`true`,a.onclick=async()=>{if(confirm(`Peringatan: Membuat API Key baru akan memutus integrasi aplikasi lama yang menggunakan kunci saat ini. Lanjutkan?`)){k(`Membuat API Key baru...`);try{let e=await(await fetch(`api/sync.php?action=regenerate_key`,{method:`POST`})).json();e.success&&e.data?(S(`API Key baru berhasil dibuat!`,`success`),await _t()):S(`Gagal membuat API Key baru.`,`error`)}catch(e){S(`Gagal meregenerasi API Key: `+e.message,`error`)}finally{j()}}})}var vt=`all`,q=null;function yt(){let e=document.getElementById(`btn-notifications-toggle`),t=document.getElementById(`dropdown-notifications`),n=document.getElementById(`btn-dropdown-mark-all`),r=document.getElementById(`link-open-all-notifications`),i=document.getElementById(`btn-peserta-mark-all-read`);e&&t&&(e.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.toggle(`hidden`)}),document.addEventListener(`click`,n=>{!t.contains(n.target)&&!e.contains(n.target)&&t.classList.add(`hidden`)})),n&&n.addEventListener(`click`,async()=>{q&&(await a(q),await J(q),S(`Semua notifikasi ditandai telah dibaca`,`info`))}),i&&i.addEventListener(`click`,async()=>{q&&(await a(q),await St(q),S(`Semua notifikasi ditandai telah dibaca`,`info`))}),r&&r.addEventListener(`click`,e=>{e.preventDefault(),t?.classList.add(`hidden`);let n=document.querySelector(`[data-panel="panel-peserta-notifications"]`);n&&n.click()});let o=document.querySelectorAll(`[data-notif-filter]`);o.forEach(e=>{e.addEventListener(`click`,()=>{o.forEach(e=>{e.classList.remove(`bg-indigo-600`,`text-white`),e.classList.add(`text-slate-400`,`hover:text-white`)}),e.classList.add(`bg-indigo-600`,`text-white`),e.classList.remove(`text-slate-400`,`hover:text-white`),vt=e.getAttribute(`data-notif-filter`),q&&Ct()})}),window.addEventListener(`krenova:notificationsUpdated`,e=>{if(q){J(q);let e=document.getElementById(`panel-peserta-notifications`);e&&!e.classList.contains(`hidden`)&&St(q)}})}async function bt(e){if(e)try{let t=await l(`schedule`)||{},n=t.entry_end||t.reg_end||t.tahap_1_pengajuan_end;if(!n)return;let r=new Date(n),a=Math.ceil((r-new Date)/864e5);a>=0&&a<=3&&((await i(e)).some(e=>e.type===`deadline`&&e.metadata?.targetDate===n)||await w({userId:e,type:`deadline`,title:`Peringatan Batas Waktu Pengajuan`,message:a===0?`Hari ini adalah batas akhir penutupan pengajuan proposal KRENOVA 2027. Segera lengkapi dan kirim berkas Anda!`:`Batas akhir penutupan pengajuan proposal KRENOVA tersisa ${a} hari lagi (${r.toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`})}). Segera pastikan kelengkapan berkas Anda.`,link:`#panel-peserta-history`,metadata:{targetDate:n,diffDays:a}}))}catch(e){console.warn(`Error checking upcoming deadlines:`,e)}}async function J(e){q=e;let t=document.getElementById(`nav-notif-badge`),n=document.getElementById(`dropdown-notifications-list`);if(!e){t&&t.classList.add(`hidden`);return}await bt(e);let r=await i(e),a=r.filter(e=>!e.isRead).length;t&&(a>0?(t.textContent=a>99?`99+`:a,t.classList.remove(`hidden`)):t.classList.add(`hidden`)),n&&(r.length===0?n.innerHTML=`
                <div class="p-6 text-center text-slate-400 text-xs">
                    <i data-lucide="bell-off" class="w-6 h-6 mx-auto mb-2 text-slate-500"></i>
                    Belum ada notifikasi baru
                </div>
            `:(n.innerHTML=r.slice(0,5).map(e=>xt(e)).join(``),wt(n)),b())}function xt(e){let t=Tt(e.type),n=Et(e.createdAt);return`
        <div data-notif-id="${e.id}" data-link="${e.link||``}"
            class="notif-item p-3.5 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors flex items-start gap-3 ${e.isRead?`opacity-70`:`bg-indigo-500/5`}">
            <div class="w-8 h-8 rounded-lg ${t.bgClass} ${t.borderClass} border flex items-center justify-center ${t.textClass} shrink-0 mt-0.5">
                <i data-lucide="${t.icon}" class="w-4 h-4"></i>
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-1">
                    <h5 class="text-xs font-bold text-white truncate">${e.title}</h5>
                    ${e.isRead?``:`<span class="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></span>`}
                </div>
                <p class="text-[11px] text-slate-300 line-clamp-2 mt-0.5 leading-snug">${e.message}</p>
                <span class="text-[10px] text-slate-500 block mt-1">${n}</span>
            </div>
        </div>
    `}async function St(e){q=e,await J(e),await Ct()}async function Ct(){let e=document.getElementById(`peserta-notifications-list`),t=document.getElementById(`peserta-notif-unread-count`);if(!e||!q)return;e.innerHTML=`
        <div class="p-8 text-center text-slate-400 text-xs">
            <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500 mb-2"></div>
            <p>Memuat notifikasi...</p>
        </div>
    `;let n=await i(q),r=n.filter(e=>!e.isRead).length;t&&(t.textContent=`${r} Belum Dibaca`);let a=n;vt===`unread`?a=n.filter(e=>!e.isRead):vt===`action`&&(a=n.filter(e=>[`revision`,`deadline`,`presentation`].includes(e.type))),a.length===0?(e.innerHTML=`
            <div class="p-12 text-center rounded-2xl bg-white/5 border border-white/5">
                <div class="w-12 h-12 rounded-2xl bg-slate-800 text-slate-500 flex items-center justify-center mx-auto mb-3">
                    <i data-lucide="inbox" class="w-6 h-6"></i>
                </div>
                <h4 class="font-bold text-sm text-slate-300">Tidak ada notifikasi</h4>
                <p class="text-xs text-slate-500 mt-1">Anda sudah melihat seluruh pembaruan pada filter ini.</p>
            </div>
        `,b()):(e.innerHTML=a.map(e=>{let t=Tt(e.type),n=Et(e.createdAt);return`
            <div data-notif-id="${e.id}" data-link="${e.link||``}"
                class="notif-item p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${e.isRead?`bg-[#151c33]/50 border-white/5`:`bg-[#182142] border-indigo-500/30 shadow-lg shadow-indigo-950/40`}">
                <div class="flex items-start gap-3.5">
                    <div class="w-10 h-10 rounded-xl ${t.bgClass} ${t.borderClass} border flex items-center justify-center ${t.textClass} shrink-0 mt-0.5">
                        <i data-lucide="${t.icon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full ${t.badgeClass}">
                                ${t.label}
                            </span>
                            <span class="text-xs text-slate-500">• ${n}</span>
                            ${e.isRead?``:`<span class="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">BARU</span>`}
                        </div>
                        <h4 class="font-bold text-sm text-white mt-1">${e.title}</h4>
                        <p class="text-xs text-slate-300 mt-1 leading-relaxed max-w-2xl">${e.message}</p>
                    </div>
                </div>

                <div class="flex items-center gap-2 self-end sm:self-center shrink-0">
                    ${e.link?`
                        <button type="button" class="btn-action-notif px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5">
                            <span>Buka Tindak Lanjut</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    `:``}
                </div>
            </div>
        `}).join(``),wt(e),b())}function wt(e){e.querySelectorAll(`.notif-item`).forEach(e=>{e.addEventListener(`click`,async t=>{let n=e.getAttribute(`data-notif-id`),r=e.getAttribute(`data-link`);if(n&&await h(n),r&&r.startsWith(`#panel-`)){let e=r.substring(1),t=document.querySelector(`[data-panel="${e}"]`);t&&t.click()}})})}function Tt(e){switch(e){case`revision`:return{icon:`file-edit`,label:`Perlu Revisi`,bgClass:`bg-amber-500/15`,borderClass:`border-amber-500/30`,textClass:`text-amber-400`,badgeClass:`bg-amber-500/20 text-amber-300`};case`accepted`:return{icon:`check-circle-2`,label:`Lolos Tahap`,bgClass:`bg-emerald-500/15`,borderClass:`border-emerald-500/30`,textClass:`text-emerald-400`,badgeClass:`bg-emerald-500/20 text-emerald-300`};case`presentation`:return{icon:`calendar-check`,label:`Jadwal Presentasi`,bgClass:`bg-cyan-500/15`,borderClass:`border-cyan-500/30`,textClass:`text-cyan-400`,badgeClass:`bg-cyan-500/20 text-cyan-300`};case`certificate`:return{icon:`award`,label:`Sertifikat Terbit`,bgClass:`bg-amber-400/20`,borderClass:`border-amber-400/40`,textClass:`text-amber-300`,badgeClass:`bg-amber-500/20 text-amber-300`};case`deadline`:return{icon:`clock`,label:`Mendekati Batas Akhir`,bgClass:`bg-rose-500/15`,borderClass:`border-rose-500/30`,textClass:`text-rose-400`,badgeClass:`bg-rose-500/20 text-rose-300`};default:return{icon:`bell`,label:`Pemberitahuan`,bgClass:`bg-indigo-500/15`,borderClass:`border-indigo-500/30`,textClass:`text-indigo-400`,badgeClass:`bg-indigo-500/20 text-indigo-300`}}}function Et(e){if(!e)return`Baru saja`;let t=new Date(e),n=Math.floor((new Date-t)/1e3);if(n<60)return`Baru saja`;let r=Math.floor(n/60);if(r<60)return`${r} menit yang lalu`;let i=Math.floor(r/60);if(i<24)return`${i} jam yang lalu`;let a=Math.floor(i/24);return a<7?`${a} hari yang lalu`:t.toLocaleDateString(`id-ID`,{day:`numeric`,month:`short`,year:`numeric`})}var Dt=[],Ot=[];function kt(){let e=document.getElementById(`form-update-monitoring`),t=document.getElementById(`btn-close-monitoring-modal`),n=document.getElementById(`btn-cancel-update-monitoring`),r=document.getElementById(`modal-update-monitoring`);t&&r&&t.addEventListener(`click`,()=>r.close()),n&&r&&n.addEventListener(`click`,()=>r.close()),e&&e.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`btn-submit-monitoring`);t&&(t.disabled=!0,t.innerHTML=`<div class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div> Menyimpan...`);try{let e=document.getElementById(`monitor-proposal-id`).value,t=document.getElementById(`monitor-entry-id`).value||null,n=document.getElementById(`monitor-tahap`).value,i=parseInt(document.getElementById(`monitor-pengguna`).value,10)||0,a=document.getElementById(`monitor-mitra`).value.trim(),o=document.getElementById(`monitor-dampak`).value.trim(),s=document.getElementById(`monitor-kebutuhan`).value.trim(),c=document.getElementById(`monitor-link`).value.trim(),l=Dt.find(t=>t.id===e)||{},u={id:t,proposalId:e,userId:l.userId||l.authorId||``,inovatorName:l.authorName||l.ketuaNama||`Inovator`,proposalTitle:l.title||`Inovasi KRENOVA`,bidang:l.bidang||l.category||`Umum`,tahapPenerapan:n,jumlahPengguna:i,mitraKerjasama:a,dampakSosialEkonomi:o,kebutuhanPembinaan:s,linkDokumentasi:c};await v(u),S(`Perkembangan inovasi berhasil disimpan!`,`success`),r?.close(),l.userId&&await At(l.userId)}catch(e){console.error(`Error saving monitoring update:`,e),S(`Gagal menyimpan perkembangan inovasi`,`error`)}finally{t&&(t.disabled=!1,t.innerHTML=`<i data-lucide="save" class="w-4 h-4"></i><span>Simpan Perkembangan Inovasi</span>`,b())}});let i=document.getElementById(`modal-detail-monitoring`),a=document.getElementById(`btn-close-detail-monitoring`),o=document.getElementById(`btn-save-admin-monitoring`);a&&i&&a.addEventListener(`click`,()=>i.close()),o&&o.addEventListener(`click`,async()=>{let e=document.getElementById(`detail-monitor-id`).value;if(e){o.disabled=!0,o.innerHTML=`<div class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div> Menyimpan...`;try{let t=document.getElementById(`detail-monitor-status-pembinaan`).value,n=document.getElementById(`detail-monitor-catatan-admin`).value.trim();await v({id:e,statusPembinaan:t,catatanBapperida:n}),S(`Catatan pembinaan BAPPERIDA berhasil diperbarui!`,`success`),i?.close(),await Mt()}catch(e){console.error(`Error saving admin monitoring notes:`,e),S(`Gagal memperbarui catatan pembinaan`,`error`)}finally{o.disabled=!1,o.innerHTML=`<i data-lucide="check-circle" class="w-4 h-4"></i><span>Simpan Catatan Pembinaan</span>`,b()}}});let s=document.getElementById(`input-search-monitoring`),c=document.getElementById(`filter-stage-monitoring`);s&&s.addEventListener(`input`,()=>Nt()),c&&c.addEventListener(`change`,()=>Nt())}async function At(e){let t=document.getElementById(`peserta-monitoring-proposals`),n=document.getElementById(`peserta-monitoring-history`);t&&(t.innerHTML=`
            <div class="p-6 text-center text-slate-400 text-xs col-span-full">
                <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-500 mb-2"></div>
                <p>Memuat daftar inovasi Anda...</p>
            </div>
        `);try{let i=await f(e);Dt=i;let a=await r();if(t&&(i.length===0?t.innerHTML=`
                    <div class="p-8 text-center rounded-2xl bg-white/5 border border-white/5 col-span-full">
                        <i data-lucide="folder-x" class="w-8 h-8 mx-auto mb-2 text-slate-500"></i>
                        <h4 class="font-bold text-sm text-slate-300">Belum Ada Proposal Terdaftar</h4>
                        <p class="text-xs text-slate-500 mt-1">Daftarkan proposal Anda terlebih dahulu untuk memantau perkembangannya.</p>
                    </div>
                `:(t.innerHTML=i.map(e=>{let t=a.find(t=>t.proposalId===e.id),n=t?t.tahapPenerapan:`Belum dilaporkan`,r=t?`${t.jumlahPengguna} Pemanfaat`:`0 Pemanfaat`;return`
                        <div class="p-5 rounded-2xl bg-[#151c33] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-2">
                                    <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                                        ${e.bidang||e.category||`Inovasi`}
                                    </span>
                                    <span class="text-[10px] font-semibold text-slate-400">
                                        Status: <span class="text-white">${e.status||`Terkirim`}</span>
                                    </span>
                                </div>
                                <h4 class="font-bold text-sm text-white line-clamp-2">${e.title}</h4>
                                <p class="text-xs text-slate-400 mt-1 line-clamp-2">${e.abstrak||e.description||`-`}</p>

                                <div class="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-2 text-xs">
                                    <div>
                                        <span class="text-[10px] text-slate-500 block">Tahap Penerapan:</span>
                                        <span class="font-semibold text-amber-300 truncate block">${n}</span>
                                    </div>
                                    <div>
                                        <span class="text-[10px] text-slate-500 block">Dampak Pengguna:</span>
                                        <span class="font-semibold text-emerald-400 truncate block">${r}</span>
                                    </div>
                                </div>

                                ${t?.catatanBapperida?`
                                    <div class="mt-3 p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-[11px]">
                                        <span class="font-bold text-indigo-300 block mb-0.5">Catatan BAPPERIDA:</span>
                                        <p class="text-slate-300 italic">${t.catatanBapperida}</p>
                                    </div>
                                `:``}
                            </div>

                            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-end">
                                <button type="button" data-open-update-monitor="${e.id}"
                                    class="w-full btn-glow px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2">
                                    <i data-lucide="trending-up" class="w-4 h-4"></i>
                                    <span>${t?`Perbarui Laporan Penerapan`:`Laporkan Perkembangan Inovasi`}</span>
                                </button>
                            </div>
                        </div>
                    `}).join(``),t.querySelectorAll(`[data-open-update-monitor]`).forEach(e=>{e.addEventListener(`click`,()=>{jt(e.getAttribute(`data-open-update-monitor`))})}))),n){let e=i.map(e=>e.id),t=a.filter(t=>e.includes(t.proposalId));n.innerHTML=t.length===0?`
                    <div class="p-6 text-center text-slate-400 text-xs">
                        Belum ada riwayat perkembangan yang dilaporkan. Klik tombol "Laporkan Perkembangan Inovasi" di atas.
                    </div>
                `:t.map(e=>`
                    <div class="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="font-bold text-white">${e.proposalTitle}</span>
                                <span class="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                                    ${e.tahapPenerapan}
                                </span>
                            </div>
                            <p class="text-slate-300 mt-1 max-w-xl">${e.dampakSosialEkonomi}</p>
                            <div class="text-[11px] text-slate-500 mt-1 flex gap-3 flex-wrap">
                                <span>👥 ${e.jumlahPengguna||0} Pemanfaat</span>
                                ${e.mitraKerjasama?`<span>🤝 Mitra: ${e.mitraKerjasama}</span>`:``}
                                <span>📅 Diperbarui: ${new Date(e.updatedAt||e.createdAt).toLocaleDateString(`id-ID`)}</span>
                            </div>
                        </div>

                        ${e.linkDokumentasi?`
                            <a href="${e.linkDokumentasi}" target="_blank" class="shrink-0 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 font-semibold flex items-center gap-1">
                                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                <span>Bukti Penerapan</span>
                            </a>
                        `:``}
                    </div>
                `).join(``)}b()}catch(e){console.error(`Error loading peserta monitoring:`,e)}}async function jt(e){let t=document.getElementById(`modal-update-monitoring`),n=document.getElementById(`form-update-monitoring`);if(!t||!n)return;n.reset();let i=Dt.find(t=>t.id===e)||{},a=(await r(e))[0]||null;document.getElementById(`monitor-proposal-id`).value=e,document.getElementById(`monitor-entry-id`).value=a?a.id:``,document.getElementById(`monitor-proposal-bidang`).textContent=i.bidang||i.category||`Umum`,document.getElementById(`monitor-proposal-title`).textContent=i.title||`Inovasi KRENOVA`,document.getElementById(`monitor-proposal-author`).textContent=`Inovator: ${i.authorName||i.ketuaNama||`-`}`,a&&(document.getElementById(`monitor-tahap`).value=a.tahapPenerapan||`1. Riset / Prototipe Laboratorium`,document.getElementById(`monitor-pengguna`).value=a.jumlahPengguna||0,document.getElementById(`monitor-mitra`).value=a.mitraKerjasama||``,document.getElementById(`monitor-dampak`).value=a.dampakSosialEkonomi||``,document.getElementById(`monitor-kebutuhan`).value=a.kebutuhanPembinaan||``,document.getElementById(`monitor-link`).value=a.linkDokumentasi||``),b(),t.showModal()}async function Mt(){let e=document.getElementById(`table-admin-monitoring-body`);e&&(e.innerHTML=`
            <tr>
                <td colspan="7" class="p-8 text-center text-slate-400 text-xs">
                    <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-500 mb-2"></div>
                    <p>Memuat data monitoring inovasi daerah...</p>
                </td>
            </tr>
        `);try{let[e,t]=await Promise.all([r(),c()]),n=t.map(t=>{let n=e.find(e=>e.proposalId===t.id);return{id:n?n.id:`draft-${t.id}`,hasReport:!!n,proposalId:t.id,proposalTitle:t.title,inovatorName:t.authorName||t.ketuaNama||`Inovator`,bidang:t.bidang||t.category||`Umum`,tahapPenerapan:n?.tahapPenerapan||`Belum Dilaporkan`,jumlahPengguna:n?.jumlahPengguna||0,mitraKerjasama:n?.mitraKerjasama||`-`,dampakSosialEkonomi:n?.dampakSosialEkonomi||`-`,kebutuhanPembinaan:n?.kebutuhanPembinaan||`-`,linkDokumentasi:n?.linkDokumentasi||``,statusPembinaan:n?.statusPembinaan||`Dalam Pemantauan`,catatanBapperida:n?.catatanBapperida||``,updatedAt:n?.updatedAt||n?.createdAt||t.updatedAt||t.createdAt}});Ot=n;let i=n.length,a=n.filter(e=>e.tahapPenerapan.includes(`Komersialisasi`)||e.tahapPenerapan.includes(`Produksi`)).length,o=n.filter(e=>e.tahapPenerapan.includes(`Diadopsi`)).length,s=n.filter(e=>e.kebutuhanPembinaan&&e.kebutuhanPembinaan!==`-`).length,l=document.getElementById(`stat-monitor-total`),u=document.getElementById(`stat-monitor-komersil`),d=document.getElementById(`stat-monitor-adopsi`),f=document.getElementById(`stat-monitor-bantuan`);l&&(l.textContent=i),u&&(u.textContent=a),d&&(d.textContent=o),f&&(f.textContent=s),Pt(n)}catch(e){console.error(`Error loading admin monitoring:`,e)}}function Nt(){let e=document.getElementById(`input-search-monitoring`)?.value.toLowerCase().trim()||``,t=document.getElementById(`filter-stage-monitoring`)?.value||``;Pt(Ot.filter(n=>{let r=n.proposalTitle.toLowerCase().includes(e)||n.inovatorName.toLowerCase().includes(e)||n.bidang.toLowerCase().includes(e),i=!t||n.tahapPenerapan.toLowerCase().includes(t.toLowerCase());return r&&i}))}function Pt(e){let t=document.getElementById(`table-admin-monitoring-body`);t&&(e.length===0?t.innerHTML=`
            <tr>
                <td colspan="7" class="p-8 text-center text-slate-400 text-xs">
                    Tidak ada data monitoring yang sesuai filter.
                </td>
            </tr>
        `:(t.innerHTML=e.map((e,t)=>{let n=e.hasReport;return`
            <tr class="hover:bg-white/5 transition-colors border-b border-white/5">
                <td class="p-4 text-xs font-mono text-slate-400 text-center">${t+1}</td>
                <td class="p-4">
                    <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 block">${e.bidang}</span>
                    <h5 class="text-xs font-bold text-white mt-0.5 line-clamp-1">${e.proposalTitle}</h5>
                    <span class="text-[11px] text-slate-400 block mt-0.5">${e.inovatorName}</span>
                </td>
                <td class="p-4">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold ${n?`bg-cyan-500/15 text-cyan-300 border border-cyan-500/30`:`bg-slate-800 text-slate-500 border border-slate-700`}">
                        ${e.tahapPenerapan}
                    </span>
                </td>
                <td class="p-4 text-xs font-bold text-emerald-400">
                    ${e.jumlahPengguna} Orang
                </td>
                <td class="p-4 text-xs text-slate-300 max-w-xs truncate">
                    ${e.mitraKerjasama}
                </td>
                <td class="p-4">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${It(e.statusPembinaan)}">
                        ${e.statusPembinaan}
                    </span>
                </td>
                <td class="p-4 text-center">
                    <button type="button" data-admin-detail-monitor="${e.id}"
                        class="px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1 mx-auto">
                        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                        <span>Detail & Bina</span>
                    </button>
                </td>
            </tr>
        `}).join(``),t.querySelectorAll(`[data-admin-detail-monitor]`).forEach(e=>{e.addEventListener(`click`,()=>{Ft(e.getAttribute(`data-admin-detail-monitor`))})}),b()))}function Ft(e){let t=document.getElementById(`modal-detail-monitoring`);if(!t)return;let n=Ot.find(t=>t.id===e);if(!n)return;document.getElementById(`detail-monitor-id`).value=n.id.startsWith(`draft-`)?``:n.id,document.getElementById(`detail-monitor-bidang`).textContent=n.bidang,document.getElementById(`detail-monitor-title`).textContent=n.proposalTitle,document.getElementById(`detail-monitor-author`).textContent=`Inovator: ${n.inovatorName}`,document.getElementById(`detail-monitor-tahap-badge`).textContent=n.tahapPenerapan,document.getElementById(`detail-monitor-users`).textContent=`${n.jumlahPengguna} Pemanfaat`,document.getElementById(`detail-monitor-mitra-count`).textContent=n.mitraKerjasama===`-`?`0`:n.mitraKerjasama.split(`,`).length,document.getElementById(`detail-monitor-updated-at`).textContent=n.updatedAt?new Date(n.updatedAt).toLocaleDateString(`id-ID`):`-`,document.getElementById(`detail-monitor-dampak`).textContent=n.dampakSosialEkonomi,document.getElementById(`detail-monitor-mitra`).textContent=n.mitraKerjasama,document.getElementById(`detail-monitor-kebutuhan`).textContent=n.kebutuhanPembinaan||`Tidak ada permohonan khusus`;let r=document.getElementById(`detail-monitor-link-wrapper`),i=document.getElementById(`detail-monitor-link`);n.linkDokumentasi&&r&&i?(i.href=n.linkDokumentasi,r.classList.remove(`hidden`)):r&&r.classList.add(`hidden`),document.getElementById(`detail-monitor-status-pembinaan`).value=n.statusPembinaan||`Dalam Pemantauan`,document.getElementById(`detail-monitor-catatan-admin`).value=n.catatanBapperida||``,b(),t.showModal()}function It(e){switch(e){case`Pendampingan HKI & Paten`:return`bg-purple-500/20 text-purple-300 border border-purple-500/30`;case`Uji Sertifikasi & Standarisasi`:return`bg-cyan-500/20 text-cyan-300 border border-cyan-500/30`;case`Inkubasi & Jejaring Mitra Industri`:return`bg-amber-500/20 text-amber-300 border border-amber-500/30`;case`Rekomendasi Adopsi OPD / Pemkot`:return`bg-emerald-500/20 text-emerald-300 border border-emerald-500/30`;default:return`bg-indigo-500/20 text-indigo-300 border border-indigo-500/30`}}var Lt;function Rt(){return Lt||=I(()=>import(`./presentations-certificates-DTJDq8Ci.js`).then(e=>(e.initPresentationsAndCertificatesModule(),e)),__vite__mapDeps([29,24,1,25,26,27,28]),import.meta.url),Lt}var Y=(e,...t)=>Rt().then(n=>n[e](...t));window.viewCertificate=(...e)=>Y(`viewCertificate`,...e),window.verifyCertificatePublic=(...e)=>Y(`verifyCertificatePublic`,...e);var zt=document.getElementById(`btn-auth-action`),X=document.getElementById(`nav-user-email`),Bt=document.getElementById(`dashboard-welcome`),Vt=document.getElementById(`btn-create-proposal`),Z=document.getElementById(`tab-login`),Ht=document.getElementById(`tab-register`),Q=document.getElementById(`form-login`),$=document.getElementById(`form-register`),Ut=document.getElementById(`btn-back-to-landing`),Wt=document.getElementById(`btn-google-auth`),Gt=document.getElementById(`btn-x-auth`),Kt=document.getElementById(`btn-facebook-auth`),qt={peserta:[{label:`Proposal Saya`,icon:`folder`,panel:`panel-peserta-proposals`,subtitle:`Kelola proposal inovasi Anda di sini`},{label:`Jadwal Presentasi`,icon:`video`,panel:`panel-peserta-presentasi`,subtitle:`Sesi sidang & wawancara finalis inovasi`},{label:`Sertifikat Digital`,icon:`award`,panel:`panel-peserta-sertifikat`,subtitle:`Unduh dan cetak sertifikat resmi ber-QR`},{label:`Notifikasi`,icon:`bell`,panel:`panel-peserta-notifications`,subtitle:`Pemberitahuan lolos, revisi, jadwal, dan tenggat waktu`},{label:`Monitoring Inovasi`,icon:`trending-up`,panel:`panel-peserta-monitoring`,subtitle:`Perkembangan penerapan & pembinaan pascalomba`},{label:`Edit Profil`,icon:`user`,panel:`panel-peserta-profile`,subtitle:`Perbarui profil dan informasi kontak Anda`}],juri:[{label:`Statistik Juri`,icon:`bar-chart-2`,panel:`panel-juri-stats`,subtitle:`Rangkuman penilaian proposal Anda`},{label:`Penilaian Proposal`,icon:`award`,panel:`panel-juri-penilaian`,subtitle:`Evaluasi dan beri nilai proposal peserta`},{label:`Jadwal Kegiatan`,icon:`calendar`,panel:`panel-juri-jadwal`,subtitle:`Jadwal entri proposal dan penilaian`}],admin:[{label:`Statistik Portal`,icon:`bar-chart-2`,panel:`panel-admin-stats`,subtitle:`Statistik dan ringkasan data kompetisi`},{label:`Kelola Bidang`,icon:`tag`,panel:`panel-admin-bidang`,subtitle:`Manajemen kategori / bidang lomba`},{label:`Kelola Proposal`,icon:`file-text`,panel:`panel-admin-proposals`,subtitle:`Verifikasi administrasi proposal peserta`},{label:`Kelola Penilaian`,icon:`award`,panel:`panel-admin-penilaian`,subtitle:`Pantau rekapitulasi skor dari dewan juri`},{label:`Presentasi Finalis`,icon:`video`,panel:`panel-admin-presentasi`,subtitle:`Manajemen jadwal dan sesi sidang finalis`},{label:`Sertifikat Digital`,icon:`file-badge`,panel:`panel-admin-sertifikat`,subtitle:`Penerbitan sertifikat digital resmi & pemenang`},{label:`Kelola Jadwal`,icon:`calendar`,panel:`panel-admin-jadwal`,subtitle:`Konfigurasi linimasa kompetisi`},{label:`Kelola Timeline`,icon:`clock`,panel:`panel-admin-timeline`,subtitle:`Manajemen tahapan dan linimasa kegiatan kompetisi`},{label:`Kelola Users`,icon:`user-check`,panel:`panel-admin-users`,subtitle:`Manajemen seluruh user dalam sistem`},{label:`Hasil Polling`,icon:`thumbs-up`,panel:`panel-admin-polling`,subtitle:`Hasil suara/vote polling proposal inovasi`},{label:`Integrasi API`,icon:`network`,panel:`panel-admin-api`,subtitle:`API Key & integrasi data proposal ke aplikasi lokal`},{label:`Monitoring Daerah`,icon:`trending-up`,panel:`panel-admin-monitoring`,subtitle:`Pemantauan difusi inovasi & pembinaan BAPPERIDA`}]};me(async e=>{(!e||R.currentUser&&R.currentUser.uid!==e.uid)&&_(),Ce(e),re.value=e;let t=document.getElementById(`floating-countdown`),n=document.querySelector(`header`),r=document.querySelector(`.gov-topbar-stripe`),i=document.querySelector(`.gov-topbar-stripe + div`);if(e){n&&(n.style.display=`none`),r&&(r.style.display=`none`),i&&(i.style.display=`none`),ie.value=!0,X&&(X.textContent=e.email,X.classList.remove(`hidden`)),zt&&(zt.innerHTML=`<i data-lucide="log-out" class="w-4 h-4"></i><span>Keluar Portal</span>`),Bt&&(Bt.textContent=`Selamat datang kembali, ${e.fullName||e.email}`),t&&(e.role===`admin`||e.role===`juri`?t.classList.add(`hidden`):t.classList.remove(`hidden`));try{let t=document.querySelector(`.view-section.active`);t&&[`section-landing`,`section-auth`].includes(t.id)&&await M(`section-dashboard`),nn(),(await Promise.allSettled([Se(),J(e.id||e.uid),Jt(e)])).some(e=>e.status===`rejected`)&&S(`Sebagian data dashboard belum berhasil dimuat. Silakan coba lagi.`,`warning`)}catch(e){S(e.message||`Gagal menyiapkan dashboard.`,`error`)}finally{R.currentUser===e&&(ie.value=!1)}}else{re.value=null,n&&(n.style.display=``),r&&(r.style.display=``),i&&(i.style.display=``),ie.value=!1,J(null),X&&(X.textContent=``,X.classList.add(`hidden`)),zt&&(zt.innerHTML=`<i data-lucide="log-in" class="w-4 h-4"></i><span>Login</span>`),t&&t.classList.remove(`hidden`);let e=document.querySelector(`.view-section.active`);e&&(e.id===`section-dashboard`||e.id===`section-form`)&&M(`section-landing`),new URLSearchParams(window.location.search).get(`login`)===`true`&&(M(`section-auth`),window.history.replaceState({},document.title,window.location.pathname))}b()});function Jt(e){let t=document.getElementById(`sidebar-user-avatar`),n=document.getElementById(`sidebar-user-name`),r=document.getElementById(`sidebar-user-email`),i=document.getElementById(`sidebar-user-role-badge`),a=e.fullName||e.email.split(`@`)[0];t&&(t.textContent=a[0].toUpperCase()),n&&(n.textContent=a),r&&(r.textContent=e.email),i&&(i.textContent=(e.role||`peserta`).toUpperCase(),i.className=`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider `,e.role===`admin`?i.className+=`bg-rose-500/10 text-rose-400 border border-rose-500/20`:e.role===`juri`?i.className+=`bg-cyan-500/10 text-cyan-400 border border-cyan-500/20`:i.className+=`bg-indigo-500/10 text-indigo-400 border border-indigo-500/20`);let o=qt[e.role||`peserta`]||[];ue.value=o.map(e=>({...e,onselect:()=>Xt(e.panel,e.label,e.subtitle)}));let s=o.length?Xt(o[0].panel,o[0].label,o[0].subtitle):Promise.resolve();return b(),s}var Yt=0;async function Xt(e,t,n,r){let i=++Yt;if(await Ae(e),i!==Yt)return;se(e);let a=``,o=null;return e===`panel-peserta-proposals`?(a=`
      <button id="btn-create-proposal-header" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Buat Proposal Baru</span>
      </button>
    `,o=()=>Te()):e===`panel-admin-users`?(a=`
      <button id="btn-admin-add-user" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="user-plus" class="w-4 h-4"></i>
        <span>Tambah User</span>
      </button>
    `,o=()=>Qe()):e===`panel-admin-bidang`?(a=`
      <button id="btn-admin-add-bidang" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Tambah Bidang</span>
      </button>
    `,o=()=>nt()):e===`panel-admin-timeline`?(a=`
      <button id="btn-admin-add-timeline" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Tambah Tahapan</span>
      </button>
    `,o=()=>at()):e===`panel-admin-penilaian`?(a=`
      <button id="btn-print-evaluations-report" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="printer" class="w-4 h-4"></i>
        <span>Cetak Laporan Hasil</span>
      </button>
    `,o=()=>dt()):e===`panel-admin-presentasi`?(a=`
      <button id="btn-admin-add-presentation-header" class="btn-glow px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/10 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>Jadwalkan Presentasi</span>
      </button>
    `,o=()=>Y(`openPresentationModal`)):e===`panel-admin-sertifikat`&&(a=`
      <button id="btn-admin-add-certificate-header" class="btn-glow px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-slate-950 font-extrabold rounded-xl text-xs shadow-lg shadow-amber-600/20 active:scale-98 transition-all flex items-center gap-1.5">
        <i data-lucide="award" class="w-4 h-4"></i>
        <span>Terbitkan Sertifikat</span>
      </button>
    `,o=()=>Y(`openCertificateModal`)),Zt(t,n,a,o),Qt(e)}function Zt(e,t,n=``,r=null){let i=null;if(n&&r){let e=new DOMParser().parseFromString(n,`text/html`).querySelector(`button`);e&&(i={id:e.id,className:e.className,icon:e.querySelector(`[data-lucide]`)?.getAttribute(`data-lucide`)||`plus`,label:e.textContent.trim(),onclick:r})}le.value={title:e,subtitle:t,action:i}}async function Qt(e){if(R.currentUser)try{e===`panel-peserta-proposals`?await Ve():e===`panel-peserta-presentasi`?await Y(`loadPesertaPresentation`):e===`panel-peserta-sertifikat`?await Y(`loadPesertaCertificates`):e===`panel-peserta-notifications`?await St(R.currentUser.id||R.currentUser.uid):e===`panel-peserta-monitoring`?await At(R.currentUser.id||R.currentUser.uid):e===`panel-peserta-profile`?Ue():e===`panel-juri-stats`?await Ge():e===`panel-juri-penilaian`?await Ke():e===`panel-admin-stats`?await Ze():e===`panel-admin-bidang`?await et():e===`panel-admin-timeline`?await rt():e===`panel-admin-proposals`?await K():e===`panel-admin-penilaian`?await ct():e===`panel-admin-presentasi`?await Y(`loadAdminPresentations`):e===`panel-admin-sertifikat`?await Y(`loadAdminCertificates`):e===`panel-admin-monitoring`?await Mt():e===`panel-admin-users`?await G():e===`panel-admin-polling`?await ft():e===`panel-admin-api`?await _t():e===`panel-admin-jadwal`&&await gt()}catch(e){S(e.message||`Gagal memuat data panel.`,`error`)}}function $t(){Z&&Ht&&Q&&$&&(Z.addEventListener(`click`,()=>{Z.className=`flex-1 text-center font-display font-extrabold text-lg pb-2 border-b-2 border-indigo-500 text-white transition-all`,Ht.className=`flex-1 text-center font-display font-bold text-lg pb-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all`,Q.classList.remove(`hidden`),$.classList.add(`hidden`)}),Ht.addEventListener(`click`,()=>{Ht.className=`flex-1 text-center font-display font-extrabold text-lg pb-2 border-b-2 border-indigo-500 text-white transition-all`,Z.className=`flex-1 text-center font-display font-bold text-lg pb-2 border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all`,$.classList.remove(`hidden`),Q.classList.add(`hidden`)})),Q&&Q.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`login-email`)?.value.trim(),n=document.getElementById(`login-password`)?.value;k(`Memverifikasi kredensial...`);try{let e=await ge(t,n);S(`Selamat datang kembali, ${e.email}!`,`success`),Q.reset()}catch(e){S(N(e),`error`)}finally{j()}}),$&&$.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`register-name`)?.value.trim(),n=document.getElementById(`register-email`)?.value.trim(),r=document.getElementById(`register-password`)?.value;if(!r||r.length<6)S(`Password minimal berukuran 6 karakter!`,`warning`);else{k(`Membuat akun baru...`);try{await fe(n,r,t),S(`Akun berhasil didaftarkan!`,`success`),$.reset()}catch(e){S(N(e),`error`)}finally{j()}}}),Wt&&Wt.addEventListener(`click`,async()=>{k(`Menghubungkan dengan Google...`);try{let e=await de();e&&S(`Berhasil masuk dengan Google: ${e.fullName||e.email}`,`success`)}catch(e){S(N(e),`error`)}finally{j()}}),Gt&&Gt.addEventListener(`click`,async()=>{k(`Menghubungkan dengan X...`);try{let e=await he();e&&S(`Berhasil masuk dengan X: ${e.fullName||e.email}`,`success`)}catch(e){S(N(e),`error`)}finally{j()}}),Kt&&Kt.addEventListener(`click`,async()=>{k(`Menghubungkan dengan Facebook...`);try{let e=await pe();e&&S(`Berhasil masuk dengan Facebook: ${e.fullName||e.email}`,`success`)}catch(e){S(N(e),`error`)}finally{j()}}),document.addEventListener(`click`,async e=>{if(e.target.closest(`#btn-auth-action`)){if(R.currentUser){k(`Mengakhiri sesi...`);try{await _e(),S(`Anda telah keluar dari portal.`,`info`),M(`section-landing`)}catch{S(`Gagal keluar dari sesi.`,`error`)}finally{j()}}else M(`section-auth`)}}),Ut&&Ut.addEventListener(`click`,()=>{M(`section-landing`)}),Vt&&Vt.addEventListener(`click`,()=>{Te()}),window.addEventListener(`krenova:proposalSaved`,async()=>{R.currentUser&&(R.currentUser.role===`peserta`?await Ve():R.currentUser.role===`admin`&&await K())})}var en=!1,tn=!1;function nn(){tn||(tn=!0,Be(),We(e=>Jt(e)),Xe(),mt(),yt(),kt(),Object.entries({"btn-close-juri-modal":`modal-admin-juri`,"btn-close-bidang-modal":`modal-admin-bidang`,"btn-close-score-modal":`modal-juri-score`,"btn-close-eval-modal":`modal-admin-juri-evaluations`}).forEach(([e,t])=>{document.getElementById(e)?.addEventListener(`click`,()=>{document.getElementById(t)?.close()})}))}function rn(){if(en)return;en=!0,E(),Be(),ve().catch(e=>S(N(e),`error`)),Se().catch(()=>{}),xe(),je(),Me(),$t();let e=new URLSearchParams(window.location.search);(e.has(`verify_cert`)||e.has(`certificate`))&&(nn(),Y(`verifyCertificatePublic`,e.get(`verify_cert`)||e.get(`certificate`)))}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,rn):rn();export{$e as S,dt as _,gt as a,Xt as activateDashboardPanel,st as b,K as c,G as d,ut as f,Qe as g,at as h,et as i,Jt as initializeRoleDashboard,Ze as l,Qt as loadPanelData,nt as m,mt as n,ct as o,ot as p,_t as r,ft as s,ht as t,rt as u,Zt as updateDashboardHeader,tt as v,it as x,lt as y};