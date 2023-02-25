import{_ as c,c as r,b as s,d as a,e as n,w as l,a as e,r as p,o as D}from"./app.7c995242.js";const us=JSON.parse('{"title":"Citizen","description":"","frontmatter":{},"headers":[{"level":2,"title":"Model","slug":"model","link":"#model","children":[]},{"level":2,"title":"Relations","slug":"relations","link":"#relations","children":[]},{"level":2,"title":"Create citizen","slug":"create-citizen","link":"#create-citizen","children":[]},{"level":2,"title":"Retrieve citizen","slug":"retrieve-citizen","link":"#retrieve-citizen","children":[]},{"level":2,"title":"Update citizen","slug":"update-citizen","link":"#update-citizen","children":[]},{"level":2,"title":"Delete citizen","slug":"delete-citizen","link":"#delete-citizen","children":[]},{"level":2,"title":"List all citizens","slug":"list-all-citizens","link":"#list-all-citizens","children":[]}],"relativePath":"en/resources/police/citizen.md","lastUpdated":1676483725000}'),F={name:"en/resources/police/citizen.md"},i=e("",4),y={class:"details custom-block"},u=s("p",null,"Unique, auto generated from numbers and characters.",-1),d={class:"details custom-block"},C=s("p",null,"Contains the firstname and lastname.",-1),A={class:"details custom-block"},_=s("p",null,"The birthdate of the citizen.",-1),h={class:"details custom-block"},q=s("p",null,"Sex of the citizen.",-1),m={class:"details custom-block"},b=s("p",null,"Height of the citizen.",-1),z={class:"details custom-block"},g=s("p",null,"Eye color of the citizen.",-1),E={class:"details custom-block"},B=s("p",null,"Hair color of the citizen.",-1),f={class:"details custom-block"},T=s("p",null,"Current address of the citizen.",-1),k={class:"details custom-block"},v=s("p",null,"Datetime when the citizen has been created.",-1),S={class:"details custom-block"},x=s("p",null,"Timestamp when the citizen was last updated.",-1),P=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"Warning"),s("p",null,[a("Updating or setting the columns "),s("code",null,"created_at"),a(" and "),s("code",null,"updated_at"),a(" is not possible and is done automatically.")])],-1),I=s("h2",{id:"relations",tabindex:"-1"},[a("Relations "),s("a",{class:"header-anchor",href:"#relations","aria-hidden":"true"},"#")],-1),V=s("p",null,"The following relations are available:",-1),N={class:"details custom-block"},w=s("p",null,"Vehicles the citizen owns will be output here.",-1),R={class:"details custom-block"},M=s("p",null,"All arrests / fines traced to this citizen are output herewith.",-1),O={class:"details custom-block"},j=s("p",null,[a("If available, the manhunt that is currently running on the citizen is output. If no manhunt is active, the value "),s("code",null,"NULL"),a(" is output.")],-1),U={class:"details custom-block"},J=s("p",null,"All investigations belonging to the citizen are output with this.",-1),H=e("",5),L={class:"details custom-block"},W=s("summary",null,"Argumente",-1),$=e("",3),G={class:"details custom-block"},K=s("summary",null,"Argumente",-1),Q=e("",3),X={class:"details custom-block"},Y=s("summary",null,"Argumente",-1),Z=e("",3),ss={class:"details custom-block"},as=s("summary",null,"Arguments",-1),ns=s("small",null,"(optional)",-1),ls=s("br",null,null,-1),os=s("small",null,"(optional)",-1),es=e("",1);function ts(ps,cs,rs,Ds,Fs,is){const o=p("dimWhite"),t=p("important");return D(),r("div",null,[i,s("details",y,[s("summary",null,[a("ID - "),n(o,{size:"sm"},{default:l(()=>[a("id | string")]),_:1})]),u]),s("details",d,[s("summary",null,[a("Name - "),n(o,{size:"sm"},{default:l(()=>[a("name | string | "),n(t,null,{default:l(()=>[a("required")]),_:1})]),_:1})]),C]),s("details",A,[s("summary",null,[a("Birthday - "),n(o,{size:"sm"},{default:l(()=>[a("birthday | string | "),n(t,null,{default:l(()=>[a("required")]),_:1})]),_:1})]),_]),s("details",h,[s("summary",null,[a("Sex - "),n(o,{size:"sm"},{default:l(()=>[a("sex | string | "),n(t,null,{default:l(()=>[a("required")]),_:1})]),_:1})]),q]),s("details",m,[s("summary",null,[a("Height - "),n(o,{size:"sm"},{default:l(()=>[a("height | string | "),n(t,null,{default:l(()=>[a("required")]),_:1})]),_:1})]),b]),s("details",z,[s("summary",null,[a("Eye color - "),n(o,{size:"sm"},{default:l(()=>[a("eye_color | string, null")]),_:1})]),g]),s("details",E,[s("summary",null,[a("Hair color - "),n(o,{size:"sm"},{default:l(()=>[a("hair_color | string, null")]),_:1})]),B]),s("details",f,[s("summary",null,[a("Address - "),n(o,{size:"sm"},{default:l(()=>[a("address | string, null")]),_:1})]),T]),s("details",k,[s("summary",null,[a("Created at - "),n(o,{size:"sm"},{default:l(()=>[a("created_at | timestamp, null")]),_:1})]),v]),s("details",S,[s("summary",null,[a("Updated at - "),n(o,{size:"sm"},{default:l(()=>[a("updated_at | timestamp, null")]),_:1})]),x]),P,I,V,s("details",N,[s("summary",null,[a("Vehicles - "),n(o,{size:"sm"},{default:l(()=>[a("vehicles | array")]),_:1})]),w]),s("details",R,[s("summary",null,[a("Arrests / Fines - "),n(o,{size:"sm"},{default:l(()=>[a("reports | array")]),_:1})]),M]),s("details",O,[s("summary",null,[a("BOLO - "),n(o,{size:"sm"},{default:l(()=>[a("bolo | object, null")]),_:1})]),j]),s("details",U,[s("summary",null,[a("Investigations - "),n(o,{size:"sm"},{default:l(()=>[a("investigations | array")]),_:1})]),J]),H,s("details",L,[W,s("p",null,[a("citizenId - "),n(o,{size:"sm"},{default:l(()=>[a("The unique id.")]),_:1})])]),$,s("details",G,[K,s("p",null,[a("citizenId - "),n(o,{size:"sm"},{default:l(()=>[a("The unique id.")]),_:1})])]),Q,s("details",X,[Y,s("p",null,[a("citizenId - "),n(o,{size:"sm"},{default:l(()=>[a("The unique id.")]),_:1})])]),Z,s("details",ss,[as,s("p",null,[a("page "),ns,a(" - "),n(o,{size:"sm"},{default:l(()=>[a("The current page. Standard: 1")]),_:1}),ls,a(" limit "),os,a(" - "),n(o,{size:"sm"},{default:l(()=>[a("How many entries should be displayed on each page?Standard: 20")]),_:1})])]),es])}const ds=c(F,[["render",ts]]);export{us as __pageData,ds as default};