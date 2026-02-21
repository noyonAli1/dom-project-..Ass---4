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
const filtersection = document.getElementById('filter-section');


function calculatorCounttotal() {
    totaljobs.innerText = allCards.children.length;
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

allCards.addEventListener('click', function (event) {
    if (event.target.classList.contains('interviewCountBtn')) {
        const parenNode = event.target.parentNode.parentNode;

        const first = parenNode.querySelector('.first').innerText;
        const firstt = parenNode.querySelector('.firstt').innerText;
        const firsttt = parenNode.querySelector('.firsttt').innerText;
        const NotAppliedBtn = parenNode.querySelector('.NotAppliedBtn').innerText;
        
        const firstttt = parenNode.querySelector('.firstttt').innerText;


        const cardInfo = {
            first,
            firstt,
            firsttt,
            NotAppliedBtn,
            firstttt
        }

        const firstace = InterviewList.find(item => item.first == cardInfo.first);
        NotAppliedBtn.innerText = ''
        if (!firstace) {
            InterviewList.push(cardInfo)
        }
        renderTriving()
    }


})
function renderTriving() {
    filtersection.innerHTML = 'Interview';
    for (let Interview of InterviewList) {
        console.log(Interview);

        let div = document.createElement('div');
        div.className = 'py-1'
        div.innerHTML = `
          <div class="flex justify-between border border-gray-300 border-l-cyan-300 border-l-3 rounded-sm shadow-lg bg-[#FFFFFF] md:gap-9  ">
                <div class="p-5">
                    <h2 class="first   text-[#002C5C] text-[20px] font-semibold">Mobile First Corp</h2>
                    <p class=" firstt text-[#64748B]">React Native Developer</p>
                    <p class="firsttt py-4 text-[#64748B]">Remote . Full-time . $130,000 - $175,000</p>
                    <button id="NotAppliedBtn" class="btn btn-active">Not Applied</button>
                    <p class="py-3 firstttt">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>
                    <div class="flex gap-5">
                        <button id="interviewCountBtn" class="btn btn-outline btn-success">interview</button>
                        <button id="RejectedCountBtn" class="btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>
                <div>
                    <p id="deleteBnt"
                        class="p-2 mt-4 mr-4 border border-slate-300 rounded-full hover:bg-red-500 duration-500 cursor-pointer hover:text-gray-50">
                        <i class="fa-regular fa-trash-can"></i>
                    </p>
                </div>
            </div>

      `
      filtersection.appendChild(div);
    }
}

























