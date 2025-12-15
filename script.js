<!-- ===================== script.js ===================== -->
function registerUser(e){e.preventDefault();alert('Registration Successful (Demo)')}
const t=document.querySelector('.typing');if(t){let i=0,c=t.innerText;t.innerText='';(function type(){if(i<c.length){t.innerText+=c.charAt(i++);setTimeout(type,60)}})()}