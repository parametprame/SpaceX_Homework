(this.webpackJsonpspacexhomework=this.webpackJsonpspacexhomework||[]).push([[15],{166:function(e,t,n){"use strict";n.r(t);var c=n(138),a=n(0),i=n.n(a),r=n(153),s=n(137),l=n(123),o=n(231),d=n(36),u=n(170),h=n(227),j=n(221),b=n(243),m=n(229),g=n(234),x=n(235),O=n(74),f=n(25),p=n(23),k=n(5),v=Object(O.a)((function(e){return{root:{margin:0,padding:e.spacing(2),color:"black"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,c=e.onClose,a=Object(u.a)(e,["children","classes","onClose"]);return Object(k.jsxs)(g.a,Object(d.a)(Object(d.a)({disableTypography:!0,className:n.root},a),{},{children:[Object(k.jsx)(h.a,{variant:"h6",children:t}),c?Object(k.jsx)(j.a,{"aria-label":"close",className:n.closeButton,onClick:c,children:Object(k.jsx)(p.a,{icon:f.c})}):null]}))})),y=Object(O.a)((function(e){return{root:{padding:e.spacing(2)}}}))(x.a),w=function(e){var t=Object(s.a)(["dialogData",e.mission.id],(function(){return fetch("https://api.spacexdata.com/v3/launches/".concat(e.mission.id)).then((function(e){return e.json()}))})),n=t.isLoading,c=t.error,a=t.data;return c?"An error has occurred: "+c.message:Object(k.jsx)(b.a,{onClose:e.onClose,"aria-labelledby":"customized-dialog-title",open:!0,children:n?Object(k.jsx)(i.a.Fragment,{children:Object(k.jsx)(y,{dividers:!0,children:Object(k.jsx)(h.a,{gutterBottom:!0,children:Object(k.jsx)(o.a,{color:"secondary"})})})}):Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)(v,{id:"customized-dialog-title",onClose:e.onClose,children:["Mission : ",a.mission_name]}),Object(k.jsxs)(y,{dividers:!0,children:[Object(k.jsx)(h.a,{gutterBottom:!0,style:{textAlign:"center"},children:a.links?Object(k.jsx)("img",{src:a.links.mission_patch_small}):Object(k.jsx)(o.a,{color:"secondary"})}),Object(k.jsxs)(h.a,{gutterBottom:!0,style:{fontWeight:"blod"},children:["Rocket Name : ",a.rocket.rocket_name]}),Object(k.jsxs)(h.a,{gutterBottom:!0,style:{fontWeight:"blod"},children:["Detail : ",null===a.details?"Null":a.details]}),Object(k.jsxs)(h.a,{gutterBottom:!0,children:["Launch Result : ","".concat(a.launch_success)]}),Object(k.jsxs)(h.a,{gutterBottom:!0,style:{textAlign:"center",display:"flex",flexDirection:"row",justifyContent:" space-between"},children:[Object(k.jsx)(m.a,{variant:"outlined",href:a.links.article_link,children:"Article"}),Object(k.jsx)(m.a,{variant:"outlined",href:a.links.wikipedia,children:"Wikipedia"}),Object(k.jsx)(m.a,{variant:"outlined",href:a.links.video_link,children:"Youtube"})]})]})]})})},_=[{field:"id",headerName:"Fight Number",flex:1,headerAlign:"center",align:"center",sortable:!1},{field:"name",headerName:"Rocket Name",flex:1,headerAlign:"center",align:"center"},{field:"mission_name",headerName:"Mission Name",flex:1,headerAlign:"center",align:"center"},{field:"launch_year",headerName:"Launch Year",type:"number",flex:1,headerAlign:"center",align:"center"},{field:"launch_success",headerName:"Launch Success",flex:1,headerAlign:"center",align:"center",sortable:!1}],N=Object(l.a)((function(e){return{root:{"& div.MuiDataGrid-cell":{color:"white"},"& div.MuiDataGrid-colCellTitle":{color:"black"},"& div.MuiToolbar-root":{color:"white"},"& div.MuiTablePagination-actions":{color:"white"},"& div.MuiIconButton-label":{color:"white"},"& div.MuiDataGrid-colCellWrapper":{backgroundColor:"white"}}}}));function C(){var e=N(),t=Object(a.useState)(null),n=Object(c.a)(t,2),l=n[0],d=n[1],u=Object(s.a)("Listlaunches",(function(){return fetch("https://api.spacexdata.com/v3/launches").then((function(e){return e.json()}))})),h=u.isLoading,j=u.error,b=u.data;if(console.log(b),h)return Object(k.jsx)("div",{style:{textAlign:"center"},children:Object(k.jsx)(o.a,{color:"secondary"})});if(j)return"An error has occurred: "+j.message;return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)("div",{style:{height:"80vh",width:"100%",backgroundColor:"black"},className:e.root,children:Object(k.jsx)(r.a,{rows:Array.isArray(b)?b.map((function(e){return{id:e.flight_number.toString(),name:e.rocket.rocket_name,mission_name:e.mission_name,launch_year:e.launch_year,launch_success:"".concat(e.launch_success)}})):[],columns:_,pagination:!0,pageSize:10,onRowClick:function(e){d(e.row)}})}),l?Object(k.jsx)(w,{mission:l,onClose:function(){d(null)}}):null]})}var A=n(83),B=n.n(A);t.default=function(){return B.a.init({duration:2e3}),Object(k.jsx)(i.a.Fragment,{children:Object(k.jsx)("section",{id:"lau",children:Object(k.jsx)("div",{className:"launches",style:{display:"flex",alignItems:"center"},children:Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row row-cols-1  row-cols-md-1",children:Object(k.jsx)(C,{})})})})})})}}}]);
//# sourceMappingURL=15.45013b68.chunk.js.map