const createNode = (elem) => {
    return document.createElement(elem);
    
};
const appendNode = (parent, elem) => {
    // console.log(elem)
    parent.appendChild(elem);
};

var idNo = 0;
    
// Appending promo items with fetch and map
const promo = document.querySelector('.promo');
const promou = 'https://coffeeproducts.herokuapp.com/api/products/promo';
fetch(promou)
    .then(res => res.json(promou))
    .then(data => {
        data.map((d) => {
            let li = createNode('li');                   
                btn = createNode('button');
                btn2 = createNode('button');
                br = createNode('br'),
                spanH = createNode('div');
                span = createNode('span');
                p = createNode('div');
                image = createNode('img')
                    

                spanH.innerText = (d.product + " " + " $" + d.price);
                spanH.id = d._id;
                spanH.setAttribute('class', 'add');
                p.innerText = d.description;
                btn.innerText = "Add", 
                btn.setAttribute('class', 'add');
                btn2.innerText = "More";
                image.setAttribute('src', d.image);
                image.setAttribute('style', 'width: 150px; height: auto; border-radius: 15px;')

                appendNode(li, image);
                appendNode(li, spanH);
                appendNode(li, span);
                appendNode(li, p);
                appendNode(li, btn);
                appendNode(li, btn2);
                appendNode(promo, li);
        })
    .catch(err => {
        console.error('Error: ', err);
    })
    })

    // Appending coffee using fetch and map
    const elCoffee = document.querySelector('.coffee');
    const uCoffee = 'https://coffeeproducts.herokuapp.com/api/products/coffee';
    fetch(uCoffee)
        .then(res => res.json(uCoffee))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let li = createNode('li');                   
                btn = createNode('button');
                btn2 = createNode('button');
                br = createNode('br'),
                spanH = createNode('div');
                span = createNode('span');
                p = createNode('div');
                image = createNode('img')
                    

                spanH.innerText = (d.product + " " + " $" + d.price);
                spanH.id = d._id;
                spanH.setAttribute('class', 'add');
                p.innerText = d.description;
                btn.innerText = "Add", 
                btn.setAttribute('class', 'add');
                btn2.innerText = "More";
                image.setAttribute('src', d.image);
                image.setAttribute('style', 'width: 150px; height: auto; border-radius: 15px;')

                appendNode(li, image);
                appendNode(li, spanH);
                appendNode(li, span);
                appendNode(li, p);
                appendNode(li, btn);
                appendNode(li, btn2);
                appendNode(elCoffee, li);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })

    // Appending Tea using fetch and map 
    const elTea = document.querySelector('.tea');
    const uTea = 'https://coffeeproducts.herokuapp.com/api/products/tea';
    fetch(uTea)
        .then(res => res.json(uTea))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let li = createNode('li');                   
                btn = createNode('button');
                btn2 = createNode('button');
                br = createNode('br'),
                spanH = createNode('div');
                span = createNode('span');
                p = createNode('div');
                image = createNode('img')
                    

                spanH.innerText = (d.product + " " + " $" + d.price);
                spanH.id = d._id;
                spanH.setAttribute('class', 'add');
                p.innerText = d.description;
                btn.innerText = "Add", 
                btn.setAttribute('class', 'add');
                btn2.innerText = "More";
                image.setAttribute('src', d.image);
                image.setAttribute('style', 'width: 150px; height: auto; border-radius: 15px;')

                appendNode(li, image);
                appendNode(li, spanH);
                appendNode(li, span);
                appendNode(li, p);
                appendNode(li, btn);
                appendNode(li, btn2);
                appendNode(elTea, li);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })

    // Appending pastries using fetch and map 
    const elPastry = document.querySelector('.pastry');
    const uPastry = 'https://coffeeproducts.herokuapp.com/api/products/pastry';
    fetch(uPastry)
        .then(res => res.json(uPastry))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liPastry = createNode('li');
                   
                    btnPastry = createNode('button');
                    btn2Pastry = createNode('button');
                    brPastry = createNode('br'),
                    spanHPastry = createNode('span');
                    spanPastry = createNode('span');
                spanHPastry.innerText = d.product;
                spanHPastry.id = d._id;
                spanHPastry.setAttribute('class', 'add');
                btnPastry.innerText = "Add", 
                btnPastry.setAttribute('class', 'add');
                btn2Pastry.innerText = "More";
                spanPastry.innerText = ("$" + d.price);
                appendNode(liPastry, spanHPastry);
                appendNode(liPastry, spanPastry);
                appendNode(liPastry, brPastry);
                appendNode(liPastry, btnPastry);
                appendNode(liPastry, btn2Pastry);
                appendNode(elPastry, liPastry);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
    
     // Appending sandwiches using fetch and map 
     const elSandwiches = document.querySelector('.sandwiches');
    const uSandwiches = 'https://coffeeproducts.herokuapp.com/api/products/sandwiches';
    fetch(uSandwiches)
        .then(res => res.json(uSandwiches))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liSandwiches = createNode('li');
                   
                    btnSandwiches = createNode('button');
                    btn2Sandwiches = createNode('button');
                    brSandwiches = createNode('br'),
                    spanHSandwiches = createNode('span');
                    spanSandwiches = createNode('span');
                spanHSandwiches.innerText = d.product;
                spanHSandwiches.id = d._id;
                spanHSandwiches.setAttribute('class', 'add');
                btnSandwiches.innerText = "Add", 
                btnSandwiches.setAttribute('class', 'add');
                btn2Sandwiches.innerText = "More";
                spanSandwiches.innerText = ("$" + d.price);
                appendNode(liSandwiches, spanHSandwiches);
                appendNode(liSandwiches, spanSandwiches);
                appendNode(liSandwiches, brSandwiches);
                appendNode(liSandwiches, btnSandwiches);
                appendNode(liSandwiches, btn2Sandwiches);
                appendNode(elSandwiches, liSandwiches);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
    
    // Appending breakfast using fetch and map 
    const elBreakfast = document.querySelector('.breakfast');
    const uBreakfast = 'https://coffeeproducts.herokuapp.com/api/products/breakfast';
    fetch(uBreakfast)
        .then(res => res.json(uBreakfast))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liBreakfast = createNode('li');
                   
                    btnBreakfast = createNode('button');
                    btn2Breakfast = createNode('button');
                    brBreakfast = createNode('br'),
                    spanHBreakfast = createNode('span');
                    spanBreakfast = createNode('span');
                spanHBreakfast.innerText = d.product;
                spanHBreakfast.id = d._id;
                spanHBreakfast.setAttribute('class', 'add');
                btnBreakfast.innerText = "Add", 
                btnBreakfast.setAttribute('class', 'add');
                btn2Breakfast.innerText = "More";
                spanBreakfast.innerText = ("$" + d.price);
                appendNode(liBreakfast, spanHBreakfast);
                appendNode(liBreakfast, spanBreakfast);
                appendNode(liBreakfast, brBreakfast);
                appendNode(liBreakfast, btnBreakfast);
                appendNode(liBreakfast, btn2Breakfast);
                appendNode(elBreakfast, liBreakfast);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
    
    // Appending breakfast using fetch and map 
    const elSides = document.querySelector('.sides');
    const uSides = 'https://coffeeproducts.herokuapp.com/api/products/sides';
    fetch(uSides)
        .then(res => res.json(uSides))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liSides = createNode('li');
                   
                    btnSides = createNode('button');
                    btn2Sides = createNode('button');
                    brSides = createNode('br'),
                    spanHSides = createNode('span');
                    spanSides = createNode('span');
                spanHSides.innerText = d.product;
                spanHSides.id = d._id;
                spanHSides.setAttribute('class', 'add');
                btnSides.innerText = "Add", 
                btnSides.setAttribute('class', 'add');
                btn2Sides.innerText = "More";
                spanSides.innerText = ("$" + d.price);
                appendNode(liSides, spanHSides);
                appendNode(liSides, spanSides);
                appendNode(liSides, brSides);
                appendNode(liSides, btnSides);
                appendNode(liSides, btn2Sides);
                appendNode(elSides, liSides);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
