//turn pages when user click previous or next button

const PageTurnBtn = document.querySelectorAll('.nextprev-btn');

PageTurnBtn.forEach((el, index) => {

    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex=20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                  pageTurn.style.zIndex=20+index;
            },500)
        }
    }

})

//when use click on contect me button

const pages=document.querySelectorAll('.book-page.page-right');
const contactmeBtn=document.querySelector('.btn.contact-me');

contactmeBtn.onclick=()=>{
    pages.forEach((page,index)=>{
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(()=>{
              page.style.zIndex=20+index;
            },500)

        },(index+1)*200+100);
    })
}


//create reverse index function

let totalPages=pages.length;
let pageNumber=0;

function reverseIndex()
{
 pageNumber--;
 if(pageNumber<0)
 {
    pageNumber=totalPages-1;
 }
}

//when back profile button click

const backprofileBtn=document.querySelector('.back-profile');
backprofileBtn.onclick=()=>{
    pages.forEach((_,index)=>{
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex=10+index;
            }, 500);

        }, (index+1)*200+100);
    })
}

//opening animation

const coverRight=document.querySelector('.cover.cover-right');
const pageLeft=document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
},2100);

setTimeout(() => {
    coverRight.style.zIndex=-1;
},2800);


//opening animation (page left or profile page animation)

setTimeout(() => {
    pageLeft.style.zIndex=20;
},3200);


//opening animation (all page right animation)
pages.forEach((_,index)=>{
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex=10+index;
        }, 500);

    }, (index+1)*200+2100);
})