let filter=document.querySelector("#search");

let rows=document.querySelectorAll("tbody tr");
//console.log(rows);

filter.addEventListener("keyup", function(event){
	const q=event.target.value.toLowerCase();

	rows.forEach((row)=>{
		row.querySelector("td").textContent.toLowerCase().startsWith(q)
			? row.style.display=""
			:(row.style.display="none");
	});
});









// window.addEventListener("load", function () {


//     let filter = document.querySelector("#search");


//     // let rows=document.querySelectorAll("tbody tr");
//     // console.log(rows);


//     filter.addEventListener("keyup", function () {
//         let search = this.value.toLowerCase();
//         let all = document.querySelectorAll("tbody tr");
//         console.log(all);

//         for (let i of all) {
//             let item = i.innerHTML.toLowerCase();
//             if (item.indexOf(search) == -1) {
//                 i.classList.add("hide");
//             } else {
//                 i.classList.remove("hide");
//             }
//         }
//     });
// });