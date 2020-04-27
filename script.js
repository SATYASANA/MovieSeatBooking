const container=document.querySelector(".container")
const seats=document.querySelectorAll(".row.seat:not(.occupied)")
const count=document.getElementById('count')
const price=document.getElementById('movie')
const movieSelect=document.getElementById('movie')
let ticketPrice=+movieSelect.value

//update total count
function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount=selectedSeats.length
    count.innerText=selectedSeatsCount
    total.innerText=selectedSeatsCount*ticketPrice
}

movieSelect.addEventListener('change',e=>{
    ticketPrice=+e.target.value
    updateSelectedCount()
})
//seat click event
container.addEventListener('click',e=>{
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})
