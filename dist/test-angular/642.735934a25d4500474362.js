(self.webpackChunktest_angular=self.webpackChunktest_angular||[]).push([[642],{3642:(t,e,a)=>{"use strict";a.r(e),a.d(e,{TeachersModule:()=>d});var s=a(1116),r=a(3337),c=a(5366),n=a(3587),i=a.t(n,2),l=a(3957),p=a(5307);const u=[{path:"",component:(()=>{class t{constructor(t){this.api=t,this.teachers=new c.vpe,this.dataTable=JSON.parse(JSON.stringify(i)).default}ngOnInit(){this.api.getTeachers().subscribe(t=>{this.teachers.emit(t.map(t=>(t.dateOfBirth&&(t.age=this.api.calculateAge(t.dateOfBirth)),t)))})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(l.t))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-teachers"]],decls:2,vars:2,consts:[[1,"body_table"],[3,"arrayData","dataTable"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"app-table",1),c.qZA()),2&t&&(c.xp6(1),c.Q6J("arrayData",e.teachers)("dataTable",e.dataTable))},directives:[p.a],styles:[""]}),t})()}];let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),t})();var h=a(5425);let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.ez,o,h.m]]}),t})()}}]);