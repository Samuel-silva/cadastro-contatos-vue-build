"use strict";(self["webpackChunkcadastro_clientes_vue"]=self["webpackChunkcadastro_clientes_vue"]||[]).push([[417],{9417:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{size:"lg"},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[t("b-button",{attrs:{variant:"primary"},on:{click:function(t){e.openModal=!1}}},[e._v(" Fechar ")])]},proxy:!0}]),model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[t("h2",[t("b-icon",{attrs:{icon:"person",variant:"primary"}}),e._v(" "+e._s(e.detail.name)+" ")],1),t("p",{staticClass:"mb-1"},[e._v(e._s(e.detail.phone))]),t("p",[e._v(e._s(e.detail.email))]),t("p",{staticClass:"pt-4 h5"},[e._v("Endereço")]),t("hr",{staticClass:"my-1"}),t("p",{staticClass:"mb-1"},[e._v(e._s(e.addressStreet))]),t("p",{staticClass:"mb-1"},[e._v(e._s(e.detail.neighborhood)+" - "+e._s(e.detail.city)+"/"+e._s(e.detail.state))]),t("p",[e._v("CEP: "+e._s(e.detail.zipCode))])])},o=[],n=a(408),i=a(1511),l=a(5311),r={name:"ModalDetails",components:{BIcon:i.H,BModal:l.N},props:{id:{type:Number,required:!0},showModal:{type:Boolean,required:!0}},computed:{...(0,n.Se)(["detailContact"]),detail(){return this.detailContact(this.id)},addressStreet(){const{address:e,number:t,complement:a}=this.detail;return a?`${e}, ${t} - ${a}`:`${e}, ${t}`},openModal:{get(){return this.showModal},set(e){this.$emit("change",e)}}}},d=r,c=a(1001),p=(0,c.Z)(d,s,o,!1,null,null,null),u=p.exports}}]);
//# sourceMappingURL=417.c4c7e7bc.js.map