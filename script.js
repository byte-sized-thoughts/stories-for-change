body, html {
  margin: 0;
  padding: 0;
  font-family: 'Overlock', Arial, sans-serif;
}

#navbar {
  position: fixed;
  width: 100%;
  background-color: #181d23;
}

.menu-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
}

.menu-container.active {
  display: block;
}

.container {
  text-align: center;
  padding: 50px;
}

#welcome-section {
  height: 100vh;
  background-color: #202736;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #fafafa;
}
