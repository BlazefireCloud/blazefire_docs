import{_ as c,c as r,b as s,d as e,e as a,w as l,a as o,r as p,o as i}from"./app.7c995242.js";const ts=JSON.parse('{"title":"Fahrzeug","description":"","frontmatter":{},"headers":[{"level":2,"title":"Objekt","slug":"objekt","link":"#objekt","children":[]},{"level":2,"title":"Relation","slug":"relation","link":"#relation","children":[]},{"level":2,"title":"Fahrzeug erstellen","slug":"fahrzeug-erstellen","link":"#fahrzeug-erstellen","children":[]},{"level":2,"title":"Einzelnes Fahrzeug abfragen","slug":"einzelnes-fahrzeug-abfragen","link":"#einzelnes-fahrzeug-abfragen","children":[]},{"level":2,"title":"Fahrzeug aktualisieren","slug":"fahrzeug-aktualisieren","link":"#fahrzeug-aktualisieren","children":[]},{"level":2,"title":"Fahrzeug löschen","slug":"fahrzeug-loschen","link":"#fahrzeug-loschen","children":[]},{"level":2,"title":"Alle Fahrzeuge auflisten","slug":"alle-fahrzeuge-auflisten","link":"#alle-fahrzeuge-auflisten","children":[]}],"relativePath":"de/resources/police/vehicle.md","lastUpdated":1676483725000}'),d={name:"de/resources/police/vehicle.md"},u=o("",3),D={class:"details custom-block"},F=s("p",null,"Einzigartiges Kennzeichen. Kann Buchstaben und / oder Zahlen enthalten.",-1),h={class:"details custom-block"},y=s("p",null,"Die einzigartig automatisch generierte ID des Bürgers, dem das Fahrzeug gehört.",-1),_={class:"details custom-block"},C=s("p",null,"Die Marke des Fahrzeugs.",-1),g={class:"details custom-block"},A=s("p",null,"Das Modell des Fahrzeugs.",-1),m={class:"details custom-block"},b=s("p",null,"Die Primäre Farbe des Fahrzeugs.",-1),z={class:"details custom-block"},f=s("p",null,"Die Sekundäre Farbe des Fahrzeugs.",-1),k={class:"details custom-block"},v=s("p",null,"Dieses Feld gibt an, ob das Fahrzeug registriert ist, oder nicht.",-1),T={class:"details custom-block"},S=s("p",null,"Timestamp, wann das Fahrzeug erstellt wurde.",-1),E={class:"details custom-block"},q=s("p",null,"Timestamp, wann das Fahrzeug zuletzt aktualisiert wurde.",-1),I=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"Warnung"),s("p",null,[e("Das Aktualisieren bzw. Setzen der Spalten "),s("code",null,"created_at"),e(" und "),s("code",null,"updated_at"),e(" ist nicht möglich und geschieht automatisch.")])],-1),P=s("h2",{id:"relation",tabindex:"-1"},[e("Relation "),s("a",{class:"header-anchor",href:"#relation","aria-hidden":"true"},"#")],-1),x=s("p",null,"Folgende Relations sind verfügbar:",-1),j={class:"details custom-block"},B=s("p",null,"Der Besitzer des Fahrzeugs.",-1),N={class:"details custom-block"},R=s("p",null,[e("Sofern vorhanden, wird die Fahndung ausgegeben, die aktuell auf das Fahrzeug läuft. Sollte keine Fahndung aktiv sein, wird der Wert "),s("code",null,"NULL"),e(" ausgegeben.")],-1),V=o("",5),w={class:"details custom-block"},O=s("summary",null,"Argumente",-1),M=o("",3),W={class:"details custom-block"},J=s("summary",null,"Argumente",-1),K=s("strong",null,"immer",-1),L=o("",3),Z={class:"details custom-block"},$=s("summary",null,"Argumente",-1),U=o("",3),G={class:"details custom-block"},H=s("summary",null,"Argumente",-1),Q=s("small",null,"(optional)",-1);function X(Y,ss,es,as,ls,ns){const t=p("important"),n=p("dimWhite");return i(),r("div",null,[u,s("details",D,[s("summary",null,[e("Kennzeichen - "),a(n,{size:"sm"},{default:l(()=>[e("plate | string | "),a(t,null,{default:l(()=>[e("required")]),_:1})]),_:1})]),F]),s("details",h,[s("summary",null,[e("Bürger ID - "),a(n,{size:"sm"},{default:l(()=>[e("citizen_id | string | "),a(t,null,{default:l(()=>[e("required")]),_:1})]),_:1})]),y]),s("details",_,[s("summary",null,[e("Marke - "),a(n,{size:"sm"},{default:l(()=>[e("brand | string, null")]),_:1})]),C]),s("details",g,[s("summary",null,[e("Modell - "),a(n,{size:"sm"},{default:l(()=>[e("model | string, null")]),_:1})]),A]),s("details",m,[s("summary",null,[e("Primäre Farbe - "),a(n,{size:"sm"},{default:l(()=>[e("primary_color | string, null")]),_:1})]),b]),s("details",z,[s("summary",null,[e("Sekundäre Farbe - "),a(n,{size:"sm"},{default:l(()=>[e("secondary_color | string, null")]),_:1})]),f]),s("details",k,[s("summary",null,[e("Registriert - "),a(n,{size:"sm"},{default:l(()=>[e("registered | boolean")]),_:1})]),v]),s("details",T,[s("summary",null,[e("Erstellt am - "),a(n,{size:"sm"},{default:l(()=>[e("created_at | timestamp, null")]),_:1})]),S]),s("details",E,[s("summary",null,[e("Aktualisiert am - "),a(n,{size:"sm"},{default:l(()=>[e("updated_at | timestamp, null")]),_:1})]),q]),I,P,x,s("details",j,[s("summary",null,[e("Bürger - "),a(n,{size:"sm"},{default:l(()=>[e("citizen | object")]),_:1})]),B]),s("details",N,[s("summary",null,[e("Fahndung - "),a(n,{size:"sm"},{default:l(()=>[e("bolo | object, null")]),_:1})]),R]),V,s("details",w,[O,s("p",null,[e("vehicleId - "),a(n,{size:"sm"},{default:l(()=>[e("Die einzigartige ID des Fahrzeugs")]),_:1})])]),M,s("details",W,[J,s("p",null,[e("vehicleId - "),a(n,{size:"sm"},{default:l(()=>[e("Das Kennzeichen des Fahrzeugs. Das Kennzeichen ist "),K,e(" einzigartig!")]),_:1})])]),L,s("details",Z,[$,s("p",null,[e("vehicleId - "),a(n,{size:"sm"},{default:l(()=>[e("Die einzigartige ID des Fahrzeugs")]),_:1})])]),U,s("details",G,[H,s("p",null,[e("page "),Q,e(" - "),a(n,{size:"sm"},{default:l(()=>[e("Die aktuelle Seite. Wenn kein Wert angegeben wurde, wird die 1. Seite ausgegeben.")]),_:1})])])])}const ps=c(d,[["render",X]]);export{ts as __pageData,ps as default};