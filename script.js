let InterviewList = [];
let RejectedList = [];







//3 ta count hobe akhane first je 3 ta count ace
//ata holo jobs
const totaljobs = document.getElementById('total-len-jobs');
const total = document.getElementById('total');
const InterviewCount = document.getElementById('InterviewCount');
const RejectedCount = document.getElementById('RejectedCount');

///je 3 ta buttob ace 

const allfilterbtn = document.getElementById('all-filter-btn');
const Interviewfilterbtn = document.getElementById('Interview-filter-btn');
const Rejectedfilterbtn = document.getElementById('Rejected-filter-btn');


//akhon all card 
const allCards = document.getElementById('allCards');


function calculatorCounttotal() {
   totaljobs .innerText = allCards.children.length;
    total.innerText = allCards.children.length;
    InterviewCount.innerText = InterviewList.length;
    RejectedCount.innerText = RejectedList.length;
}
calculatorCounttotal();


function toggleStyle(id) {

    allfilterbtn.classList.add('bg-gray-200', 'text-black');
    Interviewfilterbtn.classList.add('bg-gray-200', 'text-black');
    Rejectedfilterbtn.classList.add('bg-gray-200', 'text-black');

    allfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white');
    Interviewfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white');
    Rejectedfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white');


    const selected = document.getElementById(id)//this is the button that clicked for filter

    selected.classList.remove('bg-gray-200', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

}
