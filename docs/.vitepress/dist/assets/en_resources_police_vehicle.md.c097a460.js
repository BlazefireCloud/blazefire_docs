import{_ as c,c as r,b as s,d as l,e,w as a,a as o,r as p,o as i}from"./app.7c995242.js";const os=JSON.parse('{"title":"Vehicle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Objekt","slug":"objekt","link":"#objekt","children":[]},{"level":2,"title":"Relations","slug":"relations","link":"#relations","children":[]},{"level":2,"title":"Create vehicle","slug":"create-vehicle","link":"#create-vehicle","children":[]},{"level":2,"title":"Retrieve vehicle","slug":"retrieve-vehicle","link":"#retrieve-vehicle","children":[]},{"level":2,"title":"Update vehicle","slug":"update-vehicle","link":"#update-vehicle","children":[]},{"level":2,"title":"Delete vehicle","slug":"delete-vehicle","link":"#delete-vehicle","children":[]},{"level":2,"title":"List all vehicles","slug":"list-all-vehicles","link":"#list-all-vehicles","children":[]}],"relativePath":"en/resources/police/vehicle.md","lastUpdated":1676483725000}'),D={name:"en/resources/police/vehicle.md"},d=o('<h1 id="vehicle" tabindex="-1">Vehicle <a class="header-anchor" href="#vehicle" aria-hidden="true">#</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>All columns that <b>do not</b> have the value <code>null</code> must be mandatorily specified when creating or updating!</p></div><h2 id="objekt" tabindex="-1">Objekt <a class="header-anchor" href="#objekt" aria-hidden="true">#</a></h2>',3),F={class:"details custom-block"},y=s("p",null,"Unique plate. Is needed to retrieve, update or delete a vehicle.",-1),u={class:"details custom-block"},h=s("p",null,"The unique id of the citizen.",-1),_={class:"details custom-block"},C=s("p",null,"The brand of the vehicle.",-1),A={class:"details custom-block"},m=s("p",null,"The model of the vehicle.",-1),v={class:"details custom-block"},b=s("p",null,"Primary color of the vehicle.",-1),q={class:"details custom-block"},f=s("p",null,"Secondary color of the vehicle.",-1),E={class:"details custom-block"},g=s("p",null,"This field determines if the current vehicle is registered.",-1),T={class:"details custom-block"},k=s("p",null,"Timestamp when the Vehicle has been created.",-1),P={class:"details custom-block"},S=s("p",null,"Timestamp when the Bolo has been updated.",-1),I=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"Warning"),s("p",null,[l("Updating or setting the columns "),s("code",null,"created_at"),l(" and "),s("code",null,"updated_at"),l(" is not possible and is done automatically.")])],-1),z=s("h2",{id:"relations",tabindex:"-1"},[l("Relations "),s("a",{class:"header-anchor",href:"#relations","aria-hidden":"true"},"#")],-1),R=s("p",null,"Folgende Relations sind verfügbar:",-1),x={class:"details custom-block"},V=s("p",null,"The owner of the vehicle.",-1),j={class:"details custom-block"},N=s("p",null,[l("If available, the manhunt that is currently running on the vehicle is output. If no manhunt is active, the value "),s("code",null,"NULL"),l(" is output.")],-1),O=o(`<h2 id="create-vehicle" tabindex="-1">Create vehicle <a class="header-anchor" href="#create-vehicle" aria-hidden="true">#</a></h2><p>Path: <code>/api/vehicles/store</code><br> Method: <code>POST</code><br> Permission: <code>create</code></p><details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">citizen_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8b865c67-1324-4602-a110-bbdf675e344e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">brand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">primary_color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">secondary_color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">registered</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1970-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1970-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="retrieve-vehicle" tabindex="-1">Retrieve vehicle <a class="header-anchor" href="#retrieve-vehicle" aria-hidden="true">#</a></h2><p>Path: <code>/api/vehicles/{vehicleId}/store</code><br> Method: <code>POST</code><br> Permission: <code>fetch</code></p>`,5),B={class:"details custom-block"},w=s("summary",null,"Arguments",-1),L=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">citizen_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8b865c67-1324-4602-a110-bbdf675e344e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">brand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">primary_color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">secondary_color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">registered</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1970-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1970-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="update-vehicle" tabindex="-1">Update vehicle <a class="header-anchor" href="#update-vehicle" aria-hidden="true">#</a></h2><p>Path: <code>/api/vehicles/{vehicleId}/update</code><br> Method: <code>POST</code><br> Permission: <code>update</code></p>`,3),U={class:"details custom-block"},M=s("summary",null,"Arguments",-1),J=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">citizen_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8b865c67-1324-4602-a110-bbdf675e344e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">plate</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">BLAZEFIRE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">brand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">primary_color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">secondary_color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">registered</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">created_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1970-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">updated_at</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1970-01-01 00:00:00</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="delete-vehicle" tabindex="-1">Delete vehicle <a class="header-anchor" href="#delete-vehicle" aria-hidden="true">#</a></h2><p>Path: <code>/api/vehicles/{vehicleId}/delete</code><br> Method: <code>POST</code><br> Permission: <code>delete</code></p>`,3),$={class:"details custom-block"},W=s("summary",null,"Arguments",-1),Z=o(`<details class="details custom-block"><summary>JSON Response</summary><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">The resource has been successfully deleted.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><h2 id="list-all-vehicles" tabindex="-1">List all vehicles <a class="header-anchor" href="#list-all-vehicles" aria-hidden="true">#</a></h2><p>Path: <code>/api/vehicles/list</code><br> Method: <code>POST</code><br> Permission: <code>fetch</code></p>`,3),H={class:"details custom-block"},G=s("summary",null,"Arguments",-1),K=s("small",null,"(optional)",-1);function Q(X,Y,ss,ls,es,as){const t=p("important"),n=p("dimWhite");return i(),r("div",null,[d,s("details",F,[s("summary",null,[l("Plate - "),e(n,{size:"sm"},{default:a(()=>[l("plate | string | "),e(t,null,{default:a(()=>[l("required")]),_:1})]),_:1})]),y]),s("details",u,[s("summary",null,[l("Citizen Id - "),e(n,{size:"sm"},{default:a(()=>[l("citizen_id | string | "),e(t,null,{default:a(()=>[l("required")]),_:1})]),_:1})]),h]),s("details",_,[s("summary",null,[l("Brand - "),e(n,{size:"sm"},{default:a(()=>[l("brand | string, null")]),_:1})]),C]),s("details",A,[s("summary",null,[l("Model - "),e(n,{size:"sm"},{default:a(()=>[l("model | string, null")]),_:1})]),m]),s("details",v,[s("summary",null,[l("Primary color - "),e(n,{size:"sm"},{default:a(()=>[l("primary_color | string, null")]),_:1})]),b]),s("details",q,[s("summary",null,[l("Secondary color - "),e(n,{size:"sm"},{default:a(()=>[l("secondary_color | string, null")]),_:1})]),f]),s("details",E,[s("summary",null,[l("Registered - "),e(n,{size:"sm"},{default:a(()=>[l("registered | boolean")]),_:1})]),g]),s("details",T,[s("summary",null,[l("Created at - "),e(n,{size:"sm"},{default:a(()=>[l("created_at | timestamp, null")]),_:1})]),k]),s("details",P,[s("summary",null,[l("Updated at - "),e(n,{size:"sm"},{default:a(()=>[l("updated_at | timestamp, null")]),_:1})]),S]),I,z,R,s("details",x,[s("summary",null,[l("Citizen - "),e(n,{size:"sm"},{default:a(()=>[l("citizen | object")]),_:1})]),V]),s("details",j,[s("summary",null,[l("Bolo - "),e(n,{size:"sm"},{default:a(()=>[l("bolo | object, null")]),_:1})]),N]),O,s("details",B,[w,s("p",null,[l("vehicleId - "),e(n,{size:"sm"},{default:a(()=>[l("The plate of the vehicle.")]),_:1})])]),L,s("details",U,[M,s("p",null,[l("vehicleId - "),e(n,{size:"sm"},{default:a(()=>[l("Plate of the vehicle")]),_:1})])]),J,s("details",$,[W,s("p",null,[l("vehicleId - "),e(n,{size:"sm"},{default:a(()=>[l("Plate of the vehicle")]),_:1})])]),Z,s("details",H,[G,s("p",null,[l("page "),K,l(" - "),e(n,{size:"sm"},{default:a(()=>[l("How many entries should be displayed on each page?")]),_:1})])])])}const ts=c(D,[["render",Q]]);export{os as __pageData,ts as default};
