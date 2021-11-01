window.addEventListener('load', ()=>{

    document.querySelector("button#buttonListener").addEventListener("click", (event)=>{
        event.preventDefault();
        let result = document.querySelector("div#result");

        fetch(`superheroes.php?query= ${document.querySelector("input#searchTxt").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'')}`.replace(/"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g, ''), { method: 'GET' })
        .then(resp => resp.text())
        .then(heroes => {
            let test1 = document.createElement("h3");
            test1.appendChild(document.createTextNode("Result"));
            let test2= document.createElement("hr");
            result.innerHTML = '';
            result.innerHTML = heroes;
            result.prepend(test1, test2);
        })
    });
});