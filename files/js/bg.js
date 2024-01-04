const bg = document.querySelector(':root');
let n = Math.floor(Math.random() * 26);
if(!n) n = '';
const result = `url("https://images.weserv.nl/?url=https://malwarewatch.org/images/backgrounds/background${n}.jpg")`;

      let backgrounds = [
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702776842603_eb20f93ece05db418d14bc2901eb575b.jpeg",
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702777038179_699514778c1573e5f2a11d3b3dfff90f.jpeg",
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702777074628_e0c8d63dc2236423c028ea8af17959bf.jpeg",
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702713612440_b8c224f848359ebb472db722907e6456.jpeg",
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702776741098_39e0115476938f5d6a7c6d0a111cac2a.jpeg",
        "https://s3.bmp.ovh/imgs/2022/03/7005a446647d1673.jpg",
        "https://s3.bmp.ovh/imgs/2022/06/02/b41fe5403ade5029.jpg",
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702777757246_8990b6af28466de475ca2312fdeeab20.jpeg",
        "https://images.weserv.nl/?url=https://storage.googleapis.com/replit/images/1702777696880_9e8b90b3c719a33feefd9533a5a498a9.jpeg",
        "https://tuchuangs.com/imgs/2022/06/02/0c2ce56ef60e32dc.webp",
        "https://s3.bmp.ovh/imgs/2023/12/19/a028c4309b837e32.webp", 
        "https://i2.100024.xyz/2023/12/26/piblqe.webp", 
        "https://33b412c3-cad9-4e47-a69b-3af434b71db6-00-1y81n090x8spa.pike.replit.dev/", 
        "https://img.xjh.me/random_img.php?return=302&type=bg", 
        "httpS://www.dmoe.cc/random.php",
        "https://api.vvhan.com/api/acgimg",
        "https://api.yimian.xyz/img?size=1920x1080",
        "https://picsum.photos/1920/1080",
        "https://source.unsplash.com/random",
        localStorage.cusBG];
      function customBG(url) {
        if (url) {
          localStorage.cusBG = url;
          localStorage.currentBG = -1;
          location.reload();
        }
      }
      function switchBG(id) {
        const bg = document.querySelector(':root');
        bg.style.setProperty('--bg', `url("${backgrounds.at(id)}")`);
      }
bg.style.setProperty('--bg', localStorage.cusBG ? `url("${localStorage.cusBG}")` : result);