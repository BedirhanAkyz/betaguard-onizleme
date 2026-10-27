window.__P = window.__P || {};
(function(){
const BADHOST=/skin|wrap|decal|vinyl|cutfile|vecras|armobile|vectorjar|dbrand|gripping|sticker|etsy|aliexpress|temu|pinterest|youtube|ytimg|reddit|facebook|instagram|tiktok|redbubble|lifeguard|alphagvrd|slickwraps|kiwiskins|istock|shutterstock|alamy|dreamstime|123rf|gettyimages|depositphotos|freepik/i;
async function dbOpen(){return new Promise((res,rej)=>{const r=indexedDB.open('bgimg',1);r.onupgradeneeded=()=>r.result.createObjectStore('img');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function dbPut(k,v){const db=await dbOpen();return new Promise((res,rej)=>{const t=db.transaction('img','readwrite');t.objectStore('img').put(v,k);t.oncomplete=res;t.onerror=()=>rej(t.error)})}
async function dbAll(){const db=await dbOpen();return new Promise((res)=>{const out=[];const t=db.transaction('img');const c=t.objectStore('img').openCursor();c.onsuccess=e=>{const cu=e.target.result;if(cu){out.push([cu.key,cu.value]);cu.continue()}else res(out)}})}
async function dbDel(k){const db=await dbOpen();return new Promise((res)=>{const t=db.transaction('img','readwrite');t.objectStore('img').delete(k);t.oncomplete=res})}
function analyze(bm){
  const W=200,H=Math.round(200*bm.height/bm.width);const c=new OffscreenCanvas(W,H);const x=c.getContext('2d');x.drawImage(bm,0,0,W,H);
  const d=x.getImageData(0,0,W,H).data;const px=(i,j)=>{const k=(j*W+i)*4;return [d[k],d[k+1],d[k+2]]};
  // kenar arka plani
  let bs=[];for(let i=0;i<W;i++){bs.push(px(i,0),px(i,H-1))}for(let j=0;j<H;j++){bs.push(px(0,j),px(W-1,j))}
  const med=k=>{const a=bs.map(p=>p[k]).sort((a,b)=>a-b);return a[a.length>>1]};const bg=[med(0),med(1),med(2)];
  const bgL=(bg[0]+bg[1]+bg[2])/3; let bgdev=0;bs.forEach(p=>{bgdev+=Math.abs(p[0]-bg[0])+Math.abs(p[1]-bg[1])+Math.abs(p[2]-bg[2])});bgdev/=bs.length;
  const m=new Uint8Array(W*H);let x0=W,x1=0,y0=H,y1=0,n=0,sat=0;
  for(let j=0;j<H;j++)for(let i=0;i<W;i++){const p=px(i,j);const df=Math.abs(p[0]-bg[0])+Math.abs(p[1]-bg[1])+Math.abs(p[2]-bg[2]);if(df>60){m[j*W+i]=1;n++;if(i<x0)x0=i;if(i>x1)x1=i;if(j<y0)y0=j;if(j>y1)y1=j;const mx=Math.max(...p),mn=Math.min(...p);sat+=mx?(mx-mn)/mx:0}}
  if(n<200)return null; sat/=n;
  const bw=x1-x0+1,bh=y1-y0+1;
  // simetri: yatay eksen ve dikey eksen etrafinda
  let sh=0,sv=0,tot=0;for(let j=y0;j<=y1;j++)for(let i=x0;i<=x1;i++){if(!m[j*W+i])continue;tot++;const jj=y0+y1-j,ii=x0+x1-i;if(m[jj*W+i])sh++;if(m[j*W+ii])sv++}
  sh/=tot;sv/=tot;
  const fill=tot/(bw*bh);const touch=(x0<=1||y0<=1||x1>=W-2||y1>=H-2);
  return {bgL,bgdev,sat,sh,sv,fill,asp:bw/bh,touch,cov:bw*bh/(W*H)};
}
async function search(q){
  const r=await fetch('/images/search?q='+encodeURIComponent(q)+'&form=HDRSC2&first=1');const t=await r.text();
  const doc=new DOMParser().parseFromString(t,'text/html');
  return [...doc.querySelectorAll('a.iusc')].map(a=>{try{return JSON.parse(a.getAttribute('m'))}catch(e){return null}}).filter(Boolean);
}
async function pick(id,q,opts={}){
  const C=(await search(q)).filter(m=>!BADHOST.test(m.murl)&&!BADHOST.test(m.purl||'')).slice(0,opts.k||18);
  const sc=[];
  await Promise.all(C.map(async(m,i)=>{try{const b=await (await fetch(m.turl)).blob();const bm=await createImageBitmap(b);const a=analyze(bm);if(!a)return;
     const sym=Math.max(a.sh,a.sv);let s=sym*1.0 - Math.max(0,a.sat-0.18)*2 - (a.bgL<200?0.3:0) - Math.min(a.bgdev/100,0.3) - (a.touch?0.15:0) - (a.fill<0.55?0.2:0);
     sc.push({i,m,a,s,tw:bm.width,th:bm.height})}catch(e){}}));
  sc.sort((x,y)=>y.s-x.s);
  for(const c of sc.slice(0,6)){
    try{const r=await fetch(c.m.murl,{mode:'cors'});if(!r.ok)continue;const b=await r.blob();if(!/image/.test(b.type)&&b.size<20000)continue;const bm=await createImageBitmap(b);
      if(Math.max(bm.width,bm.height)<700)continue;
      await dbPut(id,{blob:b,murl:c.m.murl,purl:c.m.purl||'',score:c.s,a:c.a,w:bm.width,h:bm.height,q});
      return {id,ok:1,s:+c.s.toFixed(2),w:bm.width,h:bm.height,host:new URL(c.m.murl).host,sym:+Math.max(c.a.sh,c.a.sv).toFixed(2)};
    }catch(e){}
  }
  window.__P[id]={cands:sc.slice(0,6).map(c=>({u:c.m.murl,s:c.s,t:c.m.turl}))};
  return {id,ok:0,best:sc[0]?+sc[0].s.toFixed(2):null};
}
async function sheet(ids){
  const all=await dbAll();const mp=Object.fromEntries(all);
  const cw=260,chh=200,cols=5;const rows=Math.ceil(ids.length/cols);const c=document.createElement('canvas');c.width=cw*cols;c.height=chh*rows;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.font='13px sans-serif';
  for(let k=0;k<ids.length;k++){const v=mp[ids[k]];const ox=(k%cols)*cw,oy=Math.floor(k/cols)*chh;x.strokeStyle='#ccc';x.strokeRect(ox,oy,cw,chh);x.fillStyle='#c00';x.fillText(k+' '+ids[k].slice(0,30),ox+3,oy+13);
    if(!v)continue;const bm=await createImageBitmap(v.blob);const s=Math.min((cw-8)/bm.width,(chh-22)/bm.height);x.drawImage(bm,ox+4,oy+18,bm.width*s,bm.height*s)}
  let d=document.getElementById('__sheet');if(!d){d=document.createElement('div');d.id='__sheet';d.style.cssText='position:fixed;inset:0;z-index:999999;background:#fff;overflow:auto';document.body.appendChild(d)}
  d.innerHTML='';c.style.width='100%';d.appendChild(c);
}
function crc32(buf){let c,crc=0xFFFFFFFF;for(let n=0;n<buf.length;n++){c=(crc^buf[n])&0xFF;for(let k=0;k<8;k++)c=c&1?(c>>>1)^0xEDB88320:c>>>1;crc=(crc>>>8)^c}return (crc^0xFFFFFFFF)>>>0}
async function zip(ids){
  const all=await dbAll();const enc=new TextEncoder();const parts=[],cen=[];let off=0;const meta={};
  for(const [k,v] of all){if(ids&&!ids.includes(k))continue;const ext=(v.blob.type.split('/')[1]||'jpg').replace('jpeg','jpg');const name=enc.encode(k+'.'+ext);const data=new Uint8Array(await v.blob.arrayBuffer());const crc=crc32(data);
    meta[k]={murl:v.murl,purl:v.purl,w:v.w,h:v.h,score:v.score,q:v.q};
    const lh=new DataView(new ArrayBuffer(30));lh.setUint32(0,0x04034b50,true);lh.setUint16(4,20,true);lh.setUint32(14,crc,true);lh.setUint32(18,data.length,true);lh.setUint32(22,data.length,true);lh.setUint16(26,name.length,true);
    parts.push(new Uint8Array(lh.buffer),name,data);
    const ch=new DataView(new ArrayBuffer(46));ch.setUint32(0,0x02014b50,true);ch.setUint16(4,20,true);ch.setUint16(6,20,true);ch.setUint32(16,crc,true);ch.setUint32(20,data.length,true);ch.setUint32(24,data.length,true);ch.setUint16(28,name.length,true);ch.setUint32(42,off,true);
    cen.push(new Uint8Array(ch.buffer),name);off+=30+name.length+data.length}
  const mj=enc.encode(JSON.stringify(meta));const mname=enc.encode('meta.json');const mcrc=crc32(mj);
  {const lh=new DataView(new ArrayBuffer(30));lh.setUint32(0,0x04034b50,true);lh.setUint16(4,20,true);lh.setUint32(14,mcrc,true);lh.setUint32(18,mj.length,true);lh.setUint32(22,mj.length,true);lh.setUint16(26,mname.length,true);parts.push(new Uint8Array(lh.buffer),mname,mj);
   const ch=new DataView(new ArrayBuffer(46));ch.setUint32(0,0x02014b50,true);ch.setUint16(4,20,true);ch.setUint16(6,20,true);ch.setUint32(16,mcrc,true);ch.setUint32(20,mj.length,true);ch.setUint32(24,mj.length,true);ch.setUint16(28,mname.length,true);ch.setUint32(42,off,true);cen.push(new Uint8Array(ch.buffer),mname);off+=30+mname.length+mj.length}
  const cenLen=cen.reduce((a,b)=>a+b.length,0);const end=new DataView(new ArrayBuffer(22));end.setUint32(0,0x06054b50,true);end.setUint16(8,cen.length/2,true);end.setUint16(10,cen.length/2,true);end.setUint32(12,cenLen,true);end.setUint32(16,off,true);
  return new Blob([...parts,...cen,new Uint8Array(end.buffer)],{type:'application/zip'});
}
async function dlButton(name,ids){const b=await zip(ids);const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.textContent='INDIR '+name;a.id='__dl';a.style.cssText='position:fixed;left:20px;top:20px;z-index:9999999;background:red;color:#fff;font-size:40px;padding:20px';document.getElementById('__dl')?.remove();document.body.appendChild(a);return b.size}
async function runBatch(list){window.__st='run';window.__res=[];for(const [id,q] of list){try{window.__res.push(await pick(id,q))}catch(e){window.__res.push({id,ok:0,err:String(e)})}window.__st=window.__res.length+'/'+list.length}window.__st='done'}
Object.assign(window,{bgpick:pick,bgsheet:sheet,bgzip:zip,bgdl:dlButton,bgrun:runBatch,bgall:dbAll,bgdel:dbDel,bgput:dbPut,bgsearch:search,bganalyze:analyze});
})();
'ok'
