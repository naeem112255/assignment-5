// clear function
const myButton = document.getElementById('clear');
const myDiv = document.getElementById('history');
myButton.addEventListener('click', function() {
 
  myDiv.style.display = 'none';
});
// love button
// love-1
let count = 0;
const loveBtn = document.getElementById("hart-one");
const loveCount = document.getElementById("love");
loveBtn.addEventListener("click", () => {
  count++;
  loveCount.textContent = count;
  alert('Added Fevorite')
});
// love-2
const hartTwo =document.getElementById("hart-two")
const loveCounter =document.getElementById("love")
hartTwo.addEventListener('click',()=>{
  count++;
  loveCounter.textContent =count;
   alert('Added Fevorite')
})
// love-3
const hartThree =document.getElementById("hart-three")
const loveCounted =document.getElementById("love")
hartThree.addEventListener('click',()=>{
  count++;
  loveCounted.textContent =count;
   alert('Added Fevorite')
})
// love-4
const hartFour =document.getElementById("hart-four")
const oveCounted =document.getElementById("love")
hartFour.addEventListener('click',()=>{
  count++;
  oveCounted.textContent =count;
   alert('Added Fevorite')
})
// love-5
const hartFive =document.getElementById("hart-five")
const lovedCounted =document.getElementById("love")
hartFive.addEventListener('click',()=>{
  count++;
  lovedCounted.textContent =count;
   alert('Added Fevorite')
})
// love-6
const hartSix =document.getElementById("hart-six")
const ab =document.getElementById("love")
hartSix.addEventListener('click',()=>{
  count++;
  ab.textContent =count;
   alert('Added Fevorite')
})
// love-7
const hartSave =document.getElementById("hart-seven")
const bc =document.getElementById("love")
hartSave.addEventListener('click',()=>{
  count++;
  bc.textContent =count;
   alert('Added Fevorite')
})
// love-8
const hartEight =document.getElementById("hart-eight")
const cd =document.getElementById("love")
hartEight.addEventListener('click',()=>{
  count++;
  cd.textContent =count;
   alert('Added Fevorite')
})
// love-9
const hartNine =document.getElementById("hart-nine")
const de =document.getElementById("love")
hartNine.addEventListener('click',()=>{
  count++;
  de.textContent =count;
   alert('Added Fevorite')
})
// love button end----------------------------------------------------------------------------------------------------
// copy button----------------------------------------------------------------------------------------------------
// copy-1
let copy = 0;
const copyBtn =document.getElementById("logo-copy")
const copyCount =document.getElementById("copy")
copyBtn.addEventListener('click',()=>{
  copy++;
  copyCount.textContent = copy;
  
})
// copy-2
const copyTwo =document.getElementById("copy-two")
const copyCounter =document.getElementById("copy")
copyTwo.addEventListener('click',()=>{
  copy++;
  copyCounter.textContent = copy;
 
})
// copy-3
const copyThree =document.getElementById("copy-three")
const copyCounted =document.getElementById("copy")
copyThree.addEventListener('click',()=>{
  copy++;
  copyCounted.textContent = copy;
  
})
// copy-4
const copyFour =document.getElementById("copy-four")
const opyCounted =document.getElementById("copy")
copyFour.addEventListener('click',()=>{
  copy++;
  opyCounted.textContent = copy;
 
})
// copy-5
const copyFive =document.getElementById("copy-five")
const a =document.getElementById("copy")
copyFive.addEventListener('click',()=>{
  copy++;
  a.textContent = copy;
 
})
// copy-6
const copySix =document.getElementById("copy-six")
const b =document.getElementById("copy")
copySix.addEventListener('click',()=>{
  copy++;
  b.textContent = copy;
  
})
// copy-7
const copySave =document.getElementById("copy-seven")
const c =document.getElementById("copy")
copySave.addEventListener('click',()=>{
  copy++;
  c.textContent = copy;
  
})
// copy-8
const copyEight =document.getElementById("copy-eight")
const d =document.getElementById("copy")
copyEight.addEventListener('click',()=>{
  copy++;
  d.textContent = copy;
 
})
// copy-9
const copyNine =document.getElementById("copy-nine")
const e =document.getElementById("copy")
copyNine.addEventListener('click',()=>{
  copy++;
  e.textContent = copy;
  
})
 document.addEventListener('click', async function (e) {
      const btn = e.target.closest('.copyedly');
      if (!btn) return;

      const card = btn.closest('.abba');
      if (!card) return;

      const textEl = card.querySelector('.text-copy');
      const textToCopy = textEl ? textEl.innerText.trim() : '';

      if (!textToCopy) {
        announce("Nothing to copy.");
        return;
      }

      // disable button briefly to avoid double clicks
      btn.disabled = true;
      const originalLabel = btn.innerText;

      try {
        // Preferred modern API (works on HTTPS / localhost)
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
          showCopiedFeedback(btn, originalLabel, "Copied to clipboard");
        } else {
          // fallback for older browsers
          fallbackCopy(textToCopy, btn, originalLabel);
        }
      } catch (err) {
        // If clipboard.writeText failed, try fallback
        fallbackCopy(textToCopy, btn, originalLabel);
      } finally {
        // re-enable after a short delay is handled inside showCopiedFeedback / fallbackCopy
      }
    });

    function fallbackCopy(text, btn, originalLabel) {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        // avoid scrolling to bottom
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(ta);
        if (successful) {
          showCopiedFeedback(btn, originalLabel, "Copied (fallback)");
        } else {
          announce("Copy failed.");
          btn.disabled = false;
          btn.innerText = originalLabel;
        }
      } catch (err) {
        announce("Copy failed.");
        btn.disabled = false;
        btn.innerText = originalLabel;
      }
    }

    function showCopiedFeedback(btn, originalLabel, announceText) {
      btn.classList.add('copied');
      btn.innerText = 'Copied!';
      announce(announceText);
      // restore after 1.5s
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerText = originalLabel;
        btn.disabled = false;
      }, 1500);
    }

    function announce(message) {
      const status = document.getElementById('copyStatus');
      if (status) {
        status.textContent = message;
      } else {
        // fallback visual alert
        alert(message);
      }
    }
// copy button end------------------------------------------------------------------------------------------
// call section------------------------------------------------------------------------------
const national = document.getElementById('national');
const police = document.getElementById('police');
const fire = document.getElementById('Fire');
const ambuLance =document.getElementById('ambulance');
const women =document.getElementById('women');
const anti =document.getElementById('anti');
const electricity = document.getElementById('Electricity')
const brac = document.getElementById('brac')
const rail =document.getElementById('Railway')
const now = new Date();
const hours = now.getHours();     // 0-23
const minutes = now.getMinutes(); // 0-59
// const seconds = now.getSeconds();

// call-1
let coins = 100;

const coinBtn = document.getElementById('coin-btn');
const callOne = document.getElementById('call-one');
callOne.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞National Emergency Number 999")
     const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    
    police.style.display ='none'
    fire.style.display ='none'
    ambuLance.style.display ='none'
    women.style.display ='none'
    anti.style.display ='none'
    electricity.style.display ='none'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-2
const x = document.getElementById('coin-btn');
const callTwo = document.getElementById('call-two');
callTwo.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Police helpline Number 999")
      const now = new Date();
    document.getElementById("clock-one").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='none'
    ambuLance.style.display ='none'
    women.style.display ='none'
    anti.style.display ='none'
    electricity.style.display ='none'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-3
const r = document.getElementById('coin-btn');
const callThree = document.getElementById('call-three');
callThree.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Fire Service Number 999")
      const now = new Date();
    document.getElementById("clock-two").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='none'
    women.style.display ='none'
    anti.style.display ='none'
    electricity.style.display ='none'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-4
const u = document.getElementById('coin-btn');
const callFour = document.getElementById('call-four');
callFour.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Ambulance Service Number 1994-999999")
      const now = new Date();
    document.getElementById("clock-three").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='block'
    women.style.display ='none'
    anti.style.display ='none'
    electricity.style.display ='none'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-5
const q = document.getElementById('coin-btn');
const callFive = document.getElementById('call-five');
callFive.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Women & child Helpline 109")
      const now = new Date();
    document.getElementById("clock-four").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='block'
    women.style.display ='block'
    anti.style.display ='none'
    electricity.style.display ='none'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-6
const o = document.getElementById('coin-btn');
const callSix = document.getElementById('call-six');
callSix.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Anti-corruption Helpline 106")
      const now = new Date();
    document.getElementById("clock-five").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='block'
    women.style.display ='block'
    anti.style.display ='block'
    electricity.style.display ='none'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-7
const y = document.getElementById('coin-btn');
const callSave = document.getElementById('call-seven');
callSave.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Electricity Helpline 16216")
      const now = new Date();
    document.getElementById("clock-six").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='block'
    women.style.display ='block'
    anti.style.display ='block'
    electricity.style.display ='block'
    brac.style.display ='none'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-8
const z = document.getElementById('coin-btn');
const callEight = document.getElementById('call-eight');
callEight.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Brac Helpline 16445")
      const now = new Date();
    document.getElementById("clock-seven").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='block'
    women.style.display ='block'
    anti.style.display ='block'
    electricity.style.display ='block'
    brac.style.display ='block'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
// call-9
const j = document.getElementById('coin-btn');
const callNine = document.getElementById('call-nine');
callNine.addEventListener('click',()=>{
  if(coins >=20){
    coins -= 20;
    coinBtn.textContent = coins;
    alert(" 📞Bangladesh Railway Helpline 163")
      const now = new Date();
    document.getElementById("clock-eight").innerText = now.toLocaleTimeString();
    national.style.display ='block'
    police.style.display ='block'
    fire.style.display ='block'
    ambuLance.style.display ='block'
    women.style.display ='block'
    anti.style.display ='block'
    electricity.style.display ='block'
    brac.style.display ='block'
    rail.style.display ='none'
  }
  else{
    alert("❌you have don't enough coin to call")
  }
})
   

 
   