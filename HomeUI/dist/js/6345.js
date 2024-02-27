"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[6345],{67741:(t,e,a)=>{a.r(e),a.d(e,{default:()=>k});var i=function(){var t=this,e=t._self._c;return e("div",[t.managedApplication?t._e():e("b-tabs",{on:{"activate-tab":function(e){return t.tabChanged()}}},[e("b-tab",{attrs:{title:"Active Apps"}},[e("b-overlay",{attrs:{show:t.tableconfig.active.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"apps-active-table",attrs:{striped:"",hover:"",responsive:"",items:t.tableconfig.active.apps,fields:t.tableconfig.active.fields,"show-empty":"","empty-text":"No Flux Apps are active"},scopedSlots:t._u([{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(e){return t.showLocations(a,t.tableconfig.active.apps)}}},[a.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),a.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy to Clipboard",expression:"'Copy to Clipboard'",modifiers:{hover:!0,top:!0}}],staticClass:"mr-2",attrs:{id:`copy-active-app-${a.item.name}`,size:"sm",variant:"danger"},on:{click:function(e){t.copyToClipboard(JSON.stringify(a.item))}}},[t._v(" Copy Specifications ")]),e("b-button",{staticClass:"mr-2",attrs:{id:`deploy-active-app-${a.item.name}`,size:"sm",variant:"danger"}},[t._v(" Deploy Myself ")]),e("confirm-dialog",{attrs:{target:`deploy-active-app-${a.item.name}`,"confirm-button":"Deploy App"},on:{confirm:function(e){return t.redeployApp(a.item,!0)}}})],1),e("b-card",{staticClass:"mx-2"},[e("list-entry",{attrs:{title:"Description",data:a.item.description}}),e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}),e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}),a.item.version>=5?e("div",[a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)]):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}}),e("h4",[t._v("Composition")]),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,void 0,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",t._l(a.item.compose,(function(i,s){return e("b-card",{key:s},[e("b-card-title",[t._v(" Component "+t._s(i.name)+" ")]),e("list-entry",{attrs:{title:"Name",data:i.name}}),e("list-entry",{attrs:{title:"Description",data:i.description}}),e("list-entry",{attrs:{title:"Repository",data:i.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:i.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:i.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(i.ports,i.name,a.item.name,s).toString()}}),e("list-entry",{attrs:{title:"Ports",data:i.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:i.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:i.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:i.environmentParameters.length>0?i.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:i.commands.length>0?i.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:i.secrets?"Content Encrypted":"none"}}),i.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${i.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${i.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${i.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${i.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${i.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${i.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${i.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${i.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${i.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${i.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${i.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${i.hdd} GB`}})],1)],1)})),1),e("h4",[t._v("Locations")]),e("b-table",{staticClass:"locations-table",attrs:{striped:"",hover:"",items:t.appLocations,fields:t.appLocationFields},scopedSlots:t._u([{key:"cell(visit)",fn:function(i){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.openApp(a.item.name,i.item.ip.split(":")[0],t.getProperPort(a.item))}}},[t._v(" Visit App ")]),e("b-button",{staticClass:"mr-0",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.openNodeFluxOS(i.item.ip.split(":")[0],i.item.ip.split(":")[1]?+i.item.ip.split(":")[1]-1:16126)}}},[t._v(" Visit FluxNode ")])]}}],null,!0)})],1)]}},{key:"cell(visit)",fn:function(a){return[e("b-button",{staticClass:"mr-0",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.openGlobalApp(a.item.name)}}},[t._v(" Visit ")])]}}],null,!1,4233128261)})],1)],1)],1)],1)],1),e("b-tab",{attrs:{title:"Marketplace Deployments"}},[e("b-overlay",{attrs:{show:t.tableconfig.active.loading,variant:"transparent",blur:"5px"}},[e("b-card",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-table",{staticClass:"apps-active-table",attrs:{striped:"",hover:"",responsive:"",items:t.tableconfig.active_marketplace.apps,fields:t.tableconfig.active_marketplace.fields,"show-empty":"","empty-text":"No Flux Marketplace Apps are active"},scopedSlots:t._u([{key:"cell(show_details)",fn:function(a){return[e("a",{on:{click:function(e){return t.showLocations(a,t.tableconfig.active.apps)}}},[a.detailsShowing?t._e():e("v-icon",{attrs:{name:"chevron-down"}}),a.detailsShowing?e("v-icon",{attrs:{name:"chevron-up"}}):t._e()],1)]}},{key:"row-details",fn:function(a){return[e("b-card",{staticClass:"mx-2"},[e("list-entry",{attrs:{title:"Description",data:a.item.description}}),e("list-entry",{attrs:{title:"Owner",data:a.item.owner}}),e("list-entry",{attrs:{title:"Hash",data:a.item.hash}}),a.item.version>=5?e("div",[a.item.geolocation.length?e("div",t._l(a.item.geolocation,(function(a){return e("div",{key:a},[e("list-entry",{attrs:{title:"Geolocation",data:t.getGeolocation(a)}})],1)})),0):e("div",[e("list-entry",{attrs:{title:"Continent",data:"All"}}),e("list-entry",{attrs:{title:"Country",data:"All"}}),e("list-entry",{attrs:{title:"Region",data:"All"}})],1)]):t._e(),a.item.instances?e("list-entry",{attrs:{title:"Instances",data:a.item.instances.toString()}}):t._e(),e("list-entry",{attrs:{title:"Expires in",data:t.labelForExpire(a.item.expire,a.item.height)}}),e("list-entry",{attrs:{title:"Enterprise Nodes",data:a.item.nodes?a.item.nodes.toString():"Not scoped"}}),e("list-entry",{attrs:{title:"Static IP",data:a.item.staticip?"Yes, Running only on Static IP nodes":"No, Running on all nodes"}}),e("h4",[t._v("Composition")]),a.item.version<=3?e("div",[e("b-card",[e("list-entry",{attrs:{title:"Repository",data:a.item.repotag}}),e("list-entry",{attrs:{title:"Custom Domains",data:a.item.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(a.item.ports,void 0,a.item.name).toString()}}),e("list-entry",{attrs:{title:"Ports",data:a.item.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:a.item.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:a.item.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:a.item.enviromentParameters.length>0?a.item.enviromentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:a.item.commands.length>0?a.item.commands.toString():"none"}}),a.item.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${a.item.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${a.item.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${a.item.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${a.item.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${a.item.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${a.item.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${a.item.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${a.item.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${a.item.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${a.item.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${a.item.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${a.item.hdd} GB`}})],1)],1)],1):e("div",t._l(a.item.compose,(function(i,s){return e("b-card",{key:s},[e("b-card-title",[t._v(" Component "+t._s(i.name)+" ")]),e("list-entry",{attrs:{title:"Name",data:i.name}}),e("list-entry",{attrs:{title:"Description",data:i.description}}),e("list-entry",{attrs:{title:"Repository",data:i.repotag}}),e("list-entry",{attrs:{title:"Repository Authentication",data:i.repoauth?"Content Encrypted":"Public"}}),e("list-entry",{attrs:{title:"Custom Domains",data:i.domains.toString()||"none"}}),e("list-entry",{attrs:{title:"Automatic Domains",data:t.constructAutomaticDomains(i.ports,i.name,a.item.name,s).toString()}}),e("list-entry",{attrs:{title:"Ports",data:i.ports.toString()}}),e("list-entry",{attrs:{title:"Container Ports",data:i.containerPorts.toString()}}),e("list-entry",{attrs:{title:"Container Data",data:i.containerData}}),e("list-entry",{attrs:{title:"Environment Parameters",data:i.environmentParameters.length>0?i.environmentParameters.toString():"none"}}),e("list-entry",{attrs:{title:"Commands",data:i.commands.length>0?i.commands.toString():"none"}}),e("list-entry",{attrs:{title:"Secret Environment Parameters",data:i.secrets?"Content Encrypted":"none"}}),i.tiered?e("div",[e("list-entry",{attrs:{title:"CPU Cumulus",data:`${i.cpubasic} vCore`}}),e("list-entry",{attrs:{title:"CPU Nimbus",data:`${i.cpusuper} vCore`}}),e("list-entry",{attrs:{title:"CPU Stratus",data:`${i.cpubamf} vCore`}}),e("list-entry",{attrs:{title:"RAM Cumulus",data:`${i.rambasic} MB`}}),e("list-entry",{attrs:{title:"RAM Nimbus",data:`${i.ramsuper} MB`}}),e("list-entry",{attrs:{title:"RAM Stratus",data:`${i.rambamf} MB`}}),e("list-entry",{attrs:{title:"SSD Cumulus",data:`${i.hddbasic} GB`}}),e("list-entry",{attrs:{title:"SSD Nimbus",data:`${i.hddsuper} GB`}}),e("list-entry",{attrs:{title:"SSD Stratus",data:`${i.hddbamf} GB`}})],1):e("div",[e("list-entry",{attrs:{title:"CPU",data:`${i.cpu} vCore`}}),e("list-entry",{attrs:{title:"RAM",data:`${i.ram} MB`}}),e("list-entry",{attrs:{title:"SSD",data:`${i.hdd} GB`}})],1)],1)})),1),e("h4",[t._v("Locations")]),e("b-table",{staticClass:"locations-table",attrs:{striped:"",hover:"",items:t.appLocations,fields:t.appLocationFields},scopedSlots:t._u([{key:"cell(visit)",fn:function(i){return[e("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.openApp(a.item.name,i.item.ip.split(":")[0],t.getProperPort(a.item))}}},[t._v(" Visit App ")]),e("b-button",{staticClass:"mr-0",attrs:{size:"sm",variant:"danger"},on:{click:function(e){t.openNodeFluxOS(i.item.ip.split(":")[0],i.item.ip.split(":")[1]?+i.item.ip.split(":")[1]-1:16126)}}},[t._v(" Visit FluxNode ")])]}}],null,!0)})],1)]}},{key:"cell(visit)",fn:function(a){return[e("b-button",{staticClass:"mr-0",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.openGlobalApp(a.item.name)}}},[t._v(" Visit ")])]}}],null,!1,1173132119)})],1)],1)],1)],1)],1)],1),t.managedApplication?e("div",[e("management",{attrs:{"app-name":t.managedApplication,global:!0,"installed-apps":[]},on:{back:function(e){return t.clearManagedApplication()}}})],1):t._e()],1)},s=[],n=(a(70560),a(58887)),o=a(51015),r=a(16521),l=a(50725),c=a(86855),p=a(49379),m=a(26253),d=a(15193),u=a(66126),y=a(5870),g=a(20266),h=a(34547),b=a(51748),f=a(87156),v=a(86981),C=a(43672),S=a(27616);const $=a(80129),A=a(57306),w={components:{BTabs:n.M,BTab:o.L,BTable:r.h,BCol:l.l,BCard:c._,BCardTitle:p._,BRow:m.T,BButton:d.T,BOverlay:u.X,ListEntry:b.Z,ConfirmDialog:f.Z,Management:v.Z,ToastificationContent:h.Z},directives:{"b-tooltip":y.o,Ripple:g.Z},data(){return{managedApplication:"",daemonBlockCount:-1,appLocations:[],appLocationFields:[{key:"ip",label:"IP Address"},{key:"visit",label:""}],myappLocations:[],myappLocationFields:[{key:"ip",label:"IP Address"},{key:"visit",label:""}],tableconfig:{active:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"visit",label:"Visit"}],loading:!0},active_marketplace:{apps:[],fields:[{key:"show_details",label:""},{key:"name",label:"Name",sortable:!0},{key:"description",label:"Description",sortable:!0},{key:"visit",label:"Visit"}]}},allApps:[]}},computed:{myGlobalApps(){const t=localStorage.getItem("zelidauth"),e=$.parse(t);return this.allApps?this.allApps.filter((t=>t.owner===e.zelid)):[]},isLoggedIn(){const t=localStorage.getItem("zelidauth"),e=$.parse(t);return!!e.zelid}},mounted(){this.appsGetListGlobalApps(),this.getDaemonBlockCount()},methods:{minutesToString(t){let e=60*t;const a={day:86400,hour:3600,minute:60,second:1},i=[];for(const s in a){const t=Math.floor(e/a[s]);1===t&&i.push(` ${t} ${s}`),t>=2&&i.push(` ${t} ${s}s`),e%=a[s]}return i},labelForExpire(t,e){if(-1===this.daemonBlockCount)return"Not possible to calculate expiration";const a=t||22e3,i=e+a-this.daemonBlockCount;if(i<1)return"Application Expired";const s=2*i,n=this.minutesToString(s);return n.length>2?`${n[0]}, ${n[1]}, ${n[2]}`:n.length>1?`${n[0]}, ${n[1]}`:`${n[0]}`},async getDaemonBlockCount(){const t=await S.Z.getBlockCount();"success"===t.data.status&&(this.daemonBlockCount=t.data.data)},openAppManagement(t){this.managedApplication=t},clearManagedApplication(){this.managedApplication=""},async appsGetListGlobalApps(){this.tableconfig.active.loading=!0;const t=await C.Z.globalAppSpecifications();console.log(t),this.allApps=t.data.data,this.tableconfig.active.apps=this.allApps.filter((t=>{if(t.name.length>=14){const e=t.name.substring(t.name.length-13,t.name.length),a=Number(e);if(!Number.isNaN(a))return!1}return!0})),this.tableconfig.active_marketplace.apps=this.allApps.filter((t=>{if(t.name.length>=14){const e=t.name.substring(t.name.length-13,t.name.length),a=Number(e);if(!Number.isNaN(a))return!0}return!1})),this.tableconfig.active.loading=!1,this.loadPermanentMessages()},async loadPermanentMessages(){try{const t=localStorage.getItem("zelidauth"),e=$.parse(t);if(!e.zelid)return void(this.tableconfig.my_expired.loading=!1);const a=await C.Z.permanentMessagesOwner(e.zelid),i=[];for(const n of a.data.data){const t=i.find((t=>t.appSpecifications.name===n.appSpecifications.name));if(t){if(n.height>t.height){const t=i.findIndex((t=>t.appSpecifications.name===n.appSpecifications.name));t>-1&&(i.splice(t,1),i.push(n))}}else i.push(n)}const s=[];for(const n of i){const t=this.allApps.find((t=>t.name.toLowerCase()===n.appSpecifications.name.toLowerCase()));if(!t){const t=n.appSpecifications;s.push(t)}}this.tableconfig.my_expired.apps=s,this.tableconfig.my_expired.loading=!1}catch(t){console.log(t)}},redeployApp(t,e=!1){const a=t;e&&(a.name+="XXX",a.name+=Date.now().toString().slice(-5));const i=localStorage.getItem("zelidauth"),s=$.parse(i);s?a.owner=s.zelid:e&&(a.owner=""),this.$router.replace({name:"apps-registerapp",params:{appspecs:JSON.stringify(t)}})},copyToClipboard(t){const e=JSON.parse(t);delete e._showDetails;const a=JSON.stringify(e),i=document.createElement("textarea");i.value=a,i.setAttribute("readonly",""),i.style.position="absolute",i.style.left="-9999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),this.showToast("success","Application Specifications copied to Clipboard")},openApp(t,e,a){if(console.log(t,e,a),a&&e){const t=e,i=a,s=`http://${t}:${i}`;this.openSite(s)}else this.showToast("danger","Unable to open App :(, App does not have a port.")},getProperPort(t){if(t.port)return t.port;if(t.ports)return t.ports[0];for(let e=0;e<t.compose.length;e+=1)for(let a=0;a<t.compose[e].ports.length;a+=1)if(t.compose[e].ports[a])return t.compose[e].ports[a];return null},openNodeFluxOS(t,e){if(console.log(t,e),e&&t){const a=t,i=e,s=`http://${a}:${i}`;this.openSite(s)}else this.showToast("danger","Unable to open FluxOS :(")},async openGlobalApp(t){const e=await C.Z.getAppLocation(t).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const a=e.data.data,i=a[0];if(i){const e=`https://${t}.app.runonflux.io`;this.openSite(e)}else this.showToast("danger","Application is awaiting launching...")}else this.showToast("danger",e.data.data.message||e.data.data)},openSite(t){const e=window.open(t,"_blank");e.focus()},tabChanged(){this.tableconfig.active.apps.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.appLocations=[]},showLocations(t,e){t.detailsShowing?t.toggleDetails():(e.forEach((t=>{this.$set(t,"_showDetails",!1)})),this.$nextTick((()=>{t.toggleDetails(),this.loadLocations(t)})))},async loadLocations(t){console.log(t),this.appLocations=[];const e=await C.Z.getAppLocation(t.item.name).catch((t=>{this.showToast("danger",t.message||t)}));if(console.log(e),"success"===e.data.status){const t=e.data.data;this.appLocations=t}},showToast(t,e,a="InfoIcon"){this.$toast({component:h.Z,props:{title:e,icon:a,variant:t}})},constructAutomaticDomains(t,e="",a,i=0){const s=a.toLowerCase(),n=e.toLowerCase();if(!n){const e=[];0===i&&e.push(`${s}.app.runonflux.io`);for(let a=0;a<t.length;a+=1){const i=`${s}_${t[a]}.app.runonflux.io`;e.push(i)}return e}const o=[];0===i&&o.push(`${s}.app.runonflux.io`);for(let r=0;r<t.length;r+=1){const e=`${s}_${t[r]}.app.runonflux.io`;o.push(e)}return o},getDisplayName(t){const e=t.substring(t.length-13,t.length),a=Number(e);return Number.isNaN(a)?t:`${t.substring(0,t.length-13)} - ${new Date(a).toLocaleString()}`},ensureObject(t){if("object"===typeof t)return t;let e;try{e=JSON.parse(t)}catch(a){e=$.parse(t)}return e},getGeolocation(t){if(t.startsWith("a")&&!t.startsWith("ac")&&!t.startsWith("a!c")){const e=t.slice(1),a=A.continents.find((t=>t.code===e))||{name:"ALL"};return`Continent: ${a.name||"Unkown"}`}if(t.startsWith("b")){const e=t.slice(1),a=A.countries.find((t=>t.code===e))||{name:"ALL"};return`Country: ${a.name||"Unkown"}`}if(t.startsWith("ac")){const e=t.slice(2),a=e.split("_"),i=a[0],s=a[1],n=a[2],o=A.continents.find((t=>t.code===i))||{name:"ALL"},r=A.countries.find((t=>t.code===s))||{name:"ALL"};let l=`Allowed location: Continent: ${o.name}`;return s&&(l+=`, Country: ${r.name}`),n&&(l+=`, Region: ${n}`),l}if(t.startsWith("a!c")){const e=t.slice(3),a=e.split("_"),i=a[0],s=a[1],n=a[2],o=A.continents.find((t=>t.code===i))||{name:"ALL"},r=A.countries.find((t=>t.code===s))||{name:"ALL"};let l=`Forbidden location: Continent: ${o.name}`;return s&&(l+=`, Country: ${r.name}`),n&&(l+=`, Region: ${n}`),l}return"All locations allowed"}}},P=w;var D=a(1001),_=(0,D.Z)(P,i,s,!1,null,null,null);const k=_.exports}}]);