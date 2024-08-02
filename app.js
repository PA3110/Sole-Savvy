let sortBy_btn = document.getElementById('sortBy_btn');
let sortBy_opt = document.getElementsByClassName('sortBy_opt')[0];

sortBy_btn.addEventListener('click', () => {
    sortBy_opt.classList.toggle('sortBy_opt_active');
})

let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');

let url = "json.json";
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0];

fetch(url).then((Response => Response.json())).then((data) => {
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array = [...data].splice(0,8);

    data.forEach((el, i) => {
        const {Img,Name,Category, MRP, Price,Tag, Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
         <img src="${Img}" alt="${Name}" />
            <h5 class="card_title" title="${Name}">
            ${Name}
            </h5>
            <p>${Category} Shoes</p>
            <div class="price">
              <h5>Rs ${Price}</h5>
              <h5>MRP: <del>RS ${MRP}</del></h5>
            </div>
            <div class="color_tag">
              <h6>Color ${Color}</h6>
              <h6>${Tag}</h6>
            </div>
        `;
        main_shoes_bx.appendChild(card)
    });
    
    newest.addEventListener('click', () => {
        main_shoes_bx.innerHTML = '';
        sortBy_btn.innerHTML = `
        <h5>Sort By: Newest</h5>
                <i class="bi bi-chevron-down"></i>`;
        sortBy_opt.classList.toggle('sortBy_opt_active');
        newest_array.forEach((el, i) => {
            const {Img,Name,Category, MRP, Price,Tag, Color} = el;
            let card=document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
             <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                  <h5>Rs ${Price}</h5>
                  <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                  <h6>Color ${Color}</h6>
                  <h6>${Tag}</h6>
                </div>
            `;
            main_shoes_bx.appendChild(card)
        });
    })

    all_shoes.addEventListener('click', () => {
        main_shoes_bx.innerHTML = '';
        sortBy_btn.innerHTML = `
        <h5>Sort By: All Shoes</h5>
                <i class="bi bi-chevron-down"></i>`;
        sortBy_opt.classList.toggle('sortBy_opt_active');

        all_shoes_array.forEach((el, i) => {
            const {Img,Name,Category, MRP, Price,Tag, Color} = el;
            let card=document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
             <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                  <h5>Rs ${Price}</h5>
                  <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                  <h6>Color ${Color}</h6>
                  <h6>${Tag}</h6>
                </div>
            `;
            main_shoes_bx.appendChild(card)
        });
    })
        
    low.addEventListener('click', () => {
        main_shoes_bx.innerHTML = '';
        sortBy_btn.innerHTML = `
        <h5>Sort By: Low</h5>
                <i class="bi bi-chevron-down"></i>`;
        sortBy_opt.classList.toggle('sortBy_opt_active');

        low_array.sort(({Price : a}, {Price : b}) => a-b)

        low_array.forEach((el, i) => {
            const {Img,Name,Category, MRP, Price,Tag, Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
             <img src = "${Img}" alt="${Name}" />
                <h5 class = "card_title" title = "${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                  <h5>Rs ${Price}</h5>
                  <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                  <h6>Color ${Color}</h6>
                  <h6>${Tag}</h6>
                </div>
            `;
            main_shoes_bx.appendChild(card)
        });
    })

    high.addEventListener('click', () => {
        main_shoes_bx.innerHTML = '';
        sortBy_btn.innerHTML = `
        <h5>Sort By:High</h5>
                <i class="bi bi-chevron-down"></i>`;
        sortBy_opt.classList.toggle('sortBy_opt_active');

        high_array.sort(({Price : a}, {Price : b}) => a-b)
        high_array.reverse();
        high_array.forEach((el, i) => {
            const {Img,Name,Category, MRP, Price,Tag, Color} = el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
             <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                  <h5>Rs ${Price}</h5>
                  <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                  <h6>Color ${Color}</h6>
                  <h6>${Tag}</h6>
                </div>
            `;
            main_shoes_bx.appendChild(card)
        });
    })


    let boot_array = all_shoes_array.filter((el) => {
        return el.Type === 'Boots';
    })

    let All_Main_filter_array = [];

    let boots = document.getElementById('boots');

    boots.addEventListener('click', () => {
        if (boots.title === "boots_filter_on") {
            main_shoes_bx.innerHTML = '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(boot_array);
        
            All_Main_filter_array.forEach((el, i) => {
                const {Img,Name,Category, MRP, Price,Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
                `;
                main_shoes_bx.appendChild(card)
            });
        } else {
            main_shoes_bx.innerHTML = '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title = 'boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return boot_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const {Img,Name,Category, MRP, Price,Tag, Color} = el;
                let card=document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                </div>
                `;
                main_shoes_bx.appendChild(card)
            });
        }
 
    })
    let loafers_array = all_shoes_array.filter((el) => {
        return el.Type === 'Loafer';
    })

    let loafers = document.getElementById('loafers');

    loafers.addEventListener('click', () => {
        if (loafers.title === "loafers_filter_on") {
            main_shoes_bx.innerHTML = '';
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = 'loafers_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(loafers_array);
        
            All_Main_filter_array.forEach((el, i) => {
                const {Img,Name,Category, MRP, Price,Tag, Color} = el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
                `;
                main_shoes_bx.appendChild(card)
            });
        } else {
            main_shoes_bx.innerHTML = '';
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title = 'loafers_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return loafers_array.indexOf(el) < 0;
            })
            All_Main_filter_array.forEach((el, i) => {
                const {Img,Name,Category, MRP, Price,Tag, Color} = el;
                let card=document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}" />
                <h5 class="card_title" title="${Name}">
                ${Name}
                </h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs ${Price}</h5>
                    <h5>MRP: <del>RS ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>Color ${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
                `;
                main_shoes_bx.appendChild(card)
            });
        }
    })
