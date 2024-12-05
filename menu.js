// 获取移动端和PC端的aside元素
const aside = document.querySelector('aside.left-off-canvas-menu'); // 移动端
const pcAside = document.querySelector('div.hide-for-small'); // PC端

// 移动端下拉操作
aside.innerHTML = ` 
  <ul class="off-canvas-list">
    <li><a href="index.html">首页</a></li>
    <li class="divider"></li>
    <li><label>胡言乱语▼</label>
      <nav class="submenu" style="display: none;">
            <li><a title="效率工具和设置" href="17315533625266.html">效率工具和设置</a></li>
          
            <li><a title="2021级教育技术学导论复习" href="16398298130037.html">2021级教育技术学导论复习</a></li>
      </nav>
    </li>


<li class="divider"></li>
<li><label>复现笔记▼</label>
  <nav class="submenu" style="display: none;">
        <li><a title="记一次内网渗透" href="16650485445983.html">\u3000记一次内网渗透</a></li>
        <li><a title="CVE-2020-15778" href="16612347364958.html">\u3000CVE-2020-15778</a></li>
        <li><a title="CVE-2015-1635" href="16612270026775.html">\u3000CVE-2015-1635</a></li>
        <li><a title="CVE-2014-0160" href="17208756241360.html">\u3000CVE-2014-0160</a></li>
        <li><a title="CVE-2019-5736" href="17208756241254.html">\u3000CVE-2019-5736</a></li>
        <li><a title="CVE-2020-1472" href="17208756241144.html">\u3000CVE-2020-1472</a></li>
  </nav>
</li>


<li class="divider"></li>
<li><label>RedTeam▼</label>
<nav class="submenu" style="display: none;">
    <li><label class="second-level" style="font-weight: bold;">\u3000软件服务安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="C/S - Exploits" href="17308830188010.html">\u3000\u3000C/S - Exploits</a></li>
        <li><a title="DesktopApps - Exploits" href="17308830187918.html">\u3000\u3000DesktopApps - Exploits</a></li>
      </nav>
    </li>
    
    <li><label class="second-level" style="font-weight: bold;">\u3000语言安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="语言安全" href="17308830188146.html">\u3000\u3000语言安全</a></li>
        <li><a title="PHP越权审计1" href="17308830188282.html">\u3000\u3000PHP越权审计1</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">\u3000安防设备 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="Bypass_WAF" href="17308830188509.html">\u3000\u3000Bypass_WAF</a></li>
        <li><a title="SecDevice - Exploits" href="17308830188415.html">\u3000\u3000SecDevice - Exploits</a></li>
      </nav>
    </li>           

    <li><label class="second-level" style="font-weight: bold;">\u3000后渗透 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="后渗透" href="17308830189478.html">\u3000\u3000后渗透</a></li>
        <li><a title="权限提升" href="17308830188944.html">\u3000\u3000权限提升</a></li>
        <li><a title="权限维持" href="17308830188790.html">\u3000\u3000权限维持</a></li>
        
        <li><label class="third-level" style="font-weight: bold;">\u3000\u3000实验 ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="C2 实验" href="17308830189321.html">\u3000\u3000\u3000C2 实验</a></li>
            <li><a title="免杀实验" href="17308830189178.html">\u3000\u3000\u3000免杀实验</a></li>
            <li><a title="端口转发实验" href="17308830189036.html">\u3000\u3000\u3000端口转发实验</a></li>
          </nav>
        </li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">\u3000协议安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="Protocol - Exploits" href="17308830189780.html">\u3000\u3000Protocol - Exploits</a></li>
        <li><a title="DNS 安全" href="17308830189624.html">\u3000\u3000DNS 安全</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">\u3000信息收集 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="信息收集" href="17308830190272.html">\u3000\u3000信息收集</a></li>
        <li><a title="空间测绘" href="17308830190083.html">\u3000\u3000空间测绘</a></li>
        <li><a title="端口安全" href="17308830189937.html">\u3000\u3000端口安全</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">\u3000云安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="云安全" href="17308830190484.html">\u3000\u3000云安全</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">\u3000Web安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="B/S - Exploits" href="17308830195118.html">\u3000\u3000B/S - Exploits</a></li>
        <li><a title="IDOR" href="17308830194950.html">\u3000\u3000IDOR</a></li>
        <li><a title="前端攻防" href="17308830193542.html">\u3000\u3000前端攻防</a></li>

        <li><label class="third-level" style="font-weight: bold;">\u3000\u3000靶场 ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="DVWA-WalkThrough" href="17308830192041.html">\u3000\u3000\u3000DVWA-WalkThrough</a></li>
            <li><a title="XSS挑战-WalkThrough" href="17308830191884.html">\u3000\u3000\u3000XSS挑战-WalkThrough</a></li>
            <li><a title="XVWA-WalkThrough" href="17308830191730.html">\u3000\u3000\u3000XVWA-WalkThrough</a></li>
            <li><a title="pikachu-WalkThrough" href="17308830190816.html">\u3000\u3000\u3000pikachu-WalkThrough</a></li>
            <li><a title="upload-labs-WalkThrough" href="17308830190585.html">\u3000\u3000\u3000upload-labs-WalkThrough</a></li>
          </nav>
        </li>
        
        <li><label class="third-level" style="font-weight: bold;">\u3000\u3000Web_Tricks ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="HTTP_request_smuggling" href="17308830193842.html">\u3000\u3000\u3000HTTP_request_smuggling</a></li>
            <li><a title="JWT 安全" href="17308830193740.html">\u3000\u3000\u3000JWT 安全</a></li>
            <li><a title="OOB" href="17308830193641.html">\u3000\u3000\u3000OOB</a></li>
          </nav>
        </li>

        <li><label class="third-level" style="font-weight: bold;">\u3000\u3000Web_Generic ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="SQLi" href="17308830194796.html">\u3000\u3000\u3000SQLi</a></li>
            <li><a title="SSRF" href="17308830194683.html">\u3000\u3000\u3000SSRF</a></li>
            <li><a title="SSTI" href="17308830194582.html">\u3000\u3000\u3000SSTI</a></li>
            <li><a title="Upload" href="17308830194424.html">\u3000\u3000\u3000Upload</a></li>
            <li><a title="Web Generic" href="17308830194250.html">\u3000\u3000\u3000Web Generic</a></li>
            <li><a title="XSS" href="17308830194098.html">\u3000\u3000\u3000XSS</a></li>
            <li><a title="XXE" href="17308830193942.html">\u3000\u3000\u3000XXE</a></li>
          </nav>
        </li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">\u3000OS安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="Linux 安全" href="17308830196170.html">\u3000\u3000Linux 安全</a></li>
        <li><a title="OS - Exploits" href="17308830196065.html">\u3000\u3000OS - Exploits</a></li>
        <li><a title="Windows 安全" href="17308830195771.html">\u3000\u3000Windows 安全</a></li>
        
        <li><label class="third-level" style="font-weight: bold;">\u3000\u3000实验 ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="NTLM中继" href="17308830195554.html">\u3000\u3000\u3000NTLM中继</a></li>
            <li><a title="Responder欺骗" href="17308830195345.html">\u3000\u3000\u3000Responder欺骗</a></li>
          </nav>
        </li>
      </nav>
    </li>
        
  </nav>
</li>


<li class="divider"></li>
<li><label>BlueTeam▼</label>
  <nav class="submenu" style="display: none;">
    <li><a title="分析" href="17208756261294.html">\u3000分析</a></li>
    <li><a title="加固" href="17208756261136.html">\u3000加固</a></li>
    <li><a title="取证" href="17208756260919.html">\u3000取证</a></li>
    <li><a title="应急" href="17208756259749.html">\u3000应急</a></li>
    <li><a title="监察" href="17208756259620.html">\u3000监察</a></li>
      <li><label class="second-level" style="font-weight: bold;">\u3000笔记 ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="USB取证" href="17208756259493.html">\u3000\u3000USB取证</a></li>
          
            <li><a title="内存取证" href="17208756259359.html">\u3000\u3000内存取证</a></li>
          
            <li><a title="磁盘取证" href="17208756259272.html">\u3000\u3000磁盘取证</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">\u3000实验 ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="ClamAV 部署" href="17208756260765.html">\u3000\u3000ClamAV 部署</a></li>
          
            <li><a title="yara 实验" href="17208756260551.html">\u3000\u3000yara 实验</a></li>
          
            <li><a title="安防设施搭建使用" href="17208756260404.html">\u3000\u3000安防设施搭建使用</a></li>
          
            <li><a title="流量分析" href="17208756259876.html">\u3000\u3000流量分析</a></li>
        </nav>
      </li>

  </nav>
</li>


<li class="divider"></li>
<li><label>VulnHub▼</label>
  <nav class="submenu" style="display: none;">
      <li><label class="second-level" style="font-weight: bold;">\u3000symfonos ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="symfonos1-WalkThrough" href="17208756239050.html">\u3000\u3000symfonos1-WalkThrough</a></li>
          
            <li><a title="symfonos2-WalkThrough" href="17208756238918.html">\u3000\u3000symfonos2-WalkThrough</a></li>
          
            <li><a title="symfonos3-WalkThrough" href="17208756238759.html">\u3000\u3000ymfonos3-WalkThrough</a></li>
          
            <li><a title="symfonos5-WalkThrough" href="17208756238669.html">\u3000\u3000symfonos5-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">\u3000Mission-Pumpkin ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="PumpkinFestival-WalkThrough" href="17208756239366.html">\u3000\u3000PumpkinFestival-WalkThrough</a></li>
          
            <li><a title="PumpkinGarden-WalkThrough" href="17208756239283.html">\u3000\u3000PumpkinGarden-WalkThrough</a></li>
          
            <li><a title="PumpkinRaising-WalkThrough" href="17208756239177.html">\u3000\u3000PumpkinRaising-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">\u3000Kioptrix ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="Kioptrix2-WalkThrough" href="17208756239816.html">\u3000\u3000Kioptrix2-WalkThrough</a></li>
          
            <li><a title="Kioptrix3-WalkThrough" href="17208756239702.html">\u3000\u3000Kioptrix3-WalkThrough</a></li>
          
            <li><a title="Kioptrix4-WalkThrough" href="17208756239602.html">\u3000\u3000Kioptrix4-WalkThrough</a></li>
          
            <li><a title="Kioptrix5-WalkThrough" href="17208756239481.html">\u3000\u3000Kioptrix5-WalkThrough</a></li>
          
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">\u3000It’s_October ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="It’s_October1-WalkThrough" href="17308830180672.html">\u3000\u3000It’s_October1-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">\u3000DC ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="DC1-WalkThrough" href="17208756241011.html">\u3000\u3000DC1-WalkThrough</a></li>
          
            <li><a title="DC2-WalkThrough" href="17208756240897.html">\u3000\u3000DC2-WalkThrough</a></li>
          
            <li><a title="DC3-WalkThrough" href="17208756240761.html">\u3000\u3000DC3-WalkThrough</a></li>
          
            <li><a title="DC4-WalkThrough" href="17208756240644.html">\u3000\u3000DC4-WalkThrough</a></li>
          
            <li><a title="DC5-WalkThrough" href="17208756240540.html">\u3000\u3000DC5-WalkThrough</a></li>
          
            <li><a title="DC6-WalkThrough" href="17208756240432.html">\u3000\u3000DC6-WalkThrough</a></li>
          
            <li><a title="DC7-WalkThrough" href="17208756240297.html">\u3000\u3000DC7-WalkThrough</a></li>
          
            <li><a title="DC8-WalkThrough" href="17208756240185.html">\u3000\u3000DC8-WalkThrough</a></li>
          
            <li><a title="DC9-WalkThrough" href="17208756240051.html">\u3000\u3000DC9-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">\u3000HTB Explorer ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="HTB Explorer - 手机渗透测试初探" href="17110727478503.html">\u3000\u3000HTB Explorer - 手机渗透测试初探</a></li>
          
            <li><a title="HTB PivotAPI - 疯狂难度、复杂域渗透和逆向启蒙靶机" href="17111584472102.html">\u3000\u3000HTB PivotAPI - 疯狂难度、复杂域渗透和逆向启蒙靶机</a></li>
          
        </nav>
      </li>           


  </nav>
</li>  
  

<li class="divider"></li>
<li><label>CTF▼</label>
  <nav class="submenu" style="display: none;">
    <li><a title="CTF" href="17208756259185.html">\u3000CTF</a></li>
    <li><a title="上午" href="17208756259041.html">\u3000上午</a></li>
    <li><a title="Web" href="17208756258872.html">\u3000Web</a></li>
    <li><a title="web" href="17208756258440.html">\u3000web</a></li>
    <li><a title="签到题" href="17208756258248.html">\u3000签到题</a></li>
    <li><a title="记一次CTF" href="17208756258703.html">\u3000记一次CTF</a></li>
    <li><a title="2021玄盾杯" href="16351357395299.html">\u30002021玄盾杯</a></li>
  </nav>
</li>


<li class="divider"></li>
<li><label>社会工程学▼</label>
  <nav class="submenu" style="display: none;">
    <li><a title="前言" href="16361738846050.html">\u3000前言</a></li>
    <li><a title="Java Applet Attack Method" href="16361738968551.html">\u3000Java Applet攻击方法</a></li>
    <li><a title="Credential Harvester Attack Method" href="16361739453904.html">\u3000凭证收集攻击方法</a></li>
    <li><a title="DNS Spoofing Attack Method" href="16361739612757.html">\u3000DNS欺骗攻击方法</a></li>
  </nav>
</li>

<li class="divider"></li>
<li><label>安全工具▼</label>
    <nav class="submenu" style="display: none;">
    <li><a title="Burp Suite" href="17208756243841.html">\u3000Burp Suite</a></li>
    <li><a title="CobaltStrike" href="17208756243190.html">\u3000CobaltStrike</a></li>
    <li><a title="Ghidra" href="17208756243096.html">\u3000Ghidra</a></li>
    <li><a title="Hashcat" href="17208756242966.html">\u3000Hashcat</a></li>
    <li><a title="IDA" href="17208756242850.html">\u3000IDA</a></li>
    <li><a title="Kali" href="17208756242765.html">\u3000Kali</a></li>
    <li><a title="Metasploit" href="17208756242649.html">\u3000Metasploit</a></li>
    <li><a title="Nmap" href="17208756242562.html">\u3000Nmap</a></li>
    <li><a title="SET" href="17208756242481.html">\u3000SET</a></li>
    <li><a title="Sysmon" href="17208756242401.html">\u3000Sysmon</a></li>
    <li><a title="Volatility" href="17208756241935.html">\u3000Volatility</a></li>
    <li><a title="Wfuzz" href="17208756241854.html">\u3000Wfuzz</a></li>
    <li><a title="Wireshark" href="17208756241770.html">\u3000Wireshark</a></li>
    <li><a title="Aircrack" href="17208756241692.html">\u3000Aircrack</a></li>
    <li><a title="Mimikatz" href="17208756241558.html">\u3000Mimikatz</a></li>
    <li><a title="nuclei" href="17208756241501.html">\u3000nuclei</a></li>
    <li><a title="Sqlmap" href="17208756241418.html">\u3000Sqlmap</a></li>
  </nav>
</li>


<li class="divider"></li>
<li><label>小项目▼</label>
  <nav class="submenu" style="display: none;">
    <li><a title="2020.3.18" href="http://www.huangmj.com:7999">\u3000疫情实时监控</a></li>
    <li><a title="2022.8.07" href="http://www.huangmj.com:7998" target="_blank">\u3000高铁里程碑</a></li>
    <li><a title="2024.3.10" href="http://www.huangmj.com/suanfa" target="_blank">\u3000数据结构与算法(Python)</a></li>
  </nav>
</li>

  </ul>
`;

pcAside.innerHTML = `
<div class="sidebar">
<nav>
<ul id="side-nav" class="side-nav transparent-scrollbar" style="position: fixed; top: 54px; left: 91px; height: 83%; width: 250px; padding: 10px; overflow: auto">
  <li class="side-title"><span>胡言乱语▼</span>
    <nav class="submenu" style="display: none;">
            <li><a title="效率工具和设置" href="17315533625266.html">效率工具和设置</a></li>
            <li><a title="2021级教育技术学导论复习" href="16398298130037.html">2021级教育技术学导论复习</a></li>
    </nav>
  </li>
  
  
  
  <li class="side-title"><span>复现笔记▼</span>
    <nav class="submenu" style="display: none;">
      <li><a title="记一次内网渗透" href="16650485445983.html">记一次内网渗透</a></li>
      <li><a title="CVE-2020-15778" href="16612347364958.html">CVE-2020-15778</a></li>
      <li><a title="CVE-2015-1635" href="16612270026775.html">CVE-2015-1635</a></li>
      <li><a title="CVE-2014-0160" href="17208756241360.html">CVE-2014-0160</a></li>
      <li><a title="CVE-2019-5736" href="17208756241254.html">CVE-2019-5736</a></li>
      <li><a title="CVE-2020-1472" href="17208756241144.html">CVE-2020-1472</a></li>
    </nav>
  </li>


<li class="side-title"><span>RedTeam▼</span>
  <nav class="submenu" style="display: none;">

    <li><label class="second-level" style="font-weight: bold;">软件服务安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="C/S - Exploits" href="17308830188010.html">\u3000C/S - Exploits</a></li>
        <li><a title="DesktopApps - Exploits" href="17308830187918.html">\u3000DesktopApps - Exploits</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">语言安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="语言安全" href="17308830188146.html">\u3000语言安全</a></li>
        <li><a title="PHP越权审计1" href="17308830188282.html">\u3000PHP越权审计1</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">安防设备 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="Bypass_WAF" href="17308830188509.html">\u3000Bypass_WAF</a></li>
        <li><a title="SecDevice - Exploits" href="17308830188415.html">\u3000SecDevice - Exploits</a></li>
      </nav>
    </li>           

    <li><label class="second-level" style="font-weight: bold;">后渗透 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="后渗透" href="17308830189478.html">\u3000后渗透</a></li>
        <li><a title="权限提升" href="17308830188944.html">\u3000权限提升</a></li>
        <li><a title="权限维持" href="17308830188790.html">\u3000权限维持</a></li>
        
        <li><label class="third-level" style="font-weight: bold;">实验 ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="C2 实验" href="17308830189321.html">\u3000\u3000C2 实验</a></li>
            <li><a title="免杀实验" href="17308830189178.html">\u3000\u3000免杀实验</a></li>
            <li><a title="端口转发实验" href="17308830189036.html">\u3000\u3000端口转发实验</a></li>
          </nav>
        </li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">协议安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="Protocol - Exploits" href="17308830189780.html">\u3000Protocol - Exploits</a></li>
        <li><a title="DNS 安全" href="17308830189624.html">\u3000DNS 安全</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">信息收集 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="信息收集" href="17308830190272.html">\u3000信息收集</a></li>
        <li><a title="空间测绘" href="17308830190083.html">\u3000空间测绘</a></li>
        <li><a title="端口安全" href="17308830189937.html">\u3000端口安全</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">云安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="云安全" href="17308830190484.html">\u3000云安全</a></li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">Web安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="B/S - Exploits" href="17308830195118.html">\u3000B/S - Exploits</a></li>
        <li><a title="IDOR" href="17308830194950.html">\u3000IDOR</a></li>
        <li><a title="前端攻防" href="17308830193542.html">\u3000前端攻防</a></li>

        <li><label class="third-level" style="font-weight: bold;">靶场 ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="DVWA-WalkThrough" href="17308830192041.html">\u3000\u3000DVWA-WalkThrough</a></li>
            <li><a title="XSS挑战-WalkThrough" href="17308830191884.html">\u3000\u3000XSS挑战-WalkThrough</a></li>
            <li><a title="XVWA-WalkThrough" href="17308830191730.html">\u3000\u3000XVWA-WalkThrough</a></li>
            <li><a title="pikachu-WalkThrough" href="17308830190816.html">\u3000\u3000pikachu-WalkThrough</a></li>
            <li><a title="upload-labs-WalkThrough" href="17308830190585.html">\u3000\u3000upload-labs-WalkThrough</a></li>
          </nav>
        </li>
        
        <li><label class="third-level" style="font-weight: bold;">Web_Tricks ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="HTTP_request_smuggling" href="17308830193842.html">\u3000\u3000HTTP_request_smuggling</a></li>
            <li><a title="JWT 安全" href="17308830193740.html">\u3000\u3000JWT 安全</a></li>
            <li><a title="OOB" href="17308830193641.html">\u3000\u3000OOB</a></li>
          </nav>
        </li>

        <li><label class="third-level" style="font-weight: bold;">Web_Generic ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="SQLi" href="17308830194796.html">\u3000\u3000SQLi</a></li>
            <li><a title="SSRF" href="17308830194683.html">\u3000\u3000SSRF</a></li>
            <li><a title="SSTI" href="17308830194582.html">\u3000\u3000SSTI</a></li>
            <li><a title="Upload" href="17308830194424.html">\u3000\u3000Upload</a></li>
            <li><a title="Web Generic" href="17308830194250.html">\u3000\u3000Web Generic</a></li>
            <li><a title="XSS" href="17308830194098.html">\u3000\u3000XSS</a></li>
            <li><a title="XXE" href="17308830193942.html">\u3000\u3000XXE</a></li>
          </nav>
        </li>
      </nav>
    </li>

    <li><label class="second-level" style="font-weight: bold;">OS安全 ⇕</label>
      <nav class="submenu" style="display: none;">
        <li><a title="Linux 安全" href="17308830196170.html">\u3000Linux 安全</a></li>
        <li><a title="OS - Exploits" href="17308830196065.html">\u3000OS - Exploits</a></li>
        <li><a title="Windows 安全" href="17308830195771.html">\u3000Windows 安全</a></li>
        
        <li><label class="third-level" style="font-weight: bold;">实验 ⇕</label>
          <nav class="submenu" style="display: none;">
            <li><a title="NTLM中继" href="17308830195554.html">\u3000\u3000NTLM中继</a></li>
            <li><a title="Responder欺骗" href="17308830195345.html">\u3000\u3000Responder欺骗</a></li>
          </nav>
        </li>
      </nav>
    </li>
    
  </nav>
</li>




  <li class="side-title"><span>BlueTeam▼</span>
    <nav class="submenu" style="display: none;">
      <li><a title="分析" href="17208756261294.html">分析</a></li>
      <li><a title="加固" href="17208756261136.html">加固</a></li>
      <li><a title="取证" href="17208756260919.html">取证</a></li>
      <li><a title="应急" href="17208756259749.html">应急</a></li>
      <li><a title="监察" href="17208756259620.html">监察</a></li>

      <li><label class="second-level" style="font-weight: bold;">笔记 ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="USB取证" href="17208756259493.html">\u3000USB取证</a></li>
          
            <li><a title="内存取证" href="17208756259359.html">\u3000内存取证</a></li>
          
            <li><a title="磁盘取证" href="17208756259272.html">\u3000磁盘取证</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">实验 ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="ClamAV 部署" href="17208756260765.html">\u3000ClamAV 部署</a></li>
          
            <li><a title="yara 实验" href="17208756260551.html">\u3000yara 实验</a></li>
          
            <li><a title="安防设施搭建使用" href="17208756260404.html">\u3000安防设施搭建使用</a></li>
          
            <li><a title="流量分析" href="17208756259876.html">\u3000流量分析</a></li>
        </nav>
      </li>
    </nav>
  </li>


  <li class="side-title"><span>VulnHub▼</span>
    <nav class="submenu" style="display: none;">
      <li><label class="second-level" style="font-weight: bold;">Symfonos ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="symfonos1-WalkThrough" href="17208756239050.html">\u3000symfonos1-WalkThrough</a></li>
          
            <li><a title="symfonos2-WalkThrough" href="17208756238918.html">\u3000symfonos2-WalkThrough</a></li>
          
            <li><a title="symfonos3-WalkThrough" href="17208756238759.html">\u3000ymfonos3-WalkThrough</a></li>
          
            <li><a title="symfonos5-WalkThrough" href="17208756238669.html">\u3000symfonos5-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">Mission-Pumpkin ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="PumpkinFestival-WalkThrough" href="17208756239366.html">\u3000PumpkinFestival-WalkThrough</a></li>
          
            <li><a title="PumpkinGarden-WalkThrough" href="17208756239283.html">\u3000PumpkinGarden-WalkThrough</a></li>
          
            <li><a title="PumpkinRaising-WalkThrough" href="17208756239177.html">\u3000PumpkinRaising-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">Kioptrix ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="Kioptrix2-WalkThrough" href="17208756239816.html">\u3000Kioptrix2-WalkThrough</a></li>
          
            <li><a title="Kioptrix3-WalkThrough" href="17208756239702.html">\u3000Kioptrix3-WalkThrough</a></li>
          
            <li><a title="Kioptrix4-WalkThrough" href="17208756239602.html">\u3000Kioptrix4-WalkThrough</a></li>
          
            <li><a title="Kioptrix5-WalkThrough" href="17208756239481.html">\u3000Kioptrix5-WalkThrough</a></li>
          
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">It’s_October ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="It’s_October1-WalkThrough" href="17308830180672.html">\u3000It’s_October1-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">DC ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="DC1-WalkThrough" href="17208756241011.html">\u3000DC1-WalkThrough</a></li>
          
            <li><a title="DC2-WalkThrough" href="17208756240897.html">\u3000DC2-WalkThrough</a></li>
          
            <li><a title="DC3-WalkThrough" href="17208756240761.html">\u3000DC3-WalkThrough</a></li>
          
            <li><a title="DC4-WalkThrough" href="17208756240644.html">\u3000DC4-WalkThrough</a></li>
          
            <li><a title="DC5-WalkThrough" href="17208756240540.html">\u3000DC5-WalkThrough</a></li>
          
            <li><a title="DC6-WalkThrough" href="17208756240432.html">\u3000DC6-WalkThrough</a></li>
          
            <li><a title="DC7-WalkThrough" href="17208756240297.html">\u3000DC7-WalkThrough</a></li>
          
            <li><a title="DC8-WalkThrough" href="17208756240185.html">\u3000DC8-WalkThrough</a></li>
          
            <li><a title="DC9-WalkThrough" href="17208756240051.html">\u3000DC9-WalkThrough</a></li>
        </nav>
      </li>

      <li><label class="second-level" style="font-weight: bold;">HTB Explorer ⇕</label>
        <nav class="submenu" style="display: none;">
            <li><a title="HTB Explorer - 手机渗透测试初探" href="17110727478503.html">\u3000HTB Explorer - 手机渗透测试初探</a></li>
          
            <li><a title="HTB PivotAPI - 疯狂难度、复杂域渗透和逆向启蒙靶机" href="17111584472102.html">\u3000HTB PivotAPI - 疯狂难度、复杂域渗透和逆向启蒙靶机</a></li>
          
        </nav>
      </li>
    </nav>
  </li>

  <li class="side-title"><span>CTF▼</span>
    <nav class="submenu" style="display: none;">
        <li><a title="CTF" href="17208756259185.html">CTF</a></li>
        <li><a title="上午" href="17208756259041.html">上午</a></li>
        <li><a title="Web" href="17208756258872.html">Web</a></li>
        <li><a title="web" href="17208756258440.html">web</a></li>
        <li><a title="签到题" href="17208756258248.html">签到题</a></li>
        <li><a title="记一次CTF" href="17208756258703.html">记一次CTF</a></li>
        <li><a title="2021玄盾杯" href="16351357395299.html">2021玄盾杯</a></li>
    </nav>
  </li>

  <li class="side-title"><span>社会工程学▼</span>
    <nav class="submenu" style="display: none;">
      <li><a title="前言" href="16361738846050.html">前言</a></li>
      <li><a title="Java Applet Attack Method" href="16361738968551.html">Java Applet攻击方法</a></li>
      <li><a title="Credential Harvester Attack Method" href="16361739453904.html">凭证收集攻击方法</a></li>
      <li><a title="DNS Spoofing Attack Method" href="16361739612757.html">DNS欺骗攻击方法</a></li>
    </nav>
  </li>

  <li class="side-title"><span>安全工具▼</span>
    <nav class="submenu" style="display: none;">
      <li><a title="Burp Suite" href="17208756243841.html">Burp Suite</a></li>
      <li><a title="CobaltStrike" href="17208756243190.html">CobaltStrike</a></li>
      <li><a title="Ghidra" href="17208756243096.html">Ghidra</a></li>
      <li><a title="Hashcat" href="17208756242966.html">Hashcat</a></li>
      <li><a title="IDA" href="17208756242850.html">IDA</a></li>
      <li><a title="Kali" href="17208756242765.html">Kali</a></li>
      <li><a title="Metasploit" href="17208756242649.html">Metasploit</a></li>
      <li><a title="Nmap" href="17208756242562.html">Nmap</a></li>
      <li><a title="SET" href="17208756242481.html">SET</a></li>
      <li><a title="Sysmon" href="17208756242401.html">Sysmon</a></li>
      <li><a title="Volatility" href="17208756241935.html">Volatility</a></li>
      <li><a title="Wfuzz" href="17208756241854.html">Wfuzz</a></li>
      <li><a title="Wireshark" href="17208756241770.html">Wireshark</a></li>
      <li><a title="Aircrack" href="17208756241692.html">Aircrack</a></li>
      <li><a title="Mimikatz" href="17208756241558.html">Mimikatz</a></li>
      <li><a title="nuclei" href="17208756241501.html">nuclei</a></li>
      <li><a title="Sqlmap" href="17208756241418.html">Sqlmap</a></li>
    </nav>
  </li>

  
  <li class="side-title"><span>小项目▼</span>
    <nav class="submenu" style="display: none;">
      <li><a title="2020.3.18" href="http://www.huangmj.com:7999">疫情实时监控</a></li>
      <li><a title="2022.8.07" href="http://www.huangmj.com:7998" target="_blank">高铁里程碑</a></li>
      <li><a title="2024.3.10" href="http://www.huangmj.com/suanfa" target="_blank">数据结构与算法(Python)</a></li>
    </nav>
  </li>
  
</ul>
</nav>
</div>
`;




// 页面加载时初始化子菜单的状态
function initializeSubmenus() {
  const labels = document.querySelectorAll('label');
  const spans = document.querySelectorAll('span');

  labels.forEach(label => {
    const submenu = label.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      const labelText = label.textContent.trim();
      const storedState = localStorage.getItem(labelText);
      submenu.style.display = storedState === 'true' ? 'block' : 'none';
    }
  });

  spans.forEach(span => {
    const submenu = span.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      const spanText = span.textContent.trim();
      const storedState = localStorage.getItem(spanText);
      submenu.style.display = storedState === 'true' ? 'block' : 'none';
    }
  });
}

// 切换子菜单显示/隐藏
function toggleSubmenu(event) {
  const submenu = event.target.nextElementSibling;
  if (submenu && submenu.classList.contains('submenu')) {
    const isVisible = submenu.style.display === 'block';
    submenu.style.display = isVisible ? 'none' : 'block';
    const key = event.target.textContent.trim();
    localStorage.setItem(key, isVisible ? 'false' : 'true');
  }
}

// 保存滚动位置
function saveScrollPosition() {
  const sideNav = document.getElementById('side-nav');
  if (sideNav) {
    localStorage.setItem('scrollPosition', sideNav.scrollTop);
  }
}

// 恢复滚动位置
function restoreScrollPosition() {
  const sideNav = document.getElementById('side-nav');
  const savedPosition = localStorage.getItem('scrollPosition');
  if (sideNav && savedPosition !== null) {
    sideNav.scrollTop = parseInt(savedPosition, 10);
  }
}

// 为label和span标签添加点击事件
document.addEventListener("DOMContentLoaded", function () {
  const labels = document.querySelectorAll('label');
  const spans = document.querySelectorAll('span');

  labels.forEach(label => {
    label.addEventListener('click', toggleSubmenu);
  });

  spans.forEach(span => {
    span.addEventListener('click', toggleSubmenu);
  });

  // 初始化状态和滚动位置
  initializeSubmenus();
  restoreScrollPosition();
});

// 监听滚动事件并保存滚动位置
const sideNav = document.getElementById('side-nav');
if (sideNav) {
  sideNav.addEventListener('scroll', saveScrollPosition);
}


  //
  //
  // // 禁止右键菜单
  // document.addEventListener('contextmenu', function (event) {
  //   event.preventDefault();
  // });
  //
  // // 禁止文本复制
  // document.addEventListener('copy', function (event) {
  //   event.preventDefault();
  // });
  //
  // // 禁止邮件链接
  // document.addEventListener('click', function (event) {
  //   if (event.target.tagName === 'A' && event.target.href.startsWith('mailto:')) {
  //     event.preventDefault();
  //   }
  // });
  //
  // // 禁止使用 F12 开发者工具
  // document.addEventListener('keydown', function (event) {
  //   // F12 键
  //   if (event.keyCode === 123) {
  //     event.preventDefault();
  //   }
  //
  //   // Ctrl+Shift+I/J/C
  //   if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) {
  //     event.preventDefault();
  //   }
  //
  //   // Ctrl+U
  //   if (event.ctrlKey && event.key === 'U') {
  //     event.preventDefault();
  //   }
  //
  //   // Ctrl+S
  //   if (event.ctrlKey && event.key === 'S') {
  //     event.preventDefault();
  //   }
  // });
  //
  // // 防止使用开发者工具
  // setInterval(function () {
  //   // 通过检测开发者工具的打开状态来防止其使用
  //   if (window.devtools) {
  //     // 这里可以选择重定向或其他处理方式
  //     window.location.reload(); // 刷新页面
  //   }
  // }, 1000);