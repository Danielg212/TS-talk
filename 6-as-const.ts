// why can't we pass our object's paremter to function that expects a string?
const routes ={
    home: '/',
    about: '/about',
    contact: '/contact'
}

const goToRoute = (route: '/' | '/about' | '/contact') => {}


goToRoute(routes.home) 

























//type Routes = (typeof routes)[keyof typeof routes]

