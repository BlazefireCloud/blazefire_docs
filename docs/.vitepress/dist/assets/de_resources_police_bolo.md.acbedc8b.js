import{_ as c,c as r,b as s,d as n,e as a,w as l,a as o,r as p,o as D}from"./app.7c995242.js";const as=JSON.parse('{"title":"Fahndung","description":"","frontmatter":{},"headers":[{"level":2,"title":"Modell","slug":"modell","link":"#modell","children":[]},{"level":2,"title":"Relation","slug":"relation","link":"#relation","children":[]},{"level":2,"title":"Fahndung erstellen","slug":"fahndung-erstellen","link":"#fahndung-erstellen","children":[]},{"level":2,"title":"Einzelne Fahndung abfragen","slug":"einzelne-fahndung-abfragen","link":"#einzelne-fahndung-abfragen","children":[]},{"level":2,"title":"Fahndung aktualisieren","slug":"fahndung-aktualisieren","link":"#fahndung-aktualisieren","children":[]},{"level":2,"title":"Fahndung löschen","slug":"fahndung-loschen","link":"#fahndung-loschen","children":[]},{"level":2,"title":"Alle Fahndungen auflisten","slug":"alle-fahndungen-auflisten","link":"#alle-fahndungen-auflisten","children":[]}],"relativePath":"de/resources/police/bolo.md","lastUpdated":1676483725000}'),F={name:"de/resources/police/bolo.md"},i=o('<h1 id="fahndung" tabindex="-1">Fahndung <a class="header-anchor" href="#fahndung" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Alle Spalten, die <b>nicht</b> den Wert <code>null</code> haben, müssen beim Erstellen oder Aktualisieren zwingend angegeben werden!</p></div><h2 id="modell" tabindex="-1">Modell <a class="header-anchor" href="#modell" aria-hidden="true">#</a></h2>',3),d={class:"details custom-block"},u=s("p",null,"Einzigartige, automatisch generierte Zahlen- & Buchstabenreihenfolge.",-1),y={class:"details custom-block"},C=s("p",null,[n("Folgende Werte sind verfügbar: "),s("code",null,"citizen"),n(" und "),s("code",null,"vehicle")],-1),h={class:"details custom-block"},_=s("p",null,[n("Nur benötigt, wenn die Spalte "),s("code",null,"Typ"),n(" auf "),s("code",null,"citizen"),n(" gesetzt wurde.")],-1),A={class:"details custom-block"},m=s("p",null,[n("Nur benötigt, wenn die Spalte "),s("code",null,"Typ"),n(" auf "),s("code",null,"vehicle"),n(" gesetzt wurde.")],-1),g={class:"details custom-block"},q=s("p",null,"Wenn das Feld nicht leer ist, gilt die Fahndung, bis zu diesem angegebenen Datum und wird dann automatisch gelöscht.",-1),b=s("p",null,"Wurde kein Datum angegeben, bleibt die Fahndung dauerhaft aktiv und muss manuell gelöscht werden.",-1),f={class:"details custom-block"},E=s("p",null,"Timestamp, wann der Bürger erstellt wurde.",-1),T={class:"details custom-block"},B=s("p",null,"Timestamp, wann der Bürger zuletzt aktualisiert wurde.",-1),k=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"Warnung"),s("p",null,[n("Das Aktualisieren bzw. Setzen der Spalten "),s("code",null,"created_at"),n(" und "),s("code",null,"updated_at"),n(" ist nicht möglich und geschieht automatisch.")])],-1),v=s("h2",{id:"relation",tabindex:"-1"},[n("Relation "),s("a",{class:"header-anchor",href:"#relation","aria-hidden":"true"},"#")],-1),z=s("p",null,"Folgende Relations sind verfügbar:",-1),S={class:"details custom-block"},I=s("p",null,"Wenn die Fahndung für ein Fahrzeug gilt, wird hier das Fahrzeug, mit allen Informationen ausgegeben.",-1),P={class:"details custom-block"},w=s("p",null,"Wenn die Fahndung für ein Bürger gilt, wird hier der Bürger, mit allen Informationen ausgegeben.",-1),N=o(`<h2 id="fahndung-erstellen" tabindex="-1">Fahndung erstellen <a class="header-anchor" href="#fahndung-erstellen" aria-hidden="true">#</a></h2><p>Pfad: <code>/api/bolos/store</code><br> Methode: <code>POST</code><br> Berechtigung: <code>create</code></p><details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The resource has been successfully created.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ff061ef8-070f-4b4c-a4d7-9b6d00d35088</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vehicle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">active_until</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-06 22:48:37</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="einzelne-fahndung-abfragen" tabindex="-1">Einzelne Fahndung abfragen <a class="header-anchor" href="#einzelne-fahndung-abfragen" aria-hidden="true">#</a></h2><p>Pfad: <code>/api/bolos/{boloId}/retrieve</code><br> Methode: <code>POST</code><br> Berechtigung: <code>fetch</code></p>`,5),x={class:"details custom-block"},R=s("summary",null,"Argumente",-1),V=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ff061ef8-070f-4b4c-a4d7-9b6d00d35088</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vehicle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">active_until</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-06 22:48:37</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="fahndung-aktualisieren" tabindex="-1">Fahndung aktualisieren <a class="header-anchor" href="#fahndung-aktualisieren" aria-hidden="true">#</a></h2><p>Pfad: <code>/api/bolos/{boloId}/update</code><br> Methode: <code>POST</code><br> Berechtigung: <code>update</code></p>`,3),j={class:"details custom-block"},Z=s("summary",null,"Argumente",-1),O=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The resource has been successfully updated.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">resource</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ff061ef8-070f-4b4c-a4d7-9b6d00d35088</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vehicle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">active_until</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-06 22:48:37</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="fahndung-loschen" tabindex="-1">Fahndung löschen <a class="header-anchor" href="#fahndung-loschen" aria-hidden="true">#</a></h2><p>Pfad: <code>/api/bolos/{boloId}/delete</code><br> Methode: <code>POST</code><br> Berechtigung: <code>delete</code></p>`,3),W={class:"details custom-block"},M=s("summary",null,"Argumente",-1),J=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The resource has been successfully deleted.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="alle-fahndungen-auflisten" tabindex="-1">Alle Fahndungen auflisten <a class="header-anchor" href="#alle-fahndungen-auflisten" aria-hidden="true">#</a></h2><p>Pfad: <code>/api/bolos/list</code><br> Methode: <code>POST</code><br> Berechtigung: <code>fetch</code></p>`,3),L={class:"details custom-block"},$=s("summary",null,"Argumente",-1),K=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ff061ef8-070f-4b4c-a4d7-9b6d00d35088</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vehicle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">active_until</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-06 22:48:37</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2023-02-12T01:00:32.000000Z</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details>`,1);function U(G,H,Q,X,Y,ss){const e=p("dimWhite"),t=p("important");return D(),r("div",null,[i,s("details",d,[s("summary",null,[n("ID - "),a(e,{size:"sm"},{default:l(()=>[n("id | string")]),_:1})]),u]),s("details",y,[s("summary",null,[n("Typ - "),a(e,{size:"sm"},{default:l(()=>[n("type | string | "),a(t,null,{default:l(()=>[n("required")]),_:1})]),_:1})]),C]),s("details",h,[s("summary",null,[n("Bürger ID - "),a(e,{size:"sm"},{default:l(()=>[n("citizen_id | string | "),a(t,null,{default:l(()=>[n("required")]),_:1})]),_:1})]),_]),s("details",A,[s("summary",null,[n("Kennzeichen - "),a(e,{size:"sm"},{default:l(()=>[n("plate | string | "),a(t,null,{default:l(()=>[n("required")]),_:1})]),_:1})]),m]),s("details",g,[s("summary",null,[n("Aktiv bis - "),a(e,{size:"sm"},{default:l(()=>[n("active_until | timestamp, null")]),_:1})]),q,b]),s("details",f,[s("summary",null,[n("Erstellt am - "),a(e,{size:"sm"},{default:l(()=>[n("created_at | timestamp, null")]),_:1})]),E]),s("details",T,[s("summary",null,[n("Aktualisiert am - "),a(e,{size:"sm"},{default:l(()=>[n("updated_at | timestamp, null")]),_:1})]),B]),k,v,z,s("details",S,[s("summary",null,[n("Fahrzeug - "),a(e,{size:"sm"},{default:l(()=>[n("vehicle | object, null")]),_:1})]),I]),s("details",P,[s("summary",null,[n("Bürger - "),a(e,{size:"sm"},{default:l(()=>[n("citizen | object, null")]),_:1})]),w]),N,s("details",x,[R,s("p",null,[n("boloId - "),a(e,{size:"sm"},{default:l(()=>[n("Die ID der Fahndung")]),_:1})])]),V,s("details",j,[Z,s("p",null,[n("boloId - "),a(e,{size:"sm"},{default:l(()=>[n("Die ID der Fahndung")]),_:1})])]),O,s("details",W,[M,s("p",null,[n("boloId - "),a(e,{size:"sm"},{default:l(()=>[n("Die ID der Fahndung")]),_:1})])]),J,s("details",L,[$,s("p",null,[n("limit - "),a(e,{size:"sm"},{default:l(()=>[n("Wie viele Einträge soll auf je einer Seite angezeigt werden?")]),_:1})])]),K])}const ls=c(F,[["render",U]]);export{as as __pageData,ls as default};
