(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-506ee572"],{6076:function(e,t,n){"use strict";n("99af");var a=n("b4c0");t["a"]={help:function(){return Object(a["a"])().get("/daemon/help")},helpSpecific:function(e){return Object(a["a"])().get("/daemon/help/".concat(e))},getInfo:function(){return Object(a["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(a["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(e,t){return Object(a["a"])().get("/daemon/getrawtransaction/".concat(e,"/").concat(t))},listZelNodes:function(){return Object(a["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(a["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(a["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(a["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(a["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(a["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(a["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(a["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(e){return Object(a["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark:function(e){return Object(a["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo:function(){return Object(a["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(a["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(a["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(e,t){return Object(a["a"])().get("/daemon/validateaddress/".concat(t),{headers:{zelidauth:e}})},getWalletInfo:function(e){return Object(a["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listZelNodeConf:function(e){return Object(a["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start:function(e){return Object(a["a"])().get("/daemon/start",{headers:{zelidauth:e}})},restart:function(e){return Object(a["a"])().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon:function(e){return Object(a["a"])().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon:function(e,t){return Object(a["a"])().get("/daemon/rescanblockchain/".concat(t),{headers:{zelidauth:e}})},getBlock:function(e,t){return Object(a["a"])().get("/daemon/getblock/".concat(e,"/").concat(t))},tailDaemonDebug:function(e){return Object(a["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"7bb2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",[n("div",[n("label",{staticClass:"mr-1",attrs:{for:"sb-inline"}},[e._v("Block Height")]),n("input-spin-button",{attrs:{id:"sb-inline","repeat-step-multiplier":"100",inline:""},model:{value:e.rescanDaemonHeight,callback:function(t){e.rescanDaemonHeight=t},expression:"rescanDaemonHeight"}}),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1 mt-1",attrs:{id:"rescan-daemon",disabled:0===e.blockHeight,variant:"outline-primary",size:"md"}},[e._v(" Rescan Daemon ")]),n("b-popover",{ref:"popover",attrs:{target:"rescan-daemon",triggers:"click",show:e.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.popoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("span",[e._v("Are You Sure?")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onClose}},[n("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onClose}},[e._v(" Cancel ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onOk}},[e._v(" Rescan Blockchain ")])],1)]),n("b-modal",{attrs:{id:"modal-center",centered:"",title:"Blockchain Rescanning","ok-only":"","ok-title":"OK"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[n("b-card-text",[e._v(" The daemon will now start rescanning the blockchain. This will take up to an hour. ")])],1)],1)])},o=[],r=n("1da1"),i=(n("96cf"),n("205f")),c=n("1947"),s=n("3828"),u=n("6aac"),l=n("d6e4"),d=n("b307"),m=n("e009"),g=n("6076"),h=n("d052"),p={components:{BCard:i["a"],BButton:c["a"],BPopover:s["a"],BModal:u["a"],BCardText:l["a"],InputSpinButton:h["a"],ToastificationContent:d["a"]},directives:{Ripple:m["a"]},data:function(){return{blockHeight:0,rescanDaemonHeight:0,popoverShow:!1,modalShow:!1}},mounted:function(){this.daemonGetInfo()},methods:{daemonGetInfo:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g["a"].getInfo();case 2:n=t.sent,"error"===n.data.status?e.$toast({component:d["a"],props:{title:n.data.data.message||n.data.data,icon:"InfoIcon",variant:"danger"}}):e.blockHeight=n.data.data.blocks;case 4:case"end":return t.stop()}}),t)})))()},onClose:function(){this.popoverShow=!1},onOk:function(){var e=this;this.popoverShow=!1,this.modalShow=!0;var t=localStorage.getItem("zelidauth"),n=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;g["a"].rescanDaemon(t,n).then((function(t){e.$toast({component:d["a"],props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"success"}})})).catch((function(){e.$toast({component:d["a"],props:{title:"Error while trying to rescan Daemon",icon:"InfoIcon",variant:"danger"}})}))}}},f=p,b=n("2877"),v=Object(b["a"])(f,a,o,!1,null,null,null);t["default"]=v.exports}}]);