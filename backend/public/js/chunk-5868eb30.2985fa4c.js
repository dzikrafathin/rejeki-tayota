(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5868eb30"],{1681:function(t,a,e){},"8ed9":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{md:"6"}},[e("v-card",[e("v-card-title",[t._v("Form Pemesanan")]),e("v-card-text",[e("v-text-field",{attrs:{label:"Nama","prepend-icon":"mdi-account"},model:{value:t.form.nama,callback:function(a){t.$set(t.form,"nama",a)},expression:"form.nama"}}),e("v-text-field",{attrs:{label:"Nomor Handphone","prepend-icon":"mdi-phone"},model:{value:t.form.noHp,callback:function(a){t.$set(t.form,"noHp",a)},expression:"form.noHp"}}),e("v-textarea",{attrs:{"prepend-icon":"mdi-map-marker",label:"Alamat"},model:{value:t.form.alamat,callback:function(a){t.$set(t.form,"alamat",a)},expression:"form.alamat"}}),e("index-item-pemesanan")],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary"},on:{click:t.kirim}},[t._v(" Kirim ")])],1)],1)],1)],1)],1)},r=[],i=e("5530"),o=e("2f62"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[e("tambah-item")]},proxy:!0},{key:"item.aksi",fn:function(a){var n=a.item;return[e("v-btn",{attrs:{"x-small":"",color:"error",outlined:""},on:{click:function(a){return t.hapus(n.no)}}},[t._v(" Hapus ")])]}}])})},l=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"500"},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{color:"primary"}},n),[t._v(" Tambah ")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",[t._v("Tambah Item")]),e("v-card-text",[e("v-select",{attrs:{items:t.daftarMobil,"item-text":"nama","item-value":"id",label:"Pilih Mobil"},on:{change:function(a){return t.indexTipe(t.form.mobilId)}},model:{value:t.form.mobilId,callback:function(a){t.$set(t.form,"mobilId",a)},expression:"form.mobilId"}}),e("v-select",{attrs:{items:t.daftarTipe,"item-text":"tipe","item-value":"id",label:"Pilih Tipe"},model:{value:t.form.tipe_mobil_id,callback:function(a){t.$set(t.form,"tipe_mobil_id",a)},expression:"form.tipe_mobil_id"}}),e("v-text-field",{attrs:{label:"Warna"},model:{value:t.form.warna,callback:function(a){t.$set(t.form,"warna",a)},expression:"form.warna"}}),e("v-text-field",{attrs:{label:"Jumlah",type:"number"},model:{value:t.form.jumlah,callback:function(a){t.$set(t.form,"jumlah",a)},expression:"form.jumlah"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"error",outlined:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Batal ")]),e("v-btn",{attrs:{color:"primary"},on:{click:t.tambah}},[t._v(" Tambah ")])],1)],1)],1)},u=[],d={data:function(){return{dialog:!1,form:{mobilId:0,tipe_mobil_id:0,warna:"",jumlah:0}}},computed:Object(i["a"])({},Object(o["e"])({daftarMobil:function(t){return t.pemesanan.daftarMobil},daftarTipe:function(t){return t.pemesanan.daftarTipe}})),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])({tambahItem:"tambahItem",indexMobil:"indexPemesananMobil",indexTipe:"indexPemesananTipe"})),{},{tambah:function(){this.tambahItem(this.form),this.dialog=!1}}),created:function(){this.indexMobil()}},m=d,f=e("2877"),p=e("6544"),h=e.n(p),b=e("8336"),v=e("b0af"),x=e("99d9"),g=e("169a"),k=e("b974"),w=e("2fa4"),j=e("8654"),y=Object(f["a"])(m,c,u,!1,null,null,null),_=y.exports;h()(y,{VBtn:b["a"],VCard:v["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VDialog:g["a"],VSelect:k["a"],VSpacer:w["a"],VTextField:j["a"]});var I={components:{TambahItem:_},computed:Object(i["a"])({},Object(o["e"])({items:function(t){return t.pemesanan.items}})),methods:Object(i["a"])({},Object(o["d"])({hapus:"hapus_item"})),data:function(){return{headers:[{text:"No",value:"no"},{text:"Mobil",value:"mobil"},{text:"Tipe",value:"tipe"},{text:"Jumlah",value:"jumlah"},{text:"Warna",value:"warna"},{text:"Aksi",value:"aksi"}]}}},T=I,V=e("8fea"),O=Object(f["a"])(T,s,l,!1,null,null,null),H=O.exports;h()(O,{VBtn:b["a"],VDataTable:V["a"]});var P={components:{IndexItemPemesanan:H},data:function(){return{form:{nama:"",alamat:"",noHp:"",status:0}}},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])({kirimPemesanan:"kirimPemesanan"})),{},{kirim:function(){var t=this;this.kirimPemesanan(this.form).then((function(){t.$router.push("/katalog")})).catch((function(t){console.log(t.response.data.messages)}))}})},C=P,$=e("62ad"),S=e("a523"),M=e("0fd9"),N=e("a844"),B=Object(f["a"])(C,n,r,!1,null,null,null);a["default"]=B.exports;h()(B,{VBtn:b["a"],VCard:v["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VCol:$["a"],VContainer:S["a"],VRow:M["a"],VSpacer:w["a"],VTextField:j["a"],VTextarea:N["a"]})},a523:function(t,a,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85"),e("a15b"),e("498a");var n=e("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,r=e.data,i=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));s.length&&(r.staticClass+=" ".concat(s.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),a(n.tag,r,i)}})}var i=e("d9f7");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,r=a.data,o=a.children,s=r.attrs;return s&&(r.attrs={},e=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),o)}})},a844:function(t,a,e){"use strict";e("a9e3");var n=e("5530"),r=(e("1681"),e("8654")),i=e("58df"),o=Object(i["a"])(r["a"]);a["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(n["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"}},genInput:function(){var t=r["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){r["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-5868eb30.2985fa4c.js.map