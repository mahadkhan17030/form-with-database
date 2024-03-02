 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { ref,set,getDatabase,push,onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAQZbk2crmQsuVGixUDW8MDVDsJJfV3cGI",
    authDomain: "form-with-database-1a3e6.firebaseapp.com",
    databaseURL: "https://form-with-database-1a3e6-default-rtdb.firebaseio.com",
    projectId: "form-with-database-1a3e6",
    storageBucket: "form-with-database-1a3e6.appspot.com",
    messagingSenderId: "462802036113",
    appId: "1:462802036113:web:95037e983358f004d46630",
    measurementId: "G-P4ZPLEV2PE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const database = getDatabase();


var a = document.getElementById("username")
var b = document.getElementById("password")
var c = document.getElementById("email1")
var d = document.getElementById("firstname")
var e = document.getElementById("lastname")
var f = document.getElementById("date")
var g = document.getElementById("month")
var h = document.getElementById("year")
var i = document.getElementById("email")
var j = document.getElementById("male")
var k = document.getElementById("female")
var l = document.getElementById("address")
var m = document.getElementById("city")
var n = document.getElementById("pin")
var o = document.getElementById("state")
var p = document.getElementById("country")
var r = document.getElementById("Drawing")
var s = document.getElementById("Singing")
var t = document.getElementById("Dancing")
var u = document.getElementById("Sketching")
var v = document.getElementById("inp1")
var w = document.getElementById("inp2")
var x = document.getElementById("inp3")
var y = document.getElementById("inp4")
var z = document.getElementById("inp5")
var aa = document.getElementById("inp6")
var ab = document.getElementById("inp7")
var ac = document.getElementById("inp8")
var ad = document.getElementById("inp9")
var ae = document.getElementById("inp10")
var af = document.getElementById("inp11")
var ag = document.getElementById("inp12")
var ah = document.getElementById("BCA")
var ai = document.getElementById("B.COM")
var aj = document.getElementById("B.Sc")
var ak = document.getElementById("B.A")
var al = document.getElementById("showdata")
var am= document.getElementById("maindiv")
window.add = function () {
    var obj = {
        ba : a.value,
        bb : b.value,
        bc : c.value,
        bd : d.value,
        be : e.value,
        bf : f.value,
        bg : g.value,
        bh : h.value,
        bi : i.value,
        bj : j.value,
        bk : k.value,
        bl : l.value,
        bm : m.value,
        bn : n.value,
        bo : o.value,
        bp : p.value,
        br : r.value,
        bs : s.value,
        bt : t.value,
        bu : u.value,
        bv : v.value,
        bw : w.value,
        bx : x.value,
        by : y.value,
        bz : z.value,
        ca : aa.value,
        cb : ab.value,
        cc : ac.value,
        cd : ad.value,
        ce : ae.value,
        cf : af.value,
        cg : ag.value,
        ch : ah.value,
        ci : ai.value,
        cj : aj.value,
        ck : ak.value,
    };
    al.style.display = "flex"
    maindiv.style.display = "none"
    
  obj.id = push(ref(database,"values/")).key;
  var refrence = ref(database,`values/${obj.id}`);
  set(refrence,obj);
};

function getData(){
  var refrence = ref(database,"values/");
  onValue(refrence,function (data){
    console.log(data.val());
    al.innerHTML=data.val();
  }); 
}
getData()
