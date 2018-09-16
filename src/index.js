import './style/main.css'

const schedule = document.createElement('img')

schedule.classList.add('schedule')
schedule.src = './assets/table.png'

document.body.appendChild(schedule)

document.body.ontouchmove = (event) => {
    event.preventDefault()
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration)
        }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
        })
    })
}