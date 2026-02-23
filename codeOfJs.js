 let interviewList=[];
    let rejectedList=[];
    let getJobSection=document.getElementById('jobSection')

    let totalJob=document.getElementById('totalCount')
    let interviewCount=document.getElementById('interviewCount');
    let rejectedCount=document.getElementById('rejectedCount');
 
    // btn get
    const allJobBtn=document.getElementById('allJobCount');
    const interJobBtn=document.getElementById('interJobCount');
    const rejeJobBtn=document.getElementById('rejeJobCount');
// main
const mainContainer=document.getElementById('mainContainer')
const interView=document.getElementById("interView")
const rejectedView=document.getElementById('rejectedView')

// side total job
const sideTotalJob=document.getElementById('sideTotalJob')



  function calculateCount(){
    sideTotalJob.innerText=getJobSection.children.length
        const joblength=getJobSection.children.length;
    totalJob.innerText=joblength
interviewCount.innerText=interviewList.length;
rejectedCount.innerText=rejectedList.length;

  }
  calculateCount()
// class count


function btnToggle(id){
    allJobBtn.classList.remove('bg-black','text-white')
    interJobBtn.classList.remove('bg-gray-400','text-white')
    rejeJobBtn.classList.remove('bg-gray-400','text-white')
    // add
    allJobBtn.classList.add('bg-gray-400')
    interJobBtn.classList.add('bg-gray-400')
    rejeJobBtn.classList.add('bg-gray-400')

const selected=document.getElementById(id)
selected.classList.remove('bg-gray-400','text-white')
selected.classList.add('bg-black','text-white')


if(id=='interJobCount'){
       
    sideTotalJob.innerText = `${interviewCount.innerText=interviewList.length} of ${sideTotalJob.innerText=getJobSection.children.length}`;

    if(interviewList.length<=0){
   interView.innerHTML=`
       <div class="bg-white shadow rounded-md text-center p-10">
    <img class="mx-auto" src="./jobs.png" alt="">
    <h1 class="text-[#002C5C] text-2xl font-semibold">No Jobs Available</h1>
    <p class="">Check back soon for new job opportunities</p>
</div>
        `
}

getJobSection.classList.add('hidden')
rejectedView.classList.add('hidden')
interView.classList.remove('hidden')

}
else if(id=='allJobCount'){
    sideTotalJob.innerText=`${getJobSection.children.length}`
   getJobSection.classList.remove('hidden')
interView.classList.add('hidden') 
rejectedView.classList.add('hidden') 
}
else if(id=='rejeJobCount'){
        sideTotalJob.innerText = `${rejectedCount.innerText=rejectedList.length} of ${sideTotalJob.innerText=getJobSection.children.length}`;

    if(rejectedList.length<=0){
      rejectedView.innerHTML=`
       <div class="bg-white shadow rounded-md text-center p-10">
    <img class="mx-auto" src="./jobs.png" alt="">
     <h1 class="text-[#002C5C] text-2xl font-semibold">No Jobs Available</h1>
    <p>Check back soon for new job opportunities</p>
</div>
        `
}
   getJobSection.classList.add('hidden')
interView.classList.add('hidden') 
rejectedView.classList.remove('hidden') 

} 
}
mainContainer.addEventListener('click',function(event){

    if(event.target.classList.contains('inter')){
        const parentNode=event.target.parentNode.parentNode;
const comName=parentNode.querySelector('.comName').innerText;
const regName=parentNode.querySelector('.regName').innerText;
const jobCatName=parentNode.querySelector('.jobCatName').innerText;
const statu=parentNode.querySelector('.statu').innerText;
const discription=parentNode.querySelector('.discription').innerText;
const inter=parentNode.querySelector('.inter').innerText;
const reject=parentNode.querySelector('.reject').innerText;


const status=parentNode.querySelector('.statu')
status.innerText='INTERVIEW'
status.classList.add('btn','btn-accent','btn-outline')
const jobInfo={
    comName,
    regName,
    jobCatName,
    statu:status.innerText,
    discription,
    inter,
    reject
}
rejectedList=rejectedList.filter(item=>item.comName!=jobInfo.comName)
const addAndGetComName=interviewList.find(job=>job.comName==jobInfo.comName)

if(!addAndGetComName){
    interviewList.push(jobInfo)
}

  calculateCount();
 createInterviewSection();
createRejectSection();
    }
   else if(event.target.classList.contains('reject')){
        const parentNode=event.target.parentNode.parentNode;
const comName=parentNode.querySelector('.comName').innerText;
const regName=parentNode.querySelector('.regName').innerText;
const jobCatName=parentNode.querySelector('.jobCatName').innerText;
const statu=parentNode.querySelector('.statu').innerText;
const discription=parentNode.querySelector('.discription').innerText;
const inter=parentNode.querySelector('.inter').innerText;
const reject=parentNode.querySelector('.reject').innerText;


const status=parentNode.querySelector('.statu')
status.innerText='REJECTED'
status.classList.add('btn','btn-error')
const jobInfo={
    comName,
    regName,
    jobCatName,
    statu:status.innerText,
    discription,
    inter,
    reject
}
interviewList=interviewList.filter(item=>item.comName!=jobInfo.comName)
const addAndGetComName=rejectedList.find(job=>job.comName==jobInfo.comName)


if(!addAndGetComName){
    rejectedList.push(jobInfo)
  
} 


 calculateCount();
 createInterviewSection();
createRejectSection(); 
    }
    else if(event.target.classList.contains('deleteBtn')){
        const deleteBtn=event.target.closest('.flex');
        const deleteElement=deleteBtn.querySelector('.comName').innerText;
       interviewList=interviewList.filter(item=>item.comName!==deleteElement)
       rejectedList=rejectedList.filter(item=>item.comName!==deleteElement)
       deleteBtn.remove();
       calculateCount();
 createInterviewSection();
createRejectSection();
    }


})



// interview function
function createInterviewSection(){

     if(interviewList.length<=0){
          
        interView.innerHTML=`
       <div class="bg-white shadow rounded-md text-center">
    <img class="mx-auto" src="./jobs.png" alt="">
     <h1 class="text-[#002C5C] text-2xl font-semibold">No Jobs Available</h1>
    <p>Check back soon for new job opportunities</p>
</div>
        `
        return;
     }
  interView.innerHTML=``;
    for(const inters of interviewList){
       const div=document.createElement('div')
      
    div.innerHTML=`
      <div class="flex justify-between bg-white shadow p-8 rounded-xl">
            <div class=" space-y-5">
            <div>
                 <h1 class="text-[#002C5C] font-semibold text-xl comName">${inters.comName}</h1>
             <p class="text-[#64748B] regName">${inters.regName}</p>
            </div>
            <p class="text-[#64748B] jobCatName">${inters.jobCatName}</p>
            <div>
                <p class="text-[#002C5C] btn btn-accent font-medium statu">${inters.statu}</p>
                <p class="text-[#323B49] discription">${inters.discription}</p>
            </div>
            <div>
                <button class="btn btn-accent btn-outline font-bold inter">INTERVIEW</button>
                <button class="btn btn-error btn-outline font-bold reject">REJECTED</button>
            </div>
        </div>
         <i class="fa-solid fa-trash-can deleteBtn"></i>   

        </div>
    `
    interView.append(div)
    }
    
}
function createRejectSection(){
        rejectedView.innerHTML=``;
      if(rejectedList.length<=0){
        rejectedView.innerHTML=`
        <div class="bg-white shadow rounded-md text-center">
    <img class="mx-auto" src="./jobs.png" alt="">
    <h1 class="text-[#002C5C] text-2xl font-semibold">No Jobs Available</h1>
    <p>Check back soon for new job opportunities</p>
</div>
        `
        return;
     }

    for(const rejects of rejectedList){
       const div=document.createElement('div')
      
    div.innerHTML=`
      <div class="flex justify-between bg-white shadow p-8 rounded-xl">
            <div class=" space-y-5">
            <div>
                 <h1 class="text-[#002C5C] font-semibold text-xl comName">${rejects.comName}</h1>
             <p class="text-[#64748B] regName">${rejects.regName}</p>
            </div>
            <p class="text-[#64748B] jobCatName">${rejects.jobCatName}</p>
            <div>
                <p class="text-[#002C5C] btn btn-error font-medium statu">${rejects.statu}</p>
                <p class="text-[#323B49] discription">${rejects.discription}</p>
            </div>
            <div>
                <button class="btn btn-accent btn-outline font-bold inter">INTERVIEW</button>
                <button class="btn btn-error btn-outline font-bold reject">REJECTED</button>
            </div>
        </div>
         <i class="fa-solid fa-trash-can deleteBtn"></i>   
       
        </div>
    `
    rejectedView.append(div)
    }
    
}