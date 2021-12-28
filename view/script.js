let socket = io()
let body = document.getElementById('bod')
let clk = document.getElementById('clicks')

body.onclick = ()=>{
    socket.emit('click')
}
let clicks = 0;

socket.on('clicks', (clickse)=>{
    clicks = clickse
    clk.innerText = clicks
})