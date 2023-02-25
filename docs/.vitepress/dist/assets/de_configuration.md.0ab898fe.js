import{_ as e,c as n,o as t,a}from"./app.7c995242.js";const m=JSON.parse('{"title":"Konfiguration","description":"","frontmatter":{},"headers":[{"level":2,"title":"API Token","slug":"api-token","link":"#api-token","children":[]},{"level":2,"title":"API Anfragen authentifizieren","slug":"api-anfragen-authentifizieren","link":"#api-anfragen-authentifizieren","children":[]},{"level":2,"title":"Ratenbegrenzung","slug":"ratenbegrenzung","link":"#ratenbegrenzung","children":[]}],"relativePath":"de/configuration.md","lastUpdated":1676483725000}'),i={name:"de/configuration.md"},r=a(`<h1 id="konfiguration" tabindex="-1">Konfiguration <a class="header-anchor" href="#konfiguration" aria-hidden="true">#</a></h1><p>Damit du unsere API nutzen kannst, musst du einige Anpassungen an deinen Code (wenn bereits vorhanden) vornehmen. Wir erklären dir hier Schritt für Schritt, wie du Anfragen an unsere API-Schnittstelle stellen kannst und wie du mit den Antworten umgehen solltest, um die API am effizientesten zu nutzen.</p><h2 id="api-token" tabindex="-1">API Token <a class="header-anchor" href="#api-token" aria-hidden="true">#</a></h2><p>Unsere API nutzt so genannte <code>Bearer</code> Token. In den Einstellungen deines Systems kannst du für deinen Account einen oder mehrere API Keys erstellen und diesen verschiedene Berechtigungen zuteilen. Solltest du die Key&#39;s an eine Dritte Person weitergeben, empfehlen wir dir, die Berechtigungen des API Keys entsprechend anzupassen um die Sicherheit zu gewährleisten.</p><h2 id="api-anfragen-authentifizieren" tabindex="-1">API Anfragen authentifizieren <a class="header-anchor" href="#api-anfragen-authentifizieren" aria-hidden="true">#</a></h2><p>Um deine Anfragen zu authentifizieren, musst du den <b>Bearer</b> Token bei jeder Anfrage im Header mitliefern. Solltest du diesen Key nicht angeben, oder ist dieser ungültig erhälst du einen 401 Fehler.</p><p>Wie du einen Header mit einer Anfrage mitschicken kannst, variiert je nach Programmier- / Scriptsprache. Suche am besten in einer Suchmaschine deiner Wahl, wie man diese Header mitliefert.</p><p>In HTML wäre dies z.B.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Bearer DEINAPITOKEN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNUNG</p><p>Es ist ganz wichtig, dass du nach dem Wort <code>Bearer</code> ein Leerzeichen eingibst und danach erst deinen API Token eingibst!</p></div><h2 id="ratenbegrenzung" tabindex="-1">Ratenbegrenzung <a class="header-anchor" href="#ratenbegrenzung" aria-hidden="true">#</a></h2><p>Wir setzen eine Reihe von Schutzmaßnahmen gegen riesige Mengen von eingehendem Datenverkehr ein, um ihre Stabilität zu maximieren. Nutzer/innen, die viele Anfragen in schneller Folge senden, sehen möglicherweise Fehlerantworten, die als Statuscode 419 gekennzeichnet sind. Wir erlauben bis zu 1000 Vorgänge in einer Minute, sowohl Lese- als auch Schreibvorgänge.</p><p>Sollte die Anzahl an Vorgängen überschritten werden, geben wir eine Fehlermeldung mit dem Code <a href="./error-handling.html#toomanyattempts"><code>TooManyAttempts</code></a> als Antwort zurück.</p>`,13),s=[r];function o(l,d,c,h,u,p){return t(),n("div",null,s)}const f=e(i,[["render",o]]);export{m as __pageData,f as default};