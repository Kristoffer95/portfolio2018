<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <img src="../../static/Me.png" alt="Kristoffer Gonzaga">
      <div class="info">
        <h2>Kristoffer Gonzaga</h2>
        <h3>Front-end Web Developer / Web Master</h3>

        <div class="navigation">
          <nav>
            <ul>
              <li v-for="navlink in navigations"
              :key="navlink.link">
                <router-link :to="navlink.link">
                  {{navlink.pageName}}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftSidebar',
  data () {
    return {
      navigations: [
        { pageName: 'Home', link: '/' },
        { pageName: 'About Me', link: '/about-me' },
        { pageName: 'Skills', link: '/skills' },
        { pageName: 'Projects', link: '/projects' },
        { pageName: 'Contacts', link: '/contacts' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  #sidebar {
    position: fixed;
    width: 332px;
    background-color: white;
    height: 100vh;
    box-shadow: 10px 0px 8px -6px rgba(0,0,0,0.65);
  }
  .sidebar-wrapper{
    position: relative;
    width: 100%;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    img{
      position: relative;
      width: 200px;
      margin-left: 50%;
      margin-top: -2%;
      transform: translate(-50%, 0);
    }
    h2 {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;
      line-height: 0px;
      margin-top: 30px;
    }
    h3 {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 11px;
      line-height: 11px
    }
    .navigation {
      nav ul {
        padding: 0;
        li {
          list-style: none;
          margin: 20px 0;
          &:first-child {
            margin-top: 30px;
          }
          a {
            text-decoration: none;
            font-weight: 500;
            color: black;
            &:hover {
              letter-spacing: 5px;
            }
          }
        }
      }
    }
  }
</style>
