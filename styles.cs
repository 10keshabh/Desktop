body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.light-theme {
    background-color: #ffffff;
    color: #333333;
}

.dark-theme {
    background-color: #121212;
    color: #ffffff;
}

.theme-toggle-container {
    position: fixed;
    top: 20px;
    right: 20px;
}

.theme-toggle {
    display: none;
}

.theme-switch {
    cursor: pointer;
    width: 50px;
    height: 25px;
    background-color: #ccc;
    border-radius: 25px;
    position: relative;
    transition: background-color 0.3s ease;
}

.theme-switch:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    top: 0;
    left: 0;
    transition: transform 0.3s ease;
}

.theme-toggle:checked + .theme-switch {
    background-color: #ff5252;
}

.theme-toggle:checked + .theme-switch:before {
    transform: translateX(25px);
}

.valentine-content {
    text-align: center;
}

img {
    max-width: 100%;
    height: auto;
}
