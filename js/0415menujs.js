
let logins = JSON.parse(localStorage.getItem("logins")) || [];

function switchview(vie) {
    document.getElementById("loginvv").classList.remove("atv");
    document.getElementById("createvv").classList.remove("atv");
    document.getElementById("findevv").classList.remove("atv");

    document.getElementById(vie).classList.add("atv");
    document.getElementById("out").classList.add("atv");
}

function outBtn() {
    document.getElementById("loginvv").classList.remove("atv");
    document.getElementById("createvv").classList.remove("atv");
    document.getElementById("findevv").classList.remove("atv");
    document.getElementById("loginbox").classList.remove("atv");
    document.getElementById("out").classList.remove("atv");

        if (document.getElementById("wrap")) {
            document.getElementById("wrap").classList.remove("no");
        }

        if (document.getElementById("subimg")) {
            document.getElementById("subimg").classList.remove("no");
        }
        if (document.getElementById("footwrap")) {
            document.getElementById("footwrap").classList.remove("no");
        }

        if (document.getElementById("inwraplogin")) {
            document.getElementById("inwraplogin").classList.add("atv");
        }

}


function cerBtn() {
    const inputidnew = document.getElementById("inputidnew").value.trim();
    const inputpwnew = document.getElementById("inputpwnew").value.trim();
    const inputpwck = document.getElementById("inputpwck").value.trim();

    if (!inputidnew || !inputpwnew || !inputpwck) {
        return alert("모두 입력해주세요");
    }
    if (inputpwnew !== inputpwck) {
        return alert("비밀번호가 서로 다릅니다 다시 입력해주세요");
    }

    const loginsid = logins.some(function (lo) {
        return lo.id === inputidnew;
    });

    if (loginsid) {
        return alert("이미 사용중인 아이디입니다 다시 입력해주세요");
    }

    logins.push({
        id: inputidnew,
        password: inputpwnew
    });

    localStorage.setItem("logins", JSON.stringify(logins));




    document.getElementById("inputidnew").value = "";
    document.getElementById("inputpwnew").value = "";
    document.getElementById("inputpwck").value = "";
    alert("가입완료 로그인해주세요");

    switchview("loginvv");
}




function longBtn() {
    // console.log("안녕")
    switchview("loginvv");
    if(document.getElementById("loginbox")){
    document.getElementById("loginbox").classList.add("atv");}

    if(document.getElementById("wrap")){
    document.getElementById("wrap").classList.add("no");}
    if(document.getElementById("subimg")){
    document.getElementById("subimg").classList.add("no");}
    if (document.getElementById("footwrap")) {
        document.getElementById("footwrap").classList.add("no");
    }
}






const loginperson = sessionStorage.getItem("loginperson");

function loginBtn() {
    document.getElementById("out").classList.remove("atv");
    const inputid = document.getElementById("inputid").value.trim();
    const inputpw = document.getElementById("inputpw").value.trim();

    if (!inputid || !inputpw) {
        return alert("정보를 모두 입력해주세요");
    }

    const loginsed = logins.find(function (lo) {
        return lo.id === inputid && lo.password === inputpw;
    });

    const isloged = sessionStorage.getItem("loginperson")

    if (loginsed) {
        sessionStorage.setItem("loginperson", loginsed.id);
        initApp();
    }
    else {
        alert("아이디 비밀번호가 틀리거나 없습니다");
        document.getElementById("inputid").value =""
        document.getElementById("inputpw").value =""
    }




}

function logoutBtn() {
    sessionStorage.removeItem("loginperson");

    if(document.getElementById("logout")){
    document.getElementById("logout").classList.remove("atv");}
    if(document.getElementById("inwraplogin")){
    document.getElementById("inwraplogin").classList.remove("atv");}
    
    document.getElementById("login").style.display="flex"
    document.getElementById("logintext").style.display="none"
    document.getElementById("login").innerHTML = `
                <p>로그인</p>
                `;

    const upbtn = document.querySelectorAll(".upbtn")
    upbtn.forEach(function (b) {
        b.classList.remove("no");

    });
    const delbtn = document.querySelectorAll(".delbtn")
    delbtn.forEach(function (b) {
        b.classList.remove("no");

    });


    const upbtnlogin = document.querySelectorAll(".upbtnlogin")
    upbtnlogin.forEach(function (b) {
        b.classList.remove("atv");

    });
    const delbtnlogin = document.querySelectorAll(".delbtnlogin")
    delbtnlogin.forEach(function (b) {
        b.classList.remove("atv");

    });
}

function initApp() {
    const loginperson = sessionStorage.getItem("loginperson");
    
    document.getElementById("login").style.display="none"
    document.getElementById("logintext").style.display="flex"
    if (loginperson) {
        document.getElementById("logintext").innerHTML = `
                횐영합니다! ${loginperson}님!
                `;

        /*document.getElementById("logintext").innerHTML = `
                환영합니다! ${loginperson}님!
                `;
        document.getElementById("login").style.display="none"*/

        document.getElementById("loginvv").classList.remove("atv");
        document.getElementById("loginbox").classList.remove("atv");
        document.getElementById("logout").classList.add("atv");

        if (document.getElementById("wrap")) {
            document.getElementById("wrap").classList.remove("no");
        }

        if (document.getElementById("subimg")) {
            document.getElementById("subimg").classList.remove("no");
        }
        if (document.getElementById("footwrap")) {
            document.getElementById("footwrap").classList.remove("no");
        }

        if (document.getElementById("inwraplogin")) {
            document.getElementById("inwraplogin").classList.add("atv");
        }

        // const glbtns = document.querySelectorAll(".glbtns")
        // glbtns.forEach(function(b){
        //     b.classList.add("atv");

        // });


        const upbtn = document.querySelectorAll(".upbtn")
        upbtn.forEach(function (b) {
            b.classList.add("no");

        });
        const delbtn = document.querySelectorAll(".delbtn")
        delbtn.forEach(function (b) {
            b.classList.add("no");

        });


        const upbtnlogin = document.querySelectorAll(".upbtnlogin")
        upbtnlogin.forEach(function (b) {
            b.classList.add("atv");
        });
        const delbtnlogin = document.querySelectorAll(".delbtnlogin")
        delbtnlogin.forEach(function (b) {
            b.classList.add("atv");

        });
    }
    else {
        switchview("loginvv");
    }

}


function findeBtn() {
    const inputfindeid = document.getElementById("inputidfinde").value.trim();

    if (inputfindeid === "" || inputfindeid === null) {
        document.getElementById("inputidfinde").value = "";
        return alert("아이디를 입력해주세요");
    }

    const per = logins.find(function (p) {
        return p.id === inputfindeid
    });

    if (per) {
        localStorage.setItem("loginperson", per.password);
    }

    const loginperson = localStorage.getItem("loginperson");

    if (loginperson) {
        document.getElementById("fdpw").innerHTML = `
                ${loginperson} 입니다!
                `;
    }
}

initApp();



