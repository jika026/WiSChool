const cross = document.querySelector('.close');
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav');
    const hamburger = document.querySelector('#header .home .burger-nav');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('menu-bar');
        cross.classList.toggle('show')
    });
    cross.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('menu-bar');
        cross.classList.toggle('show')
    });
    
});

// acoount registration and login 
const page = document.querySelector('body')
const userIcon = document.querySelector('.user-icon');
userIcon.addEventListener('click', () => {
});
document.addEventListener('DOMContentLoaded', () => {
    const logIn = document.querySelector('#header .account .login');
    const signUp = document.querySelector('#header .account .register');
    signUp.addEventListener('click', () => {
        page.innerHTML = `
        <section class="registration">
        <h1>SIGN UP</h1>
        
        <form id="signup-form" autocomplete="on">
            <input type="text" name="username" placeholder="Your name">
            <input type="email" name="email" placeholder="Email Adress" required>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Confirm Password" required>
            <input type="submit" placeholder="Signup" class="submit-btn" name="submit">
        </form>
    </section>
        `;
    });
    logIn.addEventListener('click', () => {
        page.innerHTML = `
        <section class="registration">
        <h1>SIGN IN</h1>
        
        <form id="login-form" autocomplete="on">
            <input type="email" name="email" placeholder="Email Adress" required>
            <input type="password" placeholder="Password" required>
            <input type="submit" placeholder="Login" class="submit-btn" name="submit">

        </form>
    </section>
        `;

    });
    
});

