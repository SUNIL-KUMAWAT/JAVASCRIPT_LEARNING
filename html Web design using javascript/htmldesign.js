function header() {
    let header = document.createElement('header');
    header.setAttribute("class", "headerclass");
    document.querySelector("body").appendChild(header);

    function form() {
        let form = document.createElement("form");
        let allProduct = document.createElement("select");
        let search = document.createElement("input");

        function allProducts() {
            allProduct.setAttribute("class", "allProduct");
            allProduct.setAttribute("type", "button");
            allProduct.setAttribute("value", "All Products");
            let productOption = document.createElement("option");
            productOption.setAttribute("value", "product");
            productOption.textContent = "All Products";
            let productOption1 = document.createElement("option");
            productOption1.setAttribute("value", "product");
            productOption1.textContent = "Electronics";
            let productOption2 = document.createElement("option");
            productOption2.setAttribute("value", "product");
            productOption2.textContent = "Vehicles";
            allProduct.append(productOption, productOption1, productOption2);
        }
        allProducts();

        function searchBar() {
            search.setAttribute("class", "search");
            search.setAttribute("type", "text");
            search.setAttribute("placeholder", "search");
        }
        searchBar();

        let searchitem = document.createElement("p");
        let startSellingNow = document.createElement("input");
        startSellingNow.setAttribute("class", "startSellingNow");
        startSellingNow.setAttribute("type", "button");
        startSellingNow.setAttribute("value", "Start Selling Now");

        function formAppend() {
            form.appendChild(allProduct);
            form.appendChild(search);
            form.appendChild(startSellingNow);
            header.appendChild(form);
        }
        formAppend();

        search.onkeyup = () => {
            searchitem.textContent = search.value;
            form.appendChild(searchitem);
        } 
        startSellingNow.addEventListener('click', () => {
            alert("Sell your item")
        });
    }
    form();
};
header();

function imageDescription() {
    let outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "div");
    let innerDivOne = document.createElement("div");
    let innerDivtwo = document.createElement("div");
    innerDivOne.setAttribute("class", "div1");
    innerDivtwo.setAttribute("class", "a2");
    let innerDivFirst = document.createElement("div");
    innerDivFirst.setAttribute("class", "a1")
    let innerDivSecond = document.createElement("div");
    innerDivSecond.setAttribute("class", "a1")
    let innerDivThird = document.createElement("div");
    innerDivThird.setAttribute("class", "a1")
    var imageFirst = document.createElement('img');
    imageFirst.setAttribute("src", "Rectangle.jpg")
    innerDivFirst.appendChild(imageFirst);
    var imageSecond = document.createElement('img');
    imageSecond.setAttribute("src", "Rectangle-1.jpg")
    innerDivSecond.appendChild(imageSecond);
    var imagethird = document.createElement('img');
    imagethird.setAttribute("src", "Rectangle-2.jpg")
    innerDivThird.appendChild(imagethird);
    let atagTop = document.createElement('a')
    atagTop.setAttribute("id", "top")
    innerDivFirst.appendChild(atagTop);
    let imagefourth = document.createElement('img');
    imagefourth.setAttribute("class", "fullimage")
    imagefourth.setAttribute("src", "iphone.jpg")

    function appendImage() {
        innerDivtwo.appendChild(imagefourth);
        innerDivOne.appendChild(innerDivFirst);
        innerDivOne.appendChild(innerDivSecond);
        innerDivOne.appendChild(innerDivThird)
        outerDiv.appendChild(innerDivOne);
        outerDiv.appendChild(innerDivtwo);
        document.querySelector("body").appendChild(outerDiv);
    };
    appendImage();

    function fullImageShow() {
        imageFirst.addEventListener('click', function () {
            let temp = imageFirst.src;
            imageFirst.src = imagefourth.src;
            imagefourth.src = temp;
        });
        imageSecond.addEventListener('click', function () {
            let temp = imageSecond.src;
            imageSecond.src = imagefourth.src;
            imagefourth.src = temp;
        });
        imagethird.addEventListener('click', function () {
            let temp = imagethird.src;
            imagethird.src = imagefourth.src;
            imagefourth.src = temp;
        });
    }
    fullImageShow();

};
imageDescription();

function phoneDescription() {
    var rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "div2");
    var headingPara = document.createElement("h1");
    headingPara.textContent = "Apple Iphone 11 Pro Max";
    var similaritemsDivhead = document.createElement('div');
    var similarhead = document.createElement('div');
    var galleryhead = document.createElement('div');
    var descriptionhead = document.createElement('div');

    function phoneViewsAdd() {
        var smallTexthead = document.createElement('small');
        var locationSvghead = document.createElement('img');
        var viewSvghead = document.createElement('img');
        locationSvghead.setAttribute("src", "location.png");
        locationSvghead.setAttribute("id", "locationimg");
        viewSvghead.setAttribute("src", "viewlogo.png");
        viewSvghead.setAttribute("id", "viewSvg");
        small_imghead = document.createElement('small');
        smallViewhead = document.createElement('small');
        smallViewhead.appendChild(viewSvghead)
        small_imghead.appendChild(locationSvghead);
        smallTexthead.setAttribute('id', 'fadesmallTexthead');
        similarhead.classList.add('similar1');
        similaritemsDivhead.classList.add('padd1');
        galleryhead.classList.add('gallery1');
        descriptionhead.classList.add('des1')
        var currentViews = "12,354"
        smallTexthead.append(small_imghead, ' 5 miles way ', smallViewhead, currentViews);
        descriptionhead.append(smallTexthead);
        galleryhead.append(descriptionhead);
        similarhead.append(galleryhead);
        similaritemsDivhead.append(similarhead);
        rightDiv.appendChild(headingPara);
        rightDiv.appendChild(similaritemsDivhead);
    }
    phoneViewsAdd();

    function aboutPhone() {
        rightDiv.appendChild(document.createElement("br"));
        let descriptionPara = document.createElement("p");
        descriptionPara.textContent = "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007."
        rightDiv.appendChild(descriptionPara);
    }
    aboutPhone();

    function priceShow() {
        let price = document.createElement("h3");
        price.textContent = "$5999.99";
        rightDiv.appendChild(price)
    }
    priceShow();

    function labelColor() {
        let labelColor = document.createElement("label");
        labelColor.setAttribute("for", "color");
        labelColor.textContent = "Color:"
        rightDiv.appendChild(labelColor);
        let redbutton = document.createElement("input");
        let greenbutton = document.createElement("input");
        let blackbutton = document.createElement("input");
        let graybutton = document.createElement("input");
        let color = document.createElement("span");
        rightDiv.appendChild(document.createElement("br"));
        redbutton.setAttribute("type", "button");
        redbutton.setAttribute("id", "colorred");
        rightDiv.appendChild(redbutton);
        greenbutton.setAttribute("type", "button");
        greenbutton.setAttribute("id", "colorgreen");
        rightDiv.appendChild(greenbutton);
        blackbutton.setAttribute("type", "button");
        blackbutton.setAttribute("id", "colorblack");
        rightDiv.appendChild(blackbutton);
        graybutton.setAttribute("type", "button");
        graybutton.setAttribute("id", "colorgray");
        rightDiv.appendChild(graybutton);
        rightDiv.appendChild(document.createElement("br"));
        rightDiv.appendChild(document.createElement("br"));
        let delivery = document.createElement("label");
        delivery.textContent = "Delivery"
        rightDiv.appendChild(delivery);
        rightDiv.appendChild(document.createElement("br"));

        function colorbuttonclick() {
            let imagefourth = document.querySelector(".fullimage");
            redbutton.addEventListener('click', function () {
                redbutton.classList.add('red');
                greenbutton.classList.remove('green');
                graybutton.classList.remove('pink');
                blackbutton.classList.remove('yellow');
                color.innerHTML = "Red color selected";
                imagefourth.src = "red.jpg";
                labelColor.appendChild(color);
            })

            greenbutton.addEventListener('click', function () {
                greenbutton.classList.add('green');
                redbutton.classList.remove('red');
                blackbutton.classList.remove('yellow');
                graybutton.classList.remove('pink');
                color.innerHTML = "Green color selected";
                imagefourth.src = "green.jpg";
                labelColor.appendChild(color);
            })

            blackbutton.addEventListener('click', function () {
                blackbutton.classList.add('yellow');
                redbutton.classList.remove('red');
                greenbutton.classList.remove('green');
                graybutton.classList.remove('pink');
                color.innerHTML = "Black color selected";
                imagefourth.src = "iphone.jpg";
                labelColor.appendChild(color);
            })

            graybutton.addEventListener('click', function () {
                graybutton.classList.add('pink');
                redbutton.classList.remove('red');
                greenbutton.classList.remove('green');
                blackbutton.classList.remove('yellow');
                color.innerHTML = "Gray color selected";
                imagefourth.src = "gray.jpg";
                labelColor.appendChild(color);
            })
        };
        colorbuttonclick();
    };
    labelColor();

    function storepickupbutton() {
        let storepickupbutton = document.createElement("input");
        storepickupbutton.setAttribute("type", "button");
        storepickupbutton.setAttribute("id", "storepicup");
        storepickupbutton.setAttribute("value", "Store pickup");
        rightDiv.appendChild(storepickupbutton);
        storepickupbutton.addEventListener('click', () => {
            alert("Store pickup your item")
        });
    }
    storepickupbutton();

    function deliverybutton() {
        let deliverybutton = document.createElement("input");
        deliverybutton.setAttribute("type", "button");
        deliverybutton.setAttribute("id", "delivery");
        deliverybutton.setAttribute("value", "Delivery");
        rightDiv.appendChild(deliverybutton);

        deliverybutton.addEventListener('click', () => {
            alert("delivered your item")
        });
    }
    deliverybutton();

    rightDiv.appendChild(document.createElement("br"));
    rightDiv.appendChild(document.createElement("br"));

    function quantity() {
        let quantity = document.createElement("label");
        quantity.textContent = "Quantity"
        rightDiv.appendChild(quantity);
        rightDiv.appendChild(document.createElement("br"));
        let decrementbutton = document.createElement("input");
        decrementbutton.setAttribute("type", "button");
        decrementbutton.setAttribute("id", "decrement");
        decrementbutton.setAttribute("value", "-");
        rightDiv.appendChild(decrementbutton);
        let numberspan = document.createElement("p")
        numberspan.setAttribute("id", "output-area")
        let x = "0";
        numberspan.textContent = x;
        rightDiv.appendChild(numberspan);
        let incrementbutton = document.createElement("input");
        incrementbutton.setAttribute("type", "button");
        incrementbutton.setAttribute("id", "increment");
        incrementbutton.setAttribute("value", "+");
        rightDiv.appendChild(incrementbutton);
        let value = document.querySelector('#output-area');

        incrementbutton.onclick = () => {
            document.getElementById('output-area').innerHTML = ++ x;
        } 
        decrementbutton.onclick = () => {
            if (x > 0) {
                document.getElementById('output-area').innerHTML = -- x;
            }
        }
    }
    quantity();

    rightDiv.appendChild(document.createElement("br"));
    rightDiv.appendChild(document.createElement("br"));

    function deliveryDescription() {
        let deliverydesc = document.createElement("span");
        deliverydesc.setAttribute("id", "deliverydesc")
        deliverydesc.textContent = "Delivery: $50 ";
        rightDiv.appendChild(deliverydesc)
        let deliverydesc1 = document.createElement("span");
        deliverydesc1.textContent = "  (2-3 business days, $40 Shipping)"
        rightDiv.appendChild(deliverydesc1)
        rightDiv.appendChild(document.createElement("br"));
        rightDiv.appendChild(document.createElement("br"));
        let deliverydesc2 = document.createElement("span");
        deliverydesc2.setAttribute("id", "deliverydesc")
        deliverydesc2.textContent = "to:";
        rightDiv.appendChild(deliverydesc2);
        let networkLink = document.createElement("a");
        networkLink.setAttribute("href", "");
        networkLink.setAttribute("id", "networkLink");
        networkLink.textContent = "India, Punjab";
        rightDiv.appendChild(networkLink);
    }
    deliveryDescription();

    rightDiv.appendChild(document.createElement("br"));
    rightDiv.appendChild(document.createElement("br"));

    function buyNowButton() {
        let buyNowButton = document.createElement("button");
        buyNowButton.textContent = "Buy Now";
        buyNowButton.setAttribute("id", "buyNow");
        rightDiv.appendChild(buyNowButton);

        buyNowButton.addEventListener('click', () => {
            alert("Thank you for .....buy");
            buyNowButton.style.backgroundColor = "#DDBCB5";
            buyNowButton.textContent = "Bought"
            buyNowButton.style.fontSize = "18px"
        });
    }
    buyNowButton();

    let makeOfferButton = document.createElement("button");
    makeOfferButton.textContent = "Make an Offer";
    makeOfferButton.setAttribute("id", "makeOffer");
    rightDiv.appendChild(makeOfferButton);

    function boxModel() {
        var myModel = document.createElement("div");
        myModel.setAttribute("id", "myModal");
        myModel.setAttribute("class", "modal");
        var modalContent = document.createElement("div");
        modalContent.setAttribute("class", "modal-content");
        var modalHeader = document.createElement("div");
        modalHeader.setAttribute("class", "modal-header");
        var spanmodel = document.createElement("span");

        function closeButton() {
            spanmodel.setAttribute("class", "close");
            spanmodel.textContent = "X";
            modalHeader.appendChild(spanmodel);
        }
        closeButton()

        var para = document.createElement("h2");
        let enterOffer = document.createElement("input");
        enterOffer.setAttribute("class", "enterOffer")
        enterOffer.setAttribute("placeholder", "Enter your offer");
        para.textContent = "Make Offer";

        modalHeader.appendChild(para);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(enterOffer);
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));

        function deliveryBoxButton() {
            let deliveryBox = document.createElement("label");
            deliveryBox.textContent = "Delivery"
            modalContent.appendChild(deliveryBox);
        }
        deliveryBoxButton();
        modalContent.appendChild(document.createElement("br"));

        function storepickupbuttonBox() {
            let storepickupbuttonBox = document.createElement("input");
            storepickupbuttonBox.setAttribute("type", "button");
            storepickupbuttonBox.setAttribute("id", "storepicupBox");
            storepickupbuttonBox.setAttribute("value", "Store pickup");

            storepickupbuttonBox.addEventListener('click', () => {
                alert("store pickup your item")
                storepickupbuttonBox.style.backgroundColor = "rgb(91, 209, 245)";
            });
            modalContent.appendChild(storepickupbuttonBox);
        }
        storepickupbuttonBox();

        function deliverybuttonBox() {
            let deliverybuttonBox = document.createElement("input");
            deliverybuttonBox.setAttribute("type", "button");
            deliverybuttonBox.setAttribute("id", "deliveryBox");
            deliverybuttonBox.setAttribute("value", "Delivery");

            deliverybuttonBox.addEventListener('click', () => {
                deliverybuttonBox.style.backgroundColor = "rgb(91, 209, 245)";
                alert("Deliver your item at home")
            });
            modalContent.appendChild(deliverybuttonBox);
        }
        deliverybuttonBox();
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));

        function deliveryTo() {
            let deliveryTo = document.createElement("label");
            deliveryTo.textContent = "Delivery to"
            modalContent.appendChild(deliveryTo);
            modalContent.appendChild(document.createElement("br"));
            modalContent.appendChild(document.createElement("br"));
            let enterDeliveryTo = document.createElement("input");
            enterDeliveryTo.setAttribute("class", "enterOffer")
            enterDeliveryTo.setAttribute("placeholder", "Name 5 miles way");
            modalContent.appendChild(enterDeliveryTo);
        }
        deliveryTo();

        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));
        let deliverydescBox = document.createElement("span");
        deliverydescBox.setAttribute("id", "deliverydescBox")
        deliverydescBox.textContent = "Delivery: $50 ";
        modalContent.appendChild(deliverydescBox)
        let deliverydescBox1 = document.createElement("span");
        deliverydescBox1.setAttribute("id", "spanbox")
        deliverydescBox1.textContent = "  (2-3 business days, $40 Shipping)"
        modalContent.appendChild(deliverydescBox1)
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));
        let payment = document.createElement("label");
        payment.textContent = "Payment"
        modalContent.appendChild(payment);
        modalContent.appendChild(document.createElement("br"));
        let online = document.createElement("input");
        online.setAttribute("type", "button");
        online.setAttribute("id", "online");
        online.setAttribute("value", "Online");

        online.addEventListener('click', () => {
            online.style.backgroundColor = "rgb(91, 209, 245)";
        });
        modalContent.appendChild(online);
        let payInPerson = document.createElement("input");
        payInPerson.setAttribute("type", "button");
        payInPerson.setAttribute("id", "payInPerson");
        payInPerson.setAttribute("value", "Pay in Person");

        payInPerson.addEventListener('click', () => {
            payInPerson.style.backgroundColor = "rgb(91, 209, 245)";
        });
        modalContent.appendChild(payInPerson);
        modalContent.appendChild(document.createElement("br"));
        modalContent.appendChild(document.createElement("br"));
        let submitOffer = document.createElement("button");
        submitOffer.setAttribute("class", "submitOffer")
        submitOffer.textContent = "Submit Offer";

        submitOffer.addEventListener('click', () => {
            alert("offer accepted....congratulations you have saved 10₹")
            submitOffer.style.backgroundColor = "rgb(91, 209, 245)";
        });
        modalContent.appendChild(submitOffer);
        myModel.appendChild(modalContent);
        rightDiv.appendChild(myModel);

        makeOfferButton.addEventListener('click', function () {
            myModel.style.display = "block";
        })
        spanmodel.addEventListener('click', function () {
            myModel.style.display = "none";
        })
        window.addEventListener('click', function (event) {
            if (event.target == myModel) {
                myModel.style.display = "none";
            }
        })
        document.querySelector("body").appendChild(rightDiv);
    };
    boxModel()
}
phoneDescription();

function hrtag() {
    let hrtag = document.createElement("hr");
    hrtag.setAttribute("id", "hrtag");
    document.querySelector("body").appendChild(hrtag);
};
hrtag();

function aboutproduct() {
    let aboutproduct = document.createElement("p");
    aboutproduct.setAttribute("id", "aboutproduct");
    aboutproduct.textContent = "About the product ";
    document.querySelector("body").appendChild(aboutproduct);
};
aboutproduct()

function sellerdetails() {
    let sellerdetails = document.createElement("div");
    sellerdetails.setAttribute("id", "sellerdetails")
    let imagespan = document.createElement("span");
    imagespan.setAttribute("id", "userinfo1");
    let userimage = document.createElement("img");
    userimage.setAttribute("src", "photo.jpg");
    userimage.setAttribute("alt", "image");
    userimage.setAttribute("id", "userimage");
    imagespan.appendChild(userimage);
    imagespan.appendChild(document.createElement("br"));
    imagespan.appendChild(document.createElement("br"));
    sellerdetails.appendChild(imagespan);
    let userspan = document.createElement("span");
    userspan.setAttribute("id", "userinfo2");
    let userspanid = document.createElement("h3");
    userspanid.textContent = "@Store_Name";
    let userspanrating = document.createElement("p");
    userspanrating.textContent = "4.9 (15484 reviews)"
    let userspanadd = document.createElement("p");
    userspanadd.textContent = "5 miles way";
    userspan.appendChild(userspanid);
    userspan.appendChild(userspanrating);
    userspan.appendChild(userspanadd);
    userspan.appendChild(document.createElement("br"));
    userspan.appendChild(document.createElement("br"));
    sellerdetails.appendChild(userspan);
    let salespan = document.createElement("span");
    salespan.setAttribute("id", "userinfo3");
    let salespanid = document.createElement("h3");
    salespanid.textContent = "55444";
    let salespanitem = document.createElement("p");
    salespanitem.textContent = "items for sale"
    salespan.appendChild(salespanid);
    salespan.appendChild(salespanitem);
    salespan.appendChild(document.createElement("br"));
    salespan.appendChild(document.createElement("br"));
    salespan.appendChild(document.createElement("br"));
    sellerdetails.appendChild(salespan);
    sellerdetails.appendChild(salespan);
    let salespan1 = document.createElement("span");
    salespan1.setAttribute("id", "userinfo4");
    let salespanid1 = document.createElement("h3");
    salespanid1.textContent = "10000";
    let salespanitem1 = document.createElement("p");
    salespanitem1.textContent = "total sales"
    salespan1.appendChild(salespanid1);
    salespan1.appendChild(salespanitem1);
    salespan1.appendChild(document.createElement("br"));
    salespan1.appendChild(document.createElement("br"));
    salespan1.appendChild(document.createElement("br"));
    sellerdetails.appendChild(salespan1);
    let contactspan = document.createElement("span");
    contactspan.setAttribute("id", "userinfo5");
    let contactspanbutton = document.createElement("button");
    contactspanbutton.setAttribute("id", "visitstore")
    contactspanbutton.textContent = "Contact";
    contactspan.appendChild(contactspanbutton);
    contactspan.appendChild(document.createElement("br"));
    contactspan.appendChild(document.createElement("br"));
    contactspan.appendChild(document.createElement("br"));
    contactspan.appendChild(document.createElement("br"));
    contactspan.appendChild(document.createElement("br"));
    contactspan.appendChild(document.createElement("br"));
    sellerdetails.appendChild(contactspan);

    contactspanbutton.addEventListener('click', () => {
        contactspanbutton.style.backgroundColor = "orange"
        alert("Thank you for Contact")
    });
    let storespan = document.createElement("span");
    storespan.setAttribute("id", "userinfo6");
    let storespanbutton = document.createElement("button");
    storespanbutton.setAttribute("id", "visitstore")
    storespanbutton.textContent = "Visit Store";
    storespan.appendChild(storespanbutton);
    storespan.appendChild(document.createElement("br"));
    storespan.appendChild(document.createElement("br"));
    storespan.appendChild(document.createElement("br"));
    storespan.appendChild(document.createElement("br"));
    storespan.appendChild(document.createElement("br"));
    storespan.appendChild(document.createElement("br"));
    sellerdetails.appendChild(storespan);

    storespanbutton.addEventListener('click', () => {
        storespanbutton.style.backgroundColor = "orange"
        alert("Thank you for Visit Store")
    });
    document.querySelector("body").appendChild(sellerdetails);
};
sellerdetails();

function similaritems() {
    let similaritems = document.createElement("b");
    similaritems.setAttribute("id", "aboutproduct");
    similaritems.textContent = "Similar Items ";
    document.querySelector("body").appendChild(similaritems);
};
similaritems();

var imageGellery = [
    {
        phone: 'iphone1.jpg',
        price: 1000,
        phoneVersion: 11,
        view: 1000
    },
    {
        phone: 'iphone2.jpg',
        price: 1010,
        phoneVersion: 12,
        view: 2000
    },
    {
        phone: 'iphone3.jpg',
        price: 800,
        phoneVersion: 13,
        view: 1520
    },
    {
        phone: 'iphone4.jpg',
        price: 1200,
        phoneVersion: 14,
        view: 2242
    }, {
        phone: 'iphone5.jpg',
        price: 1199,
        phoneVersion: 10,
        view: 242
    }, {
        phone: 'iphone6.jpg',
        price: 1099,
        phoneVersion: 9,
        view: 885
    }, {
        phone: 'iphone7.jpg',
        price: 1599,
        phoneVersion: 8,
        view: 5422
    }, {
        phone: 'iphone8.jpg',
        price: 1111,
        phoneVersion: 7,
        view: 2424
    }, {
        phone: 'iphone.jpg',
        price: 1399,
        phoneVersion: 11,
        view: 122
    }, {
        phone: 'gray.jpg',
        price: 2199,
        phoneVersion: 12,
        view: 105358
    }, {
        phone: 'green.jpg',
        price: 2299,
        phoneVersion: 11,
        view: 1112
    }, {
        phone: 'red.jpg',
        price: 3399,
        phoneVersion: 11,
        view: 1036
    },

]

function gellery() {
    imageGellery.forEach(function (element) {
        var similaritemsDiv = document.createElement('div'),
            similar = document.createElement('div'),
            gallery = document.createElement('div'),
            similarImg = document.createElement('img'),
            description = document.createElement('div'),
            h4 = document.createElement('h4'),
            smallText = document.createElement('small'),
            smallText1 = document.createElement('small'),
            locationSvg = document.createElement('img'),
            viewSvg = document.createElement('img');
        locationSvg.setAttribute("src", "location.png");
        h4.setAttribute("id", "similarItemh4");
        locationSvg.setAttribute("id", "locationimg");
        viewSvg.setAttribute("src", "viewlogo.png");
        viewSvg.setAttribute("id", "viewSvg");
        small_img = document.createElement('small');
        small_del = document.createElement('small');
        smallView = document.createElement('small');
        let deliverylogo = document.createElement("img");
        deliverylogo.classList.add("deliverylogo");
        deliverylogo.setAttribute("src", "deliverylogo.png")
        smallView.appendChild(viewSvg)
        small_img.appendChild(locationSvg);
        small_del.appendChild(deliverylogo);
        similarImg.src = element.phone;

        similarImg.addEventListener('click', function () {
            let imagefourth = document.querySelector(".fullimage");
            let tempImg = similarImg.src;
            imagefourth.src = similarImg.src;
            imagefourth.src = tempImg;

        })

        similarImg.addEventListener('click', function () {
            let price = document.querySelector("h3");
            price.textContent = '$' + element.price;
            currentViews = element.view;
            let headingPara = document.querySelector("h1");
            headingPara.textContent = "Apple Iphone " + element.phoneVersion + " Pro Max";
        })
        similarImg.addEventListener('click', () => window.scrollTo({top: 10, behavior: 'smooth'}));

        function addPhoneType() {
            h4.innerHTML = 'Apple Iphone ' + element.phoneVersion + ' Pro Max';
            let pricedesc = document.createElement('p');
            pricedesc.textContent = Math.random();
            pricedesc.classList.add('pricedesc');
            smallText.setAttribute('id', 'fadeSmallText');
            smallText1.setAttribute('id', 'fadesmallText1');
            similar.classList.add('similar');
            similaritemsDiv.classList.add('similaritemsDiv');
            gallery.classList.add('gallery');
            similarImg.classList.add('similarImgage');
            description.classList.add('imageDescription');
            let phonePrice = element.price
            smallText.append(small_img, ' 5 miles way ', smallView, " " + element.view);
            smallText1.append('$', phonePrice, small_del,);
            description.append(h4, smallText, smallText1);
            gallery.append(similarImg, description);
            similar.append(gallery);
            similaritemsDiv.append(similar);
            document.querySelector("body").appendChild(similaritemsDiv);
        }
        addPhoneType();
    });
};
gellery();

function hrtag1() {
    let hrtag1 = document.createElement("hr");
    hrtag1.setAttribute("id", "hrtag1");
    document.querySelector("body").appendChild(hrtag1);
};
hrtag1();

function footer() {
    let footer = document.createElement("footer");
    let footerDiv = document.createElement("div");
    footerDiv.classList.add("footercontent");

    function footerlogoCreate() {
        let footerleftlogo = document.createElement("div");
        footerleftlogo.classList.add("footerleftlogo");
        let footerleftlogo1 = document.createElement("div");
        footerleftlogo1.classList.add("footerlogo1");
        let footerLeftimg1 = document.createElement("img");
        footerLeftimg1.setAttribute("src", "delivery.svg");
        footerLeftimg1.setAttribute("id", "footerLeftimg1")
        footerleftlogo1.append(footerLeftimg1);
        footerleftlogo.append(footerleftlogo1);
        let footerleftlogo2 = document.createElement("div");
        footerleftlogo2.classList.add("footerlogo2");
        let footerLeftimg2 = document.createElement("img");
        footerLeftimg2.setAttribute("src", "moneyback.svg");
        footerLeftimg2.setAttribute("id", "footerLeftimg2")
        footerleftlogo2.append(footerLeftimg2);
        footerleftlogo.append(footerleftlogo2);
        let footerleftlogo3 = document.createElement("div");
        footerleftlogo3.classList.add("footerlogo3");
        let footerLeftimg3 = document.createElement("img");
        footerLeftimg3.setAttribute("src", "24h.svg");
        footerLeftimg3.setAttribute("id", "footerLeftimg3")
        footerleftlogo3.append(footerLeftimg3);
        footerleftlogo.append(footerleftlogo3);
        footerDiv.append(footerleftlogo);
        footer.append(footerDiv);
    }
    footerlogoCreate();

    function footerlogoDescription() {
        let footerLeftBox = document.createElement("div");
        footerLeftBox.classList.add("left_box");
        let footerLeftBox1 = document.createElement("div");
        footerLeftBox1.classList.add("upper");
        let footerLeftBox1topic1 = document.createElement("div");
        footerLeftBox1topic1.classList.add("topic");
        footerLeftBox1topic1.textContent = "Fast & Free delivery";

        footerLeftBox1topic1.addEventListener('click', function () {
            alert("open new link");
        });
        let p_1 = document.createElement("p");
        p_1.textContent = "Free delivery for all orders over $200"
        footerLeftBox1.append(footerLeftBox1topic1, p_1);
        footerLeftBox.append(footerLeftBox1);
        let footerLeftBox2 = document.createElement("div");
        footerLeftBox2.classList.add("lower");
        let footerLeftBox2topic = document.createElement("div");
        footerLeftBox2topic.classList.add("topic");
        footerLeftBox2topic.textContent = "Money back guarantee";
        footerLeftBox1topic1.textContent = "Fast & Free delivery";

        footerLeftBox2topic.addEventListener('click', function () {
            alert("open new link");
        });
        let p_2 = document.createElement("p");
        p_2.textContent = "We return money within 30 day"
        footerLeftBox2.append(footerLeftBox2topic, p_2);
        footerLeftBox.append(footerLeftBox2);
        let footerLeftBox3 = document.createElement("div");
        footerLeftBox3.classList.add("lower1");
        let footerLeftBox3topic = document.createElement("div");
        footerLeftBox3topic.classList.add("topic");

        footerLeftBox3topic.addEventListener('click', function () {
            alert("open new link");
        });
        footerLeftBox3topic.textContent = "24/7 customer support";
        let p_3 = document.createElement("p");
        p_3.textContent = "Frindly 24/7 customer support"
        footerLeftBox3.append(footerLeftBox3topic, p_3);
        footerLeftBox.append(footerLeftBox3);
        footerDiv.append(footerLeftBox);
        footer.append(footerDiv);
    }
    footerlogoDescription();

    function onlineshopping() {
        let footermiddleBox = document.createElement("div");
        footermiddleBox.classList.add("middlebox");
        let footermiddleBox1 = document.createElement("div");
        footermiddleBox1.classList.add("topic");
        footermiddleBox1.textContent = "Online Shopping";
        footermiddleBox.append(footermiddleBox1);
        let onlineshopinglist = [
            'Electronics',
            'Vacancies',
            'Real State',
            'Vehicles',
            'Other Services',
            'Free Stuffs'
        ];

        onlineshopinglist.forEach(function (e) {
            let footermiddleBox1topic1 = document.createElement("p");
            footermiddleBox1topic1.textContent = e;
            footermiddleBox.append(footermiddleBox1topic1);
            footermiddleBox1topic1.addEventListener('click', function () {
                alert("open new link");
            });
            footerDiv.append(footermiddleBox);
            footer.append(footerDiv);
        });
    }
    onlineshopping();

    function useFullLink() {
        let footerRighrBox = document.createElement("div");
        footerRighrBox.classList.add("rightbox");
        let footerRighrBox1 = document.createElement("div");
        footerRighrBox1.classList.add("topic");
        footerRighrBox1.textContent = "Usefull Link";
        footerRighrBox.append(footerRighrBox1)

        let useFullLink = [
            'Home',
            'About Us',
            'term and Condition',
            'FAQ',
            'Shipping and Returns',
            'Contact Us',
            'privacy policies'
        ];
        useFullLink.forEach(function (link) {
            let footerRighrBox1topic1 = document.createElement("p");
            footerRighrBox1topic1.textContent = link;
            footerRighrBox1topic1.addEventListener('click', function () {
                alert("open new link");
            });
            footerRighrBox.append(footerRighrBox1topic1);
            footerDiv.append(footerRighrBox);
            footer.append(footerDiv);
        });
    };
    useFullLink();

    function copyright() {
        let copyright = document.createElement("div");
        copyright.classList.add("copyright");

        function copyrightContent() {
            let copyrightContent = document.createElement("div");
            copyrightContent.classList.add("copyrightContent");
            copyrightContent.textContent = "silos.com copyright 2021. All right reserved";
            copyright.append(copyrightContent);
            footer.append(copyright);
        }
        copyrightContent();

        function copyrightlogo() {
            let copyrightlogo = document.createElement("div");
            copyrightlogo.classList.add("copyrightlogo");
            let copyrightlogoFacebook = document.createElement("img");
            copyrightlogoFacebook.setAttribute("src", "facebook.svg");
            copyrightlogoFacebook.classList.add("facebookImageLogo")
            copyrightlogo.append(copyrightlogoFacebook);
            let copyrightlogotwitter = document.createElement("img");
            copyrightlogotwitter.setAttribute("src", "twitter.svg");
            copyrightlogotwitter.classList.add("twitterImageLogo")
            copyrightlogo.append(copyrightlogotwitter);
            let copyrightlogoinstagram = document.createElement("img");
            copyrightlogoinstagram.setAttribute("src", "instagram.svg");
            copyrightlogoinstagram.classList.add("instagramImageLogo")
            copyrightlogo.append(copyrightlogoinstagram);
            copyright.append(copyrightlogo);
            footer.append(copyright);

            copyrightlogoFacebook.addEventListener('click', () => {
                alert("facebook open")
            })
            copyrightlogotwitter.addEventListener('click', () => {
                alert("twitter open")
            })
            copyrightlogoinstagram.addEventListener('click', () => {
                alert("Instagram open")
            })
        }
        copyrightlogo();
        document.querySelector("body").appendChild(footer);
    }
    copyright();
}
footer();
