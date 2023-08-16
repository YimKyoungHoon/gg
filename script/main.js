//동작을 시킬 대상을 변수에 담기
const btns = document.querySelectorAll(".btns li");
const hOne = document.querySelector("h1");
const img = document.querySelector(".showBox img");
const str = document.querySelector("strong");
const sp = document.querySelector("span");

const total = btns.length;
//유지보수성을 위해서 4라는 숫자를 동적으로 생성해서 만들어주는 코드
//btns라는 li의 갯수만큼 
sp.innerText = total;
//span태그에 동적으로 만들어서 대입해 넣음
//반복을 돌면서 btns에 클릭 이벤트를 걸어줍니다
// for (const el of btns) {
//     el.addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log("클릭");
//     });
// }
//위의 for of문은 인덱스의 개념이 없으므로 기본for을 사용
for (let i = 0; i < btns.length; i++) {
    //각 btns의 인덱스에 반복을 돌면서 이벤트리스너를 붙입니다
    btns[i].addEventListener("click", (e) => {
        //a태그가 가지고있는 기본 이벤트인 링크를 저지하는 코드
        e.preventDefault();
        // console.log("클릭");
        //클릭한 인텍스 + 1 에 해당하는 숫자를 strong태그에 써줌
        str.innerText = i + 1;

        //활성화 클래스를 이용해서 클릭한 li에 on을 붙여서
        // css를 변경(color:#fff이런걸로)   
        //반복을 돌면서 모든 btns의 인덱스에 해당하는 li에
        //on을 모두지웁니다
        for (let k = 0; k < btns.length; k++) {
            btns[k].classList.remove("on");
            // btns[i].classList.add("on");
            //k for문에 종속시킨 btn[i]는 
            //지금처럼 on을 떼고, 붙이는 단순작업일 경우
            //종속시켜도 큰 에러나, 문제는 없다
            //다만 종속시키게되면 add on을 하면서 연쇄적인
            //작업이 필요할때 사용할 수 없으므로 되도록 
            //종속말고 독립적인 코드가 좋을것 같다
        }
        //클릭한 해당 인덱스 에만 on을 붙입니다
        btns[i].classList.add("on");
        //이렇게 하는 이유는 on이 붙은 대상을 추적하고, 지우는 
        //2중,3중의 코딩보다 더 간단해서 그렇습니다


        //클릭한 li안의 a태그에 있는 href속성 값을 변수로 담고
        let imgSrc = btns[i].querySelector("a").getAttribute("href");
        // console.log(imgSrc);
        //li 안에 있는 text도 변수로 담고
        let txt = btns[i].querySelector("a").innerText;
        // console.log(txt);
        //h1안에 텍스트에 text변수를 대체하고
        hOne.innerText = txt;
        //img의 src와 href속성변수를 대체합니다
        img.setAttribute("src", imgSrc);
    });
}