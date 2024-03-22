let cardRow = document.getElementById('cardRow');
let products = [
    {
        id: 1,
        name: "Iphone",
        img: "https://m.media-amazon.com/images/I/81CgtwSII3L._AC_UF1000,1000_QL80_.jpg",
        price: 99999,
        qty: 1,
        description: " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass."
    },
    {
        id: 2,
        name: "MacBook Air",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQek9grTjIaQF3TosKNNTwmX2j1wwJGCZA3ztjp9lmZBdJLVfZP0fowtuLaMRKPVbgPqDvum_TMhpV4jMYLfEsKCC1cxqwP8xNk9k53wbC7waE2QsZDrBS0&usqp=CAE",
        price: 74990,
        qty: 1,
        description: "Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey"
    },
    {
        id: 3,
        name: "Ipad pro",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSz1Bhr2DKU_ouRNbCrpXHQlRzErzgkS2Y4OpA32l3bzggw5WC1h0GagASaK4F-TKDsfd10oiilqdwggfjNFzmx9bSsgpv9f2-jD03jDEl-Bk8mg7lOhbrUVQ&usqp=CAE",
        price: 136999,
        qty: 1,
        description: " Apple M1 chip for next-level performace Stunning 27.96 cm (11-inch) Liquid Retina display with ProMotion, True Tone, and P3 wide color TrueDepth camera system featuring Ultra Wide front camera with Center Stage"
    },
    {
        id: 4,
        name: "Imac",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRc19mPiVnAa7SRCpCmRooDFRy6aiEORwO5bEtK5sMA7Eu46I5FcdwCyYIg2TzKPZqwCnBDgbG86bPbpmz2SgzHjSgn7KRRTkv7MQssqrlQshEXzRK5KFlK&usqp=CAE",
        price: 156999,
        qty: 1,
        description: " Apple iMac 60.96 cm (24 inch) All-In-One Desktop (8 core Apple M3 chip/8 GB/256 GB/10 core GPU), MQRJ3HN/A Silver(494268270)High-fidelity six-speaker system with force-cancelling woofers"
    },
    {
        id: 5,
        name: "Iwatch SE",
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSs8BsuNzC9QVy6-8Vun9JMKzykXD_oJy1chg4m0gteN2G2S01n9w0Wupq3u2cilepu_Nr7zC1V-KzyyXHb7qro3cZ8iVFjIggPdLSbMsv274NLabFLIEbd&usqp=CAE",
        price: 83999,
        qty: 1,
        description: " Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
    },
    {
        id: 6,
        name: "AirPods pro",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-PTdSs9b5G0ESjc3Mqu8J06XOn08hjW6IGqQ0aYc9M4NWTIJiXWem6Uxt-bEG1xlaii65AhzviZRfuO88yvLEL0yMMNWVUFpzH-2SbZaVECFB4JDd8aD8&usqp=CAE",
        price: 136999,
        qty: 1,
        description: " Sweat and water resistant (IPX4) H1 headphone chip Custom high dynamic range amplifier Custom high-excursion Apple driver Adaptive Equaliser and Spatial audio with dynamic head tracking Dual beam- forming Inward - facing microphones"
    }
]

const viewProducts = () => {


    let tbl = "";
    products.map((val) => {
        return (
            tbl += `
                   
                      <div class = "col-4 my-3">
                      <div class="card p-4 text-center" style="width: 100%;">
                      <img src="${val.img}" class="card-img-top" alt="..." width="500px" height="300px" style = "object-fit:contain;">
                      <div class="card-body">
                          <h5 class="card-title">${val.name}</h5>
                         
                          <p class="card-text" style="height:150px;">${val.description}</p>
                          <h5 class="card-title" style="color:grey;"> INR: ${val.price}</h5>
                          <button class="btn btn-dark mt-2" onclick="AddToCart(${val.id})">ADD TO CART</button>
                      </div>
                  </div></div>
                    
                `)
    })

    cardRow.innerHTML = tbl;
}

viewProducts();


// -------adds-item-to-cart----------
let cart = [];
const AddToCart=(id)=>{
    let cartItem =  JSON.parse(localStorage.getItem('cart')) || [];
    let found = false;

   for(let i = 0; i<=cartItem.length-1 ;i++){
        if(cartItem[i].id === id){
            cartItem[i].qty++;
            found=true;
            break;
        }
   }

   if(!found){
    let all = products.map((val)=>{
        if(val.id == id){
         cartItem.push(val);
        }        
     })
   }
   
     
         localStorage.setItem('cart',JSON.stringify(cartItem));
    
    
    
}

// ----------view-items-in-cart----------
const ViewCart=()=>{
    let cartItem = JSON.parse(localStorage.getItem('cart'));
    let tbl = "";
    let sum =0;
    cartItem.map((val)=>{
       
         sum = sum + val.price * val.qty;
    return tbl+=
   
            ` <div class="card mb-3 col-12" style="max-width: 540px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${val.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${val.name}</h5>
                        <p class="card-text">Price: ${val.price}</p>
                        <input type="number" value="${val.qty}" onchange="editQty(${val.id})" id="qty_${val.id}"/>
                        </div>
                    </div>
                    </div>
                </div>
                <div class ="d-flex align-items-center justify-content-between m-3">
                <p class="m-0">Total INR: ${val.price * val.qty}</p>
                <div class="btn btn-danger btn-sm" onclick=deleteItem(${val.id})>DELETE</div>
                </div>
                `
    })
    document.getElementById('cart-show').innerHTML = tbl;
    document.getElementById('Total_bill').innerHTML = `Total Bill: ${sum}`;
}
ViewCart();

const editQty=(id)=>{
    let qty = document.getElementById(`qty_${id}`).value

    let all = JSON.parse(localStorage.getItem('cart'));
    all.map((val)=>{
        if (val.id == id) {
            val.qty = qty;
        }
    })
    localStorage.setItem('cart',JSON.stringify(all));
    ViewCart();
}


// delete items 
const deleteItem = (id) =>{
    let allRecords = JSON.parse(localStorage.getItem('cart')) ;
    let deleteData = allRecords.filter((items)=>{
        return items.id != id;//will return all elemts except id = itmes.id i.e it hass all users except deleted ones
    })
    localStorage.setItem('cart',JSON.stringify(deleteData)); //converting deleteData to string and storing in
    
    ViewCart(); // shows present data
}

