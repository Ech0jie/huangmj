const advertise = document.querySelector('.advertise');
const body = document.querySelector('body');
const btn = document.querySelector('.advertise .btn');
const html = document.querySelector('html');
let layer = null; // 弹窗

let first = true;

init();

let goTop = document.createElement('div');
goTop.innerHTML = '<div class="go_top_adv"><svg t="1731596237559" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3377" width="32" height="32"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z" fill="#2c2c2c" p-id="3378"></path><path d="M533.333333 307.2c-12.8-10.666667-32-10.666667-44.8 0l-181.333333 170.666667c-12.8 12.8-12.8 32-2.133333 44.8s32 12.8 44.8 2.133333l128-119.466667v277.333334c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V405.333333l128 119.466667c6.4 6.4 14.933333 8.533333 21.333333 8.533333 8.533333 0 17.066667-4.266667 23.466667-10.666666 12.8-12.8 10.666667-34.133333-2.133334-44.8l-179.2-170.666667z" fill="#2c2c2c" p-id="3379"></path></svg><div>回顶部</div></div>'
goTop.className = 'aside_go_top';

let flag = true;
window.addEventListener('scroll', (e) => {

  if (flag && window.scrollY >= 10) {
    body.appendChild(goTop);
    flag = false;
  } else if (body.querySelector('.aside_go_top') && window.scrollY < 10) {
    body.removeChild(goTop);
    flag = true;
  }
})

goTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})


btn.addEventListener('click', () => {
  if (body.querySelector('.advertise_layer')) return
  body.appendChild(layer);
  body.classList.add('body_mask');
  const close = document.querySelector('.close_advertise');
  close.addEventListener('click', () => {
    const l = document.querySelector('.advertise_layer');
    body.classList.remove('body_mask');
    body.removeChild(l);
    first = true;
    window.removeEventListener('click', closeLayer);
  });
  window.addEventListener('click', closeLayer);

}, true)

function closeLayer(e) {
  e.preventDefault();
  if (!first && e.target.className !== 'advertise_layer' ) {
    if (e.target.closest('.advertise_layer')?.className === 'advertise_layer') return
    body.classList.remove('body_mask');
    body.removeChild(layer);
    first = true;
    window.removeEventListener('click', closeLayer);
  } else {
    first = false;
  }
}

window.addEventListener('error', (e) => {
  if (e.message.indexOf('removeChild') !== -1) {
    const l = document.querySelector('.advertise_layer');
    body.classList.remove('body_mask');
    body.removeChild(layer);
    window.removeEventListener('click', closeLayer);
  }

})

function init() {
  layer = document.createElement('div');
  layer.className = 'advertise_layer';
  layer.innerHTML = content();
}


function content() {
  return `
    <!doctype html>
<html class="no-js" lang="en">
  <head>
    <link rel="stylesheet" href="asset/css/docs.css" />    
  </head>
  <body class="antialiased advertise hide-extras">
    <div class="close_advertise"><svg style="width: 100%; height: 100%;" t="1733380604588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1157" width="200" height="200"><path d="M558.933333 512l320-320c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L512 465.066667 192 149.333333c-12.8-12.8-34.133333-12.8-46.933333 0s-12.8 34.133333 0 46.933334l320 320-320 320c-12.8 12.8-12.8 34.133333 0 46.933333 4.266667 4.266667 12.8 8.533333 21.333333 8.533333s17.066667-4.266667 21.333333-8.533333l320-320 320 320c4.266667 4.266667 12.8 8.533333 21.333334 8.533333s17.066667-4.266667 21.333333-8.533333c12.8-12.8 12.8-34.133333 0-46.933333L558.933333 512z" p-id="1158">
          </path></svg></div>
    <div class="marketing off-canvas-wrap" data-offcanvas>
    
      <div class="inner-wrap">

      

        <section id="main-content" role="main" class="scroll-container">
        
        <div class="row" style='display: flex; justify-content: center; position: relative'>
            
            <div class="large-9 medium-9 columns">

 <div class="markdown-body">
 
<h1 style="text-align: center;">【考证福利】机构：天融信</h1>

<p style="text-align: center;">联系方式：<br />
微信：cispbk  （备注：huangmj）<br />
<img src="media/17326096063237/17326096499916.jpg" alt="" /></p>
<h3><a id="%E4%B8%80%E3%80%81%E6%8A%A5%E5%90%8D%E8%B4%B9%E7%94%A8%EF%BC%9A" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>一、报名费用：</h3>
<p>🔥<strong>CISP  5200元</strong><br />
🔥<strong>CISP-PTE  7500元</strong><br />
🔥<strong>NISP二级  3200元</strong><br />
CISP-DSG  6500元<br />
CISP-DSO  9000元<br />
NISP一级  380元<br />
包含所有费用，考试费+官网培训费（有班级群，班主任的那种，跟我们线下学员一样）+补考机会+3年证书维持费用</p>
<h3><a id="%E4%BA%8C%E3%80%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%80%83cisp%E7%B1%BB%E8%AF%81%E4%B9%A6%EF%BC%9A" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>二、为什么要考CISP类证书：</h3>
<p><strong>对个人</strong><br />
安全工作岗位广受认可的证书；<br />
国内信息安全从业人员高级别能力认证；<br />
应聘网络安全相关岗位的必备证书，加分项<br />
<strong>对企业</strong><br />
在国内承接网络安全项目必备证书之一，主要用于投标，项目实施<br />
申请信息安全服务相关资质必备证书之一</p>
<h3><a id="%E4%B8%89%E3%80%81%E6%8A%A5%E5%90%8D%E6%B5%81%E7%A8%8B%EF%BC%9A" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>三、报名流程：</h3>
<p>1、在您付款后，填写好报名材料给我们，3个工作日之内为您开通天融信官方课程账号<br />
  a. 注册<br />
  电脑端进入网址&quot;<a href="https://www.topsec-edu.cn">https://www.topsec-edu.cn</a>&quot; → 点击右上角“登录” → 微信扫码登录并绑定手机号（注意：第一步微信登录，第二步绑定手机号需全部进行，手机号为报名时登记的手机号，缺一不可）<br />
  b.登录观看<br />
  移动端：关注公众号“天融信教育官微”—我的—个人中心—左上角”我的已购“，选择对应课程观看直播。<br />
电脑端：进入网址“<a href="https://www.topsec-edu.cn%E2%80%9D">https://www.topsec-edu.cn”</a> → 登录 → 右上角“我的已购”，选择对应课程观看直播。<br />
<img src="media/17326096063237/17326098063782.jpg" alt="" /><br />
2、可以开发票，普票和专票都可以，如果有特殊报销要求，我们也可以为同学们申请开具</p>
<h3><a id="%E5%9B%9B%E3%80%81%E5%A4%9A%E4%B9%85%E5%8F%AF%E4%BB%A5%E6%8B%BF%E8%AF%81" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>四、多久可以拿证</h3>
<p>  同学们，这个证书拿证周期比较长，2～3个月官网出成绩，5个月左右出证书，全国统一的<br />
  如果着急，期间我们可以开一个证明，有我们单位公章，有的机构也认可<br />
<img src="media/17326096063237/17326117689867.jpg" alt="" /></p>
<h3><a id="%E4%BA%94%E3%80%81%E9%9A%BE%E4%B8%8D%E9%9A%BE%EF%BC%8C%E5%AE%B9%E6%98%93%E8%80%83%E8%BF%87%E5%98%9B" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>五、难不难，容易考过嘛</h3>
<p>  在我们这通过率99.9%，毕竟天融信不是小机构，都有内部题库和靶场提供给大家练习<br />
  比如CISP考试虽然我们有配套的课程视频，但如果你没时间看视频，就背我们300题内部题库就好，考试就从里面抽100题原题考，支持线上刷题和考前测试。总共考100道选择题，1题1分，70分算过<br />
<img src="media/17326096063237/17326099216080.jpg" alt="" /></p>
<h3><a id="%E5%85%AD%E3%80%81%E5%90%8C%E5%AD%A6%E5%8F%8D%E9%A6%88" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>六、同学反馈</h3>
<p><img src="media/17326096063237/17326123416596.jpg" alt="" /></p>
<p><img src="media/17326096063237/17326120055803.jpg" alt="" /></p>
<p><img src="media/17326096063237/17326121747550.jpg" alt="" /></p>


</div>

<br /><br />



<div class="row">
<div style="padding:0px 0.93em;" class="share-comments">

</div>
</div>
</div></div>

        </section>
      </div>
    </div>
    
    
    <script src="asset/js/foundation.min.js"></script>
    <script src="asset/js/foundation/foundation.offcanvas.js"></script>
    <script>
      $(document).foundation();

     
    </script>
    


  </body>
</html>

      
  `
}