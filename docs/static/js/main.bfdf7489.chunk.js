(this["webpackJsonpcrud-react-app"]=this["webpackJsonpcrud-react-app"]||[]).push([[0],{101:function(e,a,r){},104:function(e,a,r){"use strict";r.r(a);var t=r(2),n=r(0),o=r(9),l=r.n(o),i=r(76),c=r(16),s=r(10),d=r(157),m=r(158),u=r(22),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=[{helperText:"",error:!1,name:"nombreUsuario"},{helperText:"",error:!1,name:"nombre"},{helperText:"",error:!1,name:"apellido"},{helperText:"",error:!1,name:"rol"},{helperText:"",error:!1,name:"correo"},{helperText:"",error:!1,name:"password"}],r=Object(n.useState)(e),t=Object(s.a)(r,2),o=t[0],l=t[1],i=Object(n.useState)(a),d=Object(s.a)(i,2),m=d[0],b=d[1],j=function(){l(e)},h=function(e){var a=m.filter((function(a){return a.name===e.name})),r=Object(s.a)(a,1)[0];""===e.value&&!1===r.error?(r.helperText="Este campo es requerido",r.error=!r.error):""!==e.value&&!1!==r.error&&(r.helperText="",r.error=!r.error)},p=function(){m.map((function(e){e.error=!0,e.helperText="Este campo es requerido"})),b(m)},f=function(e){var a=e.target;h(a),l(Object(u.a)(Object(u.a)({},o),{},Object(c.a)({},a.name,a.value)))};return[o,l,m,p,f,j]},j=(r(68),r(28)),h=r.n(j),p=r(50),f=function(){var e=Object(p.a)(h.a.mark((function e(){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:53021/api/React/ListaUsuarios",e.next=3,fetch("http://localhost:53021/api/React/ListaUsuarios");case 3:if(!(a=e.sent).ok){e.next=6;break}return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(h.a.mark((function e(a){var r,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="http://localhost:53021/api/React/EliminarUsuario/".concat(encodeURI(a)),e.next=3,fetch(r,{method:"POST"});case 3:if(!(t=e.sent).ok){e.next=8;break}return e.abrupt("return",t.json());case 8:return e.abrupt("return","ERROR");case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(h.a.mark((function e(a,r,t,n,o,l){var i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:53021/api/React/CrearUsuario",e.next=3,fetch("http://localhost:53021/api/React/CrearUsuario",{method:"POST",headers:{Accept:"application/json; charset=utf-8","Content-Type":"application/json;charset=UTF-8"},mode:"cors",body:JSON.stringify({NombreUsuario:a,Nombre:r,Apellido:t,Correo:o,Password:l,Rol:n})});case 3:if(i=e.sent,console.log(i),!i.ok){e.next=9;break}return e.abrupt("return",i.json());case 9:return e.abrupt("return","ERROR");case 10:case"end":return e.stop()}}),e)})));return function(a,r,t,n,o,l){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(h.a.mark((function e(a){var r,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="http://localhost:53021/api/React/EditarUsuario/".concat(encodeURI(a)),e.next=3,fetch(r);case 3:if(!(t=e.sent).ok){e.next=8;break}return e.abrupt("return",t.json());case 8:return e.abrupt("return","ERROR");case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=function(){var e,a=Object(n.useState)(2),r=Object(s.a)(a,2),o=r[0],l=(r[1],b()),i=Object(s.a)(l,5),u=i[0],j=u.nombreUsuario,h=void 0===j?"":j,p=u.nombre,f=void 0===p?"":p,O=u.apellido,N=void 0===O?"":O,v=u.rol,g=void 0===v?"0":v,C=u.correo,T=void 0===C?"":C,w=u.password,A=void 0===w?"":w,I=(i[1],Object(s.a)(i[2],6)),y=I[0],S=I[1],R=I[2],U=I[3],E=I[4],_=I[5],k=(i[3],i[4]),P=function(){return""!==h&&(""!==f&&(""!==N&&(""!==g&&(""!==T&&""!==A))))};return Object(t.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(t.jsx)("form",{onSubmit:function(e){e.preventDefault(),P()&&x(h,f,N,g,T,A).then((function(e){}))},children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)("div",{className:"card-header text-white bg-dark mb-3",children:"CREAR USUARIO"}),Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsxs)("div",{className:"form-row",children:[Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"nombreUsuario"===y.name&&y.error,helperText:"nombreUsuario"===y.name&&y.helperText,label:"Nombre de Usuario",variant:"outlined",fullWidth:!0,name:"nombreUsuario",autoComplete:"off",onChange:k})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"nombre"===S.name&&S.error,helperText:"nombre"===S.name&&S.helperText,label:"Nombre",variant:"outlined",fullWidth:!0,name:"nombre",autoComplete:"off",onChange:k})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"apellido"===R.name&&R.error,helperText:"apellido"===R.name&&R.helperText,label:"Apellido",variant:"outlined",fullWidth:!0,name:"apellido",autoComplete:"off",onChange:k})})]}),Object(t.jsxs)("div",{className:"form-row mt-3",children:[Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"correo"===E.name&&E.error,helperText:"correo"===E.name&&E.helperText,label:"Correo",variant:"outlined",fullWidth:!0,name:"correo",autoComplete:"off",onChange:k})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"password"===_.name&&_.error,helperText:"password"===_.name&&_.helperText,label:"Contrase\xf1a",variant:"outlined",type:"Password",fullWidth:!0,name:"password",autoComplete:"off",onChange:k})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,(e={error:"rol"===U.name&&U.error,helperText:"rol"===U.name&&U.helperText,select:!0,fullWidth:!0,label:"Rol del Sistema",value:o,name:"rol",onChange:k},Object(c.a)(e,"helperText","Selecciona un Rol"),Object(c.a)(e,"variant","outlined"),Object(c.a)(e,"children",[{value:"2",label:"Administrador"}].map((function(e){return Object(t.jsx)(m.a,{value:e.value,children:e.label},e.value)}))),e))})]})]}),Object(t.jsx)("div",{className:"card-footer text-center",children:Object(t.jsx)("button",{type:"submit",className:"btn btn-primary animate__animated animate__flipInX",children:"CREAR USUARIO"})})]})}),Object(t.jsxs)("div",{className:"card mt-3",children:[Object(t.jsx)("div",{className:"card-header text-white bg-dark mb-3",children:"DATOS USUARIO (TEST)"}),Object(t.jsx)("div",{className:"card-body",children:Object(t.jsxs)("div",{className:"row ml-2",children:[Object(t.jsxs)("div",{className:"mr-5",children:[Object(t.jsx)("label",{children:"Nombre Usuario: "}),Object(t.jsx)("br",{}),Object(t.jsx)("label",{children:"Nombre Completo: "}),Object(t.jsx)("br",{}),Object(t.jsx)("label",{children:"Nombre: "}),Object(t.jsx)("br",{}),Object(t.jsx)("label",{children:"Apellido: "}),Object(t.jsx)("br",{}),Object(t.jsx)("label",{children:"Rol: "}),Object(t.jsx)("br",{}),Object(t.jsx)("label",{children:"Correo: "}),Object(t.jsx)("br",{}),Object(t.jsx)("label",{children:"Contrase\xf1a: "})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{children:[" ",h," "]}),Object(t.jsx)("br",{}),Object(t.jsxs)("label",{children:[" ",f," ",N," "]}),Object(t.jsx)("br",{}),Object(t.jsxs)("label",{children:[" ",f," "]}),Object(t.jsx)("br",{}),Object(t.jsxs)("label",{children:[" ",N," "]}),Object(t.jsx)("br",{}),Object(t.jsxs)("label",{children:[" ",g," "]}),Object(t.jsx)("br",{}),Object(t.jsxs)("label",{children:[" ",T," "]}),Object(t.jsx)("br",{}),Object(t.jsxs)("label",{children:[" ",A," "]})]})]})})]})]})},g=r(20),C=function(e){var a=e.us,r=e.handleDelete;return Object(t.jsxs)("tr",{children:[Object(t.jsxs)("td",{className:"text-center",children:[" ",a.Nombre," "]}),Object(t.jsxs)("td",{className:"text-center",children:[" ",a.Apellido," "]}),Object(t.jsxs)("td",{className:"text-center",children:[" ",a.NombreUsuario," "]}),Object(t.jsxs)("td",{className:"text-center",children:[Object(t.jsx)(g.b,{to:"./edit/".concat(a.Id),className:"btn btn-success mr-2 animate__animated animate__flipInX",children:Object(t.jsx)("i",{className:"fas fa-edit"})}),Object(t.jsx)("button",{className:"btn btn-danger animate__animated animate__flipInX",onClick:function(){return r(a.Id)},children:Object(t.jsx)("i",{className:"fas fa-trash-alt"})})]})]})},T=(r(101),r(27)),w=r.n(T),A=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),r=a[0],o=a[1];Object(n.useEffect)((function(){f().then((function(e){var a=JSON.parse(e);o(a)}))}),[]);var l=function(e){var a=r.find((function(a){return a.Id===e})),t=a.Nombre,n=a.Apellido;w.a.fire({title:"\xbfEliminar al Usuario ".concat(t,"  ").concat(n,"?"),text:"No podr\xe1s revertirlo.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"S\xed, eliminarlo",cancelButtonText:"Cancelar"}).then((function(a){a.isConfirmed&&O(e).then((function(a){"ERROR"===a?w.a.fire("Error","El Usuario no puede ser eliminado.","error"):(o(r.filter((function(a){return a.Id!==e}))),w.a.fire("Eliminado","El Usuario ha sido eliminado de la Base de Datos.","success"))}))}))};return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(g.b,{to:"/create",className:"btn btn-dark mb-2 animate__animated animate__flipInX",children:"Crear Usuario"}),Object(t.jsxs)("table",{className:"table animate__animated animate__fadeIn",children:[Object(t.jsx)("thead",{className:"thead-dark",children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{className:"text-center",scope:"col",children:"Nombre"}),Object(t.jsx)("th",{className:"text-center",scope:"col",children:"Apellido"}),Object(t.jsx)("th",{className:"text-center",scope:"col",children:"Nombre Usuario"}),Object(t.jsx)("th",{className:"text-center",scope:"col",children:"Detalles"})]})}),Object(t.jsx)("tbody",{children:r.map((function(e){return Object(t.jsx)(C,{us:e,handleDelete:l},e.Id)}))})]})]})},I=r(14),y=function(){var e=Object(I.g)().id,a=b(),r=Object(s.a)(a,5),o=r[0],l=r[1],i=r[2],c=(r[3],r[4]),m=o.nombreUsuario,u=void 0===m?"":m,j=o.nombre,h=void 0===j?"":j,p=o.apellido,f=void 0===p?"":p,O=o.rol,x=void 0===O?"":O,v=o.correo,g=void 0===v?"":v,C=o.password,T=void 0===C?"":C,w=Object(s.a)(i,6),A=w[0],y=w[1],S=w[2],R=w[3],U=w[4],E=w[5];Object(n.useEffect)((function(){N(e).then((function(e){var a=JSON.parse(e),r=a.NombreUsuario,t=a.Nombre,n=a.Apellido,o=a.RolEnSistema,i=a.Email;l({nombreUsuario:r,nombre:t,apellido:n,rol:o,correo:i})}))}),[]);var _=function(){return""!==u&&(""!==h&&(""!==f&&(""!==x&&(""!==g&&""!==T))))};return Object(t.jsx)("div",{className:"animate__animated animate__fadeIn",children:Object(t.jsx)("form",{onSubmit:function(e){e.preventDefault();_()},children:Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)("div",{className:"card-header text-white bg-dark mb-3",children:"EDITAR USUARIO"}),Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsxs)("div",{className:"form-row",children:[Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"nombreUsuario"===A.name&&A.error,helperText:"nombreUsuario"===A.name&&A.helperText,id:"outlined-basic",label:"Nombre de Usuario",variant:"outlined",value:u,fullWidth:!0,name:"nombreUsuario",autoComplete:"off",onChange:c})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"nombre"===y.name&&y.error,helperText:"nombre"===y.name&&y.helperText,id:"outlined-basic",label:"Nombre",variant:"outlined",value:h,fullWidth:!0,name:"nombre",autoComplete:"off",onChange:c})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"apellido"===S.name&&S.error,helperText:"apellido"===S.name&&S.helperText,id:"outlined-basic",label:"Apellido",variant:"outlined",value:f,fullWidth:!0,name:"apellido",autoComplete:"off",onChange:c})})]}),Object(t.jsxs)("div",{className:"form-row mt-3",children:[Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"rol"===R.name&&R.error,helperText:"rol"===R.name&&R.helperText,id:"outlined-basic",label:"Rol",variant:"outlined",value:x,fullWidth:!0,name:"rol",autoComplete:"off",onChange:c})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"correo"===U.name&&U.error,helperText:"correo"===U.name&&U.helperText,id:"outlined-basic",label:"Correo",variant:"outlined",value:g,fullWidth:!0,name:"correo",autoComplete:"off",onChange:c})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"password"===E.name&&E.error,helperText:"password"===E.name&&E.helperText,id:"outlined-basic",label:"Contrase\xf1a",variant:"outlined",fullWidth:!0,name:"password",autoComplete:"off",onChange:c})})]})]}),Object(t.jsx)("div",{className:"card-footer text-center",children:Object(t.jsx)("button",{type:"submit",className:"btn btn-primary animate__animated animate__flipInX",children:"EDITAR USUARIO"})})]})})})},S=r(142),R=r(141),U=r(148),E=r(149),_=r(151),k=r(152),P=r(145),D=r(146),F=r(150),W=r(143),H=r(144),L=r(161),B=r(156),J=Object(S.a)((function(e){return{table:{marginTop:e.spacing(3),"& thead th":{fontWeight:"600",color:e.palette.primary.main,backgroundColor:"#dedeff"},"& tbody td":{fontWeight:"300"},"& tbody tr:hover":{backgroundColor:"#fffbf2",cursor:"pointer"}}}}));function M(e,a,r){var o=J(),l=[5,10,25],i=Object(n.useState)(0),c=Object(s.a)(i,2),d=c[0],m=c[1],u=Object(n.useState)(l[d]),b=Object(s.a)(u,2),j=b[0],h=b[1],p=Object(n.useState)(),f=Object(s.a)(p,2),O=f[0],x=f[1],N=Object(n.useState)(),v=Object(s.a)(N,2),g=v[0],C=v[1],T=function(e,a){m(a)},w=function(e){h(parseInt(e.target.value,10)),m(0)};function A(e,a,r){return a[r]<e[r]?-1:a[r]>e[r]?1:0}return{TblContainer:function(e){return Object(t.jsx)(W.a,{className:o.table,children:e.children})},TblHead:function(e){return Object(t.jsx)(H.a,{children:Object(t.jsx)(P.a,{children:a.map((function(e){return Object(t.jsx)(D.a,{sortDirection:g===e.id&&O,children:e.disableSorting?e.label:Object(t.jsx)(L.a,{active:g===e.id,direction:g===e.id?O:"desc",onClick:function(){var a;a=e.id,x(g===a&&"asc"===O?"desc":"asc"),C(a)},children:e.label})},e.id)}))})})},TblPagination:function(){return Object(t.jsx)(B.a,{component:"div",page:d,rowsPerPageOptions:l,rowsPerPage:j,count:e.length,onChangePage:T,onChangeRowsPerPage:w})},recordsAfterPagingAndSorting:function(){return function(e,a){var r=e.map((function(e,a){return[e,a]}));return r.sort((function(e,r){var t=a(e[0],r[0]);return 0!==t?t:e[1]-r[1]})),r.map((function(e){return e[0]}))}(r.fn(e)[0],function(e,a){return"desc"===e?function(e,r){return A(e,r,a)}:function(e,r){return-A(e,r,a)}}(O,g)).slice(d*j,(d+1)*j)},setPage:m}}var X=r(78);function z(e){var a=e.name,r=e.label,n=e.value,o=e.error,l=void 0===o?null:o,i=e.onChange,c=Object(X.a)(e,["name","label","value","error","onChange"]);return Object(t.jsx)(d.a,Object(u.a)(Object(u.a)({variant:"outlined",label:r,name:a,value:n,onChange:i},c),l&&{error:!0,helperText:l}))}var q=r(74),G=r.n(q),V=Object(S.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)},searchInput:{width:"75%"}}})),K=function(){return JSON.parse(localStorage.getItem("todos"))||[{userId:"1",userName:"Rominxx",jobTitleName:"Developer",firstName:"Romin",lastName:"Irani",preferredFullName:"Romin Irani",employeeCode:"E1",region:"CA",phoneNumber:"408-1234567",emailAddress:"romin.k.irani@gmail.com"},{userId:"2",userName:"NeilSnow",jobTitleName:"Developer",firstName:"Neil",lastName:"Snowden",preferredFullName:"Neil Irani",employeeCode:"E2",region:"CA",phoneNumber:"408-1111111",emailAddress:"neilrirani@gmail.com"},{userId:"3",userName:"TomHnk",jobTitleName:"Program Directory",firstName:"Tom",lastName:"Hanks",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"408-2222222",emailAddress:"tomhanks@gmail.com"},{userId:"4",userName:"Rmancilla",jobTitleName:"Program Directory",firstName:"Richard",lastName:"Mancilla",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"656-2345436",emailAddress:"richardmancilla@gmail.com"},{userId:"5",userName:"Felipin",jobTitleName:"Program Directory",firstName:"Felipe",lastName:"Olivares",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"545-121414",emailAddress:"felipeolivares@gmail.com"},{userId:"6",userName:"Oscarin",jobTitleName:"Program Directory",firstName:"Oscar",lastName:"Cumian",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"545-235255325",emailAddress:"oscarcumian@gmail.com"},{userId:"7",userName:"IrsHernan",jobTitleName:"Program Directory",firstName:"Iris",lastName:"Hernandez",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"343-564646",emailAddress:"irishernandez@gmail.com"},{userId:"8",userName:"FelipinMancilla",jobTitleName:"Program Directory",firstName:"Felipe",lastName:"Mancilla",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"342-354355",emailAddress:"felipemancilla@gmail.com"},{userId:"9",userName:"Seba",jobTitleName:"Program Directory",firstName:"Sebastian",lastName:"Cardenas",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"334-5435355",emailAddress:"sebastiancardenas@gmail.com"},{userId:"10",userName:"Mari",jobTitleName:"Program Directory",firstName:"Maria",lastName:"Fica",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"334-234234",emailAddress:"mariafica@gmail.com"},{userId:"11",userName:"Rafa",jobTitleName:"Program Directory",firstName:"Rafael",lastName:"Aravena",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"878-67848",emailAddress:"rafaelaravena@gmail.com"},{userId:"12",userName:"Marty",jobTitleName:"Program Directory",firstName:"Marta",lastName:"Rupallan",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"424-346646",emailAddress:"martarupallan@gmail.com"},{userId:"13",userName:"Pao",jobTitleName:"Program Directory",firstName:"Paola",lastName:"Cruz",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"464-3463464",emailAddress:"paolacruz@gmail.com"},{userId:"14",userName:"RafaOl",jobTitleName:"Program Directory",firstName:"Rafael",lastName:"Olivares",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"324-6757567",emailAddress:"rafaelolivares@gmail.com"},{userId:"15",userName:"Sebatello",jobTitleName:"Program Directory",firstName:"Sebastian",lastName:"Tello",preferredFullName:"Tom Hanks",employeeCode:"E3",region:"CA",phoneNumber:"099-1112122",emailAddress:"sebastiantello@gmail.com"}]},Q=[{id:"userName",label:"Nombre de Usuario"},{id:"firstName",label:"Nombre"},{id:"lastName",label:"Apellido"},{id:"emailAddress",label:"Email"},{id:"",label:""}],Y=function(){var e=V(),a=Object(n.useState)(!1),r=Object(s.a)(a,2),o=r[0],l=r[1],i=Object(n.useState)(K),c=Object(s.a)(i,2),d=c[0],m=c[1],u=Object(n.useState)({fn:function(e){return[e,{searching:!1}]}}),b=Object(s.a)(u,2),j=b[0],h=b[1],p=M(d,Q,j),f=p.TblContainer,O=p.TblHead,x=p.TblPagination,N=p.recordsAfterPagingAndSorting,v=p.setPage;Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(d))}),[d]),Object(n.useEffect)((function(){v(0)}),[o]);return Object(t.jsx)("div",{className:"animate__animated animate__fadeIn",children:Object(t.jsxs)(R.a,{className:e.pageContent,children:[Object(t.jsxs)(U.a,{children:[Object(t.jsx)(z,{label:"Buscar Usuarios",id:"inpSearch",className:e.searchInput,InputProps:{startAdornment:Object(t.jsx)(E.a,{position:"start",children:Object(t.jsx)(F.a,{})})},onChange:function(e){var a=e.target;""===a.value?l(!1):l(!0),h({fn:function(e){if(""===a.value)return[e,{searching:!1}];var r=e.filter((function(e){return e.userName.toLowerCase().includes(a.value)})),t=e.filter((function(e){return e.firstName.toLowerCase().includes(a.value)})),n=e.filter((function(e){return e.lastName.toLowerCase().includes(a.value)})),o=e.filter((function(e){return e.emailAddress.toLowerCase().includes(a.value)})),l=r.concat(t.filter((function(e){return r.indexOf(e)<0}))),i=l.concat(n.filter((function(e){return l.indexOf(e)<0})));return[i.concat(o.filter((function(e){return i.indexOf(e)<0}))),{searching:!0}]}})}}),Object(t.jsx)(_.a,{className:"ml-5",component:g.b,to:"/crearUsuario",variant:"outlined",color:"primary",children:"Crear Usuario"})]}),Object(t.jsxs)(f,{children:[Object(t.jsx)(O,{}),Object(t.jsx)(k.a,{children:N().map((function(a){return Object(t.jsxs)(P.a,{children:[Object(t.jsxs)(D.a,{children:[" ",a.userName," "]}),Object(t.jsxs)(D.a,{children:[" ",a.firstName," "]}),Object(t.jsxs)(D.a,{children:[" ",a.lastName," "]}),Object(t.jsxs)(D.a,{children:[" ",a.emailAddress," "]}),Object(t.jsx)(D.a,{children:Object(t.jsx)(_.a,{variant:"contained",color:"secondary",className:e.button,startIcon:Object(t.jsx)(G.a,{}),onClick:function(){return function(e){var a=d.filter((function(a){return a.userId!==e}));m(a),w.a.fire({icon:"success",title:"Eliminado",showConfirmButton:!1,timer:1500})}(a.userId)},children:"Eliminar"})})]},a.userId)}))})]}),Object(t.jsx)(x,{})]})})},Z=function(){return Object(t.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(t.jsx)("a",{className:"navbar-brand",href:"#",children:"ReactJS"}),Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})}),Object(t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(t.jsx)("ul",{className:"navbar-nav",children:Object(t.jsx)(g.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/table",children:"Tabla"})})})]})},$=r(77),ee=r(140),ae=r(160),re=r(159),te=r(147),ne=r(153),oe=r(154),le=Object(S.a)((function(e){return{pageContent:{margin:e.spacing(5),padding:e.spacing(3)}}})),ie=function(){var e,a,r=Object(n.useState)({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),o=Object(s.a)(r,2),l=o[0],i=o[1],j=le(),h=Object(n.useState)(2),p=Object(s.a)(h,2),f=p[0],O=(p[1],b()),x=Object(s.a)(O,5),N=x[0],v=N.nombreUsuario,g=void 0===v?"":v,C=N.nombre,T=void 0===C?"":C,A=N.apellido,I=void 0===A?"":A,y=(N.rol,N.correo),S=void 0===y?"":y,U=(N.password,x[1],Object(s.a)(x[2],6)),k=U[0],P=U[1],D=U[2],F=U[3],W=U[4],H=(U[5],x[3],x[4]),L=function(){return""!==g&&(""!==T&&(""!==I&&""!==S))};return Object(t.jsx)("div",{className:"animate__animated animate__fadeIn",children:Object(t.jsxs)(R.a,{className:j.pageContent,children:[Object(t.jsxs)("div",{className:"form-row",children:[Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"nombreUsuario"===k.name&&k.error,helperText:"nombreUsuario"===k.name&&k.helperText,label:"Nombre de Usuario",variant:"outlined",fullWidth:!0,name:"nombreUsuario",autoComplete:"off",onChange:H})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"nombre"===P.name&&P.error,helperText:"nombre"===P.name&&P.helperText,label:"Nombre",variant:"outlined",fullWidth:!0,name:"nombre",autoComplete:"off",onChange:H})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"apellido"===D.name&&D.error,helperText:"apellido"===D.name&&D.helperText,label:"Apellido",variant:"outlined",fullWidth:!0,name:"apellido",autoComplete:"off",onChange:H})})]}),Object(t.jsxs)("div",{className:"form-row mt-3",children:[Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,{error:"correo"===W.name&&W.error,helperText:"correo"===W.name&&W.helperText,label:"Correo",variant:"outlined",fullWidth:!0,name:"correo",autoComplete:"off",onChange:H})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsxs)(ee.a,{className:(j.margin,j.textField),variant:"outlined",fullWidth:!0,children:[Object(t.jsx)(ae.a,{htmlFor:"outlined-adornment-password",children:"Contrase\xf1a"}),Object(t.jsx)(re.a,{name:"password",id:"outlined-adornment-password",type:l.showPassword?"text":"password",value:l.password,onChange:(a="password",function(e){i(Object(u.a)(Object(u.a)({},l),{},Object(c.a)({},a,e.target.value)))}),endAdornment:Object(t.jsx)(E.a,{position:"end",children:Object(t.jsx)(te.a,{"aria-label":"toggle password visibility",onClick:function(){i(Object(u.a)(Object(u.a)({},l),{},{showPassword:!l.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:l.showPassword?Object(t.jsx)(ne.a,{}):Object(t.jsx)(oe.a,{})})}),labelWidth:70})]})}),Object(t.jsx)("div",{className:"col",children:Object(t.jsx)(d.a,(e={error:"rol"===F.name&&F.error,helperText:"rol"===F.name&&F.helperText,select:!0,fullWidth:!0,label:"Rol del Sistema",value:f,name:"rol",onChange:H},Object(c.a)(e,"helperText","Selecciona un Rol"),Object(c.a)(e,"variant","outlined"),Object(c.a)(e,"children",[{value:"2",label:"Administrador"}].map((function(e){return Object(t.jsx)(m.a,{value:e.value,children:e.label},e.value)}))),e))})]}),Object(t.jsx)("div",{className:"form-row mt-3",children:Object(t.jsx)("div",{className:"col text-center",children:Object(t.jsx)(_.a,{variant:"contained",color:"primary",onClick:function(e){if(e.preventDefault(),L()){var a={userId:(new Date).getTime(),userName:g,jobTitleName:"Developer",firstName:T,lastName:I,preferredFullName:"Romin Irani",employeeCode:"E1",region:"CA",phoneNumber:"408-1234567",emailAddress:S},r=JSON.parse(localStorage.getItem("todos")),t=[a].concat(Object($.a)(r));localStorage.setItem("todos",JSON.stringify(t)),w.a.fire({icon:"success",title:"USUARIO CREADO",showConfirmButton:!1,timer:1500})}else w.a.fire({icon:"error",title:"LOS CAMPOS SON OBLIGATORIOS.",text:"Complete los campos para crear un usuario"})},children:"Crear Usuario"})})})]})})},ce=function(){return Object(t.jsxs)(g.a,{children:[Object(t.jsx)(Z,{}),Object(t.jsx)("div",{className:"container mt-5",children:Object(t.jsxs)(I.d,{children:[Object(t.jsx)(I.b,{path:"/table",component:Y}),Object(t.jsx)(I.b,{path:"/crearUsuario",component:ie}),Object(t.jsx)(I.b,{path:"/create",component:v}),Object(t.jsx)(I.b,{path:"/edit/:id",component:y}),Object(t.jsx)(I.b,{extact:!0,plath:"/",component:A}),Object(t.jsx)(I.a,{to:"/"})]})})]})},se=r(38),de=r(75),me={usuarioListar:"[usuario] Listar"},ue="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,be=Object(se.c)({us:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case me.usuarioListar:return{usList:a.payload};case me.logout:return{};default:return e}}}),je=Object(se.e)(be,ue(Object(se.a)(de.a))),he=function(){return Object(t.jsx)(i.a,{store:je,children:Object(t.jsx)(ce,{})})};l.a.render(Object(t.jsx)(he,{}),document.getElementById("root"))},68:function(e,a,r){}},[[104,1,2]]]);
//# sourceMappingURL=main.bfdf7489.chunk.js.map