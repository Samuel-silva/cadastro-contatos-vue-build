(self["webpackChunkcadastro_clientes_vue"]=self["webpackChunkcadastro_clientes_vue"]||[]).push([[130],{9929:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return j}});var n=function(){var t=this,e=t._self._c;return e("div",[e("header-component"),e("main-component",[e("bread-crump",{attrs:{title:t.txtTitle}}),e("div",{staticClass:"d-flex justify-content-sm-between flex-column flex-sm-row"},[e("h2",[t._v(t._s(t.txtTitle))])]),e("b-row",{staticClass:"justify-content-center pt-5"},[e("b-col",{attrs:{md:"8"}},[e("b-form",{on:{submit:t.onSubmit}},[t.loadingDataContact?e("div",{staticClass:"loading-data d-flex justify-content-center pt-5"},[e("b-spinner",{staticClass:"mt-5",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Loading",variant:"primary"}})],1):t._e(),e("b-form-group",{attrs:{id:"input-group-1",label:"Nome:","label-for":"input-1"}},[e("b-form-input",{ref:"nameInput",attrs:{id:"input-1",type:"text",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-2",label:"E-mail:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-3",label:"Telefone:","label-for":"input-3"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:["(##) ####-####","(##) #####-####"],expression:"['(##) ####-####', '(##) #####-####']"}],attrs:{id:"input-3",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{staticClass:"mt-3 input-zipcode",attrs:{id:"input-group-4",label:"CEP:","label-for":"input-4"}},[e("b-form-input",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],ref:"zipcode",attrs:{id:"input-4",required:""},on:{change:t.queryCEP},model:{value:t.form.zipCode,callback:function(e){t.$set(t.form,"zipCode",e)},expression:"form.zipCode"}}),t.zipCodeLoading?e("b-spinner",{staticClass:"flex-shrink-0 ml-2",attrs:{variant:"info"}}):t._e()],1),t.inputZipCodeError?e("small",{staticClass:"text-danger"},[t._v(" O CEP deve conter 9 números. ")]):t._e()],1)],1),e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-5",label:"Endereço:","label-for":"input-5"}},[e("b-form-input",{attrs:{id:"input-5",required:""},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),e("b-row",[e("b-col",{attrs:{md:"5"}},[e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-6",label:"Número:","label-for":"input-6"}},[e("b-form-input",{attrs:{id:"input-6",required:""},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1)],1),e("b-col",{attrs:{md:"7"}},[e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-7",label:"Complemento:","label-for":"input-7"}},[e("b-form-input",{attrs:{id:"input-7"},model:{value:t.form.complement,callback:function(e){t.$set(t.form,"complement",e)},expression:"form.complement"}})],1)],1)],1),e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-8",label:"Bairro:","label-for":"input-8"}},[e("b-form-input",{attrs:{id:"input-8",required:""},model:{value:t.form.neighborhood,callback:function(e){t.$set(t.form,"neighborhood",e)},expression:"form.neighborhood"}})],1),e("b-row",[e("b-col",{attrs:{md:"8"}},[e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-9",label:"Cidade:","label-for":"input-9"}},[e("b-form-input",{attrs:{id:"input-9",required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1)],1),e("b-col",{attrs:{md:"4"}},[e("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-8",label:"Estado:","label-for":"input-8"}},[e("b-form-input",{attrs:{id:"input-8",required:""},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1)],1)],1),e("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary",disabled:t.saveLoading}},[t.saveLoading?[e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Salvando... ")]:[t._v(" "+t._s(t.txtBtnSubmit)+" ")]],2)],1)],1)],1),e("b-modal",{attrs:{hideHeaderClose:"",noCloseOnEsc:""},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.fillAgain(!t.errorSaving)}}},[t._v(" Sim ")]),e("b-button",{attrs:{variant:"success",to:"/"}},[t._v(" Não, ir para tela inicial ")])]},proxy:!0}]),model:{value:t.modalFinished,callback:function(e){t.modalFinished=e},expression:"modalFinished"}},[t.errorSaving?e("p",{domProps:{innerHTML:t._s(t.txtModalFinishedError)}}):e("p",{domProps:{innerHTML:t._s(t.txtModalFinishedSuccess)}})])],1),e("footer-component")],1)},a=[],o=r(306),i={queryCep:t=>o.Z.get(`https://viacep.com.br/ws/${t}/json/`)},s=r(3280),u=r(408),l=r(3458),c=r(691),d=r(2861),m=r(8641),p=r(5311),f=r(9918),h=r(6297),v=function(){var t=this,e=t._self._c;return e("b-breadcrumb",{staticClass:"pb-2"},[e("b-breadcrumb-item",{attrs:{to:"/"}},[t._v("Home")]),e("b-breadcrumb-item",{attrs:{active:""}},[t._v(t._s(t.title))])],1)},b=[],g=r(4525),C={name:"BreadCrump",components:{BBreadcrumb:g.P},props:{title:{type:String,required:!0}}},k=C,y=r(1001),x=(0,y.Z)(k,v,b,!1,null,null,null),w=x.exports,_=r(3920),E=r(377),S=r(1799),M={name:"FormView",components:{BButton:c.T,BCol:d.l,BForm:m.e,BModal:p.N,BRow:f.T,BSpinner:h.X,BreadCrump:w,FooterComponent:_.Z,HeaderComponent:E.Z,MainComponent:S.Z},directives:{mask:l.mask},data(){return{errorSaving:!1,form:{name:"",email:"",phone:"",zipCode:"",number:"",address:"",complement:"",neighborhood:"",city:"",state:""},inputZipCodeError:!1,loadingDataContact:!1,modalFinished:!1,saveLoading:!1,txtModalNotFound:"O CEP não foi encontrado, favor preencher os campos de endereço.",txtModalError:"Houve um erro ao carregar as informações do endereço, favor preencher os campos de endereço.",zipCodeLoading:!1}},computed:{...(0,u.Se)(["detailContact"]),...(0,u.rn)(["contacts"]),newRegister(){return"new-register"===this.$route.name},txtTitle(){return this.newRegister?"Novo cadastro":"Editar cadastro"},txtBtnSubmit(){return this.newRegister?"Cadastrar":"Alterar"},txtModalFinishedError(){return this.newRegister?"Houve um erro ao salvar o contato.<br />Deseja adicionar novamente o contato?":"Houve um erro ao alterar o contato.<br />Deseja tentar alterar novamente o contato?"},txtModalFinishedSuccess(){return this.newRegister?"Contato adicionado com sucesso.<br />Deseja adicionar um novo contato?":"Contato alterado com sucesso.<br />Deseja continuar na editando este contato?"}},watch:{contacts(){this.getDetailContact(this.$route.params)}},created(){"edit-register"===this.$route.name&&(this.loadingDataContact=!0,0===this.contacts.length?this.getAllContacts():this.getDetailContact(this.$route.params))},methods:{...(0,u.nv)(["getAllContacts"]),clearForm(){const t=Object.keys(this.form).reduce(((t,e)=>({...t,[e]:""})),{});this.form=t},async createNewContact(t){this.errorSaving=!1,this.saveLoading=!0,await s.Z.newContact(t).then().catch((()=>{this.errorSaving=!0})).finally((()=>{this.modalFinished=!0,this.saveLoading=!1}))},async editContact(t){this.errorSaving=!1,this.saveLoading=!0,await s.Z.editContact(this.$route.params.id,t).then().catch((()=>{this.errorSaving=!0})).finally((()=>{this.modalFinished=!0,this.saveLoading=!1}))},fillAgain(t){t&&this.newRegister&&this.clearForm(),this.modalFinished=!1,this.$refs.nameInput.focus()},getDetailContact(t){const e=this.detailContact(parseInt(t.id));Object.assign(this.form,e),this.loadingDataContact=!1},onSubmit(t){t.preventDefault(),this.newRegister?this.createNewContact(this.form):this.editContact(this.form)},async queryCEP(t){const e=t.replace(/-/g,"");this.inputZipCodeError=!1,8!=e.length?(this.$refs.zipcode.focus(),this.inputZipCodeError=!0):(this.zipCodeLoading=!0,await i.queryCep(e).then((t=>{if(t.data?.erro)this.showModal(this.txtModalNotFound);else{const{logradouro:e,bairro:r,localidade:n,uf:a}=t.data;Object.assign(this.form,{address:e,neighborhood:r,city:n,state:a})}})).catch((()=>{this.showModal(this.txtModalError)})).finally((()=>{this.zipCodeLoading=!1})))},showModal(t){this.$bvModal.msgBoxOk(t,{centered:!0,okVariant:"success"})}}},F=M,$=(0,y.Z)(F,n,a,!1,null,null,null),j=$.exports},3458:function(t){(function(e,r){t.exports=r()})(0,(function(){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,r){"use strict";function n(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=r(2),o=r(0),i=r.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var s=t.getElementsByTagName("input");if(1!==s.length)throw new Error("v-mask directive requires 1 input, found "+s.length);t=s[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,s=t.value[i-1];for(t.value=r.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==s;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(n("input"))}};var u=r.i(a.a)(t.value,o.mask,!0,o.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(n("input")))}},function(t,e,r){"use strict";var n=r(6),a=r(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?r.i(a.a)(n.a,e,i)(t,e,o,i):r.i(n.a)(t,e,o,i)}},function(t,e,r){"use strict";function n(t){t.component(u.a.name,u.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(0),o=r.n(a),i=r(1),s=r(7),u=r.n(s);r.d(e,"TheMask",(function(){return u.a})),r.d(e,"mask",(function(){return i.a})),r.d(e,"tokens",(function(){return o.a})),r.d(e,"version",(function(){return l}));var l="0.11.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(1),a=r(0),o=r.n(a),i=r(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=r.i(i.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,r){"use strict";function n(t,e,r){return e=e.sort((function(t,e){return t.length-e.length})),function(n,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var s=e[i];i++;var u=e[i];if(!(u&&t(n,u,!0,r).length>s.length))return t(n,s,o,r)}return""}}e.a=n},function(t,e,r){"use strict";function n(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=e[a],u=n[s],l=t[o];u&&!u.escape?(u.pattern.test(l)&&(i+=u.transform?u.transform(l):l,a++),o++):(u&&u.escape&&(a++,s=e[a]),r&&(i+=s),l===s&&o++,a++)}for(var c="";a<e.length&&r;){s=e[a];if(n[s]){c="";break}c+=s,a++}return i+c}e.a=n},function(t,e,r){var n=r(8)(r(4),r(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,r,n){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),r&&(s._scopeId=r),n){var u=s.computed||(s.computed={});Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}}))}return{esModule:a,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,r){t.exports=r(3)}])}))}}]);
//# sourceMappingURL=FormView.e663f482.js.map