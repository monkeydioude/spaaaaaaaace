!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var o,i=function(){function t(t,n,e){this.context=t,this.camera=n,this.canvas=e}return t.prototype.draw=function(t){this.context.beginPath(),t.draw(this),this.context.stroke()},t.prototype.arc=function(t,n,e,o,i){return this.context.arc(this.camera.X(t),this.camera.Y(n),this.camera.zTransform(e),o,i),this},t.prototype.fill=function(t){return this.context.fillStyle=t,this.context.fill(),this},t}(),r=function(){function t(t,n,e){this.canvas=document.createElement("canvas"),this.canvas.width=t,this.canvas.height=n,this.context=new i(this.canvas.getContext("2d"),e,this),this.entities=[]}return t.prototype.appendTo=function(t){t.appendChild(this.canvas)},t.prototype.update=function(t){var n=this;this.entities.forEach((function(e){e.update(t),e.draw(t,n.context)}))},t}(),s=function(){function t(t,n,e){this.coords=t,this.radius=n,this.color=e}return t.prototype.draw=function(t){t.arc(this.coords.x,this.coords.y,this.radius,0,2*Math.PI),t.fill(this.color)},t.prototype.getCoordinates=function(){return this.coords},t.prototype.setCoordinates=function(t){this.coords=t},t}(),c=6.674*Math.pow(10,-11);!function(t){t[t.PLAY=0]="PLAY",t[t.PAUSE=1]="PAUSE"}(o||(o={}));o.PLAY;var a=7884e3,u=13e7,h=c,d=1,f=1.8,y=.1,p=25,l=1e4,m=1e4,v=.1,x=29780,b=function(t,n){var e=function(t,n){return(Math.abs(n.x-t.x)+Math.abs(n.y-t.y))*u}(t.coords,n.coords);if(0!=e&&!Number.isNaN(e))return h*(t.mass*n.mass/(e*e))*d},w=function(t,n,e,o){return-(t-n)/(Math.abs(e.x-o.x)+Math.abs(e.y-o.y))},g=function(t,n,e,o){var i=b(n,e)/n.mass/u;t.accelerate(i*w(n.coords.x,e.coords.x,n.coords,e.coords),i*w(n.coords.y,e.coords.y,n.coords,e.coords),o)},z=function(){function t(t,n,e,o,i,r,c){this.id=t,this.coords=n,this.radius=e,this.mass=o,this.color=i,this.velocity=r,this.planets=c,this.entities=[],this.model=new s(this.coords,this.radius,this.color)}return t.prototype.getEntities=function(){return this.entities},t.prototype.update=function(t){for(var n in this.planets){var e=this.planets[n];e.id!=this.id&&g(this.velocity,this,e,t)}this.velocity.apply(this.coords,t),console.log(this.id,this.coords),this.entities.forEach((function(n){return n.update(t)}))},t.prototype.draw=function(t,n){n.draw(this.model)},t.prototype.getCoordinates=function(){return this.coords},t.prototype.setCoordinates=function(t){this.coords=t},t}(),P=function(){function t(){this.entities=[]}return t.prototype.update=function(t){this.entities.forEach((function(n){return n.update(t)}))},t.prototype.draw=function(t,n){n.context.clearRect(0,0,n.canvas.canvas.width,n.canvas.canvas.height),n.canvas.canvas.style.backgroundColor="#000000",this.entities.forEach((function(e){return e.draw(t,n)})),n.context.stroke()},t.prototype.getEntities=function(){return this.entities},t}(),C=function(){function t(t,n,e){this.x=0,this.y=0,this.z=1,this.x=t,this.y=n,this.z=e}return t.prototype.X=function(t){return this.zTransform(t-this.x)},t.prototype.Y=function(t){return this.zTransform(t-this.y)},t.prototype.zTransform=function(t){return t*(1/this.z)},t.prototype.relativeX=function(t){return this.x+t},t.prototype.relativeY=function(t){return this.y+t},t}(),E=function(){function t(t,n){var e=this;this.camera=t,this.canvas=n,this.actionByKeycode={82:function(){e.camera.x=0,e.camera.y=0,e.camera.z=1},90:function(){e.camera.z<=v||(e.camera.z-=y)},88:function(){e.camera.z+=y},37:function(){e.camera.x-p<=0||(e.camera.x-=p)},38:function(){e.camera.y-p<=0||(e.camera.y-=p)},39:function(){e.camera.x>=l||(e.camera.x+=p)},40:function(){e.camera.y>=m||(e.camera.y+=p)}}}return t.prototype.handleKeyboard=function(t){null!=this.actionByKeycode&&this.actionByKeycode[t.keyCode]&&this.actionByKeycode[t.keyCode]()},t}(),M=function(){function t(t,n){this.x=t,this.y=n}return t.prototype.accelerate=function(t,n,e){this.x+=t*e,this.y+=n*e},t.prototype.apply=function(t,n){t.x+=this.x*n,t.y+=this.y*n},t}(),S=function(){function t(t,n){this.x=t,this.y=n}return t.prototype.setCoordinates=function(t,n){this.x=t,this.y=n},t}(),T=function(t,n,e){e.update(n/1e3*a),window.requestAnimationFrame((function(n){return T(n,n-t,e)}))};document.onreadystatechange=function(){if("complete"==document.readyState){var t=new C(l/2,m/2,f),n=new r(document.body.clientWidth,document.body.clientHeight,t);n.appendTo(document.body);var e=new P,o=new E(t,n),i=function(t,n){var e={x:n.relativeX(n.z*(t.canvas.width/2)),y:n.relativeY(n.z*(t.canvas.height/2)),radius:120,mass:1.9891e30,color:"orange",velocity:[0,0]};return{sun41:e,"earth alors":{x:e.x-14996e7/u,y:e.y,radius:30,mass:5972e21,color:"skyblue",velocity:[x/u*1/3,x/u*2/3]}}}(n,t),s=[];for(var c in document.querySelector("body").addEventListener("keydown",o.handleKeyboard.bind(o)),i){var a=i[c];s.push(new z(c,new S(a.x,a.y),a.radius,a.mass,a.color,new M(a.velocity[0],a.velocity[1]),s))}e.entities=s,n.entities.push(e),T(0,0,n)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy9Db250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01vZGVsL0Rpc2MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9HcmF2aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvR2VvbWV0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYW5ldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbWVyYS9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRyb2xzL0tleWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9QaHlzaWMvVmVsb2NpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BoeXNpYy9Db29yZGluYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9wbGFuZXRzLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiUGxheU1vZGUiLCJjb250ZXh0IiwiY2FtZXJhIiwiY2FudmFzIiwiZHJhdyIsIm1vZGVsIiwidGhpcyIsImJlZ2luUGF0aCIsInN0cm9rZSIsImFyYyIsIngiLCJ5IiwiYXMiLCJhZSIsIlgiLCJZIiwielRyYW5zZm9ybSIsImZpbGwiLCJjb2xvciIsImZpbGxTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsImVudGl0aWVzIiwiYXBwZW5kVG8iLCJlbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ1cGRhdGUiLCJkZWx0YSIsImZvckVhY2giLCJlIiwiY29vcmRzIiwicmFkaXVzIiwiY3R4IiwiTWF0aCIsIlBJIiwiZ2V0Q29vcmRpbmF0ZXMiLCJzZXRDb29yZGluYXRlcyIsIkciLCJwb3ciLCJQTEFZIiwia21QZXJQeCIsImdldEZvcmNlIiwiYSIsImIiLCJkaXN0IiwiYWJzIiwiQ29uZmlnIiwiTnVtYmVyIiwiaXNOYU4iLCJtYXNzIiwiZ2V0Rm9yY2VSYXRpbyIsImRpckEiLCJkaXJCIiwiY29vcmRBIiwiY29vcmRCIiwidmVsb2NpdHkiLCJhY2MiLCJhY2NlbGVyYXRlIiwiaWQiLCJwbGFuZXRzIiwiZ2V0RW50aXRpZXMiLCJhcHBseSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclJlY3QiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInoiLCJ2IiwicmVsYXRpdmVYIiwicmVsYXRpdmVZIiwiYWN0aW9uQnlLZXljb2RlIiwiODIiLCI5MCIsIjg4IiwiMzciLCIzOCIsIjM5IiwiNDAiLCJoYW5kbGVLZXlib2FyZCIsImV2ZW50IiwidW5kZWZpbmVkIiwia2V5Q29kZSIsIm9iaiIsIm1haW4iLCJ0MSIsImJvYXJkIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImJvZHkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNjZW5lIiwia2V5Ym9hcmRDb250cm9scyIsInBsYW5ldHNDb25maWciLCJzdW4iLCJxdWVyeVNl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RSxVQUFVdkUsRUFBT29FLEdBQUtuRSxFQUFPQSxPQUFPa0IsT0FBUyxJQUN2RGEsT0FBUSxJQUNSa0IsS0FBTSxVQUNObEMsTUFBTyxTQUNQd0MsU0FBVSxDQUFDLEVBQUcsSUFVbEIsTUFBTyxDQUNDLE1BQVMwQyxFQUNULGNBVk0sQ0FDVjFGLEVBQUcwRixFQUFJMUYsRUFBSyxRQUFXdUMsRUFDdkJ0QyxFQUFHeUYsRUFBSXpGLEVBQ1B1QixPQUFRLEdBQ1JrQixLQUFNLFFBQ05sQyxNQUFPLFVBQ1B3QyxTQUFVLENBQUVULEVBQW9CQSxFQUFpQixFQUFFLEVBQUlBLEVBQW9CQSxFQUFpQixFQUFFLEtEYzVFLENBQVd3QyxFQUFPdkYsR0FDcEM0RCxFQUFvQixHQUt4QixJQUFLLElBQUk5RixLQUZUc0QsU0FBUytFLGNBQWMsUUFBUUMsaUJBQWlCLFVBQVdKLEVBQWlCaEIsZUFBZTFGLEtBQUswRyxJQUVsRkMsRUFBZSxDQUN6QixJQUFNckcsRUFBSXFHLEVBQWNuSSxHQUN4QjhGLEVBQVF5QyxLQUFLLElBQUksRUFBT3ZJLEVBQ3BCLElBQUksRUFBWThCLEVBQUVZLEVBQUdaLEVBQUVhLEdBQ3ZCYixFQUFFb0MsT0FDRnBDLEVBQUVzRCxLQUNGdEQsRUFBRW9CLE1BQ0YsSUFBSSxFQUFTcEIsRUFBRTRELFNBQVMsR0FBSTVELEVBQUU0RCxTQUFTLElBQ3ZDSSxJQUlSbUMsRUFBTXhFLFNBQVdxQyxFQUNqQjJCLEVBQU1oRSxTQUFTOEUsS0FBS04sR0FFcEJWLEVBQUssRUFBRyxFQUFHRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4uL01vZGVsL01vZGVsXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IHtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHJlYWRvbmx5IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICAgICAgcmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzLFxuICAgICAgICApIHt9XG5cbiAgICBkcmF3KG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgICAgbW9kZWwuZHJhdyh0aGlzKVxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cbiAgICBhcmMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYXM6IG51bWJlciwgYWU6IG51bWJlcik6IENvbnRleHQge1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHRoaXMuY2FtZXJhLlgoeCksIHRoaXMuY2FtZXJhLlkoeSksIHRoaXMuY2FtZXJhLnpUcmFuc2Zvcm0ociksIGFzLCBhZSlcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBmaWxsKGNvbG9yOiBzdHJpbmcpOiBDb250ZXh0IHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG5cbnR5cGUgRHJhd0Z1bmN0aW9uID0gKGN0eDogQ29udGV4dCkgPT4gdm9pZFxuXG5leHBvcnQge1xuICAgIERyYXdGdW5jdGlvblxufSIsImNvbnN0IGNEdXJhdGlvbiA9IDBcbmNvbnN0IGZwcyA9IDIwXG5jb25zdCBkcGYgPSAxIC8gZnBzICogMTAwMFxubGV0IHpvb21MZXZlbCA9IDEuOFxubGV0IHpvb21NaW4gPSAwLjFcbmNvbnN0IHpvb21BY3Rpb25Qb3cgPSAwLjEwXG5jb25zdCBkZWNhbEJ5TW92ZSA9IDI1XG5cbmxldCBtYXhQbGFuZXRzID0gNFxubGV0IHBsYW5ldHNSYWRpdXNEZWYgPSB7bWluOiAzLCBtYXg6IDcwfVxuY29uc3QgcGxhbmV0c01pbkRpc3QgPSAxMFxuY29uc3QgcGxhbmV0QmFzZVNwZWVkID0gNDBcblxuY29uc3Qgc3BhY2VXID0gMTAwMDBcbmNvbnN0IHNwYWNlSCA9IDEwMDAwXG5jb25zdCBkZWNhbFggPSBzcGFjZVcgLyAyXG5jb25zdCBkZWNhbFkgPSBzcGFjZUggLyAyXG5cbmNvbnN0IGdyYXZpdHlQdWxsQnlEZWx0YSA9IDFcbmNvbnN0IGRpc3RQb3cgPSA1XG5cbmNvbnN0IGZvbnRTaXplID0gMTRcbmxldCBkZWJ1ZyA9IG51bGxcbmNvbnN0IGVhcnRoU3BlZWQgPSAyOS43OCAqIDEwMDBcbmNvbnN0IEcgPSBNYXRoLnBvdygxMCwgLTExKSAqIDYuNjc0XG5cbmVudW0gUGxheU1vZGUge1xuICAgIFBMQVksXG4gICAgUEFVU0Vcbn1cblxuY29uc3QgbW9kZSA9IFBsYXlNb2RlLlBMQVlcbmNvbnN0IGttUGVyUHggPSAxLjNlNVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2FtZVNwZWVkOiAzNjUgKiAyNCAqIDYwICogMTUsXG4gICAgLy8gZ2FtZVNwZWVkOiAxMDAsXG4gICAga21QZXJQeCxcbiAgICBtUGVyUHg6IGttUGVyUHggKiAxMDAwLFxuICAgIGtnUGVyUHhEZW5zaXR5OiAxMjAwLFxuICAgIEcsXG4gICAgZ3Jhdml0eVB1bGxCeURlbHRhLFxuICAgIGNEdXJhdGlvbixcbiAgICBmcHMsXG4gICAgZHBmLFxuICAgIHpvb21MZXZlbCxcbiAgICB6b29tQWN0aW9uUG93LFxuICAgIGRlY2FsQnlNb3ZlLFxuICAgIG1heFBsYW5ldHMsXG4gICAgcGxhbmV0c1JhZGl1c0RlZixcbiAgICBwbGFuZXRzTWluRGlzdCxcbiAgICBwbGFuZXRCYXNlU3BlZWQsXG4gICAgc3BhY2VXLFxuICAgIHNwYWNlSCxcbiAgICBkZWNhbFgsXG4gICAgZGVjYWxZLFxuICAgIGRpc3RQb3csXG4gICAgZm9udFNpemUsXG4gICAgZGVidWcsXG4gICAgUGxheU1vZGUsXG4gICAgbW9kZSxcbiAgICB6b29tTWluLFxuICAgIGVhcnRoU3BlZWRcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHkvRW50aXR5XCJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIlxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vQ2FtZXJhL0NhbWVyYVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gICAgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHJlYWRvbmx5IGNvbnRleHQ6IENvbnRleHRcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdXG5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhOiBDYW1lcmEpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBDb250ZXh0KHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSwgY2FtZXJhLCB0aGlzKVxuICAgICAgICB0aGlzLmVudGl0aWVzID0gW11cbiAgICB9XG5cbiAgICBhcHBlbmRUbyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKVxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUudXBkYXRlKGRlbHRhKVxuICAgICAgICAgICAgZS5kcmF3KGRlbHRhLCB0aGlzLmNvbnRleHQpXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4uL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vTW9kZWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjIGltcGxlbWVudHMgTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb29yZHM6IENvb3JkaW5hdGVzLCBwdWJsaWMgcmFkaXVzOiBudW1iZXIsIHB1YmxpYyBjb2xvcjogc3RyaW5nKSB7fVxuXG4gICAgZHJhdyhjdHg6IENvbnRleHQpIHtcbiAgICAgICAgY3R4LmFyYyh0aGlzLmNvb3Jkcy54LCB0aGlzLmNvb3Jkcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5maWxsKHRoaXMuY29sb3IpXG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoKTogQ29vcmRpbmF0ZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5jb29yZHNcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZHM6IENvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgfVxufSIsImltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9WZWxvY2l0eVwiO1xuaW1wb3J0IFBsYW5ldCBmcm9tIFwiLi4vUGxhbmV0XCJcbmltcG9ydCBDb29yZGluYXRlcyBmcm9tIFwiLi9Db29yZGluYXRlc1wiXG5pbXBvcnQgKiBhcyBHZW9tZXRyeSBmcm9tIFwiLi9HZW9tZXRyeVwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuLi9Db25maWdcIlxuXG5jb25zdCBnZXRGb3JjZSA9IChhOiBQbGFuZXQsIGI6IFBsYW5ldCk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgZGlzdCA9IEdlb21ldHJ5LmdldERpc3RhbmNlQmV0d2Vlbk9iamVjdHMoYS5jb29yZHMsIGIuY29vcmRzKVxuICAgIGlmIChkaXN0ID09IDAgfHwgTnVtYmVyLmlzTmFOKGRpc3QpKSB7XG4gICAgICAgIHJldHVybiBcbiAgICB9XG4gICAgY29uc3QgRiA9IENvbmZpZy5HICogKChhLm1hc3MqYi5tYXNzKS8oZGlzdCpkaXN0KSlcblxuICAgIHJldHVybiBGICogQ29uZmlnLmdyYXZpdHlQdWxsQnlEZWx0YVxufVxuXG5jb25zdCBnZXRGb3JjZVJhdGlvID0gKGRpckE6IG51bWJlciwgZGlyQjogbnVtYmVyLCBjb29yZEE6IENvb3JkaW5hdGVzLCBjb29yZEI6IENvb3JkaW5hdGVzKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gLShkaXJBIC0gZGlyQikgLyAoTWF0aC5hYnMoY29vcmRBLnggLSBjb29yZEIueCkgKyBNYXRoLmFicyhjb29yZEEueSAtIGNvb3JkQi55KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHZlbG9jaXR5OiBWZWxvY2l0eSwgYTogUGxhbmV0LCBiOiBQbGFuZXQsIGRlbHRhOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBhY2MgPSAoZ2V0Rm9yY2UoYSwgYikgLyBhLm1hc3MpIC8gQ29uZmlnLm1QZXJQeFxuICAgIHZlbG9jaXR5LmFjY2VsZXJhdGUoXG4gICAgICAgIGFjYyAqIGdldEZvcmNlUmF0aW8oYS5jb29yZHMueCwgYi5jb29yZHMueCwgYS5jb29yZHMsIGIuY29vcmRzKSxcbiAgICAgICAgYWNjICogZ2V0Rm9yY2VSYXRpbyhhLmNvb3Jkcy55LCBiLmNvb3Jkcy55LCBhLmNvb3JkcywgYi5jb29yZHMpLFxuICAgICAgICBkZWx0YVxuICAgIClcbn0iLCJpbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcblxuY29uc3QgZ2V0RGlzdGFuY2VCZXR3ZWVuT2JqZWN0cyA9IChhOiBDb29yZGluYXRlcywgYjogQ29vcmRpbmF0ZXMpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiAoTWF0aC5hYnMoYi54IC0gYS54KSArIE1hdGguYWJzKGIueSAtIGEueSkpICogQ29uZmlnLm1QZXJQeFxufVxuXG5leHBvcnQge1xuICAgIGdldERpc3RhbmNlQmV0d2Vlbk9iamVjdHNcbn0iLCJpbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL1BoeXNpYy9Db29yZGluYXRlc1wiXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi9DYW52YXMvQ29udGV4dFwiXG5pbXBvcnQgRGlzYyBmcm9tIFwiLi9Nb2RlbC9EaXNjXCJcbmltcG9ydCBWZWxvY2l0eSBmcm9tIFwiLi9QaHlzaWMvVmVsb2NpdHlcIlxuaW1wb3J0IGFwcGx5R3Jhdml0eSBmcm9tIFwiLi9QaHlzaWMvR3Jhdml0eVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldCBpbXBsZW1lbnRzIEVudGl0eSB7XG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdXG4gICAgcHVibGljIG1vZGVsOiBEaXNjXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb29yZHM6IENvb3JkaW5hdGVzLFxuICAgICAgICByZWFkb25seSByYWRpdXM6IG51bWJlcixcbiAgICAgICAgcmVhZG9ubHkgbWFzczogbnVtYmVyLFxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdmVsb2NpdHk6IFZlbG9jaXR5LFxuICAgICAgICByZWFkb25seSBwbGFuZXRzOiBQbGFuZXRbXVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgRGlzYyh0aGlzLmNvb3JkcywgdGhpcy5yYWRpdXMsIHRoaXMuY29sb3IpXG4gICAgICAgIH1cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbmV0cykge1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGxhbmV0c1tpXVxuXG4gICAgICAgICAgICBpZiAocC5pZCA9PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGx5R3Jhdml0eSh0aGlzLnZlbG9jaXR5LCB0aGlzLCBwLCBkZWx0YSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFwcGx5KHRoaXMuY29vcmRzLCBkZWx0YSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pZCwgdGhpcy5jb29yZHMpICAgIFxuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLnVwZGF0ZShkZWx0YSkpXG4gICAgfVxuXG4gICAgZHJhdyhkZWx0YTogbnVtYmVyLCBjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnRleHQuZHJhdyh0aGlzLm1vZGVsKVxuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKCk6IENvb3JkaW5hdGVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzXG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRzOiBDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29yZHMpXG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzXG4gICAgICAgIC8vIHRoaXMubW9kZWwuc2V0Q29vcmRpbmF0ZXModGhpcy5jb29yZHMpXG4gICAgfVxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eS9FbnRpdHlcIlxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL0NhbnZhcy9Db250ZXh0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUgaW1wbGVtZW50cyBFbnRpdHkge1xuICAgIHB1YmxpYyBlbnRpdGllczogRW50aXR5W10gPSBbXVxuXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGUgPT4gZS51cGRhdGUoZGVsdGEpKVxuICAgIH1cblxuICAgIGRyYXcoZGVsdGE6IG51bWJlciwgY29udGV4dDogQ29udGV4dCk6IHZvaWQge1xuICAgICAgICBjb250ZXh0LmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNvbnRleHQuY2FudmFzLmNhbnZhcy53aWR0aCwgY29udGV4dC5jYW52YXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuY2FudmFzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIlxuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZSA9PiBlLmRyYXcoZGVsdGEsIGNvbnRleHQpKVxuICAgICAgICBjb250ZXh0LmNvbnRleHQuc3Ryb2tlKCk7ICAgIFxuICAgIH1cblxuICAgIGdldEVudGl0aWVzKCk6IEVudGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXNcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwXG4gICAgcHVibGljIHo6IG51bWJlciA9IDFcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMueiA9IHpcbiAgICB9XG5cbiAgICBYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeCAtIHRoaXMueClcbiAgICB9XG5cbiAgICBZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnpUcmFuc2Zvcm0oeSAtIHRoaXMueSlcbiAgICB9XG5cbiAgICB6VHJhbnNmb3JtKHY6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB2ICogKDEgLyB0aGlzLnopXG4gICAgfVxuXG4gICAgcmVsYXRpdmVYKHg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnggKyB4XG4gICAgfVxuXG4gICAgcmVsYXRpdmVZKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnkgKyB5XG4gICAgfVxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vQ29uZmlnXCJcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL0NhbnZhcy9DYW52YXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgcHVibGljIGFjdGlvbkJ5S2V5Y29kZToge1trZXk6IG51bWJlcl06IEZ1bmN0aW9ufVxuXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgY2FtZXJhOiBDYW1lcmEsIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQnlLZXljb2RlID0ge1xuICAgICAgICAgICAgLy8gNjg6ICgpID0+IHtkZWJ1Zy5Ub2dnbGUoKTt9LFxuICAgICAgICAgICAgLy8gODM6ICgpID0+IHttb2RlID0gbW9kZSA9PSBQQVVTRSA/IFBMQVkgOiBQQVVTRTt9LFxuICAgICAgICAgICAgODI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueiA9IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5MDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS56IDw9IENvbmZpZy56b29tTWluKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56IC09IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgODg6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS56ICs9IENvbmZpZy56b29tQWN0aW9uUG93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzc6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueCAtIENvbmZpZy5kZWNhbEJ5TW92ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueCAtPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzODogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYS55IC0gQ29uZmlnLmRlY2FsQnlNb3ZlIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS55IC09IENvbmZpZy5kZWNhbEJ5TW92ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDM5OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FtZXJhLnggPj0gQ29uZmlnLnNwYWNlVykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLnggKz0gQ29uZmlnLmRlY2FsQnlNb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNDA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYW1lcmEueSA+PSBDb25maWcuc3BhY2VIKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEueSArPSBDb25maWcuZGVjYWxCeU1vdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkJ5S2V5Y29kZSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAhdGhpcy5hY3Rpb25CeUtleWNvZGVbZXZlbnQua2V5Q29kZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbkJ5S2V5Y29kZVtldmVudC5rZXlDb2RlXSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgQ29vcmRpbmF0ZXMgZnJvbSBcIi4vQ29vcmRpbmF0ZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWxvY2l0eSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikge31cblxuICAgIGFjY2VsZXJhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ICs9IHggKiBkZWx0YVxuICAgICAgICB0aGlzLnkgKz0geSAqIGRlbHRhXG4gICAgfVxuXG4gICAgYXBwbHkob2JqOiBDb29yZGluYXRlcywgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBvYmoueCArPSB0aGlzLnggKiBkZWx0YVxuICAgICAgICBvYmoueSArPSB0aGlzLnkgKiBkZWx0YVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlcyB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlcikge31cblxuICAgIHNldENvb3JkaW5hdGVzKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgIH1cbn0iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBQbGFuZXQgZnJvbSBcIi4vc3JjL1BsYW5ldFwiXG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vc3JjL1NjZW5lL2luZGV4XCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IEtleWJvYXJkIGZyb20gXCIuL3NyYy9Db250cm9scy9LZXlib2FyZFwiXG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3NyYy9Db25maWdcIlxuaW1wb3J0IFZlbG9jaXR5IGZyb20gXCIuL3NyYy9QaHlzaWMvVmVsb2NpdHlcIlxuaW1wb3J0IENvb3JkaW5hdGVzIGZyb20gXCIuL3NyYy9QaHlzaWMvQ29vcmRpbmF0ZXNcIlxuXG5pbXBvcnQgZ2V0UGxhbmV0cyBmcm9tIFwiLi9wbGFuZXRzXCJcblxubGV0IGNUaW1lID0gMFxuXG5jb25zdCBtYWluID0gKHQxOiBudW1iZXIsIGRlbHRhOiBudW1iZXIsIGJvYXJkOiBDYW52YXMpID0+IHtcbiAgICAvLyBjVGltZSArPSBkZWx0YVxuICAgIC8vIGlmIChjVGltZSA+IENvbmZpZy5kcGYpIHtcbiAgICAgICAgYm9hcmQudXBkYXRlKChkZWx0YSAvIDEwMDApICogQ29uZmlnLmdhbWVTcGVlZClcbiAgICAgICAgLy8gY1RpbWUgLT0gQ29uZmlnLmRwZlxuICAgIC8vIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCA9PiBtYWluKHQsIHQgLSB0MSwgYm9hcmQpKVxufVxuXG5kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKENvbmZpZy5zcGFjZVcgLyAyLCBDb25maWcuc3BhY2VIIC8gMiwgQ29uZmlnLnpvb21MZXZlbClcbiAgICBjb25zdCBib2FyZCA9IG5ldyBDYW52YXMoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsIGNhbWVyYSlcbiAgICBib2FyZC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuICAgIFxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKClcbiAgICBjb25zdCBrZXlib2FyZENvbnRyb2xzID0gbmV3IEtleWJvYXJkKGNhbWVyYSwgYm9hcmQpXG4gICAgY29uc3QgcGxhbmV0c0NvbmZpZyA9IGdldFBsYW5ldHMoYm9hcmQsIGNhbWVyYSlcbiAgICBsZXQgcGxhbmV0czogUGxhbmV0W10gPSBbXVxuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlib2FyZENvbnRyb2xzLmhhbmRsZUtleWJvYXJkLmJpbmQoa2V5Ym9hcmRDb250cm9scykpO1xuICAgIFxuICAgIGZvciAobGV0IGkgaW4gcGxhbmV0c0NvbmZpZykge1xuICAgICAgICBjb25zdCBwID0gcGxhbmV0c0NvbmZpZ1tpXVxuICAgICAgICBwbGFuZXRzLnB1c2gobmV3IFBsYW5ldChpLFxuICAgICAgICAgICAgbmV3IENvb3JkaW5hdGVzKHAueCwgcC55KSxcbiAgICAgICAgICAgIHAucmFkaXVzLFxuICAgICAgICAgICAgcC5tYXNzLFxuICAgICAgICAgICAgcC5jb2xvcixcbiAgICAgICAgICAgIG5ldyBWZWxvY2l0eShwLnZlbG9jaXR5WzBdLCBwLnZlbG9jaXR5WzFdKSxcbiAgICAgICAgICAgIHBsYW5ldHNcbiAgICAgICAgICAgICkpXG4gICAgfVxuXG4gICAgc2NlbmUuZW50aXRpZXMgPSBwbGFuZXRzXG4gICAgYm9hcmQuZW50aXRpZXMucHVzaChzY2VuZSlcbiAgICBcbiAgICBtYWluKDAsIDAsIGJvYXJkKVxuIH0iLCJpbXBvcnQgQ2FudmFzIGZyb20gXCIuL3NyYy9DYW52YXMvQ2FudmFzXCJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vc3JjL0NhbWVyYS9DYW1lcmFcIlxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi9zcmMvQ29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgKGNhbnZhczogQ2FudmFzLCBjYW1lcmE6IENhbWVyYSk6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0+IHtcbiAgICBjb25zdCBzdW4gPSB7XG4gICAgICAgIHg6IGNhbWVyYS5yZWxhdGl2ZVgoY2FtZXJhLnogKiAoY2FudmFzLmNhbnZhcy53aWR0aCAvIDIpKSxcbiAgICAgICAgeTogY2FtZXJhLnJlbGF0aXZlWShjYW1lcmEueiAqIChjYW52YXMuY2FudmFzLmhlaWdodCAvIDIpKSxcbiAgICAgICAgcmFkaXVzOiAxMjAsXG4gICAgICAgIG1hc3M6IDEuOTg5MWUzMCxcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHZlbG9jaXR5OiBbMCwgMF1cbiAgICB9XG4gICAgY29uc3QgZWFydGggPSB7XG4gICAgICAgIHg6IHN1bi54IC0gKDE0OS45NmU5IC8gQ29uZmlnLm1QZXJQeCksXG4gICAgICAgIHk6IHN1bi55LFxuICAgICAgICByYWRpdXM6IDMwLFxuICAgICAgICBtYXNzOiA1Ljk3MmUyNCxcbiAgICAgICAgY29sb3I6IFwic2t5Ymx1ZVwiLFxuICAgICAgICB2ZWxvY2l0eTogWyhDb25maWcuZWFydGhTcGVlZCAvIENvbmZpZy5tUGVyUHgpICogMS8zLCAoQ29uZmlnLmVhcnRoU3BlZWQgLyBDb25maWcubVBlclB4KSAqIDIvM11cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwic3VuNDFcIjogc3VuLFxuICAgICAgICAgICAgXCJlYXJ0aCBhbG9yc1wiOiBlYXJ0aFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9